const BASE = "https://lamat-elarabia.org";
const LOGO = `${BASE}/images/figma/logo-inner.png`;

// ── Organization + LocalBusiness (appears as Knowledge Panel in Google) ──

export function getOrganizationSchema(locale: string) {
  const isAr = locale === "ar";
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${BASE}/#organization`,
    name: isAr ? "لمعة العربية للمقاولات" : "Lamat Elarabia Contracting",
    alternateName: isAr ? "Lamat Elarabia Contracting" : "لمعة العربية للمقاولات",
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
      name: isAr ? "خدمات لمعة العربية" : "Lamat Elarabia Services",
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
      ],
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
    name: "لمعة العربية للمقاولات | Lamat Elarabia Contracting",
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
      name: isAr ? "لمعة العربية للمقاولات" : "Lamat Elarabia Contracting",
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
      name: isAr ? "لمعة العربية للمقاولات – الرياض" : "Lamat Elarabia Contracting – Riyadh",
      street: isAr ? "حي النرجس – شارع الأمير مشعل" : "Al-Nargis - Prince Mishal Street",
      city: isAr ? "الرياض" : "Riyadh",
      region: isAr ? "منطقة الرياض" : "Riyadh Region",
      lat: 24.7136,
      lng: 46.6753,
    },
    {
      name: isAr ? "لمعة العربية للمقاولات – جدة" : "Lamat Elarabia Contracting – Jeddah",
      street: isAr ? "حي الرواسي – شارع قادة الفكر" : "Al-Rawasi - Leaders Street",
      city: isAr ? "جدة" : "Jeddah",
      region: isAr ? "منطقة مكة المكرمة" : "Makkah Region",
      lat: 21.4858,
      lng: 39.1925,
    },
    {
      name: isAr ? "لمعة العربية للمقاولات – القصيم" : "Lamat Elarabia Contracting – Qassim",
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
          q: "What services does Lamat Elarabia Contracting offer?",
          a: "We offer general contracting, finishing & decor, MEP (mechanical, electrical, plumbing), facility maintenance, and commercial supply of construction materials.",
        },
        {
          q: "Where are Lamat Elarabia's offices located?",
          a: "We have three branches across Saudi Arabia: Riyadh (Al-Nargis district), Jeddah (Al-Rawasi district), and Qassim (Buraydah – Al-Akhdar district).",
        },
        {
          q: "How many years of experience does Lamat Elarabia have?",
          a: "Lamat Elarabia Contracting was founded in 2005, bringing over 20 years of experience in general construction and contracting across Saudi Arabia.",
        },
        {
          q: "Can I get a free consultation and project quote?",
          a: "Yes, we provide free consultations and project estimates. Contact us via phone or WhatsApp at +966550928077.",
        },
        {
          q: "Does Lamat Elarabia handle government projects?",
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
      name: isAr ? "لمعة العربية للمقاولات" : "Lamat Elarabia Contracting",
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
