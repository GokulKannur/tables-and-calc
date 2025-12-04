"use client";

import { useState, useMemo, ChangeEvent } from "react";

// --- TYPE DEFINITIONS ---
type RGB = { r: number; g: number; b: number };
type HSL = { h: number; s: number; l: number };
type CMYK = { c: number; m: number; y: number; k: number };
type ColorFormat = "Hex" | "RGB" | "HSL" | "CMYK";

// --- PARSERS (String -> Object) ---
const parse = {
  Hex: (hex: string): RGB | null => {
    const h = hex.replace("#", "").trim();
    if (!/^[0-9A-Fa-f]{6}$/.test(h)) return null;
    const bigint = parseInt(h, 16);
    return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
  },
  RGB: (rgbStr: string): RGB | null => {
    const match = rgbStr.match(/(\d+)[, ]+(\d+)[, ]+(\d+)/);
    if (!match) return null;
    const [_match, r, g, b] = match.map(Number);
    if ([r, g, b].some(v => v < 0 || v > 255)) return null;
    return { r, g, b };
  },
  HSL: (hslStr: string): HSL | null => {
    const match = hslStr.match(/(\d+)[, ]+(\d+)[, ]+(\d+)/);
    if (!match) return null;
    const [_match, h, s, l] = match.map(Number);
    if (h < 0 || h > 360 || s < 0 || s > 100 || l < 0 || l > 100) return null;
    return { h, s, l };
  },
  CMYK: (cmykStr: string): CMYK | null => {
    const match = cmykStr.match(/(\d+)[, ]+(\d+)[, ]+(\d+)[, ]+(\d+)/);
    if (!match) return null;
    const [_match, c, m, y, k] = match.map(Number);
    if ([c, m, y, k].some(v => v < 0 || v > 100)) return null;
    return { c, m, y, k };
  }
};

// --- CONVERTERS (Object -> Object) ---
const convert = {
  rgbToHex: ({ r, g, b }: RGB): string => {
    return "#" + [r, g, b].map(v => Math.round(v).toString(16).padStart(2, '0')).join("");
  },
  rgbToHsl: ({ r, g, b }: RGB): HSL => {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0;
    const l = (max + min) / 2;
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
  },
  hslToRgb: ({ h, s, l }: HSL): RGB => {
    s /= 100; l /= 100;
    const k = (n: number) => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return { r: Math.round(255 * f(0)), g: Math.round(255 * f(8)), b: Math.round(255 * f(4)) };
  },
  rgbToCmyk: ({ r, g, b }: RGB): CMYK => {
    if (r === 0 && g === 0 && b === 0) return { c: 0, m: 0, y: 0, k: 100 };
    let c = 1 - (r / 255);
    let m = 1 - (g / 255);
    let y = 1 - (b / 255);
    const k = Math.min(c, m, y);
    c = (c - k) / (1 - k);
    m = (m - k) / (1 - k);
    y = (y - k) / (1 - k);
    return { c: Math.round(c * 100), m: Math.round(m * 100), y: Math.round(y * 100), k: Math.round(k * 100) };
  },
  cmykToRgb: ({ c, m, y, k }: CMYK): RGB => {
    c /= 100; m /= 100; y /= 100; k /= 100;
    const r = 255 * (1 - c) * (1 - k);
    const g = 255 * (1 - m) * (1 - k);
    const b = 255 * (1 - y) * (1 - k);
    return { r: Math.round(r), g: Math.round(g), b: Math.round(b) };
  },
};

// --- FORMATTERS (Object -> String) ---
const format = {
  Hex: (rgb: RGB): string => convert.rgbToHex(rgb),
  RGB: (rgb: RGB): string => `${rgb.r}, ${rgb.g}, ${rgb.b}`,
  HSL: (hsl: HSL): string => `${hsl.h}, ${hsl.s}, ${hsl.l}`,
  CMYK: (cmyk: CMYK): string => `${cmyk.c}, ${cmyk.m}, ${cmyk.y}, ${cmyk.k}`,
};

const COLOR_FORMATS: ColorFormat[] = ["Hex", "RGB", "HSL", "CMYK"];

const POPULAR_CONVERSIONS = [
  { from: "Hex" as ColorFormat, to: "RGB" as ColorFormat, example: "#1a8fe3" },
  { from: "RGB" as ColorFormat, to: "Hex" as ColorFormat, example: "26, 143, 227" },
  { from: "RGB" as ColorFormat, to: "HSL" as ColorFormat, example: "227, 26, 88" },
];

