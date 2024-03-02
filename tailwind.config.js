/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "inter": "Inter, sans-serif"
      },
      colors: {
        "primary-bg": "#4262FF",
        "secondary-bg": "#02033B",
        "primary-text": "#050038",
        "secondary-text": "#FFC247"
      }
    },
  },
  plugins: [],
}

