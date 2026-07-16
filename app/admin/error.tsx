"use client";

export default function AdminError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div dir="rtl" className="flex min-h-screen items-center justify-center bg-[#FBFAF7] px-6">
      <div className="max-w-md text-center" style={{ fontFamily: "Tajawal, sans-serif" }}>
        <h1 style={{ fontFamily: "Cairo, sans-serif", fontWeight: 800, fontSize: "1.5rem", marginBottom: "1rem", color: "#1e1e1e" }}>
          حدث خطأ
        </h1>
        <p style={{ color: "#5a5a55", marginBottom: "2rem" }}>
          عذرًا، حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.
        </p>
        <button
          onClick={reset}
          style={{
            background: "#137547",
            color: "#FBFAF7",
            fontFamily: "Tajawal, sans-serif",
            fontWeight: 500,
            padding: "12px 32px",
            border: "none",
            borderRadius: "24px",
            cursor: "pointer",
          }}
        >
          إعادة المحاولة
        </button>
      </div>
    </div>
  );
}
