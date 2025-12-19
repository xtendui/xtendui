/*!
 * Xtend UI (https://xtendui.github.io/xtendui/)
 * @copyright (c) 2017-2026 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/master/LICENSE.txt)
 */

module.exports = {
  component: theme => ({
    '.xt-slider': {
      position: 'relative',
      overflow: 'hidden',
      // fix page load height without .on slides
      '&:not([data-xt-slider-init]):not([data-xt-slider-exclude])': {
        '.xt-slide:not([data-xt-slide-not-show-before-init]):first-child, .xt-slide[data-xt-slide-show-before-init]': {
          display: 'block !important',
          position: 'relative !important',
        },
      },
    },
    '.xt-slides': {
      position: 'relative',
      display: 'flex',
      flexWrap: 'nowrap',
      '&.xt-grab': {
        // prevent browser selection
        '-webkit-user-select': 'none',
        '-moz-user-select': 'none',
        '-ms-user-select': 'none',
        'user-select': 'none',
      },
    },
    '.xt-slide': {
      position: 'relative',
      zIndex: theme('zIndex.slide'),
    },
    '.xt-slide-absolute': {
      position: 'relative',
      '&:not(.on)': {
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
      },
    },
  }),
}
