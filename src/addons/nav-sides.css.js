module.exports = {
  component: theme => ({
    '.nav-sides': {
      // setup
      cursor: 'none',
      position: 'absolute',
      zIndex: theme('zIndex.top'),
      top: '0',
      height: '100%',
      '.slider.xt-disabled &': {
        display: 'none',
      },
      // styles
      width: '6rem',
      // animation
      '.nav-sides-btn > *': {
        transitionProperty: 'opacity, transform',
        transitionDuration: theme('transitionDuration.200'),
        transitionTimingFunction: theme('transitionTimingFunction.ease.out'),
      },
      '&:active': {
        '.nav-sides-btn > *': {
          opacity: '.75',
          transform: 'scale(0.8)',
          transitionTimingFunction: theme('transitionTimingFunction.ease.in'),
        },
      },
    },
    '.nav-sides-btn': {
      // setup
      padding: '0',
      lineHeight: '0',
      // animation
      opacity: '0',
      transitionProperty: 'opacity',
      transitionDuration: theme('transitionDuration.200'),
      transitionTimingFunction: theme('transitionTimingFunction.ease.out'),
      '&.in': {
        opacity: '1',
        transitionTimingFunction: theme('transitionTimingFunction.ease.in'),
      },
    },
    '@media (hover: none)': {
      '.nav-sides': {
        // styles
        width: '3rem',
      },
      '.nav-sides-btn': {
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
