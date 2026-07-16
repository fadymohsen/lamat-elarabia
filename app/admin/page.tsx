import React from "react";
import { verifySession } from "@/lib/dal";
import { query } from "@/lib/db";
import { logout } from "@/app/actions/auth";

export const metadata = {
  title: "لوحة التحكم - لمعة العربية",
};

interface PageRow {
  id: number;
  slug: string;
  locale: string;
  title: string | null;
  updated_at: Date;
}

interface CountRow {
  count: number;
}

export default async function AdminDashboard() {
  const session = await verifySession();

  const [pagesResult, mediaCountResult] = await Promise.all([
    query<PageRow>("SELECT id, slug, locale, title, updated_at FROM pages ORDER BY slug, locale"),
    query<CountRow>("SELECT count(*)::int AS count FROM media"),
  ]);
  const pages: PageRow[] = pagesResult.rows;
  const mediaCountRows: CountRow[] = mediaCountResult.rows;

  return (
    <main dir="rtl" style={{ fontFamily: "Tajawal, sans-serif", background: "#FBFAF7", minHeight: "100vh" }}>
      <header
        style={{
          background: "#137547",
          color: "#FBFAF7",
          padding: "20px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h1 style={{ fontFamily: "Cairo, sans-serif", fontWeight: 800, fontSize: "1.3rem", margin: 0 }}>
            لوحة تحكم لمعة العربية
          </h1>
          <p style={{ margin: "4px 0 0", fontFamily: "Almarai, sans-serif", fontSize: "0.9rem", opacity: 0.85 }}>
            مسجل الدخول: {session.email}
          </p>
        </div>
        <form action={logout}>
          <button
            type="submit"
            style={{
              background: "transparent",
              border: "1px solid #FBFAF7",
              color: "#FBFAF7",
              borderRadius: "24px",
              padding: "8px 20px",
              cursor: "pointer",
              fontFamily: "Tajawal, sans-serif",
            }}
          >
            تسجيل الخروج
          </button>
        </form>
      </header>

      <div style={{ padding: "32px", maxWidth: "960px", margin: "0 auto" }}>
        <section
          style={{
            background: "#fff",
            borderRadius: "24px",
            padding: "24px",
            marginBottom: "24px",
            boxShadow: "0 1px 3px rgba(20,19,16,0.12)",
          }}
        >
          <h2 style={{ fontFamily: "Cairo, sans-serif", fontWeight: 800, fontSize: "1.1rem", marginTop: 0 }}>
            إعدادات الموقع العامة
          </h2>
          <p style={{ color: "#5a5a55", marginBottom: "16px" }}>
            الهاتف، واتساب، البريد الإلكتروني، والعنوان الظاهر في تذييل الموقع.
          </p>
          <a
            href="/admin/settings"
            style={{
              display: "inline-block",
              background: "#137547",
              color: "#FBFAF7",
              borderRadius: "24px",
              padding: "10px 24px",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            تعديل الإعدادات
          </a>
        </section>

        <section
          style={{
            background: "#fff",
            borderRadius: "24px",
            padding: "24px",
            marginBottom: "24px",
            boxShadow: "0 1px 3px rgba(20,19,16,0.12)",
          }}
        >
          <h2 style={{ fontFamily: "Cairo, sans-serif", fontWeight: 800, fontSize: "1.1rem", marginTop: 0 }}>
            الصور والوسائط
          </h2>
          <p style={{ color: "#5a5a55", marginBottom: "16px" }}>
            {mediaCountRows[0].count} صورة مرفوعة.
          </p>
          <a
            href="/admin/media"
            style={{
              display: "inline-block",
              background: "#137547",
              color: "#FBFAF7",
              borderRadius: "24px",
              padding: "10px 24px",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            إدارة الصور
          </a>
        </section>

        <section
          style={{
            background: "#fff",
            borderRadius: "24px",
            padding: "24px",
            boxShadow: "0 1px 3px rgba(20,19,16,0.12)",
          }}
        >
          <h2 style={{ fontFamily: "Cairo, sans-serif", fontWeight: 800, fontSize: "1.1rem", marginTop: 0 }}>
            صفحات الموقع
          </h2>
          {pages.length === 0 ? (
            <p style={{ color: "#5a5a55" }}>لا توجد صفحات مُدارة بعد.</p>
          ) : (
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {pages.map((page) => (
                <li
                  key={page.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "12px 0",
                    borderBottom: "1px solid #DDDDDD",
                  }}
                >
                  <span>
                    {page.title || page.slug} <span style={{ color: "#71a38b" }}>({page.locale})</span>
                  </span>
                  <a href={`/admin/pages/${page.id}`} style={{ color: "#137547" }}>
                    تعديل
                  </a>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}
