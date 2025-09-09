import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      {/* HERO SECTION */}
      <section className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Free Online Calculators, Converters & Science Tools
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Explore a modern collection of calculators, unit converters, reference tables, and symbols. Perfect for students, engineers, and professionals.
        </p>
      </section>

      {/* FEATURE GRID */}
      <section>
        <h2 className="text-2xl font-bold text-center mb-6">Featured Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Feature 1 */}
          <Link
            href="/calculators"
            className="block p-6 bg-white border rounded-xl shadow-sm hover:shadow-lg hover:border-blue-500 transition-all"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">🧮 Online Calculators</h3>
              <p className="text-gray-600 mb-2">
                Perform quick math, finance, and scientific calculations.
              </p>
              <span className="text-blue-600 font-medium">Explore Calculators →</span>
            </div>
          </Link>

          {/* Feature 2 */}
          <Link
            href="/converters"
            className="block p-6 bg-white border rounded-xl shadow-sm hover:shadow-lg hover:border-blue-500 transition-all"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">🔄 Unit Converters</h3>
              <p className="text-gray-600 mb-2">
                Convert units for length, mass, temperature, and more.
              </p>
              <span className="text-blue-600 font-medium">Explore Converters →</span>
            </div>
          </Link>

          {/* Feature 3 */}
          <Link
            href="/tables"
            className="block p-6 bg-white border rounded-xl shadow-sm hover:shadow-lg hover:border-blue-500 transition-all"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">📊 Reference Tables</h3>
              <p className="text-gray-600 mb-2">
                Access data for materials, constants, and formulas.
              </p>
              <span className="text-blue-600 font-medium">View Tables →</span>
            </div>
          </Link>

          {/* Feature 4 */}
          <Link
            href="/symbols"
            className="block p-6 bg-white border rounded-xl shadow-sm hover:shadow-lg hover:border-blue-500 transition-all"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">⚡ Engineering Symbols</h3>
              <p className="text-gray-600 mb-2">
                Find electrical, mechanical, and mathematical symbols.
              </p>
              <span className="text-blue-600 font-medium">Explore Symbols →</span>
            </div>
          </Link>
        </div>
      </section>

      {/* EXTERNAL RESOURCES */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-center">Helpful External Resources</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 max-w-xl mx-auto">
          <li>
            <a
              href="https://www.nist.gov/pml/weights-and-measures"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              NIST - Standards for Measurements
            </a>
          </li>
          <li>
            <a
              href="https://www.engineeringtoolbox.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Engineering Toolbox - Reference Data
            </a>
          </li>
          <li>
            <a
              href="https://www.wolframalpha.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Wolfram Alpha - Advanced Calculations
            </a>
          </li>
        </ul>
      </section>

      {/* FAQ SECTION */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          <div>
            <h3 className="text-lg font-semibold">What are online calculators?</h3>
            <p className="text-gray-600">
              Online calculators are web tools that help you quickly perform calculations without installing software. They’re useful for math, science, and financial tasks.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Why use unit converters?</h3>
            <p className="text-gray-600">
              Unit converters make it easy to switch between measurement systems like metric and imperial, saving time and reducing errors.
            </p>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What are online calculators?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Online calculators are web tools that help you quickly perform calculations without installing software."
                }
              },
              {
                "@type": "Question",
                "name": "Why use unit converters?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Unit converters make it easy to switch between measurement systems like metric and imperial, saving time and reducing errors."
                }
              }
            ]
          })
        }}
      />
    </main>
  );
}