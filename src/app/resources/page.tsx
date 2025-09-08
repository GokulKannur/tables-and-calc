// src/app/resources/page.tsx
import Link from 'next/link';
import { resourcesList } from '@/lib/data/resourcesData';

export default function ResourcesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Resources & Articles</h1>
      <div className="space-y-6">
        {resourcesList.map((resource) => (
          <Link href={`/resources/${resource.slug}`} key={resource.slug} className="block p-6 bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold text-blue-600">{resource.title}</h2>
              <p className="text-slate-600 mt-2">{resource.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}