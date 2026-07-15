import React from "react";
import HomePage from "@/components/legacy/HomePage";

export const metadata = {
  title: "لمعة العربية للمقاولات",
  description: "لمعة العربية للمقاولات، شركة مقاولات في الرياض. نبني اليوم لنصنع مستقبلًا يليق بوطننا.",
};

export default function Page() {
  return <HomePage locale="ar" />;
}
