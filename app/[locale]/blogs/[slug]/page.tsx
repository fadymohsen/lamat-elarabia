import React from "react";
import { notFound } from "next/navigation";
import BlogArticlePage from "@/components/legacy/BlogArticlePage";
import JsonLd from "@/components/JsonLd";
import {
  getBreadcrumbSchema,
  getSandblastingServiceSchema,
  getVillaServiceSchema,
  getMosqueServiceSchema,
  getCommercialFinishingServiceSchema,
} from "@/lib/structured-data";
import { BLOG_POSTS, BLOG_SLUGS, type BlogSlug } from "@/lib/blog-data";
import type { Metadata } from "next";

const BASE = "https://lamat-elarabia.org";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return BLOG_SLUGS.flatMap((slug) => [
    { locale: "ar", slug },
    { locale: "en", slug },
  ]);
}

const SERVICE_SCHEMAS: Partial<Record<BlogSlug, (locale: string) => Record<string, unknown>>> = {
  sandblasting: getSandblastingServiceSchema,
  "villa-construction": getVillaServiceSchema,
  "mosque-construction": getMosqueServiceSchema,
  "commercial-finishing": getCommercialFinishingServiceSchema,
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = BLOG_POSTS[slug as BlogSlug];
  if (!post) return {};

  const isAr = locale === "ar";
  const lang = isAr ? "ar" : "en";

  return {
    title: post.title[lang],
    description: post.description[lang],
    keywords: post.keywords[lang],
    openGraph: {
      locale: isAr ? "ar_SA" : "en_US",
      type: "article",
      title: post.title[lang],
      description: post.description[lang],
      url: `${BASE}/${locale}/blogs/${slug}`,
      siteName: isAr
        ? "لمعة العربية للمقاولات | Lamaat Al-Arabiya Contracting"
        : "Lamaat Al-Arabiya Contracting | لمعة العربية للمقاولات",
      images: [
        {
          url: `${BASE}/images/figma/logo-inner.png`,
          width: 1200,
          height: 630,
          alt: post.title[lang],
        },
      ],
    },
    alternates: {
      canonical: `${BASE}/${locale}/blogs/${slug}`,
      languages: {
        ar: `${BASE}/ar/blogs/${slug}`,
        en: `${BASE}/en/blogs/${slug}`,
        "x-default": `${BASE}/en/blogs/${slug}`,
      },
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale, slug } = await params;
  if (locale !== "ar" && locale !== "en") notFound();

  const post = BLOG_POSTS[slug as BlogSlug];
  if (!post) notFound();

  const isAr = locale === "ar";
  const breadcrumbs = getBreadcrumbSchema(locale, [
    { name: isAr ? "الرئيسية" : "Home", path: `/${locale}` },
    { name: isAr ? "المدونة" : "Blog", path: `/${locale}/blogs` },
    { name: post.title[isAr ? "ar" : "en"], path: `/${locale}/blogs/${slug}` },
  ]);

  const getServiceSchema = SERVICE_SCHEMAS[slug as BlogSlug];
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title[isAr ? "ar" : "en"],
    description: post.description[isAr ? "ar" : "en"],
    url: `${BASE}/${locale}/blogs/${slug}`,
    inLanguage: locale,
    publisher: {
      "@type": "Organization",
      "@id": `${BASE}/#organization`,
      name: isAr ? "لمعة العربية للمقاولات" : "Lamaat Al-Arabiya Contracting",
    },
    mainEntityOfPage: `${BASE}/${locale}/blogs/${slug}`,
  };

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={articleSchema} />
      {getServiceSchema && <JsonLd data={getServiceSchema(locale)} />}
      <BlogArticlePage locale={locale} slug={slug} />
    </>
  );
}
