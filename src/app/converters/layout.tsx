// src/app/converters/layout.tsx

import Link from 'next/link';
import { converterData } from '@/lib/unitData';

// Generate the category list dynamically from the data file
const converterCategories = Object.keys(converterData).map(key => ({
  name: converterData[key].name,
  href: `/converters/${key}`,
}));

export default function ConvertersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl mx-auto flex gap-8">
      {/* Sidebar Navigation */}
      <aside className="hidden md:block w-64">
        <div className="p-4 bg-card border rounded-lg shadow-sm sticky top-24">
          <h2 className="text-lg font-semibold mb-4 text-foreground">All Converters</h2>
          <nav>
            <ul className="space-y-2">
              {converterCategories.map((cat) => (
                <li key={cat.name}>
                  <Link
                    href={cat.href}
                    className="block p-2 rounded-md text-muted-foreground hover:bg-secondary hover:text-primary transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Page Content */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}