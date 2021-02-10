const round = num =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = px => `${round(px / 16)}rem`

module.exports = {
  variants: ['responsive'],
  utility: theme => ({
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
    '.h1': {
      // styles
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
      // styles
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
      // styles
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
      // styles
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
      // styles
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
      // styles
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
      fontFamily: 'inherit',
      fontStyle: 'inherit',
      fontWeight: 'inherit',
      letterSpacing: 'inherit',
      textTransform: 'inherit',
      // styles
      marginTop: theme('spacing.0'),
      marginBottom: theme('spacing.3'),
      '@apply text-reset mb-lc': {},
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
    '.ellipsis': {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      '> *': {
        display: 'inline !important',
        verticalAlign: 'middle !important',
      },
    },
    '.lowercase-capitalize': {
      textTransform: 'lowercase',
      '&:first-letter': {
        textTransform: 'uppercase',
      },
    },
  }),
  component: theme => ({
    'h1:not([class])': {
      '@apply h1': '',
    },
    'h2:not([class])': {
      '@apply h2': '',
    },
    'h3:not([class])': {
      '@apply h3': '',
    },
    'h4:not([class])': {
      '@apply h4': '',
    },
    'h5:not([class])': {
      '@apply h5': '',
    },
    'h6:not([class])': {
      '@apply h6': '',
    },
    'p:not([class])': {
      '@apply p': '',
    },
    strong: {
      // styles
      fontWeight: theme('fontWeight.semibold'),
    },
    'ul:not([class]), ol:not([class])': {
      // styles
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
      // styles
      '> li': {
        paddingLeft: '1.25rem',
        '&:before': {
          content: '"\\2022"',
          color: theme('colors.gray.600'),
        },
      },
    },
    'ol:not([class])': {
      // styles
      '> li': {
        counterIncrement: 'ol-counter',
        paddingLeft: '1.5rem',
        '&:before': {
          content: 'counter(ol-counter) "."',
          color: theme('colors.gray.600'),
        },
      },
    },
    'dl:not([class])': {
      // styles
      marginBottom: theme('spacing.3'),
      '@apply mb-lc': {},
    },
    'hr:not([class])': {
      // styles
      marginTop: theme('spacing.6'),
      marginBottom: theme('spacing.6'),
      '@apply mt-fc mb-lc': {},
    },
    'figure:not([class])': {
      // styles
      marginTop: theme('spacing.6'),
      marginBottom: theme('spacing.6'),
      '@apply mt-fc mb-lc': {},
    },
    'figcaption:not([class])': {
      // styles
      marginTop: theme('spacing.3'),
      fontSize: rem(14),
      lineHeight: theme('lineHeight.snug'),
    },
  }),
}
