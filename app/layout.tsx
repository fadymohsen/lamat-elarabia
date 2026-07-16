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
    siteName: "Lamat Elarabia | لمعة العربية للمقاولات",
    title: "لمعة العربية للمقاولات | Lamat Elarabia Contracting",
    description:
      "شركة مقاولات رائدة بخبرة +20 عامًا. إنشاءات، تشطيبات، صيانة. الرياض – جدة – القصيم.",
  },
  twitter: {
    card: "summary_large_image",
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
