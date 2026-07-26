import React from "react";
import { notFound } from "next/navigation";
import NewsPage from "@/components/legacy/NewsPage";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema, getNewsArticlesSchema } from "@/lib/structured-data";
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
        "villa construction updates",
        "mosque building projects Saudi",
        "sandblasting industry news",
        "commercial finishing projects",
      ],
      openGraph: {
        locale: "en_US",
        type: "website",
        title: "News & Articles | Lamaat Al-Arabiya Contracting",
        description:
          "Latest construction news, project updates and building industry insights from Lamaat Al-Arabiya.",
        url: `${BASE}/en/blogs`,
        siteName: "Lamaat Al-Arabiya Contracting | لمعة العربية للمقاولات",
        images: [
          {
            url: `${BASE}/images/figma/logo-inner.png`,
            width: 1200,
            height: 630,
            alt: "Lamaat Al-Arabiya Construction News & Articles",
          },
        ],
      },
      alternates: {
        canonical: `${BASE}/en/blogs`,
        languages: { ar: `${BASE}/ar/blogs`, en: `${BASE}/en/blogs`, "x-default": `${BASE}/en/blogs` },
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
      "لمعه العربية",
      "مشاريع فلل ومساجد",
      "أخبار التشطيبات التجارية",
      "السفع الرملي الصناعي",
    ],
    openGraph: {
      locale: "ar_SA",
      type: "website",
      title: "الأخبار والمقالات | لمعة العربية للمقاولات",
      description:
        "أحدث أخبار المشاريع ومقالات متخصصة في قطاع المقاولات والبناء في المملكة.",
      url: `${BASE}/ar/blogs`,
      siteName: "لمعة العربية للمقاولات | Lamaat Al-Arabiya Contracting",
      images: [
        {
          url: `${BASE}/images/figma/logo-inner.png`,
          width: 1200,
          height: 630,
          alt: "أخبار ومقالات لمعة العربية",
        },
      ],
    },
    alternates: {
      canonical: `${BASE}/ar/blogs`,
      languages: { ar: `${BASE}/ar/blogs`, en: `${BASE}/en/blogs`, "x-default": `${BASE}/en/blogs` },
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (locale !== "ar" && locale !== "en") notFound();

  const isAr = locale === "ar";
  const breadcrumbs = getBreadcrumbSchema(locale, [
    { name: isAr ? "الرئيسية" : "Home", path: `/${locale}` },
    { name: isAr ? "المدونة" : "Blogs", path: `/${locale}/blogs` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={getNewsArticlesSchema(locale)} />
      <NewsPage locale={locale} />
    </>
  );
}
