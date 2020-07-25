var merge = require('lodash.merge')

module.exports = function () {
  return function ({ addComponents, addUtilities, theme }) {
    // utilities
    let css = {}
    let spacing = merge(theme('listDefault.listSpacing'), theme('listCustom.listSpacing'))
    Object.keys(spacing).forEach(name => {
      let value = spacing[name]
      css[`.list-space-${name}`] = {
        margin: `-${value}`,
        '> *': {
          margin: `${value}`,
        },
      }
      css[`.list-space-x-${name}`] = {
        marginLeft: `-${value}`,
        marginRight: `-${value}`,
        '> *': {
          marginLeft: `${value}`,
          marginRight: `${value}`,
        },
      }
      css[`.list-space-y-${name}`] = {
        marginTop: `-${value}`,
        marginBottom: `-${value}`,
        '> *': {
          marginTop: `${value}`,
          marginBottom: `${value}`,
        },
      }
    })
    addUtilities(css, ['responsive'])
    // components
    addComponents({
      // list
      '.list': {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'flex-start',
        '&, > *': {
          '> a:not(.btn), > button:not(.btn)': {
          }
        }
      },
      // list-block
      '.list-block': {
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
      ...theme('listDefault'),
      ...theme('listCustom'),
    })
  }
}
