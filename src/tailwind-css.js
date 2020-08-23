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
      '.design-setup': {
        content: '',
        position: 'absolute',
        zIndex: '-1',
        top: '0',
        left: '0',
        bottom: '0',
        right: '0',
        borderRadius: 'inherit',
        transitionProperty: 'inherit',
        transitionDuration: 'inherit',
        transitionTimingFunction: 'inherit',
      },
    },
    typography: {
      '.text-default': {
        '@apply text-accent-900': '',
        'a:not([class]), .link': {
          '@apply text-accent-500 !important': '',
        },
      },
      '.text-inverse': {
        '@apply text-white': '',
        'a:not([class]), .link': {
          '@apply text-white !important': '',
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
    javascript: {
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
      '.xt-disable': {
        '&:after': {
          display: 'none',
          content: 'xt-disable',
        },
      },
      '.xt-disable-after-init': {
        '&:after': {
          display: 'none',
          content: 'xt-disable-after-init',
        },
      },
    },
  },
  components: {
    // structure
    structure: {
      ':focus': {
        outline: 'none !important', // disable focus outline
      },
      html: {
        touchAction: 'manipulation', // disable double-tap
        '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)', // disable tap highlight
        height: '100%',
      },
      body: {
        '@apply overflow-main': '',
        height: '100%',
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
        lineHeight: theme('lineHeight.snug'),
        letterSpacing: theme('letterSpacing.normal'),
        textTransform: 'none',
        '@screen lg': {
          fontSize: rem(40),
        },
      },
      'h2, .h2': {
        marginTop: theme('spacing.6'),
        marginBottom: theme('spacing.4'),
        '@apply mt-fc mb-lc': {},
        fontFamily: theme('fontFamily.sans').toString(),
        fontWeight: theme('fontWeight.semibold'),
        fontSize: rem(30),
        lineHeight: theme('lineHeight.snug'),
        letterSpacing: theme('letterSpacing.normal'),
        textTransform: 'none',
        '@screen lg': {
          fontSize: rem(35),
        },
      },
      'h3, .h3': {
        marginTop: theme('spacing.6'),
        marginBottom: theme('spacing.4'),
        '@apply mt-fc mb-lc': {},
        fontFamily: theme('fontFamily.sans').toString(),
        fontWeight: theme('fontWeight.semibold'),
        fontSize: rem(25),
        lineHeight: theme('lineHeight.snug'),
        letterSpacing: theme('letterSpacing.normal'),
        textTransform: 'none',
        '@screen lg': {
          fontSize: rem(30),
        },
      },
      'h4, .h4': {
        marginTop: theme('spacing.4'),
        marginBottom: theme('spacing.2'),
        '@apply mt-fc mb-lc': {},
        fontFamily: theme('fontFamily.sans').toString(),
        fontWeight: theme('fontWeight.semibold'),
        fontSize: rem(20),
        lineHeight: theme('lineHeight.snug'),
        letterSpacing: theme('letterSpacing.normal'),
        textTransform: 'none',
      },
      'h5, .h5': {
        marginTop: theme('spacing.4'),
        marginBottom: theme('spacing.2'),
        '@apply mt-fc mb-lc': {},
        fontFamily: theme('fontFamily.sans').toString(),
        fontWeight: theme('fontWeight.semibold'),
        fontSize: rem(16),
        lineHeight: theme('lineHeight.snug'),
        letterSpacing: theme('letterSpacing.normal'),
        textTransform: 'none',
      },
      'h6, .h6': {
        marginTop: theme('spacing.4'),
        marginBottom: theme('spacing.2'),
        '@apply mt-fc mb-lc': {},
        fontFamily: theme('fontFamily.sans').toString(),
        fontWeight: theme('fontWeight.semibold'),
        fontSize: '13px',
        lineHeight: theme('lineHeight.snug'),
        letterSpacing: theme('letterSpacing.wide'),
        textTransform: 'uppercase',
      },
      '.h-block': {
        marginTop: theme('spacing.8'),
        marginBottom: theme('spacing.6'),
        '@apply mt-fc mb-lc': {},
        paddingTop: theme('spacing.3'),
        paddingBottom: theme('spacing.3'),
        paddingLeft: theme('spacing.6'),
        paddingRight: theme('spacing.6'),
      },
    },
    // list
    list: {
      '.list': {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'flex-start',
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
        borderWidth: theme('borderWidth.default'),
        borderColor: theme('borderColor.transparent'),
        fontFamily: theme('fontFamily.sans').toString(),
        fontWeight: theme('fontWeight.semibold'),
        lineHeight: theme('lineHeight.snug'),
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
      '.btn-small': {
        // styles
        padding: `${rem(7)} ${rem(12)}`,
        fontSize: rem(11),
      },
      '.btn-medium': {
        // styles
        padding: `${rem(8)} ${rem(14)}`,
        fontSize: rem(12),
      },
      '.btn-large': {
        // styles
        padding: `${rem(9)} ${rem(16)}`,
        fontSize: rem(13),
      },
      '.btn-close': {
        // setup
        cursor: 'pointer',
        position: 'absolute',
        zIndex: theme('zIndex.top'),
        top: '0',
        right: '0',
        '& + *': {
          margin: '0 !important',
        },
        // styles
        padding: `${theme('spacing.5')}`,
      },
    },
    // card
    card: {
      '.card': {
        // setup
        '@apply flex-auto': '',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        zIndex: theme('zIndex.base'),
        '&:hover, &:active': {
          zIndex: theme('zIndex.active'),
        },
        // styles
        borderWidth: theme('borderWidth.0'),
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
      '.card-small': {
        // styles
        minWidth: `${rem(250)}`,
      },
      '.card-medium': {
        // styles
        minWidth: `${rem(400)}`,
      },
      '.card-large': {
        // styles
        minWidth: `${rem(650)}`,
      },
      '.card-block': {
        // setup
        position: 'relative',
        width: '100%',
      },
      '.card-block-small': {
        // styles
        padding: `${rem(25)}`,
        fontSize: rem(12),
      },
      '.card-block-medium': {
        // styles
        padding: `${rem(30)}`,
        fontSize: rem(14),
      },
      '.card-block-large': {
        // styles
        padding: `${rem(40)}`,
        fontSize: rem(16),
      },
      '.card-design': {
        // setup
        '@apply design-setup': '',
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
        // setup
        borderCollapse: 'separate',
        borderSpacing: '0',
        width: '100%',
      },
      th: {
        // styles
        verticalAlign: 'top',
        padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
        fontFamily: theme('fontFamily.sans').toString(),
        fontWeight: theme('fontWeight.semibold'),
        fontSize: rem(10),
        lineHeight: theme('lineHeight.snug'),
        letterSpacing: theme('letterSpacing.wider'),
        textTransform: 'uppercase',
        textAlign: 'left',
      },
      td: {
        // styles
        verticalAlign: 'top',
        padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
        fontSize: rem(13),
        textAlign: 'left',
      },
      'th, td': {
        // styles
        borderRightWidth: theme('borderWidth.default'),
        borderBottomWidth: theme('borderWidth.default'),
        borderColor: theme('borderColor.gray.200'),
        '&:last-child': {
          borderRight: '0',
        },
      },
      tbody: {
        // styles
        tr: {
          '&:last-child': {
            'th, td': {
              borderBottom: '0',
            },
          },
        },
      },
      '.table-scroll': {
        // setup
        '@apply overflow-sub': '',
        width: '100%',
        overflowX: 'hidden',
        overflowY: 'scroll',
      },
    },
    // drop
    drop: {
      '.drop-container': {
        // setup
        position: 'relative',
      },
      '.drop': {
        // setup
        '@apply toggle-block': '',
        position: 'absolute',
        zIndex: 'inherit',
        '&.in': {
          zIndex: theme('zIndex.drop'),
        },
        '&.out': {
          zIndex: theme('zIndex.drop') - 1,
        },
        // styles
        '@apply p-2 drop-left drop-bottom': '',
      },
      '.drop-inner': {
        // setup
        position: 'relative',
        zIndex: theme('zIndex.drop'),
      },
      '.drop-design': {
        // setup
        '@apply design-setup': '',
      },
      '.drop-container-static': {
        // setup
        position: 'static',
        '> .drop': {
          width: '100%',
          '> .drop-inner': {
            width: '100%',
          },
          left: '0 !important',
          right: '0 !important',
        },
      },
      '.drop-container-disable': {
        // setup
        '@apply xt-disable': '',
        position: 'initial',
        '> a, > button': {
          display: 'none',
        },
        '> .drop': {
          display: 'inline-block',
          position: 'relative',
          top: 'auto',
          left: 'auto',
          right: 'auto',
          bottom: 'auto',
          '> .drop-inner': {
            zIndex: 'initial',
            '> .drop-design': {
              display: 'none',
            },
            '> .card': {
              '@apply card-disable': '',
            },
          },
        },
      },
      '.drop-before': {
        // setup
        left: 'auto',
        right: '100%',
      },
      '.drop-after': {
        // setup
        left: '100%',
        right: 'auto',
      },
      '.drop-left': {
        // setup
        left: '0',
        right: 'auto',
      },
      '.drop-right': {
        // setup
        left: 'auto',
        right: '0',
      },
      '.drop-bottom': {
        // setup
        top: '100%',
        bottom: 'auto',
      },
      '.drop-top': {
        // setup
        top: 'auto',
        bottom: '100%',
      },
      '.drop-center': {
        // setup
        '&:before': {
          display: 'none',
          content: 'xt-drop-center',
        },
      },
      '.drop-middle': {
        // setup
        paddingTop: '0',
        paddingBottom: '0',
        '&:after': {
          display: 'none',
          content: 'xt-drop-middle',
        },
      },
      '.drop-contain-bottom': {
        // setup
        '@apply drop-middle': '',
        top: 'auto',
        bottom: '0',
      },
      '.drop-contain-top': {
        // setup
        '@apply drop-middle': '',
        top: '0',
        bottom: 'auto',
      },
    },
    // overlay
    overlay: {
      '.overlay': {
        // setup
        '@apply toggle-flex overflow-main': '',
        position: 'fixed',
        zIndex: theme('zIndex.overlay'),
        top: '0',
        left: '0',
        bottom: '0', // @FIX no height or it bugs collapse animation
        right: '0', // @FIX no width or it bugs collapse animation
        overflow: 'hidden',
      },
      '.overlay-design': {
        // setup
        '@apply design-setup': '',
      },
      '.overlay-container': {
        // setup
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 'auto', // @FIX http://stackoverflow.com/questions/33454533/cant-scroll-to-top-of-flex-item-that-is-overflowing-container
        width: '100%',
        minHeight: '100vh',
        padding: theme('container.padding.default'),
        '@screen sm': {
          padding: theme('container.padding.sm'),
        },
        '@screen md': {
          padding: theme('container.padding.md'),
        },
        '@screen lg': {
          padding: theme('container.padding.lg'),
        },
        '@screen xl': {
          padding: theme('container.padding.xl'),
        },
      },
      '.overlay-inner': {
        // setup
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        position: 'relative',
        zIndex: theme('zIndex.overlay'),
        width: '100%',
        borderRadius: 'inherit',
      },
      '.overlay-screen': {
        // setup
        '.overlay-container': {
          position: 'relative',
          zIndex: theme('zIndex.overlay'),
          padding: '0 !important',
          '.overlay-inner': {
            position: 'static',
          },
        },
        '.overlay-inner': {
          '@apply flex-auto': '',
          display: 'flex',
          flexDirection: 'column',
        },
      },
      '.overlay-disable': {
        '@apply xt-disable': '',
        display: 'flex !important',
        overflow: 'initial !important',
        position: 'static',
        zIndex: 'initial',
        top: 'auto',
        left: 'auto',
        bottom: 'auto',
        right: 'auto',
        width: 'auto',
        height: 'auto',
        '.overlay-design': {
          display: 'none',
        },
        '.overlay-container': {
          zIndex: 'initial',
          padding: '0',
          width: '100%',
          minHeight: 'auto',
          maxWidth: 'none',
        },
        '.overlay-inner': {
          '> .card': {
            '@apply card-disable': '',
          },
        },
        '> .backdrop': {
          display: 'none !important',
        },
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
        lineHeight: theme('lineHeight.snug'),
        letterSpacing: theme('letterSpacing.wider'),
        textTransform: 'uppercase',
      },
    },
    // javascript
    javascript: {
      '.backdrop': {
        // setup
        position: 'fixed',
        zIndex: theme('zIndex.backdrop'),
        top: '0',
        right: '0',
        width: '100%',
        height: '100%',
        // styles
        '@apply bg-gray-900 bg-opacity-25': '',
      },
      'html.xt-scrollbar': {
        // setup
        body: {
          overflowY: 'hidden',
        },
        '.overlay': {
          overflowY: 'scroll',
        },
      },
    },
  },
})
