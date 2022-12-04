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
          "0%": { width: "240px" },
          "100%": { width: "300px" },
        },
        decreaseWidth: {
          "0%": { width: "300px" },
          "100%": { width: "240px" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
