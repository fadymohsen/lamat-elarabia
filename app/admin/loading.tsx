export default function AdminLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FBFAF7]">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#137547] border-t-transparent" />
        <p style={{ fontFamily: "Tajawal, sans-serif", color: "#5a5a55" }}>جارٍ التحميل...</p>
      </div>
    </div>
  );
}
