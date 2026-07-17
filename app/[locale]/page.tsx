import React from "react";
import { notFound } from "next/navigation";
import HomePage from "@/components/legacy/HomePage";
import JsonLd from "@/components/JsonLd";
import { getFAQSchema, getLocalBusinessSchemas } from "@/lib/structured-data";
import type { Metadata } from "next";

const BASE = "https://lamat-elarabia.org";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (locale === "en") {
    return {
      title: "Lamat Elarabia Contracting – General Contractor in Riyadh, Jeddah & Qassim",
      description:
        "Lamat Elarabia Contracting (لمعة العربية للمقاولات) – 20+ years building Saudi Arabia. General construction, finishing, MEP, and facility maintenance across Riyadh, Jeddah & Qassim. Trusted by 25+ major clients.",
      keywords: [
        "Lamat Elarabia",
        "Lamat Elarabia Contracting",
        "لمعة العربية",
        "لمعة العربية للمقاولات",
        "general contractor Saudi Arabia",
        "construction company Riyadh",
        "contractor Jeddah",
        "MEP contractor KSA",
        "facility maintenance Saudi",
        "building contractor Qassim",
      ],
      openGraph: {
        locale: "en_US",
        title: "Lamat Elarabia Contracting | General Contractor in Saudi Arabia",
        description:
          "20+ years building Saudi Arabia. Construction, finishing, MEP & maintenance. Riyadh – Jeddah – Qassim.",
        url: `${BASE}/en`,
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
      "لمعة العربية للمقاولات (Lamat Elarabia Contracting) – شركة مقاولات رائدة بخبرة +20 عامًا في الإنشاءات العامة والتشطيبات والصيانة والأعمال الكهروميكانيكية. أكثر من 25 عميل رئيسي وفريق يتجاوز 150 متخصصًا. الرياض – جدة – القصيم.",
    keywords: [
      "لمعة العربية",
      "لمعة العربية للمقاولات",
      "Lamat Elarabia",
      "شركة مقاولات الرياض",
      "مقاولات عامة جدة",
      "تشطيبات السعودية",
      "صيانة مباني",
      "مقاولات القصيم",
      "شركة بناء رؤية 2030",
    ],
    openGraph: {
      locale: "ar_SA",
      title: "لمعة العربية للمقاولات | شركة مقاولات عامة في السعودية",
      description:
        "خبرة +20 عامًا في الإنشاءات والتشطيبات والصيانة. الرياض – جدة – القصيم.",
      url: `${BASE}/ar`,
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

  const localBusinessSchemas = getLocalBusinessSchemas(locale);

  return (
    <>
      <JsonLd data={getFAQSchema(locale)} />
      {localBusinessSchemas.map((schema, i) => (
        <JsonLd key={i} data={schema} />
      ))}
      <HomePage locale={locale} />
    </>
  );
}
