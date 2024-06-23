/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#fff',
      'black': '#000',
      'grey': '#f2f1ec',
      'olive': '#345333',
    },
    extend: {spacing: {
      '11': '5rem',
      '12': '7rem',
      '14': '10rem',
      '16': '12rem',
      '18': '15rem',
  // Example of adding even larger spacing // Adds a new spacing size
    }},
  },
  plugins: [],
};
