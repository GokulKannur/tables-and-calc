// src/components/converters/ConversionTable.tsx
"use client";

interface ConversionTableProps {
  fromUnitName: string;
  toUnitName: string;
  factor: number;
}

const tableValues = [0.01, 0.1, 1, 2, 5, 10, 20, 50, 100, 1000];

export default function ConversionTable({ fromUnitName, toUnitName, factor }: ConversionTableProps) {
  return (
    <div>
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs uppercase bg-secondary">
            <tr>
              <th scope="col" className="px-4 py-3">{fromUnitName}</th>
              <th scope="col" className="px-4 py-3">{toUnitName}</th>
            </tr>
          </thead>
          <tbody>
            {tableValues.map((val, i) => (
              <tr key={val} className={i % 2 === 0 ? 'bg-card' : 'bg-secondary/30'}>
                <td className="px-4 py-3">{val.toLocaleString()} {fromUnitName}</td>
                <td className="px-4 py-3 font-medium text-primary">{(val * factor).toLocaleString(undefined, { maximumFractionDigits: 6 })} {toUnitName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card Layout */}
      <div className="block md:hidden space-y-2">
        {tableValues.map(val => (
          <div key={val} className="p-3 bg-card border rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground text-sm">{fromUnitName}</span>
              <span className="font-semibold">{val.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center mt-1">
              <span className="text-muted-foreground text-sm">{toUnitName}</span>
              <span className="font-semibold text-primary">{(val * factor).toLocaleString(undefined, { maximumFractionDigits: 6 })}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}