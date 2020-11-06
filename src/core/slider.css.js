const round = num =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = px => `${round(px / 16)}rem`

module.exports = {
  variants: ['responsive'],
  utility: {
    '.slider-disable': {
      // setup
      '@apply xt-disable-after-init': '',
      '.slider-pagination, [data-xt-nav]': {
        display: 'none !important',
      },
      '.xt-wrap': {
        visibility: 'hidden !important',
        opacity: '0 !important',
      },
      // @FIX do calculation first
      '&.xt-disabled': {
        '.slide:not(.in)': {
          visibility: 'hidden !important',
          opacity: '0 !important',
          height: '0 !important',
        },
      },
    },
    '.slider-expand': {
      // setup
      '@apply xt-disable': '',
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
  },
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
      '&.xt-autoHeight': {
        // animation autoHeight
        transitionProperty: 'height',
        transitionDuration: theme('transitionDuration.500'),
        transitionTimingFunction: theme('transitionTimingFunction.ease.inOut'),
      },
    },
    '.slide': {
      // setup
      position: 'relative',
    },
    '.slide-absolute': {
      // setup
      position: 'relative',
      display: 'none',
      '&.active': {
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
      // styles
      flexWrap: 'nowrap',
      alignItems: 'flex-start',
      // animation dragger
      transitionProperty: 'transform',
      transitionDuration: theme('transitionDuration.500'),
      transitionTimingFunction: theme('transitionTimingFunction.ease.inOut'),
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
      transitionTimingFunction: theme('transitionTimingFunction.ease.inOut'),
    },
    '[data-xt-nav].btn': {
      minHeight: '1.3rem',
      borderRadius: '2rem',
      padding: `${rem(7)} ${rem(11)}`,
      fontSize: rem(10),
    },
    '.xt-overflow-auto': {
      '@apply xt-disable': '',
      '.slider-pagination, [data-xt-nav], .xt-wrap': {
        display: 'none !important',
      },
      // @FIX disable slider if not overflowing
      '.slides-inner': {
        '@apply duration-none transform-none !important': '',
      },
    },
  }),
}
