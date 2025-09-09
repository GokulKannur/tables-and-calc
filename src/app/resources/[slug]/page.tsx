import Link from 'next/link';
import type { Metadata } from 'next';
import { client } from '@/lib/sanity-client';
import { PortableText } from '@portabletext/react';

// Define the shape of the data we'll get from Sanity
interface Resource {
  title: string;
  description: string;
  content: any[]; // This is the rich text field from Sanity
}

interface ResourceSlug {
  slug: {
    current: string;
  };
}

// Fetch a single resource based on its slug
async function getResource(slug: string): Promise<Resource> {
  const query = `*[_type == "resource" && slug.current == $slug][0]{
    title,
    description,
    content
  }`;
  const resource = await client.fetch(query, { slug });
  return resource;
}

// Fetch all resource slugs for Next.js to generate the static pages
export async function generateStaticParams() {
  const query = `*[_type == "resource"]{ slug }`;
  const slugs: ResourceSlug[] = await client.fetch(query);
  return slugs.map((item) => ({
    slug: item.slug.current,
  }));
}

// Generate metadata for each page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const resource = await getResource(params.slug);
  if (!resource) return { title: "Resource Not Found" };
  return {
    title: `${resource.title} | TablesAndCalc`,
    description: resource.description,
  };
}


export default async function ResourceDetailPage({ params }: { params: { slug: string } }) {
  const resource = await getResource(params.slug);

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
        {/* The PortableText component safely renders your rich text content */}
        <div className="prose max-w-none">
          <PortableText value={resource.content} />
        </div>
      </div>
    </div>
  );
}