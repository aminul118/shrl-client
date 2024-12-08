/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "shrl-banner": "url('./src/assets/banner/hero-img-shrl-2.png')",
        "combined-bg":
          "linear-gradient(to bottom, rgb(255, 255, 255), rgba(255, 255, 255, 0)), url(https://i.ibb.co.com/sHk4sGN/bg2.png)",
        "contact-bg":
          "linear-gradient(to bottom, rgb(255, 255, 255), rgba(255, 255, 255, 0)), url(https://i.ibb.co.com/hg56vwS/bg.jpg)",
      },
      fontFamily: {
        tangerine: ["Tangerine", "cursive"],
      },
    },
  },
  plugins: [require("daisyui")],
};
