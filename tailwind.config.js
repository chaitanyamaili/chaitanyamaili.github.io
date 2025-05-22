/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Tailwind will scan these files for class names
    "./public/index.html",
  ],
  theme: {
    extend: {
      // Example of customization
      colors: {
        primary: "#1D4ED8", // blue-700
        secondary: "#64748B", // slate-500
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
