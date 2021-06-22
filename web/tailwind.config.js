const heropatterns = require('tailwindcss-hero-patterns/src/patterns')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.js'],
  },
  darkMode: 'media',
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
      blue: colors.blue,
    },
    linearGradientColors: (theme) => theme('colors'),
    heroPatterns: {
      topography: heropatterns.topography,
    },
    heroPatternsShades: ['100', '300', '500'],
    heroPatternsColors: ['blue'],
    extend: {
      animation: {
        fadeIn: 'fadeIn 3s ease-in forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      colors: {
        blue: {
          500: '#4391cdff',
        },
      },
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-hero-patterns'),
    require('tailwindcss-gradients'),
  ],
}
