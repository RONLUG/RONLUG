/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      keyframes: {
        floatIn: {
          "0%": { transform: "translate3d(0, 20px, 0)", opacity: "0%" },
          "100%": { transform: "translate3d(0, 0, 0)", opacity: "100%" },
        },
      },
      animation: {
        floatIn: "floatIn 1s ease-in-out",
        floatInDelayed: "floatIn 1s ease-in-out 1s",
      },
    },
  },
  plugins: [],
};
