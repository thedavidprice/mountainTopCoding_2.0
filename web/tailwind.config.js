const heropatterns = require('tailwindcss-hero-patterns/src/patterns')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      blue: {
        DEFAULT: '#4391cdff',
      },
    },
    linearGradientColors: (theme) => theme('colors'),
    heroPatterns: {
      topography: heropatterns.topography,
    },
    heroPatternsShades: ['100', '300', '500'],
    heroPatternsColors: ['blue'],
    extend: {
      colors: {
        blue: {
          500: '#4391cdff',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-hero-patterns'),
    require('tailwindcss-gradients'),
  ],
}
