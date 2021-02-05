const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  presets: [require('tailwindcss/defaultConfig'), require('./tailwind.preset')],
  purge: {
    enabled: true,
    content: ['./src/**/*.css', './src/**/*.js'],
    options: {
      safelist: {
        greedy: [
          // demos
          /^iframe--/,
          // code
          /pre/,
          /code/,
          /token/,
          // popperjs
          /^data-popper-/,
        ],
      },
    },
  },
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          md: '2rem',
          lg: '2.5rem',
          xl: '3rem',
        },
      },
      colors: {
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
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
      borderWidth: {
        3: '3px',
      },
    },
  },
}
