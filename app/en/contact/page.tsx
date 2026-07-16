import React from "react";
import ContactPage from "@/components/legacy/ContactPage";

export const metadata = {
  title: "Contact Us",
  description: "Contact Lamat Elarabia Contracting by phone, WhatsApp or email.",
  openGraph: {
    locale: "en_US",
    title: "Contact Us – Lamat Elarabia Contracting",
    description: "Contact Lamat Elarabia Contracting by phone, WhatsApp or email.",
  },
};

export default function Page() {
  return <ContactPage locale="en" />;
}
