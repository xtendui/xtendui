module.exports = {
  variants: ['responsive'],
  utility: theme => ({
    '.links-default': {
      'a:not([class]), a[class=""], .link': {
        color: theme('colors.accent.500'),
        '&:hover, &:active, &.active': {
          color: theme('colors.accent.600'),
        },
      },
    },
    '.links-inverse': {
      'a:not([class]), a[class=""], .link': {
        color: theme('colors.white'),
        '&:hover, &:active, &.active': {
          color: theme('colors.white'),
        },
      },
    },
  }),
  component: theme => ({
    body: {
      '@apply links-default': '',
    },
    'a:not([class]), a[class=""], .link': {
      '@apply text-reset !important': {},
      wordWrap: 'break-word',
      overflowWrap: 'break-word',
      textDecoration: 'underline',
      // animation
      transitionProperty: 'all',
      transitionDuration: theme('transitionDuration.500'),
      transitionTimingFunction: theme('transitionTimingFunction.out'),
    },
  }),
}
