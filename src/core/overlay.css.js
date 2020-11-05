module.exports = {
  utility: theme => ({
    '.overlay-screen': {
      // setup
      '.overlay-container': {
        position: 'relative',
        zIndex: theme('zIndex.overlay'),
        padding: '0 !important',
        '.overlay-inner': {
          position: 'static',
        },
      },
      '.overlay-inner': {
        display: 'flex',
        flexDirection: 'column',
        flex: '1 1 auto',
      },
    },
    '.overlay-disable': {
      // setup
      '@apply xt-disable': '',
      display: 'flex !important',
      overflow: 'initial !important',
      position: 'static',
      zIndex: 'initial',
      top: 'auto',
      left: 'auto',
      bottom: 'auto',
      right: 'auto',
      width: 'auto',
      height: 'auto',
      '.overlay-container': {
        zIndex: 'initial',
        padding: '0',
        width: '100%',
        minHeight: 'auto',
        maxWidth: 'none',
      },
      '.overlay-inner': {
        '> .card': {
          '@apply card-disable !important': '',
        },
      },
      '> .backdrop': {
        display: 'none !important',
      },
    },
  }),
  component: theme => ({
    '.overlay': {
      // setup
      '@apply toggle overflow-main': '',
      position: 'fixed',
      zIndex: theme('zIndex.overlay'),
      top: '0',
      left: '0',
      bottom: '0', // @FIX no height or it bugs collapse animation
      right: '0', // @FIX no width or it bugs collapse animation
      overflow: 'hidden',
    },
    '.overlay-container': {
      // setup
      display: 'flex',
      flexWrap: 'nowrap',
      flexDirection: 'column',
      justifyContent: 'center',
      margin: 'auto', // @FIX http://stackoverflow.com/questions/33454533/cant-scroll-to-top-of-flex-item-that-is-overflowing-container
      width: '100%',
      minHeight: '100vh',
      padding: theme('container.padding.DEFAULT'),
      '@screen sm': {
        padding: theme('container.padding.sm'),
      },
      '@screen md': {
        padding: theme('container.padding.md'),
      },
      '@screen lg': {
        padding: theme('container.padding.lg'),
      },
      '@screen xl': {
        padding: theme('container.padding.xl'),
      },
    },
    '.overlay-inner': {
      // setup
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      position: 'relative',
      zIndex: theme('zIndex.overlay'),
      width: '100%',
      borderRadius: 'inherit',
    },
  }),
}
