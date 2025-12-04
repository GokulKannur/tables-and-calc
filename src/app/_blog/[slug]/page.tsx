// src/app/blog/[slug]/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react'; // <-- Ensure React is imported for React.ReactNode
import { PortableText, PortableTextReactComponents } from '@portabletext/react'; // <-- Import components type
import type { PortableTextBlock } from '@portabletext/types'; // <-- Import block type
import { client } from '@/lib/sanity-client'; // Using Sanity

// Define the shape of the full blog post data from Sanity
interface BlogPost {
  _id: string;
  title: string;
  description: string;
  slug: { current: string };
  content: any[]; // Sanity Portable Text content
  authorName?: string; // <-- Corrected: Added optional authorName field
  publishedAt?: string; // Optional publish date
  mainImage?: { asset: { url: string } };
  tags?: string[];
  category?: string; // Example category field
}

interface BlogSlug {
  slug: { current: string };
}

// Fetch a single blog post based on its slug from Sanity
async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const query = `*[_type == "resource" && slug.current == $slug][0]{
    _id,
    title,
    description,
    slug,
    content,
    publishedAt,
    "authorName": author->name, // Example of fetching author name if using references
    mainImage { asset->{ url } } // Example of fetching main image URL
  }`;
  try {
    const post = await client.fetch(query, { slug });
    return post;
  } catch (error) {
    console.error(`Failed to fetch blog post for slug "${slug}":`, error);
    return null;
  }
}

// Fetch all blog post slugs for Next.js to generate static pages
export async function generateStaticParams() {
  const query = `*[_type == "resource" && defined(slug.current)]{ slug }`;
  try {
    const slugs: BlogSlug[] = await client.fetch(query);
    return slugs.map((item) => ({
      slug: item.slug.current,
    }));
  } catch (error) {
    console.error("Failed to fetch blog post slugs for static params:", error);
    return [];
  }
}

// Generate metadata for each blog post page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPost(params.slug);
  if (!post) {
    return { title: 'Post Not Found | TablesAndCalc Blog' };
  }

  const title = `${post.title || 'Untitled Post'} | TablesAndCalc Blog`;
  const description = post.description || 'Read this article on TablesAndCalc.';
  const imageUrl = post.mainImage?.asset?.url || 'https://tablesandcalc.online/og-image.png';

  return {
    title,
    description,
    authors: post.authorName ? [{ name: post.authorName }] : [{ name: 'TablesAndCalc Team' }],
    alternates: {
      canonical: `/blog/${post.slug.current}`,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: post.authorName ? [post.authorName] : ['TablesAndCalc Team'],
      url: `https://tablesandcalc.online/blog/${post.slug.current}`,
      images: [{ url: imageUrl, alt: post.title || 'Blog Post Image' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}

// The main component for displaying a blog post
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <p className="text-slate-600">Sorry, we couldn&apos;t find the blog post you were looking for.</p>
        <Link href="/blog" className="mt-6 inline-block text-blue-600 hover:underline">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  // Configuration for PortableText using correct types
  const ptComponents: Partial<PortableTextReactComponents> = { // <-- Use Partial<PortableTextReactComponents>
    types: {
      // Custom components for block types like image
    },
    marks: {
      // Correctly type the link component props
      link: ({ children, value }: { children?: React.ReactNode, value?: { href?: string } }) => {
        const href = value?.href || '';
        const isInternal = href.startsWith('/') || href.startsWith('#');
        return (
          <a href={href} target={isInternal ? '_self' : '_blank'} rel={isInternal ? '' : 'noopener noreferrer'}
            className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-300 rounded">
            {children}
          </a>
        );
      },
    },
    block: {
      // These implicitly receive PortableTextComponentProps, which includes children
      h2: ({ children }) => <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>,
      h3: ({ children }) => <h3 className="text-2xl font-semibold mt-6 mb-3">{children}</h3>,
      blockquote: ({ children }) => <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4">{children}</blockquote>,
      normal: ({ children }) => <p className="my-4 leading-relaxed">{children}</p>,
    },
    list: {
      // These implicitly receive PortableTextComponentProps
      bullet: ({ children }) => <ul className="list-disc list-outside space-y-2 my-4 ml-6">{children}</ul>,
      number: ({ children }) => <ol className="list-decimal list-outside space-y-2 my-4 ml-6">{children}</ol>,
    },
    listItem: ({ children }) => <li className="mb-2">{children}</li>, // This implicitly receives PortableTextComponentProps
  };

  return (
    <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline hover:text-blue-600">Home</Link> /
        <Link href="/blog" className="hover:underline hover:text-blue-600"> Blog</Link> /
        <span className="text-gray-700 truncate ml-1">{post.title || 'Post'}</span>
      </nav>

      {/* Optional: Hero Image */}
      {post.mainImage?.asset?.url && (
        <div className="relative w-full h-64 md:h-80 mb-8 rounded-lg overflow-hidden shadow-md">
          <Image
            src={post.mainImage.asset.url} alt={post.title || 'Blog post image'} fill
            className="object-cover" priority sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
      )}

      {/* Post Header */}
      <header className="mb-8 border-b pb-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-gray-900">
          {post.title || 'Untitled Post'}
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          {post.authorName && <span>By {post.authorName}</span>}
          {post.authorName && post.publishedAt && <span>•</span>}
          {post.publishedAt && (
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
          )}
        </div>
      </header>

      {/* Post Content */}
      {post.content ? (
        <div className="prose prose-lg max-w-none prose-slate prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-img:rounded-md prose-img:shadow-sm">
          <PortableText value={post.content} components={ptComponents} />
        </div>
      ) : (
        <p className="text-red-500">Blog post content is missing.</p>
      )}

      {/* Back to Blog Link */}
      <div className="mt-12 pt-8 border-t border-gray-200 text-center">
        <Link href="/blog" className="text-blue-600 hover:underline">
          ← Back to All Posts
        </Link>
      </div>

      {/* Schema.org Article Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title || 'Untitled Post',
            "description": post.description || 'An article from TablesAndCalc.',
            "image": post.mainImage?.asset?.url || 'https://tablesandcalc.online/og-image.png',
            "datePublished": post.publishedAt,
            "author": { "@type": "Person", "name": post.authorName || "TablesAndCalc Team" },
            "publisher": {
              "@type": "Organization", "name": "TablesAndCalc",
              "logo": { "@type": "ImageObject", "url": "https://tablesandcalc.online/favicon-96x96.png" },
            },
            "mainEntityOfPage": { "@type": "WebPage", "@id": `https://tablesandcalc.online/blog/${post.slug.current}` }
          }),
        }}
      />
    </article>
  );
}