module.exports = {
  component: theme => ({
    '.xt-slider': {
      position: 'relative',
      overflow: 'hidden',
    },
    '.xt-slides': {
      position: 'relative',
      display: 'inline-block', // fix autoheight values
      verticalAlign: 'top', // fix inline-block margin below
      width: '100%',
    },
    '.xt-slide': {
      position: 'relative',
      zIndex: theme('zIndex.slide'),
    },
    '.xt-slider-absolute': {
      '.xt-slide': {
        position: 'relative',
        '&:not(.active):not(.in):not(.out)': {
          display: 'none',
        },
        '&:not(.active)': {
          position: 'absolute',
          top: '0',
          left: '0',
        },
      },
      // fix page load height without .active slides
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
      flexWrap: 'nowrap',
      alignItems: 'flex-start',
      // prevent browser selection
      '-webkit-user-select': 'none',
      '-moz-user-select': 'none',
      '-ms-user-select': 'none',
      'user-select': 'none',
    },
  }),
}
