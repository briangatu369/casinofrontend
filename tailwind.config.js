/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "var(--green)",
        mainbgColor: "var(--main-bg-color)",
      },
    },
  },
  plugins: [],
};
