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
    },
  },
  plugins: [],
};
