module.exports = {
  variant: ['responsive'],
  utility: {
    space: {
      // styles
      px: '1px',
      0: '0',
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
    },
  },
  component: {
    '.list': {
      // setup
      display: 'inline-flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      alignItems: 'flex-start',
      '&:empty': {
        display: 'none',
      },
    },
  },
}
