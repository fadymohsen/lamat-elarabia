import React from "react";
import { notFound } from "next/navigation";
import { verifySession } from "@/lib/dal";
import { query } from "@/lib/db";
import { extractEditable } from "@/lib/html-editor";
import PageEditor from "./PageEditor";

export const metadata = {
  title: "تعديل صفحة - لوحة التحكم",
};

interface AdminPageEditorProps {
  params: Promise<{ id: string }>;
}

export default async function AdminPageEditor({ params }: AdminPageEditorProps) {
  await verifySession();
  const { id } = await params;
  const pageId = Number(id);
  if (!Number.isInteger(pageId)) notFound();

  const { rows } = await query(
    `SELECT p.id, p.slug, p.title, s.content->>'html' AS html
       FROM pages p JOIN sections s ON s.page_id = p.id AND s.type = 'legacy_html'
      WHERE p.id = $1`,
    [pageId]
  );
  const page = rows[0];
  if (!page) notFound();

  const { texts, images } = extractEditable(page.html);

  const { rows: media } = await query(
    "SELECT id, url, alt_text FROM media ORDER BY created_at DESC LIMIT 100"
  );

  return (
    <main dir="rtl" style={{ fontFamily: "Tajawal, sans-serif", background: "#FBFAF7", minHeight: "100vh" }}>
      <header style={{ background: "#137547", color: "#FBFAF7", padding: "20px 32px" }}>
        <a href="/admin" style={{ color: "#FBFAF7", textDecoration: "none", fontSize: "0.9rem" }}>
          ← رجوع للوحة التحكم
        </a>
        <h1 style={{ fontFamily: "Cairo, sans-serif", fontWeight: 800, fontSize: "1.3rem", margin: "8px 0 0" }}>
          تعديل: {page.title || page.slug}
        </h1>
      </header>
      <div style={{ padding: "32px", maxWidth: "860px", margin: "0 auto" }}>
        <PageEditor pageId={page.id} texts={texts} images={images} mediaLibrary={media} />
      </div>
    </main>
  );
}
