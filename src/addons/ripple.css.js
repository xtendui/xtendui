module.exports = {
  component: theme => ({
    '.ripple-container': {
      // setup
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
    '.ripple': {
      // styles
      position: 'absolute',
      borderRadius: '50%',
      background: theme('colors.black'),
    },
  }),
}
