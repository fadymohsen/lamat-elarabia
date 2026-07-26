const BASE = "https://lamat-elarabia.org";
const LOGO = `${BASE}/images/figma/logo-inner.png`;

// ── Organization + LocalBusiness (appears as Knowledge Panel in Google) ──

export function getOrganizationSchema(locale: string) {
  const isAr = locale === "ar";
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${BASE}/#organization`,
    name: isAr ? "لمعة العربية للمقاولات" : "Lamaat Al-Arabiya Contracting",
    alternateName: isAr ? "Lamaat Al-Arabiya Contracting" : "لمعة العربية للمقاولات",
    url: `${BASE}/${locale}`,
    logo: LOGO,
    image: `${BASE}/images/hero-home.png`,
    description: isAr
      ? "شركة مقاولات رائدة في السعودية متخصصة في الإنشاءات العامة والتشطيبات والصيانة والأعمال الكهروميكانيكية منذ 2005"
      : "Leading contracting company in Saudi Arabia specializing in general construction, finishing, maintenance and MEP works since 2005",
    foundingDate: "2005",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 150,
    },
    email: "info@lamat-elarabia.org",
    telephone: "+966550928077",
    address: {
      "@type": "PostalAddress",
      addressCountry: "SA",
      addressRegion: isAr ? "الرياض" : "Riyadh",
      addressLocality: isAr ? "الرياض" : "Riyadh",
    },
    areaServed: [
      { "@type": "City", name: isAr ? "الرياض" : "Riyadh" },
      { "@type": "City", name: isAr ? "جدة" : "Jeddah" },
      { "@type": "City", name: isAr ? "القصيم" : "Qassim" },
    ],
    priceRange: "$$$$",
    currenciesAccepted: "SAR",
    paymentAccepted: "Cash, Bank Transfer",
    sameAs: [
      // Add social media URLs here when available
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: isAr ? "خدمات لمعة العربية" : "Lamaat Al-Arabiya Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isAr ? "المقاولات العامة" : "General Contracting",
            description: isAr
              ? "الإنشاءات الحكومية والخاصة، التشطيبات والديكور، الأعمال الكهروميكانيكية"
              : "Government and private construction, finishing and decor, electromechanical works",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isAr ? "الخدمات الفنية" : "Technical Services",
            description: isAr
              ? "الكهرباء، السباكة، أنظمة التكييف، الدفاع المدني والسلامة"
              : "Electrical, plumbing, HVAC systems, civil defense and safety",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isAr ? "صيانة المرافق" : "Facility Maintenance",
            description: isAr
              ? "صيانة شاملة للمباني والمنشآت الحكومية والخاصة"
              : "Comprehensive maintenance for government and private buildings and facilities",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isAr ? "التوريد التجاري" : "Commercial Supply",
            description: isAr
              ? "توريد وبيع مواد البناء والتشطيب"
              : "Supply and sale of building and finishing materials",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isAr ? "بناء الفلل" : "Villa Construction",
            url: `${BASE}/${locale}/blogs/villa-construction`,
            description: isAr
              ? "بناء فلل عظم وتشطيب كامل بنظام تسليم مفتاح – تشطيبات داخلية وخارجية وأعمال كهروميكانيكية"
              : "Villa shell & core and full finishing with turnkey delivery – interior/exterior finishing and MEP works",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isAr ? "بناء المساجد والجوامع" : "Mosque & Jamea Construction",
            url: `${BASE}/${locale}/blogs/mosque-construction`,
            description: isAr
              ? "بناء وتشطيب المساجد والجوامع بالكامل – مآذن وقباب وقاعات صلاة ومرافق مساندة"
              : "Complete mosque and jamea construction and finishing – minarets, domes, prayer halls, and supporting facilities",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isAr ? "التشطيبات التجارية" : "Commercial Finishing",
            url: `${BASE}/${locale}/blogs/commercial-finishing`,
            description: isAr
              ? "تشطيبات تجارية للمولات والمطارات والفنادق والمجمعات التجارية بمعايير عالمية"
              : "Commercial finishing for malls, airports, hotels, and commercial complexes to international standards",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isAr ? "السفع الرملي الصناعي" : "Industrial Sandblasting",
            url: `${BASE}/${locale}/blogs/sandblasting`,
            description: isAr
              ? "خدمات السفع الرملي الصناعي لمعالجة الأسطح المعدنية وتجهيز الهياكل الحديدية والخزانات والأنابيب"
              : "Industrial sandblasting services for metal surface treatment, structural steel preparation, and tank & pipe cleaning",
          },
        },
      ],
    },
  };
}

