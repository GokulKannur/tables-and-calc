import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*', // Allow all search engine crawlers
      allow: '/',     // Allow them to crawl the entire site
    },
    // This tells crawlers where to find the map of your site
    sitemap: 'https://tablesandcalc.online/sitemap.xml',
  };
}