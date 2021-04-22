const heropatterns = require('tailwindcss-hero-patterns/src/patterns')

module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      blue: '#4391cdff',
      white: '#FFFFFF',
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
