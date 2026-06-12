/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        harbor: {
          50: "#f4f8fb",
          100: "#e6eef6",
          500: "#2d6f8f",
          700: "#17445f",
          900: "#102637"
        },
        signal: {
          amber: "#d6a23a",
          coral: "#d5674e",
          mint: "#46a27f"
        }
      },
      boxShadow: {
        soft: "0 18px 45px rgba(16, 38, 55, 0.12)"
      }
    }
  },
  plugins: []
};
