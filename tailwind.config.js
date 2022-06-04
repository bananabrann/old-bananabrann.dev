module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        "[auto,auto,1fr]": "auto auto 1fr",
      },
      fontFamily: {
        "mono": ["Comic Code", "monospace"]
      }
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography")
  ],
};
