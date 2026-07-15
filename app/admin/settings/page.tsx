import React from "react";
import { verifySession } from "@/lib/dal";
import { getSiteSettings } from "@/lib/settings";
import SettingsForm from "./SettingsForm";

export const metadata = {
  title: "الإعدادات - لوحة التحكم",
};

export default async function AdminSettingsPage() {
  await verifySession();
  const settings = await getSiteSettings();

  return (
    <main dir="rtl" style={{ fontFamily: "Tajawal, sans-serif", background: "#FBFAF7", minHeight: "100vh" }}>
      <header style={{ background: "#137547", color: "#FBFAF7", padding: "20px 32px" }}>
        <a href="/admin" style={{ color: "#FBFAF7", textDecoration: "none", fontSize: "0.9rem" }}>
          ← رجوع للوحة التحكم
        </a>
        <h1 style={{ fontFamily: "Cairo, sans-serif", fontWeight: 800, fontSize: "1.3rem", margin: "8px 0 0" }}>
          إعدادات التواصل
        </h1>
      </header>
      <div style={{ padding: "32px", maxWidth: "600px", margin: "0 auto" }}>
        <div
          style={{
            background: "#fff",
            borderRadius: "24px",
            padding: "24px",
            boxShadow: "0 1px 3px rgba(20,19,16,0.12)",
          }}
        >
          <SettingsForm settings={settings} />
        </div>
      </div>
    </main>
  );
}
