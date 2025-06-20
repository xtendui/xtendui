/*!
 * Xtend UI (https://xtendui.com/)
 * @copyright (c) 2017-2025 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/master/LICENSE.txt)
 */

module.exports = {
  variants: ['responsive'],
  utility: theme => ({
    '.xt-container-reset': {
      padding: '0 !important',
      width: 'auto !important',
      maxWidth: 'none !important',
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
  }),
  component: theme => ({
    '.xt-html:not(.xt-optout-scroll)': {
      '@apply xt-overflow-main': '',
    },
    '.xt-body:not(.xt-optout-scroll)': {
      '@apply xt-overflow-main overflow-y-scroll overflow-x-hidden': '',
    },
    '.xt-html:not(.xt-optout-touch)': {
      touchAction: 'manipulation', // disable double-tap
      '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)', // disable tap highlight
    },
    '.container': theme('container.fluid')
      ? {
          maxWidth: `${theme('container.fluid')} !important`,
        }
      : {},
    '.xt-html:not(.xt-optout-selection)': {
      '::selection': {
        backgroundColor: '#00FFDD',
        color: theme('colors.black'),
      },
    },
    '.xt-overflow-main': {
      '-webkit-overflow-scrolling': 'touch',
      scrollbarWidth: 'auto',
      scrollbarColor: `${theme('colors.gray.300')} transparent`,
    },
    '.xt-overflow-sub': {
      '-webkit-overflow-scrolling': 'touch',
      scrollbarWidth: 'thin',
      scrollbarColor: `${theme('colors.gray.300')} transparent`,
    },
    '.xt-html:not(.xt-optout-disabled)': {
      '[readonly], [disabled], .xt-disabled': {
        pointerEvents: 'none',
        '&:not(.on)': {
          opacity: '.5',
        },
      },
    },
    '.xt-backdrop': {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      pointerEvents: 'none',
    },
    '.xt-design': {
      position: 'absolute',
      top: '0',
      left: '0',
      bottom: '0',
      right: '0',
      borderRadius: 'inherit',
    },
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
    '.xt-html': {
      '[data-popper-inset]': {
        padding: '0 !important',
        '> .xt-arrow': {
          display: 'none !important',
        },
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
  }),
}
