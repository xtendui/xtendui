module.exports = {
  component: theme => ({
    '.media-container': {
      // setup
      display: 'block',
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      minHeight: '100%',
      borderRadius: 'inherit',
      // styles
      backgroundColor: theme('colors.accent.800'),
    },
    '.media-inner': {
      // setup
      position: 'absolute',
      top: '0',
      left: '0',
      bottom: '0',
      right: '0',
    },
    '.media': {
      // setup
      width: '100%',
      height: '100%',
    },
  }),
}
