// src/lib/tableData.ts

export interface LogRow {
  n: number;
  log10: number; // Base 10
  ln: number;    // Base e (natural log)
}

export const logTableData: LogRow[] = [
  { n: 1, log10: 0.0000, ln: 0.0000 },
  { n: 2, log10: 0.3010, ln: 0.6931 },
  { n: 3, log10: 0.4771, ln: 1.0986 },
  { n: 4, log10: 0.6021, ln: 1.3863 },
  { n: 5, log10: 0.6990, ln: 1.6094 },
  { n: 6, log10: 0.7782, ln: 1.7918 },
  { n: 7, log10: 0.8451, ln: 1.9459 },
  { n: 8, log10: 0.9031, ln: 2.0794 },
  { n: 9, log10: 0.9542, ln: 2.1972 },
  { n: 10, log10: 1.0000, ln: 2.3026 },
];