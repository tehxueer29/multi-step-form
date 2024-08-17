/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F8F9FE",
          100: "#EEF5FF",
          500: "#BDE1FF",
          900: "#03295A",
        },
        secondary: {
          400: "#918DFC",
          500: "#493CFF",
          600: "#504C98",
        },
        grey: {
          500: "#DBDADF",
          600: "#9D9DA5",
        },
        red: {
          500: "#B65161",
          600: "#9E5B64",
        },
      },
    },
  },
  plugins: [],
};
