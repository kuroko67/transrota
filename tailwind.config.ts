import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          950: "#030303",
          900: "#0A0A0A",
          850: "#111111",
          800: "#1A1A1A",
          700: "#262626",
          600: "#333333",
        },
        gold: {
          500: "#D4A843",
          400: "#E8C56D",
          300: "#F0D58E",
          200: "#F5E4B8",
          100: "#FAF0DB",
          600: "#B88A35",
          700: "#96702B",
        },
        graphite: {
          900: "#0F0F0F",
          800: "#181818",
          700: "#222222",
          600: "#2D2D2D",
          500: "#3D3D3D",
        },
        slate: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 50%, #0F0F0F 100%)",
        "gold-gradient-radial":
          "radial-gradient(ellipse at center, #1A1A1A 0%, #0A0A0A 70%)",
        "gold-border":
          "linear-gradient(90deg, transparent, #D4A843, transparent)",
      },
      boxShadow: {
        "gold-glow": "0 8px 32px -8px rgba(212, 168, 67, 0.35)",
        "gold-glow-lg": "0 16px 48px -12px rgba(212, 168, 67, 0.4)",
        "gold-border": "0 0 0 1px rgba(212, 168, 67, 0.3)",
        "card-dark": "0 20px 40px -20px rgba(0, 0, 0, 0.5)",
        "inner-gold": "inset 0 1px 0 rgba(212, 168, 67, 0.15)",
      },
      keyframes: {
        "dash-move": {
          "0%": { strokeDashoffset: "0" },
          "100%": { strokeDashoffset: "-40" },
        },
        "truck-drive": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(calc(100% - 2.5rem))" },
        },
        "gold-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px -5px rgba(212, 168, 67, 0.3)" },
          "50%": { boxShadow: "0 0 30px -2px rgba(212, 168, 67, 0.5)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "dash-move": "dash-move 1.2s linear infinite",
        "gold-pulse": "gold-pulse 3s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;