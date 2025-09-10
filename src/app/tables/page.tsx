// src/app/tables/page.tsx
import Link from 'next/link';
import { tableList } from '@/lib/data/siteLists';
import type { ListItem } from '@/lib/types';

// Helper function to group tables by category
function groupByCategory(tables: (ListItem & { category: string })[]) {
  return tables.reduce((acc, table) => {
    const category = table.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(table);
    return acc;
  }, {} as Record<string, ListItem[]>);
}

export default function TablesPage() {
  const groupedTables = groupByCategory(tableList);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Reference Tables</h1>
        <p className="text-lg text-slate-600 mt-2">A collection of useful data tables and charts.</p>
      </div>

      <div className="space-y-10">
        {Object.entries(groupedTables).map(([category, tables]) => (
          <div key={category}>
            <h2 className="text-2xl font-bold border-b pb-2 mb-4">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tables.map((item) => (
                <Link 
                  href={`/tables/${item.slug}`} 
                  key={item.slug} 
                  className="block p-6 bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-blue-600">{item.emoji} {item.title}</h3>
                  <p className="text-slate-500 mt-2 text-sm">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}