// ── WebPage schema for homepage (reinforces brand in Google) ──

export function getHomePageSchema(locale: string) {
  const isAr = locale === "ar";
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${BASE}/${locale}/#webpage`,
    name: isAr ? "لمعة العربية للمقاولات" : "Lamaat Al-Arabiya Contracting",
    url: `${BASE}/${locale}`,
    isPartOf: { "@id": `${BASE}/#website` },
    about: { "@id": `${BASE}/#organization` },
    description: isAr
      ? "لمعة العربية للمقاولات – شركة مقاولات رائدة بخبرة +20 عامًا في الإنشاءات العامة والتشطيبات والصيانة في الرياض وجدة والقصيم"
      : "Lamaat Al-Arabiya Contracting – Leading contractor with 20+ years in general construction, finishing, and maintenance across Riyadh, Jeddah & Qassim",
    inLanguage: isAr ? "ar" : "en",
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${BASE}/images/hero-home.png`,
    },
  };
}

// ── Breadcrumbs (shows in Google as: Home > News) ──

export function getBreadcrumbSchema(locale: string, items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE}${item.path}`,
    })),
  };
}

// ── WebSite (enables sitelinks search box in Google) ──

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE}/#website`,
    name: "لمعة العربية للمقاولات | Lamaat Al-Arabiya Contracting",
    url: BASE,
    inLanguage: ["ar", "en"],
  };
}

// ── ContactPage schema ──

export function getContactPageSchema(locale: string) {
  const isAr = locale === "ar";
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: isAr ? "تواصل معنا" : "Contact Us",
    url: `${BASE}/${locale}/contact`,
    mainEntity: {
      "@type": "GeneralContractor",
      "@id": `${BASE}/#organization`,
      name: isAr ? "لمعة العربية للمقاولات" : "Lamaat Al-Arabiya Contracting",
      telephone: "+966550928077",
      email: "info@lamat-elarabia.org",
      address: [
        {
          "@type": "PostalAddress",
          addressLocality: isAr ? "جدة" : "Jeddah",
          streetAddress: isAr ? "حي الرواسي – شارع قادة الفكر" : "Al-Rawasi - Leaders Street",
          addressCountry: "SA",
        },
        {
          "@type": "PostalAddress",
          addressLocality: isAr ? "الرياض" : "Riyadh",
          streetAddress: isAr ? "حي النرجس – شارع الأمير مشعل" : "Al-Nargis - Prince Mishal Street",
          addressCountry: "SA",
        },
        {
          "@type": "PostalAddress",
          addressLocality: isAr ? "القصيم" : "Qassim",
          streetAddress: isAr ? "بريدة – حي الأخضر" : "Buraydah - Al-Akhdar",
          addressCountry: "SA",
        },
      ],
    },
  };
}

// ── LocalBusiness branches (for Google Maps / local search) ──

