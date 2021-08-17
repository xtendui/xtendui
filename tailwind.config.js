const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: process.env.DIST ? '' : 'jit',
  presets: [require('tailwindcss/defaultConfig'), require('./tailwind.preset')],
  purge: {
    content: process.env.DIST ? [] : ['./{src,static}/**/*.css', './{src,static}/**/*.js'],
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
        gray: {
          50: '#f6f9fd',
          100: '#eef4fb',
          200: '#dde7f4',
          300: '#c4d4e8',
          400: '#88a0c3',
          500: '#577197',
          600: '#3c5374',
          700: '#283f60',
          800: '#142644',
          900: '#061333',
        },
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
