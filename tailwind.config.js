/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        'md': '2px 2px 4px rgba(0, 0, 0, 1.5)', 
      },
    },
  },
  plugins: [
    require("daisyui"),
    '@tailwindcss/forms'
    
  ],

  daisyui: {
    themes: ["synthwave"],
  },
}