import React from "react";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

interface NewsPageProps {
  locale?: string;
}

const COPY = {
  ar: {
    title: "الأخبار والمقالات",
    sectionHeading: "أخبار ومقالات لمعة العربية للمقاولات",
    intro: "مرحبًا بكم في نافذة لمعة العربية على قطاع المقاولات والتطوير العمراني.\nفي هذه الصفحة نشارككم:",
    bullets: [
      "أحدث الأخبار عن المشاريع والعقود الجديدة.",
      "مقالات متخصصة في البناء والتطوير.",
      "تحليلات سوقية حول مستقبل المقاولات في المملكة.",
    ],
    projectsTitle: "مشاريعنا المميزة",
    articles: [
      {
        title: "معايير الجودة في قطاع المقاولات",
        subtitle: "لماذا تصنع الفارق في نجاح المشروع؟",
        body: "الجودة لم تعد رفاهية في عالم المقاولات، بل أصبحت ضرورة لضمان نجاح المشاريع. تطبيق معايير الجودة في جميع المراحل – من اختيار المواد إلى التنفيذ – يساهم في تقليل الأخطاء والهدر، ويعزز ثقة العملاء. في لمعة العربية، نلتزم بأعلى معايير الجودة العالمية لضمان تسليم مشاريع تفوق توقعات عملائنا.",
        img: "/images/quality-photo.jpg",
        imgAlt: "معايير الجودة في المقاولات",
      },
      {
        title: "أحدث اتجاهات البناء في السعودية",
        subtitle: "من الاستدامة إلى المدن الذكية",
        body: "الجودة لم تعد رفاهية في عالم المقاولات، بل أصبحت ضرورة لضمان نجاح المشاريع. تطبيق معايير الجودة في جميع المراحل – من اختيار المواد إلى التنفيذ – يساهم في تقليل الأخطاء والهدر، ويعزز ثقة العملاء. في لمعة العربية، نلتزم بأعلى معايير الجودة العالمية لضمان تسليم مشاريع تفوق توقعات عملائنا.",
        img: "/images/trends-photo.jpg",
        imgAlt: "اتجاهات البناء الحديثة في السعودية",
      },
      {
        title: "كيف تضمن شركات المقاولات",
        subtitle: "حماية فرق العمل والمواقع؟",
        body: "السلامة في مواقع البناء هي حجر الأساس لنجاح أي مشروع. توفير معدات الحماية الشخصية، وتطبيق أنظمة السلامة الصارمة، وتدريب الفرق بشكل مستمر يساهم في تقليل الحوادث وضمان بيئة عمل آمنة. في لمعة العربية، نعتبر السلامة قيمة أساسية نلتزم بها في جميع مشاريعنا",
        img: "/images/safety-photo.jpg",
        imgAlt: "السلامة في مواقع البناء",
      },
    ],
    heroAlt: "لمعة العربية - الأخبار والمقالات",
    portraitAlt: "فريق لمعة العربية في الموقع",
  },
  en: {
    title: "News & Articles",
    sectionHeading: "Lamaat Al-Arabiya Contracting News & Articles",
    intro: "Welcome to Lama3t Al-Arabia's window into contracting and urban development.\nOn this page we share:",
    bullets: [
      "The latest news on new projects and contracts.",
      "Specialized articles on construction and development.",
      "Market analysis on the future of contracting in the Kingdom.",
    ],
    projectsTitle: "Our Featured Projects",
    articles: [
      {
        title: "Quality Standards in Contracting",
        subtitle: "Why It Makes the Difference for Project Success",
        body: "Quality is no longer a luxury in the contracting world — it's a necessity for project success. Applying quality standards at every stage, from material selection to execution, reduces errors and waste and builds client trust.",
        img: "/images/quality-photo.jpg",
        imgAlt: "Quality standards in contracting",
      },
      {
        title: "Latest Construction Trends in Saudi Arabia",
        subtitle: "From Sustainability to Smart Cities",
        body: "The Kingdom is undergoing a major transformation in construction, driven by Vision 2030 and a shift toward sustainability and smart cities.",
        img: "/images/trends-photo.jpg",
        imgAlt: "Modern construction trends in Saudi Arabia",
      },
      {
        title: "How Contracting Companies Ensure",
        subtitle: "Protection for Teams and Sites",
        body: "Safety on construction sites is the foundation of any successful project. Providing personal protective equipment, enforcing strict safety systems, and continuous team training.",
        img: "/images/safety-photo.jpg",
        imgAlt: "Construction site safety",
      },
    ],
    heroAlt: "Lama3t Al-Arabia - News & Articles",
    portraitAlt: "Lama3t Al-Arabia team on site",
  },
};

