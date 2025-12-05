import { MetadataRoute } from 'next';
// Import data from our new, organized files
import { calculatorList, tableList, symbolList } from '@/lib/data/siteLists';
import { popularConversions } from '@/lib/data/conversions';
import { resourcesList } from '@/lib/data/resourcesData';

type SitemapEntry = {
  url: string;
  lastModified: Date;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://tablesandcalc.online';

  // Homepage - highest priority
  const homePage: SitemapEntry = {
    url: siteUrl,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1.0,
  };

  // Main section pages - high priority
  const mainSections: SitemapEntry[] = [
    '/calculators',
    '/converters',
    '/tables',
    '/symbols',
    '/resources',
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // Secondary pages - medium priority
  const secondaryPages: SitemapEntry[] = [
    '/about',
    '/feedback',
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  // Dynamic pages for each calculator - high priority (core content)
  const calculatorRoutes: SitemapEntry[] = calculatorList.map((calc) => ({
    url: `${siteUrl}/calculators/${calc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Dynamic pages for each popular converter - high priority
  const converterRoutes: SitemapEntry[] = popularConversions.map((conv) => ({
    url: `${siteUrl}/converters/${conv.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Dynamic pages for each resource/article - medium-high priority
  const resourceRoutes: SitemapEntry[] = resourcesList.map((resource) => ({
    url: `${siteUrl}/resources/${resource.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Dynamic pages for tables - high priority (reference content)
  const tableRoutes: SitemapEntry[] = tableList.map((table) => ({
    url: `${siteUrl}/tables/${table.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Dynamic pages for symbols - medium priority
  const symbolRoutes: SitemapEntry[] = symbolList.map((symbol) => ({
    url: `${siteUrl}/symbols/${symbol.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  // Combine all routes into a single sitemap
  return [
    homePage,
    ...mainSections,
    ...secondaryPages,
    ...calculatorRoutes,
    ...converterRoutes,
    ...resourceRoutes,
    ...tableRoutes,
    ...symbolRoutes,
  ];
}