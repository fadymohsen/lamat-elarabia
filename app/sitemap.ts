import type { MetadataRoute } from "next";

const BASE = "https://lamat-elarabia.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: `${BASE}/ar`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/ar/news`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/ar/training`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/ar/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/en`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/en/news`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/en/training`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/en/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
