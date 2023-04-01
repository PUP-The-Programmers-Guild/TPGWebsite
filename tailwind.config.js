const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tpgTitle: ['var(--font-neptune)',],
        pupTitle: ['var(--font-optimusPrinceps'],
        heading: ['var(--font-centuryGothic)',],
        title: ['var(--font-centuryGothic)',],
        twcentmt: ['var(--font-twCenMt)',],
        biko: ['var(--font-biko'],
        body: ['var(--font-karla)',],
      }
    },
    variants: {
      display: ['responsive', 'group-hover', 'group-focus'],
    }
  },
  plugins: [require("tailwind-gradient-mask-image")],
}
