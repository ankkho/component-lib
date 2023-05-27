/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["node_modules/preline/dist/*.js", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [require("preline/plugin")],
};
