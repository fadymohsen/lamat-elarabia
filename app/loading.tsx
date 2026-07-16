export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#faf8f4]">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#137547] border-t-transparent" />
        <p className="font-['Tajawal',sans-serif] text-[#1e1e1e]/60 text-sm">جارٍ التحميل...</p>
      </div>
    </div>
  );
}
