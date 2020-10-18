module.exports = {
  component: theme => ({
    '.drop-container': {
      // setup
      position: 'relative',
    },
    '.drop': {
      // setup
      '@apply toggle': '',
      position: 'absolute',
      zIndex: 'inherit',
      transitionDuration: 'inherit',
      '&.in': {
        zIndex: theme('zIndex.drop'),
      },
      '&.out': {
        zIndex: theme('zIndex.drop') - 1,
      },
      // styles
      '@apply drop-left drop-bottom': '',
      padding: theme('spacing.2'),
    },
    '.drop-inner': {
      // setup
      position: 'relative',
      zIndex: theme('zIndex.drop'),
    },
    '.drop-container-static': {
      // setup
      position: 'static',
      '> .drop': {
        width: '100%',
        '> .drop-inner': {
          width: '100%',
        },
        left: '0 !important',
        right: '0 !important',
      },
    },
  }),
  utility: {
    '.drop-container-disable': {
      // setup
      '@apply xt-disable': '',
      position: 'initial',
      '> a, > button': {
        display: 'none',
      },
      '> .drop': {
        display: 'inline-block !important',
        position: 'relative',
        top: 'auto',
        left: 'auto',
        right: 'auto',
        bottom: 'auto',
        '> .drop-inner': {
          zIndex: 'initial',
          '> .drop-design': {
            display: 'none',
          },
          '> .card': {
            '@apply card-disable !important': '',
          },
        },
      },
    },
    '.drop-before': {
      // setup
      left: 'auto',
      right: '100%',
    },
    '.drop-after': {
      // setup
      left: '100%',
      right: 'auto',
    },
    '.drop-left': {
      // setup
      left: '0',
      right: 'auto',
      '&:before': {
        display: 'none',
        content: '""',
      },
    },
    '.drop-right': {
      // setup
      left: 'auto',
      right: '0',
      '&:before': {
        display: 'none',
        content: '""',
      },
    },
    '.drop-bottom': {
      // setup
      top: '100%',
      bottom: 'auto',
      '&:after': {
        display: 'none',
        content: '""',
      },
    },
    '.drop-top': {
      // setup
      top: 'auto',
      bottom: '100%',
      '&:after': {
        display: 'none',
        content: '""',
      },
    },
    '.drop-center': {
      // setup
      '&:before': {
        display: 'none',
        content: '"xt-drop-center"',
      },
    },
    '.drop-middle': {
      // setup
      paddingTop: '0',
      paddingBottom: '0',
      '&:after': {
        display: 'none',
        content: '"xt-drop-middle"',
      },
    },
    '.drop-contain-bottom': {
      // setup
      '@apply drop-middle': '',
      top: 'auto',
      bottom: '0',
    },
    '.drop-contain-top': {
      // setup
      '@apply drop-middle': '',
      top: '0',
      bottom: 'auto',
    },
  },
}
