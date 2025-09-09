// src/app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* ✅ Hero Section */}
      <header className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-3 leading-tight">
          Free Online Calculators, Converters & Science Tools
        </h1>
        <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
          Explore a collection of free calculators, unit converters, reference tables, and symbols. Perfect for students, engineers, and professionals.
        </p>
      </header>

      {/* ✅ Internal Links Grid (Mobile-first design) */}
      <section>
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">
          Our Featured Tools
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {/* ✅ Card 1 */}
          <div className="p-5 bg-white border rounded-lg shadow hover:shadow-lg hover:border-blue-500 transition">
            <h3 className="text-lg font-semibold mb-1">🧮 Online Calculators</h3>
            <p className="text-sm text-slate-600 mb-2">
              Perform quick math, finance, and scientific calculations.
            </p>
            <Link href="/calculators" className="text-blue-600 underline text-sm">
              Explore Calculators →
            </Link>
          </div>

          {/* ✅ Card 2 */}
          <div className="p-5 bg-white border rounded-lg shadow hover:shadow-lg hover:border-blue-500 transition">
            <h3 className="text-lg font-semibold mb-1">🔄 Unit Converters</h3>
            <p className="text-sm text-slate-600 mb-2">
              Convert length, mass, temperature, and more instantly.
            </p>
            <Link href="/converters" className="text-blue-600 underline text-sm">
              Explore Converters →
            </Link>
          </div>

          {/* ✅ Card 3 */}
          <div className="p-5 bg-white border rounded-lg shadow hover:shadow-lg hover:border-blue-500 transition">
            <h3 className="text-lg font-semibold mb-1">📊 Reference Tables</h3>
            <p className="text-sm text-slate-600 mb-2">
              Access data on materials, constants, and formulas.
            </p>
            <Link href="/tables" className="text-blue-600 underline text-sm">
              View Tables →
            </Link>
          </div>

          {/* ✅ Card 4 */}
          <div className="p-5 bg-white border rounded-lg shadow hover:shadow-lg hover:border-blue-500 transition">
            <h3 className="text-lg font-semibold mb-1">⚡ Engineering Symbols</h3>
            <p className="text-sm text-slate-600 mb-2">
              Find electrical, mechanical, and mathematical symbols.
            </p>
            <Link href="/symbols" className="text-blue-600 underline text-sm">
              Browse Symbols →
            </Link>
          </div>
        </div>
      </section>

      {/* ✅ External Resources Section */}
      <section className="mt-10">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">
          Learn More from Authoritative Sources
        </h2>
        <ul className="list-none space-y-3 text-center">
          <li>
            <a
              href="https://www.nist.gov/pml/weights-and-measures"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline text-sm md:text-base"
            >
              NIST – Official Standards for Units & Conversions
            </a>
          </li>
          <li>
            <a
              href="https://www.engineeringtoolbox.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline text-sm md:text-base"
            >
              Engineering Toolbox – Engineering Tables and Data
            </a>
          </li>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/List_of_mathematical_symbols"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline text-sm md:text-base"
            >
              Wikipedia – Mathematical Symbols
            </a>
          </li>
          <li>
            <a
              href="https://www.wolframalpha.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline text-sm md:text-base"
            >
              Wolfram Alpha – Computational Knowledge Engine
            </a>
          </li>
        </ul>
      </section>

      {/* ✅ FAQ Section */}
      <section className="mt-10">
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-base md:text-lg font-semibold">
              What are online calculators used for?
            </h3>
            <p className="text-slate-600 text-sm md:text-base">
              Online calculators help users perform quick calculations for math, finance, and science without installing software.
            </p>
          </div>
          <div>
            <h3 className="text-base md:text-lg font-semibold">
              Why should I use unit converters?
            </h3>
            <p className="text-slate-600 text-sm md:text-base">
              Unit converters save time and eliminate errors when converting between metric, imperial, and other measurement systems.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Call to Action */}
      <div className="mt-10 text-center">
        <Link
          href="/calculators"
          className="bg-blue-600 text-white px-5 py-3 rounded-lg text-sm md:text-base font-semibold hover:bg-blue-700 transition"
        >
          Start Using Our Tools →
        </Link>
      </div>

      {/* ✅ Structured Data for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What are online calculators used for?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Online calculators help users perform quick calculations for math, finance, and science without installing software.',
                },
              },
              {
                '@type': 'Question',
                name: 'Why should I use unit converters?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Unit converters save time and eliminate errors when converting between metric, imperial, and other measurement systems.',
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
