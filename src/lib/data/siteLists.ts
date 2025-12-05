import type { CalculatorListItem, ListItem } from '../types';

// --- MAIN CALCULATOR LIST (dynamic ones only) ---
export const calculatorList: CalculatorListItem[] = [
  {
    slug: 'percentage-calculator',
    title: 'Percentage Calculator',
    description: 'Calculate percentages easily.',
    emoji: '📊',
    category: 'Mathematics',
    details: {
      whatIs: 'A percentage calculator helps you compute percentages as ratios out of 100.',
      formula: 'Result = (Percentage / 100) × Value',
    },
  },
  {
    slug: 'bmi-calculator',
    title: 'BMI Calculator',
    description: 'Find your Body Mass Index (BMI).',
    emoji: '⚖️',
    category: 'Health',
    details: {
      whatIs: 'BMI (Body Mass Index) is a measure of body fat based on weight and height.',
      formula: 'BMI = weight (kg) / (height (m)²)',
    },
  },
  {
    slug: 'gpa-calculator',
    title: 'GPA Calculator',
    description: 'Compute your Grade Point Average.',
    emoji: '🎓',
    category: 'Education',
    details: {
      whatIs: 'A GPA calculator computes average performance across courses.',
      formula: 'GPA = Total Grade Points ÷ Total Credit Hours',
    },
  },
  {
    slug: 'number-converter',
    title: 'Number Converter',
    description: 'Convert numbers between decimal, binary, octal, and hex.',
    emoji: '🔄',
    category: 'Mathematics',
    details: {
      whatIs: 'A number system converter converts values between various number systems.',
      formula: 'Convert via base-10 intermediate step for accuracy.',
    },
  },
  {
    slug: 'scientific-calculator',
    title: 'Scientific Calculator',
    description: 'Perform advanced calculations with this powerful open-source tool.',
    emoji: '🧪',
    category: 'Mathematics',
    details: {
      whatIs:
        'A scientific calculator is a tool designed to solve problems in science, engineering, and mathematics. This version is powered by the robust GeoGebra engine.',
      formula:
        'This calculator supports a wide range of functions, including trigonometric, logarithmic, matrices, and calculus operations.',
      usage: {
        title: 'How to Use the Calculator',
        sections: [
          {
            title: 'Basic Operations',
            points: [
              'Enter numbers and operators using the on-screen buttons or your keyboard.',
              'Press the <strong>=</strong> button or <strong>Enter</strong> to see the result.',
              'Use the <strong>fraction button (a/b)</strong> to easily input fractions like 3/4.',
              'Your calculation history is displayed above for easy reference.',
            ],
          },
          {
            title: 'Advanced Functions',
            points: [
              'For powers, use the <strong>x<sup>y</sup></strong> button (e.g., 2 x<sup>y</sup> 3 for 2³).',
              'Find square roots using the <strong>√</strong> button.',
              'Access trigonometric functions like <strong>sin</strong>, <strong>cos</strong>, and <strong>tan</strong> directly.',
              'Use the <strong>f(x)</strong> menu to find more functions like logarithms (log).',
            ],
          },
          {
            title: 'Important Tips',
            points: [
              '<strong>Angle Mode:</strong> Switch between <strong>DEG</strong> (Degrees) and <strong>RAD</strong> (Radians) using the toggle at the top left.',
              '<strong>Clear:</strong> The <strong>AC</strong> button clears the entire calculation. The backspace button (⌫) removes the last character.',
            ],
          },
        ],
      },
    },
  },
  {
    slug: 'trigonometry-calculator',
    title: 'Trigonometry Calculator',
    description: 'Solve right triangles and calculate trigonometric functions with ease.',
    emoji: '📐',
    category: 'Mathematics',
    details: {
      whatIs:
        'A trigonometry calculator helps solve for the unknown sides and angles of a right-angled triangle. By providing any two known values, you can find the remaining properties of the triangle.',
      formula:
        'Calculations are based on the Pythagorean theorem (a² + b² = c²) and trigonometric functions like sine (SOH), cosine (CAH), and tangent (TOA).',
    },
  },
  {
    slug: 'mortgage-calculator',
    title: 'Mortgage Calculator',
    description: 'Estimate your monthly mortgage payments.',
    emoji: '🏠',
    category: 'Financial',
    details: {
      whatIs:
        'A mortgage calculator helps estimate the monthly payments for a home loan, based on the loan amount, interest rate, and term.',
      formula: 'M = P[r(1+r)^n]/[(1+r)^n-1]',
    },
  },
  {
    slug: 'compound-interest-calculator',
    title: 'Compound Interest Calculator',
    description: 'Calculate the future value of an investment with compound interest.',
    emoji: '📈',
    category: 'Financial',
    details: {
      whatIs:
        'Compound interest is the interest on a loan or deposit calculated based on both the initial principal and the accumulated interest from previous periods.',
      formula: 'A = P(1 + r/n)^(nt)',
    },
  },
  {
    slug: 'simple-interest-calculator',
    title: 'Simple Interest Calculator',
    description: 'Calculate interest on a principal amount at a fixed rate.',
    emoji: '💰',
    category: 'Financial',
    details: {
      whatIs:
        'Simple interest is a quick method of calculating the interest charge on a loan. It is determined by multiplying the daily interest rate by the principal by the number of days that elapse between payments.',
      formula: 'I = P × R × T',
    },
  },
  {
    slug: 'discount-calculator',
    title: 'Discount Calculator',
    description: 'Calculate the final price after applying a discount.',
    emoji: '🏷️',
    category: 'Financial',
    details: {
      whatIs:
        'A discount calculator determines the final price of an item after a percentage-based discount is applied.',
      formula: 'Final Price = Original Price × (1 - Discount / 100)',
    },
  },
  {
    slug: 'electricity-bill-calculator',
    title: 'Electricity Bill Calculator',
    description: 'Estimate your electricity bill based on appliance usage and local rates.',
    emoji: '💡',
    category: 'Energy',
    details: {
      whatIs:
        'An electricity bill calculator helps estimate the cost of running electrical appliances over a specific period. It uses the power consumption of a device, hours of use, and the cost per kilowatt-hour (kWh).',
      formula: 'Cost = (Power (W) × Hours) / 1000 × Cost per kWh',
    },
  },
  {
    slug: 'energy-consumption-calculator',
    title: 'Energy Consumption Calculator',
    description: 'Calculate the energy (kWh) used by your electrical appliances.',
    emoji: '🔌',
    category: 'Energy',
    details: {
      whatIs:
        'An energy consumption calculator determines the amount of electrical energy an appliance uses in kilowatt-hours (kWh) over time.',
      formula: 'E(kWh/day) = P(W) × t(h/day) / 1000',
    },
  },
  {
    slug: 'energy-cost-calculator',
    title: 'Energy Cost Calculator',
    description: 'Calculate the cost of energy consumption for your devices.',
    emoji: '💲',
    category: 'Energy',
    details: {
      whatIs:
        'An energy cost calculator provides a detailed breakdown of the cost to run an appliance per day, month, and year.',
      formula: 'Cost($/day) = E(kWh/day) × Cost(cent/kWh) / 100',
    },
  },
  {
    slug: 'inflation-calculator',
    title: 'Inflation Calculator',
    description: 'Calculate the future value of money based on inflation rates.',
    emoji: '📈',
    category: 'Financial',
    details: {
      whatIs: 'An inflation calculator estimates the future cost of goods and services based on an expected annual inflation rate.',
      formula: 'Future Value = Present Value × (1 + Rate)^Years',
    },
  },
  {
    slug: 'gst-calculator',
    title: 'GST Calculator India',
    description: 'Calculate GST (Goods and Services Tax) with CGST and SGST breakdown. Add or remove GST instantly.',
    emoji: '🇮🇳',
    category: 'Financial',
    details: {
      whatIs: 'A GST Calculator helps you calculate the Goods and Services Tax applicable in India. It supports all GST rates (5%, 12%, 18%, 28%) and shows the CGST/SGST split.',
      formula: 'GST Amount = Original Price × (GST Rate / 100); Final Price = Original Price + GST Amount',
    },
  },
  {
    slug: 'matrix-calculator',
    title: 'Matrix Calculator',
    description: 'Perform matrix operations like addition, multiplication, and finding the inverse.',
    emoji: '🔢',
    category: 'Mathematics',
    details: {
      whatIs: 'A matrix calculator is a tool to perform various mathematical operations on matrices.',
      formula: 'Supports addition, subtraction, multiplication, determinant, and inverse of matrices.',
    },
  },
  {
    slug: 'age-calculator',
    title: 'Age Calculator',
    description: 'Calculate your exact age in years, months, and days.',
    emoji: '🎂',
    category: 'Health',
    details: {
      whatIs: 'An age calculator determines your age based on your date of birth.',
      formula: 'Age = Current Date - Birth Date',
    },
  },
  {
    slug: 'tip-calculator',
    title: 'Tip Calculator',
    description: 'Calculate gratuity and split bills easily.',
    emoji: '💵',
    category: 'Financial',
    details: {
      whatIs: 'A tip calculator helps you calculate the tip amount and total bill.',
      formula: 'Tip = Bill Amount × (Tip Percentage / 100)',
    },
  },
  {
    slug: 'area-calculator',
    title: 'Area Calculator',
    description: 'Calculate the area of various geometric shapes.',
    emoji: '📐',
    category: 'Mathematics',
    details: {
      whatIs: 'An area calculator determines the space inside a 2D shape.',
      formula: 'Varies by shape (e.g., πr² for circles).',
    },
  },
  // Flattened Area Calculators
  {
    slug: 'circle-area-calculator',
    title: 'Circle Area Calculator',
    description: 'Calculate the area of a circle.',
    emoji: '⭕',
    category: 'Mathematics',
    details: { whatIs: 'Calculates the area of a circle given its radius.', formula: 'Area = π × r²' },
  },
  {
    slug: 'triangle-area-calculator',
    title: 'Triangle Area Calculator',
    description: 'Calculate the area of a triangle.',
    emoji: '🔺',
    category: 'Mathematics',
    details: { whatIs: 'Calculates the area of a triangle given base and height.', formula: 'Area = 0.5 × base × height' },
  },
  {
    slug: 'square-area-calculator',
    title: 'Square Area Calculator',
    description: 'Calculate the area of a square.',
    emoji: '⬛',
    category: 'Mathematics',
    details: { whatIs: 'Calculates the area of a square given its side length.', formula: 'Area = side²' },
  },
  {
    slug: 'rectangle-area-calculator',
    title: 'Rectangle Area Calculator',
    description: 'Calculate the area of a rectangle.',
    emoji: '▭',
    category: 'Mathematics',
    details: { whatIs: 'Calculates the area of a rectangle given width and length.', formula: 'Area = width × length' },
  },
  {
    slug: 'trapezoid-area-calculator',
    title: 'Trapezoid Area Calculator',
    description: 'Calculate the area of a trapezoid.',
    emoji: '⏢',
    category: 'Mathematics',
    details: { whatIs: 'Calculates the area of a trapezoid.', formula: 'Area = 0.5 × (a + b) × h' },
  },
  {
    slug: 'parallelogram-area-calculator',
    title: 'Parallelogram Area Calculator',
    description: 'Calculate the area of a parallelogram.',
    emoji: '▱',
    category: 'Mathematics',
    details: { whatIs: 'Calculates the area of a parallelogram.', formula: 'Area = base × height' },
  },
  {
    slug: 'rhombus-area-calculator',
    title: 'Rhombus Area Calculator',
    description: 'Calculate the area of a rhombus.',
    emoji: '🔷',
    category: 'Mathematics',
    details: { whatIs: 'Calculates the area of a rhombus.', formula: 'Area = 0.5 × d1 × d2' },
  },
  {
    slug: 'polygon-area-calculator',
    title: 'Polygon Area Calculator',
    description: 'Calculate the area of a regular polygon.',
    emoji: '🛑',
    category: 'Mathematics',
    details: { whatIs: 'Calculates the area of a regular polygon.', formula: 'Area = (n × s²) / (4 × tan(π/n))' },
  },
  // Unit Converters
  {
    slug: 'length-converter',
    title: 'Length Converter',
    description: 'Convert between meters, feet, inches, miles, and more.',
    emoji: '📏',
    category: 'Unit Converters',
    details: { whatIs: 'Converts between different units of length.', formula: 'Varies by unit.' },
  },
  {
    slug: 'weight-converter',
    title: 'Weight Converter',
    description: 'Convert between kilograms, pounds, ounces, and grams.',
    emoji: '⚖️',
    category: 'Unit Converters',
    details: { whatIs: 'Converts between different units of weight and mass.', formula: 'Varies by unit.' },
  },
  {
    slug: 'temperature-converter',
    title: 'Temperature Converter',
    description: 'Convert between Celsius, Fahrenheit, and Kelvin.',
    emoji: '🌡️',
    category: 'Unit Converters',
    details: { whatIs: 'Converts between different temperature scales.', formula: 'C = (F-32)/1.8' },
  },
  {
    slug: 'speed-converter',
    title: 'Speed Converter',
    description: 'Convert between mph, kph, m/s, and knots.',
    emoji: '🚀',
    category: 'Unit Converters',
    details: { whatIs: 'Converts between different units of speed.', formula: 'Varies by unit.' },
  },
  {
    slug: 'volume-converter',
    title: 'Volume Converter',
    description: 'Convert between liters, gallons, cups, and more.',
    emoji: '🥛',
    category: 'Unit Converters',
    details: { whatIs: 'Converts between different units of volume.', formula: 'Varies by unit.' },
  },
  {
    slug: 'area-converter',
    title: 'Area Converter',
    description: 'Convert between square meters, acres, hectares, and sq feet.',
    emoji: '🗺️',
    category: 'Unit Converters',
    details: { whatIs: 'Converts between different units of area.', formula: 'Varies by unit.' },
  },
  {
    slug: 'pressure-converter',
    title: 'Pressure Converter',
    description: 'Convert between Pascal, Bar, PSI, and Atmosphere.',
    emoji: '🎈',
    category: 'Unit Converters',
    details: { whatIs: 'Converts between different units of pressure.', formula: 'Varies by unit.' },
  },
  {
    slug: 'power-converter',
    title: 'Power Converter',
    description: 'Convert between Watts, Kilowatts, and Horsepower.',
    emoji: '⚡',
    category: 'Unit Converters',
    details: { whatIs: 'Converts between different units of power.', formula: 'Varies by unit.' },
  },
  {
    slug: 'energy-converter',
    title: 'Energy Converter',
    description: 'Convert between Joules, Calories, kWh, and BTU.',
    emoji: '🔋',
    category: 'Unit Converters',
    details: { whatIs: 'Converts between different units of energy.', formula: 'Varies by unit.' },
  },
  {
    slug: 'data-storage-converter',
    title: 'Data Storage Converter',
    description: 'Convert between Bytes, KB, MB, GB, and TB.',
    emoji: '💾',
    category: 'Unit Converters',
    details: { whatIs: 'Converts between different units of digital storage.', formula: '1 KB = 1024 Bytes' },
  },
  // Reference
  {
    slug: 'periodic-table',
    title: 'Periodic Table of Elements',
    description: 'Interactive periodic table with element details.',
    emoji: '🧪',
    category: 'Reference',
    details: { whatIs: 'A tabular display of the chemical elements.', formula: 'N/A' },
  },
];

