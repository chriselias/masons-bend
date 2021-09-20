module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "regal-blue": "#243c5a",
        alabaster: "#f9fbfc",
        "patterns-blue": "#cde9f6",
        solitude: "#ebf6fb",
        "golden-yellow": "#ffdf00",
        "picton-blue": "#43aae2",
        "north-texas-green": "#009839",
        "orchid-white": "#fffdf3",
        background: "#f9fafb",
        primary: "#335bf1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
