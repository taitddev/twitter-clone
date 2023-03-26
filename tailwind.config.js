/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lightPrimary: "#FFFFFF",
        lightSecondary: "#F7F7F7",
        darkPrimary: "#000000",
        darkSecondary: "#0F0F0F",
      },
    },
  },
  plugins: [],
};
