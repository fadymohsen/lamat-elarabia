import React from "react";
import NewsPage from "@/components/legacy/NewsPage";

export const metadata = {
  title: "الأخبار و المقالات",
  description: "آخر أخبار ومقالات لمعة العربية للمقاولات.",
  openGraph: {
    title: "الأخبار و المقالات – لمعة العربية للمقاولات",
    description: "آخر أخبار ومقالات لمعة العربية للمقاولات.",
  },
};

export default function Page() {
  return <NewsPage locale="ar" />;
}
