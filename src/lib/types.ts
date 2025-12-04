// src/lib/types.ts
export interface UnitInfo {
  name: string;
  pluralName: string;
  definition: string;
  history: string;
  currentUse: string;
}

export interface ListItem {
  slug: string;
  title: string;
  description: string;
  emoji: string;
  category?: string;
}

// ✨ ADD THIS NEW INTERFACE
export interface ResourceListItem {
  slug: string;
  title: string;
  description: string;
  content: string;
  category?: string;
  icon?: string;
}

export interface CalculatorListItem extends ListItem {
  details: {
    whatIs: string;
    formula: string;
    usage?: {
      title: string;
      sections: {
        title: string;
        points: string[];
      }[];
    };
  };
}

export interface ConversionListItem {
  from: string;
  to: string;
  slug: string;
  factor?: number;
  inverseFactor?: number;
  func?: (value: number) => number;
  category: string;
}

export interface ConverterCategory {
  name: string;
  units: { id: string; name: string }[];
  factors?: { [key: string]: number };
  info: { [key: string]: UnitInfo };
}