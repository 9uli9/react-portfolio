/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], 
  theme: {
    extend: {
      fontFamily: {
        lacquer: ['Lacquer', 'sans-serif'], // Add your font family
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f3f4f6",
          secondary: "#292524",
          accent: "#275e28",
          neutral: "#a8a29e",
          "base-100": "#d6d3d1",
          info: "#eab308",
          success: "#65a30d",
          warning: "#b91c1c",
          error: "#881337",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
