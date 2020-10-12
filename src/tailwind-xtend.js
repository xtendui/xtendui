// rem and em
// https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js
const round = num =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = px => `${round(px / 16)}rem`
//const em = (px, base) => `${round(px / base)}em`

module.exports = theme => ({
  utilities: {
    core: {
      // general
      general: {
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
      },
      // card
      card: {
        '.card-group': {
          // setup
          display: 'flex',
          alignItems: 'inherit',
        },
        '.card-disable': {
          // setup
          '@apply text-default': '',
          borderWidth: '0',
          backgroundColor: 'transparent',
          boxShadow: 'none',
          '> .card-design': {
            display: 'none',
          },
          '&, > *': {
            padding: '0',
            '> .card-block': {
              padding: '0',
            },
          },
          '> .btn-close': {
            display: 'none',
          },
        },
      },
      // drop
      drop: {
        '.drop-container-disable': {
          // setup
          '@apply xt-disable': '',
          position: 'initial',
          '> a, > button': {
            display: 'none',
          },
          '> .drop': {
            display: 'inline-block !important',
            position: 'relative',
            top: 'auto',
            left: 'auto',
            right: 'auto',
            bottom: 'auto',
            '> .drop-inner': {
              zIndex: 'initial',
              '> .drop-design': {
                display: 'none',
              },
              '> .card': {
                '@apply card-disable !important': '',
              },
            },
          },
        },
        '.drop-before': {
          // setup
          left: 'auto',
          right: '100%',
        },
        '.drop-after': {
          // setup
          left: '100%',
          right: 'auto',
        },
        '.drop-left': {
          // setup
          left: '0',
          right: 'auto',
          '&:before': {
            display: 'none',
            content: '""',
          },
        },
        '.drop-right': {
          // setup
          left: 'auto',
          right: '0',
          '&:before': {
            display: 'none',
            content: '""',
          },
        },
        '.drop-bottom': {
          // setup
          top: '100%',
          bottom: 'auto',
          '&:after': {
            display: 'none',
            content: '""',
          },
        },
        '.drop-top': {
          // setup
          top: 'auto',
          bottom: '100%',
          '&:after': {
            display: 'none',
            content: '""',
          },
        },
        '.drop-center': {
          // setup
          '&:before': {
            display: 'none',
            content: '"xt-drop-center"',
          },
        },
        '.drop-middle': {
          // setup
          paddingTop: '0',
          paddingBottom: '0',
          '&:after': {
            display: 'none',
            content: '"xt-drop-middle"',
          },
        },
        '.drop-contain-bottom': {
          // setup
          '@apply drop-middle': '',
          top: 'auto',
          bottom: '0',
        },
        '.drop-contain-top': {
          // setup
          '@apply drop-middle': '',
          top: '0',
          bottom: 'auto',
        },
      },
      // link
      link: {
        '.text-default': {
          // use @apply text to have tailwind opacity utilities
          'a:not([class]), .link': {
            '@apply text-accent-500': '',
            '&:hover, &:active, &.active': {
              '@apply text-accent-600': '',
            },
          },
        },
        '.text-inverse': {
          // use @apply text to have tailwind opacity utilities
          'a:not([class]), .link': {
            '@apply text-white': '',
            '&:hover, &:active, &.active': {
              '@apply text-white': '',
            },
          },
        },
      },
      // list
      list: {
        space: {
          // styles
          ...theme('spacing'),
        },
      },
      // overlay
      overlay: {
        '.overlay-screen': {
          // setup
          '.overlay-container': {
            position: 'relative',
            zIndex: theme('zIndex.overlay'),
            padding: '0 !important',
            '.overlay-inner': {
              position: 'static',
            },
          },
          '.overlay-inner': {
            display: 'flex',
            flexDirection: 'column',
            flex: '1 1 auto',
          },
        },
        '.overlay-disable': {
          // setup
          '@apply xt-disable': '',
          display: 'flex !important',
          overflow: 'initial !important',
          position: 'static',
          zIndex: 'initial',
          top: 'auto',
          left: 'auto',
          bottom: 'auto',
          right: 'auto',
          width: 'auto',
          height: 'auto',
          '.overlay-design': {
            display: 'none',
          },
          '.overlay-container': {
            zIndex: 'initial',
            padding: '0',
            width: '100%',
            minHeight: 'auto',
            maxWidth: 'none',
          },
          '.overlay-inner': {
            '> .card': {
              '@apply card-disable !important': '',
            },
          },
          '> .backdrop': {
            display: 'none !important',
          },
        },
      },
      // slider
      slider: {
        '.slider-disable': {
          // setup
          '@apply xt-disable-after-init': '',
          '.slider-pagination, [data-xt-nav]': {
            display: 'none !important',
          },
          '.xt-wrap': {
            visibility: 'hidden !important',
            opacity: '0 !important',
          },
          // @FIX do calculation first
          '&.xt-disabled': {
            '.slide:not(.active)': {
              visibility: 'hidden !important',
              opacity: '0 !important',
              height: '0 !important',
            },
          },
        },
        '.slider-expand': {
          // setup
          '@apply xt-disable': '',
          '.slides': {
            overflow: 'visible',
            height: 'auto !important',
          },
          '.slides-inner': {
            '@apply duration-none transform-none animate-none !important': '',
            flexWrap: 'wrap !important',
          },
          '.slide:not(.active)': {
            opacity: '1 !important',
          },
          '.xt-wrap, .slider-pagination, [data-xt-nav], .loader, .filler, .spinner': {
            display: 'none !important',
          },
        },
      },
      // sticky
      sticky: {
        '.sticky-disable': {
          // setup
          '@apply xt-disable': '',
          position: 'relative !important',
          top: 'initial !important',
          left: 'initial !important',
          right: 'initial !important',
          bottom: 'initial !important',
          '&.xt-clone': {
            display: 'none !important',
          },
          '&:not(.xt-clone)': {
            position: 'relative !important',
          },
        },
      },
      // row
      row: {
        space: {
          // styles
          ...theme('spacing'),
        },
      },
      // typography
      typography: {
        '.text-default': {
          // use @apply text to have tailwind opacity utilities
          '@apply text-accent-900': '',
        },
        '.text-inverse': {
          // use @apply text to have tailwind opacity utilities
          '@apply text-white': '',
        },
        '.h1': {
          // style
          marginTop: theme('spacing.6'),
          marginBottom: theme('spacing.4'),
          '@apply mt-fc mb-lc': {},
          fontFamily: theme('fontFamily.sans').toString(),
          fontWeight: theme('fontWeight.semibold'),
          fontSize: rem(35),
          lineHeight: theme('lineHeight.snug'),
          letterSpacing: theme('letterSpacing.normal'),
          textTransform: 'none',
          '@screen lg': {
            fontSize: rem(40),
          },
        },
        '.h2': {
          // style
          marginTop: theme('spacing.6'),
          marginBottom: theme('spacing.4'),
          '@apply mt-fc mb-lc': {},
          fontFamily: theme('fontFamily.sans').toString(),
          fontWeight: theme('fontWeight.semibold'),
          fontSize: rem(30),
          lineHeight: theme('lineHeight.snug'),
          letterSpacing: theme('letterSpacing.normal'),
          textTransform: 'none',
          '@screen lg': {
            fontSize: rem(35),
          },
        },
        '.h3': {
          // style
          marginTop: theme('spacing.6'),
          marginBottom: theme('spacing.4'),
          '@apply mt-fc mb-lc': {},
          fontFamily: theme('fontFamily.sans').toString(),
          fontWeight: theme('fontWeight.semibold'),
          fontSize: rem(25),
          lineHeight: theme('lineHeight.snug'),
          letterSpacing: theme('letterSpacing.normal'),
          textTransform: 'none',
          '@screen lg': {
            fontSize: rem(30),
          },
        },
        '.h4': {
          // style
          marginTop: theme('spacing.6'),
          marginBottom: theme('spacing.4'),
          '@apply mt-fc mb-lc': {},
          fontFamily: theme('fontFamily.sans').toString(),
          fontWeight: theme('fontWeight.semibold'),
          fontSize: rem(24),
          lineHeight: theme('lineHeight.snug'),
          letterSpacing: theme('letterSpacing.normal'),
          textTransform: 'none',
        },
        '.h5': {
          // style
          marginTop: theme('spacing.3'),
          marginBottom: theme('spacing.2'),
          '@apply mt-fc mb-lc': {},
          fontFamily: theme('fontFamily.sans').toString(),
          fontWeight: theme('fontWeight.semibold'),
          fontSize: rem(18),
          lineHeight: theme('lineHeight.snug'),
          letterSpacing: theme('letterSpacing.normal'),
          textTransform: 'none',
        },
        '.h6': {
          // style
          marginTop: theme('spacing.2'),
          marginBottom: theme('spacing.1'),
          '@apply mt-fc mb-lc': {},
          fontFamily: theme('fontFamily.sans').toString(),
          fontWeight: theme('fontWeight.semibold'),
          fontSize: '13px',
          lineHeight: theme('lineHeight.snug'),
          letterSpacing: theme('letterSpacing.wide'),
          textTransform: 'uppercase',
        },
        '.h-block': {
          // style
          marginTop: theme('spacing.8'),
          marginBottom: theme('spacing.6'),
          '@apply mt-fc mb-lc': {},
          paddingTop: theme('spacing.3'),
          paddingBottom: theme('spacing.3'),
          paddingLeft: theme('spacing.6'),
          paddingRight: theme('spacing.6'),
        },
        '.p': {
          // setup
          fontFamily: 'inherit',
          fontStyle: 'inherit',
          fontWeight: 'inherit',
          letterSpacing: 'inherit',
          textTransform: 'inherit',
          // style
          marginTop: theme('spacing.3'),
          marginBottom: theme('spacing.3'),
          '@apply text-base mb-lc': {},
        },
        '.text-reset': {
          // setup
          fontFamily: 'inherit',
          fontStyle: 'inherit',
          fontWeight: 'inherit',
          fontSize: 'inherit',
          lineHeight: 'inherit',
          letterSpacing: 'inherit',
          textTransform: 'inherit',
        },
        '.ellipsis': {
          // setup
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          '> *': {
            display: 'inline !important',
            verticalAlign: 'middle !important',
          },
        },
        '.lowercase-capitalize': {
          // setup
          textTransform: 'lowercase',
          '&:first-letter': {
            textTransform: 'uppercase',
          },
        },
      },
    },
  },
  components: {
    core: {
      // general
      general: {
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
          backgroundColor: theme('colors.accent.600'),
          color: theme('colors.white'),
        },
        '.overflow-main': {
          // styles
          '-webkit-overflow-scrolling': 'touch',
          '&::-webkit-scrollbar': {
            height: '10px',
            width: '10px',
            background: theme('colors.gray.200'),
            '@media (hover: none)': {
              display: 'none',
            },
          },
          '&::-webkit-scrollbar-thumb': {
            background: theme('colors.accent.700'),
          },
          scrollbarColor: theme('colors.accent.700') + ' transparent',
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
            background: theme('colors.accent.700'),
          },
          scrollbarWidth: 'thin',
          scrollbarColor: theme('colors.accent.700') + ' transparent',
        },
        'html:not(.xt-focus-disable)': {
          ':focus': {
            // setup disable default focus outline
            outline: 'none !important',
          },
          '&.xt-focus-visible': {
            // styles enable custom focus outline
            ':focus': {
              outline: `5px auto ${theme('colors.accent.700')} !important`,
            },
            // setup disable focus forms outline
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
      },
      // badge
      badge: {
        '.badge': {
          // setup
          display: 'inline-block',
          verticalAlign: 'middle',
          // styles
          fontFamily: theme('fontFamily.sans').toString(),
          fontWeight: theme('fontWeight.semibold'),
          lineHeight: theme('lineHeight.snug'),
          letterSpacing: theme('letterSpacing.wider'),
          textTransform: 'uppercase',
          // animation
          'a&, button&, label&': {
            zIndex: theme('zIndex.base'),
            transitionProperty: 'all',
            transitionDuration: theme('transitionDuration.500'),
            transitionTimingFunction: theme('transitionTimingFunction.out'),
            '&:hover, &:active, &.active': {
              zIndex: theme('zIndex.active'),
              transitionTimingFunction: theme('transitionTimingFunction.in'),
            },
          },
        },
        '.badge-sm': {
          // styles
          padding: `${rem(6)} ${rem(10)}`,
          fontSize: rem(10),
        },
        '.badge-md': {
          // styles
          padding: `${rem(8)} ${rem(14)}`,
          fontSize: rem(12),
        },
        '.badge-lg': {
          // styles
          padding: `${rem(10)} ${rem(18)}`,
          fontSize: rem(14),
        },
      },
      // btn
      btn: {
        '.btn': {
          // setup
          cursor: 'pointer',
          display: 'inline-flex',
          position: 'relative',
          verticalAlign: 'middle',
          flexWrap: 'nowrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          textAlign: 'left',
          // styles
          fontFamily: theme('fontFamily.sans').toString(),
          fontWeight: theme('fontWeight.semibold'),
          lineHeight: theme('lineHeight.snug'),
          letterSpacing: theme('letterSpacing.wider'),
          textTransform: 'uppercase',
          // animation
          zIndex: theme('zIndex.base'),
          transitionProperty: 'all',
          transitionDuration: theme('transitionDuration.500'),
          transitionTimingFunction: theme('transitionTimingFunction.out'),
          '&:hover, &:active, &.active': {
            zIndex: theme('zIndex.active'),
            transitionTimingFunction: theme('transitionTimingFunction.in'),
          },
        },
        '.btn-sm': {
          // styles
          padding: `${rem(7)} ${rem(11)}`,
          fontSize: rem(10),
        },
        '.btn-md': {
          // styles
          padding: `${rem(9)} ${rem(15)}`,
          fontSize: rem(12),
        },
        '.btn-lg': {
          // styles
          padding: `${rem(11)} ${rem(19)}`,
          fontSize: rem(14),
        },
        '.btn-close': {
          // setup
          position: 'absolute',
          zIndex: theme('zIndex.top'),
          top: '0',
          right: '0',
          '& + *': {
            margin: '0 !important',
          },
          // styles
          padding: theme('spacing.5'),
          fontSize: '1.75rem',
        },
      },
      // card
      card: {
        '.card': {
          // setup
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          justifyContent: 'flex-start',
          flex: '1 1 auto',
          width: '100%',
          // animation
          'a&, button&, label&': {
            zIndex: theme('zIndex.base'),
            transitionProperty: 'all',
            transitionDuration: theme('transitionDuration.500'),
            transitionTimingFunction: theme('transitionTimingFunction.out'),
            '&:hover, &:active, &.active': {
              zIndex: theme('zIndex.active'),
              transitionTimingFunction: theme('transitionTimingFunction.in'),
            },
          },
        },
        '.card-sm': {
          // styles
          minWidth: `${rem(300)}`,
        },
        '.card-md': {
          // styles
          minWidth: `${rem(400)}`,
        },
        '.card-lg': {
          // styles
          minWidth: `${rem(500)}`,
        },
        '.card-block': {
          // setup
          position: 'relative',
          width: '100%',
        },
        '.card-block-sm': {
          // styles
          padding: `${rem(20)} ${rem(25)}`,
        },
        '.card-block-md': {
          // styles
          padding: `${rem(25)} ${rem(30)}`,
        },
        '.card-block-lg': {
          // styles
          padding: `${rem(35)} ${rem(40)}`,
        },
        '.card-design': {
          // setup
          '@apply design-setup': '',
        },
        '.card-asset': {
          // setup
          position: 'relative',
          width: '100%',
          '> *': {
            width: '100%',
            height: 'auto',
          },
        },
        '.card-default-full-interactive': {
          // styles
          '.card-design': {
            top: `-${rem(25)}`,
            left: `-${rem(30)}`,
            bottom: `-${rem(25)}`,
            right: `-${rem(30)}`,
            borderColor: theme('colors.transparent'),
            backgroundColor: theme('colors.transparent'),
          },
          '&:hover': {
            '.card-design': {
              borderColor: theme('colors.gray.200'),
              backgroundColor: theme('colors.gray.200'),
            },
          },
          '&:active, &.active': {
            '.card-design': {
              borderColor: theme('colors.gray.300'),
              backgroundColor: theme('colors.gray.300'),
            },
          },
        },
        '.card-primary-full-interactive': {
          // styles
          '.card-design': {
            top: `-${rem(25)}`,
            left: `-${rem(30)}`,
            bottom: `-${rem(25)}`,
            right: `-${rem(30)}`,
            borderColor: theme('colors.transparent'),
            backgroundColor: theme('colors.transparent'),
          },
          '&:hover': {
            '.card-design': {
              borderColor: theme('colors.accent.500'),
              backgroundColor: theme('colors.accent.500'),
            },
          },
          '&:active, &.active': {
            '.card-design': {
              borderColor: theme('colors.accent.600'),
              backgroundColor: theme('colors.accent.600'),
            },
          },
        },
      },
      // drop
      drop: {
        '.drop-container': {
          // setup
          position: 'relative',
        },
        '.drop': {
          // setup
          '@apply toggle': '',
          position: 'absolute',
          zIndex: 'inherit',
          transitionDuration: 'inherit',
          '&.in': {
            zIndex: theme('zIndex.drop'),
          },
          '&.out': {
            zIndex: theme('zIndex.drop') - 1,
          },
          // styles
          '@apply drop-left drop-bottom': '',
          padding: theme('spacing.2'),
        },
        '.drop-inner': {
          // setup
          position: 'relative',
          zIndex: theme('zIndex.drop'),
        },
        '.drop-design': {
          // setup
          '@apply design-setup': '',
        },
        '.drop-container-static': {
          // setup
          position: 'static',
          '> .drop': {
            width: '100%',
            '> .drop-inner': {
              width: '100%',
            },
            left: '0 !important',
            right: '0 !important',
          },
        },
      },
      // form
      form: {
        label: {
          cursor: 'pointer',
        },
        'form, .form': {
          // styles
          '@apply form-md': '',
        },
        'fieldset, .fieldset': {
          // styles
          '& + &': {
            marginTop: theme('spacing.8'),
          },
        },
        'legend, .legend': {
          // styles
          marginTop: theme('spacing.6'),
          marginBottom: theme('spacing.4'),
          '@apply mt-fc mb-lc': {},
          width: '100%',
          fontFamily: theme('fontFamily.sans').toString(),
          fontWeight: theme('fontWeight.semibold'),
          fontSize: rem(24),
          lineHeight: theme('lineHeight.snug'),
        },
        '.form-valid': {
          borderColor: `${theme('colors.success')} !important`,
        },
        '.form-invalid': {
          borderColor: `${theme('colors.error')} !important`,
        },
        '.form-sm': {
          // styles
          fontSize: rem(12),
        },
        '.form-md': {
          // styles
          fontSize: rem(14),
        },
        '.form-lg': {
          // styles
          fontSize: rem(16),
        },
        '.form-label': {
          // setup
          cursor: 'pointer',
          display: 'flex',
          // styles
          fontWeight: theme('fontWeight.semibold'),
          fontSize: '1em',
          lineHeight: theme('lineHeight.snug'),
          letterSpacing: theme('letterSpacing.wider'),
          textTransform: 'uppercase',
        },
        '.form-label-required': {
          // styles
          '&:after': {
            content: '"*"',
            marginLeft: theme('spacing.1'),
          },
        },
        '.form-item': {
          // setup
          display: 'block', // @FIX select and textarea space below
          zIndex: theme('zIndex.base'),
          '&:focus, &.active': {
            zIndex: theme('zIndex.active'),
          },
          // styles
          padding: `.75em 1.2em`,
          width: '100%',
          fontSize: '1em',
          lineHeight: theme('lineHeight.snug'),
          // animation
          transitionProperty: 'all',
          transitionDuration: theme('transitionDuration.500'),
          transitionTimingFunction: theme('transitionTimingFunction.ease.out'),
          '&:hover, &:focus': {
            transitionTimingFunction: theme('transitionTimingFunction.ease.in'),
          },
        },
        '.form-select': {
          // setup
          '@apply appearance-none': '',
          backgroundRepeat: 'no-repeat',
          // styles
          paddingRight: '3em',
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="none" stroke="${encodeURIComponent(
            theme('colors.black')
          )}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 5l6 6 6-6"/></svg>')`,
          backgroundSize: '1em',
          backgroundPosition: 'right 1rem center',
          '&[multiple]': {
            backgroundImage: 'none !important',
          },
        },
        '.form-label-check': {
          // setup
          cursor: 'pointer',
          display: 'inline-flex',
          // styles
          fontSize: '1em',
          lineHeight: theme('lineHeight.snug'),
        },
        '.form-check': {
          // setup
          '@apply appearance-none': '',
          cursor: 'pointer',
          position: 'relative',
          flexShrink: '0',
          backgroundRepeat: 'no-repeat',
          // styles
          '&[disabled]': {
            backgroundColor: `${theme('colors.gray.500')} !important`,
            borderColor: `${theme('colors.gray.500')} !important`,
            opacity: '1',
          },
          // animation
          transitionProperty: 'all',
          transitionDuration: theme('transitionDuration.500'),
          transitionTimingFunction: theme('transitionTimingFunction.out'),
          '&:checked': {
            transitionTimingFunction: theme('transitionTimingFunction.in'),
          },
          '&:hover, &:focus': {
            transitionTimingFunction: theme('transitionTimingFunction.ease.in'),
          },
        },
        '.form-checkbox': {
          // styles
          top: '-1px',
          width: '1.5em',
          height: '1.5em',
          backgroundImage: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 16 16" fill="${encodeURIComponent(
            theme('colors.white')
          )}" xmlns="http://www.w3.org/2000/svg"><path d="M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z"/></svg>')`,
          backgroundSize: '0',
          backgroundPosition: 'center center',
          '&:checked': {
            backgroundSize: '100%',
            backgroundColor: 'currentColor',
            borderColor: 'currentColor',
          },
        },
        '.form-radio': {
          top: '-1px',
          width: '1.5em',
          height: '1.5em',
          backgroundImage: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 16 16" fill="${encodeURIComponent(
            theme('colors.white')
          )}" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>')`,
          backgroundPosition: 'center center',
          backgroundSize: '0',
          '&:checked': {
            backgroundSize: '100%',
            backgroundColor: 'currentColor',
            borderColor: 'currentColor',
          },
        },
        '.form-switch': {
          top: '-1px',
          width: '2.5em',
          height: '1.5em',
          backgroundImage: `url('data:image/svg+xml;utf8,<svg viewBox="-4 -4 8 8" fill="${encodeURIComponent(
            theme('colors.gray.600')
          )}" xmlns="http://www.w3.org/2000/svg"><circle  r="3"/></svg>')`,
          backgroundSize: 'contain',
          backgroundPosition: 'left center',
          '&:checked': {
            backgroundImage: `url('data:image/svg+xml;utf8,<svg viewBox="-4 -4 8 8" fill="${encodeURIComponent(
              theme('colors.white')
            )}" xmlns="http://www.w3.org/2000/svg"><circle  r="3"/></svg>')`,
            backgroundPosition: 'right center',
            backgroundColor: 'currentColor',
            borderColor: 'currentColor',
          },
        },
      },
      // group
      group: {
        '.group': {
          display: 'inline-flex',
          flexWrap: 'nowrap',
          alignItems: 'stretch',
          whiteSpace: 'nowrap',
        },
        '.group-inner': {
          display: 'inline-flex',
        },
      },
      // icon
      icon: {
        svg: {
          // setup
          width: '1em',
          height: '1em',
        },
      },
      // link
      link: {
        'a:not([class]), .link': {
          // setup
          '@apply text-reset !important': {},
          wordWrap: 'break-word',
          overflowWrap: 'break-word',
          textDecoration: 'underline',
          // animation
          transitionProperty: 'color',
          transitionDuration: theme('transitionDuration.500'),
          transitionTimingFunction: theme('transitionTimingFunction.ease.out'),
          '&:hover, &:active, &.active': {
            transitionTimingFunction: theme('transitionTimingFunction.ease.in'),
          },
        },
      },
      // list
      list: {
        '.list': {
          // setup
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          alignItems: 'flex-start',
        },
      },
      // loader
      loader: {
        '.loader': {
          // setup
          position: 'absolute',
          zIndex: theme('zIndex.top'),
          top: '0',
          left: '0',
          bottom: '0',
          right: '0',
          borderRadius: 'inherit !important',
          overflow: 'hidden',
        },
        '.filler': {
          // setup
          position: 'absolute',
          top: '0',
          left: '0',
          bottom: '0',
          right: '0',
          margin: 'auto',
          span: {
            position: 'absolute',
            top: '0',
            left: '0',
          },
        },
        '.spinner': {
          // setup
          position: 'absolute',
          top: '0',
          left: '0',
          bottom: '0',
          right: '0',
          margin: 'auto',
          // styles
          width: '25px',
          height: '25px',
          lineHeight: '0',
          '.btn &': {
            width: '1em',
            height: '1em',
          },
          svg: {
            circle: {
              fill: 'none',
              strokeWidth: '30',
              transformBox: 'border-box',
              transformOrigin: 'center center',
              '.btn &': {
                strokeWidth: '40',
              },
            },
            '&:nth-child(1)': {
              position: 'relative',
              zIndex: theme('zIndex.active'),
              circle: {
                strokeDashoffset: '628',
                transform: 'rotateY(0deg) rotateZ(-90deg)',
              },
            },
            '&:nth-child(2)': {
              position: 'absolute',
              top: '0',
              left: '0',
              circle: {
                strokeDashoffset: '0',
              },
            },
          },
        },
        '.loader-x': {
          // setup
          '.filler': {
            span: {
              width: '100%',
              height: '100%',
            },
            // styles
            'span:nth-child(1)': {
              width: '0',
            },
          },
        },
        '.loader-y': {
          // setup
          '.filler': {
            span: {
              width: '100%',
              height: '100%',
            },
            // styles
            'span:nth-child(1)': {
              height: '0',
            },
          },
        },
        '.loader-size-top': {
          // setup
          '.filler': {
            bottom: 'auto',
            span: {
              top: '0',
            },
          },
        },
        '.loader-size-bottom': {
          // setup
          '.filler': {
            top: 'auto',
            span: {
              bottom: '0',
            },
          },
        },
        '.loader-size-left': {
          // setup
          '.filler': {
            right: 'auto',
            span: {
              left: '0',
            },
          },
        },
        '.loader-size-right': {
          // setup
          '.filler': {
            left: 'auto',
            span: {
              right: '0',
            },
          },
        },
        '.loader-size-x, .loader-size-top, .loader-size-bottom': {
          // styles
          '.filler': {
            height: '3px',
          },
        },
        '.loader-size-y, .loader-size-left, .loader-size-right': {
          // styles
          '.filler': {
            width: '3px',
          },
        },
        '.loader-size-x': {
          // styles
          '.filler': {
            left: '25%',
            right: '25%',
          },
        },
        '.loader-size-y': {
          // styles
          '.filler': {
            top: '25%',
            bottom: '25%',
          },
        },
        '.loader-mouse': {
          overflow: 'visible',
          '.filler, .spinner': {
            display: 'block',
            position: 'relative',
            marginTop: '-10px',
            marginLeft: '40px',
          },
        },
        '.spinner-animated': {
          // animation
          svg: {
            '&:nth-child(1)': {
              circle: {
                animation: 'anim-spinner 1500ms infinite', // see node_modules/xtend-ui/src/tailwind-theme.js
              },
            },
          },
        },
        '.loader-x-animated': {
          // animation
          '.filler': {
            'span:nth-child(1)': {
              animation: 'anim-filler-x 1500ms infinite', // see node_modules/xtend-ui/src/tailwind-theme.js
            },
          },
        },
        '.loader-y-animated': {
          // animation
          '.filler': {
            'span:nth-child(1)': {
              animation: 'anim-filler-y 1500ms infinite', // see node_modules/xtend-ui/src/tailwind-theme.js
            },
          },
        },
        '.loader-animated': {
          // animation
          opacity: '0',
          transitionProperty: 'opacity',
          transitionDuration: theme('transitionDuration.500'),
          transitionTimingFunction: theme('transitionTimingFunction.ease.out'),
          '> *': {
            opacity: '0',
            transform: 'scale(.75)',
            transitionProperty: 'all',
            transitionDuration: theme('transitionDuration.500'),
            transitionTimingFunction: theme('transitionTimingFunction.ease.out'),
          },
          '&.in': {
            opacity: '1',
            transitionTimingFunction: theme('transitionTimingFunction.ease.in'),
            '> *': {
              opacity: '1',
              transform: 'scale(1)',
              transitionTimingFunction: theme('transitionTimingFunction.ease.in'),
            },
          },
        },
      },
      // media
      media: {
        '.media-container': {
          // setup
          display: 'block',
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          minHeight: '100%',
          borderRadius: 'inherit',
          // styles
          backgroundColor: theme('colors.gray.500'),
        },
        '.media-inner': {
          // setup
          position: 'absolute',
          top: '0',
          left: '0',
          bottom: '0',
          right: '0',
        },
        '.media': {
          // setup
          width: '100%',
          height: '100%',
        },
      },
      // overlay
      overlay: {
        '.overlay': {
          // setup
          '@apply toggle overflow-main': '',
          position: 'fixed',
          zIndex: theme('zIndex.overlay'),
          top: '0',
          left: '0',
          bottom: '0', // @FIX no height or it bugs collapse animation
          right: '0', // @FIX no width or it bugs collapse animation
          overflow: 'hidden',
        },
        '.overlay-design': {
          // setup
          '@apply design-setup': '',
        },
        '.overlay-container': {
          // setup
          display: 'flex',
          flexWrap: 'nowrap',
          flexDirection: 'column',
          justifyContent: 'center',
          margin: 'auto', // @FIX http://stackoverflow.com/questions/33454533/cant-scroll-to-top-of-flex-item-that-is-overflowing-container
          width: '100%',
          minHeight: '100vh',
          padding: theme('container.padding.default'),
          '@screen sm': {
            padding: theme('container.padding.sm'),
          },
          '@screen md': {
            padding: theme('container.padding.md'),
          },
          '@screen lg': {
            padding: theme('container.padding.lg'),
          },
          '@screen xl': {
            padding: theme('container.padding.xl'),
          },
        },
        '.overlay-inner': {
          // setup
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          position: 'relative',
          zIndex: theme('zIndex.overlay'),
          width: '100%',
          borderRadius: 'inherit',
        },
      },
      // row
      row: {
        '.row': {
          // setup
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          alignItems: 'flex-start',
          '> *': {
            flex: '0 0 auto', // @FIX column flex shrink
          },
        },
        '.row-stretch': {
          // setup
          alignItems: 'stretch',
          '> *': {
            display: 'flex',
            alignItems: 'stretch',
            '> *': {
              minHeight: '100%',
            },
          },
        },
        '@media (hover: none)': {
          '.row-overflow': {
            // setup
            '@apply overflow-sub': '',
            overflowX: 'auto',
            overflowY: 'hidden',
            flexWrap: 'nowrap',
            '> *': {
              flex: 'none',
            },
          },
        },
      },
      // slider
      slider: {
        '.slider': {
          // setup
          position: 'relative',
          overflow: 'hidden',
          '&:not(.xt-slider)': {
            // @FIX page load height without .active slides
            '.slide': {
              '&:first-child': {
                display: 'block !important',
                position: 'relative !important',
              },
            },
          },
        },
        '.slides': {
          // setup
          position: 'relative',
          display: 'inline-block', // @FIX autoheight values
          verticalAlign: 'top', // @FIX inline-block margin below
          width: '100%',
          // styles
          '&.xt-autoHeight': {
            // animation autoHeight
            transitionProperty: 'height',
            transitionDuration: theme('transitionDuration.500'),
            transitionTimingFunction: theme('transitionTimingFunction.ease.out'),
          },
        },
        '.slide': {
          // setup
          position: 'relative',
          '> *': {
            display: 'block',
            position: 'relative',
          },
        },
        '.slides-inner': {
          // styles
          flexWrap: 'nowrap',
          alignItems: 'flex-start',
          // animation dragger
          transitionProperty: 'transform',
          transitionDuration: theme('transitionDuration.500'),
          transitionTimingFunction: theme('transitionTimingFunction.ease.out'),
        },
        '.slider-pagination, .slider-navigation': {
          // styles
          paddingTop: theme('spacing.4'),
          alignItems: 'center',
          justifyContent: 'center',
        },
        '[data-xt-pag].btn': {
          // styles
          minHeight: '1.3rem',
          borderRadius: '2rem',
          padding: `${rem(7)} ${rem(11)}`,
          fontSize: rem(10),
          '&.active': {
            padding: `${rem(7)} ${rem(20)}`,
          },
          // animation
          transitionProperty: 'all',
          transitionDuration: theme('transitionDuration.500'),
          transitionTimingFunction: theme('transitionTimingFunction.out'),
          '&:hover, &:active, &.active': {
            transitionTimingFunction: theme('transitionTimingFunction.out'), // same easing to not jump when changing size
          },
        },
        '[data-xt-nav].btn': {
          minHeight: '1.3rem',
          borderRadius: '2rem',
          padding: `${rem(7)} ${rem(11)}`,
          fontSize: rem(10),
        },
        '.xt-overflow-auto': {
          '@apply xt-disable': '',
          '.slider-pagination, [data-xt-nav], .xt-wrap': {
            display: 'none !important',
          },
          // @FIX disable slider if not overflowing
          '.slides-inner': {
            '@apply duration-none transform-none !important': '',
          },
        },
      },
      // sticky
      sticky: {
        '.xt-sticky': {
          // setup
          '&.xt-clone': {
            pointerEvents: 'none',
            position: 'relative',
            visibility: 'hidden',
            top: '0',
            width: '100%',
          },
          '&:not(.xt-clone)': {
            position: 'relative',
            width: '100%',
          },
          '&.xt-clone:not(.active)': {
            position: 'absolute',
          },
          '&:not(.xt-clone):not(.active)': {
            position: 'relative',
          },
          '.show-sticky': {
            display: 'none',
          },
          '.hide-sticky': {
            display: 'block',
          },
          '&:not(.xt-clone).active': {
            position: 'fixed',
            zIndex: theme('zIndex.sticky'),
            width: '100%',
            '.show-sticky': {
              display: 'block',
            },
            '.hide-sticky': {
              display: 'none',
            },
          },
        },
        '.xt-sticky-absolute': {
          // setup
          '&.xt-clone': {
            position: 'relative',
          },
          '&.xt-clone:not(.active)': {
            position: 'relative',
          },
          '&:not(.xt-clone):not(.active)': {
            position: 'relative',
          },
          '&.xt-fixed:not(.xt-clone):not(.active)': {
            position: 'absolute',
            width: '100%',
          },
        },
        '.xt-sticky-fixed': {
          // setup
          '&.xt-clone': {
            position: 'relative',
          },
          '&.xt-clone:not(.active)': {
            position: 'relative',
          },
          '&:not(.xt-clone):not(.active)': {
            position: 'relative',
          },
          '&.xt-fixed:not(.xt-clone):not(.active)': {
            position: 'fixed',
            zIndex: theme('zIndex.sticky'),
            width: '100%',
          },
        },
        '.xt-sticky-fixed-always': {
          // setup
          '&.xt-clone': {
            position: 'absolute',
          },
          '&.xt-clone:not(.active)': {
            position: 'absolute',
          },
          '&:not(.xt-clone):not(.active)': {
            position: 'fixed',
            zIndex: theme('zIndex.sticky'),
            width: '100%',
          },
          '&.xt-fixed:not(.xt-clone):not(.active)': {
            position: 'fixed',
            zIndex: theme('zIndex.sticky'),
            width: '100%',
          },
        },
        '.sticky-moving': {
          // animation
          transitionProperty: 'top, bottom, opacity',
          transitionDuration: theme('transitionDuration.500'),
          transitionTimingFunction: theme('transitionTimingFunction.ease.out'),
          '&.inverse': {
            transitionTimingFunction: theme('transitionTimingFunction.ease.in'),
          },
        },
        '.sticky-hide': {
          // styles
          opacity: '0',
        },
        '.sticky-disable': {
          // styles
          opacity: '1 !important',
        },
      },
      // table
      table: {
        '.table': {
          // setup
          borderCollapse: 'separate',
          borderSpacing: '0',
          width: '100%',
        },
        '.table-scroll': {
          // setup
          '@apply overflow-sub': '',
          overflowX: 'scroll',
          overflowY: 'hidden',
        },
        '.table, .table-scroll': {
          // setup
          width: '100%',
          // styles
          marginTop: theme('spacing.6'),
          marginBottom: theme('spacing.6'),
          '@apply mt-fc mb-lc': {},
        },
        th: {
          // styles
          verticalAlign: 'top',
          padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
          fontFamily: theme('fontFamily.sans').toString(),
          fontWeight: theme('fontWeight.semibold'),
          fontSize: rem(11),
          lineHeight: theme('lineHeight.snug'),
          letterSpacing: theme('letterSpacing.wider'),
          textTransform: 'uppercase',
          textAlign: 'left',
        },
        td: {
          // styles
          verticalAlign: 'top',
          padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
          fontSize: rem(13),
          lineHeight: theme('lineHeight.snug'),
          textAlign: 'left',
        },
        'th, td': {
          // styles
          borderRightWidth: theme('borderWidth.default'),
          borderBottomWidth: theme('borderWidth.default'),
          borderColor: theme('borderColor.gray.200'),
          '&:last-child': {
            borderRight: '0',
          },
        },
        tbody: {
          // styles
          tr: {
            '&:last-child': {
              'th, td': {
                borderBottom: '0',
              },
            },
          },
        },
      },
      // typography
      typography: {
        html: {
          // style
          '@apply text-default': '',
          lineHeight: 1.8,
          fontSize: rem(14),
          '@screen sm': {
            fontSize: rem(15),
          },
          '@screen md': {
            fontSize: rem(16),
          },
          '@screen xl': {
            fontSize: rem(17),
          },
        },
        h1: {
          // setup
          '@apply h1': '',
        },
        h2: {
          // setup
          '@apply h2': '',
        },
        h3: {
          // setup
          '@apply h3': '',
        },
        h4: {
          // setup
          '@apply h4': '',
        },
        h5: {
          // setup
          '@apply h5': '',
        },
        h6: {
          // setup
          '@apply h6': '',
        },
        p: {
          // setup
          '@apply p': '',
        },
        'ul:not([class]), ol:not([class])': {
          // style
          marginBottom: theme('spacing.3'),
          '@apply mb-lc': {},
          '> li': {
            position: 'relative',
            marginBottom: theme('spacing.3'),
            '@apply mb-lc': {},
            '&:before': {
              position: 'absolute',
              display: 'inline-block',
              left: '0',
            },
            '> ul:not([class]), > ol:not([class])': {
              marginTop: theme('spacing.3'),
            },
          },
        },
        'ul:not([class])': {
          // style
          '> li': {
            paddingLeft: '1.25rem',
            '&:before': {
              content: '"\\2022"',
              color: theme('colors.gray.600'),
            },
          },
        },
        'ol:not([class])': {
          // style
          '> li': {
            counterIncrement: 'ol-counter',
            paddingLeft: '1.5rem',
            '&:before': {
              content: 'counter(ol-counter) "."',
              color: theme('colors.gray.600'),
            },
          },
        },
        hr: {
          marginTop: theme('spacing.6'),
          marginBottom: theme('spacing.6'),
          '@apply mt-fc mb-lc': {},
        },
        'figure, .figure': {
          marginTop: theme('spacing.6'),
          marginBottom: theme('spacing.6'),
          '@apply mt-fc mb-lc': {},
        },
        'figcaption, .figcaption': {
          marginTop: theme('spacing.3'),
          fontSize: rem(14),
          lineHeight: theme('lineHeight.snug'),
        },
      },
    },
    addons: {
      // groupNumber
      groupNumber: {
        '[data-xt-group-number]': {
          'input[type="number"]': {
            '-moz-appearance': 'textfield',
            '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
              '-webkit-appearance': 'none',
              appearance: 'none',
            },
          },
        },
      },
      // mouseFollow
      mousefollow: {
        '.mouse-follow': {
          pointerEvents: 'none',
          position: 'fixed',
          top: '0',
          left: '0',
          right: 'auto',
          bottom: 'auto',
        },
      },
      // ripple
      ripple: {
        '.ripple-container': {
          // setup
          overflow: 'hidden',
          pointerEvents: 'none',
          borderRadius: 'inherit',
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          // styles
          opacity: '.075',
        },
        '.ripple': {
          // styles
          position: 'absolute',
          borderRadius: '50%',
          background: theme('colors.black'),
        },
      },
      // separator
      separator: {
        '.separator': {
          // setup
          display: 'inline-block',
          position: 'relative',
          fontSize: '1em',
          verticalAlign: 'baseline',
        },
        '.separator-dash': {
          // styles
          '&:after': {
            content: '"-"',
          },
        },
        '.separator-slash': {
          // styles
          '&:after': {
            content: '"/"',
          },
        },
        '.separator-pipe': {
          // styles
          '&:after': {
            content: '"|"',
          },
        },
        '.separator-point': {
          // styles
          '&:after': {
            content: '"•"',
          },
        },
        '.separator-arrow': {
          // styles
          '&:after': {
            content: '">"',
          },
        },
      },
      // sliderNavigationSides
      sliderNavigationSides: {
        '.slider-navigation-sides': {
          // setup
          cursor: 'none',
          position: 'absolute',
          zIndex: theme('zIndex.top'),
          top: '0',
          height: '100%',
          '.slider.xt-disabled &': {
            display: 'none',
          },
          // styles
          width: '6rem',
          // animation
          '.slider-navigation-sides-btn > *': {
            transitionProperty: 'opacity, transform',
            transitionDuration: theme('transitionDuration.200'),
            transitionTimingFunction: theme('transitionTimingFunction.ease.out'),
          },
          '&:active': {
            '.slider-navigation-sides-btn > *': {
              opacity: '.75',
              transform: 'scale(0.8)',
              transitionTimingFunction: theme('transitionTimingFunction.ease.in'),
            },
          },
        },
        '.slider-navigation-sides-btn': {
          // setup
          padding: '0',
          lineHeight: '0',
          // animation
          opacity: '0',
          transitionProperty: 'opacity',
          transitionDuration: theme('transitionDuration.200'),
          transitionTimingFunction: theme('transitionTimingFunction.ease.out'),
          '&.in': {
            opacity: '1',
            transitionTimingFunction: theme('transitionTimingFunction.ease.in'),
          },
        },
        '@media (hover: none)': {
          '.slider-navigation-sides': {
            // styles
            width: '3rem',
          },
          '.slider-navigation-sides-btn': {
            // styles
            '@apply transform-none !important': '',
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: '-0.7rem',
            marginLeft: '-0.7rem',
            opacity: '1',
          },
        },
      },
    },
  },
})
