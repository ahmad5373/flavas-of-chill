/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          150: "#F5D725",
          250: "#F5D725",
        },
        gray: {
          150: "#e0c007",
          250: "#F5D725",
          350: "#030303"
        }
      }
    },
  },
  plugins: [],
}

