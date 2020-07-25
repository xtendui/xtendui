module.exports = function () {
  return function ({ addComponents, theme }) {
    addComponents({
      // btn
      '.btn': {
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
        ...theme('btnDefault'),
        ...theme('btnCustom'),
      },
    })
  }
}
