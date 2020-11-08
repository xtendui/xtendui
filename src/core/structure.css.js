module.exports = {
  variants: ['responsive'],
  utility: theme => ({
    '.flex-full': {
      // setup
      flex: '1 1 100%',
    },
    '.container-reset': {
      // setup
      padding: 0,
      width: 'auto',
      maxWidth: 'none',
    },
    '.container-y': {
      // setup
      ...theme('container.padding'),
    },
    '.-container': {
      // setup
      ...theme('container.padding'),
    },
    '.-container-y': {
      // setup
      ...theme('container.padding'),
    },
    '.h-screen': {
      // setup
      height: 'calc(var(--vh, 1vh) * 100) !important',
    },
    '.min-h-screen': {
      // setup
      minHeight: 'calc(var(--vh, 1vh) * 100) !important',
    },
    '.max-h-screen': {
      // setup
      maxHeight: 'calc(var(--vh, 1vh) * 100) !important',
    },
    '.mt-fc': {
      // setup
      '&:first-child': {
        marginTop: theme('spacing.0'),
      },
    },
    '.mb-lc': {
      // setup
      '&:last-child': {
        marginBottom: theme('spacing.0'),
      },
    },
  }),
  component: theme => ({
    html: {
      // setup
      touchAction: 'manipulation', // disable double-tap
      '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)', // disable tap highlight
      height: '100%',
    },
    body: {
      // setup
      '@apply overflow-main': '',
      height: '100%',
    },
    '::selection': {
      // styles
      backgroundColor: '#00FFDD',
      color: theme('colors.black'),
    },
    '.overflow-main': {
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
    '.overflow-sub': {
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
    '[readonly], [disabled], .disabled': {
      // setup
      cursor: 'not-allowed',
      pointerEvents: 'none',
      // styles
      '&:not(.active)': {
        // when not .active
        opacity: '.75',
      },
    },
    '.backdrop': {
      // setup
      position: 'fixed',
      zIndex: theme('zIndex.backdrop'),
      top: '0',
      right: '0',
      width: '100%',
      height: '100%',
      // styles
      backgroundColor: theme('colors.gray.900'),
      opacity: '0',
      // animation
      transitionProperty: 'opacity',
      transitionDuration: theme('transitionDuration.500'),
      transitionTimingFunction: theme('transitionTimingFunction.in-out'),
      '.active &': {
        opacity: '.3',
      },
    },
    'html:not(.xt-focus-disable)': {
      ':focus': {
        outline: 'none !important',
      },
      '&.xt-focus-visible': {
        ':focus': {
          outline: `5px auto ${theme('colors.accent.700')} !important`,
        },
        'input:not([type="checkbox"]):not([type="radio"]), select, textarea': {
          '&:focus': {
            outline: 'none !important',
          },
        },
      },
    },
    '.design-setup': {
      position: 'absolute',
      zIndex: '-1',
      top: '0',
      left: '0',
      bottom: '0',
      right: '0',
    },
  }),
}
