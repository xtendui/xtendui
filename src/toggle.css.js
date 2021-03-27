module.exports = {
  variants: ['responsive'],
  utility: {
    '.xt-toggle-item': {
      display: 'inline-block',
      lineHeight: 1,
    },
    '.xt-toggle': {
      '&:not(.in):not(.active):not(.out)': {
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
      '&:not(.in)': {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
      },
    },
    '.xt-toggle-inverse': {
      '&.done': {
        display: 'none',
      },
    },
  },
}
