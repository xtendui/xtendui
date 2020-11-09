module.exports = {
  boxShadow: {
    drop: '0 0 20px 0 rgba(0, 0, 0, 0.1), 0 0 10px 0px rgba(0, 0, 0, 0.05)',
  },
  variants: ['responsive'],
  utility: {
    '.drop-static': {
      // setup
      width: '100%',
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
      zIndex: 'inherit',
      '&.in': {
        zIndex: theme('zIndex.drop'),
      },
      '&.out': {
        zIndex: theme('zIndex.drop') - 1,
        pointerEvents: 'none',
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
      zIndex: theme('zIndex.drop'),
      transform: 'rotate(45deg)',
      // styles
      width: '1rem',
      height: '1rem',
      background: theme('colors.white'),
      '[data-popper-placement^="top"] &': {
        bottom: '-0.25rem',
      },
      '[data-popper-placement^="bottom"] &': {
        top: '-0.25rem',
      },
      '[data-popper-placement^="left"] &': {
        right: '-0.25rem',
      },
      '[data-popper-placement^="right"] &': {
        left: '-0.25rem',
      },
    },
  }),
}
