import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getSiteSettings } from "@/lib/settings";

interface SiteFooterProps {
  locale?: string;
}

const COPY = {
  ar: {
    heading: "نسعد بتواصلك معنا",
    body: "يسعدنا استقبال استفساراتكم وطلباتكم في أي وقت، سواء كنتم تبحثون عن شريك موثوق لتنفيذ مشروع جديد أو تحتاجون إلى خدماتنا في الصيانة أو التقنية. فريقنا جاهز للرد بسرعة وتقديم الاستشارة المناسبة بكل احترافية.",
    address: "المملكة العربية السعودية - الرياض",
    name: "لمعة العربية للمقاولات",
    tagline: "نبني اليوم... لنصنع مستقبلًا يليق بوطننا",
    rights: "جميع الحقوق محفوظة لشركة لمعة العربية للمقاولات",
    dev: "Powered by",
  },
  en: {
    heading: "We'd love to hear from you",
    body: "We welcome your inquiries and requests at any time, whether you're looking for a trusted partner for a new project or need our maintenance or technical services. Our team is ready to respond quickly.",
    address: "Kingdom of Saudi Arabia - Riyadh",
    name: "Lama3t Al-Arabia Contracting",
    tagline: "We build today... to make a future worthy of our nation",
    rights: "All rights reserved to Lama3t Al-Arabia Contracting",
    dev: "Powered by",
  },
};

export default async function SiteFooter({ locale = "ar" }: SiteFooterProps) {
  const isAr = locale !== "en";
  const t = isAr ? COPY.ar : COPY.en;
  const settings = await getSiteSettings();

  return (
    <footer dir={isAr ? "rtl" : "ltr"} className="bg-[#203524]">
      {/* Contact card - exact colors/type from Figma News page footer */}
      <div className="px-6 py-16">
        <div className="relative mx-auto max-w-6xl rounded-3xl overflow-hidden bg-[#14201a]">
          <Image src="/images/hero-home.png" alt={isAr ? "لمعة العربية للمقاولات" : "Lamaat Al-Arabiya Contracting"} fill className="object-cover opacity-30" />
          <div className="relative z-10 grid gap-10 md:grid-cols-[1.3fr_1fr] items-center px-8 py-14 md:px-14">
            <div className={`${isAr ? "text-right" : "text-left"}`}>
              <h2 className="font-['Cairo',sans-serif] font-extrabold text-white text-[32px] md:text-[48px] mb-5">
                {t.heading}
              </h2>
              <p className="font-['Tajawal',sans-serif] text-white/85 text-[16px] md:text-[20px] leading-relaxed">
                {t.body}
              </p>
            </div>
            <div className="flex flex-col items-start gap-3">
              {settings?.phone_display && (
                <a
                  href={`https://wa.me/${settings.whatsapp_number ?? ""}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-white font-['Tajawal',sans-serif] text-[16px] hover:bg-white/20 transition-colors"
                >
                  <Image src="/images/figma/whatsapp-icon.svg" alt="" width={20} height={20} />
                  {settings.phone_display}
                </a>
              )}
              {settings?.email && (
                <a
                  href={`mailto:${settings.email}`}
                  className="flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-white font-['Tajawal',sans-serif] text-[15px] hover:bg-white/20 transition-colors break-all"
                >
                  {settings.email}
                </a>
              )}
              {settings?.address_url && (
                <a
                  href={settings.address_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-white font-['Tajawal',sans-serif] text-[15px] hover:bg-white/20 transition-colors"
                >
                  <Image src="/images/figma/gmaps-icon.png" alt="" width={20} height={20} />
                  {t.address}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Black band: tagline + name, ribbon photos, tan copyright bar */}
      <div className="relative bg-black overflow-hidden">
        <div className="hidden md:block absolute bottom-[198px] left-0 w-[290px] h-[231px]">
          <Image src="/images/figma/hero-ribbon.png" alt="" fill className="object-cover -scale-x-100" />
        </div>
        <div className="hidden md:block absolute bottom-[198px] right-0 w-[290px] h-[231px]">
          <Image src="/images/figma/hero-ribbon.png" alt="" fill className="object-cover" />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-6 py-16 text-center">
          <div className="md:hidden relative size-16 rounded-full bg-white overflow-hidden">
            <Image src="/images/figma/logo-inner.png" alt={isAr ? "شعار لمعة العربية للمقاولات" : "Lamaat Al-Arabiya Contracting logo"} fill className="object-cover" />
          </div>
          <p className="font-['Tajawal',sans-serif] text-white text-[20px] md:text-[24px]">{t.tagline}</p>
          <p className="font-['Cairo',sans-serif] font-extrabold text-white text-[26px] md:text-[32px]">{t.name}</p>
        </div>

        <div className="relative z-10 bg-[#b8987f] py-4 text-center">
          <p className="font-['Tajawal',sans-serif] text-black text-[15px] md:text-[20px]">{t.rights}</p>
        </div>
      </div>

      <div className="bg-[#0c1310] py-3 text-center">
        <p className="text-white/50 text-base">
          {t.dev}{" "}
          <Link
            href="https://veliq.co"
            target="_blank"
            rel="nofollow"
            className="text-[#b8987f] hover:underline"
          >
            VeliQ
          </Link>
        </p>
      </div>
    </footer>
  );
}
