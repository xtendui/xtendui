module.exports = {
  variants: ['responsive'],
  utility: {
    '.xt-card-group': {
      display: 'flex',
      alignItems: 'inherit',
    },
    '.xt-card-disabled': {
      '@apply xt-links-default !important': '',
      borderWidth: '0 !important',
      backgroundColor: 'transparent !important',
      boxShadow: 'none !important',
      color: 'inherit !important',
      '> *': {
        padding: '0 !important',
      },
      '> .xt-dismiss': {
        display: 'none !important',
      },
      '> .xt-design-setup': {
        display: 'none !important',
      },
    },
  },
  component: {
    '.xt-card': {
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
