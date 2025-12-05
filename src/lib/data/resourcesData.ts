// src/lib/data/resourcesData.ts
import type { ResourceListItem } from '../types';

export const resourcesList: ResourceListItem[] = [
  // ===== ELECTRONICS =====
  {
    slug: 'what-are-logic-gates',
    title: 'What Are Logic Gates?',
    description: 'A complete guide to the fundamental building blocks of digital circuits.',
    category: 'Electronics',
    icon: '🔌',
    content: `
      <h2>Introduction to Logic Gates</h2>
      <p>A <strong>logic gate</strong> is an idealized or physical device implementing a Boolean function. It performs a logical operation on one or more binary inputs to produce a single binary output. Logic gates are the fundamental building blocks of all digital circuits, from simple calculators to complex computer processors.</p>
      
      <figure class="my-6">
        <img src="https://www.svgrepo.com/show/312461/logic-gates.svg" alt="Logic Gate Symbols" class="w-full max-w-full sm:max-w-md md:max-w-lg mx-auto rounded-lg border bg-white p-4" onerror="this.style.display='none'" />
        <figcaption class="text-center text-sm text-muted-foreground mt-2">Standard logic gate symbols</figcaption>
      </figure>

      <h3>The Seven Basic Logic Gates</h3>
      
      <h4>1. AND Gate</h4>
      <p>The output is HIGH (1) only when <strong>all inputs</strong> are HIGH.</p>
      <ul>
        <li>Symbol: A · B or AB</li>
        <li>Truth Table: 0·0=0, 0·1=0, 1·0=0, 1·1=1</li>
      </ul>

      <h4>2. OR Gate</h4>
      <p>The output is HIGH when <strong>at least one input</strong> is HIGH.</p>
      <ul>
        <li>Symbol: A + B</li>
        <li>Truth Table: 0+0=0, 0+1=1, 1+0=1, 1+1=1</li>
      </ul>

      <h4>3. NOT Gate (Inverter)</h4>
      <p>The output is the <strong>opposite</strong> of the input.</p>
      <ul>
        <li>Symbol: Ā or ~A</li>
        <li>Truth Table: ~0=1, ~1=0</li>
      </ul>

      <h4>4. NAND Gate</h4>
      <p>A combination of AND + NOT. Output is LOW only when all inputs are HIGH.</p>
      <p><em>Fun fact: NAND gates are "universal" — any other gate can be built using only NAND gates!</em></p>

      <h4>5. NOR Gate</h4>
      <p>A combination of OR + NOT. Output is HIGH only when all inputs are LOW.</p>

      <h4>6. XOR Gate (Exclusive OR)</h4>
      <p>Output is HIGH when inputs are <strong>different</strong>.</p>
      <ul>
        <li>Truth Table: 0⊕0=0, 0⊕1=1, 1⊕0=1, 1⊕1=0</li>
      </ul>

      <h4>7. XNOR Gate (Exclusive NOR)</h4>
      <p>Output is HIGH when inputs are the <strong>same</strong>.</p>

      <h3>Real-World Applications</h3>
      <ul>
        <li><strong>Adders</strong> — XOR gates are used in binary addition circuits</li>
        <li><strong>Memory</strong> — Flip-flops use NAND or NOR gates to store data</li>
        <li><strong>CPUs</strong> — Billions of logic gates work together in modern processors</li>
        <li><strong>Encryption</strong> — XOR operations are fundamental to many encryption algorithms</li>
      </ul>

      <h3>Try It Yourself</h3>
      <p>Use our <a href="/calculators/scientific-calculator" class="text-primary hover:underline">Scientific Calculator</a> to experiment with boolean operations, or check out the <a href="/tables/periodic-table" class="text-primary hover:underline">Periodic Table</a> for more reference materials.</p>
    `
  },
  {
    slug: 'what-is-ohms-law',
    title: "Understanding Ohm's Law",
    description: "The fundamental relationship between voltage, current, and resistance explained.",
    category: 'Electronics',
    icon: '⚡',
    content: `
      <h2>What is Ohm's Law?</h2>
      <p><strong>Ohm's Law</strong> is one of the most fundamental principles in electrical engineering. Named after German physicist <em>Georg Simon Ohm</em>, it describes the relationship between voltage (V), current (I), and resistance (R) in an electrical circuit.</p>

      <figure class="my-6">
        <div class="w-full max-w-full sm:max-w-sm md:max-w-md mx-auto rounded-lg border bg-white p-6 text-center">
          <div class="text-6xl font-bold text-blue-600 mb-4">V = I × R</div>
          <div class="grid grid-cols-3 gap-4 text-sm">
            <div class="p-3 bg-blue-50 rounded"><strong>V</strong><br/>Voltage</div>
            <div class="p-3 bg-green-50 rounded"><strong>I</strong><br/>Current</div>
            <div class="p-3 bg-orange-50 rounded"><strong>R</strong><br/>Resistance</div>
          </div>
        </div>
        <figcaption class="text-center text-sm text-muted-foreground mt-2">The Ohm's Law Triangle — cover what you want to find!</figcaption>
      </figure>

      <h3>The Formula</h3>
      <div class="bg-secondary/30 p-6 rounded-lg text-center my-6">
        <p class="text-3xl font-mono font-bold">V = I × R</p>
        <p class="text-sm text-muted-foreground mt-2">Voltage = Current × Resistance</p>
      </div>

      <h3>Understanding the Variables</h3>
      <table class="w-full border-collapse my-6">
        <thead>
          <tr class="bg-secondary">
            <th class="border p-3 text-left">Symbol</th>
            <th class="border p-3 text-left">Name</th>
            <th class="border p-3 text-left">Unit</th>
            <th class="border p-3 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border p-3 font-bold">V</td>
            <td class="border p-3">Voltage</td>
            <td class="border p-3">Volts (V)</td>
            <td class="border p-3">The electrical "pressure" pushing electrons through a circuit</td>
          </tr>
          <tr>
            <td class="border p-3 font-bold">I</td>
            <td class="border p-3">Current</td>
            <td class="border p-3">Amperes (A)</td>
            <td class="border p-3">The flow rate of electrons through the circuit</td>
          </tr>
          <tr>
            <td class="border p-3 font-bold">R</td>
            <td class="border p-3">Resistance</td>
            <td class="border p-3">Ohms (Ω)</td>
            <td class="border p-3">How much the circuit opposes the flow of current</td>
          </tr>
        </tbody>
      </table>

      <h3>Rearranged Formulas</h3>
      <ul>
        <li><strong>Find Current:</strong> I = V / R</li>
        <li><strong>Find Resistance:</strong> R = V / I</li>
        <li><strong>Find Voltage:</strong> V = I × R</li>
      </ul>

      <h3>Practical Examples</h3>
      
      <h4>Example 1: LED Circuit</h4>
      <p>You have a 9V battery and want to power an LED that needs 20mA (0.02A). What resistor do you need?</p>
      <div class="bg-secondary/30 p-4 rounded-lg my-4">
        <p>R = V / I = 9V / 0.02A = <strong>450Ω</strong></p>
        <p class="text-sm text-muted-foreground">Use a 470Ω resistor (nearest standard value)</p>
      </div>

      <h4>Example 2: Household Circuit</h4>
      <p>A 100W light bulb on a 120V circuit draws how much current?</p>
      <div class="bg-secondary/30 p-4 rounded-lg my-4">
        <p>P = V × I, so I = P / V = 100W / 120V = <strong>0.83A</strong></p>
      </div>

      <h3>Related Tools</h3>
      <ul>
        <li><a href="/converters/electrical" class="text-primary hover:underline">Electrical Calculators</a></li>
        <li><a href="/tables/resistor-color-code-calculator" class="text-primary hover:underline">Resistor Color Code Calculator</a></li>
      </ul>
    `
  },
  {
    slug: 'resistor-color-codes',
    title: 'Resistor Color Code Guide',
    description: 'Learn to read resistor values using the colored bands.',
    category: 'Electronics',
    icon: '🔴',
    content: `
      <h2>Reading Resistor Color Codes</h2>
      <p>Resistors use colored bands to indicate their resistance value. This system allows manufacturers to mark small components that would be impossible to print numbers on.</p>

      <figure class="my-6">
        <div class="w-full max-w-full sm:max-w-md md:max-w-lg mx-auto rounded-lg border bg-white p-4">
          <div class="flex items-center justify-center gap-1">
            <div class="h-8 w-16 bg-amber-100 rounded-l-full"></div>
            <div class="h-8 w-3 bg-amber-600"></div>
            <div class="h-8 w-3 bg-green-600"></div>
            <div class="h-8 w-3 bg-red-600"></div>
            <div class="h-8 w-6"></div>
            <div class="h-8 w-3 bg-yellow-500"></div>
            <div class="h-8 w-16 bg-amber-100 rounded-r-full"></div>
          </div>
          <div class="text-center mt-3 text-sm text-gray-600">Example: Brown-Green-Red-Gold = 1500Ω ±5%</div>
        </div>
        <figcaption class="text-center text-sm text-muted-foreground mt-2">Resistor with color bands</figcaption>
      </figure>

      <h3>Color Code Chart</h3>
      <table class="w-full border-collapse my-6 text-sm">
        <thead>
          <tr class="bg-secondary">
            <th class="border p-2">Color</th>
            <th class="border p-2">Digit</th>
            <th class="border p-2">Multiplier</th>
            <th class="border p-2">Tolerance</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="border p-2" style="background:#000;color:#fff">Black</td><td class="border p-2">0</td><td class="border p-2">×1</td><td class="border p-2">—</td></tr>
          <tr><td class="border p-2" style="background:#8B4513;color:#fff">Brown</td><td class="border p-2">1</td><td class="border p-2">×10</td><td class="border p-2">±1%</td></tr>
          <tr><td class="border p-2" style="background:#f00;color:#fff">Red</td><td class="border p-2">2</td><td class="border p-2">×100</td><td class="border p-2">±2%</td></tr>
          <tr><td class="border p-2" style="background:#ffa500">Orange</td><td class="border p-2">3</td><td class="border p-2">×1K</td><td class="border p-2">—</td></tr>
          <tr><td class="border p-2" style="background:#ff0">Yellow</td><td class="border p-2">4</td><td class="border p-2">×10K</td><td class="border p-2">—</td></tr>
          <tr><td class="border p-2" style="background:#0f0">Green</td><td class="border p-2">5</td><td class="border p-2">×100K</td><td class="border p-2">±0.5%</td></tr>
          <tr><td class="border p-2" style="background:#00f;color:#fff">Blue</td><td class="border p-2">6</td><td class="border p-2">×1M</td><td class="border p-2">±0.25%</td></tr>
          <tr><td class="border p-2" style="background:#8B008B;color:#fff">Violet</td><td class="border p-2">7</td><td class="border p-2">×10M</td><td class="border p-2">±0.1%</td></tr>
          <tr><td class="border p-2" style="background:#808080;color:#fff">Gray</td><td class="border p-2">8</td><td class="border p-2">—</td><td class="border p-2">±0.05%</td></tr>
          <tr><td class="border p-2" style="background:#fff">White</td><td class="border p-2">9</td><td class="border p-2">—</td><td class="border p-2">—</td></tr>
          <tr><td class="border p-2" style="background:gold">Gold</td><td class="border p-2">—</td><td class="border p-2">×0.1</td><td class="border p-2">±5%</td></tr>
          <tr><td class="border p-2" style="background:silver">Silver</td><td class="border p-2">—</td><td class="border p-2">×0.01</td><td class="border p-2">±10%</td></tr>
        </tbody>
      </table>

      <h3>Mnemonic to Remember</h3>
      <p class="bg-secondary/30 p-4 rounded-lg italic">"<strong>B</strong>etter <strong>B</strong>e <strong>R</strong>ight <strong>O</strong>r <strong>Y</strong>our <strong>G</strong>reat <strong>B</strong>ig <strong>V</strong>enture <strong>G</strong>oes <strong>W</strong>rong"</p>
      <p class="text-sm text-muted-foreground">(Black, Brown, Red, Orange, Yellow, Green, Blue, Violet, Gray, White)</p>

      <h3>Try Our Calculator</h3>
      <p>Use our <a href="/tables/resistor-color-code-calculator" class="text-primary hover:underline">Resistor Color Code Calculator</a> to quickly decode any resistor!</p>
    `
  },

  // ===== MATH =====
  {
    slug: 'percentage-basics',
    title: 'How to Calculate Percentages',
    description: 'A complete guide to percentage calculations with practical examples.',
    category: 'Math',
    icon: '💯',
    content: `
      <h2>What is a Percentage?</h2>
      <p>A <strong>percentage</strong> is a way of expressing a number as a fraction of 100. The word comes from the Latin "<em>per centum</em>," meaning "by the hundred." The symbol <strong>%</strong> represents percentages.</p>

      <h3>The Basic Formula</h3>
      <div class="bg-secondary/30 p-6 rounded-lg text-center my-6">
        <p class="text-2xl font-mono font-bold">Percentage = (Part / Whole) × 100</p>
      </div>

      <h3>Common Percentage Calculations</h3>

      <h4>1. Finding a Percentage of a Number</h4>
      <p><strong>Example:</strong> What is 25% of 80?</p>
      <div class="bg-secondary/30 p-4 rounded-lg my-4">
        <p>25% of 80 = (25/100) × 80 = 0.25 × 80 = <strong>20</strong></p>
      </div>

      <h4>2. Finding What Percentage One Number is of Another</h4>
      <p><strong>Example:</strong> 15 is what percent of 60?</p>
      <div class="bg-secondary/30 p-4 rounded-lg my-4">
        <p>(15 / 60) × 100 = 0.25 × 100 = <strong>25%</strong></p>
      </div>

      <h4>3. Percentage Increase</h4>
      <p><strong>Formula:</strong> ((New - Old) / Old) × 100</p>
      <p><strong>Example:</strong> Price increased from $40 to $50</p>
      <div class="bg-secondary/30 p-4 rounded-lg my-4">
        <p>((50 - 40) / 40) × 100 = (10/40) × 100 = <strong>25% increase</strong></p>
      </div>

      <h4>4. Percentage Decrease</h4>
      <p><strong>Example:</strong> Price dropped from $100 to $75</p>
      <div class="bg-secondary/30 p-4 rounded-lg my-4">
        <p>((100 - 75) / 100) × 100 = <strong>25% decrease</strong></p>
      </div>

      <h3>Quick Mental Math Tips</h3>
      <ul>
        <li><strong>10%</strong> — Divide by 10 (move decimal left)</li>
        <li><strong>5%</strong> — Half of 10%</li>
        <li><strong>25%</strong> — Divide by 4</li>
        <li><strong>50%</strong> — Divide by 2</li>
        <li><strong>1%</strong> — Divide by 100</li>
      </ul>

      <h3>Use Our Calculator</h3>
      <p>Try our <a href="/calculators/percentage-calculator" class="text-primary hover:underline">Percentage Calculator</a> for quick calculations!</p>
    `
  },
  {
    slug: 'unit-conversion-guide',
    title: 'Complete Unit Conversion Guide',
    description: 'Master conversions between metric and imperial units.',
    category: 'Math',
    icon: '📏',
    content: `
      <h2>Unit Conversion Made Easy</h2>
      <p>Converting between units is essential in science, engineering, cooking, and everyday life. This guide covers the most common conversions you'll encounter.</p>

      <h3>Length Conversions</h3>
      <table class="w-full border-collapse my-6">
        <thead>
          <tr class="bg-secondary">
            <th class="border p-3">From</th>
            <th class="border p-3">To</th>
            <th class="border p-3">Multiply by</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="border p-3">Inches</td><td class="border p-3">Centimeters</td><td class="border p-3 font-mono">2.54</td></tr>
          <tr><td class="border p-3">Feet</td><td class="border p-3">Meters</td><td class="border p-3 font-mono">0.3048</td></tr>
          <tr><td class="border p-3">Yards</td><td class="border p-3">Meters</td><td class="border p-3 font-mono">0.9144</td></tr>
          <tr><td class="border p-3">Miles</td><td class="border p-3">Kilometers</td><td class="border p-3 font-mono">1.609</td></tr>
          <tr><td class="border p-3">Centimeters</td><td class="border p-3">Inches</td><td class="border p-3 font-mono">0.3937</td></tr>
          <tr><td class="border p-3">Meters</td><td class="border p-3">Feet</td><td class="border p-3 font-mono">3.281</td></tr>
        </tbody>
      </table>

      <h3>Weight/Mass Conversions</h3>
      <table class="w-full border-collapse my-6">
        <thead>
          <tr class="bg-secondary">
            <th class="border p-3">From</th>
            <th class="border p-3">To</th>
            <th class="border p-3">Multiply by</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="border p-3">Pounds</td><td class="border p-3">Kilograms</td><td class="border p-3 font-mono">0.4536</td></tr>
          <tr><td class="border p-3">Ounces</td><td class="border p-3">Grams</td><td class="border p-3 font-mono">28.35</td></tr>
          <tr><td class="border p-3">Kilograms</td><td class="border p-3">Pounds</td><td class="border p-3 font-mono">2.205</td></tr>
          <tr><td class="border p-3">Grams</td><td class="border p-3">Ounces</td><td class="border p-3 font-mono">0.03527</td></tr>
        </tbody>
      </table>

      <h3>Temperature Conversions</h3>
      <div class="bg-secondary/30 p-6 rounded-lg my-6">
        <p class="font-bold mb-2">Celsius to Fahrenheit:</p>
        <p class="font-mono text-lg">°F = (°C × 9/5) + 32</p>
        
        <p class="font-bold mb-2 mt-4">Fahrenheit to Celsius:</p>
        <p class="font-mono text-lg">°C = (°F - 32) × 5/9</p>
      </div>

      <h3>Quick Reference Points</h3>
      <ul>
        <li>Water freezes: 0°C = 32°F</li>
        <li>Water boils: 100°C = 212°F</li>
        <li>Room temperature: ~20°C = ~68°F</li>
        <li>Body temperature: 37°C = 98.6°F</li>
      </ul>

      <h3>Convert Now</h3>
      <p>Use our <a href="/converters" class="text-primary hover:underline">Unit Converters</a> to convert any unit instantly!</p>
    `
  },
  {
    slug: 'logarithm-guide',
    title: 'Understanding Logarithms',
    description: 'Learn what logarithms are and how to use them.',
    category: 'Math',
    icon: '📊',
    content: `
      <h2>What is a Logarithm?</h2>
      <p>A <strong>logarithm</strong> is the inverse of exponentiation. If you know that b<sup>x</sup> = y, then log<sub>b</sub>(y) = x. In simple terms, a logarithm answers: "To what power must I raise the base to get this number?"</p>

      <h3>The Two Common Logarithms</h3>
      
      <h4>Common Logarithm (log₁₀ or just "log")</h4>
      <p>Uses base 10. Commonly used in chemistry (pH), earthquake measurement (Richter scale), and sound (decibels).</p>
      <ul>
        <li>log(10) = 1 (because 10¹ = 10)</li>
        <li>log(100) = 2 (because 10² = 100)</li>
        <li>log(1000) = 3 (because 10³ = 1000)</li>
      </ul>

      <h4>Natural Logarithm (ln)</h4>
      <p>Uses base e ≈ 2.71828. Essential in calculus, physics, and exponential growth/decay problems.</p>
      <ul>
        <li>ln(e) = 1</li>
        <li>ln(1) = 0</li>
        <li>ln(e²) = 2</li>
      </ul>

      <h3>Key Logarithm Rules</h3>
      <table class="w-full border-collapse my-6">
        <thead>
          <tr class="bg-secondary">
            <th class="border p-3">Rule</th>
            <th class="border p-3">Formula</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="border p-3">Product Rule</td><td class="border p-3 font-mono">log(ab) = log(a) + log(b)</td></tr>
          <tr><td class="border p-3">Quotient Rule</td><td class="border p-3 font-mono">log(a/b) = log(a) - log(b)</td></tr>
          <tr><td class="border p-3">Power Rule</td><td class="border p-3 font-mono">log(aⁿ) = n × log(a)</td></tr>
          <tr><td class="border p-3">Change of Base</td><td class="border p-3 font-mono">log_b(x) = log(x) / log(b)</td></tr>
        </tbody>
      </table>

      <h3>Reference Table</h3>
      <p>Check out our complete <a href="/tables/logarithm" class="text-primary hover:underline">Logarithm Table</a> for values from 1 to 100!</p>
    `
  },

  // ===== FINANCE =====
  {
    slug: 'compound-interest-explained',
    title: 'Compound Interest Explained',
    description: 'How compound interest works and why it matters for your money.',
    category: 'Finance',
    icon: '💰',
    content: `
      <h2>The Power of Compound Interest</h2>
      <p><strong>Compound interest</strong> is interest calculated on both the initial principal and the accumulated interest from previous periods. Albert Einstein reportedly called it the "eighth wonder of the world."</p>

      <h3>The Compound Interest Formula</h3>
      <div class="bg-secondary/30 p-6 rounded-lg text-center my-6">
        <p class="text-2xl font-mono font-bold">A = P(1 + r/n)<sup>nt</sup></p>
      </div>

      <h3>Understanding the Variables</h3>
      <table class="w-full border-collapse my-6">
        <thead>
          <tr class="bg-secondary">
            <th class="border p-3">Variable</th>
            <th class="border p-3">Meaning</th>
            <th class="border p-3">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="border p-3 font-bold">A</td><td class="border p-3">Final amount</td><td class="border p-3">What you end up with</td></tr>
          <tr><td class="border p-3 font-bold">P</td><td class="border p-3">Principal</td><td class="border p-3">$1,000 initial investment</td></tr>
          <tr><td class="border p-3 font-bold">r</td><td class="border p-3">Annual interest rate (decimal)</td><td class="border p-3">5% = 0.05</td></tr>
          <tr><td class="border p-3 font-bold">n</td><td class="border p-3">Times compounded per year</td><td class="border p-3">12 for monthly</td></tr>
          <tr><td class="border p-3 font-bold">t</td><td class="border p-3">Time in years</td><td class="border p-3">10 years</td></tr>
        </tbody>
      </table>

      <h3>Example Calculation</h3>
      <p>$1,000 invested at 5% annual interest, compounded monthly, for 10 years:</p>
      <div class="bg-secondary/30 p-4 rounded-lg my-4">
        <p>A = 1000(1 + 0.05/12)<sup>12×10</sup></p>
        <p>A = 1000(1.00417)<sup>120</sup></p>
        <p>A = <strong>$1,647.01</strong></p>
      </div>
      <p class="text-sm text-muted-foreground">That's $647.01 in interest — more than you'd get with simple interest!</p>

      <h3>The Rule of 72</h3>
      <p>A quick way to estimate how long it takes to double your money:</p>
      <div class="bg-secondary/30 p-6 rounded-lg text-center my-6">
        <p class="text-xl font-mono font-bold">Years to Double ≈ 72 / Interest Rate</p>
      </div>
      <p>At 6% interest, your money doubles in about 72/6 = <strong>12 years</strong>.</p>

      <h3>Calculate Your Returns</h3>
      <p>Try our <a href="/calculators/compound-interest-calculator" class="text-primary hover:underline">Compound Interest Calculator</a>!</p>
    `
  },
  {
    slug: 'simple-vs-compound-interest',
    title: 'Simple vs Compound Interest',
    description: 'Understand the difference and why it matters.',
    category: 'Finance',
    icon: '📈',
    content: `
      <h2>Simple Interest vs Compound Interest</h2>
      <p>Understanding the difference between these two types of interest is crucial for making smart financial decisions.</p>

      <h3>Simple Interest</h3>
      <p>Interest calculated only on the original principal amount.</p>
      <div class="bg-secondary/30 p-6 rounded-lg text-center my-6">
        <p class="text-xl font-mono font-bold">I = P × r × t</p>
        <p class="text-sm text-muted-foreground mt-2">Interest = Principal × Rate × Time</p>
      </div>

      <h3>Compound Interest</h3>
      <p>Interest calculated on principal + accumulated interest.</p>
      <div class="bg-secondary/30 p-6 rounded-lg text-center my-6">
        <p class="text-xl font-mono font-bold">A = P(1 + r/n)<sup>nt</sup></p>
      </div>

      <h3>Comparison Example</h3>
      <p><strong>$10,000 at 5% for 10 years:</strong></p>
      <table class="w-full border-collapse my-6">
        <thead>
          <tr class="bg-secondary">
            <th class="border p-3">Type</th>
            <th class="border p-3">Final Amount</th>
            <th class="border p-3">Interest Earned</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="border p-3">Simple Interest</td><td class="border p-3">$15,000</td><td class="border p-3">$5,000</td></tr>
          <tr><td class="border p-3">Compound (annually)</td><td class="border p-3">$16,289</td><td class="border p-3">$6,289</td></tr>
          <tr><td class="border p-3">Compound (monthly)</td><td class="border p-3">$16,470</td><td class="border p-3">$6,470</td></tr>
        </tbody>
      </table>

      <h3>When Each is Used</h3>
      <ul>
        <li><strong>Simple Interest:</strong> Short-term loans, some car loans, bonds</li>
        <li><strong>Compound Interest:</strong> Savings accounts, credit cards, mortgages, investments</li>
      </ul>

      <h3>Related Calculators</h3>
      <ul>
        <li><a href="/calculators/simple-interest-calculator" class="text-primary hover:underline">Simple Interest Calculator</a></li>
        <li><a href="/calculators/compound-interest-calculator" class="text-primary hover:underline">Compound Interest Calculator</a></li>
      </ul>
    `
  },
];

// Group resources by category
export function getResourcesByCategory() {
  const grouped: Record<string, typeof resourcesList> = {};
  resourcesList.forEach(resource => {
    const category = resource.category || 'General';
    if (!grouped[category]) {
      grouped[category] = [];
    }
    grouped[category].push(resource);
  });
  return grouped;
}