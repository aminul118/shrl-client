/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "shrl-banner": "url('./src/assets/banner/hero-img-shrl-2.png')",
      },
      fontFamily: {
        tangerine: ["Tangerine", "cursive"],
      },
    },
  },
  plugins: [require("daisyui")],
};
