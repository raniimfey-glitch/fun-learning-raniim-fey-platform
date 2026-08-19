/*
================================================================
  Project      : التعلم الممتع | Fun Learning Platform
  File         : i18n.js — Internationalization (AR / EN / FR)
  Version      : 1.0
  Developer    : Samira Abdessadok "رنيم فاي"
  Copyright (c) 2026 Samira Abdessadok. All Rights Reserved.
  ACKNOWLEDGMENT: Developed with AI as assistive tool only.
================================================================
*/

const I18N = {

  /* ══════════════════════════════════════
     ARABIC — العربية (default)
  ══════════════════════════════════════ */
  ar: {
    dir: 'rtl', lang: 'ar',

    /* ── Topbar ── */
    logo_sub:         'التعلم الممتع',
    auth_login:       'دخول',
    sync_syncing:     'جارٍ المزامنة…',
    sync_synced:      'محفوظ ☁️',
    sync_offline:     'غير متصل',

    /* ── Burger Menu ── */
    bm_home:          'الواجهة الرئيسية',
    bm_about:         'عن المشروع',
    bm_screen:        'معاينة الشاشة',
    bm_lang:          'اللغة: عربية',
    bm_read:          'وضع القراءة',
    bm_journey:       'رحلتي',
    bm_login:         'تسجيل الدخول',
    sim_current:      'الحجم الحالي',
    sim_mobile:       'الهاتف (390px)',
    sim_tablet:       'اللوح الرقمي (768px)',
    read_dark:        'وضع الليل',
    read_light:       'وضع النهار',

    /* ── Hero ── */
    hero_eyebrow:     'منصة التطبيقات التعليمية التفاعلية',
    hero_title1:      'تعلّم اليوم بطريقة',
    hero_title2:      'ممتعة',
    hero_title3:      'وشيّقة',
    hero_desc:        '«بوابة تعليمية رقمية مستقلة متكاملة، تقدّم تطبيقات تعليمية تفاعلية باللغة العربية، موجَّهة لمتعلمي رياض الأطفال وكل مستويات المرحلة الابتدائية، وفق مناهج وزارة التربية الوطنية الجزائرية.»',
    hero_search_ph:   'ابحثي عن تطبيق في كل المستويات…',
    btn_all:          'الكل',
    btn_level_hint        : 'اختاري مستوىً أولاً',
    no_results_for        : 'لا توجد نتائج لـ',
    try_another           : 'جرّبي كلمة أخرى',
    progress_label        : 'تقدّمي:',
    btn_level:        'المستوى الدراسي',
    btn_activity:     'الأنشطة التعليمية',

    /* ── Levels ── */
    level_preschool:  'قسم التحضيري',
    level_year1:      'السنة الأولى',
    level_year2:      'السنة الثانية',
    level_year3:      'السنة الثالثة',
    level_year4:      'السنة الرابعة',
    level_year5:      'السنة الخامسة',

    /* ── Activities ── */
    act_arabic:       'اللغة العربية',
    act_math:         'الرياضيات',
    act_islamic:      'التربية الإسلامية',
    act_science:      'العلوم والتكنولوجيا',
    act_civic:        'التربية المدنية',
    act_history:      'التاريخ',
    act_geography:    'الجغرافيا',

    /* ── Apps View ── */
    apps_section:     'قسم التطبيقات',
    apps_count:       '{n} تطبيق',
    apps_empty:       'لا توجد تطبيقات لهذا الاختيار حتى الآن',
    apps_coming_soon: 'ستُضاف تطبيقات جديدة قريباً!',
    apps_search_hint: '{n} نتيجة من {total}',
    coming_soon_title:'قريباً في {activity}!',
    coming_soon_sub:  'نعمل بجدٍّ على تطوير تطبيقات تفاعلية خاصة بهذا المستوى والنشاط.\nترقّبي الإضافات الجديدة قريباً ✨',
    coming_soon_badge:'⏳ تحت التطوير',
    btn_preview:      'معاينة ←',
    btn_free:         '🆓 مجاني',
    btn_paid:         '💎 مدفوع',
    btn_unlocked:     '💎 مفتوح ✓',
    btn_soon:         '⏳ قريباً',
    btn_back:         '← رجوع',
    btn_share:        'مشاركة',
    btn_open_full:    'فتح كاملاً ↗',
    lbl_age:          '🎓',
    lbl_done:         'مكتمل ✓',
    progress_label:   'تقدّمي:',
    all_apps:         'جميع التطبيقات',
    all_apps_bc:      '🗂️ عرض كل التطبيقات',
    apps_of:          'تطبيقات',
    search_bc:        '🔍 بحث شامل في كل التطبيقات',
    search_result_title: 'نتائج البحث: «{q}»',
    subjects_label:   'المواد الدراسية المتاحة',

    /* ── Auth Modal ── */
    auth_title:       'رنيم فاي | التعلم الممتع',
    tab_login:        'دخول',
    tab_signup:       'حساب جديد',
    lbl_email:        'البريد الإلكتروني',
    lbl_password:     'كلمة السر',
    lbl_name:         'الاسم',
    ph_email:         'example@email.com',
    ph_pass:          '••••••••',
    ph_pass_new:      '6 أحرف على الأقل',
    ph_name:          'اسمك',
    btn_do_login:     '🔓 دخول',
    btn_do_signup:    '✅ إنشاء حساب',

    /* ── Unlock Modal ── */
    unlock_title:     'تطبيق مدفوع',
    unlock_sub:       'أدخلي كلمة السر للوصول إلى هذا التطبيق',
    ph_unlock:        'كلمة سر التطبيق',
    btn_unlock:       '🔓 فتح التطبيق',
    btn_cancel:       'إلغاء',
    unlock_err:       '❌ كلمة السر غير صحيحة',

    /* ── About Modal ── */
    about_title:      'عن المشروع',
    about_brand:      'رنيم فاي | التعلم الممتع',
    about_p1:         'مشروع تعليمي رقمي مستقل من تصميم وتطوير المعلمة سميرة عبد الصّدوق، يهدف إلى توفير بيئة تعليمية تفاعلية باللغة العربية لأطفال رياض الأطفال والمرحلة الابتدائية وفق المنهج الجزائري.',
    about_p2:         'تمت برمجة جميع التطبيقات بأسلوب يراعي الخصائص التطورية للمتعلمين، مع الاعتماد على التعزيز الإيجابي والتغذية الراجعة الفورية.',
    about_copy:       '© 2026 Samira Abdessadok "رنيم فاي" — All Rights Reserved.',
    about_ai:         'Developed with AI as assistive tool only.',

    /* ── Admin ── */
    admin_title:      '⚙️ لوحة تحكم رنيم فاي',
    admin_pass_ph:    'كلمة السر',
    admin_enter:      'دخول',
    admin_pass_err:   '❌ كلمة السر غير صحيحة',
    tab_apps:         '📋 التطبيقات',
    tab_form:         '✏️ إضافة/تعديل',
    tab_stats:        '📊 إحصائيات',
    tab_backup:       '💾 نسخ احتياطي',
    form_new:         '➕ إضافة تطبيق جديد',
    ph_app_name:      'اسم التطبيق *',
    ph_app_desc:      'وصف مختصر *',
    ph_app_url:       'رابط التطبيق (https://...)',
    ph_age:           'الفئة العمرية',
    ph_icon:          'أيقونة (إيموجي)',
    lbl_paid:         '💎 تطبيق مدفوع (يتطلب كلمة سر)',
    ph_paid_pass:     'كلمة السر الخاصة بهذا التطبيق *',
    btn_save:         '💾 حفظ',
    btn_cancel_form:  'إلغاء',
    btn_export:       'تصدير',
    btn_import:       'استيراد',
    btn_reset:        'استعادة',
    export_title:     'تصدير البيانات',
    export_desc:      'تحميل كل التطبيقات كملف JSON',
    import_title:     'استيراد البيانات',
    import_desc:      'استبدال البيانات بملف JSON محفوظ',
    reset_title:      'استعادة الافتراضي',
    reset_desc:       'العودة إلى قائمة التطبيقات الأصلية',
    stats_total:      'إجمالي التطبيقات',
    stats_free:       'مجاني',
    stats_paid:       'مدفوع',
    stats_col1:       'المستوى / النشاط',
    stats_col2:       'عدد التطبيقات',
    drag_hint:        '⬆⬇ اسحبي الصفوف لإعادة الترتيب — يُحفظ تلقائياً',

    /* ── Footer ── */
    footer:           'التعلم الممتع — سميرة عبد الصّدوق — جميع الحقوق محفوظة © 2026',

    /* ── Toasts ── */
    toast_login_ok:   '✅ تم تسجيل الدخول',
    toast_signup_ok:  '✅ تم إنشاء الحساب',
    toast_logout:     'تم تسجيل الخروج',
    toast_cloud_save: '☁️ تم الحفظ في السحابة',
    toast_cloud_load: '☁️ تم تحميل البيانات من السحابة',
    toast_unlocked:   '✅ تم فتح التطبيق',
    toast_share:      '🔗 تم نسخ رابط «{name}»',
    toast_reorder:    '↕️ تم إعادة الترتيب',
    toast_deleted:    '🗑️ تم الحذف',
    toast_journey:    '🏆 رحلتي — قريباً!',
    toast_login_req:  'سجّلي دخولك أولاً',
    toast_installed:  '🎉 تم تثبيت التعلم الممتع على جهازك',
    toast_update:     '🔄 تحديث جديد متاح — أعيدي تحميل الصفحة',
    btn_install:      '📲 تثبيت التطبيق',
  },

  /* ══════════════════════════════════════
     ENGLISH
  ══════════════════════════════════════ */
  en: {
    dir: 'ltr', lang: 'en',

    /* ── Topbar ── */
    logo_sub:         'Fun Learning',
    auth_login:       'Login',
    sync_syncing:     'Syncing…',
    sync_synced:      'Saved ☁️',
    sync_offline:     'Offline',

    /* ── Burger Menu ── */
    bm_home:          'Home',
    bm_about:         'About the Project',
    bm_screen:        'Screen Preview',
    bm_lang:          'Language: English',
    bm_read:          'Reading Mode',
    bm_journey:       'My Journey',
    bm_login:         'Login',
    sim_current:      'Current size',
    sim_mobile:       'Mobile (390px)',
    sim_tablet:       'Tablet (768px)',
    read_dark:        'Dark Mode',
    read_light:       'Light Mode',

    /* ── Hero ── */
    hero_eyebrow:     'Interactive Educational Apps Platform',
    hero_title1:      'Learn Today in a',
    hero_title2:      'Fun',
    hero_title3:      '& Exciting Way',
    hero_desc:        '"An independent, comprehensive digital educational gateway offering interactive Arabic-language apps for kindergarten through all primary school levels, aligned with the Algerian National Curriculum."',
    hero_search_ph:   'Search for an app across all levels…',
    btn_all:          'All',
    btn_level_hint        : 'Select a level first',
    no_results_for        : 'No results for',
    try_another           : 'Try another word',
    progress_label        : 'Progress:',
    btn_level:        'Grade Level',
    btn_activity:     'Subject',

    /* ── Levels ── */
    level_preschool:  'Pre-School (KG)',
    level_year1:      'Year 1',
    level_year2:      'Year 2',
    level_year3:      'Year 3',
    level_year4:      'Year 4',
    level_year5:      'Year 5',

    /* ── Activities ── */
    act_arabic:       'Arabic Language',
    act_math:         'Mathematics',
    act_islamic:      'Islamic Education',
    act_science:      'Science & Technology',
    act_civic:        'Civic Education',
    act_history:      'History',
    act_geography:    'Geography',

    /* ── Apps View ── */
    apps_section:     'Apps Library',
    apps_count:       '{n} Apps',
    apps_empty:       'No apps found for this selection yet',
    apps_coming_soon: 'New apps coming soon!',
    apps_search_hint: '{n} results out of {total}',
    coming_soon_title:'Coming soon in {activity}!',
    coming_soon_sub:  'We are working hard to develop interactive apps for this level and subject.\nStay tuned for new additions soon ✨',
    coming_soon_badge:'⏳ Under Development',
    btn_preview:      'Preview →',
    btn_free:         '🆓 Free',
    btn_paid:         '💎 Paid',
    btn_unlocked:     '💎 Unlocked ✓',
    btn_soon:         '⏳ Coming Soon',
    btn_back:         '← Back',
    btn_share:        'Share',
    btn_open_full:    'Open Full ↗',
    lbl_age:          '🎓',
    lbl_done:         'Completed ✓',
    progress_label:   'Progress:',
    all_apps:         'All Apps',
    all_apps_bc:      '🗂️ Showing all apps',
    apps_of:          'Apps:',
    search_bc:        '🔍 Searching all apps',
    search_result_title: 'Search results: «{q}»',
    subjects_label:   'Available Subjects',

    /* ── Auth Modal ── */
    auth_title:       'Raniim Fey | Fun Learning',
    tab_login:        'Login',
    tab_signup:       'Sign Up',
    lbl_email:        'Email Address',
    lbl_password:     'Password',
    lbl_name:         'Name',
    ph_email:         'example@email.com',
    ph_pass:          '••••••••',
    ph_pass_new:      'At least 6 characters',
    ph_name:          'Your name',
    btn_do_login:     '🔓 Login',
    btn_do_signup:    '✅ Create Account',

    /* ── Unlock Modal ── */
    unlock_title:     'Paid App',
    unlock_sub:       'Enter the password to access this app',
    ph_unlock:        'App password',
    btn_unlock:       '🔓 Unlock App',
    btn_cancel:       'Cancel',
    unlock_err:       '❌ Incorrect password',

    /* ── About Modal ── */
    about_title:      'About the Project',
    about_brand:      'Raniim Fey | Fun Learning',
    about_p1:         'An independent digital educational project designed and developed by teacher Samira Abdessadok, aimed at providing an interactive Arabic-language learning environment for kindergarten and primary school children, aligned with the Algerian national curriculum.',
    about_p2:         'All apps are programmed with attention to learners\' developmental characteristics, relying on positive reinforcement and immediate feedback.',
    about_copy:       '© 2026 Samira Abdessadok "Raniim Fey" — All Rights Reserved.',
    about_ai:         'Developed with AI as assistive tool only.',

    /* ── Admin ── */
    admin_title:      '⚙️ Raniim Fey Control Panel',
    admin_pass_ph:    'Password',
    admin_enter:      'Enter',
    admin_pass_err:   '❌ Incorrect password',
    tab_apps:         '📋 Apps',
    tab_form:         '✏️ Add / Edit',
    tab_stats:        '📊 Statistics',
    tab_backup:       '💾 Backup',
    form_new:         '➕ Add New App',
    ph_app_name:      'App name *',
    ph_app_desc:      'Short description *',
    ph_app_url:       'App URL (https://...)',
    ph_age:           'Target age',
    ph_icon:          'Icon (emoji)',
    lbl_paid:         '💎 Paid App (requires password)',
    ph_paid_pass:     'App-specific password *',
    btn_save:         '💾 Save',
    btn_cancel_form:  'Cancel',
    btn_export:       'Export',
    btn_import:       'Import',
    btn_reset:        'Restore',
    export_title:     'Export Data',
    export_desc:      'Download all apps as a JSON file',
    import_title:     'Import Data',
    import_desc:      'Replace data with a saved JSON file',
    reset_title:      'Restore Defaults',
    reset_desc:       'Return to the original app list',
    stats_total:      'Total Apps',
    stats_free:       'Free',
    stats_paid:       'Paid',
    stats_col1:       'Level / Subject',
    stats_col2:       'App Count',
    drag_hint:        '⬆⬇ Drag rows to reorder — saved automatically',

    /* ── Footer ── */
    footer:           'Fun Learning — Samira Abdessadok — All Rights Reserved © 2026',

    /* ── Toasts ── */
    toast_login_ok:   '✅ Logged in successfully',
    toast_signup_ok:  '✅ Account created',
    toast_logout:     'Logged out',
    toast_cloud_save: '☁️ Saved to cloud',
    toast_cloud_load: '☁️ Data loaded from cloud',
    toast_unlocked:   '✅ App unlocked',
    toast_share:      '🔗 Link copied: «{name}»',
    toast_reorder:    '↕️ Reordered successfully',
    toast_deleted:    '🗑️ Deleted',
    toast_journey:    '🏆 My Journey — Coming soon!',
    toast_login_req:  'Please log in first',
    toast_installed:  '🎉 Fun Learning installed on your device',
    toast_update:     '🔄 New update available — reload the page',
    btn_install:      '📲 Install App',
  },

  /* ══════════════════════════════════════
     FRENCH — Français
  ══════════════════════════════════════ */
  fr: {
    dir: 'ltr', lang: 'fr',

    /* ── Topbar ── */
    logo_sub:         'Apprentissage Amusant',
    auth_login:       'Connexion',
    sync_syncing:     'Synchronisation…',
    sync_synced:      'Enregistré ☁️',
    sync_offline:     'Hors ligne',

    /* ── Burger Menu ── */
    bm_home:          'Accueil',
    bm_about:         'À propos du projet',
    bm_screen:        'Aperçu de l\'écran',
    bm_lang:          'Langue: Français',
    bm_read:          'Mode de lecture',
    bm_journey:       'Mon parcours',
    bm_login:         'Connexion',
    sim_current:      'Taille actuelle',
    sim_mobile:       'Mobile (390px)',
    sim_tablet:       'Tablette (768px)',
    read_dark:        'Mode nuit',
    read_light:       'Mode jour',

    /* ── Hero ── */
    hero_eyebrow:     'Plateforme d\'applications éducatives interactives',
    hero_title1:      'Apprenez aujourd\'hui d\'une manière',
    hero_title2:      'amusante',
    hero_title3:      'et passionnante',
    hero_desc:        '«Une passerelle éducative numérique indépendante et complète, proposant des applications éducatives interactives en langue arabe, destinées aux élèves de la maternelle à tous les niveaux du primaire, conformément aux programmes du Ministère de l\'Éducation Nationale Algérienne.»',
    hero_search_ph:   'Rechercher une application dans tous les niveaux…',
    btn_all:          'Tout',
    btn_level_hint        : 'Sélectionnez un niveau d'abord',
    no_results_for        : 'Aucun résultat pour',
    try_another           : 'Essayez un autre mot',
    progress_label        : 'Progression:',
    btn_level:        'Niveau scolaire',
    btn_activity:     'Matière',

    /* ── Levels ── */
    level_preschool:  'Classe préparatoire',
    level_year1:      '1ère année',
    level_year2:      '2ème année',
    level_year3:      '3ème année',
    level_year4:      '4ème année',
    level_year5:      '5ème année',

    /* ── Activities ── */
    act_arabic:       'Langue arabe',
    act_math:         'Mathématiques',
    act_islamic:      'Éducation islamique',
    act_science:      'Sciences et technologie',
    act_civic:        'Éducation civique',
    act_history:      'Histoire',
    act_geography:    'Géographie',

    /* ── Apps View ── */
    apps_section:     'Bibliothèque d\'applications',
    apps_count:       '{n} Applications',
    apps_empty:       'Aucune application trouvée pour cette sélection',
    apps_coming_soon: 'Nouvelles applications bientôt disponibles!',
    apps_search_hint: '{n} résultats sur {total}',
    coming_soon_title:'Bientôt dans {activity}!',
    coming_soon_sub:  'Nous travaillons sur des applications interactives pour ce niveau et cette matière.\nRestez à l\'écoute pour les nouvelles additions ✨',
    coming_soon_badge:'⏳ En développement',
    btn_preview:      'Aperçu →',
    btn_free:         '🆓 Gratuit',
    btn_paid:         '💎 Payant',
    btn_unlocked:     '💎 Déverrouillé ✓',
    btn_soon:         '⏳ Bientôt',
    btn_back:         '← Retour',
    btn_share:        'Partager',
    btn_open_full:    'Ouvrir ↗',
    lbl_age:          '🎓',
    lbl_done:         'Terminé ✓',
    progress_label:   'Progression:',
    all_apps:         'Toutes les applications',
    all_apps_bc:      '🗂️ Afficher toutes les applications',
    apps_of:          'Applications:',
    search_bc:        '🔍 Recherche dans toutes les applications',
    search_result_title: 'Résultats de recherche: «{q}»',
    subjects_label:   'Matières disponibles',

    /* ── Auth Modal ── */
    auth_title:       'Raniim Fey | Apprentissage Amusant',
    tab_login:        'Connexion',
    tab_signup:       'Inscription',
    lbl_email:        'Adresse e-mail',
    lbl_password:     'Mot de passe',
    lbl_name:         'Nom',
    ph_email:         'exemple@email.com',
    ph_pass:          '••••••••',
    ph_pass_new:      'Au moins 6 caractères',
    ph_name:          'Votre nom',
    btn_do_login:     '🔓 Connexion',
    btn_do_signup:    '✅ Créer un compte',

    /* ── Unlock Modal ── */
    unlock_title:     'Application payante',
    unlock_sub:       'Entrez le mot de passe pour accéder à cette application',
    ph_unlock:        'Mot de passe de l\'application',
    btn_unlock:       '🔓 Déverrouiller',
    btn_cancel:       'Annuler',
    unlock_err:       '❌ Mot de passe incorrect',

    /* ── About Modal ── */
    about_title:      'À propos du projet',
    about_brand:      'Raniim Fey | Apprentissage Amusant',
    about_p1:         'Un projet éducatif numérique indépendant, conçu et développé par l\'enseignante Samira Abdessadok, visant à fournir un environnement d\'apprentissage interactif en langue arabe pour les enfants de maternelle et du primaire, conformément au programme algérien.',
    about_p2:         'Toutes les applications sont programmées en tenant compte des caractéristiques développementales des apprenants, avec une dépendance au renforcement positif et au retour d\'information immédiat.',
    about_copy:       '© 2026 Samira Abdessadok "Raniim Fey" — Tous droits réservés.',
    about_ai:         'Développé avec l\'IA comme outil d\'assistance uniquement.',

    /* ── Admin ── */
    admin_title:      '⚙️ Panneau de contrôle Raniim Fey',
    admin_pass_ph:    'Mot de passe',
    admin_enter:      'Entrer',
    admin_pass_err:   '❌ Mot de passe incorrect',
    tab_apps:         '📋 Applications',
    tab_form:         '✏️ Ajouter / Modifier',
    tab_stats:        '📊 Statistiques',
    tab_backup:       '💾 Sauvegarde',
    form_new:         '➕ Ajouter une nouvelle application',
    ph_app_name:      'Nom de l\'application *',
    ph_app_desc:      'Description courte *',
    ph_app_url:       'URL de l\'application (https://...)',
    ph_age:           'Âge cible',
    ph_icon:          'Icône (emoji)',
    lbl_paid:         '💎 Application payante (mot de passe requis)',
    ph_paid_pass:     'Mot de passe spécifique à l\'application *',
    btn_save:         '💾 Enregistrer',
    btn_cancel_form:  'Annuler',
    btn_export:       'Exporter',
    btn_import:       'Importer',
    btn_reset:        'Restaurer',
    export_title:     'Exporter les données',
    export_desc:      'Télécharger toutes les applications en JSON',
    import_title:     'Importer les données',
    import_desc:      'Remplacer les données par un fichier JSON sauvegardé',
    reset_title:      'Restaurer les valeurs par défaut',
    reset_desc:       'Revenir à la liste d\'applications originale',
    stats_total:      'Total des applications',
    stats_free:       'Gratuit',
    stats_paid:       'Payant',
    stats_col1:       'Niveau / Matière',
    stats_col2:       'Nombre d\'applications',
    drag_hint:        '⬆⬇ Faites glisser les lignes pour réorganiser — sauvegardé automatiquement',

    /* ── Footer ── */
    footer:           'Apprentissage Amusant — Samira Abdessadok — Tous droits réservés © 2026',

    /* ── Toasts ── */
    toast_login_ok:   '✅ Connexion réussie',
    toast_signup_ok:  '✅ Compte créé',
    toast_logout:     'Déconnecté',
    toast_cloud_save: '☁️ Sauvegardé dans le cloud',
    toast_cloud_load: '☁️ Données chargées depuis le cloud',
    toast_unlocked:   '✅ Application déverrouillée',
    toast_share:      '🔗 Lien copié: «{name}»',
    toast_reorder:    '↕️ Réorganisé avec succès',
    toast_deleted:    '🗑️ Supprimé',
    toast_journey:    '🏆 Mon parcours — Bientôt!',
    toast_login_req:  'Veuillez vous connecter d\'abord',
    toast_installed:  '🎉 Apprentissage Amusant installé sur votre appareil',
    toast_update:     '🔄 Mise à jour disponible — rechargez la page',
    btn_install:      '📲 Installer l\'application',
  }
};

