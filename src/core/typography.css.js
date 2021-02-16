const round = num =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = px => `${round(px / 16)}rem`

module.exports = {
  variants: ['responsive'],
  utility: theme => ({
    '.xt-mt-auto': {
      '&:first-child': {
        marginTop: '0',
      },
    },
    '.xt-mb-auto': {
      '&:last-child': {
        marginBottom: '0',
      },
    },
    '.xt-m-auto': {
      '&:first-child': {
        marginTop: '0',
      },
      '&:last-child': {
        marginBottom: '0',
      },
    },
    '.xt-h1': {
      // styles
      marginTop: theme('spacing.7'),
      marginBottom: theme('spacing.5'),
      '@apply xt-m-auto text-3xl md:text-4xl lg:text-5xl': {},
      fontFamily: theme('fontFamily.sans').toString(),
      fontWeight: theme('fontWeight.bold'),
      lineHeight: theme('lineHeight.none'),
      letterSpacing: theme('letterSpacing.tight'),
      textTransform: 'none',
    },
    '.xt-h2': {
      // styles
      marginTop: theme('spacing.6'),
      marginBottom: theme('spacing.4'),
      '@apply xt-m-auto text-2xl md:text-3xl lg:text-4xl': {},
      fontFamily: theme('fontFamily.sans').toString(),
      fontWeight: theme('fontWeight.bold'),
      lineHeight: theme('lineHeight.none'),
      letterSpacing: theme('letterSpacing.tight'),
      textTransform: 'none',
    },
    '.xt-h3': {
      // styles
      marginTop: theme('spacing.5'),
      marginBottom: theme('spacing.3'),
      '@apply xt-m-auto text-xl md:text-2xl lg:text-3xl': {},
      fontFamily: theme('fontFamily.sans').toString(),
      fontWeight: theme('fontWeight.bold'),
      lineHeight: theme('lineHeight.tight'),
      letterSpacing: theme('letterSpacing.tight'),
      textTransform: 'none',
    },
    '.xt-h4': {
      // styles
      marginTop: theme('spacing.5'),
      marginBottom: theme('spacing.3'),
      '@apply xt-m-auto text-xl lg:text-2xl': {},
      fontFamily: theme('fontFamily.sans').toString(),
      fontWeight: theme('fontWeight.bold'),
      lineHeight: theme('lineHeight.tight'),
      letterSpacing: theme('letterSpacing.tight'),
      textTransform: 'none',
    },
    '.xt-h5': {
      // styles
      marginTop: theme('spacing.5'),
      marginBottom: theme('spacing.3'),
      '@apply xt-m-auto text-xl': {},
      fontFamily: theme('fontFamily.sans').toString(),
      fontWeight: theme('fontWeight.bold'),
      lineHeight: theme('lineHeight.tight'),
      letterSpacing: theme('letterSpacing.tight'),
      textTransform: 'none',
    },
    '.xt-h6': {
      // styles
      marginTop: theme('spacing.5'),
      marginBottom: theme('spacing.3'),
      '@apply xt-m-auto text-lg': {},
      fontFamily: theme('fontFamily.sans').toString(),
      fontWeight: theme('fontWeight.bold'),
      lineHeight: theme('lineHeight.tight'),
      letterSpacing: theme('letterSpacing.tight'),
      textTransform: 'none',
    },
    '.xt-p': {
      fontFamily: 'inherit',
      fontStyle: 'inherit',
      fontWeight: 'inherit',
      letterSpacing: 'inherit',
      textTransform: 'inherit',
      // styles
      marginTop: theme('spacing.0'),
      marginBottom: theme('spacing.3'),
      '@apply xt-text-reset xt-mb-auto': {},
    },
    '.xt-text-reset': {
      fontFamily: 'inherit',
      fontStyle: 'inherit',
      fontWeight: 'inherit',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      letterSpacing: 'inherit',
      textTransform: 'inherit',
    },
    '.xt-lowercase-capitalize': {
      textTransform: 'lowercase',
      '&:first-letter': {
        textTransform: 'uppercase',
      },
    },
  }),
  component: theme => ({
    'h1:not([class])': {
      '@apply xt-h1': '',
    },
    'h2:not([class])': {
      '@apply xt-h2': '',
    },
    'h3:not([class])': {
      '@apply xt-h3': '',
    },
    'h4:not([class])': {
      '@apply xt-h4': '',
    },
    'h5:not([class])': {
      '@apply xt-h5': '',
    },
    'h6:not([class])': {
      '@apply xt-h6': '',
    },
    'p:not([class])': {
      '@apply xt-p': '',
    },
    strong: {
      // styles
      fontWeight: theme('fontWeight.semibold'),
    },
    'ul:not([class]), ol:not([class])': {
      // styles
      marginBottom: theme('spacing.3'),
      '@apply xt-mb-auto': {},
      '> li': {
        position: 'relative',
        marginBottom: theme('spacing.3'),
        '@apply xt-mb-auto': {},
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
      '@apply xt-mb-auto': {},
    },
    'hr:not([class])': {
      // styles
      marginTop: theme('spacing.6'),
      marginBottom: theme('spacing.6'),
      '@apply xt-m-auto': {},
    },
    'figure:not([class])': {
      // styles
      marginTop: theme('spacing.6'),
      marginBottom: theme('spacing.6'),
      '@apply xt-m-auto': {},
    },
    'figcaption:not([class])': {
      // styles
      marginTop: theme('spacing.3'),
      fontSize: rem(14),
      lineHeight: theme('lineHeight.snug'),
    },
  }),
}
