import React from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

interface SandblastingPageProps {
  locale?: string;
}

export default function SandblastingPage({ locale = "ar" }: SandblastingPageProps) {
  const isAr = locale === "ar";

  const content = isAr
    ? {
        heroTitle: "خدمات السفع الرملي الصناعي",
        heroSubtitle: "معالجة وتجهيز الأسطح المعدنية بأعلى المعايير القياسية",
        heroDescription:
          "في لمعة العربية للمقاولات، نقدم خدمات السفع الرملي الصناعي (Sandblasting) للمصانع والمنشآت الصناعية الكبرى في الرياض والقصيم وجدة. نلتزم بالمعايير الدولية في تجهيز الأسطح للدهانات الصناعية والطلاءات الواقية.",
        ctaText: "اطلب عرض سعر",
        servicesTitle: "خدماتنا في السفع الرملي",
        services: [
          {
            title: "معالجة الأسطح المعدنية",
            description:
              "تنظيف وتجهيز الأسطح المعدنية بالسفع الرملي لإزالة الصدأ والشوائب والطلاءات القديمة، وتجهيزها لاستقبال الدهانات والطلاءات الصناعية الجديدة وفق معايير SA 2.5 و SA 3.",
          },
          {
            title: "تجهيز الهياكل المعدنية والحديدية",
            description:
              "سفع رملي شامل للهياكل الحديدية والإنشائية قبل عمليات الدهان والحماية. نتعامل مع المشاريع الكبرى بما يشمل الجسور المعدنية والهياكل الصناعية وأبراج الاتصالات.",
          },
          {
            title: "تنظيف الخزانات والأنابيب المعدنية",
            description:
              "تنظيف داخلي وخارجي للخزانات الصناعية وخطوط الأنابيب المعدنية بالسفع الرملي. إزالة الترسبات والصدأ وتجهيز الأسطح للطلاء الوقائي الداخلي والخارجي.",
          },
          {
            title: "سفع رملي للمصانع والمنشآت",
            description:
              "خدمات سفع رملي متكاملة للمصانع والمنشآت الصناعية، تشمل معالجة الأرضيات المعدنية والسقالات والمعدات الثقيلة والآلات الصناعية.",
          },
          {
            title: "تجهيز الأسطح للدهانات الصناعية",
            description:
              "تحضير الأسطح وفق المعايير القياسية الدولية (ISO 8501، SSPC، NACE) لضمان التصاق مثالي للدهانات الصناعية والطلاءات الإيبوكسية والبولي يوريثان.",
          },
        ],
        whyUsTitle: "لماذا تختار لمعة العربية؟",
        whyUs: [
          "خبرة +20 عامًا في القطاع الصناعي والإنشائي",
          "التزام صارم بالمعايير القياسية الدولية (ISO، SSPC، NACE)",
          "فريق فني متخصص ومعدات سفع رملي حديثة",
          "سوابق أعمال مع مصانع ومنشآت كبرى في المملكة",
          "تغطية جغرافية شاملة: الرياض – القصيم – جدة",
          "تقارير فحص وجودة معتمدة لكل مشروع",
        ],
        standardsTitle: "المعايير والمواصفات",
        standardsDescription:
          "نعمل وفق أعلى المعايير القياسية الدولية في مجال السفع الرملي ومعالجة الأسطح، بما يشمل: معايير ISO 8501 لنظافة الأسطح، معايير SSPC-SP للتحضير السطحي، ومعايير NACE للحماية من التآكل. يضمن التزامنا بهذه المعايير جودة عالية وعمرًا افتراضيًا أطول للطلاءات والدهانات الصناعية.",
        areasTitle: "مناطق الخدمة",
        areas: ["الرياض ومنطقة الرياض", "القصيم وبريدة", "جدة ومنطقة مكة المكرمة", "المنطقة الشرقية", "جميع مناطق المملكة العربية السعودية"],
        ctaBottomTitle: "هل تحتاج خدمات سفع رملي صناعي؟",
        ctaBottomDescription: "تواصل معنا للحصول على استشارة فنية مجانية وعرض سعر مخصص لمشروعك. فريقنا المتخصص جاهز لخدمتكم.",
      }
    : {
        heroTitle: "Industrial Sandblasting Services",
        heroSubtitle: "Surface Preparation & Metal Treatment to International Standards",
        heroDescription:
          "At Lamaat Al-Arabiya Contracting, we provide professional industrial sandblasting services for factories and major industrial facilities across Riyadh, Qassim, and Jeddah. We adhere to international standards for surface preparation for industrial coatings and protective finishes.",
        ctaText: "Request a Quote",
        servicesTitle: "Our Sandblasting Services",
        services: [
          {
            title: "Metal Surface Treatment",
            description:
              "Cleaning and preparing metal surfaces through sandblasting to remove rust, contaminants, and old coatings, preparing them for new industrial paints and coatings according to SA 2.5 and SA 3 standards.",
          },
          {
            title: "Structural Steel Preparation",
            description:
              "Comprehensive sandblasting for structural steel before painting and protection. We handle large-scale projects including metal bridges, industrial structures, and communication towers.",
          },
          {
            title: "Tank & Pipe Cleaning",
            description:
              "Internal and external cleaning of industrial tanks and metal pipelines through sandblasting. Removal of deposits and rust, and surface preparation for internal and external protective coatings.",
          },
          {
            title: "Factory & Facility Sandblasting",
            description:
              "Comprehensive sandblasting services for factories and industrial facilities, including treatment of metal floors, scaffolding, heavy equipment, and industrial machinery.",
          },
          {
            title: "Surface Preparation for Industrial Coatings",
            description:
              "Surface preparation according to international standards (ISO 8501, SSPC, NACE) to ensure optimal adhesion of industrial paints, epoxy coatings, and polyurethane finishes.",
          },
        ],
        whyUsTitle: "Why Choose Lamaat Al-Arabiya?",
        whyUs: [
          "20+ years of experience in the industrial & construction sector",
          "Strict adherence to international standards (ISO, SSPC, NACE)",
          "Specialized technical team with modern sandblasting equipment",
          "Proven track record with major factories and facilities in Saudi Arabia",
          "Full geographic coverage: Riyadh – Qassim – Jeddah",
          "Certified inspection and quality reports for every project",
        ],
        standardsTitle: "Standards & Specifications",
        standardsDescription:
          "We operate according to the highest international standards in sandblasting and surface treatment, including: ISO 8501 surface cleanliness standards, SSPC-SP surface preparation standards, and NACE corrosion protection standards. Our commitment to these standards ensures high quality and extended lifespan for industrial coatings and paints.",
        areasTitle: "Service Areas",
        areas: ["Riyadh & Riyadh Region", "Qassim & Buraydah", "Jeddah & Makkah Region", "Eastern Province", "All regions across Saudi Arabia"],
        ctaBottomTitle: "Need Industrial Sandblasting Services?",
        ctaBottomDescription: "Contact us for a free technical consultation and customized quote for your project. Our specialized team is ready to serve you.",
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

        {/* Standards Section */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-[family-name:var(--font-cairo)] mb-6 text-[#1a3a22]">
              {content.standardsTitle}
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">{content.standardsDescription}</p>
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
