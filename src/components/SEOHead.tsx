// src/components/SEOHead.tsx
// Note: This component uses next/head which works with the older Pages Router.
// For the App Router (which you are using), metadata is typically handled
// by exporting a 'metadata' object or 'generateMetadata' function from your page.tsx files.
// This component might be less useful in the App Router context but is included
// based on the provided improvement suggestions. You might not need to use it directly
// in your current calculator pages if generateMetadata covers everything.

import Head from 'next/head';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string; // Path relative to base URL, e.g., /calculators/percentage-calculator
  ogImage?: string; // Full URL or path relative to public folder
  keywords?: string[];
  schema?: Record<string, any>; // For JSON-LD schema
}

export default function SEOHead({
  title,
  description,
  canonicalPath,
  ogImage = '/og-image.png', // Default OG image in public folder
  keywords = [],
  schema,
}: SEOHeadProps) {
  const siteUrl = 'https://tablesandcalc.online'; // Your base URL
  const fullCanonicalUrl = canonicalPath ? `${siteUrl}${canonicalPath}` : siteUrl;
  // Ensure OG image has the full URL
  const fullOgImageUrl = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  return (
    // This Head component only works correctly in the 'pages' directory structure.
    // In the 'app' directory, metadata should be exported from layout.tsx or page.tsx.
    // Keeping this component definition as requested, but be aware of its context.
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}

      {/* Set the canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph meta tags for social sharing */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={fullOgImageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="TablesAndCalc" /> {/* Added site name */}

      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImageUrl} />
      {/* Optional: <meta name="twitter:site" content="@YourTwitterHandle" /> */}
      {/* Optional: <meta name="twitter:creator" content="@YourTwitterHandle" /> */}

      {/* Schema.org JSON-LD structured data */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </Head>
  );
}