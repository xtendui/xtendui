module.exports = {
  component: theme => ({
    'body:not(.no-js-fouc):not(.xt-ready)': {
      // instant animations on page load
      '*': {
        '@apply duration-none !important': '',
      },
    },
    '@media (prefers-reduced-motion: reduce), (update: slow)': {
      // instant animations accessibility
      'body:not(.no-js-prm)': {
        '*': {
          '@apply duration-none !important': '',
        },
      },
    },
    '.initial': {
      // instant animations on components init and reinit
      'body:not(.no-js-initial)': {
        '&, *': {
          '@apply duration-none !important': '',
        },
      },
    },
    'body.xt-scrollbar': {
      // setup
      overflow: 'hidden !important',
    },
    '[data-xt-pag].xt-ignore': {
      // setup
      display: 'none !important',
    },
    '[data-xt-nav]': {
      // setup
      cursor: 'pointer',
    },
    '.xt-transition-none': {
      // setup
      transition: 'none !important',
    },
    '.xt-container': {
      // setup
      position: 'relative',
      width: '100%',
    },
    '.xt-jump': {
      // setup
      '&:not(.in)': {
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
      // setup
      '@apply duration-none !important': '',
      display: 'block !important',
      visibility: 'hidden !important',
      opacity: '0 !important',
    },
    '.xt-collapse-reset': {
      // setup
      overflow: 'visible !important',
    },
  }),
}
