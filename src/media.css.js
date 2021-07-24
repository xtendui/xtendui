/*!
 * Xtend UI (https://xtendui.com/)
 * @copyright (c) 2017 - 2021 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/beta/LICENSE)
 */

module.exports = {
  variants: ['responsive'],
  component: {
    '.xt-media-container': {
      display: 'block',
      position: 'relative',
      width: '100%',
    },
    '.xt-media': {
      position: 'absolute',
      width: '100%',
      height: '100%',
      borderRadius: 'inherit',
    },
  },
}
