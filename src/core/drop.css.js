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
        '> *:first-child': {
          zIndex: 'initial',
        },
        '> .design-setup': {
          display: 'none',
        },
        '> .card': {
          '@apply card-disable !important': '',
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
      '> *:first-child': {
        position: 'relative',
        zIndex: theme('zIndex.drop'),
      },
      // styles
      '[data-popper-placement^="top"]&:not(.drop-nospace)': {
        paddingBottom: theme('spacing.4'),
      },
      '[data-popper-placement^="bottom"]&:not(.drop-nospace)': {
        paddingTop: theme('spacing.4'),
      },
      '[data-popper-placement^="left"]&:not(.drop-nospace)': {
        paddingRight: theme('spacing.4'),
      },
      '[data-popper-placement^="right"]&:not(.drop-nospace)': {
        paddingLeft: theme('spacing.4'),
      },
    },
    '.drop-arrow': {
      // setup
      '@apply transform': '',
      '@apply rotate-45 !important': '',
      position: 'absolute',
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
