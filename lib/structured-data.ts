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

// ── JobPosting-like page (Training) ──

export function getEmployerSchema(locale: string) {
  const isAr = locale === "ar";
  return {
    "@context": "https://schema.org",
    "@type": "EmployerAggregateRating",
    itemReviewed: {
      "@type": "Organization",
      "@id": `${BASE}/#organization`,
      name: isAr ? "لمعة العربية للمقاولات" : "Lamat Elarabia Contracting",
    },
  };
}
