import React from "react";
import { notFound } from "next/navigation";
import SandblastingPage from "@/components/legacy/SandblastingPage";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema, getSandblastingServiceSchema } from "@/lib/structured-data";
import type { Metadata } from "next";

const BASE = "https://lamat-elarabia.org";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (locale === "en") {
    return {
      title: "Industrial Sandblasting Services – Surface Preparation & Metal Treatment",
      description:
        "Lamaat Al-Arabiya Contracting (لمعة العربية للمقاولات) – Professional industrial sandblasting services in Riyadh, Jeddah & Qassim. Metal surface preparation, tank & pipe cleaning, structural steel treatment to international coating standards.",
      keywords: [
        "industrial sandblasting Riyadh",
        "sandblasting services Saudi Arabia",
        "metal surface preparation KSA",
        "sandblasting Qassim",
        "structural steel sandblasting",
        "tank cleaning sandblasting",
        "pipe sandblasting Saudi",
        "industrial surface treatment",
        "coating preparation standards",
        "sandblasting factories plants",
        "Lamaat Al-Arabiya sandblasting",
        "metal blasting Jeddah",
      ],
      openGraph: {
        locale: "en_US",
        type: "website",
        title: "Industrial Sandblasting Services | Lamaat Al-Arabiya Contracting",
        description:
          "Professional industrial sandblasting – metal surface preparation, tank & pipe cleaning, structural steel treatment. Riyadh, Jeddah & Qassim.",
        url: `${BASE}/en/sandblasting`,
        siteName: "Lamaat Al-Arabiya Contracting | لمعة العربية للمقاولات",
        images: [
          {
            url: `${BASE}/en/opengraph-image`,
            width: 1200,
            height: 630,
            alt: "Lamaat Al-Arabiya Industrial Sandblasting Services",
          },
        ],
      },
      alternates: {
        canonical: `${BASE}/en/sandblasting`,
        languages: { ar: `${BASE}/ar/sandblasting`, en: `${BASE}/en/sandblasting`, "x-default": `${BASE}/en/sandblasting` },
      },
    };
  }

  return {
    title: "خدمات السفع الرملي الصناعي – معالجة وتجهيز الأسطح المعدنية",
    description:
      "لمعة العربية للمقاولات (Lamaat Al-Arabiya) – خدمات السفع الرملي الصناعي بالرياض والقصيم وجدة. معالجة الأسطح المعدنية، تنظيف الخزانات والأنابيب، تجهيز الهياكل الحديدية للدهانات الصناعية وفق المعايير القياسية.",
    keywords: [
      "سفع رملي صناعي",
      "خدمات السفع الرملي الصناعي بالرياض والقصيم",
      "معالجة الأسطح المعدنية بالسفع الرملي",
      "تجهيز الهياكل المعدنية والحديدية",
      "سفع رملي للمصانع والمنشآت",
      "تنظيف الخزانات والأنابيب المعدنية بالسفع",
      "تجهيز الأسطح للدهانات الصناعية",
      "المعايير القياسية للسفع الرملي",
      "لمعة العربية سفع رملي",
      "لمعه العربية",
      "لمعة",
      "لمعه",
      "sandblasting",
      "سفع رملي جدة",
      "سفع رملي الرياض",
    ],
    openGraph: {
      locale: "ar_SA",
      type: "website",
      title: "خدمات السفع الرملي الصناعي | لمعة العربية للمقاولات",
      description:
        "سفع رملي صناعي احترافي – معالجة أسطح معدنية، تنظيف خزانات وأنابيب، تجهيز هياكل حديدية. الرياض – القصيم – جدة.",
      url: `${BASE}/ar/sandblasting`,
      siteName: "لمعة العربية للمقاولات | Lamaat Al-Arabiya Contracting",
      images: [
        {
          url: `${BASE}/ar/opengraph-image`,
          width: 1200,
          height: 630,
          alt: "خدمات السفع الرملي الصناعي – لمعة العربية للمقاولات",
        },
      ],
    },
    alternates: {
      canonical: `${BASE}/ar/sandblasting`,
      languages: { ar: `${BASE}/ar/sandblasting`, en: `${BASE}/en/sandblasting`, "x-default": `${BASE}/en/sandblasting` },
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (locale !== "ar" && locale !== "en") notFound();

  const isAr = locale === "ar";
  const breadcrumbs = getBreadcrumbSchema(locale, [
    { name: isAr ? "الرئيسية" : "Home", path: `/${locale}` },
    { name: isAr ? "السفع الرملي الصناعي" : "Industrial Sandblasting", path: `/${locale}/sandblasting` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={getSandblastingServiceSchema(locale)} />
      <SandblastingPage locale={locale} />
    </>
  );
}
