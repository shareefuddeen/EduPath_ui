export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        upDown: "upDown 1s infinite",
        blob: "blob 12s infinite",
      },

      keyframes: {
        upDown: {
          "0%": {
            transform: "translateY(6px)",
          },
          "50%": {
            transform: "translateY(-6px)",
          },
          "100%": {
            transform: "translateY(6px)",
          },
        },
        blob: {
          "0%": {
            transform: "translate(0px,0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, 40px) scale(1.1)",
          },
          "66%": {
            transform: "translate(40px,-50px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px,0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
