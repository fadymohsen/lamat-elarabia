import type { MetadataRoute } from "next";

const BASE = "https://lamat-elarabia.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/%D8%A7%D9%84%D8%A3%D8%AE%D8%A8%D8%A7%D8%B1-%D9%88-%D8%A7%D9%84%D9%85%D9%82%D8%A7%D9%84%D8%A7%D8%AA`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/%D8%A7%D9%84%D8%AA%D9%88%D8%B8%D9%8A%D9%81-%D9%88-%D8%A7%D9%84%D8%AA%D8%AF%D8%B1%D9%8A%D8%A8`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/%D8%AA%D9%88%D8%A7%D8%B5%D9%84-%D9%85%D8%B9%D9%86%D8%A7`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/en`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/en/news`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/en/training`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/en/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
