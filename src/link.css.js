/*!
 * Xtend (https://xtendui.com/)
 * @copyright (c) 2017 - 2021 Riccardo Caroli
 * @license Apache-2.0 (https://github.com/minimit/xtendui/blob/beta/LICENSE)
 */

module.exports = {
  variants: ['responsive'],
  utility: theme => ({
    '.xt-links-default': {
      // fix specificity when nested .xt-links-default and .xt-links-inverse
      '&, .xt-links-inverse &': {
        'a:not([class]), a[class=""], .xt-link': {
          // styles
          color: theme('colors.primary.500'),
        },
      },
    },
    '.xt-links-inverse': {
      // fix specificity when nested .xt-links-default and .xt-links-inverse
      '&, .xt-links-default &': {
        'a:not([class]), a[class=""], .xt-link': {
          // styles
          color: theme('colors.white'),
        },
      },
    },
  }),
  component: theme => ({
    // body links
    '.xt-body:not(.xt-optout-links)': {
      '@apply xt-links-default': '',
    },
    'a:not([class]), a[class=""], .xt-link': {
      wordWrap: 'break-word',
      overflowWrap: 'break-word',
      // styles
      textDecoration: 'underline',
      transitionProperty: 'all',
      transitionDuration: theme('transitionDuration.500'),
      transitionTimingFunction: theme('transitionTimingFunction.out'),
    },
  }),
}