export function getLocalBusinessSchemas(locale: string) {
  const isAr = locale === "ar";
  const branches = [
    {
      name: isAr ? "لمعة العربية للمقاولات – الرياض" : "Lamaat Al-Arabiya Contracting – Riyadh",
      street: isAr ? "حي النرجس – شارع الأمير مشعل" : "Al-Nargis - Prince Mishal Street",
      city: isAr ? "الرياض" : "Riyadh",
      region: isAr ? "منطقة الرياض" : "Riyadh Region",
      lat: 24.7136,
      lng: 46.6753,
    },
    {
      name: isAr ? "لمعة العربية للمقاولات – جدة" : "Lamaat Al-Arabiya Contracting – Jeddah",
      street: isAr ? "حي الرواسي – شارع قادة الفكر" : "Al-Rawasi - Leaders Street",
      city: isAr ? "جدة" : "Jeddah",
      region: isAr ? "منطقة مكة المكرمة" : "Makkah Region",
      lat: 21.4858,
      lng: 39.1925,
    },
    {
      name: isAr ? "لمعة العربية للمقاولات – القصيم" : "Lamaat Al-Arabiya Contracting – Qassim",
      street: isAr ? "بريدة – حي الأخضر" : "Buraydah - Al-Akhdar",
      city: isAr ? "بريدة" : "Buraydah",
      region: isAr ? "منطقة القصيم" : "Qassim Region",
      lat: 26.3292,
      lng: 43.9750,
    },
  ];

  return branches.map((b) => ({
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: b.name,
    parentOrganization: { "@id": `${BASE}/#organization` },
    url: `${BASE}/${locale}`,
    telephone: "+966550928077",
    email: "info@lamat-elarabia.org",
    address: {
      "@type": "PostalAddress",
      streetAddress: b.street,
      addressLocality: b.city,
      addressRegion: b.region,
      addressCountry: "SA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: b.lat,
      longitude: b.lng,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:00",
      closes: "17:00",
    },
  }));
}

// ── FAQPage schema (rich snippets in Google) ──

export function getFAQSchema(locale: string) {
  const isAr = locale === "ar";
  const faqs = isAr
    ? [
        {
          q: "ما هي الخدمات التي تقدمها لمعة العربية للمقاولات؟",
          a: "نقدم خدمات المقاولات العامة، التشطيبات والديكور، الأعمال الكهروميكانيكية (MEP)، صيانة المرافق، والتوريد التجاري لمواد البناء.",
        },
        {
          q: "أين تقع فروع لمعة العربية للمقاولات؟",
          a: "لدينا ثلاثة فروع في المملكة العربية السعودية: الرياض (حي النرجس)، جدة (حي الرواسي)، والقصيم (بريدة – حي الأخضر).",
        },
        {
          q: "كم سنة خبرة لدى لمعة العربية في قطاع المقاولات؟",
          a: "تأسست لمعة العربية للمقاولات عام 2005، أي أكثر من 20 عامًا من الخبرة في مجال الإنشاءات والمقاولات العامة في المملكة.",
        },
        {
          q: "هل يمكنني الحصول على استشارة مجانية وعرض سعر؟",
          a: "نعم، نقدم استشارات مجانية وعروض أسعار لجميع المشاريع. تواصل معنا عبر الهاتف أو واتساب على الرقم 0550928077.",
        },
        {
          q: "هل تقبل لمعة العربية مشاريع حكومية؟",
          a: "نعم، لدينا خبرة واسعة في تنفيذ المشاريع الحكومية والخاصة على حد سواء، مع التزام تام بمعايير الجودة والسلامة.",
        },
      ]
    : [
        {
          q: "What services does Lamaat Al-Arabiya Contracting offer?",
          a: "We offer general contracting, finishing & decor, MEP (mechanical, electrical, plumbing), facility maintenance, and commercial supply of construction materials.",
        },
        {
          q: "Where are Lamaat Al-Arabiya's offices located?",
          a: "We have three branches across Saudi Arabia: Riyadh (Al-Nargis district), Jeddah (Al-Rawasi district), and Qassim (Buraydah – Al-Akhdar district).",
        },
        {
          q: "How many years of experience does Lamaat Al-Arabiya have?",
          a: "Lamaat Al-Arabiya Contracting was founded in 2005, bringing over 20 years of experience in general construction and contracting across Saudi Arabia.",
        },
        {
          q: "Can I get a free consultation and project quote?",
          a: "Yes, we provide free consultations and project estimates. Contact us via phone or WhatsApp at +966550928077.",
        },
        {
          q: "Does Lamaat Al-Arabiya handle government projects?",
          a: "Yes, we have extensive experience executing both government and private sector projects with full commitment to quality and safety standards.",
        },
      ];

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

// ── News articles schema (rich results for article listings) ──

export function getNewsArticlesSchema(locale: string) {
  const isAr = locale === "ar";
  const articles = isAr
    ? [
        { title: "معايير الجودة في قطاع المقاولات", img: "/images/quality-photo.jpg" },
        { title: "أحدث اتجاهات البناء في السعودية", img: "/images/trends-photo.jpg" },
        { title: "كيف تضمن شركات المقاولات حماية فرق العمل والمواقع؟", img: "/images/safety-photo.jpg" },
      ]
    : [
        { title: "Quality Standards in Contracting", img: "/images/quality-photo.jpg" },
        { title: "Latest Construction Trends in Saudi Arabia", img: "/images/trends-photo.jpg" },
        { title: "How Contracting Companies Ensure Protection for Teams and Sites", img: "/images/safety-photo.jpg" },
      ];

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: isAr ? "الأخبار والمقالات" : "News & Articles",
    url: `${BASE}/${locale}/blogs`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: articles.map((a, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Article",
          headline: a.title,
          image: `${BASE}${a.img}`,
          publisher: {
            "@type": "Organization",
            "@id": `${BASE}/#organization`,
            name: isAr ? "لمعة العربية للمقاولات" : "Lamaat Al-Arabiya Contracting",
          },
        },
      })),
    },
  };
}

