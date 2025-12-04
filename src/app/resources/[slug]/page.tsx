// src/app/resources/[slug]/page.tsx
import Link from 'next/link';
import type { Metadata } from 'next';
import { resourcesList } from '@/lib/data/resourcesData';
import { notFound } from 'next/navigation';

// Fetch all resource slugs for Next.js to generate the static pages
export async function generateStaticParams() {
  return resourcesList.map((resource) => ({
    slug: resource.slug,
  }));
}

// Generate metadata for each page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const resource = resourcesList.find(r => r.slug === params.slug);
  if (!resource) return { title: "Resource Not Found" };

  // Generate keywords from title and category
  const keywords = [
    resource.title.toLowerCase(),
    resource.category?.toLowerCase() || '',
    'tutorial',
    'guide',
    'tablesandcalc',
    ...resource.title.toLowerCase().split(' '),
  ].filter(Boolean);

  return {
    title: `${resource.title} | TablesAndCalc`,
    description: resource.description,
    keywords,
    openGraph: {
      title: resource.title,
      description: resource.description,
      type: 'article',
    },
  };
}

export default function ResourceDetailPage({ params }: { params: { slug: string } }) {
  const resource = resourcesList.find(r => r.slug === params.slug);

  if (!resource) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:underline">Home</Link> /
        <Link href="/resources" className="hover:underline"> Resources</Link> /
        <span className="font-medium text-foreground">{resource.title}</span>
      </nav>

      <article className="bg-card p-8 border rounded-lg shadow-sm">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-4xl">{resource.icon || '📄'}</span>
          <div>
            <h1 className="text-3xl font-bold">{resource.title}</h1>
            {resource.category && (
              <span className="inline-block mt-2 px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">
                {resource.category}
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-lg text-muted-foreground mb-8 pb-6 border-b">
          {resource.description}
        </p>

        {/* Content */}
        <div
          className="prose prose-slate dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: resource.content }}
        />
      </article>

      {/* Navigation */}
      <div className="mt-8 flex justify-between">
        <Link
          href="/resources"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to Resources
        </Link>
      </div>
    </div>
  );
}