module.exports = {
  component: theme => ({
    '.btn': {
      cursor: 'pointer',
      'div&': {
        cursor: 'inherit',
      },
      display: 'inline-flex',
      position: 'relative',
      verticalAlign: 'middle',
      flexWrap: 'nowrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      textAlign: 'left',
    },
    '.btn-close': {
      position: 'absolute',
      zIndex: `calc(${theme('zIndex.top')} - 1)`,
      top: '0',
      right: '0',
      lineHeight: '0 !important',
    },
  }),
}
