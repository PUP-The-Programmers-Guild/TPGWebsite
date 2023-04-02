/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Century Gothic','sans-serif'],
    },
    extend: {},
    variants: {
      display: ['responsive', 'group-hover', 'group-focus'],
    }
  },
  plugins: [require("tailwind-gradient-mask-image")],
}
