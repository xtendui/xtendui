module.exports = {
  variants: ['responsive'],
  utility: {
    '.toggle': {
      // setup
      '&:not(.in):not(.out)': {
        display: 'none',
      },
    },
    '.toggle-inverse': {
      // setup
      '&.done': {
        display: 'none',
      },
    },
  },
}
