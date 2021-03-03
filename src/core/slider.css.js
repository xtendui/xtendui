module.exports = {
  component: theme => ({
    '.xt-slider': {
      position: 'relative',
      overflow: 'hidden',
    },
    '.xt-slides': {
      position: 'relative',
      display: 'inline-block', // @FIX autoheight values
      verticalAlign: 'top', // @FIX inline-block margin below
      width: '100%',
      // styles
      transitionProperty: 'height',
      transitionDuration: theme('transitionDuration.500'),
      transitionTimingFunction: theme('transitionTimingFunction.out'),
    },
    '.xt-slide': {
      position: 'relative',
    },
    '.xt-slider-absolute': {
      '.xt-slide': {
        position: 'relative',
        display: 'none',
        '&.in': {
          display: 'block',
          zIndex: theme('zIndex.10'),
        },
        '&.out': {
          display: 'block',
        },
        '&.next': {
          display: 'block',
          zIndex: `calc(${theme('zIndex.10')} + 1)`,
        },
        '&:not(.in)': {
          position: 'absolute',
          top: '0',
          left: '0',
        },
      },
      // @FIX page load height without .active slides
      '&:not(.xt-slider)': {
        '.xt-slide': {
          '&:first-child': {
            display: 'block !important',
            position: 'relative !important',
          },
        },
      },
    },
    '.xt-slides-inner': {
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
  }),
}
