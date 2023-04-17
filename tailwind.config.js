/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  content: ['./pages/**/*.tsx', './app/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        title: ['var(--font-tilt)', 'sans-serif']
      }
    }
  },
  plugins: []
}
