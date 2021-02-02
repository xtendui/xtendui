module.exports = {
  variants: ['responsive'],
  utility: theme => ({
    '.toggle': {
      // setup
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
      // setup
      '&:not(.in)': {
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
  }),
}
