/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gradient-start": "#0c0c0c",
        "gradient-end": "#1c1c1c",
        primary: {
          500: "#00BCD4",  // Main button color
          600: "#80DEEA",  // Hover state for button
        },
        secondary: {
          500: "#a70040",  // Secondary gradient color
          600: "#a7005f",  // Download button hover
        },
        accent: "#00d4cd", // Gradient start color
        text: {
          light: "#f4f8f8",  // Hero title text
          dark: "#eeeaed",   // Hero paragraph text
          muted: "#b17cae",  // Border color
          highlight: "#00d4cd",  // Gradient text color
        },
        background: "#0b0d0d",  // Hero section background color
        neutral: "#181818",  // Profile image background
        border: "#33353F",  // Border color for input fields
      },
      boxShadow: {
        lumelight: '0 4px 6px rgba(128, 90, 213, 0.3), 0 10px 15px rgba(128, 90, 213, 0.2)',
      },
    },
  },
  plugins: [],
};