const BLOG_CARDS = {
  ar: [
    {
      slug: "villa-construction",
      title: "بناء فلل عظم وتشطيب – تسليم مفتاح",
      excerpt: "من الأساسات إلى التشطيب الكامل بنظام تسليم مفتاح. تشطيبات داخلية وخارجية وأعمال كهروميكانيكية في الرياض وجدة والقصيم.",
      tag: "مقاولات سكنية",
    },
    {
      slug: "mosque-construction",
      title: "بناء مساجد وجوامع بالمملكة",
      excerpt: "تنفيذ وتشطيب دور العبادة بأعلى معايير الجودة. مآذن وقباب وقاعات صلاة ومرافق مساندة.",
      tag: "مقاولات دينية",
    },
    {
      slug: "commercial-finishing",
      title: "تشطيبات تجارية – مولات ومطارات",
      excerpt: "تشطيبات احترافية للمولات والمطارات والفنادق والمجمعات التجارية بمعايير عالمية.",
      tag: "تشطيبات كبرى",
    },
    {
      slug: "sandblasting",
      title: "خدمات السفع الرملي الصناعي",
      excerpt: "معالجة الأسطح المعدنية وتجهيز الهياكل الحديدية والخزانات والأنابيب وفق المعايير القياسية الدولية.",
      tag: "خدمات صناعية",
    },
    {
      slug: "vision-2030-smart-cities-construction",
      title: "رؤية السعودية 2030 وتوجهات مستقبل قطاع البناء",
      excerpt: "كيف تعيد رؤية 2030 تشكيل قطاع المقاولات السعودي عبر الاستدامة والمدن الذكية ورفع معايير الأداء.",
      tag: "رؤى الصناعة",
    },
    {
      slug: "commercial-finishing-malls-airports",
      title: "تشطيبات المولات والمطارات التجارية الكبرى",
      excerpt: "ما يشمله تنفيذ تشطيبات المشاريع التجارية الكبرى ولماذا يهم الالتزام بالمعايير العالمية في كل مرحلة.",
      tag: "الإنشاءات التجارية",
    },
    {
      slug: "turnkey-villa-construction-guide",
      title: "دليل شامل لبناء الفلل بنظام تسليم مفتاح",
      excerpt: "تعرف كيف تنفذ لمعة العربية مشروع فيلتك من الأساسات حتى التشطيب النهائي في الرياض وجدة والقصيم.",
      tag: "الإنشاءات السكنية",
    },
    {
      slug: "mosque-jamea-construction-standards",
      title: "معايير بناء المساجد والجوامع في السعودية",
      excerpt: "المعايير الهندسية والصوتية لبناء المساجد والجوامع، من القباب والمآذن إلى قاعات الصلاة ومرافق الوضوء.",
      tag: "المنشآت الدينية",
    },
    {
      slug: "mep-contracting-electrical-plumbing-hvac",
      title: "الأعمال الكهروميكانيكية في مشاريع البناء",
      excerpt: "كيف تضمن أعمال الكهرباء والسباكة والتكييف سلامة وكفاءة المشاريع السكنية والتجارية في المملكة.",
      tag: "الخدمات الفنية",
    },
    {
      slug: "industrial-sandblasting-surface-prep",
      title: "خدمات السفع الرملي الصناعي ومعايير الجودة المعتمدة",
      excerpt: "أعمال السفع الرملي للهياكل الفولاذية والخزانات والأنابيب وفق معايير ISO وSSPC وNACE لحماية المنشآت الصناعية من التآكل.",
      tag: "الخدمات الصناعية",
    },
    {
      slug: "construction-site-safety-ksa",
      title: "كيف تحافظ شركات المقاولات على سلامة مواقع العمل بالمملكة",
      excerpt: "معدات الوقاية الشخصية وأنظمة السلامة والتدريب المستمر – كيف تحمي لمعة العربية فريقها ومشاريعها في كل موقع.",
      tag: "رؤى الصناعة",
    },
    {
      slug: "construction-quality-standards-ksa",
      title: "معايير الجودة في المقاولات وأثرها على نجاح المشروع",
      excerpt: "الجودة لم تعد رفاهية في عالم المقاولات بل ضرورة لنجاح المشروع. تعرف كيف يقلل تطبيق معايير الجودة الصارمة من الأخطاء والهدر ويعزز ثقة العميل في كل مرحلة.",
      tag: "رؤى الصناعة",
    },
    {
      slug: "eurotech-me-official-agent-saudi-arabia-it-solutions",
      title: "لمعة العربية – الوكيل الرسمي لحلول EuroTech ME التقنية في المملكة",
      excerpt: "شراكة استراتيجية تجمع خبرة لمعة العربية الميدانية بحلول EuroTech ME التقنية لإدارة مشاريع البناء رقميًا – BIM وإدارة المشاريع والبنية التحتية الذكية لمواقع البناء.",
      tag: "تقنية وابتكار",
    },
    {
      slug: "psychology-of-space-commercial-fitouts",
      title: "سيكولوجية المساحات: كيف تقود التشطيبات التجارية نجاح الأعمال",
      excerpt: "القيمة الحقيقية للتشطيب التجاري تكمن في علم النفس – كيف يؤثر التصميم على تجربة العملاء وإنتاجية الموظفين ونجاح الأعمال.",
      tag: "تشطيبات تجارية",
    },
    {
      slug: "hidden-roi-premium-mep-systems",
      title: "العائد الخفي على الاستثمار من أنظمة الكهروميكانيكا (MEP) الممتازة",
      excerpt: "أنظمة MEP هي الجهاز العصبي لأي مبنى حديث – لماذا يكلفك التوفير أكثر وكيف تحقق الجودة عائداً قوياً عاماً بعد عام.",
      tag: "خدمات فنية",
    },
  ],
  en: [
    {
      slug: "villa-construction",
      title: "Villa Construction & Finishing – Turnkey",
      excerpt: "From foundation to full finishing with turnkey delivery. Interior/exterior finishing and MEP systems in Riyadh, Jeddah & Qassim.",
      tag: "Residential",
    },
    {
      slug: "mosque-construction",
      title: "Mosque & Jamea Construction in Saudi Arabia",
      excerpt: "Building houses of worship to the highest standards. Minarets, domes, prayer halls, and supporting facilities.",
      tag: "Religious Facilities",
    },
    {
      slug: "commercial-finishing",
      title: "Commercial Finishing – Malls & Airports",
      excerpt: "Expert commercial finishing for malls, airports, hotels, and commercial complexes to international standards.",
      tag: "Large-Scale Finishing",
    },
    {
      slug: "sandblasting",
      title: "Industrial Sandblasting Services",
      excerpt: "Metal surface preparation, structural steel treatment, and tank & pipe cleaning to international standards (ISO, SSPC, NACE).",
      tag: "Industrial Services",
    },
    {
      slug: "vision-2030-smart-cities-construction",
      title: "Vision 2030 and the Future of Construction in Saudi Arabia",
      excerpt: "How Vision 2030 is reshaping the Saudi construction sector through sustainability, smart cities and rising contractor standards.",
      tag: "Industry Insights",
    },
    {
      slug: "commercial-finishing-malls-airports",
      title: "Commercial Finishing for Malls, Airports & Hotels in KSA",
      excerpt: "What large-scale commercial finishing involves and why international-standard execution matters at every stage.",
      tag: "Commercial Construction",
    },
    {
      slug: "turnkey-villa-construction-guide",
      title: "Turnkey Villa Construction Guide for Saudi Homeowners",
      excerpt: "Learn how Lamaat Al-Arabiya delivers foundation-to-finish villas in Riyadh, Jeddah and Qassim on schedule.",
      tag: "Residential Construction",
    },
    {
      slug: "mosque-jamea-construction-standards",
      title: "Mosque & Jamea Construction Standards in Saudi Arabia",
      excerpt: "The engineering and acoustic standards behind mosque construction, from domes and minarets to prayer halls and ablution areas.",
      tag: "Religious Facilities",
    },
    {
      slug: "mep-contracting-electrical-plumbing-hvac",
      title: "MEP Contracting in Saudi Arabia: Electrical, Plumbing, HVAC",
      excerpt: "How electrical, plumbing and HVAC contracting keeps Saudi construction projects safe, efficient and code-compliant.",
      tag: "Technical Services",
    },
    {
      slug: "industrial-sandblasting-surface-prep",
      title: "Industrial Sandblasting Services and Surface Prep Standards",
      excerpt: "Sandblasting for structural steel, tanks and pipelines to ISO, SSPC and NACE standards — protecting industrial assets from corrosion.",
      tag: "Industrial Services",
    },
    {
      slug: "construction-site-safety-ksa",
      title: "Construction Site Safety: Protecting Teams and Projects",
      excerpt: "How Lamaat Al-Arabiya applies PPE, enforced safety systems and continuous training to protect its 150+ team and project timelines.",
      tag: "Industry Insights",
    },
    {
      slug: "construction-quality-standards-ksa",
      title: "Quality Standards in Construction: Why They Matter Most",
      excerpt: "Quality control at every stage — from material sourcing to final inspection — reduces rework and delays. Learn how quality standards protect your budget.",
      tag: "Industry Insights",
    },
    {
      slug: "eurotech-me-official-agent-saudi-arabia-it-solutions",
      title: "Lamaat Al-Arabiya – Official Agent of EuroTech ME IT Solutions in Saudi Arabia",
      excerpt: "A strategic partnership combining Lamaat Al-Arabiya's field expertise with EuroTech ME's technology — BIM, project management software, and smart site infrastructure for Saudi construction.",
      tag: "Technology & Innovation",
    },
    {
      slug: "psychology-of-space-commercial-fitouts",
      title: "The Psychology of Space: How Commercial Fit-Outs Drive Business Success",
      excerpt: "The true value of a commercial fit-out lies in psychology — how space design affects customer experience, employee productivity, and business success.",
      tag: "Commercial Finishing",
    },
    {
      slug: "hidden-roi-premium-mep-systems",
      title: "The Hidden ROI of Premium MEP Systems in Construction",
      excerpt: "MEP systems are the central nervous system of any modern building — why cutting corners costs more and how quality delivers strong ROI year after year.",
      tag: "Technical Services",
    },
  ],
};

