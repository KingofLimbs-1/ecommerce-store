/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/*.{html,js}",
    "./public/views/*.{html,js}",
    "./components/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      nichromeFont: ["Nichrome-Regular", "sans"],
      interFont: ["Inter-Regular", "sans"],
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/forms")]
};
