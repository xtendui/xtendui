module.exports = {
  variants: ['responsive'],
  utility: {
    '.xt-toggle': {
      '&:not(.on):not(.in):not(.out)': {
        display: 'none',
      },
      '&.out': {
        pointerEvents: 'none',
      },
    },
    '.xt-toggle-inner': {
      position: 'relative',
    },
    '.xt-toggle-absolute': {
      '&:not(.on)': {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
      },
    },
  },
}
