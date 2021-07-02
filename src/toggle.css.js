/*!
 * Xtend (https://xtendui.com/)
 * @copyright (c) 2017 - 2021 Riccardo Caroli
 * @license Apache-2.0 (https://github.com/minimit/xtendui/blob/beta/LICENSE)
 */

module.exports = {
  variants: ['responsive'],
  utility: {
    '.xt-toggle': {
      '&:not(.on):not(.in):not(.out):not(.display)': {
        display: 'none',
      },
      '&.out': {
        pointerEvents: 'none',
      },
    },
    '.xt-toggle-visible': {
      '&:not(.on):not(.in):not(.out):not(.display)': {
        visibility: 'hidden',
        pointerEvents: 'none',
      },
      '&.out': {
        pointerEvents: 'none',
      },
    },
    '.xt-toggle-absolute': {
      '&:not(.on)': {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
      },
    },
    '.xt-toggle-inner': {
      position: 'relative',
    },
  },
}
