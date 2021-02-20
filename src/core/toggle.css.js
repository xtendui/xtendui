module.exports = {
  variants: ['responsive'],
  utility: theme => ({
    '.xt-toggle-item': {
      display: 'inline-block',
    },
    '.xt-toggle': {
      '&:not(.in):not(.out)': {
        display: 'none',
      },
      '&.in': {
        zIndex: theme('zIndex.active'),
      },
      '&.out': {
        pointerEvents: 'none',
      },
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
    '.xt-toggle-disabled': {
      cursor: 'default',
    },
  }),
}
