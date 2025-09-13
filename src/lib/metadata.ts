import type { Metadata } from 'next';

interface MetadataOptions {
  title: string;
  description: string;
  url: string;
  image?: string;
  canonical?: string;
}

export function generatePageMetadata({
  title,
  description,
  url,
  image = 'https://tablesandcalc.online/og-image.jpg',
  canonical,
}: MetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: canonical || url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'TablesAndCalc',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}
