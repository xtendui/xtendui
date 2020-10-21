module.exports = {
  utility: {
    '.icon-sm': {
      // styles
      width: '1em',
      height: '1em',
    },
    '.icon-md': {
      // styles
      width: '1.25em',
      height: '1.25em',
      // Size bigger than `1em` has negative margin
      margin: 'calc((1em - 1.25em) / 2)',
    },
    '.icon-lg': {
      // styles
      width: '1.5em',
      height: '1.5em',
      // Size bigger than `1em` has negative margin
      margin: 'calc((1em - 1.5em) / 2)',
    },
  },
  component: {
    '.icon': {
      // setup
      display: 'inline-block',
      stroke: 'currentColor',
      // styles
      '@apply icon-md': '',
    },
  },
}
