module.exports = {
  variants: ['responsive'],
  utility: {
    '.xt-card-group': {
      display: 'flex',
      alignItems: 'inherit',
    },
  },
  component: {
    '.xt-card': {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      justifyContent: 'flex-start',
      flex: '1 1 auto',
      width: '100%',
    },
  },
}
