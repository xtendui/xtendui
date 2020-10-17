module.exports = {
  components: {
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
  utilities: theme => ({
    space: {
      // styles
      ...theme('spacing'),
    },
  }),
}
