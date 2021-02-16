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
      height: 'calc(var(--vh, 1vh) * 100) !important',
    },
    '.xt-min-h-screen': {
      minHeight: 'calc(var(--vh, 1vh) * 100) !important',
    },
    '.xt-max-h-screen': {
      maxHeight: 'calc(var(--vh, 1vh) * 100) !important',
    },
  }),
  component: theme => ({
    html: {
      touchAction: 'manipulation', // disable double-tap
      '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)', // disable tap highlight
    },
    body: {
      '@apply xt-overflow-main': '',
    },
    '.container': theme('container.fluid')
      ? {
          maxWidth: '1536px',
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
      '&:not(.active)': {
        opacity: '.75',
      },
    },
    '.xt-backdrop': {
      position: 'fixed',
      zIndex: theme('zIndex.xt-backdrop'),
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
      transitionTimingFunction: theme('transitionTimingFunction.out'),
      '.active &': {
        opacity: '.3',
      },
    },
    'body:not(.xt-focus-disable)': {
      ':focus': {
        outline: 'none !important',
      },
      '&.xt-focus-visible': {
        ':focus': {
          outline: `5px auto ${theme('colors.primary.700')} !important`,
        },
        'input:not([type="checkbox"]):not([type="radio"]), select, textarea': {
          '&:focus': {
            outline: 'none !important',
          },
        },
      },
    },
    '.xt-design-setup': {
      position: 'absolute',
      zIndex: '-1',
      top: '0',
      left: '0',
      bottom: '0',
      right: '0',
    },
  }),
}
