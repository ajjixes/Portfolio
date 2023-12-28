/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'primary': ['Poppins','sans-serif']
      },
      colors: {
        primary: '#605BFF',
        secondary: '#FFA000',
        soft: '#12192E',
        hard: '#0C1120',
      },
    },
  },
  plugins: [],
}

