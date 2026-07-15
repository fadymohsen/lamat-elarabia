import React from "react";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

interface NewsPageProps {
  locale?: string;
}

const COPY = {
  ar: {
    tagline: "نُشيد الحاضر … ونرسم ملامح الغد",
    title: "الأخبار والمقالات",
    intro: "مرحبًا بكم في نافذة لمعة العربية على قطاع المقاولات والتطوير العمراني.\nفي هذه الصفحة نشارككم:",
    bullets: [
      "أحدث الأخبار عن المشاريع والعقود الجديدة.",
      "مقالات متخصصة في البناء والتطوير.",
      "تحليلات سوقية حول مستقبل المقاولات في المملكة.",
    ],
    services: [
      { title: "المقاولات العامة", img: "/images/quality-photo.jpg" },
      { title: "صيانة المرافق", img: "/images/safety-photo.jpg" },
    ],
    projectsTitle: "مشاريعنا المميزة",
    articles: [
      {
        title: "معايير الجودة في قطاع المقاولات",
        subtitle: "لماذا تصنع الفارق في نجاح المشروع؟",
        body: "الجودة لم تعد رفاهية في عالم المقاولات، بل أصبحت ضرورة لضمان نجاح المشاريع. تطبيق معايير الجودة في جميع المراحل – من اختيار المواد إلى التنفيذ – يساهم في تقليل الأخطاء والهدر، ويعزز ثقة العملاء. في لمعة العربية، نلتزم بأعلى معايير الجودة العالمية لضمان تسليم مشاريع تفوق توقعات عملائنا.",
        img: "/images/quality-photo.jpg",
      },
      {
        title: "أحدث اتجاهات البناء في السعودية",
        subtitle: "من الاستدامة إلى المدن الذكية",
        body: "الجودة لم تعد رفاهية في عالم المقاولات، بل أصبحت ضرورة لضمان نجاح المشاريع. تطبيق معايير الجودة في جميع المراحل – من اختيار المواد إلى التنفيذ – يساهم في تقليل الأخطاء والهدر، ويعزز ثقة العملاء. في لمعة العربية، نلتزم بأعلى معايير الجودة العالمية لضمان تسليم مشاريع تفوق توقعات عملائنا.",
        img: "/images/trends-photo.jpg",
      },
      {
        title: "كيف تضمن شركات المقاولات",
        subtitle: "حماية فرق العمل والمواقع؟",
        body: "السلامة في مواقع البناء هي حجر الأساس لنجاح أي مشروع. توفير معدات الحماية الشخصية، وتطبيق أنظمة السلامة الصارمة، وتدريب الفرق بشكل مستمر يساهم في تقليل الحوادث وضمان بيئة عمل آمنة. في لمعة العربية، نعتبر السلامة قيمة أساسية نلتزم بها في جميع مشاريعنا",
        img: "/images/safety-photo.jpg",
      },
    ],
  },
  en: {
    tagline: "We build the present … and shape the future",
    title: "News & Articles",
    intro: "Welcome to Lama3t Al-Arabia's window into contracting and urban development.\nOn this page we share:",
    bullets: [
      "The latest news on new projects and contracts.",
      "Specialized articles on construction and development.",
      "Market analysis on the future of contracting in the Kingdom.",
    ],
    services: [
      { title: "General Contracting", img: "/images/quality-photo.jpg" },
      { title: "Facility Maintenance", img: "/images/safety-photo.jpg" },
    ],
    projectsTitle: "Our Featured Projects",
    articles: [
      {
        title: "Quality Standards in Contracting",
        subtitle: "Why It Makes the Difference for Project Success",
        body: "Quality is no longer a luxury in the contracting world — it's a necessity for project success. Applying quality standards at every stage, from material selection to execution, reduces errors and waste and builds client trust.",
        img: "/images/quality-photo.jpg",
      },
      {
        title: "Latest Construction Trends in Saudi Arabia",
        subtitle: "From Sustainability to Smart Cities",
        body: "The Kingdom is undergoing a major transformation in construction, driven by Vision 2030 and a shift toward sustainability and smart cities.",
        img: "/images/trends-photo.jpg",
      },
      {
        title: "How Contracting Companies Ensure",
        subtitle: "Protection for Teams and Sites",
        body: "Safety on construction sites is the foundation of any successful project. Providing personal protective equipment, enforcing strict safety systems, and continuous team training.",
        img: "/images/safety-photo.jpg",
      },
    ],
  },
};

