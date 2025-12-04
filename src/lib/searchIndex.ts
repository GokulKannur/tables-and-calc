// src/lib/searchIndex.ts 

import { 
  popularConversions, 
  calculatorList, 
  tableList, 
  symbolList 
} from './unitData'; 

interface SearchItem { 
  title: string; 
  description: string; 
  path: string; 
  keywords?: string; 
} 

// --- NEW: A dedicated list for our main converter hub pages --- 
const genericConverterItems: SearchItem[] = [ 
  { 
    title: 'Length Converter', 
    description: 'Convert between all length units like meters, feet, inches, etc.', 
    path: '/converters/length', 
    keywords: 'length distance metric imperial' 
  }, 
  { 
    title: 'Weight & Mass Converter', 
    description: 'Convert between all weight units like kilograms, pounds, ounces, etc.', 
    path: '/converters/weight', 
    keywords: 'weight mass metric imperial' 
  }, 
  { 
    title: 'Temperature Converter', 
    description: 'Convert between Celsius, Fahrenheit, and Kelvin.', 
    path: '/converters/temperature', 
    keywords: 'temperature heat cold metric imperial' 
  }, 
]; 

const converterItems: SearchItem[] = popularConversions.map(item => ({ 
  title: `${item.from.toUpperCase()} to ${item.to.toUpperCase()} Converter`, 
  description: `Convert ${item.category} from ${item.from} to ${item.to}.`, 
  path: `/converters/${item.slug}`, 
  keywords: item.category, 
})); 

const calculatorItems: SearchItem[] = calculatorList.map(item => ({ 
  title: item.title, 
  description: item.description, 
  path: `/calculators/${item.slug}`, 
  keywords: 'calculator math tool' 
})); 

const tableItems: SearchItem[] = tableList.map(item => ({ 
  title: item.title, 
  description: item.description, 
  path: `/tables/${item.slug}`, 
  keywords: 'table chart reference data' 
})); 

const symbolItems: SearchItem[] = symbolList.map(item => ({ 
  title: item.title, 
  description: item.description, 
  path: `/symbols/${item.slug}`, 
  keywords: 'symbols schematics diagrams' 
})); 


// Combine all items, with the generic hubs listed first 
export const searchIndex: SearchItem[] = [ 
  ...genericConverterItems, // Add the new items 
  ...converterItems, 
  ...calculatorItems, 
  ...tableItems, 
  ...symbolItems, 
];