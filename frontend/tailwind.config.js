/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          sm: "8px",
          md: "1rem",
          lg: "2.5rem",
          xl: "6rem",
        },
      },
    },
  },
  plugins: [],
};
