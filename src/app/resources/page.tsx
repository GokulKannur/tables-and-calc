// src/app/resources/page.tsx
import Link from 'next/link';
import { client } from '@/lib/sanity-client';

// Define the type for our fetched data
interface Resource {
  _id: string;
  title: string;
  description: string;
  slug: { current: string };
}

// This function fetches the list of resources from Sanity
async function getResources() {
  const query = `*[_type == "resource"]{_id, title, description, slug}`;
  const resources: Resource[] = await client.fetch(query);
  return resources;
}

export default async function ResourcesPage() {
  const resources = await getResources();
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Resources & Articles</h1>
      <div className="space-y-6">
        {resources.length > 0 ? (
          resources.map((resource) => (
            <Link href={`/resources/${resource.slug.current}`} key={resource._id} className="block p-6 bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-semibold text-blue-600">{resource.title}</h2>
                <p className="text-slate-600 mt-2">{resource.description}</p>
            </Link>
          ))
        ) : (
          <p className="text-center text-slate-500">No resources have been published yet.</p>
        )}
      </div>
    </div>
  );
}