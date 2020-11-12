const round = num =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = px => `${round(px / 16)}rem`

module.exports = {
  variants: ['responsive'],
  utility: {
    '.card-sm': {
      // styles
      '@apply text-sm': '',
      padding: `${rem(20)} ${rem(25)}`,
    },
    '.card-md': {
      // styles
      '@apply text-base': '',
      padding: `${rem(30)} ${rem(35)}`,
    },
    '.card-lg': {
      // styles
      '@apply text-lg': '',
      padding: `${rem(40)} ${rem(45)}`,
    },
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
      '> .design-setup': {
        display: 'none !important',
      },
      '&, > *, > * > *': {
        padding: '0 !important',
      },
      '> .btn-close': {
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
