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
  component: {
    '.xt-drop': {
      position: 'absolute',
      margin: '0 !important',
      '&:not(.in):not(.out)': {
        display: 'none',
      },
      '&.out': {
        pointerEvents: 'none',
      },
      '> .xt-arrow': {
        position: 'absolute',
        pointerEvents: 'none',
        transform: 'rotate(45deg)',
      },
    },
    '.xt-drop-inner': {
      position: 'relative',
    },
    '.xt-drop-item': {
      display: 'inline-block',
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
          '@apply xt-card-disabled !important': '',
        },
      },
      '.xt-drop-ui': {
        display: 'none !important',
      },
    },
  },
}
