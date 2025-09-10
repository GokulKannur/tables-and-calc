import type { CalculatorListItem, ListItem } from '../types';

// --- MAIN CALCULATOR LIST (dynamic ones only) ---
export const calculatorList: CalculatorListItem[] = [
  {
    slug: 'percentage-calculator',
    title: 'Percentage Calculator',
    description: 'Calculate percentages easily.',
    emoji: '📊',
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
    details: {
      whatIs:
        'An energy cost calculator provides a detailed breakdown of the cost to run an appliance per day, month, and year.',
      formula: 'Cost($/day) = E(kWh/day) × Cost(cent/kWh) / 100',
    },
  },
];

// ✅ NEW LIST FOR STATIC HUB PAGES
export const staticCalculatorList: CalculatorListItem[] = [
  {
    slug: 'area-calculator',
    title: 'Area Calculator',
    description: 'Calculate the area of common geometric shapes like circles, squares, and triangles.',
    emoji: '🟥',
    details: {
      whatIs:
        'An area calculator is a tool used to determine the area of various two-dimensional geometric shapes.',
      formula:
        'Formulas vary by shape, such as Area = side² for a square or Area = π × r² for a circle.',
    },
  },
  // You can add other static hubs here, like a Volume Calculator
];

export const tableList: ListItem[] = [
  {
    slug: 'logarithm',
    title: 'Logarithm Table',
    description: 'Common (base 10) and natural (base e) logarithms.',
    emoji: '🔢',
  },
  {
    slug: 'awg-wire-gauge-chart',
    title: 'AWG Wire Gauge Chart',
    description: 'American Wire Gauge sizes, diameters, and more.',
    emoji: '🔌',
  },
  {
    slug: 'resistor-color-code-calculator',
    title: 'Resistor Color Code Calculator',
    description: 'Calculate the resistance of a 4-band resistor.',
    emoji: '🎨',
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
