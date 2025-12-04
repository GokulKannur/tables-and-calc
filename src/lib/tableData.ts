// src/lib/tableData.ts

export interface LogRow {
  n: number;
  log10: number; // Base 10
  ln: number;    // Base e (natural log)
}

// Generate log table data for 1-100
export const logTableData: LogRow[] = Array.from({ length: 100 }, (_, i) => {
  const n = i + 1;
  return {
    n,
    log10: Math.log10(n),
    ln: Math.log(n),
  };
});

// Special values commonly referenced
export const specialLogValues = [
  { value: Math.E, name: 'e (Euler\'s number)', log10: Math.log10(Math.E), ln: 1 },
  { value: 10, name: '10', log10: 1, ln: Math.log(10) },
  { value: 100, name: '100', log10: 2, ln: Math.log(100) },
  { value: 1000, name: '1000', log10: 3, ln: Math.log(1000) },
];