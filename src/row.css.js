/*!
 * Xtend UI (https://xtendui.com/)
 * @copyright (c) 2017-2025 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/master/LICENSE.txt)
 */

module.exports = {
  variants: ['responsive'],
  utility: theme => ({
    space: theme('spacing'),
  }),
  component: {
    '.xt-row': {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      '> *': {
        // fix column flex shrink
        flex: '0 0 auto',
      },
      '&:empty': {
        display: 'none',
      },
    },
    '.xt-row-stretch': {
      '> *': {
        display: 'flex',
        alignItems: 'stretch',
        '> *': {
          minHeight: '100%',
        },
      },
    },
  },
}
