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
      'gray': '#13161F',
    },
    fontFamily: {
      sans: ['Titillium Web', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}