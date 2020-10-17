const round = num =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = px => `${round(px / 16)}rem`

module.exports = {
  components: theme => ({
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
    },
  }),
}