// ── Service page schemas (landing pages) ──

export function getSandblastingServiceSchema(locale: string) {
  const isAr = locale === "ar";
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE}/${locale}/sandblasting/#service`,
    name: isAr ? "خدمات السفع الرملي الصناعي" : "Industrial Sandblasting Services",
    description: isAr
      ? "خدمات السفع الرملي الصناعي لمعالجة الأسطح المعدنية وتجهيز الهياكل الحديدية وتنظيف الخزانات والأنابيب المعدنية وفق المعايير القياسية الدولية"
      : "Industrial sandblasting services for metal surface treatment, structural steel preparation, and tank & pipe cleaning according to international standards",
    url: `${BASE}/${locale}/blogs/sandblasting`,
    provider: { "@id": `${BASE}/#organization` },
    areaServed: [
      { "@type": "City", name: isAr ? "الرياض" : "Riyadh" },
      { "@type": "City", name: isAr ? "جدة" : "Jeddah" },
      { "@type": "City", name: isAr ? "القصيم" : "Qassim" },
    ],
    serviceType: isAr ? "سفع رملي صناعي" : "Industrial Sandblasting",
    category: isAr ? "خدمات صناعية" : "Industrial Services",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: isAr ? "خدمات السفع الرملي" : "Sandblasting Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: isAr ? "معالجة الأسطح المعدنية" : "Metal Surface Treatment" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: isAr ? "تجهيز الهياكل المعدنية والحديدية" : "Structural Steel Preparation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: isAr ? "تنظيف الخزانات والأنابيب المعدنية" : "Tank & Pipe Cleaning" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: isAr ? "تجهيز الأسطح للدهانات الصناعية" : "Surface Preparation for Industrial Coatings" } },
      ],
    },
  };
}

