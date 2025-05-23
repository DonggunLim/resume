/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#64ffda", // 강조색
        text: {
          base: "#1a202c", // 기본 텍스트
          sub: "#4a5568", // 보조 텍스트
          muted: "#718096", // 설명/힌트 텍스트
          link: "#3182ce", // 링크색
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
