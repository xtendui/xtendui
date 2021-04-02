module.exports = {
  variants: ['responsive'],
  utility: theme => ({
    space: theme('spacing'),
  }),
  component: {
    '.xt-row': {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      alignItems: 'flex-start',
      '> *': {
        // fix column flex shrink
        flex: '0 0 auto',
      },
      '&:empty': {
        display: 'none',
      },
    },
    '.xt-row-stretch': {
      alignItems: 'stretch',
      '> *': {
        display: 'flex',
        alignItems: 'stretch',
        '> *': {
          minHeight: '100%',
        },
      },
    },
    '.xt-row-overflow': {
      '@apply xt-overflow-sub': '',
      overflowX: 'auto',
      overflowY: 'hidden',
      flexWrap: 'nowrap',
      '> *': {
        flex: 'none',
      },
    },
  },
}
