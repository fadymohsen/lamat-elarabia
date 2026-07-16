import React from "react";
import TrainingPage from "@/components/legacy/TrainingPage";

export const metadata = {
  title: "Employment & Training",
  description: "Employment and training opportunities at Lamat Elarabia Contracting.",
  openGraph: {
    locale: "en_US",
    title: "Employment & Training – Lamat Elarabia Contracting",
    description: "Employment and training opportunities at Lamat Elarabia Contracting.",
  },
};

export default function Page() {
  return <TrainingPage locale="en" />;
}
