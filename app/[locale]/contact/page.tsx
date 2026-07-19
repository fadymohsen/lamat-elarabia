import React from "react";
import { notFound } from "next/navigation";
import ContactPage from "@/components/legacy/ContactPage";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema, getContactPageSchema, getLocalBusinessSchemas } from "@/lib/structured-data";
import type { Metadata } from "next";

const BASE = "https://lamat-elarabia.org";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (locale === "en") {
    return {
      title: "Contact Us – Free Consultation & Project Quote",
      description:
        "Contact Lamaat Al-Arabiya Contracting (لمعة العربية للمقاولات) via phone, WhatsApp or email. Offices in Riyadh, Jeddah & Qassim. Free consultation and project estimate.",
      keywords: [
        "contact contractor Saudi Arabia",
        "construction quote Riyadh",
        "contracting company phone",
        "Lamaat Al-Arabiya contact",
        "Jeddah contractor contact",
        "Qassim construction company",
        "free construction estimate",
      ],
      openGraph: {
        locale: "en_US",
        type: "website",
        title: "Contact Us | Lamaat Al-Arabiya Contracting",
        description:
          "Get in touch with our team in Riyadh, Jeddah or Qassim. Free project consultations and estimates.",
        url: `${BASE}/en/contact`,
        siteName: "Lamaat Al-Arabiya Contracting | لمعة العربية للمقاولات",
        images: [
          {
            url: `${BASE}/en/opengraph-image`,
            width: 1200,
            height: 630,
            alt: "Contact Lamaat Al-Arabiya Contracting",
          },
        ],
      },
      alternates: {
        canonical: `${BASE}/en/contact`,
        languages: { ar: `${BASE}/ar/contact`, en: `${BASE}/en/contact`, "x-default": `${BASE}/en/contact` },
      },
    };
  }

  return {
    title: "تواصل معنا – استشارة مجانية وعرض سعر",
    description:
      "تواصل مع لمعة العربية للمقاولات (Lamaat Al-Arabiya Contracting) عبر الهاتف أو واتساب أو البريد الإلكتروني. فروع في الرياض وجدة والقصيم. احصل على استشارة مجانية وعرض سعر لمشروعك.",
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
      type: "website",
      title: "تواصل معنا | لمعة العربية للمقاولات",
      description:
        "تواصل معنا للحصول على استشارة مجانية وعرض سعر. فروع في الرياض، جدة، والقصيم.",
      url: `${BASE}/ar/contact`,
      siteName: "لمعة العربية للمقاولات | Lamaat Al-Arabiya Contracting",
      images: [
        {
          url: `${BASE}/ar/opengraph-image`,
          width: 1200,
          height: 630,
          alt: "تواصل مع لمعة العربية",
        },
      ],
    },
    alternates: {
      canonical: `${BASE}/ar/contact`,
      languages: { ar: `${BASE}/ar/contact`, en: `${BASE}/en/contact`, "x-default": `${BASE}/en/contact` },
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (locale !== "ar" && locale !== "en") notFound();

  const isAr = locale === "ar";
  const breadcrumbs = getBreadcrumbSchema(locale, [
    { name: isAr ? "الرئيسية" : "Home", path: `/${locale}` },
    { name: isAr ? "تواصل معنا" : "Contact Us", path: `/${locale}/contact` },
  ]);

  const localBusinessSchemas = getLocalBusinessSchemas(locale);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={getContactPageSchema(locale)} />
      {localBusinessSchemas.map((schema, i) => (
        <JsonLd key={i} data={schema} />
      ))}
      <ContactPage locale={locale} />
    </>
  );
}
