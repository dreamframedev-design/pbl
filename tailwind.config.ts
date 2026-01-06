import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "!./app/**/node_modules/**",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          navy: "#002776",
        },
        secondary: {
          teal: "#058A9F",
        },
        neutral: {
          steel: "#4C6692",
        },
        accent: {
          cyan: "#00F0F3",
        },
        purple: {
          deep: "#7C3AED",
          professional: "#6D28D9",
        },
        background: {
          white: "#FFFFFF",
          offwhite: "#F4F4F9",
        },
      },
      fontFamily: {
        sans: ['"Open Sauce One"', "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-1": ["4rem", { lineHeight: "1.1", fontWeight: "700" }],
        "display-2": ["3rem", { lineHeight: "1.2", fontWeight: "700" }],
        "heading-1": ["2.5rem", { lineHeight: "1.3", fontWeight: "700" }],
        "heading-2": ["2rem", { lineHeight: "1.4", fontWeight: "700" }],
        "heading-3": ["1.5rem", { lineHeight: "1.5", fontWeight: "500" }],
        body: ["1rem", { lineHeight: "1.6", fontWeight: "300" }],
      },
      borderRadius: {
        xl: "0.75rem",
      },
      spacing: {
        "section": "6rem", // py-24 equivalent
      },
    },
  },
  plugins: [],
};
export default config;

