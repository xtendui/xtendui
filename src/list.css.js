/*!
 * Xtend UI (https://xtendui.com/)
 * @copyright (c) 2017-2022 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/master/LICENSE.txt)
 */

module.exports = {
  variants: ['responsive'],
  utility: theme => ({
    space: theme('spacing'),
  }),
  component: {
    '.xt-list': {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      '&:empty': {
        display: 'none',
      },
    },
  },
}