const PROJECT_IMAGES = [
  { src: "/images/project-1.jpg", alt: "مشروع إنشائي لمعة العربية للمقاولات", altEn: "Lamaat Al-Arabiya construction project" },
  { src: "/images/project-2.jpg", alt: "مشروع تشطيبات لمعة العربية", altEn: "Lamaat Al-Arabiya finishing project" },
  { src: "/images/project-3.jpg", alt: "مشروع بناء لمعة العربية في السعودية", altEn: "Lamaat Al-Arabiya building project in Saudi Arabia" },
  { src: "/images/project-4.jpg", alt: "أعمال مقاولات لمعة العربية", altEn: "Lamaat Al-Arabiya contracting works" },
  { src: "/images/project-5.jpg", alt: "مشروع صيانة لمعة العربية", altEn: "Lamaat Al-Arabiya maintenance project" },
  { src: "/images/project-6.jpg", alt: "مشروع كهروميكانيكي لمعة العربية", altEn: "Lamaat Al-Arabiya MEP project" },
];

export default async function NewsPage({ locale = "ar" }: NewsPageProps) {
  const isAr = locale !== "en";
  const t = isAr ? COPY.ar : COPY.en;
  const dir = isAr ? "rtl" : "ltr";
  const textAlign = isAr ? "text-right" : "text-left";

  return (
    <main dir={dir} className="bg-white">
      {/* Short Header */}
      <section className="relative h-[200px] md:h-[240px] w-full overflow-hidden">
        <Image src="/images/hero-home.png" alt={t.heroAlt} fill className="object-cover -scale-x-100" />
        <div className="absolute inset-0 bg-black/50" />
        <SiteHeader locale={locale} page="blogs" />
        <div className="absolute inset-0 flex items-end justify-center pb-8 md:pb-10">
          <h1 className="font-['Cairo',sans-serif] font-extrabold text-[24px] md:text-[36px] text-[#ececec] text-center">
            {t.title}
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-6xl px-6 py-24 grid gap-10 md:grid-cols-2 items-center">
        <div className={`relative h-[380px] w-full rounded-tl-[200px] rounded-tr-[200px] overflow-hidden ${isAr ? "order-2 md:order-1" : "order-1 md:order-2"}`}>
          <Image src="/images/news-portrait.jpg" alt={t.portraitAlt} fill className="object-cover" />
        </div>
        <div className={`${isAr ? "text-right order-1 md:order-2" : "text-left order-2 md:order-1"}`}>
          <h2 className="font-['Cairo',sans-serif] font-extrabold text-[32px] md:text-[56px] text-[#1e1e1e] mb-5">
            {t.sectionHeading}
          </h2>
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

      {/* Projects */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="font-['Cairo',sans-serif] font-extrabold text-[#1e1e1e] text-[32px] md:text-[56px] text-center mb-14">
          {t.projectsTitle}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECT_IMAGES.map((proj, i) => (
            <div key={i} className="relative h-[280px] rounded-3xl overflow-hidden">
              <Image src={proj.src} alt={isAr ? proj.alt : proj.altEn} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Blog Posts */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="font-['Cairo',sans-serif] font-extrabold text-[#1e1e1e] text-[32px] md:text-[56px] text-center mb-14">
          {isAr ? "مقالات متخصصة" : "Specialized Articles"}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {(isAr ? BLOG_CARDS.ar : BLOG_CARDS.en).map((card) => (
            <Link
              key={card.slug}
              href={`/${locale}/blogs/${card.slug}`}
              className="group block rounded-3xl border border-gray-200 p-6 hover:border-[#137547] hover:shadow-lg transition-all"
            >
              <span className="inline-block bg-[#137547] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                {card.tag}
              </span>
              <h3 className="font-['Cairo',sans-serif] font-bold text-[20px] md:text-[24px] text-[#1e1e1e] mb-2 group-hover:text-[#137547] transition-colors">
                {card.title}
              </h3>
              <p className="font-['Tajawal',sans-serif] text-[15px] md:text-[17px] text-gray-600 leading-relaxed">
                {card.excerpt}
              </p>
              <span className="inline-block mt-4 text-[#137547] font-bold text-sm">
                {isAr ? "اقرأ المزيد ←" : "Read more →"}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Articles */}
      <section className="relative bg-[#203524] overflow-hidden py-24">
        <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-[60px] size-[611px] opacity-40">
          <Image src="/images/figma/ellipse-glow.svg" alt="" fill className="object-contain" />
        </div>
        <div className="relative z-10 flex flex-col gap-20">
          {t.articles.map((a, i) => (
            <article
              key={i}
              className={`mx-auto max-w-6xl px-6 grid gap-10 md:grid-cols-2 items-center ${
                isAr
                  ? (i % 2 === 1 ? "md:[&>*:first-child]:order-2" : "")
                  : (i % 2 === 0 ? "md:[&>*:first-child]:order-2" : "")
              }`}
            >
              <div className={`relative h-[320px] w-full overflow-hidden ${i % 2 === 0 ? "rounded-3xl" : ""}`}>
                <Image src={a.img} alt={a.imgAlt} fill className={`object-center ${i % 2 === 0 ? "object-contain" : "object-cover"}`} />
              </div>
              <div className={textAlign}>
                <h3 className="font-['Cairo',sans-serif] font-extrabold text-white text-[28px] md:text-[40px] mb-0">
                  {a.title}
                </h3>
                <p className="font-['Cairo',sans-serif] font-extrabold text-white text-[28px] md:text-[40px] mb-6">
                  {a.subtitle}
                </p>
                <p className="font-['Tajawal',sans-serif] text-white text-[16px] md:text-[20px] leading-relaxed">
                  {a.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}
