import React from "react";

export const metadata = {
  title: {
    template: "%s | Lamat Elarabia Contracting",
    default: "Lamat Elarabia Contracting",
  },
  description: "Lamat Elarabia Contracting, a Riyadh-based contracting company.",
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <div lang="en" dir="ltr">{children}</div>;
}
