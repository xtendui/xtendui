module.exports = {
  variants: ['responsive'],
  utility: {
    space: {
      px: '1px',
      0: '0px',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
    },
  },
  component: {
    '.row': {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      alignItems: 'flex-start',
      '> *': {
        // @FIX column flex shrink
        flex: '0 0 auto',
      },
      '&:empty': {
        display: 'none',
      },
    },
    '.row-stretch': {
      alignItems: 'stretch',
      '> *': {
        display: 'flex',
        alignItems: 'stretch',
        '> *': {
          minHeight: '100%',
        },
      },
    },
    '@media (hover: none)': {
      '.row-overflow': {
        '@apply overflow-sub': '',
        overflowX: 'auto',
        overflowY: 'hidden',
        flexWrap: 'nowrap',
        '> *': {
          flex: 'none',
        },
      },
    },
  },
}
