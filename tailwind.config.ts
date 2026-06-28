import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1F3C88",
          light: "#2E4EA1",
          dark: "#162D6B",
        },
        orange: {
          DEFAULT: "#E67E22",
          light: "#F39C4E",
          soft: "#F3C098",
          dark: "#BF6516",
        },
        cream: {
          50: "#FFFDF8",
          100: "#FFF7ED",
          200: "#FDF2E6",
          300: "#F8EBD6",
        },
        ink: {
          DEFAULT: "#3A3A3A",
          body: "#5B5B5B",
          muted: "#9CA3AF",
        },
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(31, 60, 136, 0.18)",
        card: "0 12px 40px -16px rgba(31, 60, 136, 0.25)",
        lift: "0 18px 48px -18px rgba(31, 60, 136, 0.35)",
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
