/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "ligght-blue": "#758bfd",
        "light-purple":"#aeb8fe",
        "orange":"#ff8600",

      }
    },
  },
  plugins: [],
}

