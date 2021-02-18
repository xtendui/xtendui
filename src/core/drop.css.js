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
      '> *': {
        position: 'relative',
        zIndex: theme('zIndex.drop'),
      },
      '> .xt-arrow': {
        position: 'absolute',
        pointerEvents: 'none',
        transform: 'rotate(45deg)',
      },
      '&[data-popper-placement^="top"]': {
        paddingTop: '0 !important',
        paddingLeft: '0 !important',
        paddingRight: '0 !important',
        '> .xt-arrow': {
          top: 'auto !important',
          marginLeft: '0 !important',
          marginRight: '0 !important',
        },
      },
      '&[data-popper-placement^="bottom"]': {
        paddingBottom: '0 !important',
        paddingLeft: '0 !important',
        paddingRight: '0 !important',
        '> .xt-arrow': {
          bottom: 'auto !important',
          marginLeft: '0 !important',
          marginRight: '0 !important',
        },
      },
      '&[data-popper-placement^="left"]': {
        paddingLeft: '0 !important',
        paddingTop: '0 !important',
        paddingBottom: '0 !important',
        '> .xt-arrow': {
          left: 'auto !important',
          marginTop: '0 !important',
          marginBottom: '0 !important',
        },
      },
      '&[data-popper-placement^="right"]': {
        paddingRight: '0 !important',
        paddingTop: '0 !important',
        paddingBottom: '0 !important',
        '> .xt-arrow': {
          right: 'auto !important',
          marginTop: '0 !important',
          marginBottom: '0 !important',
        },
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
