/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'myBlue': 'rgb(22, 22, 52)',
        'letsDoIt': 'rgb(123, 104, 224)',
        'bgApropos' : 'rgb(91, 93, 126)',
        'bgFormation' : 'rgb(245, 246, 254)',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}