// rema and em
// https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js
const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = (px) => `${round(px / 16)}rem`
const em = (px, base) => `${round(px / base)}em`

module.exports = theme => ({
  utilities: {
    structure: {
      '.container-reset': {
        padding: 0,
        width: 'auto',
        maxWidth: 'none',
      },
    },
    typography: {
      '.text-reset': {
        fontFamily: 'inherit',
        fontStyle: 'inherit',
        fontWeight: 'inherit',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        letterSpacing: 'inherit',
        textTransform: 'inherit',
      },
    },
    list: {
      space: {
        ...theme('spacing')
      },
    },
    row: {
      space: {
        ...theme('spacing')
      },
    },
    toggle: {
      '.toggle-block': {
        display: 'none',
        '&.active, &.out': {
          display: 'block',
        },
      },
      '.toggle-flex': {
        display: 'none',
        '&.active, &.out': {
          display: 'flex',
        },
      },
    },
  },
  components: {
    structure: {
      'html': {
        'line-height': 1.8,
      },
    },
    typography: {
      'p, .p': {
        '@apply text-reset mb-5': {},
        '&:first-child': {
          marginTop: 0,
        },
        '&:last-child': {
          marginTop: 0,
        },
      },
      'h1, .h1': {
        '@apply mt-8 mb-6 font-semibold leading-tight tracking-normal normal-case': {},
        fontSize: rem(30),
        '@screen lg': {
          fontSize: rem(40),
        },
        '&:first-child': {
          marginTop: 0,
        },
        '&:last-child': {
          marginTop: 0,
        },
      },
      'h2, .h2': {
        '@apply mt-8 mb-6 font-semibold leading-tight tracking-normal normal-case': {},
        fontSize: rem(30),
        '@screen lg': {
          fontSize: rem(35),
        },
        '&:first-child': {
          marginTop: 0,
        },
        '&:last-child': {
          marginTop: 0,
        },
      },
      'h3, .h3': {
        '@apply mt-8 mb-6 font-semibold leading-tight tracking-normal normal-case': {},
        fontSize: rem(25),
        '@screen lg': {
          fontSize: rem(30),
        },
        '&:first-child': {
          marginTop: 0,
        },
        '&:last-child': {
          marginTop: 0,
        },
      },
      'h4, .h4': {
        '@apply mt-8 mb-6 font-semibold leading-tight tracking-normal normal-case': {},
        fontSize: rem(20),
        '&:first-child': {
          marginTop: 0,
        },
        '&:last-child': {
          marginTop: 0,
        },
      },
      'h5, .h5': {
        '@apply mt-8 mb-6 font-semibold leading-tight tracking-normal normal-case': {},
        fontSize: rem(16),
        '&:first-child': {
          marginTop: 0,
        },
        '&:last-child': {
          marginTop: 0,
        },
      },
      'h6, .h6': {
        '@apply mt-8 mb-6 font-semibold leading-tight tracking-wide uppercase': {},
        fontSize: '13px',
        '&:first-child': {
          marginTop: 0,
        },
        '&:last-child': {
          marginTop: 0,
        },
      },
      '.header-block': {
        '@apply mt-8 mb-6 py-4 px-6 bg-gray-200 text-center': {},
        '&:first-child': {
          marginTop: 0,
        },
        '&:last-child': {
          marginTop: 0,
        },
      },
    },
    btn: {
      button: {
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
        '&:hover': {
          zIndex: theme('zIndex.active'),
        },
        '&.out': {
          zIndex: theme('zIndex.out'),
        },
        // styles
        '@apply border border-transparent rounded-md': {},
        '@apply font-sans font-semibold leading-tight tracking-wider uppercase': {},
        padding: `${em(8, 12)} ${em(16, 12)}`,
        fontSize: rem(12),
        // animation
        transitionProperty: theme('transitionProperty.all'),
        transitionDuration: theme('transitionDuration.500'),
        transitionTimingFunction: theme('transitionTimingFunction.out'),
        '&:hover, &.hover': {
          transitionTimingFunction: theme('transitionTimingFunction.in'),
        },
        '&:active, &.active': {
          transitionTimingFunction: theme('transitionTimingFunction.in'),
        },
      },
      /*
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
        },
      },
      */
    },
    // list
    list: {
      '.list': {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'flex-start',
        /*
        '&, > *': {
          '> a:not(.btn), > button:not(.btn)': {
          }
        }
        */
      },
      '.list-block': {
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
    },
    // row
    row: {
      '.row': {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'flex-start',
      },
      '.row-stretch': {
        alignItems: 'stretch',
        '> *': {
          display: 'flex',
          alignItems: 'stretch',
          '> *': {
            minHeight: '100%'
          },
        },
      },
    },
  }
})
