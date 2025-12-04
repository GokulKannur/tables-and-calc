// src/app/resources/page.tsx
import Link from 'next/link';
import { resourcesList, getResourcesByCategory } from '@/lib/data/resourcesData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Learning Resources | TablesAndCalc',
  description: 'Free educational resources, guides, and tutorials on math, electronics, finance, and more.',
};

export default function ResourcesPage() {
  const groupedResources = getResourcesByCategory();
  const categories = Object.keys(groupedResources);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Learning Resources</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Free guides and tutorials to help you understand key concepts in math, science, and engineering.
        </p>
      </div>

      {/* Quick Links */}
      <div className="mb-12 flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <a
            key={category}
            href={`#${category.toLowerCase()}`}
            className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-secondary/80 transition-colors"
          >
            {category}
          </a>
        ))}
      </div>

      {/* Categorized Resources */}
      <div className="space-y-12">
        {categories.map((category) => (
          <section key={category} id={category.toLowerCase()}>
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {groupedResources[category].map((resource) => (
                <Link
                  href={`/resources/${resource.slug}`}
                  key={resource.slug}
                  className="group block p-6 bg-card border rounded-xl shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{resource.icon || '📄'}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                        {resource.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Empty State / Coming Soon */}
      <div className="mt-16 text-center p-8 bg-secondary/30 rounded-xl border border-dashed">
        <p className="text-muted-foreground">
          More resources coming soon! Have a topic you&apos;d like us to cover?{' '}
          <Link href="/feedback" className="text-primary hover:underline">Let us know</Link>.
        </p>
      </div>
    </div>
  );
}