module.exports = {
  component: {
    '.separator': {
      display: 'inline-block',
      position: 'relative',
      fontSize: '1em',
      verticalAlign: 'baseline',
    },
    '.separator-dash': {
      '&:after': {
        content: '"-"',
      },
    },
    '.separator-slash': {
      '&:after': {
        content: '"/"',
      },
    },
    '.separator-pipe': {
      '&:after': {
        content: '"|"',
      },
    },
    '.separator-point': {
      '&:after': {
        content: '"•"',
      },
    },
    '.separator-arrow': {
      '&:after': {
        content: '">"',
      },
    },
  },
}
