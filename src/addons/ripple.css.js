module.exports = {
  component: theme => ({
    '.xt-ripple-container': {
      overflow: 'hidden',
      pointerEvents: 'none',
      borderRadius: 'inherit',
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      // styles
      opacity: '.075',
    },
    '.xt-ripple': {
      // styles
      position: 'absolute',
      borderRadius: '50%',
      background: theme('colors.black'),
    },
  }),
}
