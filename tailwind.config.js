const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  presets: [require('tailwindcss/defaultConfig'), require('./src/tailwind-config')],
  theme: {
    // only some tailwind colors
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      gray: {
        100: '#FAFCFF',
        200: '#F2F6FF',
        300: '#EAF1FF',
        400: '#DBE7FF',
        500: '#CBDCFF',
        600: '#B7C6E6',
        700: '#7A8499',
        800: '#5B6373',
        900: '#3D424D',
      },
    },
    extend: {
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
      borderWidth: {
        3: '3px',
      },
    },
  },
}
