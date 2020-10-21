module.exports = {
  utility: theme => ({
    '.text-default': {
      'a:not([class]), .link': {
        color: theme('colors.accent.500'),
        '&:hover, &:active, &.active': {
          color: theme('colors.accent.600'),
        },
      },
    },
    '.text-inverse': {
      'a:not([class]), .link': {
        color: theme('colors.white'),
        '&:hover, &:active, &.active': {
          color: theme('colors.white'),
        },
      },
    },
  }),
  component: theme => ({
    'a:not([class]), .link': {
      // setup
      '@apply text-reset !important': {},
      wordWrap: 'break-word',
      overflowWrap: 'break-word',
      textDecoration: 'underline',
      // animation
      transitionProperty: 'color',
      transitionDuration: theme('transitionDuration.500'),
      transitionTimingFunction: theme('transitionTimingFunction.ease.out'),
      '&:hover, &:active, &.active': {
        transitionTimingFunction: theme('transitionTimingFunction.ease.in'),
      },
    },
  }),
}
