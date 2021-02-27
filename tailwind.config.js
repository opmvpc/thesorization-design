const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: colors.indigo,
      secondary: colors.teal,
      warning: colors.yellow,
      danger: colors.red,
      transparent: "transparent",
      current: "currentColor",
      gray: colors.blueGray,
      red: colors.red,
      blue: colors.lightBlue,
      yellow: colors.amber,
      indigo: colors.indigo,
      teal: colors.teal
    },
    extend: {
      fontFamily: {
        inter: ["Inter var", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
