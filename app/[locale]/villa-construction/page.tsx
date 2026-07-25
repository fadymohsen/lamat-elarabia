import React from "react";
import { notFound } from "next/navigation";
import VillaConstructionPage from "@/components/legacy/VillaConstructionPage";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema, getVillaServiceSchema } from "@/lib/structured-data";
import type { Metadata } from "next";

const BASE = "https://lamat-elarabia.org";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (locale === "en") {
    return {
      title: "Villa Construction – Turnkey Building & Finishing in Saudi Arabia",
      description:
        "Lamaat Al-Arabiya Contracting (لمعة العربية للمقاولات) – Villa construction from foundation to turnkey delivery. Shell & core, interior/exterior finishing, MEP systems. 20+ years in Riyadh, Jeddah & Qassim.",
      keywords: [
        "villa construction Saudi Arabia",
        "turnkey villa Riyadh",
        "villa building Qassim",
        "villa finishing Jeddah",
        "shell and core villa KSA",
        "residential construction Saudi",
        "villa contractor Riyadh",
        "turnkey delivery villa",
        "villa interior finishing",
        "villa exterior finishing",
        "Lamaat Al-Arabiya villa",
      ],
      openGraph: {
        locale: "en_US",
        type: "website",
        title: "Villa Construction & Turnkey Delivery | Lamaat Al-Arabiya Contracting",
        description:
          "Professional villa construction – from foundation to turnkey delivery. Shell & core, finishing, MEP. Riyadh, Jeddah & Qassim.",
        url: `${BASE}/en/villa-construction`,
        siteName: "Lamaat Al-Arabiya Contracting | لمعة العربية للمقاولات",
        images: [
          {
            url: `${BASE}/en/opengraph-image`,
            width: 1200,
            height: 630,
            alt: "Lamaat Al-Arabiya Villa Construction Services",
          },
        ],
      },
      alternates: {
        canonical: `${BASE}/en/villa-construction`,
        languages: { ar: `${BASE}/ar/villa-construction`, en: `${BASE}/en/villa-construction`, "x-default": `${BASE}/en/villa-construction` },
      },
    };
  }

  return {
    title: "بناء فلل عظم وتشطيب – تسليم مفتاح في الرياض وجدة والقصيم",
    description:
      "لمعة العربية للمقاولات (Lamaat Al-Arabiya) – بناء فلل عظم وتشطيب كامل بنظام تسليم مفتاح. تشطيبات داخلية وخارجية، أعمال كهروميكانيكية، تصميم وتنفيذ بأعلى معايير الجودة. خبرة +20 عامًا في الرياض وجدة والقصيم.",
    keywords: [
      "بناء فلل عظم وتشطيب",
      "بناء فلل تسليم مفتاح",
      "شركة بناء فلل في الرياض",
      "بناء فلل القصيم",
      "بناء فلل جدة",
      "تشطيب فلل داخلي وخارجي",
      "مقاول فلل السعودية",
      "تنفيذ فلل سكنية",
      "لمعة العربية بناء فلل",
      "لمعه العربية",
      "لمعة",
      "لمعه",
      "شركة مقاولات فلل الرياض",
      "فلل تسليم مفتاح المملكة",
    ],
    openGraph: {
      locale: "ar_SA",
      type: "website",
      title: "بناء فلل عظم وتشطيب – تسليم مفتاح | لمعة العربية للمقاولات",
      description:
        "بناء فلل عظم وتشطيب كامل بنظام تسليم مفتاح. تشطيبات داخلية وخارجية. الرياض – جدة – القصيم.",
      url: `${BASE}/ar/villa-construction`,
      siteName: "لمعة العربية للمقاولات | Lamaat Al-Arabiya Contracting",
      images: [
        {
          url: `${BASE}/ar/opengraph-image`,
          width: 1200,
          height: 630,
          alt: "بناء فلل عظم وتشطيب – لمعة العربية للمقاولات",
        },
      ],
    },
    alternates: {
      canonical: `${BASE}/ar/villa-construction`,
      languages: { ar: `${BASE}/ar/villa-construction`, en: `${BASE}/en/villa-construction`, "x-default": `${BASE}/en/villa-construction` },
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (locale !== "ar" && locale !== "en") notFound();

  const isAr = locale === "ar";
  const breadcrumbs = getBreadcrumbSchema(locale, [
    { name: isAr ? "الرئيسية" : "Home", path: `/${locale}` },
    { name: isAr ? "بناء الفلل" : "Villa Construction", path: `/${locale}/villa-construction` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={getVillaServiceSchema(locale)} />
      <VillaConstructionPage locale={locale} />
    </>
  );
}
