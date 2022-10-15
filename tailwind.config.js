/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        "primary-color": "#37003c",
        "secondary-color": "#ff2882",
      }),
      textColor: (theme) => ({
        "primary-color": "#37003c",
        "secondary-color": "#ff2882",
      }),
    },
  },
  plugins: [],
  "tailwindCSS.includeLanguages": { plaintext: "javascript" },
};
