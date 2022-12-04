/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      nf: ["Kalame-Normal"],
      bf: ["Kalame-Bold"],
    },
    extend: {
      keyframes: {
        increaseWidth: {
          "0%": { width: "200px" },
          "100%": { width: "256px" },
        },
        decreaseWidth: {
          "0%": { width: "256px" },
          "100%": { width: "200px" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
