/*!
 * Xtend (https://xtendui.com/)
 * @copyright (c) 2017 - 2021 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/beta/LICENSE)
 */

module.exports = {
  component: {
    '.xt-jump': {
      '&:not(.on)': {
        cursor: 'pointer',
      },
    },
    '.xt-grab': {
      cursor: 'grab',
      'a, img': {
        // prevent browser drag
        '-webkit-user-drag': 'none',
        'user-drag': 'none',
        // prevent browser selection
        '-webkit-user-select': 'none',
        '-moz-user-select': 'none',
        '-ms-user-select': 'none',
        'user-select': 'none',
      },
    },
    '.xt-collapse-reset': {
      overflow: 'visible !important',
    },
    '[data-popper-placement^="top"]': {
      paddingTop: '0 !important',
      paddingLeft: '0 !important',
      paddingRight: '0 !important',
      '> .xt-arrow': {
        top: 'auto !important',
        marginLeft: '0 !important',
        marginRight: '0 !important',
      },
    },
    '[data-popper-placement^="bottom"]': {
      paddingBottom: '0 !important',
      paddingLeft: '0 !important',
      paddingRight: '0 !important',
      '> .xt-arrow': {
        bottom: 'auto !important',
        marginLeft: '0 !important',
        marginRight: '0 !important',
      },
    },
    '[data-popper-placement^="left"]': {
      paddingLeft: '0 !important',
      paddingTop: '0 !important',
      paddingBottom: '0 !important',
      '> .xt-arrow': {
        left: 'auto !important',
        marginTop: '0 !important',
        marginBottom: '0 !important',
      },
    },
    '[data-popper-placement^="right"]': {
      paddingRight: '0 !important',
      paddingTop: '0 !important',
      paddingBottom: '0 !important',
      '> .xt-arrow': {
        right: 'auto !important',
        marginTop: '0 !important',
        marginBottom: '0 !important',
      },
    },
  },
}
