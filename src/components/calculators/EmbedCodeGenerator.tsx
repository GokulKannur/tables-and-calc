// src/components/calculators/EmbedCodeGenerator.tsx
"use client"; // This component requires client-side interaction (state, clipboard)

import { useState } from 'react';

interface EmbedCodeGeneratorProps {
  calculatorSlug: string; // The slug of the calculator (e.g., 'percentage-calculator')
  calculatorTitle?: string; // Optional: A more descriptive title for the iframe
}

export function EmbedCodeGenerator({ calculatorSlug, calculatorTitle }: EmbedCodeGeneratorProps) {
  const [copied, setCopied] = useState(false); // State to give feedback on copy action

  // Construct the URL for the embeddable version of the calculator
  const embedUrl = `https://tablesandcalc.online/embed/${calculatorSlug}`; // Make sure domain is correct

  // Define iframe attributes for better default behavior
  const defaultWidth = "100%";
  const defaultHeight = "500"; // Adjust default height as needed
  const iframeTitle = calculatorTitle || `${calculatorSlug.replace(/-/g, ' ')} Calculator`; // Create a default title

  // The HTML code to be copied
  const embedCode = `<iframe \n  src="${embedUrl}" \n  width="${defaultWidth}" \n  height="${defaultHeight}" \n  style="border:1px solid #ccc; border-radius: 8px; max-width: 600px;" \n  frameborder="0" \n  title="${iframeTitle}" \n  loading="lazy"\n></iframe>`;

  // Function to copy the code to the clipboard
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(embedCode);
      setCopied(true);
      // Reset the copied state after a short delay
      setTimeout(() => setCopied(false), 2000); // Show "Copied!" for 2 seconds
    } catch (error) {
      console.error('Failed to copy embed code:', error);
      alert('Failed to copy code. Please copy it manually.'); // Fallback alert
    }
  };

  return (
    // Section container with styling
    <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
      <h3 className="text-xl font-semibold mb-3 text-gray-800">Embed This Calculator</h3>
      <p className="text-sm text-gray-600 mb-4">
        Want to add this calculator to your own website or blog? Copy and paste the code below into your HTML.
      </p>
      {/* Code display area */}
      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto text-sm font-mono shadow-inner">
        <code>
            {embedCode}
        </code>
      </pre>
      {/* Copy button */}
      <button
        onClick={handleCopy}
        className={`mt-4 px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          copied
            ? 'bg-green-600 text-white focus:ring-green-400' // Green when copied
            : 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400' // Blue otherwise
        }`}
        aria-live="polite" // Announce changes for screen readers
      >
        {copied ? '✅ Copied!' : '📋 Copy Embed Code'}
      </button>
    </div>
  );
}