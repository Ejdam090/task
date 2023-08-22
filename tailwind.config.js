/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
      },
      colors: {
        cameo: {
          50: "#faf6f2",
          100: "#f3eae1",
          200: "#e6d3c2",
          300: "#dcc1ab",
          400: "#c49273",
          500: "#b87957",
          600: "#aa664c",
          700: "#8e5240",
          800: "#734439",
          900: "#5d3931",
          950: "#321c18",
        },
        "spring-wood": {
          50: "#f5f0ec",
          100: "#f1e9e3",
          200: "#e1d2c7",
          300: "#ceb4a3",
          400: "#b9927e",
          500: "#ab7964",
          600: "#9d6859",
          700: "#83554b",
          800: "#6b4641",
          900: "#573b37",
          950: "#2e1e1c",
        },
      },
    },
    screens: {
      sm: "648px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": " 1536px",
    },
  },
  plugins: [],
};
