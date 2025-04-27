/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,css}",
  ],
  theme: {
    extend: {
      colors: {
        simpsonsYellow: '#fdd835',
        simpsonsRed: '#ef5350',
        simpsonsSky: '#2196f3',
        simpsonsOrange: '#FF9800', // Bart's shirt color
        donutPink: '#F8659F' // Homer's donut pink
      },
      fontFamily: {
        heading: ['"Lilita One"', 'cursive'],
        body: ['Karla', 'sans-serif']
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 0.5s ease-in-out infinite'
      }
    },
  },
  plugins: [],
};
