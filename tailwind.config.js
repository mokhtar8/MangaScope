/** @type {import('tailwindcss').Config} */
export default {
   darkMode: "class",
  content: [
        "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    
  ],  safelist: [
    "dark:bg-blue-500",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

