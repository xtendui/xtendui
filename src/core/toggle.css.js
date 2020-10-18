module.exports = {
  utility: {
    '.toggle': {
      // setup
      '&:not(.active):not(.out)': {
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