// ✅ NEW LIST FOR STATIC HUB PAGES
export const staticCalculatorList: CalculatorListItem[] = [];

// src/lib/data/siteLists.ts
// Add 'category' to the ListItem type in src/lib/types.ts if it's not already there
export const tableList: (ListItem & { category: string })[] = [
  {
    slug: 'periodic-table',
    title: 'Periodic Table of Elements',
    description: 'An interactive periodic table with detailed element data.',
    emoji: '🧪',
    category: 'Chemistry', // ✨ Assign category
  },
  {
    slug: 'logarithm',
    title: 'Logarithm Table',
    description: 'Common (base 10) and natural (base e) logarithms.',
    emoji: '🔢',
    category: 'Mathematics', // ✨ Assign category
  },
  {
    slug: 'awg-wire-gauge-chart',
    title: 'AWG Wire Gauge Chart',
    description: 'American Wire Gauge sizes, diameters, and more.',
    emoji: '🔌',
    category: 'Electrical', // ✨ Assign category
  },
  {
    slug: 'resistor-color-code-calculator',
    title: 'Resistor Color Code Calculator',
    description: 'Calculate the resistance of a 4-band resistor.',
    emoji: '🎨',
    category: 'Electrical', // ✨ Assign category
  },
  {
    slug: 'exponential-table',
    title: 'Exponential Table',
    description: 'Reference values for the exponential function e^x.',
    emoji: '📈',
    category: 'Mathematics', // ✨ Assign category
  },
];

export const symbolList: ListItem[] = [
  {
    slug: 'electrical-circuit-symbols',
    title: 'Electrical Circuit Symbols',
    description: 'Common symbols for resistors, capacitors, and more.',
    emoji: '⚡️',
  },
];

export const numberConversionsList = [
  { from: 'bin', to: 'dec', slug: 'binary-to-decimal', title: 'Binary to Decimal' },
  { from: 'dec', to: 'bin', slug: 'decimal-to-binary', title: 'Decimal to Binary' },
  { from: 'bin', to: 'hex', slug: 'binary-to-hex', title: 'Binary to Hex' },
  { from: 'hex', to: 'bin', slug: 'hex-to-binary', title: 'Hex to Binary' },
  { from: 'dec', to: 'hex', slug: 'decimal-to-hex', title: 'Decimal to Hex' },
  { from: 'hex', to: 'dec', slug: 'hex-to-decimal', title: 'Hex to Decimal' },
  { from: 'txt', to: 'bin', slug: 'text-to-binary', title: 'ASCII Text to Binary' },
  { from: 'bin', to: 'txt', slug: 'binary-to-text', title: 'Binary to ASCII Text' },
];