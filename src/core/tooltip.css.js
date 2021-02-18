module.exports = {
  boxShadow: {
    tooltip: '0 0 10px 0 rgba(0, 0, 0, 0.1), 0 0 5px 0px rgba(0, 0, 0, 0.05)',
  },
  variants: ['responsive'],
  utility: {
    '.xt-tooltip-static': {
      width: '100%',
      padding: 0,
      top: '100% !important',
      left: '0 !important',
      right: '0 !important',
    },
  },
  component: theme => ({
    '.xt-tooltip': {
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
        zIndex: theme('zIndex.tooltip'),
      },
      '> .xt-arrow': {
        position: 'absolute',
        pointerEvents: 'none',
        transform: 'rotate(45deg)',
        zIndex: `calc(${theme('zIndex.tooltip')} - 1)`,
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
    '.xt-tooltip-disabled': {
      '&.xt-tooltip': {
        display: 'none !important',
      },
    },
  }),
}
