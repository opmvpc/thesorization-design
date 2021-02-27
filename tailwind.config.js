const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gray: colors.blueGray,
      red: colors.red,
      blue: colors.lightBlue,
      yellow: colors.amber,
      indigo: colors.indigo,
      teal: colors.teal,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
