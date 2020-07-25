const plugin = require('tailwindcss/plugin')
const merge = require('lodash/merge')
const castArray = require('lodash/castArray')

module.exports = plugin.withOptions(({ component = 'btn' } = {}) => {
  return function ({ addComponents, theme }) {
    // styles
    const config = theme(`config.${component}`, {})
    const custom = theme(`custom.${component}`, {})
    console.log(config)
    const styles = merge(...castArray(config), custom)
    addComponents(styles)
  }
})
