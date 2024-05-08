/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        cover_by_grace: ["Covered By Your Grace", "cursive"],
      },
    },
  },
  plugins: [],
};
