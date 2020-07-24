// https://tailwindcss.com/docs/plugins/#css-in-js-syntax

module.exports = function () {
  return function ({ addComponents, theme }) {
    //console.log(theme('fontFamily.sans'))
    addComponents({
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
        // custom
        fontFamily: theme('btn.fontFamily'),
        borderRadius: theme('btn.borderRadius'),
        borderWidth: theme('btn.borderWidth'),
        fontWeight: theme('btn.fontWeight'),
        textTransform: theme('btn.textTransform'),
        lineHeight: theme('btn.lineHeight'),
        letterSpacing: theme('btn.letterSpacing'),
        // transition
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
    })
  }
}
