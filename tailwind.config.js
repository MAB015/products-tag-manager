/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#161635',
      bgContent: '#EFF2F6',
      bgPanels: '#F5F7F9',
      accent: '#0566FF',
      'white': '#ffffff'
    }
  },
  plugins: [],
}

