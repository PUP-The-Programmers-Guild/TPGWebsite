/** @type {import('tailwindcss').Config} */

export const content = ["./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
    fontFamily: {
        tpgTitle: "var(--font-neptune)",
        pupTitle: "var(--font-optimusPrinceps)",
        heading: "var(--font-centuryGothic)",
        title: "var(--font-centuryGothic)",
        twcentmt: "var(--font-twCenMt)",
        biko: "var(--font-biko)",
        body: "var(--font-karla)",
    },
    extend: {},
    variants: {
        display: ['responsive', 'group-hover', 'group-focus'],
    }
};
export const plugins = [require("tailwind-gradient-mask-image")];
