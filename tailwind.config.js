/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans"],
        raleway: ["Raleway", "sans"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("autoprefixer"),
    require("tailwindcss")],
};
