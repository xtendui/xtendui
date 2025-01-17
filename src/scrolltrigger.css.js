/*!
 * Xtend UI (https://xtendui.com/)
 * @copyright (c) 2017-2025 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/master/LICENSE.txt)
 */

module.exports = {
  component: theme => ({
    '.xt-sticky:not(.xt-sticky-nozindex)': {
      // needs zIndex because after ScrollTrigger end animations
      position: 'relative',
      zIndex: theme('zIndex.sticky') - 1,
      '&[style*="position: fixed"]': {
        zIndex: theme('zIndex.sticky'),
      },
    },
    '.xt-sticky:not(.xt-sticky-noheight)': {
      height: 'auto !important',
      maxHeight: 'none !important',
    },
    '.pin-spacer:has(.xt-sticky)': {
      zIndex: 'auto !important',
    },
  }),
}
