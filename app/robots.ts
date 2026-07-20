import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/ar", "/ar/*", "/en", "/en/*"],
        disallow: ["/admin", "/admin/*", "/adminlogin", "/api", "/api/*", "/_next", "/_next/*"],
      },
    ],
    sitemap: "https://lamat-elarabia.org/sitemap.xml",
  };
}
