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

export const metadata = {
  title: {
    template: "%s | لمعة العربية للمقاولات",
    default: "لمعة العربية للمقاولات",
  },
  description: "لمعة العربية للمقاولات، شركة مقاولات في السعودية. نبني اليوم لنصنع مستقبلًا يليق بوطننا.",
  metadataBase: new URL("https://lamat-elarabia.org"),
  openGraph: {
    type: "website",
    locale: "ar_SA",
    siteName: "لمعة العربية للمقاولات",
    title: "لمعة العربية للمقاولات",
    description: "لمعة العربية للمقاولات، شركة مقاولات في السعودية. نبني اليوم لنصنع مستقبلًا يليق بوطننا.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${tajawal.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
