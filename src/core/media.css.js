module.exports = {
  variants: ['responsive'],
  utility: {
    '.ratio-25': {
      paddingBottom: '25%',
    },
    '.ratio-37\\.5': {
      paddingBottom: '37.5%',
    },
    '.ratio-56\\.2': {
      paddingBottom: '56.2%',
    },
    '.ratio-50': {
      paddingBottom: '50%',
    },
    '.ratio-75': {
      paddingBottom: '75%',
    },
    '.ratio-100': {
      paddingBottom: '100%',
    },
    '.ratio-125': {
      paddingBottom: '125%',
    },
    '.ratio-150': {
      paddingBottom: '150%',
    },
  },
  component: {
    '.media-container': {
      display: 'block',
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
    },
    '.media-inner': {
      position: 'absolute',
      top: '0',
      left: '0',
      bottom: '0',
      right: '0',
    },
    '.media': {
      width: '100%',
      height: '100%',
    },
  },
}
