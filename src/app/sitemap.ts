import { MetadataRoute } from 'next';
// Import data from our new, organized files
import { calculatorList, tableList, symbolList } from '@/lib/data/siteLists'; 
import { popularConversions } from '@/lib/data/conversions';
import { resourcesList } from '@/lib/data/resourcesData';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://tablesandcalc.online';

  // Static pages (main sections of your site)
  const staticRoutes = [
    '', // Homepage
    '/calculators',
    '/converters',
    '/tables',
    '/symbols',
    '/resources',
    '/about',
    '/feedback',
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));

  // Dynamic pages for each calculator
  const calculatorRoutes = calculatorList.map((calc) => ({
    url: `${siteUrl}/calculators/${calc.slug}`,
    lastModified: new Date(),
  }));

  // Dynamic pages for each popular converter
  const converterRoutes = popularConversions.map((conv) => ({
    url: `${siteUrl}/converters/${conv.slug}`,
    lastModified: new Date(),
  }));
  
  // Dynamic pages for each resource/article
  const resourceRoutes = resourcesList.map((resource) => ({
    url: `${siteUrl}/resources/${resource.slug}`,
    lastModified: new Date(),
  }));

  // Dynamic pages for tables and symbols
  const tableRoutes = tableList.map((table) => ({
    url: `${siteUrl}/tables/${table.slug}`,
    lastModified: new Date(),
  }));

  const symbolRoutes = symbolList.map((symbol) => ({
    url: `${siteUrl}/symbols/${symbol.slug}`,
    lastModified: new Date(),
  }));

  // Combine all routes into a single sitemap
  return [
    ...staticRoutes,
    ...calculatorRoutes,
    ...converterRoutes,
    ...resourceRoutes,
    ...tableRoutes,
    ...symbolRoutes,
  ];
}