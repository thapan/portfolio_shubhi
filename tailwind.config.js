/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./Layout.js",
    "./Pages/**/*.{js,jsx,ts,tsx}",
    "./Components/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./Entities/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
