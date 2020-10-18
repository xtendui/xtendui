module.exports = {
  component: {
    '.separator': {
      // setup
      display: 'inline-block',
      position: 'relative',
      fontSize: '1em',
      verticalAlign: 'baseline',
    },
    '.separator-dash': {
      // styles
      '&:after': {
        content: '"-"',
      },
    },
    '.separator-slash': {
      // styles
      '&:after': {
        content: '"/"',
      },
    },
    '.separator-pipe': {
      // styles
      '&:after': {
        content: '"|"',
      },
    },
    '.separator-point': {
      // styles
      '&:after': {
        content: '"•"',
      },
    },
    '.separator-arrow': {
      // styles
      '&:after': {
        content: '">"',
      },
    },
  },
}
