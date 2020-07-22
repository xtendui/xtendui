module.exports = {
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
  // components
  btn: (theme) => ({
    fontFamily: theme('fontFamily.sans').join(', '),
    borderRadius: theme('borderRadius.lg'),
    borderWidth: theme('borderWidth.default'),
    fontWeight: theme('fontWeight.semibold'),
    lineHeight: theme('lineHeight.tight'),
    letterSpacing: theme('letterSpacing.wide'),
    textTransform: 'uppercase',
  }),
}
