module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '520px',
      md: '768px',
      lg: '970px',
      xl: '1440px',
    },
    colors: {
      current: 'currentColor',
      'white': '#f2f2f2',
      'black': '#090C14',
      'abu-muda': '#13161F',
      'abu-tua': '#090c14',
      'oranye-muda': '#F9A136',
      'oranye-tua': '#EF8F1C',
    },
    fontFamily: {
      sans: ['Titillium Web', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}