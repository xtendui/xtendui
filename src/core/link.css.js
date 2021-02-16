module.exports = {
  variants: ['responsive'],
  utility: theme => ({
    '.xt-links-default': {
      'a:not([class]), a[class=""], .xt-link': {
        color: theme('colors.primary.500'),
        '&:hover, &:active, &.active': {
          color: theme('colors.primary.600'),
        },
      },
    },
    '.xt-links-inverse': {
      'a:not([class]), a[class=""], .xt-link': {
        color: theme('colors.white'),
        '&:hover, &:active, &.active': {
          color: theme('colors.white'),
        },
      },
    },
  }),
  component: theme => ({
    body: {
      '@apply xt-links-default': '',
    },
    'a:not([class]), a[class=""], .xt-link': {
      '@apply xt-text-reset !important': {},
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
