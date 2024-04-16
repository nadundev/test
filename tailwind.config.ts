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
        brand: {
          50: "#F3F1EF",
          100: "#E6E3DE",
          200: "#CEC7BE",
          300: "#B5AA9D",
          400: "#9D8E7D",
          500: "#84725C",
          600: "#6A5B4A",
          700: "#4F4437",
          800: "#352E25",
          900: "#1A1712",
        },
      },
      borderColor: {
        header: {
          DEFAULT: "var(--header-border)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
