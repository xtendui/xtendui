/*!
 * Xtend (https://xtendui.com/)
 * @copyright (c) 2017 - 2021 Riccardo Caroli
 * @license Apache-2.0 (https://github.com/minimit/xtendui/blob/beta/LICENSE)
 */

module.exports = {
  boxShadow: {
    tooltip: '0 0 10px 0 rgba(0, 0, 0, 0.1), 0 0 5px 0px rgba(0, 0, 0, 0.05)',
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
      '> .xt-arrow': {
        position: 'absolute',
        pointerEvents: 'none',
        transform: 'rotate(45deg)',
      },
    },
  }),
}
