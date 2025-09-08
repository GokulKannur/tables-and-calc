// src/app/tables/logarithm/page.tsx

import { logTableData } from '@/lib/tableData'; // We'll create this file next
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Logarithm Table (Log Table) | TablesAndCalc',
  description: 'A reference table of common logarithms (base 10) and natural logarithms (base e).',
};

export default function LogarithmTablePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Logarithm Table</h1>
        <p className="text-slate-600 mt-2">Common logarithms (base 10) and natural logarithms (base e).</p>
      </div>
      <div className="bg-white p-6 border rounded-lg shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b-2 p-3 font-semibold text-slate-700 bg-slate-50">n</th>
              <th className="border-b-2 p-3 font-semibold text-slate-700 bg-slate-50">log<sub>10</sub>(n)</th>
              <th className="border-b-2 p-3 font-semibold text-slate-700 bg-slate-50">ln(n)</th>
            </tr>
          </thead>
          <tbody className="text-slate-600">
            {logTableData.map((row, index) => (
              <tr key={row.n} className={index % 2 === 0 ? '' : 'bg-slate-50'}>
                <td className="border-b p-3 font-medium">{row.n}</td>
                <td className="border-b p-3 font-mono">{row.log10.toFixed(4)}</td>
                <td className="border-b p-3 font-mono">{row.ln.toFixed(4)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}