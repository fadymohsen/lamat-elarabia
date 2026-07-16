import React from "react";
import { notFound } from "next/navigation";
import TrainingPage from "@/components/legacy/TrainingPage";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (locale === "en") {
    return {
      title: "Employment & Training",
      description: "Employment and training opportunities at Lamat Elarabia Contracting.",
      openGraph: { locale: "en_US", title: "Employment & Training – Lamat Elarabia Contracting" },
    };
  }
  return {
    title: "التوظيف و التدريب",
    description: "فرص التدريب والتوظيف لدى لمعة العربية للمقاولات.",
    openGraph: { title: "التوظيف و التدريب – لمعة العربية للمقاولات" },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (locale !== "ar" && locale !== "en") notFound();
  return <TrainingPage locale={locale} />;
}
