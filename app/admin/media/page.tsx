import React from "react";
import { verifySession } from "@/lib/dal";
import { query } from "@/lib/db";
import UploadForm from "./UploadForm";
import MediaGrid from "./MediaGrid";

export const metadata = {
  title: "الصور والوسائط - لوحة التحكم",
};

interface MediaItem {
  id: number;
  url: string;
  alt_text: string | null;
  created_at: Date;
}

export default async function AdminMediaPage() {
  await verifySession();
  const { rows: media } = await query<MediaItem>(
    "SELECT id, url, alt_text, created_at FROM media ORDER BY created_at DESC"
  );

  return (
    <main dir="rtl" style={{ fontFamily: "Tajawal, sans-serif", background: "#FBFAF7", minHeight: "100vh" }}>
      <header style={{ background: "#137547", color: "#FBFAF7", padding: "20px 32px" }}>
        <a href="/admin" style={{ color: "#FBFAF7", textDecoration: "none", fontSize: "0.9rem" }}>
          ← رجوع للوحة التحكم
        </a>
        <h1 style={{ fontFamily: "Cairo, sans-serif", fontWeight: 800, fontSize: "1.3rem", margin: "8px 0 0" }}>
          الصور والوسائط
        </h1>
      </header>
      <div style={{ padding: "32px", maxWidth: "960px", margin: "0 auto" }}>
        <div
          style={{
            background: "#fff",
            borderRadius: "24px",
            padding: "24px",
            marginBottom: "24px",
            boxShadow: "0 1px 3px rgba(20,19,16,0.12)",
          }}
        >
          <h2 style={{ fontFamily: "Cairo, sans-serif", fontWeight: 800, fontSize: "1.05rem", marginTop: 0 }}>
            رفع صورة جديدة
          </h2>
          <UploadForm />
        </div>

        <MediaGrid media={media} />
      </div>
    </main>
  );
}
