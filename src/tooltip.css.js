/*!
 * Xtend UI (https://xtendui.com/)
 * @copyright (c) 2017 - 2021 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/beta/LICENSE)
 */

module.exports = {
  boxShadow: {
    tooltip:
      '0 25px 100px 0 rgba(0,0,0,0.025), 0 10px 50px 0 rgba(0,0,0,0.05), 0 5px 20px 0 rgba(0,0,0,0.075), 0 0 10px 0 rgba(0,0,0,0.1)',
  },
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
