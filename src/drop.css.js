/*!
 * Xtend UI (https://xtendui.com/)
 * @copyright (c) 2017 - 2021 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/beta/LICENSE)
 */

module.exports = {
  boxShadow: {
    drop: '0 0 20px 0 rgba(0, 0, 0, 0.1), 0 0 10px 0px rgba(0, 0, 0, 0.05)',
  },
  variants: ['responsive'],
  utility: {
    '.xt-drop-static': {
      top: '100% !important',
      left: '0 !important',
      right: '0 !important',
    },
  },
  component: theme => ({
    '.xt-drop': {
      position: 'absolute',
      zIndex: theme('zIndex.drop'),
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
