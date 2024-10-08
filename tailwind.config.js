const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
        serif: ["Itim", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        primary: "#FE8D30",
        secondary: "#383838",
        error: "#B00020",
      },
    },
  },
  plugins: [],
};
