/*!
 * Xtend (https://xtendui.com/)
 * @copyright (c) 2017 - 2021 Riccardo Caroli
 * @license Apache-2.0 (https://github.com/minimit/xtendui/blob/beta/LICENSE)
 */

module.exports = {
  variants: ['responsive'],
  utility: theme => ({
    '.xt-container-reset': {
      padding: 0,
      width: 'auto',
      maxWidth: 'none',
    },
    '.xt-container-y': {
      ...theme('container.padding'),
    },
    '.xt-container-remove': {
      ...theme('container.padding'),
    },
    '.xt-container-y-remove': {
      ...theme('container.padding'),
    },
    '.xt-h-screen': {
      height: 'calc(var(--vh, 1vh) * 100)',
    },
    '.xt-min-h-screen': {
      minHeight: 'calc(var(--vh, 1vh) * 100)',
    },
    '.xt-max-h-screen': {
      maxHeight: 'calc(var(--vh, 1vh) * 100)',
    },
  }),
  component: theme => ({
    // overflow
    '.xt-body:not(.xt-optout-scroll)': {
      '@apply xt-overflow-main': '',
    },
    // custom focus
    '.xt-body:not(.xt-optout-focus)': {
      // focus-visible
      '&:not(.xt-focus-visible)': {
        ':focus, :focus-within': {
          outline: 'none',
        },
      },
    },
    html: {
      touchAction: 'manipulation', // disable double-tap
      '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)', // disable tap highlight
    },
    '.container': theme('container.fluid')
      ? {
          maxWidth: `${theme('container.fluid')} !important`,
        }
      : {},
    '::selection': {
      // styles
      backgroundColor: '#00FFDD',
      color: theme('colors.black'),
    },
    '.xt-overflow-main': {
      // styles
      '-webkit-overflow-scrolling': 'touch',
      '&::-webkit-scrollbar': {
        height: '10px',
        width: '10px',
        background: theme('colors.white'),
        '@media (hover: none)': {
          display: 'none',
        },
      },
      '&::-webkit-scrollbar-thumb': {
        background: theme('colors.gray.600'),
      },
      scrollbarWidth: 'auto',
      scrollbarColor: `${theme('colors.gray.600')} ${theme('colors.white')}`,
    },
    '.xt-overflow-sub': {
      // styles
      '-webkit-overflow-scrolling': 'touch',
      '&::-webkit-scrollbar': {
        height: '5px',
        width: '5px',
        background: 'transparent',
      },
      '&::-webkit-scrollbar-thumb': {
        background: theme('colors.gray.600'),
      },
      scrollbarWidth: 'thin',
      scrollbarColor: `${theme('colors.gray.600')} transparent`,
    },
    '[readonly], [disabled], .xt-disabled': {
      pointerEvents: 'none',
      // styles
      '&:not(.on)': {
        opacity: '.5',
      },
    },
    '.xt-backdrop': {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
    },
    '.xt-design': {
      position: 'absolute',
      top: '0',
      left: '0',
      bottom: '0',
      right: '0',
    },
  }),
}
