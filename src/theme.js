var merge = require('lodash.merge')

module.exports = function (fork = {}) {
  // override theme waiting for https://github.com/tailwindlabs/tailwindcss/issues/677
  const base = {
    extend: {
      // colors
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
      // utils
      zIndex: {
        base: '0',
        active: '2',
        out: '1',
      },
      // button
      btn: theme => ({
        custom: {
          // font
          fontFamily: theme('fontFamily.sans').join(', '),
          borderRadius: theme('borderRadius.default'),
          borderWidth: theme('borderWidth.default'),
          fontWeight: theme('fontWeight.semibold'),
          lineHeight: theme('lineHeight.tight'),
          letterSpacing: theme('letterSpacing.wide'),
          textTransform: 'uppercase',
          // animation
          transitionProperty: 'all',
          transitionDuration: '500ms',
          transitionTimingFunction: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
          '&:hover, &.hover': {
            transitionTimingFunction: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
          },
          '&:active, &.active': {
            transitionTimingFunction: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
          },
        },
      }),
    },
  }
  return merge(base, fork)
}
