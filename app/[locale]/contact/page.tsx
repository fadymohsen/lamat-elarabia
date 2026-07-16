import React from "react";
import { notFound } from "next/navigation";
import ContactPage from "@/components/legacy/ContactPage";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (locale === "en") {
    return {
      title: "Contact Us",
      description: "Contact Lamat Elarabia Contracting by phone, WhatsApp or email.",
      openGraph: { locale: "en_US", title: "Contact Us – Lamat Elarabia Contracting" },
    };
  }
  return {
    title: "تواصل معنا",
    description: "تواصل مع لمعة العربية للمقاولات عبر الهاتف أو واتساب أو البريد الإلكتروني.",
    openGraph: { title: "تواصل معنا – لمعة العربية للمقاولات" },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (locale !== "ar" && locale !== "en") notFound();
  return <ContactPage locale={locale} />;
}
