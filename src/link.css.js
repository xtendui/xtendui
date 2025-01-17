/*!
 * Xtend UI (https://xtendui.com/)
 * @copyright (c) 2017-2025 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/master/LICENSE.txt)
 */

module.exports = {
  variants: ['responsive'],
  utility: theme => ({
    '.xt-links-inverse': {
      // fix specificity when nested .xt-links-default and .xt-links-inverse
      '&, .xt-links-default &': {
        'a:not([class]), a[class=""], .xt-link': {
          wordWrap: 'break-word',
          overflowWrap: 'break-word',
          color: theme('colors.white'),
          textDecoration: 'underline',
          textUnderlineOffset: '2px',
          transitionProperty: 'all',
          transitionDuration: theme('transitionDuration.500'),
          transitionTimingFunction: theme('transitionTimingFunction.out'),
        },
      },
    },
    '.xt-links-default': {
      // fix specificity when nested .xt-links-default and .xt-links-inverse
      '&, .xt-links-inverse &': {
        'a:not([class]), a[class=""], .xt-link': {
          wordWrap: 'break-word',
          overflowWrap: 'break-word',
          color: theme('colors.primary.500'),
          textDecoration: 'underline',
          textUnderlineOffset: '2px',
          transitionProperty: 'all',
          transitionDuration: theme('transitionDuration.500'),
          transitionTimingFunction: theme('transitionTimingFunction.out'),
        },
      },
    },
  }),
}
