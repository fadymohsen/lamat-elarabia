import React from "react";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";
import { getSiteSettings } from "@/lib/settings";

interface ContactPageProps {
  locale?: string;
}

const COPY = {
  ar: {
    title: "تواصل معنا",
    intro: "نسعد بتواصلكم معنا في أي وقت، سواء كنتم تبحثون عن شريك موثوق لتنفيذ مشروع جديد أو تحتاجون إلى استشارة. فريقنا جاهز للرد بسرعة.",
    phoneLabel: "الهاتف",
    emailLabel: "البريد الإلكتروني",
    whatsappLabel: "واتساب",
    formTitle: "نموذج التواصل",
    formName: "الاسم",
    formEmail: "البريد الإلكتروني",
    formMessage: "الرسالة",
    formSubmit: "إرسال",
    branchesTitle: "فروعنا",
    branches: [
      { city: "جدة", addr: "حي الرواسي – شارع قادة الفكر", mapEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27898.32!2d39.1876!3d21.5338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2ssa" },
      { city: "الرياض", addr: "حي النرجس – شارع الأمير مشعل", mapEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27686.24!2d46.6753!3d24.7745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2ssa" },
      { city: "القصيم", addr: "بريدة – حي الأخضر", mapEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26952.56!2d43.9750!3d26.3264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2ssa" },
    ],
    heroAlt: "لمعة العربية - تواصل معنا",
  },
  en: {
    title: "Contact Us",
    intro: "We'd love to hear from you at any time — whether you're looking for a trusted partner for a new project or need a consultation. Our team is ready to respond quickly.",
    phoneLabel: "Phone",
    emailLabel: "Email",
    whatsappLabel: "WhatsApp",
    formTitle: "Contact Form",
    formName: "Name",
    formEmail: "Email",
    formMessage: "Message",
    formSubmit: "Send",
    branchesTitle: "Our Branches",
    branches: [
      { city: "Jeddah", addr: "Al-Rawasi - Leaders Street", mapEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27898.32!2d39.1876!3d21.5338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ssa" },
      { city: "Riyadh", addr: "Al-Nargis - Prince Mishal Street", mapEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27686.24!2d46.6753!3d24.7745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ssa" },
      { city: "Qassim", addr: "Buraydah - Al-Akhdar", mapEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26952.56!2d43.9750!3d26.3264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ssa" },
    ],
    heroAlt: "Lama3t Al-Arabia - Contact Us",
  },
};

export default async function ContactPage({ locale = "ar" }: ContactPageProps) {
  const isAr = locale !== "en";
  const t = isAr ? COPY.ar : COPY.en;
  const settings = await getSiteSettings();
  const dir = isAr ? "rtl" : "ltr";
  const textAlign = isAr ? "text-right" : "text-left";

  return (
    <main dir={dir} className="bg-white">
      {/* Hero */}
      <section className="relative h-[516px] w-full overflow-hidden">
        <Image src="/images/hero-home.png" alt={t.heroAlt} fill className="object-cover -scale-x-100" />
        <div className="absolute inset-0 bg-black/35" />
        <SiteHeader locale={locale} page="contact" />
        <div className="absolute left-1/2 -translate-x-1/2 top-[220px] w-[939px] max-w-[92vw]">
          <h1 className="font-['Cairo',sans-serif] font-extrabold text-[28px] md:text-[40px] text-[#ececec] text-center">
            {t.title}
          </h1>
        </div>
      </section>

      {/* Intro + contact info */}
      <section className={`mx-auto max-w-[1041px] px-6 py-24 ${textAlign}`}>
        <h2 className="font-['Cairo',sans-serif] font-extrabold text-[36px] md:text-[56px] text-[#1e1e1e] mb-5">
          {t.title}
        </h2>
        <p className="font-['Tajawal',sans-serif] text-[18px] md:text-[24px] text-[#1e1e1e] leading-relaxed mb-10">
          {t.intro}
        </p>

        <div className="grid gap-6 sm:grid-cols-3 mb-16">
          {settings?.phone_display && (
            <div className="rounded-2xl bg-[#f5f5f3] p-6 text-center">
              <div className="flex justify-center mb-3">
                <svg className="h-8 w-8 text-[#137547]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <p className="font-['Tajawal',sans-serif] text-[#1e1e1e]/60 mb-2">{t.phoneLabel}</p>
              <a href={`tel:${settings.phone_display}`} className="font-['Cairo',sans-serif] font-extrabold text-[#137547] text-[18px]">
                {settings.phone_display}
              </a>
            </div>
          )}
          {settings?.email && (
            <div className="rounded-2xl bg-[#f5f5f3] p-6 text-center">
              <div className="flex justify-center mb-3">
                <svg className="h-8 w-8 text-[#137547]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="font-['Tajawal',sans-serif] text-[#1e1e1e]/60 mb-2">{t.emailLabel}</p>
              <a href={`mailto:${settings.email}`} className="font-['Cairo',sans-serif] font-extrabold text-[#137547] text-[18px] break-all">
                {settings.email}
              </a>
            </div>
          )}
          {settings?.whatsapp_number && (
            <div className="rounded-2xl bg-[#f5f5f3] p-6 text-center">
              <div className="flex justify-center mb-3">
                <div className="flex items-center justify-center size-8 rounded-full bg-[#137547] p-1.5">
                  <Image src="/images/figma/whatsapp-icon.svg" alt="" width={20} height={20} />
                </div>
              </div>
              <p className="font-['Tajawal',sans-serif] text-[#1e1e1e]/60 mb-2">{t.whatsappLabel}</p>
              <a
                href={`https://wa.me/${settings.whatsapp_number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-['Cairo',sans-serif] font-extrabold text-[#137547] text-[18px]"
              >
                {settings.phone_display}
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-[#f7f3ec] py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className={`font-['Cairo',sans-serif] font-extrabold text-[32px] md:text-[48px] text-[#1e1e1e] mb-10 ${textAlign}`}>
            {t.formTitle}
          </h2>
          <ContactForm
            labels={{ name: t.formName, email: t.formEmail, message: t.formMessage, submit: t.formSubmit }}
            isAr={isAr}
          />
        </div>
      </section>

      {/* Branches */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className={`font-['Cairo',sans-serif] font-extrabold text-[#1e1e1e] text-[32px] md:text-[56px] mb-16 ${textAlign}`}>
            {t.branchesTitle}
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            {t.branches.map((b, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-[#1e1e1e]/10">
                <div className="h-64 w-full">
                  <iframe
                    src={b.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={b.city}
                  />
                </div>
                <div className={`bg-[#f5f5f3] p-6 ${textAlign}`}>
                  <h3 className="font-['Cairo',sans-serif] font-extrabold text-[#137547] text-[22px] mb-2">{b.city}</h3>
                  <p className="font-['Tajawal',sans-serif] text-[#1e1e1e]/70 text-[16px]">{b.addr}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}
