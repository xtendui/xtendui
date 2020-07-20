module.exports = function () {
  return function ({ addComponents, config }) {
    addComponents({
      '.btn': {
        cursor: 'pointer',
        display: 'inline-flex',
        verticalAlign: 'middle',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: config('theme.zIndex.base'),
        '&:hover, &.hover, &:active, &.active': {
          zIndex: config('theme.zIndex.active'),
        },
        '&.out': {
          zIndex: config('theme.zIndex.out'),
        },
        position: 'relative',
        borderRadius: '6px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'transparent',
        fontFamily: config('theme.fontFamily.sans'),
        fontWeight: config('theme.fontWeight.semibold'),
        lineHeight: config('theme.lineHeight.tight'),
        letterSpacing: '.025em',
        textTransform: 'uppercase',
      },
      '.btn-primary': {
        backgroundColor: config('theme.colors.accent'),
        color: config('theme.colors.white'),
      },
    })
  }
}
