/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // This lets you use 'font-proxima' in any className
        proxima: ['"Proxima Nova"', "sans-serif"],
      },
    },
  },
  plugins: [],
};