import React from "react";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

interface TrainingPageProps {
  locale?: string;
}

const COPY = {
  ar: {
    tagline: "نُشيد الحاضر … ونرسم ملامح الغد",
    title: "التوظيف والتدريب",
    intro: "ننمو دائمًا، ونبحث عن كفاءات طموحة تنضم إلى فريق لمعة العربية للمقاولات لتكون جزءًا من رحلة بناء المستقبل.",
    positionsTitle: "الفرص المتاحة",
    positions: [
      { title: "مهندس مدني", desc: "إشراف على تنفيذ المشاريع الإنشائية ومتابعة الجودة والسلامة." },
      { title: "مشرف موقع", desc: "متابعة سير العمل اليومي وتنسيق فرق التنفيذ في الموقع." },
      { title: "فني كهرباء وسباكة", desc: "تركيب وصيانة الأنظمة الكهربائية والصحية في المشاريع." },
      { title: "محاسب مشاريع", desc: "متابعة الميزانيات والتكاليف المالية للمشاريع الجارية." },
    ],
    trainingTitle: "برامج التدريب",
    trainingBody: "نؤمن بأن الاستثمار في الكوادر البشرية هو أساس النجاح، لذلك نقدم برامج تدريبية متخصصة لصقل مهارات موظفينا ومواكبة أحدث التقنيات في قطاع المقاولات.",
    cta: "أرسل سيرتك الذاتية إلى",
    email: "Lama3t_elarabia@hotmail.com",
  },
  en: {
    tagline: "We build the present … and shape the future",
    title: "Employment & Training",
    intro: "We're always growing, seeking ambitious talent to join the Lama3t Al-Arabia team and be part of building the future.",
    positionsTitle: "Available Opportunities",
    positions: [
      { title: "Civil Engineer", desc: "Oversee construction project execution and quality/safety compliance." },
      { title: "Site Supervisor", desc: "Coordinate daily on-site work and execution teams." },
      { title: "Electrical & Plumbing Technician", desc: "Install and maintain electrical and plumbing systems." },
      { title: "Project Accountant", desc: "Track budgets and financial costs for ongoing projects." },
    ],
    trainingTitle: "Training Programs",
    trainingBody: "We believe investing in people is the foundation of success, so we offer specialized training programs to sharpen our team's skills and keep pace with the latest construction technologies.",
    cta: "Send your CV to",
    email: "Lama3t_elarabia@hotmail.com",
  },
};

export default async function TrainingPage({ locale = "ar" }: TrainingPageProps) {
  const isAr = locale !== "en";
  const t = isAr ? COPY.ar : COPY.en;

  return (
    <main dir={isAr ? "rtl" : "ltr"} className="bg-white">
      {/* Hero - matches News/Contact inner-page hero pattern (516px, exact per Figma) */}
      <section className="relative h-[516px] w-full overflow-hidden">
        <Image src="/images/hero-home.png" alt="" fill className="object-cover -scale-x-100" />
        <div className="absolute inset-0 bg-black/35" />
        <SiteHeader locale={locale} />
        <div className="absolute left-1/2 -translate-x-1/2 top-[220px] w-[939px] max-w-[92vw]">
          <p className="font-['Cairo',sans-serif] font-extrabold text-[28px] md:text-[40px] text-[#ececec] text-center">
            {t.title}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className={`mx-auto max-w-[1041px] px-6 py-24 ${isAr ? "text-right" : "text-left"}`} dir={isAr ? "rtl" : "ltr"}>
        <p className="font-['Cairo',sans-serif] font-extrabold text-[36px] md:text-[56px] text-[#1e1e1e] mb-5">
          {t.title}
        </p>
        <p className="font-['Tajawal',sans-serif] text-[18px] md:text-[24px] text-[#1e1e1e] leading-relaxed">
          {t.intro}
        </p>
      </section>

      {/* Positions */}
      <section className="bg-[#1e1e1e] py-20">
        <div className="mx-auto max-w-6xl px-6" dir={isAr ? "rtl" : "ltr"}>
          <p className={`font-['Cairo',sans-serif] font-extrabold text-white text-[32px] md:text-[56px] mb-10 ${isAr ? "text-right" : "text-left"}`}>
            {t.positionsTitle}
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {t.positions.map((p, i) => (
              <div key={i} className={`rounded-2xl bg-white/5 border border-white/10 p-8 ${isAr ? "text-right" : "text-left"}`}>
                <p className="font-['Cairo',sans-serif] font-extrabold text-white text-[22px] mb-3">{p.title}</p>
                <p className="font-['Tajawal',sans-serif] text-white/70 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training programs */}
      <section className="relative bg-[#203524] overflow-hidden py-20">
        <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-[60px] size-[500px] opacity-30">
          <Image src="/images/figma/ellipse-glow.svg" alt="" fill className="object-contain" />
        </div>
        <div className={`relative z-10 mx-auto max-w-[1041px] px-6 ${isAr ? "text-right" : "text-left"}`} dir={isAr ? "rtl" : "ltr"}>
          <p className="font-['Cairo',sans-serif] font-extrabold text-white text-[32px] md:text-[56px] mb-5">
            {t.trainingTitle}
          </p>
          <p className="font-['Tajawal',sans-serif] text-white text-[18px] md:text-[24px] leading-relaxed">
            {t.trainingBody}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#b8987f] py-16 text-center">
        <p className="font-['Tajawal',sans-serif] text-white text-[18px] mb-2">{t.cta}</p>
        <a
          href={`mailto:${t.email}`}
          className="inline-block font-['Cairo',sans-serif] font-extrabold text-white text-[24px] md:text-[32px] underline"
        >
          {t.email}
        </a>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}
