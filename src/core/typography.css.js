const round = num =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = px => `${round(px / 16)}rem`

module.exports = {
  variants: ['responsive'],
  utility: theme => ({
    '.h1': {
      // style
      marginTop: theme('spacing.7'),
      marginBottom: theme('spacing.5'),
      '@apply mt-fc mb-lc text-3xl md:text-4xl lg:text-5xl': {},
      fontFamily: theme('fontFamily.sans').toString(),
      fontWeight: theme('fontWeight.bold'),
      lineHeight: theme('lineHeight.none'),
      letterSpacing: theme('letterSpacing.tight'),
      textTransform: 'none',
    },
    '.h2': {
      // style
      marginTop: theme('spacing.6'),
      marginBottom: theme('spacing.4'),
      '@apply mt-fc mb-lc text-2xl md:text-3xl lg:text-4xl': {},
      fontFamily: theme('fontFamily.sans').toString(),
      fontWeight: theme('fontWeight.bold'),
      lineHeight: theme('lineHeight.none'),
      letterSpacing: theme('letterSpacing.tight'),
      textTransform: 'none',
    },
    '.h3': {
      // style
      marginTop: theme('spacing.5'),
      marginBottom: theme('spacing.3'),
      '@apply mt-fc mb-lc text-xl md:text-2xl lg:text-3xl': {},
      fontFamily: theme('fontFamily.sans').toString(),
      fontWeight: theme('fontWeight.bold'),
      lineHeight: theme('lineHeight.tight'),
      letterSpacing: theme('letterSpacing.tight'),
      textTransform: 'none',
    },
    '.h4': {
      // style
      marginTop: theme('spacing.5'),
      marginBottom: theme('spacing.3'),
      '@apply mt-fc mb-lc text-xl lg:text-2xl': {},
      fontFamily: theme('fontFamily.sans').toString(),
      fontWeight: theme('fontWeight.bold'),
      lineHeight: theme('lineHeight.tight'),
      letterSpacing: theme('letterSpacing.tight'),
      textTransform: 'none',
    },
    '.h5': {
      // style
      marginTop: theme('spacing.5'),
      marginBottom: theme('spacing.3'),
      '@apply mt-fc mb-lc text-xl': {},
      fontFamily: theme('fontFamily.sans').toString(),
      fontWeight: theme('fontWeight.bold'),
      lineHeight: theme('lineHeight.tight'),
      letterSpacing: theme('letterSpacing.tight'),
      textTransform: 'none',
    },
    '.h6': {
      // style
      marginTop: theme('spacing.5'),
      marginBottom: theme('spacing.3'),
      '@apply mt-fc mb-lc text-lg': {},
      fontFamily: theme('fontFamily.sans').toString(),
      fontWeight: theme('fontWeight.bold'),
      lineHeight: theme('lineHeight.tight'),
      letterSpacing: theme('letterSpacing.tight'),
      textTransform: 'none',
    },
    '.p': {
      // setup
      fontFamily: 'inherit',
      fontStyle: 'inherit',
      fontWeight: 'inherit',
      letterSpacing: 'inherit',
      textTransform: 'inherit',
      // style
      marginTop: theme('spacing.0'),
      marginBottom: theme('spacing.3'),
      '@apply text-reset mb-lc': {},
    },
    '.text-reset': {
      // setup
      fontFamily: 'inherit',
      fontStyle: 'inherit',
      fontWeight: 'inherit',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      letterSpacing: 'inherit',
      textTransform: 'inherit',
    },
    '.ellipsis': {
      // setup
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      '> *': {
        display: 'inline !important',
        verticalAlign: 'middle !important',
      },
    },
    '.lowercase-capitalize': {
      // setup
      textTransform: 'lowercase',
      '&:first-letter': {
        textTransform: 'uppercase',
      },
    },
  }),
  component: theme => ({
    html: {
      // style
      '@apply text-black links-default': '',
      lineHeight: 1.8,
    },
    body: {
      // style
      '@apply text-base xl:text-lg': '',
    },
    'h1:not([class])': {
      // setup
      '@apply h1': '',
    },
    'h2:not([class])': {
      // setup
      '@apply h2': '',
    },
    'h3:not([class])': {
      // setup
      '@apply h3': '',
    },
    'h4:not([class])': {
      // setup
      '@apply h4': '',
    },
    'h5:not([class])': {
      // setup
      '@apply h5': '',
    },
    'h6:not([class])': {
      // setup
      '@apply h6': '',
    },
    'p:not([class])': {
      // setup
      '@apply p': '',
    },
    strong: {
      // styles
      fontWeight: theme('fontWeight.semibold'),
    },
    blockquote: {
      // styles
      marginBottom: theme('spacing.3'),
      '@apply mb-lc': {},
    },
    code: {
      // styles
      fontSize: '0.95em',
      color: theme('colors.accent.600'),
    },
    '.links-inverse': {
      // styles
      code: {
        color: theme('colors.white'),
        opacity: '0.8',
      },
    },
    'ul:not([class]), ol:not([class])': {
      // style
      marginBottom: theme('spacing.3'),
      '@apply mb-lc': {},
      '> li': {
        position: 'relative',
        marginBottom: theme('spacing.3'),
        '@apply mb-lc': {},
        '&:before': {
          position: 'absolute',
          display: 'inline-block',
          left: '0',
        },
        '> ul:not([class]), > ol:not([class])': {
          marginTop: theme('spacing.3'),
        },
      },
    },
    'ul:not([class])': {
      // style
      '> li': {
        paddingLeft: '1.25rem',
        '&:before': {
          content: '"\\2022"',
          color: theme('colors.gray.600'),
        },
      },
    },
    'ol:not([class])': {
      // style
      '> li': {
        counterIncrement: 'ol-counter',
        paddingLeft: '1.5rem',
        '&:before': {
          content: 'counter(ol-counter) "."',
          color: theme('colors.gray.600'),
        },
      },
    },
    dl: {
      // style
      marginBottom: theme('spacing.3'),
      '@apply mb-lc': {},
    },
    hr: {
      // style
      marginTop: theme('spacing.6'),
      marginBottom: theme('spacing.6'),
      '@apply mt-fc mb-lc': {},
    },
    'figure, .figure': {
      // style
      marginTop: theme('spacing.6'),
      marginBottom: theme('spacing.6'),
      '@apply mt-fc mb-lc': {},
    },
    'figcaption, .figcaption': {
      // style
      marginTop: theme('spacing.3'),
      fontSize: rem(14),
      lineHeight: theme('lineHeight.snug'),
    },
  }),
}
