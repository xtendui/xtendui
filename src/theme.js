var merge = require('lodash.merge')

module.exports = function (custom = {}) {
  // override theme waiting for https://github.com/tailwindlabs/tailwindcss/issues/677
  const base = {
    extend: {
      // design
      colors: {
        // https://javisperez.github.io/tailwindcolorshades/#/?Azure%20Radiance=0078ff&tv=1
        accent: {
          100: '#E6F2FF',
          200: '#BFDDFF',
          300: '#99C9FF',
          400: '#4DA1FF',
          500: '#0078FF',
          600: '#006CE6',
          700: '#004899',
          800: '#003673',
          900: '#00244D',
        },
      },
      // interaction
      ease: {
        in: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
        out: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
      },
      zIndex: {
        base: '0',
        active: '2',
        out: '1',
      },
      // list
      list: theme => ({
        spacing: {
          ...theme('spacing')
        },
      }),
      // config
      config: theme => ({
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
            zIndex: theme('zIndex.base'),
            '&:hover, &.hover': {
              zIndex: theme('zIndex.active'),
            },
            '&.out': {
              zIndex: theme('zIndex.out'),
            },
            // typography
            fontFamily: theme('fontFamily.sans').join(', '),
            borderRadius: theme('borderRadius.default'),
            borderWidth: theme('borderWidth.default'),
            fontWeight: theme('fontWeight.semibold'),
            lineHeight: theme('lineHeight.tight'),
            letterSpacing: theme('letterSpacing.wider'),
            textTransform: 'uppercase',
            // size
            padding: '.625em 1.225em',
            fontSize: '.75rem',
            // animation
            transitionProperty: theme('transitionProperty.all'),
            transitionDuration: theme('transitionDuration.500'),
            transitionTimingFunction: theme('ease.out'),
            '&:hover, &.hover': {
              transitionTimingFunction: theme('ease.in'),
            },
            '&:active, &.active': {
              transitionTimingFunction: theme('ease.in'),
            },
          },
        },
        // list
        list: {
          // list
          '.list': {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            alignItems: 'flex-start',
            '&, > *': {
              '> a:not(.btn), > button:not(.btn)': {
              }
            }
          },
          // list-block
          '.list-block': {
            display: 'flex',
            flexWrap: 'nowrap',
            flexDirection: 'column',
            alignItems: 'flex-start',
          },
        },
      }),
    },
  }
  return merge(base, custom)
}
