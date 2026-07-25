import React from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

interface VillaConstructionPageProps {
  locale?: string;
}

export default function VillaConstructionPage({ locale = "ar" }: VillaConstructionPageProps) {
  const isAr = locale === "ar";

  const content = isAr
    ? {
        heroTitle: "بناء فلل عظم وتشطيب",
        heroSubtitle: "تسليم مفتاح – من الأساسات إلى التشطيب الكامل",
        heroDescription:
          "في لمعة العربية للمقاولات، نتخصص في بناء الفلل السكنية بنظام تسليم مفتاح في الرياض وجدة والقصيم. من صب الأساسات والهيكل الإنشائي (العظم) إلى التشطيبات الداخلية والخارجية والأعمال الكهروميكانيكية، نضمن لك فيلا متكاملة بأعلى معايير الجودة.",
        ctaText: "اطلب عرض سعر",
        servicesTitle: "مراحل بناء الفلل",
        services: [
          {
            title: "بناء العظم (الهيكل الإنشائي)",
            description:
              "تنفيذ كامل للأعمال الإنشائية: حفر وتأسيس، صب الأساسات والقواعد، أعمال الخرسانة المسلحة، بناء الجدران، وصب الأسقف. نلتزم بالمخططات الهندسية المعتمدة ومعايير كود البناء السعودي.",
          },
          {
            title: "التشطيبات الداخلية",
            description:
              "أعمال البياض والدهانات، تركيب الأرضيات (رخام، بورسلان، باركيه)، تركيب الأبواب الداخلية والنوافذ، أعمال الجبس والديكورات، تركيب المطابخ والخزائن المدمجة.",
          },
          {
            title: "التشطيبات الخارجية",
            description:
              "تنفيذ واجهات حجرية وطوب، أعمال العزل المائي والحراري، تركيب النوافذ الخارجية والأبواب الرئيسية، تنسيق الحدائق والمسابح والأسوار الخارجية.",
          },
          {
            title: "الأعمال الكهروميكانيكية",
            description:
              "تمديدات كهربائية كاملة وأنظمة إضاءة ذكية، تمديدات سباكة وصرف صحي، أنظمة تكييف مركزي (HVAC)، أنظمة إنذار حريق وسلامة.",
          },
          {
            title: "تسليم مفتاح",
            description:
              "تسليم الفيلا جاهزة للسكن بكل تفاصيلها: من الأثاث المدمج إلى أنظمة المنزل الذكي. فحص شامل لجميع الأنظمة والتشطيبات قبل التسليم مع ضمان على جميع الأعمال.",
          },
        ],
        whyUsTitle: "لماذا تختار لمعة العربية لبناء فيلتك؟",
        whyUs: [
          "خبرة +20 عامًا في بناء الفلل السكنية الفاخرة",
          "سوابق أعمال موثقة في مشاريع فلل كبرى (فلل المزيرعي – الرياض)",
          "التزام صارم بكود البناء السعودي ومعايير الجودة",
          "فريق هندسي متكامل: مدني، معماري، كهرباء، ميكانيكا",
          "جدول زمني واضح وشفاف مع تقارير تقدم دورية",
          "ضمان شامل على جميع الأعمال الإنشائية والتشطيبات",
        ],
        projectsTitle: "سوابق أعمالنا",
        projects: [
          "مشروع فلل المزيرعي – الرياض (قيد التنفيذ 2024)",
          "مشروع الفردوس السكني – بالتعاون مع الشركة العامة للتعهدات",
          "فلل سكنية فاخرة في حي النرجس – الرياض",
          "مشاريع فلل متعددة في منطقة القصيم",
        ],
        areasTitle: "مناطق الخدمة",
        areas: ["الرياض ومنطقة الرياض", "جدة ومنطقة مكة المكرمة", "القصيم وبريدة", "جميع مناطق المملكة"],
        ctaBottomTitle: "جاهز لبناء فيلا أحلامك؟",
        ctaBottomDescription: "تواصل معنا للحصول على استشارة مجانية وعرض سعر تفصيلي لبناء فيلتك. فريقنا الهندسي جاهز لتحويل رؤيتك إلى واقع.",
      }
    : {
        heroTitle: "Villa Construction & Finishing",
        heroSubtitle: "Turnkey Delivery – From Foundation to Full Finishing",
        heroDescription:
          "At Lamaat Al-Arabiya Contracting, we specialize in residential villa construction with turnkey delivery across Riyadh, Jeddah, and Qassim. From foundation and structural shell to interior/exterior finishing and MEP systems, we deliver a complete villa to the highest quality standards.",
        ctaText: "Request a Quote",
        servicesTitle: "Villa Construction Stages",
        services: [
          {
            title: "Shell & Core (Structural Works)",
            description:
              "Complete structural works: excavation and foundation, reinforced concrete works, wall construction, and roof casting. We adhere to approved engineering plans and Saudi Building Code standards.",
          },
          {
            title: "Interior Finishing",
            description:
              "Plastering and painting, flooring installation (marble, porcelain, parquet), interior doors and windows, gypsum works and decorations, kitchen and built-in wardrobe installation.",
          },
          {
            title: "Exterior Finishing",
            description:
              "Stone and brick facades, waterproofing and thermal insulation, exterior windows and main doors, landscaping, swimming pools, and perimeter walls.",
          },
          {
            title: "MEP Systems",
            description:
              "Complete electrical systems and smart lighting, plumbing and drainage, central HVAC systems, fire alarm and safety systems.",
          },
          {
            title: "Turnkey Delivery",
            description:
              "Villa delivered fully ready for occupancy: from built-in furniture to smart home systems. Comprehensive inspection of all systems and finishes before handover with warranty on all works.",
          },
        ],
        whyUsTitle: "Why Choose Lamaat Al-Arabiya for Your Villa?",
        whyUs: [
          "20+ years of experience building luxury residential villas",
          "Documented track record in major villa projects (Al-Muzairie Villas – Riyadh)",
          "Strict compliance with Saudi Building Code and quality standards",
          "Complete engineering team: civil, architectural, electrical, mechanical",
          "Clear and transparent timeline with periodic progress reports",
          "Comprehensive warranty on all construction and finishing works",
        ],
        projectsTitle: "Our Track Record",
        projects: [
          "Al-Muzairie Villas Project – Riyadh (under construction 2024)",
          "Al-Ferdous Residential Project – in cooperation with the General Contracting Company",
          "Luxury residential villas in Al-Nargis district – Riyadh",
          "Multiple villa projects in Qassim region",
        ],
        areasTitle: "Service Areas",
        areas: ["Riyadh & Riyadh Region", "Jeddah & Makkah Region", "Qassim & Buraydah", "All regions across Saudi Arabia"],
        ctaBottomTitle: "Ready to Build Your Dream Villa?",
        ctaBottomDescription: "Contact us for a free consultation and detailed quote for your villa construction. Our engineering team is ready to turn your vision into reality.",
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
                  <div className="text-[#137547] font-bold text-2xl mb-2 font-[family-name:var(--font-cairo)]">{i + 1}</div>
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
