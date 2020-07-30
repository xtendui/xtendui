const plugin = require('tailwindcss/plugin')
const merge = require('lodash/merge')
const castArray = require('lodash/castArray')
const base = require('./tailwind-css.js')

module.exports = plugin.withOptions(() => {
  return function ({ addComponents, addUtilities, theme }) {
    const xtend = theme(`xtend`, {})

    /**
     * styles
     */

    const cssBase = base(theme).components || {}
    const cssCustom = xtend.components || {}
    for (const component of Object.keys(cssBase)) {
      if (cssCustom[component] !== false) {
        const style = merge(...castArray(cssBase[component] || {}), cssCustom[component] || {})
        addComponents(style)
      }
    }

    /**
     * utilities
     */

    const utilitiesBase = base(theme).utilities || {}
    const utilitiesCustom = xtend.utilities || {}
    for (const component of Object.keys(utilitiesBase)) {
      if (utilitiesCustom[component] !== false) {
        const options = merge(...castArray(utilitiesBase[component] || {}), utilitiesCustom[component] || {})
        const utilities = Object.keys(options)
        for (const utility of utilities) {
          if (utilitiesCustom[utility] !== false) {
            if (component === 'list' && utility === 'space') {
              let css = {}
              Object.keys(options[utility]).forEach(name => {
                let value = options[utility][name]
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
            } else if (component === 'row' && utility === 'space') {
              let css = {}
              Object.keys(options[utility]).forEach(name => {
                let value = options[utility][name]
                css[`.row-space-${name}`] = {
                  margin: `-${value}`,
                  '> *': {
                    padding: `${value}`,
                  },
                }
                css[`.row-space-x-${name}`] = {
                  marginLeft: `-${value}`,
                  marginRight: `-${value}`,
                  '> *': {
                    paddingLeft: `${value}`,
                    paddingRight: `${value}`,
                  },
                }
                css[`.row-space-y-${name}`] = {
                  marginTop: `-${value}`,
                  marginBottom: `-${value}`,
                  '> *': {
                    paddingTop: `${value}`,
                    paddingBottom: `${value}`,
                  },
                }
              })
              addUtilities(css, ['responsive'])
            } else {
              let css = {}
              let value = options[utility]
              css[utility] = value
              addUtilities(css, ['responsive'])
            }
          }
        }
      }
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
