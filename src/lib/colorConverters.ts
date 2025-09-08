// src/lib/colorConverters.ts
// A simple example for Hex to RGB
export const hexToRgb = (hex: string): string => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return 'Invalid Hex';
  const rgb = {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  };
  return `RGB(${rgb.r}, ${rgb.g}, ${rgb.b})`;
};

// You will need to implement the other functions yourself.
// e.g., export const rgbToHex = (rgb: string) => { ... }
// e.g., export const rgbToHsl = (rgb: string) => { ... }
// e.g., export const cmykToRgb = (cmyk: string) => { ... }