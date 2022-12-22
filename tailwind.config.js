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
        fadeInBottom: {
          "0%": { top: "25px", opacity: 0 },
          "100%": { top: "48px", opacity: 1 },
        },
        fadeOutTop: {
          "0%": { top: "48px", opacity: 1 },
          "100%": { top: "25px", opacity: 0 },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
