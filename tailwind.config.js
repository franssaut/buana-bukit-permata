/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#003536",
        "primary-container": "#0a4d4e",
        "on-primary": "#ffffff",
        "on-primary-container": "#84bdbd",
        "primary-fixed": "#b3eded",
        "primary-fixed-dim": "#97d1d1",
        "on-primary-fixed": "#002020",
        "on-primary-fixed-variant": "#0e4f50",
        "inverse-primary": "#97d1d1",

        "secondary": "#735c00",
        "secondary-container": "#fed65b",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#745c00",
        "secondary-fixed": "#ffe088",
        "secondary-fixed-dim": "#e9c349",
        "on-secondary-fixed": "#241a00",
        "on-secondary-fixed-variant": "#574500",

        "tertiary": "#003533",
        "tertiary-container": "#004e4a",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#7cbfb9",
        "tertiary-fixed": "#abefe9",
        "tertiary-fixed-dim": "#8fd3cd",
        "on-tertiary-fixed": "#00201e",
        "on-tertiary-fixed-variant": "#00504c",

        "surface": "#eefcfa",
        "surface-dim": "#cedddb",
        "surface-bright": "#eefcfa",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#e8f7f5",
        "surface-container": "#e2f1ef",
        "surface-container-high": "#dcebe9",
        "surface-container-highest": "#d7e6e3",
        "surface-variant": "#d7e6e3",
        "surface-tint": "#2d6768",

        "on-surface": "#111e1d",
        "on-surface-variant": "#404848",
        "inverse-surface": "#263332",
        "inverse-on-surface": "#e5f4f2",

        "outline": "#707979",
        "outline-variant": "#bfc8c8",

        "error": "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",

        "background": "#eefcfa",
        "on-background": "#111e1d",

        "gold": {
          DEFAULT: "#D4AF37",
          50: "#FCF8E8",
          100: "#F7EEBA",
          200: "#F1E48D",
          300: "#EAD95F",
          400: "#E4CE32",
          500: "#D4AF37",
          600: "#AA8C26",
          700: "#7F691C",
          800: "#554613",
          900: "#2A2309",
        },
        "emerald-deep": "#0A4D4E",
        "emerald-dark": "#003536",
        "emerald-accent": "#0D5C58"
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      spacing: {
        "gutter": "1.25rem",
        "gutter-mobile": "0.75rem",
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2.5rem",
      }
    },
  },
  plugins: [],
}
