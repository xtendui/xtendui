/*!
 * Xtend UI (https://xtendui.github.io/xtendui/)
 * @copyright (c) 2017-2025 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/master/LICENSE.txt)
 */

module.exports = {
  variants: ['responsive'],
  utility: {
    '.xt-card-group': {
      display: 'flex',
      alignItems: 'inherit',
    },
  },
  component: {
    '.xt-card': {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'left',
      flex: '1 1 auto',
      width: '100%',
    },
  },
}
