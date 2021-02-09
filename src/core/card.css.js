module.exports = {
  variants: ['responsive'],
  utility: {
    '.card-group': {
      display: 'flex',
      alignItems: 'inherit',
    },
    '.card-disable': {
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
