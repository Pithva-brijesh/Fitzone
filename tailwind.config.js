/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1A1B2E",
        foreground: "#FFFFFF",

        card: "#202341",
        popover: "#202341",

        border: "#30345A",
        input: "#30345A",
        ring: "#6366F1",

        primary: {
          DEFAULT: "#6366F1",
          foreground: "#FFFFFF",
        },

        secondary: {
          DEFAULT: "#8B5CF6",
          foreground: "#FFFFFF",
        },

        accent: {
          DEFAULT: "#A855F7",
          foreground: "#FFFFFF",
        },

        success: {
          DEFAULT: "#10B981",
          foreground: "#FFFFFF",
        },

        warning: {
          DEFAULT: "#F59E0B",
          foreground: "#FFFFFF",
        },

        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#FFFFFF",
        },

        muted: {
          DEFAULT: "#2A2E4D",
          foreground: "#94A3B8",
        },
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },

      boxShadow: {
        glow: "0 0 20px rgba(99,102,241,.35)",
      },
    },
  },
  plugins: [],
};