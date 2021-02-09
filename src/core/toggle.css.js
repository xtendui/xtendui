module.exports = {
  variants: ['responsive'],
  utility: theme => ({
    '.toggle': {
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
    '.toggle-absolute': {
      '&:not(.in)': {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
      },
    },
    '.toggle-inverse': {
      '&.done': {
        display: 'none',
      },
    },
    '.xt-toggle-disabled': {
      cursor: 'default',
    },
  }),
}
