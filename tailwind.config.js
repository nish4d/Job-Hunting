/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {},
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#7E90FE",

          secondary: "#A3A3A3",

          accent: "#F2F2F2",

          neutral: "#14191F",

          "base-100": "#FFFFFF",

          info: "#CBB58B",

          success: "#1FB759",

          warning: "#F4C843",

          error: "#F2636D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
