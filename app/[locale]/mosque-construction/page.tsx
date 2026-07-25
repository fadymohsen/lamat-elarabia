import React from "react";
import { notFound } from "next/navigation";
import MosqueConstructionPage from "@/components/legacy/MosqueConstructionPage";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema, getMosqueServiceSchema } from "@/lib/structured-data";
import type { Metadata } from "next";

const BASE = "https://lamat-elarabia.org";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (locale === "en") {
    return {
      title: "Mosque & Jamea Construction – Building Houses of Worship Across Saudi Arabia",
      description:
        "Lamaat Al-Arabiya Contracting (لمعة العربية للمقاولات) – Specialized mosque and jamea construction across Saudi Arabia. From foundation to finishing, minarets, domes, prayer halls, and ablution areas. 20+ years of experience in Riyadh, Jeddah & Qassim.",
      keywords: [
        "mosque construction Saudi Arabia",
        "jamea building KSA",
        "mosque contractor Riyadh",
        "mosque building Qassim",
        "mosque construction Jeddah",
        "prayer hall construction",
        "minaret construction Saudi",
        "Islamic architecture contractor",
        "mosque finishing works",
        "Lamaat Al-Arabiya mosque",
        "house of worship construction",
      ],
      openGraph: {
        locale: "en_US",
        type: "website",
        title: "Mosque & Jamea Construction | Lamaat Al-Arabiya Contracting",
        description:
          "Specialized mosque construction – foundation to finishing, minarets, domes, prayer halls. Riyadh, Jeddah & Qassim.",
        url: `${BASE}/en/mosque-construction`,
        siteName: "Lamaat Al-Arabiya Contracting | لمعة العربية للمقاولات",
        images: [
          {
            url: `${BASE}/en/opengraph-image`,
            width: 1200,
            height: 630,
            alt: "Lamaat Al-Arabiya Mosque Construction Services",
          },
        ],
      },
      alternates: {
        canonical: `${BASE}/en/mosque-construction`,
        languages: { ar: `${BASE}/ar/mosque-construction`, en: `${BASE}/en/mosque-construction`, "x-default": `${BASE}/en/mosque-construction` },
      },
    };
  }

  return {
    title: "بناء مساجد وجوامع – تنفيذ وتشطيب دور العبادة في المملكة",
    description:
      "لمعة العربية للمقاولات (Lamaat Al-Arabiya) – متخصصون في بناء المساجد والجوامع في المملكة العربية السعودية. من الأساسات إلى التشطيب الكامل، المآذن والقباب وقاعات الصلاة ودورات المياه. خبرة +20 عامًا في الرياض وجدة والقصيم.",
    keywords: [
      "مقاولات بناء مساجد وجوامع بالمملكة",
      "بناء مساجد في السعودية",
      "شركة بناء مساجد الرياض",
      "بناء جوامع القصيم",
      "بناء مساجد جدة",
      "تشطيب مساجد",
      "تنفيذ مساجد وجوامع",
      "مقاول مساجد السعودية",
      "بناء قاعات صلاة",
      "تشطيب مآذن وقباب",
      "لمعة العربية بناء مساجد",
      "لمعه العربية",
      "لمعة",
      "لمعه",
    ],
    openGraph: {
      locale: "ar_SA",
      type: "website",
      title: "بناء مساجد وجوامع | لمعة العربية للمقاولات",
      description:
        "بناء وتشطيب مساجد وجوامع بأعلى معايير الجودة. مآذن، قباب، قاعات صلاة. الرياض – جدة – القصيم.",
      url: `${BASE}/ar/mosque-construction`,
      siteName: "لمعة العربية للمقاولات | Lamaat Al-Arabiya Contracting",
      images: [
        {
          url: `${BASE}/ar/opengraph-image`,
          width: 1200,
          height: 630,
          alt: "بناء مساجد وجوامع – لمعة العربية للمقاولات",
        },
      ],
    },
    alternates: {
      canonical: `${BASE}/ar/mosque-construction`,
      languages: { ar: `${BASE}/ar/mosque-construction`, en: `${BASE}/en/mosque-construction`, "x-default": `${BASE}/en/mosque-construction` },
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (locale !== "ar" && locale !== "en") notFound();

  const isAr = locale === "ar";
  const breadcrumbs = getBreadcrumbSchema(locale, [
    { name: isAr ? "الرئيسية" : "Home", path: `/${locale}` },
    { name: isAr ? "بناء المساجد" : "Mosque Construction", path: `/${locale}/mosque-construction` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={getMosqueServiceSchema(locale)} />
      <MosqueConstructionPage locale={locale} />
    </>
  );
}
