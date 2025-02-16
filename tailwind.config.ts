import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkIndigo: "#2E1C6A",
        indigo: "#673DDB",
        lightIndigo: "#E0D9FF",
        white: "#FFFFFF",
        default: "#4D4D4D",
        black: "#000000",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      textColor: {
        darkIndigo: "#2E1C6A",
        indigo: "#673DDB",
        lightIndigo: "#E0D9FF",
        primary: "#4F46E5",
        secondary: "#EC4899",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        36: "9rem",
      },
      borderRadius: {
        xl: "1rem",
        '2xl': "1.5rem",
        '3xl': "2rem",
      },
      boxShadow: {
        soft: "0 2px 10px rgba(0, 0, 0, 0.1)",
        strong: "0 4px 20px rgba(0, 0, 0, 0.3)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        bounceSlow: {
          "0%, 100%": { transform: "translateY(-10%)" },
          "50%": { transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        bounceSlow: "bounceSlow 2s infinite",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        '2xl': "1536px",
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    }),
  ],
} satisfies Config;
