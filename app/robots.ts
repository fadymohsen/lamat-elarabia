import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/adminlogin", "/api"],
    },
    sitemap: "https://lamat-elarabia.org/sitemap.xml",
  };
}
