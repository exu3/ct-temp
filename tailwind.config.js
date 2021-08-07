module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: "#20166A",
        white: "#ffffff",
        black: "#000000",
      },
      fontFamily: {
        montserrat: "Montserrat, sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
