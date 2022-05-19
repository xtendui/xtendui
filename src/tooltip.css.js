/*!
 * Xtend UI (https://xtendui.com/)
 * @copyright (c) 2017-2022 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/master/LICENSE.txt)
 */

module.exports = {
  variants: ['responsive'],
  utility: {
    '.xt-tooltip-static': {
      padding: 0,
      top: '100% !important',
      left: '0 !important',
      right: '0 !important',
    },
  },
  component: theme => ({
    '.xt-tooltip': {
      position: 'absolute',
      zIndex: theme('zIndex.tooltip'),
      margin: '0 !important',
      '&:not(.on):not(.in):not(.out)': {
        display: 'none',
      },
      '&.out': {
        pointerEvents: 'none',
      },
      '> .xt-arrow': {
        position: 'absolute',
        pointerEvents: 'none',
        transform: 'rotate(45deg)',
      },
    },
  }),
}
