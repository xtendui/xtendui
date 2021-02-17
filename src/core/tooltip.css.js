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
      '> *:first-child': {
        position: 'relative',
        zIndex: theme('zIndex.tooltip'),
      },
      // styles
      '[data-popper-placement^="top"]&:not(.xt-tooltip-nospace)': {
        paddingBottom: theme('spacing.2'),
      },
      '[data-popper-placement^="bottom"]&:not(.xt-tooltip-nospace)': {
        paddingTop: theme('spacing.2'),
      },
      '[data-popper-placement^="left"]&:not(.xt-tooltip-nospace)': {
        paddingRight: theme('spacing.2'),
      },
      '[data-popper-placement^="right"]&:not(.xt-tooltip-nospace)': {
        paddingLeft: theme('spacing.2'),
      },
    },
    '.xt-tooltip-arrow': {
      position: 'absolute',
      transform: 'rotate(45deg)',
      // styles
      zIndex: `calc(${theme('zIndex.tooltip')} - 1)`,
      width: '1rem',
      height: '1rem',
      background: theme('colors.black'),
      '[data-popper-placement^="top"] &': {
        bottom: theme('spacing[1.5]'),
      },
      '[data-popper-placement^="bottom"] &': {
        top: theme('spacing[1.5]'),
      },
      '[data-popper-placement^="left"] &': {
        right: theme('spacing[1.5]'),
      },
      '[data-popper-placement^="right"] &': {
        left: theme('spacing[1.5]'),
      },
    },
    '.xt-tooltip-disabled': {
      '&.xt-tooltip': {
        display: 'none !important',
      },
    },
  }),
}
