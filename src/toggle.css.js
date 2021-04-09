module.exports = {
  variants: ['responsive'],
  utility: {
    '.xt-toggle': {
      '&:not(.xt-in):not(.xt-active):not(.xt-out)': {
        display: 'none',
      },
      '&.xt-out': {
        pointerEvents: 'none',
      },
    },
    '.xt-toggle-inner': {
      position: 'relative',
    },
    '.xt-toggle-absolute': {
      '&:not(.xt-in)': {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
      },
    },
  },
}
