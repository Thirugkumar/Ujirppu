const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      mainColor: "#ffa51d",
      lightText: "rgb(250, 250, 250, 0.8)",
      darkPostBG: "#111827a1",
      lightPostBG: "rgba(0,0,0,0.03)",
      textLight: "rgba(255, 255, 255, 0.4)",
      textDarkTheme: "#b4b6ba",
    },
  },
  plugins: [require("flowbite/plugin")],
  darkMode: "class",
});
