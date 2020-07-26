var merge = require('lodash.merge')

module.exports = function (custom = {}) {
  // override theme waiting for https://github.com/tailwindlabs/tailwindcss/issues/677
  const base = {
    extend: {

      /**
       * typography
       */

      typography: theme => ({
        default: {
          css: {
            color: theme('colors.gray.900'),
            strong: {
              fontWeight: '600',
            },
            h1: {
              color: 'inherit',
              fontWeight: '600',
            },
            h2: {
              color: 'inherit',
              fontWeight: '600',
            },
            h3: {
              color: 'inherit',
              fontWeight: '600',
            },
            h4: {
              color: 'inherit',
              fontWeight: '600',
            },
            a: {
              color: theme('colors.accent.500'),
              '&:hover': {
                color: theme('colors.accent.600'),
              },
            },
          },
        },
      }),

      /**
       * design
       */

      fontFamily: theme => ({
        sans: [
          '"Open Sans"',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      }),

      colors: {
        // https://javisperez.github.io/tailwindcolorshades/#/?hawkes-blue=d0e6fe
        gray: {
          100: '#FAFDFF',
          200: '#F3F9FF',
          300: '#ECF5FF',
          400: '#DEEEFE',
          500: '#D0E6FE',
          600: '#BBCFE5',
          700: '#7D8A98',
          800: '#5E6872',
          900: '#3E454C',
          },
        // https://javisperez.github.io/tailwindcolorshades/#/?Azure%20Radiance=0078ff&tv=1
        accent: {
          100: '#E6F2FF',
          200: '#BFDDFF',
          300: '#99C9FF',
          400: '#4DA1FF',
          500: '#0078FF',
          600: '#006CE6',
          700: '#004899',
          800: '#003673',
          900: '#00244D',
        },
      },

      /**
       * interaction
       */

      ease: {
        in: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
        out: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
      },

      zIndex: {
        base: '0',
        active: '2',
        out: '1',
      },

      /**
       * list
       */

      list: theme => ({
        spacing: {
          ...theme('spacing')
        },
      }),

      /**
       * xtend
       */

      xtendConfig: theme => ({

        /**
         * btn
         */

        btn: {
          'button': {
            '&:focus': {
              outline: 'none'
            },
          },
          '.btn': {
            // setup
            cursor: 'pointer',
            display: 'inline-flex',
            position: 'relative',
            verticalAlign: 'middle',
            flexWrap: 'nowrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: theme('zIndex.base'),
            '&:hover, &.hover': {
              zIndex: theme('zIndex.active'),
            },
            '&.out': {
              zIndex: theme('zIndex.out'),
            },
            // typography
            fontFamily: theme('fontFamily.sans').join(', '),
            borderRadius: theme('borderRadius.md'),
            borderWidth: theme('borderWidth.px'),
            borderColor: theme('colors.transparent'),
            fontWeight: theme('fontWeight.semibold'),
            lineHeight: theme('lineHeight.tight'),
            letterSpacing: theme('letterSpacing.wider'),
            textTransform: 'uppercase',
            // size
            padding: '.7em 1.2em',
            fontSize: '0.8rem',
            // animation
            transitionProperty: theme('transitionProperty.all'),
            transitionDuration: theme('transitionDuration.500'),
            transitionTimingFunction: theme('ease.out'),
            '&:hover, &.hover': {
              transitionTimingFunction: theme('ease.in'),
            },
            '&:active, &.active': {
              transitionTimingFunction: theme('ease.in'),
            },
          },
          '.btn-default': {
            // variant
            borderColor: theme('colors.gray.300'),
            backgroundColor: theme('colors.gray.300'),
            color: theme('textColor.black'),
            '&:hover, &.hover': {
              borderColor: theme('colors.gray.400'),
              backgroundColor: theme('colors.gray.300'),
            },
            '&:active, &.active': {
              borderColor: theme('colors.gray.400'),
              backgroundColor: theme('colors.gray.400'),
              textOpacity: theme('textOpacity.75'),
            },
          },
          '.btn-primary': {
            // variant
            borderColor: theme('colors.accent.500'),
            backgroundColor: theme('colors.accent.500'),
            color: theme('textColor.white'),
            '&:hover, &.hover': {
              borderColor: theme('colors.accent.600'),
              backgroundColor: theme('colors.accent.500'),
            },
            '&:active, &.active': {
              borderColor: theme('colors.accent.600'),
              backgroundColor: theme('colors.accent.600'),
              textOpacity: theme('textOpacity.75'),
            },
          },
        },

        /**
         * list
         */

        list: {
          // list
          '.list': {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            alignItems: 'flex-start',
            '&, > *': {
              '> a:not(.btn), > button:not(.btn)': {
              }
            }
          },
          // list-block
          '.list-block': {
            display: 'flex',
            flexWrap: 'nowrap',
            flexDirection: 'column',
            alignItems: 'flex-start',
          },
        },

      }),
    },
  }
  return merge(base, custom)
}
