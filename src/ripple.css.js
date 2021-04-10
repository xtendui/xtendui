module.exports = {
  component: {
    '.xt-ripple-container': {
      overflow: 'hidden',
      pointerEvents: 'none',
      borderRadius: 'inherit',
      position: 'absolute',
      top: '0',
      left: '0',
      bottom: '0', // fix no width and height or it bugs
      right: '0', // fix no width and height or it bugs
    },
    '.xt-ripple': {
      position: 'absolute',
      borderRadius: '50%',
    },
  },
}
