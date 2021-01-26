module.exports = {
  variants: ['responsive'],
  utility: {
    '.icon': {
      // setup
      display: 'inline-block',
    },
    '.icon-sm': {
      // styles
      width: 'auto',
      height: '1em',
      margin: '0', // negative vertical margin
    },
    '.icon-md': {
      // styles
      width: 'auto',
      height: '1.2em',
      margin: 'calc((1em - 1.2em) / 2) 0', // negative vertical margin
    },
    '.icon-lg': {
      // styles
      width: 'auto',
      height: '1.4em',
      margin: 'calc((1em - 1.4em) / 2) 0', // negative vertical margin
    },
  },
}
