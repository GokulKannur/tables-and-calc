// src/app/resources/[slug]/page.tsx
import { resourcesList } from '@/lib/data/resourcesData';
import Link from 'next/link';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return resourcesList.map((resource) => ({
    slug: resource.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const resource = resourcesList.find(r => r.slug === params.slug);
  if (!resource) return { title: "Resource Not Found" };
  return {
    title: `${resource.title} | TablesAndCalc`,
    description: resource.description,
  };
}

export default function ResourceDetailPage({ params }: { params: { slug: string } }) {
  const resource = resourcesList.find(r => r.slug === params.slug);

  if (!resource) {
    return <div>Resource not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> / 
        <Link href="/resources" className="hover:underline"> Resources</Link> / 
        <span className="font-medium text-slate-700">{resource.title}</span>
      </nav>

      <div className="bg-white p-8 border rounded-lg shadow-sm">
        <h1 className="text-4xl font-bold mb-6">{resource.title}</h1>
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: resource.content }}
        />
      </div>
    </div>
  );
}
