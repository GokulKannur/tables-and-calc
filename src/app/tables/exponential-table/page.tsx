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
    <div className="max-w-4xl mx-auto pb-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Exponential Table (e^x)</h1>
        <p className="text-slate-600 mt-2">Reference values for the exponential function.</p>
      </div>

      <div className="bg-white p-6 border rounded-lg shadow-sm overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b-2 p-3 font-semibold text-slate-700 bg-slate-50">x</th>
              <th className="border-b-2 p-3 font-semibold text-slate-700 bg-slate-50">e^x</th>
            </tr>
          </thead>
          <tbody className="text-slate-600">
            {expData.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? '' : 'bg-slate-50'}>
                <td className="border-b p-3 font-mono">{row.x}</td>
                <td className="border-b p-3 font-mono">{row.ex}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}