import React from "react";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/structured-data";

const VALID_LOCALES = ["ar", "en"] as const;
type Locale = (typeof VALID_LOCALES)[number];

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return VALID_LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  if (!VALID_LOCALES.includes(locale as Locale)) {
    notFound();
  }

  const isAr = locale === "ar";

  return (
    <div lang={locale} dir={isAr ? "rtl" : "ltr"}>
      <JsonLd data={getOrganizationSchema(locale)} />
      <JsonLd data={getWebSiteSchema()} />
      {children}
    </div>
  );
}
