// src/app/blog/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
// Assuming you will fetch blog posts from Sanity or another source
// If using local data (like resourcesData.ts), import that instead
// import { resourcesList } from '@/lib/data/resourcesData';
import { client } from '@/lib/sanity-client'; // Using Sanity client as per Claude's example

// Define the type for blog post data fetched from Sanity
interface BlogPostTeaser {
  _id: string;
  title: string;
  description: string;
  slug: { current: string };
  publishedAt?: string; // Optional: Add publish date if available in Sanity
}

export const metadata: Metadata = {
  title: 'Blog | TablesAndCalc',
  description: 'Articles, guides, and resources related to calculators, converters, mathematics, and science from TablesAndCalc.',
  alternates: {
    canonical: '/blog', // Set canonical URL for the blog index
  },
};

// Function to fetch blog posts from Sanity
async function getBlogPosts(): Promise<BlogPostTeaser[]> {
  // Simple query to get title, description, slug, and optional date
  const query = `*[_type == "resource"] | order(publishedAt desc, _createdAt desc) {
    _id,
    title,
    description,
    slug,
    publishedAt
  }`;
  try {
      const posts = await client.fetch(query);
      return posts;
  } catch (error) {
      console.error("Failed to fetch blog posts:", error);
      return []; // Return empty array on error
  }
}

export default async function BlogIndexPage() {
  const posts = await getBlogPosts();
  // const posts = resourcesList; // Use this line if using local data

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      {/* Page Header */}
      <header className="text-center mb-10 md:mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">TablesAndCalc Blog</h1>
        <p className="text-lg text-slate-600">
          Insights, guides, and updates on calculators, conversions, and more.
        </p>
      </header>

      {/* Blog Post List */}
      <div className="space-y-8">
        {posts.length > 0 ? (
          posts.map((post) => (
            <article key={post._id} className="p-6 bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              {/* Post Title */}
              <h2 className="text-2xl font-semibold mb-2">
                <Link
                    href={`/blog/${post.slug.current}`} // Adjust if using local data slug structure
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  {post.title || 'Untitled Post'}
                </Link>
              </h2>
              {/* Optional: Publish Date */}
              {post.publishedAt && (
                  <p className="text-sm text-slate-500 mb-3">
                      Published on {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
              )}
              {/* Post Description/Excerpt */}
              <p className="text-slate-600 mb-4 line-clamp-3"> {/* Limits description to 3 lines */}
                {post.description || 'No description available.'}
              </p>
              {/* Read More Link */}
              <Link
                href={`/blog/${post.slug.current}`} // Adjust if using local data slug structure
                className="inline-block text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                Read More →
              </Link>
            </article>
          ))
        ) : (
          // Message when no posts are found
          <div className="text-center py-12">
            <p className="text-xl text-slate-500">No blog posts published yet.</p>
            <p className="text-slate-400 mt-2">Check back soon for articles and guides!</p>
          </div>
        )}
      </div>

       {/* Schema for Blog Listing */}
       <script
         type="application/ld+json"
         dangerouslySetInnerHTML={{
           __html: JSON.stringify({
             "@context": "https://schema.org",
             "@type": "Blog",
             "name": "TablesAndCalc Blog",
             "url": "https://tablesandcalc.online/blog",
             "description": "Articles and guides related to calculators, converters, and science.",
             "publisher": {
               "@type": "Organization",
               "name": "TablesAndCalc",
               // Optional: Add logo URL if available
               // "logo": {
               //   "@type": "ImageObject",
               //   "url": "https://tablesandcalc.online/logo.png"
               // }
             },
             // Optionally list blog posts if desired, but can make the script large
             // "blogPost": posts.map(post => ({
             //   "@type": "BlogPosting",
             //   "headline": post.title,
             //   "url": `https://tablesandcalc.online/blog/${post.slug.current}`
             // }))
           }),
         }}
       />
    </div>
  );
}