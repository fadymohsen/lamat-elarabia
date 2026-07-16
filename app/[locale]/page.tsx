import React from "react";
import { notFound } from "next/navigation";
import HomePage from "@/components/legacy/HomePage";
import type { Metadata } from "next";

const BASE = "https://lamat-elarabia.org";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (locale === "en") {
    return {
      title: "Lamat Elarabia Contracting | General Contractor in Saudi Arabia",
      description:
        "Leading contracting company in Riyadh, Jeddah & Qassim. 20+ years of experience in construction, finishing, MEP works and facility maintenance across KSA.",
      keywords: [
        "contracting company Saudi Arabia",
        "general contractor Riyadh",
        "construction company KSA",
        "building contractor Jeddah",
        "MEP contractor",
        "facility maintenance Saudi",
        "Lamat Elarabia",
      ],
      openGraph: {
        locale: "en_US",
        title: "Lamat Elarabia Contracting | General Contractor in Saudi Arabia",
        description:
          "Leading contracting company in Riyadh, Jeddah & Qassim. 20+ years in construction, finishing & maintenance.",
        url: `${BASE}/en`,
      },
      alternates: {
        canonical: `${BASE}/en`,
        languages: { ar: `${BASE}/ar`, en: `${BASE}/en`, "x-default": `${BASE}/en` },
      },
    };
  }

  return {
    title: "لمعة العربية للمقاولات | مقاولات عامة وتشطيبات في الرياض وجدة",
    description:
      "شركة لمعة العربية للمقاولات – خبرة تتجاوز 20 عامًا في الإنشاءات العامة، التشطيبات الحديثة، الصيانة، والأعمال الكهروميكانيكية. فروع في الرياض وجدة والقصيم.",
    keywords: [
      "شركة مقاولات",
      "مقاولات عامة الرياض",
      "تشطيبات جدة",
      "صيانة مباني",
      "أعمال كهروميكانيكية",
      "مقاولات القصيم",
      "لمعة العربية للمقاولات",
      "شركة بناء السعودية",
      "مقاولات رؤية 2030",
    ],
    openGraph: {
      locale: "ar_SA",
      title: "لمعة العربية للمقاولات | مقاولات عامة وتشطيبات في الرياض وجدة",
      description:
        "شركة مقاولات رائدة بخبرة +20 عامًا في الإنشاءات والتشطيبات والصيانة. فروع في الرياض، جدة، والقصيم.",
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
  return <HomePage locale={locale} />;
}
