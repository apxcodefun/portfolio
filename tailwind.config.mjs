/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sblack: "#090A12",
        sblu: "#3F2F71",
        smid: "#26114A",
        lavender: "#E4A0F7",
      },
    },
  },
  plugins: [require("daisyui")],
};
