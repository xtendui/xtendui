/*!
 * Xtend (https://xtendui.com/)
 * @copyright (c) 2017 - 2021 Riccardo Caroli
 * @license Apache-2.0 (https://github.com/minimit/xtendui/blob/beta/LICENSE)
 */

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
    '.xt-my-auto': {
      '&:first-child': {
        marginTop: '0',
      },
      '&:last-child': {
        marginBottom: '0',
      },
    },
    '.xt-h1': {
      // styles
      marginTop: theme('spacing.10'),
      marginBottom: theme('spacing.4'),
      fontFamily: theme('fontFamily.sans').toString(),
      fontWeight: theme('fontWeight.bold'),
      fontSize: rem(38),
      lineHeight: theme('lineHeight.tight'),
      letterSpacing: theme('letterSpacing.tight'),
      textTransform: 'none',
      '&:first-child': {
        marginTop: '0',
      },
      '&:last-child': {
        marginBottom: '0',
      },
    },
    '.xt-h2': {
      // styles
      marginTop: theme('spacing.10'),
      marginBottom: theme('spacing.4'),
      fontFamily: theme('fontFamily.sans').toString(),
      fontWeight: theme('fontWeight.bold'),
      fontSize: rem(34),
      lineHeight: theme('lineHeight.tight'),
      letterSpacing: theme('letterSpacing.tight'),
      textTransform: 'none',
      '&:first-child': {
        marginTop: '0',
      },
      '&:last-child': {
        marginBottom: '0',
      },
    },
    '.xt-h3': {
      // styles
      marginTop: theme('spacing.10'),
      marginBottom: theme('spacing.4'),
      fontFamily: theme('fontFamily.sans').toString(),
      fontWeight: theme('fontWeight.bold'),
      fontSize: rem(30),
      lineHeight: theme('lineHeight.tight'),
      letterSpacing: theme('letterSpacing.tight'),
      textTransform: 'none',
      '&:first-child': {
        marginTop: '0',
      },
      '&:last-child': {
        marginBottom: '0',
      },
    },
    '.xt-h4': {
      // styles
      marginTop: theme('spacing.5'),
      marginBottom: theme('spacing.3'),
      fontFamily: theme('fontFamily.sans').toString(),
      fontWeight: theme('fontWeight.bold'),
      fontSize: rem(26),
      lineHeight: theme('lineHeight.tight'),
      letterSpacing: theme('letterSpacing.tight'),
      textTransform: 'none',
      '&:first-child': {
        marginTop: '0',
      },
      '&:last-child': {
        marginBottom: '0',
      },
    },
    '.xt-h5': {
      // styles
      marginTop: theme('spacing.5'),
      marginBottom: theme('spacing.3'),
      fontFamily: theme('fontFamily.sans').toString(),
      fontWeight: theme('fontWeight.bold'),
      fontSize: rem(22),
      lineHeight: theme('lineHeight.tight'),
      letterSpacing: theme('letterSpacing.tight'),
      textTransform: 'none',
      '&:first-child': {
        marginTop: '0',
      },
      '&:last-child': {
        marginBottom: '0',
      },
    },
    '.xt-h6': {
      // styles
      marginTop: theme('spacing.5'),
      marginBottom: theme('spacing.2'),
      fontFamily: theme('fontFamily.sans').toString(),
      fontWeight: theme('fontWeight.bold'),
      fontSize: rem(18),
      lineHeight: theme('lineHeight.tight'),
      letterSpacing: theme('letterSpacing.tight'),
      textTransform: 'none',
      '&:first-child': {
        marginTop: '0',
      },
      '&:last-child': {
        marginBottom: '0',
      },
    },
    '.xt-p': {
      fontFamily: 'inherit',
      fontStyle: 'inherit',
      fontWeight: 'inherit',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      letterSpacing: 'inherit',
      textTransform: 'inherit',
      // styles
      marginTop: theme('spacing.0'),
      marginBottom: theme('spacing.3'),
      '&:last-child': {
        marginBottom: '0',
      },
    },
    '.xt-ul': {
      // styles
      marginBottom: theme('spacing.5'),
      '&:last-child': {
        marginBottom: '0',
      },
      '> li': {
        position: 'relative',
        marginBottom: theme('spacing.3'),
        paddingLeft: '1.25rem',
        '&:last-child': {
          marginBottom: '0',
        },
        '&:before': {
          position: 'absolute',
          display: 'inline-block',
          left: '0',
          content: '"\\2022"',
          color: theme('colors.gray.300'),
        },
      },
    },
    '.xt-ol': {
      // styles
      marginBottom: theme('spacing.5'),
      '&:last-child': {
        marginBottom: '0',
      },
      '> li': {
        position: 'relative',
        marginBottom: theme('spacing.3'),
        paddingLeft: '1.5rem',
        counterIncrement: 'ol-counter',
        '&:last-child': {
          marginBottom: '0',
        },
        '&:before': {
          position: 'absolute',
          display: 'inline-block',
          left: '0',
          content: 'counter(ol-counter) "."',
          color: theme('colors.gray.300'),
        },
      },
    },
    '.xt-dl': {
      // styles
      marginBottom: theme('spacing.5'),
      '&:last-child': {
        marginBottom: '0',
      },
    },
    '.xt-hr': {
      // styles
      marginTop: theme('spacing.5'),
      marginBottom: theme('spacing.5'),
      '&:first-child': {
        marginTop: '0',
      },
      '&:last-child': {
        marginBottom: '0',
      },
    },
    '.xt-figure': {
      // styles
      marginTop: theme('spacing.5'),
      marginBottom: theme('spacing.5'),
      '&:first-child': {
        marginTop: '0',
      },
      '&:last-child': {
        marginBottom: '0',
      },
    },
    '.xt-figcaption': {
      // styles
      marginTop: theme('spacing.3'),
      fontSize: rem(14),
      lineHeight: theme('lineHeight.snug'),
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
  component: {
    // body typography
    '.xt-body:not(.xt-optout-typography)': {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
    },
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
    'ul:not([class])': {
      '@apply xt-ul': '',
    },
    'ol:not([class])': {
      '@apply xt-ol': '',
    },
    'dl:not([class])': {
      '@apply xt-dl': '',
    },
    'hr:not([class])': {
      '@apply xt-hr': '',
    },
    'figure:not([class])': {
      '@apply xt-figure': '',
    },
    'figcaption:not([class])': {
      '@apply xt-figcaption': '',
    },
  },
}
