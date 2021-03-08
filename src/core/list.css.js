module.exports = {
  variants: ['responsive'],
  utility: theme => ({
    space: theme('spacing'),
  }),
  component: {
    '.xt-list': {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      alignItems: 'stretch',
      '&:empty': {
        display: 'none',
      },
    },
    '.xt-list-inner': {
      display: 'inline-flex',
    },
  },
}
