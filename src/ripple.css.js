/*!
 * Xtend UI (https://xtendui.com/)
 * @copyright (c) 2017 - 2021 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/beta/LICENSE)
 */

module.exports = {
  component: {
    '.xt-ripple-inner': {
      overflow: 'hidden',
      pointerEvents: 'none',
      borderRadius: 'inherit',
      position: 'absolute',
      top: '0',
      left: '0',
      bottom: '0', // fix no width and height or it bugs
      right: '0', // fix no width and height or it bugs
    },
    '.xt-ripple': {
      position: 'absolute',
      borderRadius: '50%',
    },
  },
}
