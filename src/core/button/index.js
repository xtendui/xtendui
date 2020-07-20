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
      '.btn-blue': {
        backgroundColor: '#3490dc',
        color: '#fff',
        '&:hover': {
          backgroundColor: '#2779bd',
        },
      },
      '.btn-red': {
        backgroundColor: '#e3342f',
        color: '#fff',
        '&:hover': {
          backgroundColor: '#cc1f1a',
        },
      },
    })
  }
}
