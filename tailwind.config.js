/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff7a57",
        dark: "#2c3e50",
        gray: {
          light: "#f8f9fa",
          dark: "#6c757d",
        },
      },
      animation: {
        typing: "typing 2s steps(10, end) 1s 1 normal both",
        "blink-caret": "blink-caret 0.75s step-end infinite 3s",
        typewriter:
          "typing 2s steps(10, end) 1s 1 normal both, blink-caret 0.75s step-end infinite 3s",
      },
      keyframes: {
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        "blink-caret": {
          "0%, 50%": { borderColor: "transparent" },
          "51%, 100%": { borderColor: "#f97316" },
        },
      },
    },
  },
  plugins: [],
};
