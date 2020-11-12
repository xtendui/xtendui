module.exports = {
  boxShadow: {
    drop: '0 0 20px 0 rgba(0, 0, 0, 0.1), 0 0 10px 0px rgba(0, 0, 0, 0.05)',
  },
  variants: ['responsive'],
  utility: {
    '.drop-static': {
      // setup
      width: '100%',
      padding: 0,
      '> .drop-inner': {
        width: '100%',
      },
      top: '100% !important',
      left: '0 !important',
      right: '0 !important',
    },
    '.drop-disable': {
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
          '> .design-setup': {
            display: 'none',
          },
          '> .card': {
            '@apply card-disable !important': '',
          },
        },
      },
    },
  },
  component: theme => ({
    '.drop': {
      // setup
      '@apply toggle': '',
      position: 'absolute',
      '&.out': {
        pointerEvents: 'none',
      },
      // styles
      '[data-popper-placement^="top"]&': {
        paddingBottom: theme('spacing.4'),
      },
      '[data-popper-placement^="bottom"]&': {
        paddingTop: theme('spacing.4'),
      },
      '[data-popper-placement^="left"]&': {
        paddingRight: theme('spacing.4'),
      },
      '[data-popper-placement^="right"]&': {
        paddingLeft: theme('spacing.4'),
      },
    },
    '.drop-inner': {
      // setup
      position: 'relative',
      zIndex: theme('zIndex.drop'),
    },
    '.drop-arrow': {
      // setup
      position: 'absolute',
      transform: 'rotate(45deg)',
      // styles
      zIndex: theme('zIndex.drop'),
      width: '1rem',
      height: '1rem',
      background: theme('colors.white'),
      '[data-popper-placement^="top"] &': {
        bottom: theme('spacing.3'),
      },
      '[data-popper-placement^="bottom"] &': {
        top: theme('spacing.3'),
      },
      '[data-popper-placement^="left"] &': {
        right: theme('spacing.3'),
      },
      '[data-popper-placement^="right"] &': {
        left: theme('spacing.3'),
      },
    },
  }),
}
