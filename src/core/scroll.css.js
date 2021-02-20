module.exports = {
  component: theme => ({
    '.xt-sitcky': {
      position: 'relative',
      zIndex: theme('zIndex.sticky') - 1,
      height: 'auto !important',
      maxHeight: 'none !important',
      '&[style*="position: fixed"]': {
        zIndex: theme('zIndex.sticky'),
      },
    },
  }),
}
