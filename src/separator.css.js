/*!
 * Xtend (https://xtendui.com/)
 * @copyright (c) 2017 - 2021 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/beta/LICENSE)
 */

module.exports = {
  component: {
    '.xt-separator': {
      display: 'inline',
      position: 'relative',
      fontSize: '1em',
      verticalAlign: 'baseline',
    },
    '.xt-separator-dash': {
      '&:after': {
        content: '"-"',
      },
    },
    '.xt-separator-slash': {
      '&:after': {
        content: '"/"',
      },
    },
    '.xt-separator-pipe': {
      '&:after': {
        content: '"|"',
      },
    },
    '.xt-separator-point': {
      '&:after': {
        content: '"•"',
      },
    },
    '.xt-separator-arrow': {
      '&:after': {
        content: '">"',
      },
    },
  },
}
