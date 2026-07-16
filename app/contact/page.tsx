import React from "react";
import ContactPage from "@/components/legacy/ContactPage";

export const metadata = {
  title: "تواصل معنا",
  description: "تواصل مع لمعة العربية للمقاولات عبر الهاتف أو واتساب أو البريد الإلكتروني.",
  openGraph: {
    title: "تواصل معنا – لمعة العربية للمقاولات",
    description: "تواصل مع لمعة العربية للمقاولات عبر الهاتف أو واتساب أو البريد الإلكتروني.",
  },
};

export default function Page() {
  return <ContactPage locale="ar" />;
}
