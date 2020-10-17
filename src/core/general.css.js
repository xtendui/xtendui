module.exports = {
  components: theme => ({
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
      backgroundColor: '#79ffe1',
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
        background: theme('colors.gray.500'),
      },
      scrollbarWidth: 'auto',
      scrollbarColor: theme('colors.gray.500') + ' transparent',
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
        background: theme('colors.white'),
        opacity: 0.5,
      },
      scrollbarWidth: 'thin',
      scrollbarColor: theme('colors.white') + ' transparent',
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
    '.design-setup': {
      // setup
      content: '""',
      position: 'absolute',
      zIndex: '-1',
      top: '0',
      left: '0',
      bottom: '0',
      right: '0',
      borderRadius: 'inherit',
      transitionProperty: 'inherit',
      transitionDuration: 'inherit',
      transitionTimingFunction: 'inherit',
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
      opacity: '.3',
    },
    'html.xt-scrollbar': {
      // setup
      body: {
        overflowY: 'hidden',
      },
      '.overlay': {
        overflowY: 'scroll',
      },
    },
    '.initial': {
      // instant animations on components init and reinit
      '&, *': {
        '@apply duration-none !important': '',
      },
    },
    '@media (prefers-reduced-motion: reduce), (update: slow)': {
      // instant animations accessibility
      '*': {
        '@apply duration-none !important': '',
      },
    },
    '[data-xt-pag].xt-ignore': {
      // setup
      display: 'none !important',
    },
    '[data-xt-nav]': {
      // setup
      cursor: 'pointer',
    },
    '.xt-container': {
      // setup
      position: 'relative',
      width: '100%',
    },
    '.xt-disable': {
      // setup
      '&:after': {
        display: 'none',
        content: '"xt-disable"',
      },
    },
    '.xt-disable-after-init': {
      // setup
      '&:after': {
        display: 'none',
        content: '"xt-disable-after-init"',
      },
    },
    '.xt-jump': {
      // setup
      '&:not(.active)': {
        cursor: 'pointer',
      },
      '&.xt-jumps-none, .xt-jumps-none &': {
        cursor: 'inherit',
      },
    },
    '.xt-pointer-events-none': {
      // setup
      pointerEvents: 'none',
    },
    '.xt-links-none': {
      // setup
      'a&, a': {
        pointerEvents: 'none',
      },
    },
    '.xt-grab': {
      // setup
      '@apply select-none': '',
      cursor: 'grab',
      'a, img': {
        // prevent browser drag
        '-webkit-user-drag': 'none',
        userDrag: 'none',
        // prevent browser selection
        '-webkit-user-select': 'none',
        '-moz-user-select': 'none',
        '-ms-user-select': 'none',
        userSelect: 'none',
      },
    },
    '.xt-calculating': {
      // setup
      '@apply duration-none !important': '',
      display: 'block !important',
      visibility: 'hidden !important',
      opacity: '0 !important',
    },
    '.xt-indicator': {
      pointerEvents: 'none',
      position: 'fixed',
      right: '0',
      marginTop: '-9px',
      width: '100px',
      height: '18px',
      zIndex: theme('zIndex.top') + 1,
      lineHeight: '0',
      textAlign: 'right',
      '&:before': {
        display: 'inline-block',
        position: 'relative',
        padding: '3px 6px',
        fontSize: '12px',
        lineHeight: '1',
        textTransform: 'uppercase',
      },
    },
    '.xt-indicator-trigger': {
      right: '100px',
      backgroundColor: 'purple',
      '&:before': {
        content: '"trigger"',
        color: 'white',
        backgroundColor: 'purple',
      },
    },
    '.xt-indicator-start': {
      backgroundColor: 'red',
      '&:before': {
        content: '"start"',
        color: 'white',
        backgroundColor: 'red',
      },
    },
    '.xt-indicator-end': {
      backgroundColor: 'blue',
      '&:before': {
        content: '"end"',
        color: 'white',
        backgroundColor: 'blue',
      },
    },
    '.xt-indicator-start-real': {
      backgroundColor: 'red',
      opacity: '.3',
      zIndex: theme('zIndex.top'),
      '&:before': {
        content: '"start real"',
        color: 'white',
        backgroundColor: 'red',
      },
    },
    '.xt-indicator-end-real': {
      backgroundColor: 'blue',
      opacity: '.3',
      zIndex: theme('zIndex.top'),
      '&:before': {
        content: '"end real"',
        color: 'white',
        backgroundColor: 'blue',
      },
    },
  }),
  utilities: theme => ({
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
    '.container-reset': {
      // setup
      padding: 0,
      width: 'auto',
      maxWidth: 'none',
    },
    '.toggle': {
      // setup
      '&:not(.active):not(.out)': {
        display: 'none',
      },
    },
    '.toggle-inverse': {
      // setup
      '&.done': {
        display: 'none',
      },
    },
    '.duration-none': {
      // setup
      transitionDuration: 'initial',
      transitionDelay: 'initial',
      animationDuration: 'initial',
      animationDelay: 'initial',
      animationIterationCount: '1',
    },
  }),
}
