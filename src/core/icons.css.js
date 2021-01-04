module.exports = {
  component: {
    '.icon': {
      // setup
      display: 'inline-block',
      stroke: 'currentColor',
      // styles
      '@apply icon-md': '',
    },
    '.icon-sm': {
      // styles
      width: '1em',
      height: '1em',
      margin: '0px', // negative margin
    },
    '.icon-md': {
      // styles
      width: '1.25em',
      height: '1.25em',
      margin: 'calc((1em - 1.25em) / 2)', // negative margin
    },
    '.icon-lg': {
      // styles
      width: '1.5em',
      height: '1.5em',
      margin: 'calc((1em - 1.5em) / 2)', // negative margin
    },
  },
}
