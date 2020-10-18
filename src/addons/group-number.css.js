module.exports = {
  component: {
    '[data-xt-group-number]': {
      'input[type="number"]': {
        '-moz-appearance': 'textfield',
        '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
          '-webkit-appearance': 'none',
          appearance: 'none',
        },
      },
    },
  },
}