// --- COMPONENT ---
export default function ColorConverter() {
  const [fromType, setFromType] = useState<ColorFormat>("Hex");
  const [toType, setToType] = useState<ColorFormat>("RGB");
  const [inputValue, setInputValue] = useState("#1a8fe3");

  const sourceRgb = useMemo((): RGB | null => {
    const parsedValue = parse[fromType](inputValue);
    if (!parsedValue) return null;

    switch (fromType) {
      case "Hex":
      case "RGB":
        return parsedValue as RGB;
      case "HSL":
        return convert.hslToRgb(parsedValue as HSL);
      case "CMYK":
        return convert.cmykToRgb(parsedValue as CMYK);
      default:
        return null;
    }
  }, [inputValue, fromType]);

  const outputValue = useMemo((): string => {
    if (!sourceRgb) return "Invalid color value";

    switch (toType) {
      case "Hex": return format.Hex(sourceRgb);
      case "RGB": return format.RGB(sourceRgb);
      case "HSL": return format.HSL(convert.rgbToHsl(sourceRgb));
      case "CMYK": return format.CMYK(convert.rgbToCmyk(sourceRgb));
      default: return "Conversion not available";
    }
  }, [sourceRgb, toType]);

  const displayColor = useMemo((): string => {
    return sourceRgb ? convert.rgbToHex(sourceRgb) : "#ffffff";
  }, [sourceRgb]);

  const handleSwap = () => {
    setFromType(toType);
    setToType(fromType);
    if (sourceRgb) {
      setInputValue(outputValue);
    }
  };

  const setPopular = (from: ColorFormat, to: ColorFormat, example: string) => {
    setFromType(from);
    setToType(to);
    setInputValue(example);
  };

  const handleColorPickerChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setFromType("Hex");
  };

  return (
    <div className="p-4 border rounded-lg shadow-sm space-y-4">
      {/* From Section */}
      <div className="flex items-end gap-2">
        <div className="flex-grow">
          <label className="text-sm font-medium text-gray-700">From</label>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full p-2 mt-1 border rounded"
            placeholder={fromType === 'RGB' ? 'e.g., 255, 99, 71' : '#ff6347'}
          />
        </div>
        <div>
          <select
            value={fromType}
            onChange={(e) => setFromType(e.target.value as ColorFormat)}
            className="p-2 border rounded h-[42px]"
          >
            {COLOR_FORMATS.map((f) => <option key={f} value={f}>{f}</option>)}
          </select>
        </div>
      </div>

      <div className="flex justify-center -my-2">
          <button onClick={handleSwap} className="p-1 rounded-full hover:bg-gray-200" title="Swap formats">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
          </button>
      </div>

      {/* To Section */}
      <div className="flex items-end gap-2">
        <div className="flex-grow">
          <label className="text-sm font-medium text-gray-700">To</label>
          <input
            value={outputValue}
            readOnly
            className="w-full p-2 mt-1 bg-gray-100 border rounded cursor-not-allowed"
          />
        </div>
        <div>
          <select
            value={toType}
            onChange={(e) => setToType(e.target.value as ColorFormat)}
            className="p-2 border rounded h-[42px]"
          >
            {COLOR_FORMATS.map((f) => <option key={f} value={f}>{f}</option>)}
          </select>
        </div>
      </div>
      
      {/* Visual Color Picker */}
      <div>
        <label className="text-sm font-medium text-gray-700">Visual Picker</label>
        <input
          type="color"
          value={displayColor}
          onChange={handleColorPickerChange}
          className="w-full h-10 p-1 mt-1 border rounded cursor-pointer"
        />
      </div>

      {/* Color Preview Swatch */}
      <div className="h-12 w-full rounded border" style={{ backgroundColor: displayColor }} />

      <div className="p-4 border rounded-lg shadow-sm -m-4 mt-6">
        <h3 className="font-semibold">Popular Color Conversions</h3>
        <div className="flex flex-wrap items-center gap-4 mt-2 text-blue-600">
          {POPULAR_CONVERSIONS.map(({ from, to, example }) => (
            <button key={`${from}-${to}`} onClick={() => setPopular(from, to, example)} className="hover:underline">
              {from} To {to}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}