/* ══════════════════════════════════════
   ENGINE — تطبيق الترجمة على DOM
══════════════════════════════════════ */

/**
 * t(key) — إرجاع النص المترجم للغة الحالية
 * @param {string} key
 * @param {object} vars — متغيرات اختيارية {n, name, q, total, activity}
 */
function t(key, vars = {}) {
  const lang = window.currentLang || 'ar';
  const dict = I18N[lang] || I18N.ar;
  let str = dict[key] || I18N.ar[key] || key;
  // استبدال المتغيرات {n}, {name}, {q}, {total}, {activity}
  Object.entries(vars).forEach(([k, v]) => {
    str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
  });
  return str;
}

/**
 * applyI18n() — تطبيق الترجمة على كل العناصر المحددة
 * يعمل على العناصر التي تحمل خاصية data-i18n="key"
 */
function applyI18n(lang) {
  window.currentLang = lang;
  const dict = I18N[lang] || I18N.ar;

  // اتجاه الصفحة
  document.documentElement.setAttribute('lang', dict.lang);
  document.documentElement.setAttribute('dir',  dict.dir);

  // تطبيق على كل العناصر المحددة
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  // تطبيق على placeholder
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
  });

  // عناصر محددة بـ ID
  const idMap = {
    'levelLabel':      'btn_level',
    'activityLabel':   'btn_activity',
    'syncLabel':       'sync_offline',
    'heroSearch':      null,  // placeholder يُعالَج أدناه
    'tbAuthLabel':     'auth_login',
    'bmAuthLabel':     'bm_login',
    'bmSimLabel':      'bm_screen',
    'langLabel':       `bm_lang`,
    'dmDarkLabel':     'read_light',
  };

  Object.entries(idMap).forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (!el || !key) return;
    if (dict[key]) el.textContent = dict[key];
  });

  // placeholder شريط البحث
  const hs = document.getElementById('heroSearch');
  if (hs && dict.hero_search_ph) hs.setAttribute('placeholder', dict.hero_search_ph);

  // زر الكل
  const allBtn = document.getElementById('allBtn');
  if (allBtn) {
    const span = allBtn.querySelector('.hb-label');
    if (span) span.textContent = dict.btn_all || 'الكل';
  }

  // نصوص الـ footer
  document.querySelectorAll('.footer-copy').forEach(el => {
    el.textContent = dict.footer || el.textContent;
  });
}

// تصدير للاستخدام العالمي
window.I18N      = I18N;
window.t         = t;
window.applyI18n = applyI18n;
