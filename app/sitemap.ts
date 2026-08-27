import type { MetadataRoute } from "next";
import { BLOG_SLUGS } from "@/lib/blog-data";

const BASE = "https://lamat-elarabia.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
    { path: "",          priority: 1.0, changeFrequency: "monthly" },
    { path: "/blogs",    priority: 0.9, changeFrequency: "weekly"  },
    { path: "/training", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact",  priority: 0.7, changeFrequency: "monthly" },
  ];

  const staticPages: MetadataRoute.Sitemap = staticRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE}/ar${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
    alternates: {
      languages: {
        ar: `${BASE}/ar${path}`,
        en: `${BASE}/en${path}`,
      },
    },
  }));

  const blogPages: MetadataRoute.Sitemap = BLOG_SLUGS.map((slug) => ({
    url: `${BASE}/ar/blogs/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
    alternates: {
      languages: {
        ar: `${BASE}/ar/blogs/${slug}`,
        en: `${BASE}/en/blogs/${slug}`,
      },
    },
  }));

  return [...staticPages, ...blogPages];
}
