/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1700px", // Elite Hybrid Limit
      },
    },
    extend: {
      // Comprehensive color system
      colors: {
        // Legacy colors (keeping for backward compatibility)
        green: "#3cb77e",
        lightGreen: "#cae9d4",
        gray: "#f4f6fa",

        // Primary brand colors (Nature-inspired green spectrum)
        primary: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e", // Main brand green
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },

        // Secondary accent colors (Warm amber/yellow)
        secondary: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b", // Main accent
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },

        // Neutral grays
        neutral: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b",
        },

        // Semantic colors
        success: "#10b981",
        warning: "#f59e0b",
        error: "#ef4444",
        info: "#3b82f6",
      },

      // Custom font families
      fontFamily: {
        sans: ["DM Sans", "Inter", "system-ui", "sans-serif"],
        heading: ["Outfit", "Inter", "system-ui", "sans-serif"],
        accent: ["Outfit", "system-ui", "sans-serif"],
      },

      // Custom shadows for depth and elevation
      boxShadow: {
        soft: "0 2px 8px rgba(0, 0, 0, 0.04)",
        medium: "0 4px 16px rgba(0, 0, 0, 0.08)",
        strong: "0 8px 32px rgba(0, 0, 0, 0.12)",
        premium: "0 20px 60px rgba(0, 0, 0, 0.15)",
        glow: "0 0 20px rgba(34, 197, 94, 0.3)",
        "glow-sm": "0 0 10px rgba(34, 197, 94, 0.2)",
        "glow-secondary": "0 0 20px rgba(245, 158, 11, 0.3)",
        "inner-soft": "inset 0 2px 4px rgba(0, 0, 0, 0.06)",
      },

      // Custom border radius
      borderRadius: {
        sm: "0.25rem",
        DEFAULT: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
        "2xl": "2rem",
        "3xl": "3rem",
        full: "9999px",
      },

      // Animation utilities
      animation: {
        "fade-in": "fadeIn 0.5s ease-in",
        "slide-up": "slideUp 0.3s ease-out",
        "slide-down": "slideDown 0.3s ease-out",
        "scale-in": "scaleIn 0.2s ease-out",
        shimmer: "shimmer 2s linear infinite",
        "bounce-slow": "bounce 2s infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        spring: "spring 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      },

      // Keyframes for animations
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        spring: {
          "0%": { transform: "scale(0.95)" },
          "100%": { transform: "scale(1)" },
        },
      },

      // Transition durations
      transitionDuration: {
        fast: "150ms",
        base: "250ms",
        slow: "350ms",
      },
    },
  },
  plugins: [],
};
