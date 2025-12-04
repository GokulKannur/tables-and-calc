// src/app/tables/exponential-table/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Exponential Table | TablesAndCalc',
  description: 'A reference table for exponential function (e^x) values.',
};

// Generate data for the table
const generateExpData = () => {
  const data = [];
  for (let i = 0; i <= 100; i++) {
    const x = i / 10;
    data.push({ x: x.toFixed(1), ex: Math.exp(x).toFixed(4) });
  }
  return data;
};

const expData = generateExpData();

export default function ExponentialTablePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 pb-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Exponential Table (e^x)</h1>
        <p className="text-muted-foreground mt-2">Reference values for the exponential function.</p>
      </div>

      <div className="bg-card p-4 md:p-6 border rounded-lg shadow-sm overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[300px]">
          <thead>
            <tr>
              <th className="border-b-2 border-border p-3 font-semibold bg-secondary">x</th>
              <th className="border-b-2 border-border p-3 font-semibold bg-secondary">e^x</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            {expData.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? '' : 'bg-secondary/50'}>
                <td className="border-b border-border p-3 font-mono">{row.x}</td>
                <td className="border-b border-border p-3 font-mono">{row.ex}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}