module.exports = {
  boxShadow: {
    overlay: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
  utility: theme => ({
    '.xt-overlay-container': {
      ...theme('container.padding'),
      DEFAULT: 0, // override padding first breakpoint
    },
  }),
  component: theme => ({
    '.xt-overlay': {
      '@apply xt-overflow-main': '',
      position: 'fixed',
      zIndex: theme('zIndex.overlay'),
      top: '0',
      left: '0',
      bottom: '0', // @FIX no height or it bugs collapse animation
      right: '0', // @FIX no width or it bugs collapse animation
      overflowY: 'scroll',
      '&:not(.in):not(.out)': {
        display: 'none',
      },
      '&.out': {
        pointerEvents: 'none',
      },
    },
    '.xt-overlay-item': {
      display: 'inline-block',
    },
    '.xt-overlay-container': {
      display: 'flex',
      flexWrap: 'nowrap',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 'auto', // @FIX http://stackoverflow.com/questions/33454533/cant-scroll-to-top-of-flex-item-that-is-overflowing-container
      width: '100%',
      minHeight: '100vh',
    },
    '.xt-overlay-inner': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      width: '100%',
    },
  }),
}
