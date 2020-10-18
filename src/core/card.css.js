module.exports = {
  component: theme => ({
    '.card': {
      // setup
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      justifyContent: 'flex-start',
      flex: '1 1 auto',
      width: '100%',
      // animation
      'a&, button&, label&': {
        zIndex: theme('zIndex.base'),
        transitionProperty: 'all',
        transitionDuration: theme('transitionDuration.500'),
        transitionTimingFunction: theme('transitionTimingFunction.out'),
        '&:hover, &:active, &.active': {
          zIndex: theme('zIndex.active'),
          transitionTimingFunction: theme('transitionTimingFunction.in'),
        },
      },
    },
    '.card-block': {
      // setup
      position: 'relative',
      width: '100%',
    },
    '.card-asset': {
      // setup
      position: 'relative',
      width: '100%',
      '> *': {
        width: '100%',
        height: 'auto',
      },
    },
  }),
  utility: {
    '.card-group': {
      // setup
      display: 'flex',
      alignItems: 'inherit',
    },
    '.card-disable': {
      // setup
      '@apply text-default': '',
      borderWidth: '0',
      backgroundColor: 'transparent',
      boxShadow: 'none',
      '> .card-design': {
        display: 'none',
      },
      '&, > *': {
        padding: '0',
        '> .card-block': {
          padding: '0',
        },
      },
      '> .btn-close': {
        display: 'none',
      },
    },
  },
}
