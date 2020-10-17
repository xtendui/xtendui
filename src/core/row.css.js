module.exports = {
  components: {
    '.row': {
      // setup
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      alignItems: 'flex-start',
      '> *': {
        flex: '0 0 auto', // @FIX column flex shrink
      },
      '&:empty': {
        display: 'none',
      },
    },
    '.row-stretch': {
      // setup
      alignItems: 'stretch',
      '> *': {
        display: 'flex',
        alignItems: 'stretch',
        '> *': {
          minHeight: '100%',
        },
      },
    },
    '@media (hover: none)': {
      '.row-overflow': {
        // setup
        '@apply overflow-sub': '',
        overflowX: 'auto',
        overflowY: 'hidden',
        flexWrap: 'nowrap',
        '> *': {
          flex: 'none',
        },
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
