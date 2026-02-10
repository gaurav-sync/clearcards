import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1e293b",
          dark: "#0f172a",
        },
        accent: {
          DEFAULT: "#d4a574",
          light: "#e8c9a8",
        },
        neutral: {
          light: "#f8f9fa",
          DEFAULT: "#e2e8f0",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
      },
    },
  },
  plugins: [],
};
export default config;
