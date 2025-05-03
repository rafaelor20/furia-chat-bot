/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        furia: {
          black: "#0E0E0E",
          purple: "#6E1EFF",
          accent: "#FF4D00",
        },
      },
    },
  },
  plugins: [],
}
