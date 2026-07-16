import React from "react";
import { notFound } from "next/navigation";
import NewsPage from "@/components/legacy/NewsPage";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (locale === "en") {
    return {
      title: "News & Articles",
      description: "The latest news and articles from Lamat Elarabia Contracting.",
      openGraph: { locale: "en_US", title: "News & Articles – Lamat Elarabia Contracting" },
    };
  }
  return {
    title: "الأخبار و المقالات",
    description: "آخر أخبار ومقالات لمعة العربية للمقاولات.",
    openGraph: { title: "الأخبار و المقالات – لمعة العربية للمقاولات" },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (locale !== "ar" && locale !== "en") notFound();
  return <NewsPage locale={locale} />;
}
