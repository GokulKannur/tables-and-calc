/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#3a0a4d",
          purple: "#711d9a",
          pink: "#a42db4",
          gold: "#f9c54e",
        },
      },
      fontFamily: {
        punk: ['"Press Start 2P"', 'cursive'],
      },
    },
  },
  plugins: [],
};
