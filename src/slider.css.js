module.exports = {
  component: theme => ({
    '.xt-slider': {
      position: 'relative',
      overflow: 'hidden',
    },
    '.xt-slides': {
      position: 'relative',
      display: 'inline-flex', // fix autoheight values
      verticalAlign: 'top', // fix inline-flex margin below
      width: '100%',
      flexWrap: 'nowrap',
      alignItems: 'flex-start',
      // prevent browser selection
      '-webkit-user-select': 'none',
      '-moz-user-select': 'none',
      '-ms-user-select': 'none',
      'user-select': 'none',
    },
    '.xt-slide': {
      position: 'relative',
      zIndex: theme('zIndex.slide'),
    },
    '.xt-slider-absolute': {
      '.xt-slide': {
        position: 'relative',
        '&:not(.on):not(.in):not(.out)': {
          display: 'none',
        },
        '&:not(.on)': {
          position: 'absolute',
          top: '0',
          left: '0',
        },
      },
      // fix page load height without .on slides
      '&:not(.xt-slider-init)': {
        '.xt-slide': {
          '&:first-child': {
            display: 'block !important',
            position: 'relative !important',
          },
        },
      },
    },
  }),
}
