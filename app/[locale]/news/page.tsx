import React from "react";
import { notFound } from "next/navigation";
import NewsPage from "@/components/legacy/NewsPage";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema } from "@/lib/structured-data";
import type { Metadata } from "next";

const BASE = "https://lamat-elarabia.org";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (locale === "en") {
    return {
      title: "News & Articles – Projects, Trends & Quality Standards",
      description:
        "Latest construction news from Lamaat Al-Arabiya Contracting (لمعة العربية للمقاولات) – project updates, quality standards, safety best practices, and building trends shaping Saudi Arabia's Vision 2030.",
      keywords: [
        "construction news Saudi Arabia",
        "building trends KSA",
        "contracting industry updates",
        "construction quality standards",
        "Saudi Vision 2030 construction",
        "Lamaat Al-Arabiya projects",
      ],
      openGraph: {
        locale: "en_US",
        title: "News & Articles | Lamaat Al-Arabiya Contracting",
        description:
          "Latest construction news, project updates and building industry insights from Lamaat Al-Arabiya.",
        url: `${BASE}/en/news`,
        siteName: "Lamaat Al-Arabiya Contracting | لمعة العربية للمقاولات",
        images: [{ url: `${BASE}/en/opengraph-image`, width: 1200, height: 630 }],
      },
      alternates: {
        canonical: `${BASE}/en/news`,
        languages: { ar: `${BASE}/ar/news`, en: `${BASE}/en/news`, "x-default": `${BASE}/en/news` },
      },
    };
  }

  return {
    title: "الأخبار والمقالات – مشاريع ومعايير جودة البناء",
    description:
      "تابع أحدث أخبار لمعة العربية للمقاولات (Lamaat Al-Arabiya) – مشاريع وعقود جديدة، مقالات متخصصة في معايير الجودة والسلامة، وتحليلات سوق المقاولات في المملكة العربية السعودية.",
    keywords: [
      "أخبار المقاولات",
      "مشاريع بناء السعودية",
      "معايير جودة البناء",
      "أخبار الإنشاءات",
      "سلامة مواقع البناء",
      "اتجاهات البناء الحديثة",
      "لمعة العربية أخبار",
    ],
    openGraph: {
      locale: "ar_SA",
      title: "الأخبار والمقالات | لمعة العربية للمقاولات",
      description:
        "أحدث أخبار المشاريع ومقالات متخصصة في قطاع المقاولات والبناء في المملكة.",
      url: `${BASE}/ar/news`,
      siteName: "لمعة العربية للمقاولات | Lamaat Al-Arabiya Contracting",
      images: [{ url: `${BASE}/ar/opengraph-image`, width: 1200, height: 630 }],
    },
    alternates: {
      canonical: `${BASE}/ar/news`,
      languages: { ar: `${BASE}/ar/news`, en: `${BASE}/en/news`, "x-default": `${BASE}/en/news` },
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (locale !== "ar" && locale !== "en") notFound();

  const isAr = locale === "ar";
  const breadcrumbs = getBreadcrumbSchema(locale, [
    { name: isAr ? "الرئيسية" : "Home", path: `/${locale}` },
    { name: isAr ? "الأخبار والمقالات" : "News & Articles", path: `/${locale}/news` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <NewsPage locale={locale} />
    </>
  );
}
