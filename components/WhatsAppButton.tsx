import React from "react";
import Image from "next/image";
import { getSiteSettings } from "@/lib/settings";

export default async function WhatsAppButton() {
  const settings = await getSiteSettings();
  if (!settings?.whatsapp_number) return null;

  return (
    <a
      href={`https://wa.me/${settings.whatsapp_number}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center size-14 rounded-full bg-[#25D366] shadow-lg shadow-black/20 hover:scale-110 transition-transform"
    >
      <Image src="/images/figma/whatsapp-icon.svg" alt="" width={28} height={28} />
    </a>
  );
}
