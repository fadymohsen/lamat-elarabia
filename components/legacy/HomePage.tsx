import React from "react";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CertificateGallery from "@/components/CertificateGallery";

interface HomePageProps {
  locale?: string;
}

const CLIENTS: { src: string; title: string }[] = [
  { src: "/wp-content/uploads/2025/10/logo-1.png", title: "شركة زاكى فارسى" },
  { src: "/wp-content/uploads/2025/10/logo-3.png", title: "شركة الجميرا" },
  { src: "/wp-content/uploads/2025/10/logo-4.png", title: "شركة جودت" },
  { src: "/wp-content/uploads/2025/11/images-2-Photoroom-1.png", title: "شركة الأثر" },
  { src: "/wp-content/uploads/2025/11/logo-2.png", title: "شركة المطور العقاري عبدالله الفلاج" },
  { src: "/wp-content/uploads/2025/11/logo-5.png", title: "مجموعة إيوان" },
  { src: "/wp-content/uploads/2025/11/logo-14-1.png", title: "HALJ" },
  { src: "/wp-content/uploads/2025/11/logo-8.png", title: "شركة بن داوود" },
  { src: "/wp-content/uploads/2025/11/logo-11.png", title: "شركة شبه الجزيرة للمقاولات" },
  { src: "/wp-content/uploads/2025/11/logo-13.png", title: "بروجر" },
  { src: "/wp-content/uploads/2025/11/logo-12.png", title: "مجموعة بن لادن السعودية" },
  { src: "/wp-content/uploads/2025/11/logo-9.png", title: "إيرباص" },
  { src: "/wp-content/uploads/2025/11/logo-7.png", title: "فرع الشركة العامة للتعهدات" },
  { src: "/wp-content/uploads/2025/11/images-2-Photoroom.png", title: "شركة خليج الكوثر للتجارة و المقاولات" },
  { src: "/wp-content/uploads/2025/11/2K-s9Ek5_400x400-Photoroom.png", title: "شركة مهمات الشرق الاوسط المحدودة (ميتكو)" },
  { src: "/wp-content/uploads/2025/11/images-1-Photoroom.png", title: "شركه اسناد السلام المحدوده" },
  { src: "/wp-content/uploads/2025/11/logo-10.png", title: "شركة علوي تونسي" },
  { src: "/wp-content/uploads/2025/11/download-Photoroom.png", title: "الشركة السعودية لخدمات السيارات والمعدات (ساسكو)" },
  { src: "/wp-content/uploads/2025/11/364661403_121960110968280_5284149163495385115_n-Photoroom.png", title: "شركة أركان التجارية المحدودة" },
  { src: "/wp-content/uploads/2025/11/452809048_3994388854123501_179036843890566664_n-Photoroom.png", title: "شركة كي. أس. بي العربية للمضخات المحدودة" },
  { src: "/wp-content/uploads/2025/11/265184657_204532731870695_1168527558252196638_n-Photoroom.png", title: "شركة الانشاءات الهندسية و التقدم الصناعي ( اندكو)" },
  { src: "/wp-content/uploads/2025/11/images-Photoroom.png", title: "الشركة السعودية لخدمات السيارات والمعدات (ساسكو)" },
  { src: "/wp-content/uploads/2025/11/captu337-Photoroom.png", title: "شركة الأولي المتحدة" },
  { src: "/wp-content/uploads/2025/11/images-Photoroom-1.png", title: "شركة الدانوب للمواد الغذائية و الكماليات" },
  { src: "/wp-content/uploads/2025/11/images-1-Photoroom-1.png", title: "الشركة العربية السعودية للهندسة المحدودة" },
];

