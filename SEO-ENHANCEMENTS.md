# SEO Enhancements for Lamat Al-Arabiya

## Issues Fixed

### ✅ Completed

1. **Robots Metadata** (app/layout.tsx)
   - Added explicit indexing rules to `robots` metadata
   - Enabled full Google crawling (index, follow)
   - Max video, image, snippet preview set to unlimited

2. **OpenGraph Types**
   - Added `type: "website"` to all page OG metadata
   - Added `alt` text to OG images for accessibility
   - Home, News, Training, Contact pages now have proper types

3. **Sitemap Improvements** (app/sitemap.ts)
   - Increased news changeFrequency from "weekly" to "daily" (fresh content signal)
   - Adjusted priorities:
     - Home AR: 1.0, EN: 0.9
     - News AR: 0.85, EN: 0.75
     - Training AR: 0.7, EN: 0.6
     - Contact AR: 0.8, EN: 0.7

4. **Metadata Completeness**
   - All pages now have complete OG metadata
   - Image alt text added for OG images
   - Canonical tags present on all pages

### ⚠️ Needs Action

**Issue: 9 pages excluded by noindex**
- Root cause: Likely server-side issue or cached GSC data
- **Fix**: 
  1. Verify Google Search Console verification code is active
  2. Re-submit sitemap to GSC
  3. Request indexing for affected pages
  4. Monitor crawl stats in GSC

**Issue: 2 pages with 5xx errors**
- Likely database connection timeout during crawl
- **Checks**:
  - Verify database connection pooling is configured
  - Check if pages with ContactPage component have timeout issues
  - Monitor server logs for 5xx errors during crawl

**Issue: 8 pages crawled but not indexed / 7 pages discovered but not indexed**
- **Solutions**:
  1. Ensure content is unique and high-quality
  2. Increase on-page word count
  3. Add more structured data (JobPosting for careers, Article for news)
  4. Improve internal linking

## Next Steps

### 1. Google Search Console Actions
```
1. Go to lamat-elarabia.org in GSC
2. Submit updated sitemap: https://lamat-elarabia.org/sitemap.xml
3. Request indexing for:
   - /en/news
   - /ar/news
   - /en/training
   - /ar/training
   - /en/contact
   - /ar/contact
4. Monitor "Coverage" for changes
```

### 2. Structured Data Enhancements (Recommended)

**For News Page** - Add ArticleSchema to card items:
```typescript
{
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": "معايير الجودة في قطاع المقاولات",
  "description": "...",
  "datePublished": new Date().toISOString(),
  "image": "...",
  "publisher": {
    "@type": "Organization",
    "name": "Lamaat Al-Arabiya Contracting"
  }
}
```

**For Training Page** - Add JobPosting schema for open positions:
```typescript
{
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "title": "Civil Engineer",
  "description": "...",
  "jobLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "SA"
    }
  },
  "hiringOrganization": {
    "@type": "Organization",
    "name": "Lamaat Al-Arabiya Contracting"
  }
}
```

### 3. Database Performance Check
- Ensure connection pooling for ContactPage queries
- Add query timeout handling
- Return 200 OK even if settings fail to load (fallback to defaults)

### 4. Monitor These Metrics
- Crawl stats in GSC (errors, not indexed reasons)
- Position in SERP for target keywords
- Click-through rate (CTR) from search results
- Average position tracking

## Verification Code Setup

Uncomment and add your Google verification code in app/layout.tsx:
```typescript
verification: {
  google: "YOUR_GOOGLE_SITE_VERIFICATION_CODE_HERE",
},
```

Get code from: GSC → Settings → Ownership verified → Copy code

## Deployment Checklist

- [ ] Update GOOGLE_SITE_VERIFICATION_CODE in app/layout.tsx
- [ ] Test all pages load without 5xx errors
- [ ] Verify sitemap.xml generates without errors
- [ ] Deploy to production
- [ ] Submit sitemap in GSC
- [ ] Request indexing for all public pages
- [ ] Monitor GSC for 48-72 hours for improvements
