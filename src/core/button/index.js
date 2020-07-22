module.exports = function () {
  return function ({ addComponents, config }) {
    addComponents({
      '.btn': {
        cursor: 'pointer',
        display: 'inline-flex',
        position: 'relative',
        verticalAlign: 'middle',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: config('theme.zIndex.base'),
        '&:hover, &.hover': {
          zIndex: config('theme.zIndex.active'),
        },
        '&.out': {
          zIndex: config('theme.zIndex.out'),
        },
      },
    })
  }
}
