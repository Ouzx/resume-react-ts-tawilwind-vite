/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: "Pacifico, sans-serif",
      display: "Pacifico, sans-serif",
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./hero-bg.svg')",
      },
      colors: {
        primary: "#06F8B8",
        secondary: "#010101",
      },
    },
  },
  plugins: [],
};
