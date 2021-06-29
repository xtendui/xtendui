const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  presets: [require('tailwindcss/defaultConfig'), require('./tailwind.preset')],
  purge: {
    content: ['./{src,static}/**/*.css', './{src,static}/**/*.js'],
  },
  theme: {
    extend: {
      container: {
        center: true,
        fluid: '1536px',
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.5rem',
          md: '2rem',
          lg: '3rem',
          xl: '4rem',
        },
      },
      colors: {
        code: '#2b2b2b',
        gray: colors.blueGray,
      },
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
      borderWidth: {
        3: '3px',
      },
      borderColor: theme => ({
        DEFAULT: theme('colors.gray.300', 'currentColor'),
      }),
      xtendui: {
        link: {
          utility: theme => ({
            '.xt-links-inverse': {
              // fix specificity when nested .xt-links-default and .xt-links-inverse
              '&, .xt-links-default &': {
                'code:not([class])': {
                  color: `${theme('colors.white')}!important`,
                },
              },
            },
            '.xt-links-default': {
              // fix specificity when nested .xt-links-default and .xt-links-inverse
              '&, .xt-links-inverse &': {
                'code:not([class])': {
                  color: `${theme('colors.primary.500')}!important`,
                },
              },
            },
          }),
        },
        typography: {
          component: {
            'code:not([class])': {
              fontSize: '0.9em',
              fontWeight: 600,
            },
          },
        },
      },
    },
  },
}
