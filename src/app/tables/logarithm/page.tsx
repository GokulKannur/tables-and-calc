// src/app/tables/logarithm/page.tsx

import { logTableData, specialLogValues } from '@/lib/tableData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Logarithm Table (Log Table) 1-100 | TablesAndCalc',
  description: 'Complete logarithm table with log₁₀ and natural log (ln) values for numbers 1 to 100. Free reference for students and professionals.',
  keywords: ['log table', 'logarithm table', 'log10', 'natural log', 'ln table', 'math reference'],
};

export default function LogarithmTablePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Logarithm Table</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Complete log table with common logarithms (base 10) and natural logarithms (base e) for numbers 1 to 100.
        </p>
      </div>

      {/* Quick Reference */}
      <div className="mb-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {specialLogValues.map((item) => (
          <div key={item.name} className="bg-card border rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-primary">{item.name}</div>
            <div className="text-sm text-muted-foreground mt-1">
              log₁₀ = {item.log10.toFixed(4)}
            </div>
            <div className="text-sm text-muted-foreground">
              ln = {item.ln.toFixed(4)}
            </div>
          </div>
        ))}
      </div>

      {/* Full Table */}
      <div className="bg-card p-6 border rounded-lg shadow-sm overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="sticky top-0">
            <tr>
              <th className="border-b-2 p-3 font-semibold text-foreground bg-secondary">n</th>
              <th className="border-b-2 p-3 font-semibold text-foreground bg-secondary">log₁₀(n)</th>
              <th className="border-b-2 p-3 font-semibold text-foreground bg-secondary">ln(n)</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            {logTableData.map((row, index) => (
              <tr key={row.n} className={index % 2 === 0 ? '' : 'bg-secondary/30'}>
                <td className="border-b border-border p-3 font-medium text-foreground">{row.n}</td>
                <td className="border-b border-border p-3 font-mono">{row.log10.toFixed(4)}</td>
                <td className="border-b border-border p-3 font-mono">{row.ln.toFixed(4)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Educational Content */}
      <div className="mt-8 bg-card p-6 border rounded-lg shadow-sm space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-3">What is a Logarithm?</h2>
          <p className="text-muted-foreground leading-relaxed">
            A logarithm is the inverse operation of exponentiation. If b<sup>x</sup> = y, then log<sub>b</sub>(y) = x.
            In simpler terms, a logarithm answers the question: &quot;To what power must we raise a base to get a certain number?&quot;
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Common Logarithm (log₁₀)</h3>
          <p className="text-muted-foreground leading-relaxed">
            The common logarithm uses base 10 and is written as log(x) or log₁₀(x).
            For example, log₁₀(100) = 2 because 10² = 100.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Natural Logarithm (ln)</h3>
          <p className="text-muted-foreground leading-relaxed">
            The natural logarithm uses base e (approximately 2.71828) and is written as ln(x).
            It&apos;s commonly used in calculus, physics, and engineering.
          </p>
        </div>
      </div>
    </div>
  );
}