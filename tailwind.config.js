/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#DEDBC8',
        'primary-text': '#E1E0CC',
        'dark-bg': '#000000',
        'card-about': '#101010',
        'card-feature': '#212121',
      },
      fontFamily: {
        heading: ["'Instrument Serif'", 'serif'],
        serif: ["'Instrument Serif'", 'serif'],
        body: ["'Barlow'", 'sans-serif'],
        almarai: ["'Almarai'", '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
