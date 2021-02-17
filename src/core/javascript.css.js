module.exports = {
  component: {
    'body:not(.xt-nojs-fouc):not(.xt-ready)': {
      // instant animations on page load
      '*': {
        transitionDuration: 'initial !important',
        transitionDelay: 'initial !important',
        animationDuration: 'initial !important',
        animationDelay: 'initial !important',
        animationIterationCount: '1 !important',
      },
    },
    '@media (prefers-reduced-motion: reduce), (update: slow)': {
      // instant animations accessibility
      'body:not(.xt-nojs-prm)': {
        '*': {
          transitionDuration: 'initial !important',
          transitionDelay: 'initial !important',
          animationDuration: 'initial !important',
          animationDelay: 'initial !important',
          animationIterationCount: '1 !important',
        },
      },
    },
    '.initial': {
      // instant animations on components init and reinit
      'body:not(.xt-nojs-initial)': {
        '&, *': {
          transitionDuration: 'initial !important',
          transitionDelay: 'initial !important',
          animationDuration: 'initial !important',
          animationDelay: 'initial !important',
          animationIterationCount: '1 !important',
        },
      },
    },
    'body.xt-scrollbar': {
      overflow: 'hidden !important',
    },
    '[data-xt-pag].xt-ignore': {
      display: 'none !important',
    },
    '[data-xt-nav]': {
      cursor: 'pointer',
    },
    '.xt-instant': {
      transition: 'none !important',
    },
    '.xt-container': {
      position: 'relative',
      width: '100%',
    },
    '.xt-jump': {
      '&:not(.in)': {
        cursor: 'pointer',
      },
      '&.xt-jumps-none, .xt-jumps-none &': {
        cursor: 'inherit',
      },
    },
    '.xt-pointer-events-none': {
      pointerEvents: 'none',
    },
    '.xt-links-none': {
      'a&, a': {
        pointerEvents: 'none',
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
    '.xt-calculating': {
      display: 'block !important',
      visibility: 'hidden !important',
      opacity: '0 !important',
      transitionDuration: 'initial !important',
      transitionDelay: 'initial !important',
      animationDuration: 'initial !important',
      animationDelay: 'initial !important',
      animationIterationCount: '1 !important',
    },
    '.xt-collapse-reset': {
      overflow: 'visible !important',
    },
  },
}
