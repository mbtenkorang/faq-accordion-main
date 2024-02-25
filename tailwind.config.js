/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,vue,ts}"],
  theme: {
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        "light-pink": "hsl(275, 100%, 97%)",
        "gray-purple": "hsl(292, 16%, 49%)",
        "dark-purple": "hsl(292, 42%, 14%)",
      },
      fontFamily: {
        primary: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
