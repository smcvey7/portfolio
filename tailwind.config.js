/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f7fb',
          100: '#e9eef7',
          200: '#cfdaf0',
          300: '#a6bde4',
          400: '#5d86cf',
          500: '#3b5db4',
          600: '#2f489e',
          700: '#283c81',
          800: '#243566',
          900: '#212e53',
        },
      },
    },
  },
  plugins: [],
};

