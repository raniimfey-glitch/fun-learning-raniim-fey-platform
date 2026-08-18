/*
================================================================
  Service Worker — التعلم الممتع | رنيم فاي
  Version      : 4.0
  Strategy     : Cache-First للأصول الثابتة + Network-First للـ API
  Developer    : Samira Abdessadok "رنيم فاي"
  Copyright (c) 2026 Samira Abdessadok. All Rights Reserved.
================================================================
*/

const CACHE_NAME    = 'ranimfey-v4';
const OFFLINE_PAGE  = '/offline.html';

// الأصول التي تُخزَّن فور التثبيت
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  '/icon-144.png',
  '/icon-96.png',
  '/offline.html'
];

/* ══ INSTALL ══ */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(PRECACHE_ASSETS).catch(err => {
        console.warn('[SW] Pre-cache partial fail:', err);
      });
    })
  );
  self.skipWaiting();
});

/* ══ ACTIVATE — حذف الكاشات القديمة ══ */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k !== CACHE_NAME)
          .map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

/* ══ FETCH — استراتيجية مختلطة ══ */
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // تجاهل طلبات Firebase و Gstatic وغيرها من النطاقات الخارجية
  if (
    url.origin !== self.location.origin ||
    url.pathname.startsWith('/api/') ||
    request.method !== 'GET'
  ) {
    return; // دع المتصفح يتعامل معها مباشرة
  }

  // أيقونات وملف manifest → Cache-First
  if (
    url.pathname.match(/\.(png|ico|json|svg|webp|jpg)$/) ||
    url.pathname === '/manifest.json'
  ) {
    event.respondWith(cacheFirst(request));
    return;
  }

  // HTML (الصفحات) → Network-First مع fallback للـ offline
  if (request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(networkFirstWithOffline(request));
    return;
  }

  // بقية الملفات → Stale-While-Revalidate
  event.respondWith(staleWhileRevalidate(request));
});

/* ── Cache-First ── */
async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return new Response('', { status: 503 });
  }
}

/* ── Network-First مع صفحة offline ── */
async function networkFirstWithOffline(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await caches.match(request);
    if (cached) return cached;
    const offline = await caches.match(OFFLINE_PAGE);
    return offline || new Response('<h1>غير متصل</h1>', {
      headers: { 'Content-Type': 'text/html; charset=utf-8' }
    });
  }
}

/* ── Stale-While-Revalidate ── */
async function staleWhileRevalidate(request) {
  const cache  = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  const networkPromise = fetch(request).then(response => {
    if (response.ok) cache.put(request, response.clone());
    return response;
  }).catch(() => null);
  return cached || await networkPromise || new Response('', { status: 503 });
}

/* ══ PUSH NOTIFICATIONS (مستقبلاً) ══ */
self.addEventListener('push', event => {
  if (!event.data) return;
  const data = event.data.json();
  event.waitUntil(
    self.registration.showNotification(data.title || 'التعلم الممتع', {
      body:    data.body    || 'إشعار جديد من رنيم فاي',
      icon:    '/icon-192.png',
      badge:   '/icon-96.png',
      dir:     'rtl',
      lang:    'ar',
      vibrate: [200, 100, 200],
      data:    { url: data.url || '/' }
    })
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data?.url || '/')
  );
});
