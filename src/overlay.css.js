/*!
 * Xtend UI (https://xtendui.com/)
 * @copyright (c) 2017 - 2021 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/beta/LICENSE)
 */

module.exports = {
  utility: theme => ({
    '.xt-overlay-container': {
      ...theme('container.padding'),
      DEFAULT: 0, // override padding first breakpoint
    },
  }),
  component: theme => ({
    '.xt-overlay': {
      '@apply xt-overflow-main': '',
      position: 'fixed',
      zIndex: theme('zIndex.overlay'),
      top: '0',
      left: '0',
      bottom: '0', // fix no width and height or it bugs
      right: '0', // fix no width and height or it bugs
      overflow: 'hidden',
      '&:not(.on):not(.in):not(.out)': {
        display: 'none',
      },
      '&.out': {
        pointerEvents: 'none',
      },
    },
    '.xt-overlay-container': {
      display: 'flex',
      flexWrap: 'nowrap',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 'auto', // fix http://stackoverflow.com/questions/33454533/cant-scroll-to-top-of-flex-item-that-is-overflowing-container
      width: '100%',
      minHeight: '100vh',
    },
    '.xt-overlay-inner': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      width: '100%',
    },
    '.xt-scrollbar-overlay': {
      paddingRight: 'var(--scrollbar-width) !important',
      overflow: 'hidden !important',
      '.xt-overlay': {
        overflowY: 'scroll',
        '.fixed': {
          marginRight: 'var(--scrollbar-width)',
        },
      },
      '.xt-backdrop': {
        right: 'var(--scrollbar-width)',
      },
    },
  }),
}