const PROJECT_IMAGES = [
  "/images/project-1.jpg",
  "/images/project-2.jpg",
  "/images/project-3.jpg",
  "/images/project-4.jpg",
  "/images/project-5.jpg",
  "/images/project-6.jpg",
];

export default async function NewsPage({ locale = "ar" }: NewsPageProps) {
  const isAr = locale !== "en";
  const t = isAr ? COPY.ar : COPY.en;

  return (
    <main dir={isAr ? "rtl" : "ltr"} className="bg-white">
      {/* Hero - exact Figma values (node 53:741) */}
      <section className="relative h-[516px] w-full overflow-hidden">
        <Image src="/images/hero-home.png" alt="" fill className="object-cover -scale-x-100" />
        <div className="absolute inset-0 bg-black/35" />
        <SiteHeader locale={locale} />
        <div className="absolute left-1/2 -translate-x-1/2 top-[172px] w-[939px] max-w-[92vw] flex flex-col items-center gap-[22px]">
          <p className="font-['Cairo',sans-serif] font-extrabold text-[28px] md:text-[40px] text-[#ececec] text-center">
            {t.title}
          </p>
          <div className="relative size-[140px]">
            <Image src="/images/logo-badge.png" alt="" fill className="object-contain" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[102px] rounded-full bg-[#ff7000] overflow-hidden">
              <Image src="/images/figma/logo-inner.png" alt="" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Intro - exact (node 53:801/53:804) */}
      <section className="mx-auto max-w-6xl px-6 py-24 grid gap-10 md:grid-cols-2 items-center">
        <div className={`relative h-[380px] w-full rounded-tl-[200px] rounded-tr-[200px] overflow-hidden ${isAr ? "order-2 md:order-1" : "order-1 md:order-2"}`}>
          <Image src="/images/news-portrait.jpg" alt="" fill className="object-cover" />
        </div>
        <div className={`${isAr ? "text-right order-1 md:order-2" : "text-left order-2 md:order-1"}`} dir={isAr ? "rtl" : "ltr"}>
          <p className="font-['Cairo',sans-serif] font-extrabold text-[32px] md:text-[56px] text-[#1e1e1e] mb-5">
            {t.title}
          </p>
          <p className="font-['Tajawal',sans-serif] text-[16px] md:text-[24px] text-[#1e1e1e] leading-relaxed whitespace-pre-line mb-3">
            {t.intro}
          </p>
          <ul className="font-['Tajawal',sans-serif] text-[15px] md:text-[24px] text-[#1e1e1e] leading-relaxed list-disc pr-9 space-y-1">
            {t.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Projects grid - exact heading (node 53:814), photos representative */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <p className="font-['Cairo',sans-serif] font-extrabold text-[#1e1e1e] text-[32px] md:text-[56px] text-center mb-14">
          {t.projectsTitle}
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECT_IMAGES.map((src, i) => (
            <div key={i} className="relative h-[280px] rounded-3xl overflow-hidden">
              <Image src={src} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Articles - exact colors/type (node 53:835+), simplified alternating layout */}
      <section className="relative bg-[#203524] overflow-hidden py-24">
        <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-[60px] size-[611px] opacity-40">
          <Image src="/images/figma/ellipse-glow.svg" alt="" fill className="object-contain" />
        </div>
        <div className="relative z-10 flex flex-col gap-20">
          {t.articles.map((a, i) => (
            <div
              key={i}
              className={`mx-auto max-w-6xl px-6 grid gap-10 md:grid-cols-2 items-center ${
                isAr
                  ? (i % 2 === 1 ? "md:[&>*:first-child]:order-2" : "")
                  : (i % 2 === 0 ? "md:[&>*:first-child]:order-2" : "")
              }`}
            >
              <div className={`relative h-[320px] w-full overflow-hidden ${i % 2 === 0 ? "rounded-3xl" : ""}`}>
                <Image src={a.img} alt="" fill className={`object-center ${i % 2 === 0 ? "object-contain" : "object-cover"}`} />
              </div>
              <div className={`${isAr ? "text-right" : "text-left"}`} dir={isAr ? "rtl" : "ltr"}>
                <p className="font-['Cairo',sans-serif] font-extrabold text-white text-[28px] md:text-[40px] mb-0">
                  {a.title}
                </p>
                <p className="font-['Cairo',sans-serif] font-extrabold text-white text-[28px] md:text-[40px] mb-6">
                  {a.subtitle}
                </p>
                <p className="font-['Tajawal',sans-serif] text-white text-[16px] md:text-[20px] leading-relaxed">
                  {a.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}