const CERTIFICATES: string[] = [
  "/wp-content/uploads/2025/10/Screenshot-2025-10-19-021205.png",
  "/wp-content/uploads/2025/11/Screenshot-2025-08-13-141806-2.png",
  "/wp-content/uploads/2025/10/Screenshot-2025-10-19-021913.png",
  "/wp-content/uploads/2025/10/Screenshot-2025-10-19-021441.png",
  "/wp-content/uploads/2025/11/image-2.png",
  "/wp-content/uploads/2025/11/image-1.png",
  "/wp-content/uploads/2025/11/Screenshot-2025-08-13-141806-2-1.png",
  "/wp-content/uploads/2025/10/Screenshot-2025-10-19-022819.png",
  "/wp-content/uploads/2025/10/Screenshot-2025-10-19-023052.png",
  "/wp-content/uploads/2025/10/Screenshot-2025-10-19-020441.png",
  "/wp-content/uploads/2025/10/Screenshot-2025-10-19-020647.png",
  "/wp-content/uploads/2025/10/Screenshot-2025-10-19-020814.png",
  "/wp-content/uploads/2025/10/Screenshot-2025-10-19-021114.png",
  "/wp-content/uploads/2025/11/image-3.png",
  "/wp-content/uploads/2025/11/image-2-1.png",
  "/wp-content/uploads/2025/10/Screenshot-2025-10-19-021516.png",
];

