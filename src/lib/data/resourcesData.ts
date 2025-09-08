// src/lib/data/resourcesData.ts
import type { ResourceListItem } from '../types'; // ✨ FIX: Import the new, correct type

export const resourcesList: ResourceListItem[] = [
  {
    slug: 'what-are-logic-gates',
    title: 'What Are Logic Gates?',
    description: 'An introduction to the fundamental building blocks of digital circuits.',
    content: `
        <h2>Introduction to Logic Gates</h2>
        <p>A logic gate is an idealized or physical device implementing a Boolean function, a logical operation performed on one or more binary inputs that produces a single binary output.</p>
        <h3>Types of Logic Gates:</h3>
        <ul>
            <li><strong>AND Gate:</strong> The output is true only if both inputs are true.</li>
            <li><strong>OR Gate:</strong> The output is true if at least one of the inputs is true.</li>
            <li><strong>NOT Gate:</strong> The output is the inverse of the input.</li>
        </ul>
    `
  },
  {
    slug: 'what-is-ohms-law',
    title: "What is Ohm's Law?",
    description: "Learn about the relationship between voltage, current, and resistance.",
    content: `
        <h2>Understanding Ohm's Law</h2>
        <p>Ohm's law states that the current through a conductor between two points is directly proportional to the voltage across the two points.</p>
        <h3>The Formula</h3>
        <p><strong>V = I × R</strong></p>
        <ul>
            <li><strong>V</strong> is the voltage in volts (V).</li>
            <li><strong>I</strong> is the current in amperes (A).</li>
            <li><strong>R</strong> is the resistance in ohms (Ω).</li>
        </ul>
    `
  },
];