/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#3cb77e",
        lightGreen: "#cae9d4",
        gray: "#f4f6fa",
       
      },
    },
  },
  plugins: [],
}