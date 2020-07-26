const plugin = require('tailwindcss/plugin')
const merge = require('lodash/merge')
const castArray = require('lodash/castArray')
const vars = require('./tailwind-vars.js')

module.exports = plugin.withOptions(() => {
  return function ({ addComponents, addUtilities, theme }) { theme(`xtend`, {})
    const xtend = theme(`xtend`, {})

    /**
     * styles
     */

    const styles = merge(...castArray(vars.css(theme) || {}), xtend.css || {})
    addComponents(styles)

    /**
     * utilities
     */

    const utilities = merge(...castArray(vars.utilities(theme) || {}), xtend.utilities || {})

    // list

    const listSpace = utilities.listSpace
    if (listSpace) {
      // utilities
      let css = {}
      Object.keys(listSpace).forEach(name => {
        let value = listSpace[name]
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

    /**
     * variant
     */
    /*
    addVariant('in', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.${e(`in${separator}${className}`)}.in`
      })
    })

    addVariant('out', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.${e(`out${separator}${className}`)}.out`
      })
    })

    variants: {
      backgroundColor: ['responsive', 'hover', 'active', 'focus', 'in', 'out'],
    }
    */
  }
})
