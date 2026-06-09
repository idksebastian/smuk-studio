/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: '#F5F0E8',
        linen: '#EDE5D8',
        sand: '#D9CEBA',
        stone: '#B8A99A',
        mink: '#7C6A5E',
        ink: '#2C2420',
      },
      fontFamily: {
        display: ['"Pinyon Script"', 'cursive'],
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
