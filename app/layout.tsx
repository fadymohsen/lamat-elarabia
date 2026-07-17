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
    template: "%s | Lamat Elarabia | لمعة العربية",
    default: "لمعة العربية للمقاولات | Lamat Elarabia Contracting",
  },
  description:
    "لمعة العربية للمقاولات (Lamat Elarabia) – شركة مقاولات رائدة في الرياض وجدة والقصيم منذ 2005. إنشاءات عامة، تشطيبات، صيانة، وأعمال كهروميكانيكية.",
  keywords: [
    "مقاولات",
    "شركة مقاولات",
    "مقاولات عامة",
    "لمعة العربية",
    "لمعة العربية للمقاولات",
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
    "Lamat Elarabia",
    "Lamat Elarabia Contracting",
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
    siteName: "Lamat Elarabia | لمعة العربية للمقاولات",
    title: "لمعة العربية للمقاولات | Lamat Elarabia Contracting",
    description:
      "شركة مقاولات رائدة بخبرة +20 عامًا. إنشاءات، تشطيبات، صيانة. الرياض – جدة – القصيم.",
  },
  twitter: {
    card: "summary_large_image",
    title: "لمعة العربية للمقاولات | Lamat Elarabia Contracting",
    description:
      "شركة مقاولات رائدة بخبرة +20 عامًا. إنشاءات، تشطيبات، صيانة. الرياض – جدة – القصيم.",
  },
  // Uncomment and replace with your actual verification code from Google Search Console:
  // verification: {
  //   google: "YOUR_GOOGLE_SITE_VERIFICATION_CODE",
  // },
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

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ar" className={`${cairo.variable} ${tajawal.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
