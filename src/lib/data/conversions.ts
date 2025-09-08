// src/lib/data/conversions.ts
import { converterData } from './converters';
import type { ConversionListItem } from '../types';

// AUTO-GENERATED CONVERSIONS
export const allGeneratedConversions: ConversionListItem[] = Object.entries(converterData).flatMap(
  ([category, data]) => {
    if (!data.factors) return [];  

    return data.units.flatMap((from: { id: string }, i: number) =>
      data.units.slice(i + 1).flatMap((to: { id: string }) => {
        const factor = data.factors![to.id] / data.factors![from.id];
        const inverseFactor = data.factors![from.id] / data.factors![to.id];
        return [
          { from: from.id, to: to.id, slug: `${category}/${from.id}-to-${to.id}`, factor, inverseFactor, category },
          { from: to.id, to: from.id, slug: `${category}/${to.id}-to-${from.id}`, factor: inverseFactor, inverseFactor: factor, category },
        ];
      })
    );
  }
);

// CURATED POPULAR CONVERSIONS
export const popularConversions: ConversionListItem[] = [
  // Length
  { from: 'cm', to: 'in', slug: 'length/cm-to-inches', category: 'length' },
  { from: 'm', to: 'ft', slug: 'length/meters-to-feet', category: 'length' },
  // Weight
  { from: 'kg', to: 'lb', slug: 'weight/kg-to-lbs', category: 'weight' },
  // Volume
  { from: 'l', to: 'gal', slug: 'volume/liters-to-gallons', category: 'volume' },
  { from: 'gal', to: 'l', slug: 'volume/gallons-to-liters', category: 'volume' },
  { from: 'ml', to: 'cup', slug: 'volume/ml-to-cups', category: 'volume' },
  { from: 'cup', to: 'ml', slug: 'volume/cups-to-ml', category: 'volume' },
  { from: 'l', to: 'ml', slug: 'volume/liters-to-milliliters', category: 'volume' },
  { from: 'ml', to: 'l', slug: 'volume/milliliters-to-liters', category: 'volume' },
  // Speed
  { from: 'kph', to: 'mph', slug: 'speed/kph-to-mph', category: 'speed' },
  // Pressure
  { from: 'bar', to: 'psi', slug: 'pressure/bar-to-psi', category: 'pressure' },
  { from: 'psi', to: 'bar', slug: 'pressure/psi-to-bar', category: 'pressure' },
  // Energy
  { from: 'j', to: 'cal', slug: 'energy/joule-to-calorie', category: 'energy' },
  { from: 'cal', to: 'j', slug: 'energy/calorie-to-joule', category: 'energy' },
  // Power
  { from: 'w', to: 'hp', slug: 'power/watts-to-horsepower', category: 'power' },
  { from: 'hp', to: 'w', slug: 'power/horsepower-to-watts', category: 'power' },
  // Time
  { from: 'hr', to: 'min', slug: 'time/hours-to-minutes', category: 'time' },
  { from: 'min', to: 's', slug: 'time/minutes-to-seconds', category: 'time' },
  // Angle
  { from: 'deg', to: 'rad', slug: 'angle/degrees-to-radians', category: 'angle' },
  { from: 'rad', to: 'deg', slug: 'angle/radians-to-degrees', category: 'angle' },
  // Data Storage
  { from: 'mb', to: 'gb', slug: 'data-storage/megabytes-to-gigabytes', category: 'data-storage' },
  { from: 'gb', to: 'mb', slug: 'data-storage/gigabytes-to-megabytes', category: 'data-storage' },
  // Special Converters
  { from: '', to: '', slug: 'color/hex-to-rgb', category: 'color' },
  { from: '', to: '', slug: 'color/rgb-to-hex', category: 'color' },
  { from: '', to: '', slug: 'color/rgb-to-hsl', category: 'color' },
  { from: '', to: '', slug: 'electrical/amps-to-watts', category: 'electrical' },
  { from: '', to: '', slug: 'electrical/volts-amps-ohms', category: 'electrical' },
];