/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-violet": "#100217E5",
        "primary-black": "#030B1C",
        "primary-gray": "#E4E8EE"
      },
    },
  },
  plugins: [],
};
