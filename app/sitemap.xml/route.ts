const BASE = "https://lamat-elarabia.org";

const PAGES = ["", "/news", "/training", "/contact"];

export function GET() {
  const now = new Date().toISOString();

  const urls: string[] = [];

  for (const page of PAGES) {
    const isHome = page === "";
    const changeFreq = isHome ? "weekly" : page === "/news" ? "daily" : "monthly";
    const arPriority = isHome ? "1.0" : page === "/news" ? "0.85" : page === "/contact" ? "0.8" : "0.7";
    const enPriority = isHome ? "0.9" : page === "/news" ? "0.75" : page === "/contact" ? "0.7" : "0.6";

    urls.push(entry(`${BASE}/ar${page}`, now, changeFreq, arPriority, page));
    urls.push(entry(`${BASE}/en${page}`, now, changeFreq, enPriority, page));
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}

function entry(url: string, lastmod: string, changefreq: string, priority: string, page: string) {
  return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hreflang="ar" href="${BASE}/ar${page}" />
    <xhtml:link rel="alternate" hreflang="en" href="${BASE}/en${page}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE}/en${page}" />
  </url>`;
}
