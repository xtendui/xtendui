/*!
 * Xtend (https://xtendui.com/)
 * @copyright (c) 2017 - 2021 Riccardo Caroli
 * @license Apache-2.0 (https://github.com/minimit/xtendui/blob/beta/LICENSE)
 */

module.exports = {
  component: theme => ({
    '.xt-slider': {
      position: 'relative',
      overflow: 'hidden',
    },
    '.xt-slides': {
      position: 'relative',
      display: 'flex',
      flexWrap: 'nowrap',
      alignItems: 'flex-start',
      // prevent browser selection
      '-webkit-user-select': 'none',
      '-moz-user-select': 'none',
      '-ms-user-select': 'none',
      'user-select': 'none',
    },
    '.xt-slide': {
      position: 'relative',
      zIndex: theme('zIndex.slide'),
    },
    '.xt-slider-absolute': {
      '.xt-slide': {
        position: 'relative',
        '&:not(.on):not(.in):not(.out):not(.display)': {
          display: 'none',
        },
        '&:not(.on)': {
          position: 'absolute',
          top: '0',
          left: '0',
        },
      },
      // fix page load height without .on slides
      '&:not([data-xt-slider-init])': {
        '.xt-slide': {
          '&:first-child': {
            display: 'block',
            position: 'relative',
          },
        },
      },
    },
    '.xt-slider-nooverflow': {
      '.xt-slides': {
        transform: 'none !important',
        justifyContent: 'center !important',
      },
      '[data-xt-slider-pagination]': {
        display: 'none !important',
      },
    },
  }),
}
