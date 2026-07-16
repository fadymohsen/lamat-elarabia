import React from "react";
import HomePage from "@/components/legacy/HomePage";

export const metadata = {
  title: "Lamat Elarabia Contracting",
  description: "Lamat Elarabia Contracting, a Riyadh-based contracting company. We build today to make a future worthy of our nation.",
  openGraph: {
    locale: "en_US",
    title: "Lamat Elarabia Contracting",
    description: "Lamat Elarabia Contracting, a Riyadh-based contracting company. We build today to make a future worthy of our nation.",
  },
};

export default function Page() {
  return <HomePage locale="en" />;
}
