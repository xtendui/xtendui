const plugin = require('tailwindcss/plugin')
const merge = require('lodash/merge')
const castArray = require('lodash/castArray')
const base = require('./tailwind-xtend.js')

module.exports = plugin.withOptions(() => {
  return function ({ addComponents, addUtilities, addVariant, e, theme }) {
    const custom = theme(`xtend`, {})

    /**
     * core components
     */

    const componentsCoreBase = base(theme).components.core || {}
    const componentsCoreCustom = custom.components ? custom.components.core || {} : {}
    for (const component of Object.keys(componentsCoreBase)) {
      if (componentsCoreCustom[component] !== false) {
        const css = merge(...castArray(componentsCoreBase[component] || {}), componentsCoreCustom[component] || {})
        addComponents(css)
      }
    }

    /**
     * addons components
     */

    const componentsAddonsBase = base(theme).components.addons || {}
    const componentsAddonsCustom = custom.components ? custom.components.addons || {} : {}
    for (const addon of Object.keys(componentsAddonsBase)) {
      if (componentsAddonsCustom[addon] !== false) {
        const css = merge(...castArray(componentsAddonsBase[addon] || {}), componentsAddonsCustom[addon] || {})
        addComponents(css)
      }
    }

    /**
     * core utilities
     */

    const utilitiesCoreBase = base(theme).utilities.core || {}
    const utilitiesCoreCustom = custom.utilities ? custom.utilities.core || {} : {}
    for (const component of Object.keys(utilitiesCoreBase)) {
      if (utilitiesCoreCustom[component] !== false) {
        const options = merge(...castArray(utilitiesCoreBase[component] || {}), utilitiesCoreCustom[component] || {})
        const utilities = Object.keys(options)
        for (const utility of utilities) {
          if (utilitiesCoreCustom[utility] !== false) {
            if (component === 'list' && utility === 'space') {
              let css = {}
              Object.keys(options[utility]).forEach(name => {
                let value = options[utility][name]
                css[`.list-${e(name)}`] = {
                  margin: `-${value}`,
                  '> *': {
                    margin: `${value}`,
                  },
                }
                css[`.list-x-${e(name)}`] = {
                  marginLeft: `-${value}`,
                  marginRight: `-${value}`,
                  '> *': {
                    marginLeft: `${value}`,
                    marginRight: `${value}`,
                  },
                }
                css[`.list-y-${e(name)}`] = {
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
                css[`.row-${e(name)}`] = {
                  margin: `-${value}`,
                  '> *': {
                    padding: `${value}`,
                  },
                }
                css[`.row-x-${e(name)}`] = {
                  marginLeft: `-${value}`,
                  marginRight: `-${value}`,
                  '> *': {
                    paddingLeft: `${value}`,
                    paddingRight: `${value}`,
                  },
                }
                css[`.row-y-${e(name)}`] = {
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
              css[utility] = options[utility]
              const variants = ['responsive']
              if (['.text-default', '.text-inverse'].includes(utility)) {
                variants.push('hover', 'active')
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
