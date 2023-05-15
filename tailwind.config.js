/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#40A3C0",
        secondary: "#C34D43",
        offWhiteBG: "#fefcf7",
        darkgray: "#444",
        defaultgray: "#777",
        lightgray: "#ddd",
      },
    },
  },
  plugins: [],
};