export function getVillaServiceSchema(locale: string) {
  const isAr = locale === "ar";
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE}/${locale}/villa-construction/#service`,
    name: isAr ? "بناء فلل عظم وتشطيب – تسليم مفتاح" : "Villa Construction – Turnkey Delivery",
    description: isAr
      ? "بناء فلل سكنية بنظام تسليم مفتاح – من الأساسات والهيكل الإنشائي إلى التشطيبات الداخلية والخارجية والأعمال الكهروميكانيكية"
      : "Residential villa construction with turnkey delivery – from foundation and structural shell to interior/exterior finishing and MEP systems",
    url: `${BASE}/${locale}/blogs/villa-construction`,
    provider: { "@id": `${BASE}/#organization` },
    areaServed: [
      { "@type": "City", name: isAr ? "الرياض" : "Riyadh" },
      { "@type": "City", name: isAr ? "جدة" : "Jeddah" },
      { "@type": "City", name: isAr ? "القصيم" : "Qassim" },
    ],
    serviceType: isAr ? "بناء فلل" : "Villa Construction",
    category: isAr ? "مقاولات سكنية" : "Residential Construction",
  };
}

export function getMosqueServiceSchema(locale: string) {
  const isAr = locale === "ar";
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE}/${locale}/mosque-construction/#service`,
    name: isAr ? "بناء مساجد وجوامع" : "Mosque & Jamea Construction",
    description: isAr
      ? "بناء وتشطيب المساجد والجوامع بالكامل – أعمال إنشائية ومآذن وقباب وتشطيبات داخلية وخارجية وأنظمة كهروميكانيكية ومرافق مساندة"
      : "Complete mosque and jamea construction – structural works, minarets, domes, interior/exterior finishing, MEP systems, and supporting facilities",
    url: `${BASE}/${locale}/blogs/mosque-construction`,
    provider: { "@id": `${BASE}/#organization` },
    areaServed: [
      { "@type": "City", name: isAr ? "الرياض" : "Riyadh" },
      { "@type": "City", name: isAr ? "جدة" : "Jeddah" },
      { "@type": "City", name: isAr ? "القصيم" : "Qassim" },
    ],
    serviceType: isAr ? "بناء مساجد" : "Mosque Construction",
    category: isAr ? "مقاولات دينية" : "Religious Facility Construction",
  };
}

export function getCommercialFinishingServiceSchema(locale: string) {
  const isAr = locale === "ar";
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE}/${locale}/commercial-finishing/#service`,
    name: isAr ? "تشطيبات تجارية للمولات والمطارات" : "Commercial Finishing – Malls & Airports",
    description: isAr
      ? "تشطيبات تجارية احترافية للمولات والمطارات والفنادق والمجمعات التجارية – تشطيبات داخلية وخارجية وأعمال كهروميكانيكية"
      : "Professional commercial finishing for malls, airports, hotels, and commercial complexes – interior/exterior finishing and MEP systems",
    url: `${BASE}/${locale}/blogs/commercial-finishing`,
    provider: { "@id": `${BASE}/#organization` },
    areaServed: [
      { "@type": "City", name: isAr ? "الرياض" : "Riyadh" },
      { "@type": "City", name: isAr ? "جدة" : "Jeddah" },
      { "@type": "City", name: isAr ? "القصيم" : "Qassim" },
    ],
    serviceType: isAr ? "تشطيبات تجارية" : "Commercial Finishing",
    category: isAr ? "تشطيبات مشاريع كبرى" : "Large-Scale Project Finishing",
  };
}

// ── Training / Careers page schema ──

export function getEmployerSchema(locale: string) {
  const isAr = locale === "ar";
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: isAr ? "التوظيف والتدريب" : "Careers & Training",
    url: `${BASE}/${locale}/training`,
    about: {
      "@type": "Organization",
      "@id": `${BASE}/#organization`,
      name: isAr ? "لمعة العربية للمقاولات" : "Lamaat Al-Arabiya Contracting",
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        minValue: 150,
      },
    },
    mainEntity: {
      "@type": "ItemList",
      name: isAr ? "الوظائف المتاحة" : "Available Positions",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: isAr ? "مهندس مدني" : "Civil Engineer",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: isAr ? "مشرف موقع" : "Site Supervisor",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: isAr ? "فني كهرباء" : "Electrician",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: isAr ? "فني سباكة" : "Plumber",
        },
      ],
    },
  };
}
