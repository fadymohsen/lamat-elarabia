import React from "react";
import { notFound } from "next/navigation";
import HomePage from "@/components/legacy/HomePage";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema, getFAQSchema, getHomePageSchema, getLocalBusinessSchemas } from "@/lib/structured-data";
import type { Metadata } from "next";

const BASE = "https://lamat-elarabia.org";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (locale === "en") {
    return {
      title: "Lamaat Al-Arabiya Contracting – General Contractor in Riyadh, Jeddah & Qassim",
      description:
        "Lamaat Al-Arabiya Contracting (لمعة العربية للمقاولات) – 20+ years building Saudi Arabia. Villa construction (turnkey), mosque building, commercial finishing for malls & airports, industrial sandblasting, MEP & maintenance. Riyadh, Jeddah & Qassim.",
      keywords: [
        "Lamaat Al-Arabiya",
        "Lamaat Al-Arabiya Contracting",
        "Lamaat Alarabiya",
        "Lam3at Al Arabia",
        "Lama3t Al-Arabia",
        "Lamat Elarabia",
        "Lamat Al Arabia Contracting",
        "لمعة العربية",
        "لمعة العربية للمقاولات",
        "general contractor Saudi Arabia",
        "construction company Riyadh",
        "contractor Jeddah",
        "MEP contractor KSA",
        "facility maintenance Saudi",
        "building contractor Qassim",
        "villa construction Riyadh",
        "turnkey villa Saudi Arabia",
        "mosque construction Saudi",
        "commercial finishing malls airports",
        "industrial sandblasting Riyadh Qassim",
        "sandblasting services KSA",
      ],
      openGraph: {
        locale: "en_US",
        type: "website",
        title: "Lamaat Al-Arabiya Contracting | General Contractor in Saudi Arabia",
        description:
          "20+ years building Saudi Arabia. Construction, finishing, MEP & maintenance. Riyadh – Jeddah – Qassim.",
        url: `${BASE}/en`,
        siteName: "Lamaat Al-Arabiya Contracting | لمعة العربية للمقاولات",
        images: [
          {
            url: `${BASE}/images/figma/logo-inner.png`,
            width: 1200,
            height: 630,
            alt: "Lamaat Al-Arabiya Contracting – General Contractor in Saudi Arabia",
          },
        ],
      },
      alternates: {
        canonical: `${BASE}/en`,
        languages: { ar: `${BASE}/ar`, en: `${BASE}/en`, "x-default": `${BASE}/en` },
      },
    };
  }

  return {
    title: "لمعة العربية للمقاولات – شركة مقاولات عامة في الرياض وجدة والقصيم",
    description:
      "لمعة العربية للمقاولات (Lamaat Al-Arabiya Contracting) – شركة مقاولات رائدة بخبرة +20 عامًا. بناء فلل عظم وتشطيب (تسليم مفتاح)، بناء مساجد وجوامع، تشطيبات مولات ومطارات ومجمعات تجارية، سفع رملي صناعي، أعمال كهروميكانيكية. الرياض – جدة – القصيم.",
    keywords: [
      "لمعة العربية",
      "لمعة العربية للمقاولات",
      "لمعه العربيه للمقاولات",
      "لمعة العربيه",
      "لمعه العربية",
      "لمعه",
      "لمعة",
      "Lamaat Al-Arabiya",
      "Lamat Elarabia",
      "شركة مقاولات الرياض",
      "شركة مقاولات في الرياض والقصيم",
      "مقاولات عامة جدة",
      "بناء فلل عظم وتشطيب",
      "بناء فلل تسليم مفتاح",
      "مقاولات بناء مساجد وجوامع بالمملكة",
      "تشطيبات تجارية للمولات والمطارات",
      "تنفيذ وتشطيب مجمعات تجارية",
      "تشطيبات داخلية وخارجية",
      "سفع رملي صناعي بالرياض والقصيم",
      "معالجة الأسطح المعدنية بالسفع الرملي",
      "تشطيبات السعودية",
      "صيانة مباني",
      "مقاولات القصيم",
      "شركة بناء رؤية 2030",
    ],
    openGraph: {
      locale: "ar_SA",
      type: "website",
      title: "لمعة العربية للمقاولات | شركة مقاولات عامة في السعودية",
      description:
        "خبرة +20 عامًا في الإنشاءات والتشطيبات والصيانة. الرياض – جدة – القصيم.",
      url: `${BASE}/ar`,
      siteName: "لمعة العربية للمقاولات | Lamaat Al-Arabiya Contracting",
      images: [
        {
          url: `${BASE}/images/figma/logo-inner.png`,
          width: 1200,
          height: 630,
          alt: "لمعة العربية للمقاولات – شركة مقاولات عامة في السعودية",
        },
      ],
    },
    alternates: {
      canonical: `${BASE}/ar`,
      languages: { ar: `${BASE}/ar`, en: `${BASE}/en`, "x-default": `${BASE}/en` },
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (locale !== "ar" && locale !== "en") notFound();

  const isAr = locale === "ar";
  const localBusinessSchemas = getLocalBusinessSchemas(locale);
  const breadcrumbs = getBreadcrumbSchema(locale, [
    { name: isAr ? "الرئيسية" : "Home", path: `/${locale}` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={getHomePageSchema(locale)} />
      <JsonLd data={getFAQSchema(locale)} />
      {localBusinessSchemas.map((schema, i) => (
        <JsonLd key={i} data={schema} />
      ))}
      <HomePage locale={locale} />
    </>
  );
}
