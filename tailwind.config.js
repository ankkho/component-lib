/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["node_modules/preline/dist/*.js", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("preline/plugin")],
};
