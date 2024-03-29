/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {},
  plugins: [require("daisyui")],
  "tailwindCSS.includeLanguages": { plaintext: "javascript" },
};
