
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        xl2: '1200px', // your 75rem breakpoint
      },
    },
  },
  plugins: [],
};
