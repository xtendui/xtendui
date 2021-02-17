module.exports = {
  variants: ['responsive'],
  utility: theme => ({
    '.xt-links-default': {
      'a:not([class]), a[class=""], .xt-link': {
        // styles
        color: theme('colors.primary.500'),
      },
    },
    '.xt-links-inverse': {
      'a:not([class]), a[class=""], .xt-link': {
        // styles
        color: theme('colors.white'),
      },
    },
  }),
  component: {
    body: {
      '@apply xt-links-default': '',
    },
    'a:not([class]), a[class=""], .xt-link': {
      wordWrap: 'break-word',
      overflowWrap: 'break-word',
      // styles
      textDecoration: 'underline',
    },
  },
}
