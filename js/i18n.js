/* =========================================================
   Natours — minimal i18n (EN / AR) with RTL support
   ---------------------------------------------------------
   Usage: tag elements with `data-i18n="key"` to translate
   textContent, or `data-i18n="key" data-i18n-html` if the
   translation contains HTML (e.g. inner <span>).
   Use `data-i18n-placeholder="key"` for input placeholders.
   ========================================================= */
(function () {
  "use strict";

  const STORAGE_KEY = "natours.lang";
  const DEFAULT_LANG = "en";

  const T = {
    en: {
      // Navigation
      "nav.about": "About Natours",
      "nav.benefits": "Your benefits",
      "nav.tours": "Popular tours",
      "nav.stories": "Stories",
      "nav.book": "Book now",

      // Header
      "header.title": "Outdoors",
      "header.subtitle": "Is where life happens",
      "header.cta": "Discover our tours",

      // About
      "about.heading": "Exciting Tours for adventurous people",
      "about.subheading1": "You're going to fall in love with nature",
      "about.text1":
        "Discover handcrafted journeys that immerse you in the wild. From the quiet hush of dawn forests to mountain ridges at sunset, every itinerary is built around moments you'll never forget.",
      "about.subheading2": "Live adventures like you never have before",
      "about.text2":
        "Join expert guides on small-group expeditions designed for real connection — with nature, with new friends, and with yourself. Comfort, safety, and unforgettable views guaranteed.",
      "about.learn": "Learn more &rarr;",

      // Features
      "feature.world.title": "Explore the world",
      "feature.world.text":
        "Travel beyond the postcard. Find hidden trails, local stories and unspoiled scenery on every continent.",
      "feature.nature.title": "Meet nature",
      "feature.nature.text":
        "Sleep under starlight, hike through old-growth forests and wake up beside lakes nobody talks about.",
      "feature.way.title": "Find your way",
      "feature.way.text":
        "Our guides handle the logistics. You focus on the views, the camp coffee and the conversations.",
      "feature.health.title": "Live a healthier life",
      "feature.health.text":
        "Walking, climbing and breathing clean air rebuilds you in ways no gym can match.",

      // Stats
      "stats.destinations": "Destinations",
      "stats.travelers": "Happy travelers",
      "stats.rating": "Avg. rating",
      "stats.experience": "Of experience",

      // Tours
      "tours.heading": "Most Popular Tours",
      "tours.t1.title": "The Sea Explorer",
      "tours.t1.l1": "3 day tours",
      "tours.t1.l2": "Up to 30 people",
      "tours.t1.l3": "2 tour guides",
      "tours.t1.l4": "Sleep in cozy hostels",
      "tours.t1.l5": "Difficulty: easy",
      "tours.t2.title": "The Forest Hiker",
      "tours.t2.l1": "7 day tours",
      "tours.t2.l2": "Up to 40 people",
      "tours.t2.l3": "6 tour guides",
      "tours.t2.l4": "Sleep in provided tents",
      "tours.t2.l5": "Difficulty: medium",
      "tours.t3.title": "The Snow Adventurer",
      "tours.t3.l1": "5 day tours",
      "tours.t3.l2": "Up to 15 people",
      "tours.t3.l3": "3 tour guides",
      "tours.t3.l4": "Sleep in provided tents",
      "tours.t3.l5": "Difficulty: hard",
      "tours.only": "Only",
      "tours.book": "Book now!",
      "tours.discover": "Discover all tours",

      // Stories
      "stories.heading": "We make people genuinely happy",
      "stories.s1.title": "I had the best week ever with my family",
      "stories.s1.text":
        "From the first email to the last campfire, every detail was thoughtful. The kids still talk about the night sky over the valley — and so do we.",
      "stories.s2.title": "WOW! My life is completely different now",
      "stories.s2.text":
        "I went on the Forest Hiker tour alone, expecting peace. I came back with seven new friends and a habit of waking up at sunrise. Highly recommended.",
      "stories.readAll": "Read all stories &rarr;",

      // Gallery
      "gallery.heading": "Destinations our guests love",

      // Booking form
      "book.heading": "Start booking now",
      "book.name": "Full name",
      "book.email": "Email address",
      "book.small": "Small tour group",
      "book.large": "Large tour group",
      "book.next": "Next step &rarr;",

      // Footer
      "footer.tagline":
        "Outdoor tours for adventurous people — discover destinations, meet nature and book your next adventure.",
      "footer.company": "Company",
      "footer.contact": "Contact us",
      "footer.careers": "Careers",
      "footer.privacy": "Privacy policy",
      "footer.terms": "Terms",
      "footer.builtBy": "Built by",
      "footer.designBy": "Design by",
      "footer.course": "— course",
      "footer.courseName": "Advanced CSS and Sass",
      "footer.copy": "© 2026 Natours. All rights reserved.",

      // Language switcher labels
      "lang.label": "Language",
      "lang.en": "EN",
      "lang.ar": "AR",
    },

    ar: {
      // Navigation
      "nav.about": "عن ناتورس",
      "nav.benefits": "مزاياك",
      "nav.tours": "الجولات الشائعة",
      "nav.stories": "قصص",
      "nav.book": "احجز الآن",

      // Header
      "header.title": "الطبيعة",
      "header.subtitle": "هي حيث تبدأ الحياة",
      "header.cta": "اكتشف جولاتنا",

      // About
      "about.heading": "جولات شيّقة لعشّاق المغامرة",
      "about.subheading1": "ستقع في حب الطبيعة",
      "about.text1":
        "اكتشف رحلات مصمَّمة بعناية تغمرك في قلب البرية، من هدوء غابات الفجر إلى قمم الجبال عند الغروب. كل جولة تُصاغ حول لحظات لا تُنسى.",
      "about.subheading2": "عِش مغامرات لم تختبرها من قبل",
      "about.text2":
        "انضم إلى مرشدين خبراء في رحلات بمجموعات صغيرة، مصمَّمة لتجربة حقيقية مع الطبيعة، ومع أصدقاء جدد، ومع ذاتك. راحة وأمان ومناظر خلّابة.",
      "about.learn": "اعرف المزيد &larr;",

      // Features
      "feature.world.title": "استكشف العالم",
      "feature.world.text":
        "سافر إلى ما وراء الصورة المعتادة. اكتشف مسارات خفيّة وقصصًا محلية ومناظر بكر في كل قارة.",
      "feature.nature.title": "تواصل مع الطبيعة",
      "feature.nature.text":
        "نَم تحت ضوء النجوم، وامشِ بين الغابات العتيقة، واستيقظ بجوار بحيرات لا يعرفها أحد.",
      "feature.way.title": "اعثر على طريقك",
      "feature.way.text":
        "نتولى نحن التخطيط واللوجستيات. أنت ركّز على المناظر وقهوة المخيم والأحاديث الجميلة.",
      "feature.health.title": "حياة أكثر صحة",
      "feature.health.text":
        "المشي والتسلّق وهواء الجبال النقي يعيد بناءك بشكل لا يضاهيه أي صالة رياضية.",

      // Stats
      "stats.destinations": "وجهات",
      "stats.travelers": "مسافر سعيد",
      "stats.rating": "متوسط التقييم",
      "stats.experience": "سنوات خبرة",

      // Tours
      "tours.heading": "الجولات الأكثر شعبية",
      "tours.t1.title": "مستكشف البحار",
      "tours.t1.l1": "جولة 3 أيام",
      "tours.t1.l2": "حتى 30 شخصًا",
      "tours.t1.l3": "مرشدان سياحيان",
      "tours.t1.l4": "النوم في نُزُل مريحة",
      "tours.t1.l5": "المستوى: سهل",
      "tours.t2.title": "متجوّل الغابات",
      "tours.t2.l1": "جولة 7 أيام",
      "tours.t2.l2": "حتى 40 شخصًا",
      "tours.t2.l3": "6 مرشدين سياحيين",
      "tours.t2.l4": "النوم في خيام مجهّزة",
      "tours.t2.l5": "المستوى: متوسط",
      "tours.t3.title": "مغامر الثلوج",
      "tours.t3.l1": "جولة 5 أيام",
      "tours.t3.l2": "حتى 15 شخصًا",
      "tours.t3.l3": "3 مرشدين سياحيين",
      "tours.t3.l4": "النوم في خيام مجهّزة",
      "tours.t3.l5": "المستوى: صعب",
      "tours.only": "فقط",
      "tours.book": "احجز الآن!",
      "tours.discover": "اكتشف كل الجولات",

      // Stories
      "stories.heading": "نُسعد الناس بحق",
      "stories.s1.title": "قضيت أفضل أسبوع مع عائلتي",
      "stories.s1.text":
        "من أول رسالة إلى آخر نار مخيم، كل تفصيلة كانت مدروسة. لا يزال الأطفال يتحدثون عن سماء الليل فوق الوادي — ونحن كذلك.",
      "stories.s2.title": "واو! حياتي تغيّرت تمامًا",
      "stories.s2.text":
        "ذهبت في جولة متجوّل الغابات وحدي بحثًا عن الهدوء، وعدت مع سبعة أصدقاء جدد وعادة الاستيقاظ مع الفجر. أنصح بها بشدة.",
      "stories.readAll": "اقرأ كل القصص &larr;",

      // Gallery
      "gallery.heading": "وجهات يحبها ضيوفنا",

      // Booking form
      "book.heading": "ابدأ الحجز الآن",
      "book.name": "الاسم الكامل",
      "book.email": "البريد الإلكتروني",
      "book.small": "مجموعة صغيرة",
      "book.large": "مجموعة كبيرة",
      "book.next": "الخطوة التالية &larr;",

      // Footer
      "footer.tagline":
        "جولات في الهواء الطلق لعشّاق المغامرة — اكتشف وجهات جديدة، والتقِ بالطبيعة، واحجز مغامرتك القادمة.",
      "footer.company": "الشركة",
      "footer.contact": "اتصل بنا",
      "footer.careers": "وظائف",
      "footer.privacy": "الخصوصية",
      "footer.terms": "الشروط",
      "footer.builtBy": "تطوير",
      "footer.designBy": "تصميم",
      "footer.course": "— من دورة",
      "footer.courseName": "Advanced CSS and Sass",
      "footer.copy": "© 2026 ناتورس. جميع الحقوق محفوظة.",

      // Language switcher labels
      "lang.label": "اللغة",
      "lang.en": "EN",
      "lang.ar": "ع",
    },
  };

  const HTML_KEYS = new Set([
    "about.learn",
    "stories.readAll",
    "book.next",
    "header.title", // safe (no HTML), but allow for future
  ]);

  function applyLang(lang) {
    if (!T[lang]) lang = DEFAULT_LANG;
    const dict = T[lang];

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.dataset.lang = lang;

    // Text content
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = dict[key];
      if (val == null) return;
      if (el.hasAttribute("data-i18n-html") || HTML_KEYS.has(key)) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });

    // Placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      const val = dict[key];
      if (val != null) el.setAttribute("placeholder", val);
    });

    // aria-labels
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      const val = dict[key];
      if (val != null) el.setAttribute("aria-label", val);
    });

    // Update active state of language buttons
    document.querySelectorAll(".lang-switch-btn").forEach((btn) => {
      btn.classList.toggle(
        "lang-switch-btn--active",
        btn.dataset.lang === lang
      );
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (_) {
      /* private mode etc. */
    }
  }

  function init() {
    let saved = DEFAULT_LANG;
    try {
      saved = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    } catch (_) {
      /* ignore */
    }
    applyLang(saved);

    document.addEventListener("click", (e) => {
      const btn = e.target.closest(".lang-switch-btn");
      if (!btn) return;
      applyLang(btn.dataset.lang);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
