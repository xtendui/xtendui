// rema and em
// https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js
const round = num =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = px => `${round(px / 16)}rem`
const em = (px, base) => `${round(px / base)}em`

module.exports = theme => ({
  utilities: {
    structure: {
      '.container-reset': {
        padding: 0,
        width: 'auto',
        maxWidth: 'none',
      },
      '.mt-fc': {
        '&:first-child': {
          marginTop: theme('spacing.0'),
        },
      },
      '.mb-lc': {
        '&:last-child': {
          marginBottom: theme('spacing.0'),
        },
      },
      '.design-absolute': {
        content: '',
        position: 'absolute',
        zIndex: '-1',
        top: '0',
        left: '0',
        bottom: '0',
        right: '0',
      },
    },
    typography: {
      '.text-default': {
        color: theme('colors.accent.900'),
        'a:not([class]), .link': {
          color: theme('colors.accent.500') + ' !important',
        },
      },
      '.text-inverse': {
        color: theme('colors.white'),
        'a:not([class]), .link': {
          color: theme('colors.white') + ' !important',
        },
      },
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
        px: '1px',
        '0': '0',
        '0.5': '0.125rem',
        '1': '0.25rem',
        '1.5': '0.375rem',
        '2': '0.5rem',
        '2.5': '0.625rem',
        '3': '0.75rem',
        '3.5': '0.875rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.5rem',
        '11': '2.75rem',
        '12': '3rem',
        '13': '3.25rem',
        '14': '3.5rem',
        '15': '3.75rem',
        '16': '4rem',
      },
    },
    row: {
      space: {
        px: '1px',
        '0': '0',
        '0.5': '0.125rem',
        '1': '0.25rem',
        '1.5': '0.375rem',
        '2': '0.5rem',
        '2.5': '0.625rem',
        '3': '0.75rem',
        '3.5': '0.875rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.5rem',
        '11': '2.75rem',
        '12': '3rem',
        '13': '3.25rem',
        '14': '3.5rem',
        '15': '3.75rem',
        '16': '4rem',
      },
    },
    card: {
      '.card-group': {
        display: 'flex',
        alignItems: 'stretch',
      },
      '.card-disable': {
        '@apply text-default': '',
        borderWidth: '0',
        backgroundColor: 'transparent',
        boxShadow: 'none',
        '.card-design': {
          display: 'none',
        },
        '.card-block': {
          padding: '0',
        },
        '> .btn-close': {
          display: 'none',
        },
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
      ':focus': {
        outline: 'none', // disable focus outline
      },
      html: {
        touchAction: 'manipulation', // disable double-tap
        '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)', // disable tap highlight
      },
      body: {
        '@apply overflow-main': '',
      },
      '.overflow-main': {
        '-webkit-overflow-scrolling': 'touch',
        '&::-webkit-scrollbar': {
          height: '8px',
          width: '8px',
          background: theme('colors.accent.200'),
          '@media (hover: none)': {
            display: 'none',
          },
        },
        '&::-webkit-scrollbar-thumb': {
          background: theme('colors.accent.700'),
        },
        scrollbarColor: theme('colors.accent.700') + ' transparent',
      },
      '.overflow-sub': {
        '-webkit-overflow-scrolling': 'touch',
        '&::-webkit-scrollbar': {
          height: '4px',
          width: '4px',
          background: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
          background: theme('colors.accent.700'),
        },
        scrollbarWidth: 'thin',
        scrollbarColor: theme('colors.accent.700') + ' transparent',
      },
    },
    // typography
    typography: {
      html: {
        '@apply text-default': '',
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
      'a:not([class]), .link': {
        '@apply text-reset !important': {},
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
        color: theme('colors.accent.500'),
        textDecoration: 'underline',
        transitionProperty: theme('transitionProperty.colors'),
        transitionDuration: theme('transitionDuration.500'),
        transitionTimingFunction: theme('transitionTimingFunction.ease.out'),
        '&:hover': {
          color: theme('colors.accent.600'),
          transitionTimingFunction: theme('transitionTimingFunction.ease.in'),
        },
        '&:active': {
          color: theme('colors.accent.400'),
          transitionTimingFunction: theme('transitionTimingFunction.ease.in'),
        },
      },
      'p, .p': {
        marginBottom: theme('spacing.5'),
        '@apply text-reset mb-lc': {},
      },
      'h1, .h1': {
        marginTop: theme('spacing.8'),
        marginBottom: theme('spacing.6'),
        '@apply mt-fc mb-lc': {},
        fontFamily: theme('fontFamily.sans').toString(),
        fontWeight: theme('fontWeight.semibold'),
        fontSize: rem(30),
        lineHeight: theme('lineHeight.tight'),
        letterSpacing: theme('letterSpacing.normal'),
        textTransform: 'none',
        '@screen lg': {
          fontSize: rem(40),
        },
      },
      'h2, .h2': {
        marginTop: theme('spacing.8'),
        marginBottom: theme('spacing.6'),
        '@apply mt-fc mb-lc': {},
        fontFamily: theme('fontFamily.sans').toString(),
        fontWeight: theme('fontWeight.semibold'),
        fontSize: rem(30),
        lineHeight: theme('lineHeight.tight'),
        letterSpacing: theme('letterSpacing.normal'),
        textTransform: 'none',
        '@screen lg': {
          fontSize: rem(35),
        },
      },
      'h3, .h3': {
        marginTop: theme('spacing.8'),
        marginBottom: theme('spacing.6'),
        '@apply mt-fc mb-lc': {},
        fontFamily: theme('fontFamily.sans').toString(),
        fontWeight: theme('fontWeight.semibold'),
        fontSize: rem(25),
        lineHeight: theme('lineHeight.tight'),
        letterSpacing: theme('letterSpacing.normal'),
        textTransform: 'none',
        '@screen lg': {
          fontSize: rem(30),
        },
      },
      'h4, .h4': {
        marginTop: theme('spacing.8'),
        marginBottom: theme('spacing.6'),
        '@apply mt-fc mb-lc': {},
        fontFamily: theme('fontFamily.sans').toString(),
        fontWeight: theme('fontWeight.semibold'),
        fontSize: rem(20),
        lineHeight: theme('lineHeight.tight'),
        letterSpacing: theme('letterSpacing.normal'),
        textTransform: 'none',
      },
      'h5, .h5': {
        marginTop: theme('spacing.8'),
        marginBottom: theme('spacing.6'),
        '@apply mt-fc mb-lc': {},
        fontFamily: theme('fontFamily.sans').toString(),
        fontWeight: theme('fontWeight.semibold'),
        fontSize: rem(16),
        lineHeight: theme('lineHeight.tight'),
        letterSpacing: theme('letterSpacing.normal'),
        textTransform: 'none',
      },
      'h6, .h6': {
        marginTop: theme('spacing.8'),
        marginBottom: theme('spacing.6'),
        '@apply mt-fc mb-lc': {},
        fontFamily: theme('fontFamily.sans').toString(),
        fontWeight: theme('fontWeight.semibold'),
        fontSize: '13px',
        lineHeight: theme('lineHeight.tight'),
        letterSpacing: theme('letterSpacing.wide'),
        textTransform: 'uppercase',
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
            minHeight: '100%',
          },
        },
      },
    },
    // btn
    btn: {
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
        padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
        borderWidth: theme('borderWidth.default'),
        borderColor: theme('borderColor.transparent'),
        fontFamily: theme('fontFamily.sans').toString(),
        fontWeight: theme('fontWeight.semibold'),
        fontSize: rem(12),
        lineHeight: theme('lineHeight.tight'),
        letterSpacing: theme('letterSpacing.wider'),
        textTransform: 'uppercase',
        // animation
        transitionProperty: theme('transitionProperty.all'),
        transitionDuration: theme('transitionDuration.500'),
        transitionTimingFunction: theme('transitionTimingFunction.out'),
        '&:hover': {
          transitionTimingFunction: theme('transitionTimingFunction.in'),
        },
        '&:active': {
          transitionTimingFunction: theme('transitionTimingFunction.in'),
        },
      },
      '.btn-close': {
        cursor: 'pointer',
        position: 'absolute',
        zIndex: theme('zIndex.top'),
        top: '0',
        right: '0',
        padding: `${theme('spacing.5')}`,
        '& + *': {
          margin: '0 !important',
        },
      },
    },
    // card
    card: {
      '.card': {
        // setup
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
        zIndex: theme('zIndex.base'),
        '&:hover, &:active': {
          zIndex: theme('zIndex.active'),
        },
        // styles
        borderWidth: theme('borderWidth.default'),
        borderColor: theme('borderColor.transparent'),
        // animation
        transitionProperty: theme('transitionProperty.all'),
        transitionDuration: theme('transitionDuration.500'),
        transitionTimingFunction: theme('transitionTimingFunction.out'),
        '&:hover': {
          transitionTimingFunction: theme('transitionTimingFunction.in'),
        },
        '&:active': {
          transitionTimingFunction: theme('transitionTimingFunction.in'),
        },
      },
      '.card-design': {
        // setup
        '@apply design-absolute': '',
        borderRadius: 'inherit',
        transitionProperty: 'inherit',
        transitionDuration: 'inherit',
        transitionTimingFunction: 'inherit',
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
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
      },
      '.card-asset': {
        // setup
        position: 'relative',
        width: '100%',
        '> *': {
          width: '100%',
          height: 'auto',
        },
      },
      '.card-block': {
        // setup
        position: 'relative',
        width: '100%',
        // styles
        padding: `${theme('spacing.6')}`,
        fontSize: rem(14),
      },
      '.card-title': {
        // styles
        marginTop: theme('spacing.4'),
        marginBottom: theme('spacing.2'),
        '@apply mt-fc mb-lc': {},
      },
      // full
      '.card-full': {
        // setup
        '.card-block': {
          padding: theme('spacing.0'),
        },
        // styles
        '.card-design': {
          top: `-${theme('spacing.6')}`,
          left: `-${theme('spacing.6')}`,
          bottom: `-${theme('spacing.6')}`,
          right: `-${theme('spacing.6')}`,
        },
      },
    },
    // media
    media: {
      '.media-container': {
        // setup
        display: 'block',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        minHeight: '100%',
        borderRadius: 'inherit',
        // styles
        backgroundColor: theme('colors.gray.500'),
      },
      '.media-inner': {
        // setup
        position: 'absolute',
        top: '0',
        left: '0',
        bottom: '0',
        right: '0',
      },
      '.media': {
        // setup
        width: '100%',
        height: '100%',
      },
      '.media-container-responsive': {
        // responsive
        '.media-inner': {
          position: 'relative',
        },
      },
      '.media-container-16-9': {
        // aspect ratio
        paddingBottom: '56.2%',
      },
    },
    // table
    table: {
      '.table': {
        borderCollapse: 'collapse',
        width: '100%',
        th: {
          textAlign: 'left',
          verticalAlign: 'top',
          padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
          fontFamily: theme('fontFamily.sans').toString(),
          fontWeight: theme('fontWeight.semibold'),
          fontSize: rem(10),
          lineHeight: theme('lineHeight.tight'),
          letterSpacing: theme('letterSpacing.wider'),
          textTransform: 'uppercase',
        },
        td: {
          textAlign: 'left',
          verticalAlign: 'top',
          padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
          fontSize: rem(13),
        },
        // thead
        thead: {
          'th, td': {
            borderRightWidth: theme('borderWidth.default'),
            borderBottomWidth: theme('borderWidth.default'),
            borderColor: theme('borderColor.gray.200'),
            '&:last-child': {
              borderRight: '0',
            },
          },
        },
        // tbody
        tbody: {
          'th, td': {
            borderRightWidth: theme('borderWidth.default'),
            borderBottomWidth: theme('borderWidth.default'),
            borderColor: theme('borderColor.gray.200'),
            '&:last-child': {
              borderRight: '0',
            },
          },
          tr: {
            '&:last-child': {
              'th, td': {
                borderBottom: '0',
              },
            },
          },
        },
      },
      '.table-scroll': {
        '@apply overflow-sub': '',
        width: '100%',
        overflowX: 'hidden',
        overflowY: 'scroll',
      },
    },
    // badge
    badge: {
      '.badge': {
        // setup
        display: 'inline-block',
        verticalAlign: 'middle',
        // styles
        padding: `${theme('spacing.1')} ${theme('spacing.2')}`,
        borderWidth: theme('borderWidth.default'),
        borderColor: theme('borderColor.transparent'),
        fontFamily: theme('fontFamily.sans').toString(),
        fontWeight: theme('fontWeight.semibold'),
        fontSize: rem(10),
        lineHeight: theme('lineHeight.tight'),
        letterSpacing: theme('letterSpacing.wider'),
        textTransform: 'uppercase',
      },
    },
  },
})
