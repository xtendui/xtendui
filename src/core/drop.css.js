module.exports = {
  boxShadow: {
    drop: '0 0 20px 0 rgba(0, 0, 0, 0.1), 0 0 10px 0px rgba(0, 0, 0, 0.05)',
  },
  variants: ['responsive'],
  utility: {
    '.xt-drop-static': {
      width: '100%',
      padding: 0,
      top: '100% !important',
      left: '0 !important',
      right: '0 !important',
    },
  },
  component: theme => ({
    '.xt-drop': {
      position: 'absolute',
      margin: '0 !important',
      '&:not(.in):not(.out)': {
        display: 'none',
      },
      '&.out': {
        pointerEvents: 'none',
      },
      '> *:first-child': {
        position: 'relative',
        zIndex: theme('zIndex.drop'),
      },
      // styles
      '[data-popper-placement^="top"]&:not(.xt-drop-nospace)': {
        paddingBottom: theme('spacing.4'),
      },
      '[data-popper-placement^="bottom"]&:not(.xt-drop-nospace)': {
        paddingTop: theme('spacing.4'),
      },
      '[data-popper-placement^="left"]&:not(.xt-drop-nospace)': {
        paddingRight: theme('spacing.4'),
      },
      '[data-popper-placement^="right"]&:not(.xt-drop-nospace)': {
        paddingLeft: theme('spacing.4'),
      },
    },
    '.xt-drop-arrow': {
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
    '.xt-drop-disabled': {
      'a&, button&': {
        display: 'none',
      },
      '&.xt-drop': {
        display: 'inline-block !important',
        position: 'relative',
        top: 'auto',
        left: 'auto',
        right: 'auto',
        bottom: 'auto',
        '> *:first-child': {
          zIndex: 'initial',
        },
        '> .xt-design-setup': {
          display: 'none',
        },
        '> .xt-card': {
          '@apply xt-card-disable !important': '',
        },
      },
    },
  }),
}
