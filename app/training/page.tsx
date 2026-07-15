import React from "react";
import TrainingPage from "@/components/legacy/TrainingPage";

export const metadata = {
  title: "التوظيف و التدريب – لمعة العربية للمقاولات",
  description: "فرص التدريب والتوظيف لدى لمعة العربية للمقاولات.",
};

export default function Page() {
  return <TrainingPage locale="ar" />;
}
