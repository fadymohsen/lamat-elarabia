import type { MetadataRoute } from "next";

const BASE = "https://lamat-elarabia.org";

const PAGES = ["", "/news", "/training", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const page of PAGES) {
    const isHome = page === "";
    const changeFreq = isHome ? "weekly" : page === "/news" ? "daily" : "monthly";

    const arEntry: MetadataRoute.Sitemap[number] = {
      url: `${BASE}/ar${page}`,
      lastModified: now,
      changeFrequency: changeFreq as any,
      priority: isHome ? 1.0 : page === "/news" ? 0.85 : page === "/contact" ? 0.8 : 0.7,
      alternates: {
        languages: {
          ar: `${BASE}/ar${page}`,
          en: `${BASE}/en${page}`,
          "x-default": `${BASE}/en${page}`,
        },
      },
    };

    const enEntry: MetadataRoute.Sitemap[number] = {
      url: `${BASE}/en${page}`,
      lastModified: now,
      changeFrequency: changeFreq as any,
      priority: isHome ? 0.9 : page === "/news" ? 0.75 : page === "/contact" ? 0.7 : 0.6,
      alternates: {
        languages: {
          ar: `${BASE}/ar${page}`,
          en: `${BASE}/en${page}`,
          "x-default": `${BASE}/en${page}`,
        },
      },
    };

    entries.push(arEntry);
    entries.push(enEntry);
  }

  return entries;
}
