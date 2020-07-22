const Color = require('color')
//const alpha = (clr, val) => Color(clr).alpha(val).rgb().string()
//const lighen = (clr, val) => Color(clr).lighten(val).rgb().string()
const darken = (clr, val) => Color(clr).darken(val).rgb().string()

module.exports = {
  /*
  screens: {
    sm: '768px',
    md: '992px',
    lg: '1200px',
  },
  fontFamily: {
    sans: ['Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif'],
  },
  */
  extend: {
    colors: {
      accent: '#0078ff',
      'accent-dark': darken('#0078ff', 0.1),
    },
    zIndex: {
      base: '0',
      active: '2',
      out: '1',
    },
  },
}
