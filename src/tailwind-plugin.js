const plugin = require('tailwindcss/plugin')
const merge = require('lodash/merge')
const castArray = require('lodash/castArray')

module.exports = plugin.withOptions(() => {
  return function ({ addComponents, addVariant, e, theme }) {
    const componentsBase = require('./tailwind-xtend.js') || {}
    const componentsCustom = theme(`xtendui`, {}) || {}

    /**
     * components
     */

    for (const component of Object.keys(componentsBase)) {
      const componentBase = componentsBase[component] || {}
      const componentCustom = componentsCustom[component] || {}
      if (componentCustom !== false && componentCustom.component !== false) {
        const base = typeof componentBase.component === 'function' ? componentBase.component(theme) : componentBase.component
        const custom = typeof componentCustom.component === 'function' ? componentCustom.component(theme) : componentCustom.component
        const css = merge(...castArray(base || {}), custom || {})
        addComponents(css)
      }
    }

    /**
     * utilities
     */

    for (const component of Object.keys(componentsBase)) {
      const componentBase = componentsBase[component] || {}
      const componentCustom = componentsCustom[component] || {}
      if (componentCustom !== false && componentCustom.utility !== false) {
        const base = typeof componentBase.utility === 'function' ? componentBase.utility(theme) : componentBase.utility
        const custom = typeof componentCustom.utility === 'function' ? componentCustom.utility(theme) : componentCustom.utility
        const variants = merge(componentBase.variants || [], componentCustom.variants || [])
        const options = merge(...castArray(base || {}), custom || {})
        const utilities = Object.keys(options)
        for (const utility of utilities) {
          if (componentsCustom[utility] !== false) {
            if (component === 'list' && utility === 'space') {
              // list space
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
              addComponents(css, variants)
            } else if (component === 'row' && utility === 'space') {
              // row space
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
              addComponents(css, variants)
            } else {
              // all others
              let css = {}
              css[utility] = options[utility]
              addComponents(css, variants)
            }
          }
        }
      }
    }

    /**
     * variant
     */

    addVariant('group-active', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.group:active .${e(`group-active${separator}${className}`)}`
      })
    })

    addVariant('active', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.${e(`active${separator}${className}`)}:active,.${e(`active${separator}${className}`)}.active`
      })
    })
  }
})