const COPY = {
  ar: {
    tagline: "نُشيد الحاضر … ونرسم ملامح الغد",
    name: "لمعة العربية للمقاولات",
    whyTitle: "لماذا نحن متميزين",
    whyBody:
      "بخبرة تتجاوز 20 عامًا في السوق السعودي، استطاعت لمعة العربية أن ترسخ مكانتها كشركة رائدة في مجال المقاولات، تجمع بين الخبرة العريقة والرؤية الحديثة. يضم فريق العمل أكثر من 150 موظفًا من الكفاءات المؤهلة الذين يشكلون حجر الأساس في نجاح الشركة وإنجازاتها المتتالية. تمتلك الشركة سجلًا حافلًا في تنفيذ مشاريع حكومية وخاصة كبرى، متميزة بالتزامها الصارم بمعايير الجودة والسلامة في جميع مراحل العمل. وتحت مظلة واحدة، تقدم لمعة العربية حلولًا متكاملة تغطي احتياجات العملاء من التصميم إلى التنفيذ، بما يضمن نتائج تفوق التوقعات وتواكب طموحات التنمية في المملكة.",
    expTitle: "خبراتنا السابقة",
    expIntro: "على مدار السنوات، شاركت لمعة العربية في تنفيذ العديد من المشاريع الحكومية والخاصة داخل المملكة، ومنها:",
    expItems: [
      "مشروع المدرسة الثالثة والعشرون – بريدة.",
      "مشروع بلدية قصيبة (2013–2014).",
      "مشروع فلل المزيرعي – الرياض (قيد التنفيذ 2024).",
      "مشروع الفردوس السكني – بالتعاون مع الشركة العامة للتعهدات (2023–2024).",
      "مشاريع التشطيبات الحديثة (فنادق، محلات تجارية، مراكز تجميل).",
      "مشاريع كهرباء وسباكة وتكييف ودفاع مدني (مدارس، مصانع، صالات مناسبات)",
    ],
    clientsTitle: "عملاؤنا المميزين",
    visionTitle: "رؤيتنا في لمعة العربية",
    visionBody: [
      "في لمعة العربية للمقاولات، ننظر إلى المستقبل بعين الطموح والرغبة في الريادة، حيث نسعى لأن نكون من أبرز شركات المقاولات في المملكة العربية السعودية، وشريكًا فاعلًا في مسيرة التنمية والعمران التي تشهدها البلاد ضمن رؤية السعودية 2030.\nنؤمن أن البناء ليس مجرد عملية إنشائية، بل هو صناعة للمستقبل وتشكيل لهوية المدن، لذلك نعمل على تقديم حلول متكاملة تجمع بين الجودة، الابتكار، والاستدامة في كل مشروع نقوم به.",
      "تركز رؤيتنا على إعادة تعريف مفهوم المقاولات الحديثة من خلال دمج الخبرة الهندسية العميقة بالتقنيات المتقدمة، لنصنع مشاريع تُعبّر عن أصالة الحرفية السعودية وتواكب تطلعات التطوير العمراني المتسارع.\nنسعى باستمرار إلى رفع كفاءة الأداء وتوسيع نطاق خدماتنا لتشمل مشاريع سكنية وتجارية وحكومية متميزة، تُنفّذ بأعلى معايير السلامة والجودة العالمية، مما يجعل لمعة عربية رمزًا للثقة والإتقان في عالم البناء.",
    ],
    servicesTitle: "خدماتنا المميزة",
    servicesIntro: "في لمعة العربية للمقاولات، نقدم حلولًا متكاملة تغطي مجالات المقاولات العامة، الصيانة، وتقنية المعلومات، لنكون الشريك الذي يجمع بين البناء والتطوير والتقنية الحديثة.",
    servicesList: [
      "المقاولات العامة: الإنشاءات الحكومية والخاصة – التشطيبات والديكور – الأعمال الكهروميكانيكية",
      "الخدمات الفنية: الكهرباء – السباكة – أنظمة التكييف (HVAC) – الدفاع المدني والسلامة – أعمال الخرسانة المسلحة والبنية التحتية",
      "التوريد التجاري: توريد وبيع مواد البناء والتشطيب – مواد وأدوات التنظيف والعناية",
    ],
    servicesCta: "احصل على عرض سعر",
    certsTitle: "نحن خبراء بشهاداتكم المعتمدة",
    certsBody: "تفخر شركة لمعة العربية للمقاولات بحصولها على عدة شهادات وخطابات شكر وتقدير من جهات حكومية وخاصة، تقديرًا لالتزامها بالجودة العالية، ودقتها في التنفيذ، واحترافيتها في إدارة المشاريع.",
    certsTagline: "شهاداتنا … دلالة ثقة لعملائنا",
    orgTitle: "الهيكل الإداري",
    orgList: [
      { role: "المدير العام", name: "أ/ نايف الحربي" },
      { role: "المدير التنفيذي", name: "م/ تركي الحربي" },
      { role: "المدير المالي", name: "أ/ عصام زناتي" },
      { role: "مدير المشاريع بمدينة جدة", name: "م/ شريف خيرت" },
      { role: "مدير المشاريع بمدينة الرياض", name: "م/ حمود صيام" },
      { role: "مدير المشاريع بالشرقية", name: "م/ فهد مطلق" },
    ],
    cta: "تواصل معنا",
    heroAlt: "مشروع بناء لمعة العربية للمقاولات",
    expAlt: "فريق عمل لمعة العربية في الموقع",
    servicesAlt: "خدمات لمعة العربية للمقاولات",
    visionAlt: "مبنى رؤية لمعة العربية",
  },
  en: {
    tagline: "We build the present … and shape the future",
    name: "Lamaat Al-Arabiya Contracting",
    whyTitle: "Why We Stand Out",
    whyBody:
      "With over 20 years of experience in the Saudi market, Lama3t Al-Arabia has established itself as a leading contracting company, combining deep-rooted expertise with a modern vision. Our team of 150+ qualified professionals forms the foundation of the company's success. We hold a strong track record delivering major government and private projects, with strict commitment to quality and safety standards at every stage.",
    expTitle: "Our Track Record",
    expIntro: "Over the years, Lama3t Al-Arabia has taken part in numerous government and private projects across the Kingdom, including:",
    expItems: [
      "23rd School Project – Buraydah.",
      "Qasibah Municipality Project (2013–2014).",
      "Al-Muzairi Villas Project – Riyadh (in progress, 2024).",
      "Al-Firdaws Residential Project – with the General Commitments Company (2023–2024).",
      "Modern finishing projects (hotels, retail stores, beauty centers).",
      "Electrical, plumbing, HVAC, and civil defense projects.",
    ],
    clientsTitle: "Our Distinguished Clients",
    visionTitle: "Our Vision at Lama3t Al-Arabia",
    visionBody: [
      "At Lama3t Al-Arabia Contracting, we look to the future with ambition, striving to be among the leading contracting companies in Saudi Arabia and an active partner in the Kingdom's development journey under Vision 2030.",
      "Our vision focuses on redefining modern contracting by merging deep engineering expertise with advanced technology.",
    ],
    servicesTitle: "Our Featured Services",
    servicesIntro: "At Lama3t Al-Arabia, we offer integrated solutions spanning general contracting, maintenance, and IT.",
    servicesList: [
      "General Contracting: government and private construction – finishing and decor – electromechanical works",
      "Technical Services: electrical – plumbing – HVAC – civil defense and safety",
      "Commercial Supply: supply and sale of building and finishing materials",
    ],
    servicesCta: "Get a Free Quote",
    certsTitle: "We're Experts, Certified",
    certsBody: "Lama3t Al-Arabia is proud to have received several certificates and letters of appreciation from government and private entities.",
    certsTagline: "Our Certificates … a Sign of Trust for Our Clients",
    orgTitle: "Organizational Structure",
    orgList: [
      { role: "General Manager", name: "Naif Al-Harbi" },
      { role: "Executive Director", name: "Turki Al-Harbi" },
      { role: "Financial Manager", name: "Essam Zanati" },
      { role: "Jeddah Projects Manager", name: "Eng. Sherif Khairat" },
      { role: "Riyadh Projects Manager", name: "Eng. Hammoud Sayyam" },
      { role: "Eastern Province Projects Manager", name: "Fahad Mutlaq" },
    ],
    cta: "Contact Us",
    heroAlt: "Lama3t Al-Arabia construction project",
    expAlt: "Lama3t Al-Arabia team on site",
    servicesAlt: "Lama3t Al-Arabia contracting services",
    visionAlt: "Lama3t Al-Arabia vision building",
  },
};

