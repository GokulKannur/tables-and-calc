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
  { from: 'km', to: 'mi', slug: 'length/km-to-miles', category: 'length' },
  { from: 'ft', to: 'cm', slug: 'length/feet-to-cm', category: 'length' },
  { from: 'mm', to: 'in', slug: 'length/mm-to-inches', category: 'length' },
  { from: 'in', to: 'mm', slug: 'length/inches-to-mm', category: 'length' },
  { from: 'in', to: 'ft', slug: 'length/inches-to-feet', category: 'length' },
  { from: 'mi', to: 'km', slug: 'length/miles-to-km', category: 'length' },
  { from: 'ft', to: 'in', slug: 'length/feet-to-inches', category: 'length' },
  { from: 'm', to: 'yd', slug: 'length/meters-to-yards', category: 'length' },
  { from: 'yd', to: 'm', slug: 'length/yards-to-meters', category: 'length' },

  // Weight
  { from: 'kg', to: 'lb', slug: 'weight/kg-to-lbs', category: 'weight' },
  { from: 'g', to: 'oz', slug: 'weight/grams-to-ounces', category: 'weight' },
  { from: 'lb', to: 'kg', slug: 'weight/lbs-to-kg', category: 'weight' },
  { from: 'oz', to: 'g', slug: 'weight/ounces-to-grams', category: 'weight' },
  { from: 'lb', to: 'oz', slug: 'weight/pounds-to-ounces', category: 'weight' },
  { from: 'oz', to: 'lb', slug: 'weight/ounces-to-pounds', category: 'weight' },
  
  // Volume
  { from: 'l', to: 'gal', slug: 'volume/liters-to-gallons', category: 'volume' },
  { from: 'gal', to: 'l', slug: 'volume/gallons-to-liters', category: 'volume' },
  { from: 'ml', to: 'cup', slug: 'volume/ml-to-cups', category: 'volume' },
  { from: 'tbsp', to: 'ml', slug: 'volume/tablespoons-to-ml', category: 'volume' },
  { from: 'cup', to: 'ml', slug: 'volume/cups-to-ml', category: 'volume' },

  // Speed
  { from: 'kph', to: 'mph', slug: 'speed/kph-to-mph', category: 'speed' },
  { from: 'm/s', to: 'kph', slug: 'speed/ms-to-kph', category: 'speed' },
  { from: 'mph', to: 'kph', slug: 'speed/mph-to-kph', category: 'speed' },
  { from: 'knot', to: 'mph', slug: 'speed/knots-to-mph', category: 'speed' },

  // Pressure
  { from: 'bar', to: 'psi', slug: 'pressure/bar-to-psi', category: 'pressure' },
  { from: 'psi', to: 'bar', slug: 'pressure/psi-to-bar', category: 'pressure' },
  { from: 'atm', to: 'pa', slug: 'pressure/atm-to-pascal', category: 'pressure' },
  { from: 'pa', to: 'bar', slug: 'pressure/pascal-to-bar', category: 'pressure' },
  
  // Energy
  { from: 'j', to: 'cal', slug: 'energy/joule-to-calorie', category: 'energy' },
  { from: 'kwh', to: 'j', slug: 'energy/kwh-to-joule', category: 'energy' },
  { from: 'cal', to: 'j', slug: 'energy/calorie-to-joule', category: 'energy' },
  { from: 'btu', to: 'j', slug: 'energy/btu-to-joule', category: 'energy' },

  // Temperature
  { from: 'c', to: 'f', slug: 'temperature/celsius-to-fahrenheit', category: 'temperature' },
  { from: 'f', to: 'c', slug: 'temperature/fahrenheit-to-celsius', category: 'temperature' },

  // Area
  { from: 'acre', to: 'sqft', slug: 'area/acres-to-square-feet', category: 'area' },
  { from: 'sqft', to: 'acre', slug: 'area/square-feet-to-acres', category: 'area' },

  // Angle
  { from: 'rad', to: 'deg', slug: 'angle/radians-to-degrees', category: 'angle' },
  { from: 'deg', to: 'rad', slug: 'angle/degrees-to-radians', category: 'angle' },

  // Power
  { from: 'w', to: 'hp', slug: 'power/watts-to-horsepower', category: 'power' },
  { from: 'hp', to: 'w', slug: 'power/horsepower-to-watts', category: 'power' },

  // Data Storage
  { from: 'mb', to: 'gb', slug: 'data-storage/megabytes-to-gigabytes', category: 'data-storage' },
  { from: 'gb', to: 'mb', slug: 'data-storage/gigabytes-to-megabytes', category: 'data-storage' },
  
  // Special Converters
  { from: '', to: '', slug: 'color/hex-to-rgb', category: 'color' },
  { from: '', to: '', slug: 'color/rgb-to-hex', category: 'color' },
  { from: '', to: '', slug: 'electrical/amps-to-watts', category: 'electrical' },
];