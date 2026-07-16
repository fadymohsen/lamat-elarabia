import type { MetadataRoute } from "next";

const BASE = "https://lamat-elarabia.org";

const PAGES = ["", "/news", "/training", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [];

  for (const page of PAGES) {
    const isHome = page === "";
    entries.push({
      url: `${BASE}/ar${page}`,
      lastModified: now,
      changeFrequency: isHome ? "weekly" : page === "/news" ? "weekly" : "monthly",
      priority: isHome ? 1.0 : page === "/contact" ? 0.8 : 0.7,
      alternates: {
        languages: {
          ar: `${BASE}/ar${page}`,
          en: `${BASE}/en${page}`,
          "x-default": `${BASE}/en${page}`,
        },
      },
    });
    entries.push({
      url: `${BASE}/en${page}`,
      lastModified: now,
      changeFrequency: isHome ? "weekly" : page === "/news" ? "weekly" : "monthly",
      priority: isHome ? 0.9 : page === "/contact" ? 0.7 : 0.6,
      alternates: {
        languages: {
          ar: `${BASE}/ar${page}`,
          en: `${BASE}/en${page}`,
          "x-default": `${BASE}/en${page}`,
        },
      },
    });
  }

  return entries;
}
