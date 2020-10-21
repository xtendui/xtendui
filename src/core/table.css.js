const round = num =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = px => `${round(px / 16)}rem`

module.exports = {
  component: theme => ({
    '.table': {
      // setup
      borderCollapse: 'separate',
      borderSpacing: '0',
      width: '100%',
    },
    '.table-scroll': {
      // setup
      '@apply overflow-sub': '',
      overflowX: 'scroll',
      overflowY: 'hidden',
    },
    '.table, .table-scroll': {
      // setup
      width: '100%',
      // styles
      marginBottom: theme('spacing.4'),
      '@apply mb-lc': {},
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
      borderRightWidth: theme('borderWidth.default'),
      borderBottomWidth: theme('borderWidth.default'),
      borderColor: theme('borderColor.gray.200'),
      '&:last-child': {
        borderRight: '0',
      },
    },
    tbody: {
      // styles
      tr: {
        '&:last-child': {
          'th, td': {
            borderBottom: '0',
          },
        },
      },
    },
  }),
}
