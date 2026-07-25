import React from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

interface CommercialFinishingPageProps {
  locale?: string;
}

export default function CommercialFinishingPage({ locale = "ar" }: CommercialFinishingPageProps) {
  const isAr = locale === "ar";

  const content = isAr
    ? {
        heroTitle: "تشطيبات تجارية للمولات والمطارات",
        heroSubtitle: "تنفيذ وتشطيب مجمعات تجارية بمعايير عالمية",
        heroDescription:
          "في لمعة العربية للمقاولات، نتخصص في التشطيبات التجارية الكبرى للمولات والمطارات والمجمعات التجارية والفنادق. نجمع بين الخبرة الهندسية العميقة والالتزام بالمعايير القياسية لتقديم مشاريع تشطيب تتجاوز التوقعات.",
        ctaText: "اطلب عرض سعر",
        servicesTitle: "خدمات التشطيبات التجارية",
        services: [
          {
            title: "تشطيبات المولات والمراكز التجارية",
            description:
              "تنفيذ تشطيبات داخلية وخارجية للمولات والمراكز التجارية: أرضيات رخام وجرانيت، واجهات زجاجية وألومنيوم، أنظمة إضاءة تجارية، تكسيات جدران وأسقف معلقة، تجهيز المحلات والوحدات التجارية.",
          },
          {
            title: "تشطيبات المطارات",
            description:
              "تنفيذ أعمال التشطيب في المطارات وفق أعلى المعايير الدولية: أرضيات عالية التحمل، أنظمة سقف معلق متخصصة، واجهات كرتن وول، أعمال كلادينج، أنظمة إنارة متقدمة.",
          },
          {
            title: "تشطيبات الفنادق والمطاعم",
            description:
              "تشطيبات فاخرة للفنادق والمطاعم والمقاهي: ديكورات داخلية مميزة، تركيب أقواس خشبية وزخارف، واجهات نحاسية وحجرية، أنظمة إضاءة معلقة وتصاميم معمارية فريدة.",
          },
          {
            title: "الأعمال الكهروميكانيكية التجارية",
            description:
              "أنظمة تكييف مركزي للمساحات الكبيرة، تمديدات كهربائية تجارية وأنظمة طاقة احتياطية، أنظمة إطفاء حريق وسلامة متقدمة، أنظمة سباكة وصرف صحي تجارية.",
          },
          {
            title: "تشطيبات خارجية تجارية",
            description:
              "واجهات كلادينج وكرتن وول، أعمال حجر وطوب زخرفي، لافتات وعلامات تجارية مضيئة، تنسيق مداخل ومواقف سيارات ومناطق تحميل.",
          },
        ],
        whyUsTitle: "لماذا تختار لمعة العربية للتشطيبات التجارية؟",
        whyUs: [
          "خبرة +20 عامًا في تنفيذ مشاريع تجارية كبرى",
          "سوابق أعمال: فنادق، محلات تجارية، مراكز تجميل، مطاعم",
          "التزام صارم بالمعايير القياسية وجودة التنفيذ",
          "فريق متخصص في التشطيبات التجارية والديكورات الداخلية",
          "القدرة على تنفيذ مشاريع ضخمة بجدول زمني محكم",
          "تغطية جغرافية: الرياض – جدة – القصيم – المملكة بالكامل",
        ],
        projectsTitle: "سوابق أعمالنا",
        projects: [
          "مشاريع تشطيبات فنادق فاخرة",
          "تشطيبات محلات تجارية ومراكز تجميل",
          "تشطيبات مطاعم بتصاميم معمارية فريدة (أقواس خشبية، رخام، نحاس)",
          "أعمال تشطيب ممرات زجاجية في مشاريع تجارية",
          "واجهات نحاسية وديكورات داخلية لمشاريع ضيافة",
        ],
        areasTitle: "مناطق الخدمة",
        areas: ["الرياض ومنطقة الرياض", "جدة ومنطقة مكة المكرمة", "القصيم وبريدة", "جميع مناطق المملكة العربية السعودية"],
        ctaBottomTitle: "هل لديك مشروع تشطيب تجاري؟",
        ctaBottomDescription: "تواصل معنا للحصول على استشارة مجانية وعرض سعر مفصّل لمشروعك التجاري. فريقنا المتخصص جاهز لتنفيذ رؤيتك.",
      }
    : {
        heroTitle: "Commercial Finishing – Malls & Airports",
        heroSubtitle: "Expert Finishing for Commercial Complexes to International Standards",
        heroDescription:
          "At Lamaat Al-Arabiya Contracting, we specialize in large-scale commercial finishing for malls, airports, commercial complexes, and hotels. We combine deep engineering expertise with adherence to international standards to deliver finishing projects that exceed expectations.",
        ctaText: "Request a Quote",
        servicesTitle: "Commercial Finishing Services",
        services: [
          {
            title: "Mall & Shopping Center Finishing",
            description:
              "Interior and exterior finishing for malls and shopping centers: marble and granite flooring, glass and aluminum facades, commercial lighting systems, wall cladding and suspended ceilings, retail unit fit-out.",
          },
          {
            title: "Airport Finishing",
            description:
              "Airport finishing works to the highest international standards: high-durability flooring, specialized suspended ceiling systems, curtain wall facades, cladding works, advanced lighting systems.",
          },
          {
            title: "Hotel & Restaurant Finishing",
            description:
              "Luxury finishing for hotels, restaurants, and cafes: distinctive interior decorations, wooden arches and ornamental installations, copper and stone facades, pendant lighting and unique architectural designs.",
          },
          {
            title: "Commercial MEP Systems",
            description:
              "Central HVAC for large spaces, commercial electrical systems and backup power, advanced fire suppression and safety systems, commercial plumbing and drainage.",
          },
          {
            title: "Commercial Exterior Finishing",
            description:
              "Cladding and curtain wall facades, decorative stone and brick work, illuminated commercial signage, entrance, parking, and loading area landscaping.",
          },
        ],
        whyUsTitle: "Why Choose Lamaat Al-Arabiya for Commercial Finishing?",
        whyUs: [
          "20+ years of experience in major commercial project execution",
          "Track record: hotels, retail stores, beauty centers, restaurants",
          "Strict adherence to international standards and execution quality",
          "Specialized team in commercial finishing and interior decoration",
          "Capability to execute large-scale projects on tight schedules",
          "Geographic coverage: Riyadh – Jeddah – Qassim – all of Saudi Arabia",
        ],
        projectsTitle: "Our Track Record",
        projects: [
          "Luxury hotel finishing projects",
          "Retail store and beauty center finishing",
          "Restaurant finishing with unique architectural designs (wooden arches, marble, copper)",
          "Glass corridor finishing in commercial projects",
          "Copper facades and interior decorations for hospitality projects",
        ],
        areasTitle: "Service Areas",
        areas: ["Riyadh & Riyadh Region", "Jeddah & Makkah Region", "Qassim & Buraydah", "All regions across Saudi Arabia"],
        ctaBottomTitle: "Have a Commercial Finishing Project?",
        ctaBottomDescription: "Contact us for a free consultation and detailed quote for your commercial project. Our specialized team is ready to execute your vision.",
      };

  return (
    <>
      <SiteHeader locale={locale} />
      <main className="bg-white text-gray-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#1a3a22] to-[#137547] text-white py-20 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-cairo)] mb-4">
              {content.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl font-[family-name:var(--font-cairo)] mb-6 opacity-90">
              {content.heroSubtitle}
            </p>
            <p className="text-lg max-w-3xl mx-auto mb-8 opacity-80 leading-relaxed">
              {content.heroDescription}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-block bg-white text-[#137547] font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors"
            >
              {content.ctaText}
            </Link>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold font-[family-name:var(--font-cairo)] text-center mb-12 text-[#1a3a22]">
              {content.servicesTitle}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.services.map((service, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="text-xl font-bold font-[family-name:var(--font-cairo)] mb-3 text-[#137547]">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold font-[family-name:var(--font-cairo)] text-center mb-10 text-[#1a3a22]">
              {content.whyUsTitle}
            </h2>
            <ul className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {content.whyUs.map((item, i) => (
                <li key={i} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100">
                  <span className="text-[#137547] font-bold text-xl mt-0.5" aria-hidden="true">&#10003;</span>
                  <span className="text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Track Record */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-[family-name:var(--font-cairo)] text-center mb-8 text-[#1a3a22]">
              {content.projectsTitle}
            </h2>
            <ul className="space-y-3">
              {content.projects.map((project, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-800 text-lg">
                  <span className="text-[#137547] mt-1" aria-hidden="true">&#9679;</span>
                  <span>{project}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-[family-name:var(--font-cairo)] mb-8 text-[#1a3a22]">
              {content.areasTitle}
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {content.areas.map((area, i) => (
                <span key={i} className="bg-white border border-[#137547] text-[#137547] rounded-full px-5 py-2 font-medium">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 px-6 bg-[#1a3a22] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-[family-name:var(--font-cairo)] mb-4">
              {content.ctaBottomTitle}
            </h2>
            <p className="text-lg mb-8 opacity-90">{content.ctaBottomDescription}</p>
            <Link
              href={`/${locale}/contact`}
              className="inline-block bg-white text-[#1a3a22] font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors"
            >
              {content.ctaText}
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
