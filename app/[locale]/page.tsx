import React from "react";
import { notFound } from "next/navigation";
import HomePage from "@/components/legacy/HomePage";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (locale === "en") {
    return {
      title: "Lamat Elarabia Contracting",
      description: "Lamat Elarabia Contracting, a Riyadh-based contracting company. We build today to make a future worthy of our nation.",
      openGraph: {
        locale: "en_US",
        title: "Lamat Elarabia Contracting",
        description: "Lamat Elarabia Contracting, a Riyadh-based contracting company.",
      },
    };
  }
  return {
    title: "لمعة العربية للمقاولات",
    description: "لمعة العربية للمقاولات، شركة مقاولات في الرياض. نبني اليوم لنصنع مستقبلًا يليق بوطننا.",
    openGraph: {
      title: "لمعة العربية للمقاولات",
      description: "لمعة العربية للمقاولات، شركة مقاولات في الرياض.",
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (locale !== "ar" && locale !== "en") notFound();
  return <HomePage locale={locale} />;
}
