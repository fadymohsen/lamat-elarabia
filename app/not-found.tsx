import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main dir="rtl" className="flex min-h-screen items-center justify-center bg-[#faf8f4] px-6">
      <div className="max-w-md text-center">
        <p className="font-['Cairo',sans-serif] font-extrabold text-[#137547] text-[120px] leading-none mb-2">
          404
        </p>
        <h1 className="font-['Cairo',sans-serif] font-extrabold text-[#1e1e1e] text-[28px] mb-4">
          الصفحة غير موجودة
        </h1>
        <p className="font-['Tajawal',sans-serif] text-[#1e1e1e]/60 text-[16px] mb-8">
          عذرًا، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
        </p>
        <Link
          href="/ar"
          className="inline-block rounded-full bg-[#137547] px-8 py-3 font-['Cairo',sans-serif] font-bold text-white hover:bg-[#0e5735] transition-colors"
        >
          العودة للرئيسية
        </Link>
      </div>
    </main>
  );
}
