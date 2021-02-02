const round = num =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = px => `${round(px / 16)}rem`

module.exports = {
  component: theme => ({
    '.slider': {
      // setup
      position: 'relative',
      overflow: 'hidden',
    },
    '.slides': {
      // setup
      position: 'relative',
      display: 'inline-block', // @FIX autoheight values
      verticalAlign: 'top', // @FIX inline-block margin below
      width: '100%',
      // styles
      transitionProperty: 'height',
      transitionDuration: theme('transitionDuration.500'),
      transitionTimingFunction: theme('transitionTimingFunction.out'),
    },
    '.slide': {
      // setup
      position: 'relative',
    },
    '.slider-absolute': {
      // setup
      '.slide': {
        position: 'relative',
        display: 'none',
        '&.in': {
          display: 'block',
          zIndex: theme('zIndex.active'),
        },
        '&.out': {
          display: 'block',
        },
        '&.next': {
          display: 'block',
          zIndex: `calc(${theme('zIndex.active')} + 1)`,
        },
        '&:not(.in)': {
          position: 'absolute',
          top: '0',
          left: '0',
        },
      },
      // @FIX page load height without .active slides
      '&:not(.xt-slider)': {
        '.slide': {
          '&:first-child': {
            display: 'block !important',
            position: 'relative !important',
          },
        },
      },
    },
    '.slides-inner': {
      // prevent browser selection
      '-webkit-user-select': 'none',
      '-moz-user-select': 'none',
      '-ms-user-select': 'none',
      'user-select': 'none',
      // styles
      flexWrap: 'nowrap',
      alignItems: 'flex-start',
      // animation dragger
      transitionProperty: 'transform',
      transitionDuration: theme('transitionDuration.700'),
      transitionTimingFunction: theme('transitionTimingFunction.out'),
    },
    '.slider-pagination, .slider-navigation': {
      // styles
      paddingTop: theme('spacing.4'),
      alignItems: 'center',
      justifyContent: 'center',
    },
    '[data-xt-pag].btn': {
      // styles
      minHeight: '1.3rem',
      borderRadius: '2rem',
      padding: `${rem(7)} ${rem(11)}`,
      fontSize: rem(10),
      '&.active': {
        padding: `${rem(7)} ${rem(20)}`,
      },
      // animation
      transitionProperty: 'all',
      transitionDuration: theme('transitionDuration.500'),
      transitionTimingFunction: theme('transitionTimingFunction.out'),
    },
    '[data-xt-nav].btn': {
      minHeight: '1.3rem',
      borderRadius: '2rem',
      padding: `${rem(7)} ${rem(11)}`,
      fontSize: rem(10),
    },
    '.slider-expand': {
      // setup
      '.slides': {
        overflow: 'visible',
        height: 'auto !important',
      },
      '.slides-inner': {
        '@apply duration-none transform-none !important': '',
        flexWrap: 'wrap !important',
      },
      '.slide:not(.in)': {
        opacity: '1 !important',
      },
      '.xt-wrap, .slider-pagination, [data-xt-nav], .loader, .filler, .spinner': {
        display: 'none !important',
      },
    },
    '.xt-overflow-auto': {
      '.slider-pagination, [data-xt-nav], .xt-wrap': {
        display: 'none !important',
      },
      // @FIX disable slider if not overflowing
      '.slides-inner': {
        '@apply duration-none transform-none !important': '',
      },
    },
    '.xt-slider-disabled': {
      '&.slider': {
        // setup
        '.slider-pagination, [data-xt-nav]': {
          display: 'none !important',
        },
        '.xt-wrap': {
          visibility: 'hidden !important',
          opacity: '0 !important',
        },
      },
    },
  }),
}
