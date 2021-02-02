module.exports = {
  variants: ['responsive'],
  utility: {
    '.toggle': {
      // setup
      '&:not(.in):not(.out)': {
        display: 'none',
      },
    },
    '.toggle-absolute': {
      // setup
      '&:not(.in)': {
        pointerEvents: 'none',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
      },
    },
    '.toggle-inverse': {
      // setup
      '&.done': {
        display: 'none',
      },
    },
    '.xt-toggle-disabled': {
      // setup
      cursor: 'default',
    },
  },
}
