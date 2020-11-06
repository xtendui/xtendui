module.exports = {
  utility: {
    '.sticky-disable': {
      // setup
      '@apply xt-disable': '',
      position: 'relative !important',
      top: 'initial !important',
      left: 'initial !important',
      right: 'initial !important',
      bottom: 'initial !important',
      '&.xt-clone': {
        display: 'none !important',
      },
      '&:not(.xt-clone)': {
        position: 'relative !important',
      },
    },
  },
  component: theme => ({
    '.xt-sticky': {
      // setup
      '&.xt-clone': {
        pointerEvents: 'none',
        position: 'relative',
        visibility: 'hidden',
        top: '0',
        width: '100%',
      },
      '&:not(.xt-clone)': {
        position: 'relative',
        width: '100%',
      },
      '&.xt-clone:not(.in)': {
        position: 'absolute',
      },
      '&:not(.xt-clone):not(.in)': {
        position: 'relative',
      },
      '.show-sticky': {
        display: 'none',
      },
      '.hide-sticky': {
        display: 'block',
      },
      '&:not(.xt-clone).active': {
        position: 'fixed',
        zIndex: theme('zIndex.sticky'),
        width: '100%',
        '.show-sticky': {
          display: 'block',
        },
        '.hide-sticky': {
          display: 'none',
        },
      },
    },
    '.xt-sticky-absolute': {
      // setup
      '&.xt-clone': {
        position: 'relative',
      },
      '&.xt-clone:not(.in)': {
        position: 'relative',
      },
      '&:not(.xt-clone):not(.in)': {
        position: 'relative',
      },
      '&.xt-fixed:not(.xt-clone):not(.in)': {
        position: 'absolute',
        width: '100%',
      },
    },
    '.xt-sticky-fixed': {
      // setup
      '&.xt-clone': {
        position: 'relative',
      },
      '&.xt-clone:not(.in)': {
        position: 'relative',
      },
      '&:not(.xt-clone):not(.in)': {
        position: 'relative',
      },
      '&.xt-fixed:not(.xt-clone):not(.in)': {
        position: 'fixed',
        zIndex: theme('zIndex.sticky'),
        width: '100%',
      },
    },
    '.xt-sticky-fixed-always': {
      // setup
      '&.xt-clone': {
        position: 'absolute',
      },
      '&.xt-clone:not(.in)': {
        position: 'absolute',
      },
      '&:not(.xt-clone):not(.in)': {
        position: 'fixed',
        zIndex: theme('zIndex.sticky'),
        width: '100%',
      },
      '&.xt-fixed:not(.xt-clone):not(.in)': {
        position: 'fixed',
        zIndex: theme('zIndex.sticky'),
        width: '100%',
      },
    },
    '.sticky-moving': {
      // animation
      transitionProperty: 'top, bottom, opacity',
      transitionDuration: theme('transitionDuration.500'),
      transitionTimingFunction: theme('transitionTimingFunction.in-out'),
    },
    '.sticky-hide': {
      // styles
      opacity: '0',
    },
    '.sticky-disable': {
      // styles
      opacity: '1 !important',
    },
  }),
}