export default async function HomePage({ locale = "ar" }: HomePageProps) {
  const isAr = locale !== "en";
  const t = isAr ? COPY.ar : COPY.en;
  const contactHref = isAr ? "/ar/contact" : "/en/contact";
  const dir = isAr ? "rtl" : "ltr";
  const textAlign = isAr ? "text-right" : "text-left";

  return (
    <main dir={dir} className="bg-white">
      {/* Hero */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <Image src="/images/hero-home.png" alt={t.heroAlt} fill priority className="object-cover -scale-x-100" />
        <div className="absolute inset-0 bg-black/40" />
        <SiteHeader locale={locale} page="" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center gap-6 px-6 text-center">
          <h1 className="font-['Cairo',sans-serif] font-extrabold text-white text-[40px] md:text-[64px] leading-tight">
            {t.name}
          </h1>
          <p className="font-['Cairo',sans-serif] font-extrabold text-[#ececec] text-[22px] md:text-[36px] max-w-3xl">
            {t.tagline}
          </p>
          <Link
            href={contactHref}
            className="mt-4 inline-block rounded-full bg-[#137547] px-10 py-3 font-['Cairo',sans-serif] font-bold text-white shadow-lg shadow-black/30 hover:bg-[#0e5735] transition-colors"
          >
            {t.cta}
          </Link>
        </div>
      </section>

      {/* Why us */}
      <section className={`mx-auto max-w-[1041px] px-6 py-24 ${textAlign}`}>
        <h2 className="font-['Cairo',sans-serif] font-extrabold text-[36px] md:text-[56px] text-[#1e1e1e] mb-5">
          {t.whyTitle}
        </h2>
        <p className="font-['Tajawal',sans-serif] text-[18px] md:text-[24px] text-[#1e1e1e] leading-relaxed">
          {t.whyBody}
        </p>
      </section>

      {/* Experience */}
      <section className="relative bg-[#1e1e1e] overflow-hidden min-h-auto md:min-h-[65vh] pt-12 pb-0 md:py-0">
        {/* Mobile */}
        <div className="md:hidden flex flex-col">
          <div className={`px-6 mb-8 ${textAlign}`}>
            <h2 className="font-['Cairo',sans-serif] font-extrabold text-[24px] text-white mb-3">
              {t.expTitle}
            </h2>
            <p className="font-['Tajawal',sans-serif] text-[13px] text-white leading-relaxed mb-3">
              {t.expIntro}
            </p>
            <ul className="font-['Tajawal',sans-serif] text-[12px] text-white leading-relaxed list-disc pr-5 space-y-1">
              {t.expItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="relative mx-auto w-full max-w-[280px] leading-[0]">
            <div className="relative aspect-square w-full rounded-t-full bg-[#b8987f] pt-3 px-3 pb-0">
              <div className="relative h-full w-full overflow-hidden rounded-t-full">
                <Image src="/images/experience-workers.png" alt={t.expAlt} fill className="object-cover object-center" />
              </div>
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 size-20">
              <Image src="/images/since-2005-stamp.png" alt="Since 2005" fill className="object-contain" />
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6">
          {/* Desktop */}
          <div className="hidden md:grid gap-10 items-end grid-cols-[380px_1fr]">
            <div className={`relative mx-auto md:mx-0 w-full max-w-[380px] self-end mt-[15px] ${isAr ? "" : "order-2"}`}>
              <div className="relative aspect-square w-full rounded-t-full bg-[#b8987f] pt-3 px-3 pb-0">
                <div className="relative h-full w-full overflow-hidden rounded-t-full">
                  <Image src="/images/experience-workers.png" alt={t.expAlt} fill className="object-cover object-top" />
                </div>
              </div>
              <div className={`absolute bottom-2 size-24 ${isAr ? "-left-4" : "-right-4"}`}>
                <Image src="/images/since-2005-stamp.png" alt="Since 2005" fill className="object-contain" />
              </div>
            </div>
            <div className={`self-center pb-4 ${textAlign} md:order-1`}>
              <h2 className="font-['Cairo',sans-serif] font-extrabold text-[44px] text-white mb-4">
                {t.expTitle}
              </h2>
              <p className="font-['Tajawal',sans-serif] text-[18px] font-medium text-white leading-snug mb-2">
                {t.expIntro}
              </p>
              <ul className="font-['Tajawal',sans-serif] text-[15px] font-medium text-white leading-snug list-disc pr-5 space-y-1">
                {t.expItems.map((item, i) => (
                  <li key={i} className="whitespace-nowrap">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="font-['Cairo',sans-serif] font-extrabold text-[32px] md:text-[56px] text-[#1e1e1e] text-center mb-14">
          {t.clientsTitle}
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 justify-items-center">
          {CLIENTS.map((c, i) => (
            <div
              key={i}
              className={`flex flex-col items-center gap-2 text-center w-full ${
                i === CLIENTS.length - 1 && CLIENTS.length % 3 === 1 ? "col-start-2 sm:col-start-auto" : ""
              }`}
            >
              <div className="relative h-16 w-full">
                <Image src={c.src} alt={c.title} fill sizes="150px" className="object-contain" />
              </div>
              <p className="font-['Tajawal',sans-serif] text-[11px] text-[#1e1e1e]/70 leading-tight">{c.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision */}
      <section className="relative bg-[#203524] overflow-hidden min-h-auto md:min-h-screen flex md:items-center pt-12 pb-0 md:py-12">
        <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-[60px] size-[611px] opacity-40">
          <Image src="/images/figma/ellipse-glow.svg" alt="" fill className="object-contain" />
        </div>
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[12%] aspect-video w-[55vw] max-w-[750px]">
          <Image src="/images/vision-building.png" alt={t.visionAlt} fill className="object-cover" />
        </div>
        <div className={`mx-auto max-w-6xl px-6 relative z-10 w-full md:ml-auto md:mr-0 ${isAr ? "md:max-w-[45%]" : "md:max-w-[40%]"} flex flex-col md:block`}>
          <div className={`${textAlign} order-1`}>
            <h2 className="font-['Cairo',sans-serif] font-extrabold text-[28px] md:text-[44px] text-white mb-4">
              {t.visionTitle}
            </h2>
            {t.visionBody.map((p, i) => (
              <p key={i} className="font-['Tajawal',sans-serif] text-[14px] md:text-[17px] text-white leading-snug whitespace-pre-line mb-3">
                {p}
              </p>
            ))}
          </div>
          <div className="md:hidden relative w-full mt-6 order-2 leading-[0]">
            <Image src="/images/vision-building.png" alt={t.visionAlt} width={800} height={450} className="w-full h-auto object-contain block" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className={`grid gap-10 md:grid-cols-2 items-center mb-12`}>
          <div className={`relative aspect-square w-full max-w-[420px] mx-auto ${isAr ? "order-2 md:order-1" : "order-1 md:order-2"}`}>
            <Image src="/wp-content/uploads/2025/11/Hero-section-4-1.png" alt={t.servicesAlt} fill className="object-contain" />
          </div>
          <div className={`${isAr ? "text-right order-1 md:order-2" : "text-left order-2 md:order-1"}`}>
            <h2 className="font-['Cairo',sans-serif] font-extrabold text-[32px] md:text-[56px] text-[#1e1e1e] mb-5">
              {t.servicesTitle}
            </h2>
            <p className="font-['Tajawal',sans-serif] text-[16px] md:text-[22px] text-[#1e1e1e] leading-relaxed mb-4">
              {t.servicesIntro}
            </p>
            <ul className="font-['Tajawal',sans-serif] text-[15px] md:text-[18px] text-[#1e1e1e] leading-relaxed list-disc pr-5 space-y-2">
              {t.servicesList.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
            <Link
              href={contactHref}
              className="mt-6 inline-block rounded-full bg-[#137547] px-8 py-3 font-['Cairo',sans-serif] font-bold text-white hover:bg-[#0e5735] transition-colors"
            >
              {t.servicesCta}
            </Link>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="bg-[#1e1e1e] py-16">
        <div className={`mx-auto max-w-5xl px-6 grid gap-8 md:grid-cols-[auto_1fr] items-center ${isAr ? "" : "md:grid-cols-[1fr_auto]"}`}>
          <div className={`relative h-24 w-24 rounded-full overflow-hidden shrink-0 mx-auto md:mx-0 ${isAr ? "" : "md:order-2"}`}>
            <Image src="/wp-content/uploads/2025/10/icon6-2-300x300.jpg" alt="Certificates icon" fill className="object-cover" />
          </div>
          <div className={textAlign}>
            <h2 className="font-['Cairo',sans-serif] font-extrabold text-white text-[28px] md:text-[40px] mb-4">
              {t.certsTitle}
            </h2>
            <p className="font-['Tajawal',sans-serif] text-white/85 text-[15px] md:text-[18px] leading-relaxed">
              {t.certsBody}
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white px-6 py-16">
        <CertificateGallery certificates={CERTIFICATES} />
      </section>
      <section className="bg-[#1e1e1e] py-8 text-center">
        <p className="font-['Cairo',sans-serif] font-extrabold text-white text-[20px] md:text-[28px]">
          {t.certsTagline}
        </p>
      </section>

      {/* Org structure */}
      <section className="bg-[#f7f3ec] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className={`font-['Cairo',sans-serif] font-extrabold text-[32px] md:text-[48px] text-[#1e1e1e] mb-12 ${textAlign}`}>
            {t.orgTitle}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-10 gap-x-6">
            {t.orgList.map((person, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="relative h-24 w-24 rounded-full border-2 border-[#137547] bg-white overflow-hidden flex items-center justify-center mb-3">
                  <svg viewBox="0 0 24 24" className="h-12 w-12 text-[#c9c2b4]" fill="currentColor" aria-hidden="true">
                    <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.4 0-8 2.24-8 5v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1c0-2.76-3.6-5-8-5Z" />
                  </svg>
                </div>
                <h3 className="font-['Cairo',sans-serif] font-bold text-[#1e1e1e] text-[14px] leading-snug">{person.name}</h3>
                <p className="font-['Tajawal',sans-serif] text-[#1e1e1e]/60 text-[12px] leading-snug">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}
