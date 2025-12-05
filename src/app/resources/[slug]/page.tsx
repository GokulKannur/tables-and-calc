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
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      {/* Breadcrumb Navigation */}
      <nav className="text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:underline hover:text-foreground transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/resources" className="hover:underline hover:text-foreground transition-colors">Resources</Link>
        <span className="mx-2">/</span>
        <span className="font-medium text-foreground">{resource.title}</span>
      </nav>

      <article>
        {/* Header - Clean and spacious */}
        <header className="mb-8 pb-6 border-b">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-4xl sm:text-5xl shrink-0">{resource.icon || '📄'}</span>
            <div className="min-w-0">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">{resource.title}</h1>
              {resource.category && (
                <span className="inline-block mt-3 px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">
                  {resource.category}
                </span>
              )}
            </div>
          </div>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mt-4">
            {resource.description}
          </p>
        </header>

        {/* Content - Full width, optimized prose styling */}
        <div
          className="
            prose prose-slate dark:prose-invert 
            w-full max-w-none
            
            prose-headings:mt-8 prose-headings:mb-4 prose-headings:scroll-mt-20
            prose-h2:text-xl sm:prose-h2:text-2xl prose-h2:font-bold prose-h2:border-b prose-h2:pb-2
            prose-h3:text-lg sm:prose-h3:text-xl prose-h3:font-semibold
            prose-h4:text-base sm:prose-h4:text-lg prose-h4:font-semibold
            
            prose-p:my-3 sm:prose-p:my-4 prose-p:leading-relaxed prose-p:text-[0.95rem] sm:prose-p:text-base
            
            prose-ul:my-4 prose-ul:pl-5 prose-ul:space-y-1
            prose-ol:my-4 prose-ol:pl-5 prose-ol:space-y-1
            prose-li:my-0.5 prose-li:leading-relaxed
            
            prose-img:rounded-lg prose-img:my-6 prose-img:w-full prose-img:max-w-full sm:prose-img:max-w-2xl prose-img:mx-auto prose-img:shadow-md
            prose-figure:my-6 sm:prose-figure:my-8
            
            [&_table]:w-full [&_table]:my-6 [&_table]:text-sm
            [&_table]:border-collapse [&_table]:rounded-lg [&_table]:overflow-hidden
            [&_th]:p-2 sm:[&_th]:p-3 [&_th]:text-left [&_th]:bg-secondary [&_th]:font-semibold
            [&_td]:p-2 sm:[&_td]:p-3 [&_td]:border-t
            
            [&_.table-wrapper]:w-full [&_.table-wrapper]:overflow-x-auto [&_.table-wrapper]:-mx-4 [&_.table-wrapper]:px-4
            
            [&>figure>img]:max-w-full
            [&_figcaption]:text-center [&_figcaption]:text-sm [&_figcaption]:text-muted-foreground [&_figcaption]:mt-2
            
            [&_.bg-secondary\\/30]:bg-secondary/30 [&_.bg-secondary\\/30]:p-4 [&_.bg-secondary\\/30]:rounded-lg
          "
          dangerouslySetInnerHTML={{ __html: resource.content }}
        />
      </article>

      {/* Navigation */}
      <div className="mt-10 pt-6 border-t flex justify-between items-center">
        <Link
          href="/resources"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium"
        >
          ← Back to Resources
        </Link>
      </div>
    </div>
  );
}