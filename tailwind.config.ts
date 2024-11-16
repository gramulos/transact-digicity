import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1080px",
        xl: "1250px",
        "2xl": "1250px",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkBlue: "#2D3845",
      },
      boxShadow: {
        "cta-button": "7px 7px 10px rgba(0,0,0,0.3)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        bannermoveleft: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-50% - (theme(spacing.8) / 2)))",
          },
        },
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
        fadeIn: "fadeIn 300ms ease-out",
        fadeOut: "fadeOut 300ms ease-out",
        left: "bannermoveleft 25s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
