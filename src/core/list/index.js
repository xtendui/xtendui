const plugin = require('tailwindcss/plugin')
const merge = require('lodash/merge')
const castArray = require('lodash/castArray')

module.exports = plugin.withOptions(({ component = 'list' } = {}) => {
  return function ({ addComponents, addUtilities, theme }) {
    // styles
    const config = theme(`config.${component}`, {})
    const custom = theme(`custom.${component}`, {})
    const styles = merge(...castArray(config), custom)
    addComponents(styles)
    // utilities
    let css = {}
    let spacing = theme('list.spacing')
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
  }
})
