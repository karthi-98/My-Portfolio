/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // bgs: "#f2e9e4",
        bgs: "#f8edeb",
        text: "#22223b",
        hover_text: "#c9ada7",
        yellow: "#ffee32",
        orange: "#ff6b6b",
        gradientyfrom: "#edc531",
      },
    },
    fontFamily: {
      dancing: ["Dancing Script"],
      jost: ["Jost"],
      poppins: ["Poppins"],
    },
  },
  plugins: [],
};
