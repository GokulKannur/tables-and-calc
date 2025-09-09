// src/app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center py-10">
        {/* ✅ Keyword-rich H1 for SEO */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Online Calculators, Converters & Science Tools
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          A collection of free, simple, and modern tools for students and
          professionals.
        </p>
      </div>

      {/* ✅ Two-column grid with tool links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <Link
          href="/calculators"
          className="group block p-6 bg-white border rounded-lg shadow-sm hover:shadow-lg hover:border-blue-500 transition-all"
        >
          <h3 className="text-xl font-semibold">🧮 Calculators</h3>
          <p className="mt-2 text-sm text-slate-500 group-hover:text-slate-700">
            Math, finance, and scientific calculators for various needs.
          </p>
        </Link>

        <Link
          href="/converters"
          className="group block p-6 bg-white border rounded-lg shadow-sm hover:shadow-lg hover:border-blue-500 transition-all"
        >
          <h3 className="text-xl font-semibold">🔄 Converters</h3>
          <p className="mt-2 text-sm text-slate-500 group-hover:text-slate-700">
            Convert units for length, mass, temperature, and more.
          </p>
        </Link>

        <Link
          href="/tables"
          className="group block p-6 bg-white border rounded-lg shadow-sm hover:shadow-lg hover:border-blue-500 transition-all"
        >
          <h3 className="text-xl font-semibold">📊 Tables</h3>
          <p className="mt-2 text-sm text-slate-500 group-hover:text-slate-700">
            Reference data for materials, constants, and formulas.
          </p>
        </Link>

        <Link
          href="/symbols"
          className="group block p-6 bg-white border rounded-lg shadow-sm hover:shadow-lg hover:border-blue-500 transition-all"
        >
          <h3 className="text-xl font-semibold">⚡ Symbols</h3>
          <p className="mt-2 text-sm text-slate-500 group-hover:text-slate-700">
            Electrical, mechanical, and mathematical symbols.
          </p>
        </Link>
      </div>
    </div>
  );
}
