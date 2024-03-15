/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gradient-start": "hsl(249, 99%, 64%)",
        "gradient-end": "hsl(278, 94%, 30%)",
        error: "hsl(0, 100%, 66%)",
        "btn-text": "hsl(270, 3%, 87%)",
        "input-border": "hsl(279, 6%, 55%)",
        btn: "hsl(278, 68%, 11%)",
      },
      fontFamily: {
        default: '"Space Grotesk", sans-serif',
      },
    },
  },
  plugins: [],
};
