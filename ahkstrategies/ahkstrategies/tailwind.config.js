/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#002366',
          light: '#2a4ba0',
          dark: '#001a40'
        },
        accent: {
          DEFAULT: '#fdae28',
          light: '#ffd266',
          dark: '#c78700'
        }
      }
    }
  },
  plugins: []
};