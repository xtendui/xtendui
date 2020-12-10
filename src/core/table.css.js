const round = num =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = px => `${round(px / 16)}rem`

module.exports = {
  component: theme => ({
    'table, .table': {
      // setup
      borderCollapse: 'collapse',
      borderSpacing: '0',
    },
    '.table-overflow': {
      // setup
      '@apply overflow-sub': '',
      overflowX: 'scroll',
      overflowY: 'hidden',
    },
    'table, .table, .table-overflow': {
      // setup
      width: '100%',
      // styles
      marginTop: theme('spacing.4'),
      marginBottom: theme('spacing.4'),
      '@apply mt-fc mb-lc': {},
    },
    th: {
      // styles
      verticalAlign: 'top',
      padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
      fontFamily: theme('fontFamily.sans').toString(),
      fontWeight: theme('fontWeight.semibold'),
      fontSize: rem(11),
      lineHeight: theme('lineHeight.snug'),
      letterSpacing: theme('letterSpacing.wider'),
      textTransform: 'uppercase',
      textAlign: 'left',
    },
    td: {
      // styles
      verticalAlign: 'top',
      padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
      fontSize: rem(13),
      lineHeight: theme('lineHeight.snug'),
      textAlign: 'left',
    },
    'th, td': {
      // styles
      borderWidth: theme('borderWidth.DEFAULT'),
      borderColor: theme('borderColor.gray.300'),
    },
  }),
}
