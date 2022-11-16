/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#2F8F9D",
        dark: "#1F2D3D",
        light: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
