module.exports = {
  component: theme => ({
    '.slider': {
      position: 'relative',
      overflow: 'hidden',
    },
    '.slides': {
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
      position: 'relative',
    },
    '.slider-absolute': {
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
    '.slider-expand': {
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
      '.xt-wrap, .slider-ui, .loader, .filler, .spinner': {
        display: 'none !important',
      },
    },
    '.xt-overflow-auto': {
      '.slider-ui, .xt-wrap': {
        display: 'none !important',
      },
      // @FIX disable slider if not overflowing
      '.slides-inner': {
        '@apply duration-none transform-none !important': '',
      },
    },
    '.xt-slider-disabled': {
      '&.slider': {
        '.slider-ui': {
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
