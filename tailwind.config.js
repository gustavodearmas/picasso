module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        menta: {
          100: "#0A6F5D",
          80: "#27997D",
          60: "#53A598",
          40: "#71B09F",
          20: "#B1D1C7",
        },
        picasso: {
          1: "#319C8C",
          2: "#90BFB7",
          3: "#779274",
          4: "#BACC61",
          5: "#D0DC8E",
        },
        parotia: {
          1: "#262632",
          2: "#303040",
          3: "#27BFC2",
        },
      },
      fontSize: {
        xxs: ".6rem",
      },
      screens: {
        xxs: "320px",
        cero: "100px"
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
