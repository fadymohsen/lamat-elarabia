import React from "react";
import { notFound } from "next/navigation";
import ContactPage from "@/components/legacy/ContactPage";
import type { Metadata } from "next";

const BASE = "https://lamat-elarabia.org";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (locale === "en") {
    return {
      title: "Contact Us | Get a Free Quote for Your Project",
      description:
        "Reach Lamat Elarabia Contracting via phone, WhatsApp or email. Offices in Riyadh, Jeddah & Qassim. Request a consultation or free project estimate today.",
      keywords: [
        "contact contractor Saudi Arabia",
        "construction quote Riyadh",
        "contracting company phone",
        "Lamat Elarabia contact",
        "Jeddah contractor contact",
        "Qassim construction company",
        "free construction estimate",
      ],
      openGraph: {
        locale: "en_US",
        title: "Contact Us | Lamat Elarabia Contracting",
        description:
          "Get in touch with our team in Riyadh, Jeddah or Qassim. Free project consultations and estimates.",
        url: `${BASE}/en/contact`,
      },
      alternates: {
        canonical: `${BASE}/en/contact`,
        languages: { ar: `${BASE}/ar/contact`, en: `${BASE}/en/contact` },
      },
    };
  }

  return {
    title: "تواصل معنا | احصل على عرض سعر لمشروعك",
    description:
      "تواصل مع لمعة العربية للمقاولات عبر الهاتف أو واتساب أو البريد الإلكتروني. فروعنا في الرياض وجدة والقصيم. استشارة مجانية وعرض أسعار لمشروعك.",
    keywords: [
      "تواصل شركة مقاولات",
      "عرض سعر مقاولات",
      "رقم شركة مقاولات الرياض",
      "واتساب مقاولات",
      "استشارة بناء مجانية",
      "لمعة العربية تواصل",
      "فروع شركة مقاولات جدة",
      "مقاولات القصيم",
    ],
    openGraph: {
      locale: "ar_SA",
      title: "تواصل معنا | لمعة العربية للمقاولات",
      description:
        "تواصل معنا للحصول على استشارة مجانية وعرض سعر. فروع في الرياض، جدة، والقصيم.",
      url: `${BASE}/ar/contact`,
    },
    alternates: {
      canonical: `${BASE}/ar/contact`,
      languages: { ar: `${BASE}/ar/contact`, en: `${BASE}/en/contact` },
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (locale !== "ar" && locale !== "en") notFound();
  return <ContactPage locale={locale} />;
}
