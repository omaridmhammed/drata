import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      colors: {
        clinic: {
          navy: {
            DEFAULT: "#0F1E36", // Deep navy primary
            light: "#1B3154",
            dark: "#070F1E",
          },
          gold: {
            DEFAULT: "#D4AF37", // Soft gold accent
            light: "#E5C060",
            dark: "#AA8822",
          },
          cream: {
            DEFAULT: "#FAF9F6", // Warm premium off-white/cream
            dark: "#FAF6ED",
          },
          slate: {
            DEFAULT: "#475569", // Highly readable slate
            light: "#64748B",
          }
        }
      },
      boxShadow: {
        'premium': '0 10px 30px -10px rgba(15, 30, 54, 0.1)',
        'premium-hover': '0 20px 40px -15px rgba(212, 175, 55, 0.15)',
        'glass': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.15)',
      }
    },
  },
  plugins: [],
};
export default config;
