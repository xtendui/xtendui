const round = num =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = px => `${round(px / 16)}rem`

module.exports = {
  variant: ['responsive'],
  utility: theme => ({
    '.h1': {
      // style
      marginTop: theme('spacing.6'),
      marginBottom: theme('spacing.3'),
      '@apply mt-fc mb-lc': {},
      fontFamily: theme('fontFamily.sans').toString(),
      fontWeight: theme('fontWeight.bold'),
      fontSize: rem(35),
      lineHeight: theme('lineHeight.snug'),
      letterSpacing: theme('letterSpacing.tight'),
      textTransform: 'none',
      '@screen lg': {
        fontSize: rem(40),
      },
    },
    '.h2': {
      // style
      marginTop: theme('spacing.6'),
      marginBottom: theme('spacing.3'),
      '@apply mt-fc mb-lc': {},
      fontFamily: theme('fontFamily.sans').toString(),
      fontWeight: theme('fontWeight.semibold'),
      fontSize: rem(30),
      lineHeight: theme('lineHeight.snug'),
      letterSpacing: theme('letterSpacing.tight'),
      textTransform: 'none',
      '@screen lg': {
        fontSize: rem(35),
      },
    },
    '.h3': {
      // style
      marginTop: theme('spacing.6'),
      marginBottom: theme('spacing.3'),
      '@apply mt-fc mb-lc': {},
      fontFamily: theme('fontFamily.sans').toString(),
      fontWeight: theme('fontWeight.semibold'),
      fontSize: rem(25),
      lineHeight: theme('lineHeight.snug'),
      letterSpacing: theme('letterSpacing.tight'),
      textTransform: 'none',
      '@screen lg': {
        fontSize: rem(30),
      },
    },
    '.h4': {
      // style
      marginTop: theme('spacing.4'),
      marginBottom: theme('spacing.2'),
      '@apply mt-fc mb-lc': {},
      fontFamily: theme('fontFamily.sans').toString(),
      fontWeight: theme('fontWeight.semibold'),
      fontSize: rem(24),
      lineHeight: theme('lineHeight.snug'),
      letterSpacing: theme('letterSpacing.tight'),
      textTransform: 'none',
    },
    '.h5': {
      // style
      marginTop: theme('spacing.4'),
      marginBottom: theme('spacing.2'),
      '@apply mt-fc mb-lc': {},
      fontFamily: theme('fontFamily.sans').toString(),
      fontWeight: theme('fontWeight.semibold'),
      fontSize: rem(18),
      lineHeight: theme('lineHeight.snug'),
      letterSpacing: theme('letterSpacing.tight'),
      textTransform: 'none',
    },
    '.h6': {
      // style
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
      // style
      marginTop: theme('spacing.6'),
      marginBottom: theme('spacing.6'),
      '@apply mt-fc mb-lc': {},
      paddingTop: theme('spacing.3'),
      paddingBottom: theme('spacing.3'),
      paddingLeft: theme('spacing.6'),
      paddingRight: theme('spacing.6'),
    },
    '.p': {
      // setup
      fontFamily: 'inherit',
      fontStyle: 'inherit',
      fontWeight: 'inherit',
      letterSpacing: 'inherit',
      textTransform: 'inherit',
      // style
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
      // base rem value
      fontSize: rem(14),
      '@screen sm': {
        fontSize: rem(15.5), // odd number with .5 to fix chrome alignment
      },
      '@screen md': {
        fontSize: rem(16),
      },
      '@screen xl': {
        fontSize: rem(17.5), // odd number with .5 to fix chrome alignment
      },
      // style
      '@apply text-black links-default': '',
      lineHeight: 1.8,
    },
    body: {
      // style
      '@apply text-base': '',
    },
    h1: {
      // setup
      '@apply h1': '',
    },
    h2: {
      // setup
      '@apply h2': '',
    },
    h3: {
      // setup
      '@apply h3': '',
    },
    h4: {
      // setup
      '@apply h4': '',
    },
    h5: {
      // setup
      '@apply h5': '',
    },
    h6: {
      // setup
      '@apply h6': '',
    },
    p: {
      // setup
      '@apply p': '',
      // @FIX NESTED APPLY
      '@apply mb-lc': {},
    },
    strong: {
      // styles
      fontWeight: theme('fontWeight.semibold'),
    },
    blockquote: {
      // styles
      marginTop: theme('spacing.6'),
      marginBottom: theme('spacing.3'),
      '@apply mt-fc mb-lc': {},
    },
    code: {
      // styles
      fontSize: '.875em',
      color: '#7567F8',
    },
    '.links-inverse': {
      // styles
      code: {
        color: theme('colors.white'),
        opacity: '0.75',
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
