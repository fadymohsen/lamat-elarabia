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
    template: "%s | لمعة العربية للمقاولات",
    default: "لمعة العربية للمقاولات | شركة مقاولات عامة في السعودية",
  },
  description:
    "لمعة العربية للمقاولات – شركة مقاولات رائدة في الرياض وجدة والقصيم. متخصصون في الإنشاءات العامة، التشطيبات، الصيانة والأعمال الكهروميكانيكية منذ 2005.",
  keywords: [
    "مقاولات",
    "شركة مقاولات",
    "مقاولات عامة",
    "لمعة العربية",
    "مقاولات الرياض",
    "مقاولات جدة",
    "بناء",
    "تشطيبات",
    "صيانة مباني",
    "contracting",
    "Saudi Arabia",
    "Riyadh contractor",
    "construction company",
  ],
  authors: [{ name: "لمعة العربية للمقاولات" }],
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
    siteName: "لمعة العربية للمقاولات | Lamat Elarabia Contracting",
    title: "لمعة العربية للمقاولات | شركة مقاولات عامة في السعودية",
    description:
      "شركة مقاولات رائدة بخبرة +20 عامًا في الإنشاءات والتشطيبات والصيانة. فروع في الرياض، جدة، والقصيم.",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      ar: `${BASE_URL}/ar`,
      en: `${BASE_URL}/en`,
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
