module.exports = {
  utilities: theme => ({
    // list
    listSpace: {
      ...theme('spacing')
    },
  }),
  css: theme => ({
    // btn
    button: {
      '&:focus': {
        outline: 'none'
      },
    },
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
      borderRadius: theme('borderRadius.md'),
      borderWidth: theme('borderWidth.px'),
      borderColor: theme('colors.transparent'),
      fontWeight: theme('fontWeight.semibold'),
      lineHeight: theme('lineHeight.tight'),
      letterSpacing: theme('letterSpacing.wider'),
      textTransform: 'uppercase',
      // size
      padding: '.7em 1.2em',
      fontSize: '0.8rem',
      // animation
      transitionProperty: theme('transitionProperty.all'),
      transitionDuration: theme('transitionDuration.500'),
      transitionTimingFunction: theme('transitionTimingFunction.out'),
      '&:hover, &.hover': {
        transitionTimingFunction: theme('transitionTimingFunction.in'),
      },
      '&:active, &.active': {
        transitionTimingFunction: theme('transitionTimingFunction.in'),
      },
    },
    '.btn-default': {
      // variant
      borderColor: theme('colors.gray.300'),
      backgroundColor: theme('colors.gray.300'),
      color: theme('textColor.black'),
      '&:hover, &.hover': {
        borderColor: theme('colors.gray.400'),
        backgroundColor: theme('colors.gray.300'),
      },
      '&:active, &.active': {
        borderColor: theme('colors.gray.400'),
        backgroundColor: theme('colors.gray.400'),
      },
    },
    '.btn-primary': {
      // variant
      borderColor: theme('colors.accent.500'),
      backgroundColor: theme('colors.accent.500'),
      color: theme('textColor.white'),
      '&:hover, &.hover': {
        borderColor: theme('colors.accent.600'),
        backgroundColor: theme('colors.accent.500'),
      },
      '&:active, &.active': {
        borderColor: theme('colors.accent.600'),
        backgroundColor: theme('colors.accent.600'),
      },
    },
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
  }),
}
