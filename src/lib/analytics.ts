// src/lib/analytics.ts

// This declares that the window object might have a gtag function,
// which is added by the Google Analytics script.
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

/**
 * Tracks a calculator usage event in Google Analytics.
 * @param calculatorName - The name of the calculator being used (e.g., 'percentage-calculator').
 * @param inputs - An object containing the input values and potentially the result.
 */
export const trackCalculatorUse = (calculatorName: string, inputs: Record<string, any>) => {
  // Check if the code is running in a browser environment and if gtag function exists
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'calculator_use', {
      calculator_name: calculatorName,
      ...inputs, // Spread the input values into the event parameters
    });
     console.log(`GA Event: calculator_use - ${calculatorName}`, inputs); // For debugging
  } else {
     console.log(`GA Event Skipped (gtag not ready): calculator_use - ${calculatorName}`, inputs); // For debugging if gtag isn't loaded
  }
};

/**
 * Tracks a unit conversion event in Google Analytics.
 * @param converterName - The name or category of the converter (e.g., 'length', 'temperature').
 * @param from - The ID of the unit being converted from (e.g., 'm', 'c').
 * @param to - The ID of the unit being converted to (e.g., 'ft', 'f').
 * @param value - The input value being converted.
 */
export const trackConversion = (converterName: string, from: string, to: string, value: number) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion_use', {
      converter_name: converterName,
      from_unit: from,
      to_unit: to,
      input_value: value,
    });
    console.log(`GA Event: conversion_use - ${converterName}`, { from, to, value }); // For debugging
  } else {
    console.log(`GA Event Skipped (gtag not ready): conversion_use - ${converterName}`, { from, to, value }); // For debugging
  }
};

/**
 * Tracks a share event in Google Analytics.
 * @param contentType - The type of content being shared (e.g., 'percentage-calculation', 'bmi-result').
 * @param method - The method used for sharing (e.g., 'web-share', 'clipboard-copy').
 */
export const trackShare = (contentType: string, method: string) => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'share', {
            content_type: contentType,
            method: method,
        });
        console.log(`GA Event: share - ${contentType}`, { method }); // For debugging
    } else {
        console.log(`GA Event Skipped (gtag not ready): share - ${contentType}`, { method }); // For debugging
    }
};

// You can add more tracking functions here as needed (e.g., trackSearch, trackFeedbackSubmit)