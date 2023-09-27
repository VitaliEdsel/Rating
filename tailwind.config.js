/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'very-dark-blue': 'hsl(216, 12%, 8%)',
        'dark-blue': '#222832',
        'medium-gray': 'hsl(216, 12%, 54%)',
        'orange': 'hsl(25, 97%, 53%)'
      },
      fontFamily: {
        overpass: ['Overpass', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

