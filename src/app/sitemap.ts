// src/app/sitemap.ts

import { MetadataRoute } from 'next';
import { popularConversions, calculatorList, tableList, symbolList } from '@/lib/unitData';

export default function sitemap(): MetadataRoute.Sitemap {
  // IMPORTANT: Replace this with your actual domain name when you deploy
  const baseUrl = 'https://www.yourwebsite.com'; 

  const converterUrls = popularConversions.map(item => ({
    url: `${baseUrl}/converters/${item.slug}`,
    lastModified: new Date(),
  }));

  const calculatorUrls = calculatorList.map(item => ({
    url: `${baseUrl}/calculators/${item.slug}`,
    lastModified: new Date(),
  }));

  const tableUrls = tableList.map(item => ({
    url: `${baseUrl}/tables/${item.slug}`,
    lastModified: new Date(),
  }));
  
  const symbolUrls = symbolList.map(item => ({
    url: `${baseUrl}/symbols/${item.slug}`,
    lastModified: new Date(),
  }));

  // Add the main static pages
  const staticUrls = [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/converters`, lastModified: new Date() },
    { url: `${baseUrl}/calculators`, lastModified: new Date() },
    { url: `${baseUrl}/tables`, lastModified: new Date() },
    { url: `${baseUrl}/symbols`, lastModified: new Date() },
    { url: `${baseUrl}/express-converter`, lastModified: new Date() },
  ];

  return [
    ...staticUrls,
    ...converterUrls,
    ...calculatorUrls,
    ...tableUrls,
    ...symbolUrls,
  ];
}