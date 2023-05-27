module.exports = {
  mode: 'jit',
  content: ["./pages/**/*.js", "./components/**/*.js", "./slices/**/*.js", "./utils/**/*.js"],
  safelist: [
    {
      pattern: /py-./,
      variants: ["sm", "md", "lg", "xl", "2xl"],
    },
  ],
  theme: {
    fontFamily: {
      sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#68a2c9",
          secondary: "#4c545b",
          accent: "#d3b937",
          neutral: "#252028",
          "base-100": "#F9F9FB",
          info: "#2CA7D8",
          success: "#80E0A8",
          warning: "#F29318",
          error: "#EE497B",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/aspect-ratio"), require("daisyui")],
};
