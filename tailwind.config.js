/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: {
            bg: "#e9d8fd",
            text: "#6b46c1",
          },
          dark: {
            bg: "#2c7a7b1a",
            text: "#4fd1c5",
          },
        },
      },
      textColor: {
        light: "#1a202c",
        dark: "#e2e8f0",
      },
      backgroundColor: {
        light: "#f4f2ee",
        dark: "#0f172a",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
