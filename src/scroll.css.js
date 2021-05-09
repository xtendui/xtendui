/*!
 * Xtend (https://xtendui.com/)
 * @copyright (c) 2017 - 2021 Riccardo Caroli
 * @license Apache-2.0 (https://github.com/minimit/xtendui/blob/beta/LICENSE)
 */

module.exports = {
  component: theme => ({
    '.xt-sticky': {
      height: 'auto !important',
      maxHeight: 'none !important',
      // needs zIndex because after ScrollTrigger end
      position: 'relative',
      zIndex: theme('zIndex.sticky') - 1,
      '&[style*="position: fixed"]': {
        zIndex: theme('zIndex.sticky'),
      },
    },
  }),
}
