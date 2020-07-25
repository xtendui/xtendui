const plugin = require('tailwindcss/plugin')
const merge = require('lodash/merge')
const castArray = require('lodash/castArray')

module.exports = plugin.withOptions(() => {
  return function ({ addComponents, addUtilities, theme }) {

    /**
     * btn
     */
    // components
    let component = 'btn'
    let config = theme(`xtendConfig.${component}`, {})
    let custom = theme(`xtend.${component}`, {})
    if (custom !== false) {
      const styles = merge(...castArray(config), custom)
      addComponents(styles)
    }

    /**
     * list
     */
    component = 'list'
    config = theme(`xtendConfig.${component}`, {})
    custom = theme(`xtend.${component}`, {})
    if (custom !== false) {
      // components
      const styles = merge(...castArray(config), custom)
      addComponents(styles)
      // utilities
      let css = {}
      let spacing = theme(`${component}.spacing`)
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
  }
})
