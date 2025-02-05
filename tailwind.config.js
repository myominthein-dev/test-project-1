/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        boxShadow : {
          'inner-custom' : 'inset 5px 5px 5px 0px #FFFFFF'
        }
        ,
        dropShadow : {
          'custom': '0px 2px 2px #000000',
        }
        ,
        futura: ["Futura", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        lightBlue: "#f0f5f6",
        blue: {
          50: "#e0eaec", // 10%
          100: "#ccdce0", // 20%
          200: "#b2cbd0", // 30%
          300: "#98b9c0", // 40%
          400: "#7fa8b1", // 50%
          PRIMARY: "#6596a1", // Base color;
          600: "#547d86", // 60%
          700: "#43646b", // 70%
          800: "#334b51", // 80%
          900: "#223236", // 90%
          1000: "#141e20", // 100%
        },
        lightBlue: "#f0f5f6",
        lightGrey: "#c4c4c4",
        secondaryGrey: "#7f7d7d",
        secondaryBlue: "#6596a1",
        black: {
          PRIMARY: "#223236",
          50: "#d0d2d2", // 10%
          100: "#b1b4b5", // 20%
          200: "#8a8f90", // 30%
          300: "#62696a", // 40%
          400: "#3b4445", // 50%
          BASE: "#141e20", // Base color
          600: "#11191b", // 60%
          700: "#0d1415", // 70%
          800: "#0a0f10", // 80%
          900: "#070a0b", // 90%
          1000: "#040606", // 100%
        },
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(359.99deg, #FFFFFF 0%, #CCDCE0 108.03%)",
      },
    },
  },
  plugins: [],
};
