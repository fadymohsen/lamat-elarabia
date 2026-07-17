import React from "react";
import { notFound } from "next/navigation";
import TrainingPage from "@/components/legacy/TrainingPage";
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
      title: "Careers & Training – Engineers, Supervisors & Technicians",
      description:
        "Join Lamaat Al-Arabiya Contracting (لمعة العربية للمقاولات) – open positions for civil engineers, site supervisors, electricians & plumbers. Professional training programs in construction and MEP.",
      keywords: [
        "construction jobs Saudi Arabia",
        "contracting careers Riyadh",
        "civil engineer jobs KSA",
        "site supervisor vacancy",
        "construction training programs",
        "Lamaat Al-Arabiya careers",
        "MEP technician jobs",
      ],
      openGraph: {
        locale: "en_US",
        title: "Careers & Training Programs | Lamaat Al-Arabiya Contracting",
        description:
          "Join our team – open positions for engineers, supervisors & technicians. Professional training programs available.",
        url: `${BASE}/en/training`,
      },
      alternates: {
        canonical: `${BASE}/en/training`,
        languages: { ar: `${BASE}/ar/training`, en: `${BASE}/en/training`, "x-default": `${BASE}/en/training` },
      },
    };
  }

  return {
    title: "التوظيف والتدريب – مهندسين ومشرفين وفنيين",
    description:
      "انضم لفريق لمعة العربية للمقاولات (Lamaat Al-Arabiya Contracting) – وظائف شاغرة لمهندسين مدنيين، مشرفي مواقع، وفنيين كهرباء وسباكة. برامج تدريبية متخصصة لتطوير مهاراتك في قطاع المقاولات.",
    keywords: [
      "وظائف مقاولات",
      "توظيف مهندسين السعودية",
      "وظائف بناء الرياض",
      "فرص عمل مقاولات",
      "تدريب مقاولات",
      "وظائف فنيين كهرباء",
      "وظائف مشرف موقع",
      "لمعة العربية توظيف",
    ],
    openGraph: {
      locale: "ar_SA",
      title: "التوظيف والتدريب | لمعة العربية للمقاولات",
      description:
        "فرص وظيفية متنوعة وبرامج تدريبية متخصصة في قطاع المقاولات والبناء.",
      url: `${BASE}/ar/training`,
    },
    alternates: {
      canonical: `${BASE}/ar/training`,
      languages: { ar: `${BASE}/ar/training`, en: `${BASE}/en/training`, "x-default": `${BASE}/en/training` },
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (locale !== "ar" && locale !== "en") notFound();

  const isAr = locale === "ar";
  const breadcrumbs = getBreadcrumbSchema(locale, [
    { name: isAr ? "الرئيسية" : "Home", path: `/${locale}` },
    { name: isAr ? "التوظيف والتدريب" : "Careers & Training", path: `/${locale}/training` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <TrainingPage locale={locale} />
    </>
  );
}
