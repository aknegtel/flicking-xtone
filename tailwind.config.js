module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        container: "90%",
        test: "40rem",
      },
      height: { medium: "32rem", big: "40rem", huge: "52rem" },
      maxHeight: {
        120: "32rem",
        big: "40rem",
        huge: "60rem",
      },
      letterSpacing: {
        h6: "1.2rem",
        200: "0.3em",
      },
      margin: {
        tracking: "-0.3em",
      },
      transitionProperty: {
        height: "height",
        padding: "padding",
      },
      transitionTimingFunction: {
        easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      },
      inset: {
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.66666666%",
        "5/6": "83.33333333%",
        "1/8": "12.5%",
        "3/8": "37.5%",
        "7/8": "87.5%",
        "1/7": "14.28571428%",
        "1/9": "11.11111111%",
        "1/10": "10%",
      },
    },

    fontFamily: {
      primary: ["ivypresto-display", "serif"],
      secondary: [
        "Helvetica Neue LT",
        "Helvetica Neue",
        "Helvetica",
        "-apple-system",
        "BlinkMacSystemFont",
        "sans-serif",
      ],
    },
  },
  variants: {
    extend: {
      opacity: ["active", "focus"],
      margin: ["hover"],
      padding: ["hover"],
      filter: ["hover"],
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/custom-forms"),
  ],
};
