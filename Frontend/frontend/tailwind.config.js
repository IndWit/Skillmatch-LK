// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Scans your main HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Scans all your React components
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Brand colors
        "primary": "#4F46E5", // indigo-600
        "background-light": "#f6f6f8",
        "background-dark": "#101622",
      },
      fontFamily: {
        // This is the NEW font from your Profile page
        "display": ["Lexend", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}