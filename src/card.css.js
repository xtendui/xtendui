/*!
 * Xtend (https://xtendui.com/)
 * @copyright (c) 2017 - 2021 Riccardo Caroli
 * @license Apache-2.0 (https://github.com/minimit/xtendui/blob/beta/LICENSE)
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
      alignItems: 'stretch',
      justifyContent: 'flex-start',
      textAlign: 'left',
      flex: '1 1 auto',
      width: '100%',
    },
  },
}
