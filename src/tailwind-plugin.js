const plugin = require('tailwindcss/plugin')
const merge = require('lodash/merge')
const castArray = require('lodash/castArray')
const base = require('./tailwind-xtend.js')

module.exports = plugin.withOptions(() => {
  return function ({ addComponents, addUtilities, addVariant, e, theme }) {
    const custom = theme(`xtend`, {})

    /**
     * components
     */

    const cssBase = base(theme).components || {}
    const cssCustom = custom.components || {}
    for (const component of Object.keys(cssBase)) {
      if (cssCustom[component] !== false) {
        const css = merge(...castArray(cssBase[component] || {}), cssCustom[component] || {})
        addComponents(css)
      }
    }
    /**
     * utilities
     */

    const utilitiesBase = base(theme).utilities || {}
    const utilitiesCustom = custom.utilities || {}
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
                css[`.list-space-${e(name)}`] = {
                  margin: `-${value}`,
                  '> *': {
                    margin: `${value}`,
                  },
                }
                css[`.list-space-x-${e(name)}`] = {
                  marginLeft: `-${value}`,
                  marginRight: `-${value}`,
                  '> *': {
                    marginLeft: `${value}`,
                    marginRight: `${value}`,
                  },
                }
                css[`.list-space-y-${e(name)}`] = {
                  marginTop: `-${value}`,
                  marginBottom: `-${value}`,
                  '> *': {
                    marginTop: `${value}`,
                    marginBottom: `${value}`,
                  },
                }
              })
              const variants = ['responsive']
              addUtilities(css, variants)
            } else if (component === 'row' && utility === 'space') {
              let css = {}
              Object.keys(options[utility]).forEach(name => {
                let value = options[utility][name]
                css[`.row-space-${e(name)}`] = {
                  margin: `-${value}`,
                  '> *': {
                    padding: `${value}`,
                  },
                }
                css[`.row-space-x-${e(name)}`] = {
                  marginLeft: `-${value}`,
                  marginRight: `-${value}`,
                  '> *': {
                    paddingLeft: `${value}`,
                    paddingRight: `${value}`,
                  },
                }
                css[`.row-space-y-${e(name)}`] = {
                  marginTop: `-${value}`,
                  marginBottom: `-${value}`,
                  '> *': {
                    paddingTop: `${value}`,
                    paddingBottom: `${value}`,
                  },
                }
              })
              const variants = ['responsive']
              addUtilities(css, variants)
            } else {
              let css = {}
              let value = options[utility]
              css[utility] = value
              const variants = ['responsive']
              const hoverUtils = ['.text-default', '.text-inverse']
              if (hoverUtils.includes(utility)) {
                variants.push('hover')
              }
              addUtilities(css, variants)
            }
          }
        }
      }
    }

    /**
     * variant
     */
    addVariant('active', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.${e(`active${separator}${className}`)}:active,.${e(`active${separator}${className}`)}.active`
      })
    })
  }
})
