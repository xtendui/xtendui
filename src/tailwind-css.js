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
      '.text-inverse': {
        color: theme('colors.white'),
        'a:not([class]), .link': {
          color: theme('colors.white'),
        },
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
    // structure
    structure: {
      'html': {
        lineHeight: 1.8,
        fontSize: rem(14),
        '@screen sm': {
          fontSize: rem(15),
        },
        '@screen lg': {
          fontSize: rem(16),
        },
        '@screen xl': {
          fontSize: rem(17),
        },
      },
    },
    // typography
    typography: {
      'a:not([class]), .link': {
        '@apply text-reset !important': {},
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
        color: theme('colors.accent.500'),
        textDecoration: 'underline',
        transitionProperty: theme('transitionProperty.colors'),
        transitionDuration: theme('transitionDuration.500'),
        transitionTimingFunction: theme('transitionTimingFunction.ease.out'),
        '&:hover, &.hover': {
          color: theme('colors.accent.600'),
          transitionTimingFunction: theme('transitionTimingFunction.ease.in'),
        },
        '&:active, &.active': {
          color: theme('colors.accent.400'),
          transitionTimingFunction: theme('transitionTimingFunction.ease.in'),
        },
      },
      'p, .p': {
        '@apply text-reset': {},
        marginBottom: theme('spacing.5'),
        '&:first-child': {
          marginTop: theme('spacing.0'),
        },
        '&:last-child': {
          marginBottom: theme('spacing.0'),
        },
      },
      'h1, .h1': {
        marginTop: theme('spacing.8'),
        marginBottom: theme('spacing.6'),
        '&:first-child': {
          marginTop: 0,
        },
        '&:last-child': {
          marginBottom: 0,
        },
        fontFamily: theme('fontFamily.sans').toString(),
        fontWeight: theme('fontWeight.semibold'),
        lineHeight: theme('lineHeight.tight'),
        letterSpacing: theme('letterSpacing.normal'),
        textTransform: 'none',
        fontSize: rem(30),
        '@screen lg': {
          fontSize: rem(40),
        },
      },
      'h2, .h2': {
        marginTop: theme('spacing.8'),
        marginBottom: theme('spacing.6'),
        '&:first-child': {
          marginTop: 0,
        },
        '&:last-child': {
          marginBottom: 0,
        },
        fontFamily: theme('fontFamily.sans').toString(),
        fontWeight: theme('fontWeight.semibold'),
        lineHeight: theme('lineHeight.tight'),
        letterSpacing: theme('letterSpacing.normal'),
        textTransform: 'none',
        fontSize: rem(30),
        '@screen lg': {
          fontSize: rem(35),
        },
      },
      'h3, .h3': {
        marginTop: theme('spacing.8'),
        marginBottom: theme('spacing.6'),
        '&:first-child': {
          marginTop: 0,
        },
        '&:last-child': {
          marginBottom: 0,
        },
        fontFamily: theme('fontFamily.sans').toString(),
        fontWeight: theme('fontWeight.semibold'),
        lineHeight: theme('lineHeight.tight'),
        letterSpacing: theme('letterSpacing.normal'),
        textTransform: 'none',
        fontSize: rem(25),
        '@screen lg': {
          fontSize: rem(30),
        },
      },
      'h4, .h4': {
        marginTop: theme('spacing.8'),
        marginBottom: theme('spacing.6'),
        '&:first-child': {
          marginTop: 0,
        },
        '&:last-child': {
          marginBottom: 0,
        },
        fontFamily: theme('fontFamily.sans').toString(),
        fontWeight: theme('fontWeight.semibold'),
        lineHeight: theme('lineHeight.tight'),
        letterSpacing: theme('letterSpacing.normal'),
        textTransform: 'none',
        fontSize: rem(20),
      },
      'h5, .h5': {
        marginTop: theme('spacing.8'),
        marginBottom: theme('spacing.6'),
        '&:first-child': {
          marginTop: 0,
        },
        '&:last-child': {
          marginBottom: 0,
        },
        fontFamily: theme('fontFamily.sans').toString(),
        fontWeight: theme('fontWeight.semibold'),
        lineHeight: theme('lineHeight.tight'),
        letterSpacing: theme('letterSpacing.normal'),
        textTransform: 'none',
        fontSize: rem(16),
      },
      'h6, .h6': {
        marginTop: theme('spacing.8'),
        marginBottom: theme('spacing.6'),
        '&:first-child': {
          marginTop: 0,
        },
        '&:last-child': {
          marginBottom: 0,
        },
        fontFamily: theme('fontFamily.sans').toString(),
        fontWeight: theme('fontWeight.semibold'),
        lineHeight: theme('lineHeight.tight'),
        letterSpacing: theme('letterSpacing.wide'),
        textTransform: 'uppercase',
        fontSize: '13px',
      },
      '.h-block': {
        marginTop: theme('spacing.8'),
        marginBottom: theme('spacing.6'),
        paddingTop: theme('spacing.4'),
        paddingBottom: theme('spacing.4'),
        paddingLeft: theme('spacing.6'),
        paddingRight: theme('spacing.6'),
        backgroundColor: theme('colors.gray.200'),
        textAlign: 'center',
      },
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
    // btn
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
        '&:hover, &:active': {
          zIndex: theme('zIndex.active'),
        },
        // styles
        padding: `${em(8, 12)} ${em(16, 12)}`,
        fontSize: rem(12),
        borderWidth: theme('borderWidth.default'),
        borderColor: theme('borderColor.transparent'),
        borderRadius: theme('borderRadius.md'),
        fontFamily: theme('fontFamily.sans').toString(),
        fontWeight: theme('fontWeight.semibold'),
        lineHeight: theme('lineHeight.tight'),
        letterSpacing: theme('letterSpacing.wider'),
        textTransform: 'uppercase',
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
      '.btn-tiny': {
        padding: '.5em 1em',
        fontSize: '10px',
      },
      '.btn-small': {
        padding: '.6em 1.2em',
        fontSize: rem(11),
      },
      '.btn-medium': {
        padding: '.6em 1.2em',
        fontSize: rem(12),
      },
      '.btn-large': {
        padding: '.6em 1.2em',
        fontSize: rem(13),
      },
      '.btn-big': {
        padding: '.6em 1.2em',
        fontSize: rem(14),
      },
      */
    },
    // card
    card: {
      '.card': {
        // setup
        '@apply: flex-full': '',
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-start',
        width: '100%',
        zIndex: theme('zIndex.base'),
        '&:hover, &:active': {
          zIndex: theme('zIndex.active'),
        },
      },
      '.card-inner': {
        // setup
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        minHeight: '100%',
      },
      '.card-content': {
        // setup
        '@apply: flex-auto': '',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
      },
      '.card-block': {
        padding: `${em(24, 12)}`,
        fontSize: rem(14),
      },
      '.card-title': {
        marginTop: theme('spacing.6'),
        marginBottom: theme('spacing.4'),
        '&:first-child': {
          marginTop: 0,
        },
        '&:last-child': {
          marginBottom: 0,
        },
        fontFamily: theme('fontFamily.sans').toString(),
        fontWeight: theme('fontWeight.semibold'),
        lineHeight: theme('lineHeight.tight'),
        letterSpacing: theme('letterSpacing.normal'),
        textTransform: 'none',
        fontSize: rem(20),
      },
    },
  }
})
