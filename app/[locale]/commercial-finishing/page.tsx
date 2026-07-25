import React from "react";
import { notFound } from "next/navigation";
import CommercialFinishingPage from "@/components/legacy/CommercialFinishingPage";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema, getCommercialFinishingServiceSchema } from "@/lib/structured-data";
import type { Metadata } from "next";

const BASE = "https://lamat-elarabia.org";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (locale === "en") {
    return {
      title: "Commercial Finishing – Malls, Airports & Commercial Complexes",
      description:
        "Lamaat Al-Arabiya Contracting (لمعة العربية للمقاولات) – Expert commercial finishing for malls, airports, and commercial complexes. Interior & exterior finishing, MEP systems, and turnkey project delivery. 20+ years in Riyadh, Jeddah & Qassim.",
      keywords: [
        "commercial finishing Saudi Arabia",
        "mall finishing Riyadh",
        "airport finishing KSA",
        "commercial complex finishing",
        "interior finishing malls",
        "exterior finishing commercial",
        "commercial contractor Saudi",
        "retail finishing Jeddah",
        "commercial fit-out Qassim",
        "Lamaat Al-Arabiya commercial finishing",
        "large-scale finishing projects",
        "commercial interior design execution",
      ],
      openGraph: {
        locale: "en_US",
        type: "website",
        title: "Commercial Finishing – Malls & Airports | Lamaat Al-Arabiya Contracting",
        description:
          "Expert commercial finishing for malls, airports, and complexes. Interior & exterior, MEP systems. Riyadh, Jeddah & Qassim.",
        url: `${BASE}/en/commercial-finishing`,
        siteName: "Lamaat Al-Arabiya Contracting | لمعة العربية للمقاولات",
        images: [
          {
            url: `${BASE}/en/opengraph-image`,
            width: 1200,
            height: 630,
            alt: "Lamaat Al-Arabiya Commercial Finishing Services",
          },
        ],
      },
      alternates: {
        canonical: `${BASE}/en/commercial-finishing`,
        languages: { ar: `${BASE}/ar/commercial-finishing`, en: `${BASE}/en/commercial-finishing`, "x-default": `${BASE}/en/commercial-finishing` },
      },
    };
  }

  return {
    title: "تشطيبات تجارية – مولات ومطارات ومجمعات تجارية",
    description:
      "لمعة العربية للمقاولات (Lamaat Al-Arabiya) – تشطيبات تجارية احترافية للمولات والمطارات والمجمعات التجارية. تشطيبات داخلية وخارجية، أعمال كهروميكانيكية، تسليم مشاريع كبرى متكاملة. خبرة +20 عامًا في الرياض وجدة والقصيم.",
    keywords: [
      "تشطيبات تجارية للمولات والمطارات",
      "تنفيذ وتشطيب مجمعات تجارية",
      "شركة تشطيبات داخلية وخارجية",
      "تشطيبات مولات الرياض",
      "تشطيبات مطارات السعودية",
      "تشطيبات تجارية جدة",
      "تشطيبات تجارية القصيم",
      "مقاول تشطيبات مشاريع كبرى",
      "تشطيبات محلات تجارية",
      "تشطيبات فنادق ومطاعم",
      "لمعة العربية تشطيبات",
      "لمعه العربية",
      "لمعة",
      "لمعه",
    ],
    openGraph: {
      locale: "ar_SA",
      type: "website",
      title: "تشطيبات تجارية – مولات ومطارات | لمعة العربية للمقاولات",
      description:
        "تشطيبات تجارية احترافية للمولات والمطارات والمجمعات. تشطيبات داخلية وخارجية. الرياض – جدة – القصيم.",
      url: `${BASE}/ar/commercial-finishing`,
      siteName: "لمعة العربية للمقاولات | Lamaat Al-Arabiya Contracting",
      images: [
        {
          url: `${BASE}/ar/opengraph-image`,
          width: 1200,
          height: 630,
          alt: "تشطيبات تجارية – لمعة العربية للمقاولات",
        },
      ],
    },
    alternates: {
      canonical: `${BASE}/ar/commercial-finishing`,
      languages: { ar: `${BASE}/ar/commercial-finishing`, en: `${BASE}/en/commercial-finishing`, "x-default": `${BASE}/en/commercial-finishing` },
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (locale !== "ar" && locale !== "en") notFound();

  const isAr = locale === "ar";
  const breadcrumbs = getBreadcrumbSchema(locale, [
    { name: isAr ? "الرئيسية" : "Home", path: `/${locale}` },
    { name: isAr ? "التشطيبات التجارية" : "Commercial Finishing", path: `/${locale}/commercial-finishing` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={getCommercialFinishingServiceSchema(locale)} />
      <CommercialFinishingPage locale={locale} />
    </>
  );
}
