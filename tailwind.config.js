/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#3a302d',
        light: '#898989',
        sub: '#e9984f',
      },
    },
    fontFamily: {
      sans: ['"Poppins"', 'sans-serif'],
    },
  },
  plugins: [],
}
