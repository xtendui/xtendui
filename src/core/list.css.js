module.exports = {
  component: {
    '.list': {
      // setup
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      alignItems: 'flex-start',
      '&:empty': {
        display: 'none',
      },
    },
  },
  utility: theme => ({
    space: {
      // styles
      ...theme('spacing'),
    },
  }),
}
