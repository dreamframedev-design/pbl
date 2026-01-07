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
          coral: "#FF6F61",
          skyBlue: "#4A99E4",
        },
        purple: {
          deep: "#7C3AED",
          professional: "#6D28D9",
          lavender: "#EDE6FF",
          periwinkle: "#B7C3F3",
        },
        background: {
          white: "#FFFFFF",
          offwhite: "#F4F4F9",
          lavender: "#EDE6FF",
          periwinkle: "#B7C3F3",
          skyBlue: "#4A99E4",
        },
        charcoal: {
          DEFAULT: "#2A3C4C",
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', '"Open Sauce One"', "system-ui", "sans-serif"],
        display: ['"Open Sauce One"', "system-ui", "sans-serif"],
        body: ['var(--font-inter)', "system-ui", "sans-serif"],
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
      boxShadow: {
        'image': '0 10px 40px -10px rgba(0, 39, 118, 0.15), 0 4px 20px -5px rgba(5, 138, 159, 0.1)',
        'image-lg': '0 20px 60px -15px rgba(0, 39, 118, 0.2), 0 8px 30px -8px rgba(5, 138, 159, 0.15)',
        'cta': '0 4px 20px -5px rgba(5, 138, 159, 0.4), 0 2px 10px -2px rgba(0, 240, 243, 0.3)',
        'cta-hover': '0 8px 30px -8px rgba(5, 138, 159, 0.5), 0 4px 15px -4px rgba(0, 240, 243, 0.4)',
      },
    },
  },
  plugins: [],
};
export default config;

