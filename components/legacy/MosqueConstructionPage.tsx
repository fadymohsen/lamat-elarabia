import React from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

interface MosqueConstructionPageProps {
  locale?: string;
}

export default function MosqueConstructionPage({ locale = "ar" }: MosqueConstructionPageProps) {
  const isAr = locale === "ar";

  const content = isAr
    ? {
        heroTitle: "بناء مساجد وجوامع",
        heroSubtitle: "تنفيذ وتشطيب دور العبادة بأعلى معايير الجودة والإتقان",
        heroDescription:
          "في لمعة العربية للمقاولات، نفخر بتنفيذ مشاريع بناء المساجد والجوامع في المملكة العربية السعودية. من التصميم المعماري الإسلامي الأصيل إلى التشطيب الكامل، نبني دور عبادة تليق بمكانتها الروحية والحضارية.",
        ctaText: "اطلب عرض سعر",
        servicesTitle: "خدماتنا في بناء المساجد",
        services: [
          {
            title: "الأعمال الإنشائية",
            description:
              "تنفيذ كامل للهيكل الإنشائي: أساسات وقواعد، أعمدة وجدران، قاعات صلاة واسعة بتصميم يراعي الحمولات والفراغات الكبيرة. بناء المآذن والقباب بدقة هندسية عالية.",
          },
          {
            title: "التشطيبات الداخلية",
            description:
              "تركيب الرخام والجرانيت للأرضيات والجدران، أعمال الجبس والزخارف الإسلامية، تركيب المحراب والمنبر، أنظمة الإضاءة المتخصصة، تركيب السجاد والفرش.",
          },
          {
            title: "التشطيبات الخارجية",
            description:
              "واجهات حجرية وزخارف إسلامية، بناء وتشطيب المآذن والقباب، أعمال العزل المائي والحراري، تنسيق الساحات الخارجية والمواقف.",
          },
          {
            title: "الأنظمة الكهروميكانيكية",
            description:
              "أنظمة تكييف مركزي مصممة للمساحات الواسعة، أنظمة صوت وميكروفونات متخصصة، إضاءة داخلية وخارجية، أنظمة إطفاء حريق وسلامة.",
          },
          {
            title: "المرافق المساندة",
            description:
              "بناء وتشطيب دورات المياه ومرافق الوضوء، غرف الإمام والمؤذن، مكتبات ومصليات نسائية، مواقف سيارات وساحات خارجية.",
          },
        ],
        whyUsTitle: "لماذا تختار لمعة العربية لبناء مسجدك؟",
        whyUs: [
          "خبرة +20 عامًا في تنفيذ مشاريع حكومية وأوقاف",
          "فهم عميق لمتطلبات التصميم المعماري الإسلامي",
          "سوابق أعمال في بناء مساجد ومرافق دينية",
          "التزام بمعايير الجودة والسلامة في جميع مراحل العمل",
          "فريق هندسي متكامل ومتخصص",
          "تغطية شاملة: الرياض – جدة – القصيم – جميع مناطق المملكة",
        ],
        areasTitle: "مناطق الخدمة",
        areas: ["الرياض ومنطقة الرياض", "جدة ومنطقة مكة المكرمة", "القصيم وبريدة", "المدينة المنورة", "جميع مناطق المملكة العربية السعودية"],
        ctaBottomTitle: "هل تخطط لبناء مسجد أو جامع؟",
        ctaBottomDescription: "تواصل معنا للحصول على استشارة مجانية وعرض سعر شامل لمشروعك. نضع خبرتنا في خدمة بناء بيوت الله.",
      }
    : {
        heroTitle: "Mosque & Jamea Construction",
        heroSubtitle: "Building Houses of Worship to the Highest Standards of Quality",
        heroDescription:
          "At Lamaat Al-Arabiya Contracting, we take pride in building mosques and jameas across Saudi Arabia. From authentic Islamic architectural design to complete finishing, we build houses of worship befitting their spiritual and cultural significance.",
        ctaText: "Request a Quote",
        servicesTitle: "Our Mosque Construction Services",
        services: [
          {
            title: "Structural Works",
            description:
              "Complete structural construction: foundations, columns and walls, spacious prayer halls designed for large loads and open spaces. Precise engineering for minarets and domes.",
          },
          {
            title: "Interior Finishing",
            description:
              "Marble and granite flooring and walls, gypsum works and Islamic decorations, mihrab and minbar installation, specialized lighting systems, carpet and furnishing installation.",
          },
          {
            title: "Exterior Finishing",
            description:
              "Stone facades and Islamic ornamental work, minaret and dome finishing, waterproofing and thermal insulation, courtyard and parking area landscaping.",
          },
          {
            title: "MEP Systems",
            description:
              "Central HVAC systems designed for large spaces, specialized sound and microphone systems, interior and exterior lighting, fire suppression and safety systems.",
          },
          {
            title: "Supporting Facilities",
            description:
              "Ablution facilities and restrooms, imam and muezzin rooms, libraries and women's prayer areas, parking lots and outdoor courtyards.",
          },
        ],
        whyUsTitle: "Why Choose Lamaat Al-Arabiya for Your Mosque?",
        whyUs: [
          "20+ years of experience in government and endowment projects",
          "Deep understanding of Islamic architectural design requirements",
          "Track record in mosque and religious facility construction",
          "Commitment to quality and safety standards at every stage",
          "Complete and specialized engineering team",
          "Full coverage: Riyadh – Jeddah – Qassim – all Saudi regions",
        ],
        areasTitle: "Service Areas",
        areas: ["Riyadh & Riyadh Region", "Jeddah & Makkah Region", "Qassim & Buraydah", "Madinah", "All regions across Saudi Arabia"],
        ctaBottomTitle: "Planning to Build a Mosque?",
        ctaBottomDescription: "Contact us for a free consultation and comprehensive quote for your project. We put our experience at the service of building houses of worship.",
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

        {/* Service Areas */}
        <section className="py-16 px-6">
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
