<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">

  <xsl:output method="html" indent="yes" encoding="UTF-8" />

  <xsl:template match="/">
    <html dir="ltr" lang="en">
      <head>
        <title>Sitemap – لمعة العربية للمقاولات | Lamaat Al-Arabiya Contracting</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
            background: #f8f9fa;
            color: #1e1e1e;
            padding: 2rem;
          }
          .header {
            background: linear-gradient(135deg, #137547, #0e5735);
            color: white;
            padding: 2rem 2.5rem;
            border-radius: 12px;
            margin-bottom: 2rem;
          }
          .header h1 {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
          }
          .header p {
            opacity: 0.85;
            font-size: 0.9rem;
            line-height: 1.5;
          }
          .stats {
            display: flex;
            gap: 1.5rem;
            margin-bottom: 1.5rem;
          }
          .stat {
            background: white;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 1rem 1.5rem;
          }
          .stat-value {
            font-size: 1.5rem;
            font-weight: 700;
            color: #137547;
          }
          .stat-label {
            font-size: 0.8rem;
            color: #64748b;
            margin-top: 0.25rem;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 1px 3px rgba(0,0,0,0.08);
          }
          th {
            background: #1e1e1e;
            color: white;
            text-align: left;
            padding: 0.85rem 1.25rem;
            font-size: 0.8rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }
          td {
            padding: 0.75rem 1.25rem;
            border-bottom: 1px solid #f1f5f9;
            font-size: 0.875rem;
          }
          tr:last-child td { border-bottom: none; }
          tr:hover td { background: #f8faf9; }
          a {
            color: #137547;
            text-decoration: none;
            font-weight: 500;
          }
          a:hover { text-decoration: underline; }
          .priority {
            display: inline-block;
            padding: 0.15rem 0.6rem;
            border-radius: 9999px;
            font-size: 0.75rem;
            font-weight: 600;
          }
          .priority-high { background: #dcfce7; color: #166534; }
          .priority-med { background: #fef9c3; color: #854d0e; }
          .priority-low { background: #f1f5f9; color: #475569; }
          .lang-tag {
            display: inline-block;
            padding: 0.1rem 0.5rem;
            border-radius: 4px;
            font-size: 0.7rem;
            font-weight: 600;
            margin-right: 0.25rem;
          }
          .lang-ar { background: #dbeafe; color: #1e40af; }
          .lang-en { background: #fce7f3; color: #9d174d; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>&#x1F5FA; XML Sitemap</h1>
          <p>
            This sitemap is used by search engines like Google to discover and index pages on
            <strong>lamat-elarabia.org</strong>. It is generated automatically.
          </p>
        </div>

        <div class="stats">
          <div class="stat">
            <div class="stat-value">
              <xsl:value-of select="count(sitemap:urlset/sitemap:url)" />
            </div>
            <div class="stat-label">Total URLs</div>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>URL</th>
              <th>Language</th>
              <th>Priority</th>
              <th>Change Freq</th>
              <th>Last Modified</th>
            </tr>
          </thead>
          <tbody>
            <xsl:for-each select="sitemap:urlset/sitemap:url">
              <tr>
                <td><xsl:value-of select="position()" /></td>
                <td>
                  <a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc" /></a>
                </td>
                <td>
                  <xsl:choose>
                    <xsl:when test="contains(sitemap:loc, '/ar')">
                      <span class="lang-tag lang-ar">AR</span>
                    </xsl:when>
                    <xsl:otherwise>
                      <span class="lang-tag lang-en">EN</span>
                    </xsl:otherwise>
                  </xsl:choose>
                </td>
                <td>
                  <xsl:variable name="prio" select="sitemap:priority" />
                  <xsl:choose>
                    <xsl:when test="$prio &gt;= 0.9">
                      <span class="priority priority-high"><xsl:value-of select="$prio" /></span>
                    </xsl:when>
                    <xsl:when test="$prio &gt;= 0.7">
                      <span class="priority priority-med"><xsl:value-of select="$prio" /></span>
                    </xsl:when>
                    <xsl:otherwise>
                      <span class="priority priority-low"><xsl:value-of select="$prio" /></span>
                    </xsl:otherwise>
                  </xsl:choose>
                </td>
                <td><xsl:value-of select="sitemap:changefreq" /></td>
                <td><xsl:value-of select="substring(sitemap:lastmod, 1, 10)" /></td>
              </tr>
            </xsl:for-each>
          </tbody>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
