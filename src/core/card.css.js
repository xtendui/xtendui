const round = num =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = px => `${round(px / 16)}rem`

module.exports = {
  variants: ['responsive'],
  utility: {
    '.card-group': {
      // setup
      display: 'flex',
      alignItems: 'inherit',
    },
    '.card-disable': {
      // setup
      '@apply text-black links-default !important': '',
      borderWidth: '0 !important',
      backgroundColor: 'transparent !important',
      boxShadow: 'none !important',
      '> *': {
        padding: '0 !important',
      },
      '> .btn-close': {
        display: 'none !important',
      },
      '> .design-setup': {
        display: 'none !important',
      },
    },
  },
  component: {
    '.card': {
      // setup
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      justifyContent: 'flex-start',
      flex: '1 1 auto',
      width: '100%',
    },
  },
}
