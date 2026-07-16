"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#faf8f4] px-6">
      <div className="max-w-md text-center">
        <h1 className="font-['Cairo',sans-serif] font-extrabold text-[#1e1e1e] text-[32px] mb-4">
          حدث خطأ
        </h1>
        <p className="font-['Tajawal',sans-serif] text-[#1e1e1e]/60 text-[16px] mb-8">
          عذرًا، حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.
        </p>
        <button
          onClick={reset}
          className="rounded-full bg-[#137547] px-8 py-3 font-['Cairo',sans-serif] font-bold text-white hover:bg-[#0e5735] transition-colors"
        >
          إعادة المحاولة
        </button>
      </div>
    </div>
  );
}
