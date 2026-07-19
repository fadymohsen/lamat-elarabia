import React from "react";
import { Cairo, Tajawal } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-cairo",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
  variable: "--font-tajawal",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const BASE_URL = "https://lamat-elarabia.org";

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: "%s | لمعة العربية للمقاولات | Lamaat Al-Arabiya Contracting",
    default: "لمعة العربية للمقاولات | Lamaat Al-Arabiya Contracting",
  },
  description:
    "لمعة العربية للمقاولات (Lamaat Al-Arabiya Contracting) – شركة مقاولات رائدة في الرياض وجدة والقصيم منذ 2005. إنشاءات عامة، تشطيبات، صيانة، وأعمال كهروميكانيكية.",
  keywords: [
    "مقاولات",
    "شركة مقاولات",
    "مقاولات عامة",
    "لمعة العربية",
    "لمعة العربية للمقاولات",
    "لمعه العربيه للمقاولات",
    "لمعة العربيه",
    "لمعه العربية",
    "مقاولات الرياض",
    "مقاولات جدة",
    "مقاولات القصيم",
    "بناء",
    "تشطيبات",
    "صيانة مباني",
    "أعمال كهروميكانيكية",
    "مقاول عام السعودية",
    "شركة إنشاءات",
    "رؤية 2030 مقاولات",
    "contracting",
    "Saudi Arabia",
    "Riyadh contractor",
    "construction company",
    "Lamaat Al-Arabiya",
    "Lamaat Al-Arabiya Contracting",
    "Lamaat Alarabiya",
    "Lam3at Al Arabia",
    "Lama3t Al-Arabia",
    "Lamat Elarabia",
    "Lamat Al Arabia Contracting",
    "general contractor KSA",
    "Jeddah contractor",
    "Qassim construction",
    "MEP contractor Saudi",
    "building contractor Saudi Arabia",
  ],
  category: "Construction & Contracting",
  authors: [{ name: "لمعة العربية للمقاولات", url: BASE_URL }],
  creator: "لمعة العربية للمقاولات",
  publisher: "لمعة العربية للمقاولات",
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    alternateLocale: "en_US",
    siteName: "Lamaat Al-Arabiya | لمعة العربية للمقاولات",
    title: "لمعة العربية للمقاولات | Lamaat Al-Arabiya Contracting",
    description:
      "شركة مقاولات رائدة بخبرة +20 عامًا. إنشاءات، تشطيبات، صيانة. الرياض – جدة – القصيم.",
  },
  twitter: {
    card: "summary_large_image",
    title: "لمعة العربية للمقاولات | Lamaat Al-Arabiya Contracting",
    description:
      "شركة مقاولات رائدة بخبرة +20 عامًا. إنشاءات، تشطيبات، صيانة. الرياض – جدة – القصيم.",
  },
  verification: {
    google: "GOOGLE_SITE_VERIFICATION_CODE_HERE",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: `${BASE_URL}/ar`,
    languages: {
      ar: `${BASE_URL}/ar`,
      en: `${BASE_URL}/en`,
      "x-default": `${BASE_URL}/en`,
    },
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const { headers } = await import("next/headers");
  const headersList = await headers();
  const lang = headersList.get("x-locale") ?? "ar";

  return (
    <html lang={lang} className={`${cairo.variable} ${tajawal.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
