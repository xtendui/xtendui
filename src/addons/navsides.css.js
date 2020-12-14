module.exports = {
  component: theme => ({
    '.navsides': {
      // setup
      cursor: 'none',
      position: 'absolute',
      zIndex: `calc(${theme('zIndex.top')} - 1)`,
      top: '0',
      height: '100%',
      '.xt-slider-disabled &': {
        display: 'none',
      },
      // styles
      width: '6rem',
      // animation
      '.navsides-btn > *': {
        transitionProperty: 'opacity, transform',
        transitionDuration: theme('transitionDuration.200'),
        transitionTimingFunction: theme('transitionTimingFunction.in-out'),
      },
      '&:active': {
        '.navsides-btn > *': {
          opacity: '.75',
          transform: 'scale(0.8)',
        },
      },
    },
    '.navsides-btn': {
      // setup
      padding: '0',
      lineHeight: '0',
      // animation
      opacity: '0',
      transitionProperty: 'opacity',
      transitionDuration: theme('transitionDuration.200'),
      transitionTimingFunction: theme('transitionTimingFunction.in-out'),
      '&.in': {
        opacity: '1',
      },
    },
    '@media (hover: none)': {
      '.navsides': {
        // styles
        width: '3rem',
      },
      '.navsides-btn': {
        // styles
        '@apply transform-none': '',
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: '-0.7rem',
        marginLeft: '-0.7rem',
        opacity: '1',
      },
    },
  }),
}
