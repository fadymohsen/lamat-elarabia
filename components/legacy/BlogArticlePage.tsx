import React from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { BLOG_POSTS, type BlogSlug } from "@/lib/blog-data";

interface BlogArticlePageProps {
  locale?: string;
  slug: string;
}

export default function BlogArticlePage({ locale = "ar", slug }: BlogArticlePageProps) {
  const isAr = locale === "ar";
  const lang = isAr ? "ar" : "en";
  const post = BLOG_POSTS[slug as BlogSlug];

  if (!post) return null;

  const sections = post.sections[lang];
  const whyUs = post.whyUs[lang];
  const areas = post.areas[lang];
  const cta = post.cta[lang];
  const whyUsTitle = isAr ? "لماذا تختار لمعة العربية؟" : "Why Choose Lamaat Al-Arabiya?";
  const areasTitle = isAr ? "مناطق الخدمة" : "Service Areas";

  return (
    <>
      <SiteHeader locale={locale} />
      <main className="bg-white text-gray-900">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-[#203524] to-[#137547] text-white pt-36 md:pt-40 pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest mb-4 opacity-70 font-[family-name:var(--font-tajawal)]">
              {isAr ? "مدونة لمعة العربية" : "Lamaat Al-Arabiya Blog"}
            </p>
            <h1 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-cairo)] mb-4 leading-tight">
              {post.title[lang]}
            </h1>
            <p className="text-lg md:text-xl font-[family-name:var(--font-cairo)] opacity-90 mb-6">
              {post.subtitle[lang]}
            </p>
            <p className="max-w-3xl mx-auto text-base md:text-lg opacity-80 leading-relaxed font-[family-name:var(--font-tajawal)]">
              {post.description[lang]}
            </p>
          </div>
        </section>

        {/* Article Body */}
        <article className="py-16 px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            {sections.map((section, i) => (
              <section key={i}>
                <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-cairo)] text-[#1a3a22] mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed font-[family-name:var(--font-tajawal)]">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
        </article>

        {/* Why Us */}
        <section className="py-16 px-6 bg-[#203524] text-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold font-[family-name:var(--font-cairo)] text-center mb-10">
              {whyUsTitle}
            </h2>
            <ul className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {whyUs.map((item, i) => (
                <li key={i} className="flex items-start gap-3 bg-white/10 rounded-lg p-4">
                  <span className="text-[#7cdb8a] font-bold text-xl mt-0.5" aria-hidden="true">&#10003;</span>
                  <span className="text-white/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-[family-name:var(--font-cairo)] mb-8 text-[#1a3a22]">
              {areasTitle}
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {areas.map((area, i) => (
                <span key={i} className="bg-white border border-[#137547] text-[#137547] rounded-full px-5 py-2 font-medium">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-gradient-to-br from-[#1a3a22] to-[#137547] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-[family-name:var(--font-cairo)] mb-4">
              {cta.title}
            </h2>
            <p className="text-lg mb-8 opacity-90 font-[family-name:var(--font-tajawal)]">{cta.description}</p>
            <Link
              href={`/${locale}/contact`}
              className="inline-block bg-white text-[#1a3a22] font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors"
            >
              {cta.button}
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
