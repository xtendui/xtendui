const plugin = require('tailwindcss/plugin')
const merge = require('lodash/merge')
const castArray = require('lodash/castArray')

module.exports = plugin.withOptions(() => {
  return function ({ addComponents, addVariant, e, theme }) {
    const componentsBase = require('./tailwind.components.js') || {}
    const componentsCustom = theme(`xtendui`, {}) || {}

    /**
     * components
     */

    for (const component of Object.keys(componentsBase)) {
      const componentBase = componentsBase[component] || {}
      const componentCustom = componentsCustom[component] || {}
      if (componentCustom !== false && componentCustom.component !== false) {
        const base =
          typeof componentBase.component === 'function' ? componentBase.component(theme) : componentBase.component
        const custom =
          typeof componentCustom.component === 'function' ? componentCustom.component(theme) : componentCustom.component
        const css = merge(...castArray(base || {}), custom || {})
        addComponents(css, {
          respectPrefix: false,
        })
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
        const custom =
          typeof componentCustom.utility === 'function' ? componentCustom.utility(theme) : componentCustom.utility
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
                css[`.${e(`xt-list-${name}`)}`] = {
                  marginTop: `-${value}`,
                  marginLeft: `-${value}`,
                  '> *': {
                    marginTop: `${value}`,
                    marginLeft: `${value}`,
                  },
                }
                css[`.${e(`xt-list-x-${name}`)}`] = {
                  marginLeft: `-${value}`,
                  '> *': {
                    marginLeft: `${value}`,
                  },
                }
                css[`.${e(`xt-list-y-${name}`)}`] = {
                  marginTop: `-${value}`,
                  '> *': {
                    marginTop: `${value}`,
                  },
                }
              })
              addComponents(css, {
                variants: variants,
                respectPrefix: false,
              })
            } else if (component === 'row' && utility === 'space') {
              // row space
              let css = {}
              Object.keys(options[utility]).forEach(name => {
                let value = options[utility][name]
                css[`.${e(`xt-row-${name}`)}`] = {
                  marginTop: `-${value}`,
                  marginLeft: `-${value}`,
                  '> *': {
                    paddingTop: `${value}`,
                    paddingLeft: `${value}`,
                  },
                }
                css[`.${e(`xt-row-x-${name}`)}`] = {
                  marginLeft: `-${value}`,
                  '> *': {
                    paddingLeft: `${value}`,
                  },
                }
                css[`.${e(`xt-row-y-${name}`)}`] = {
                  marginTop: `-${value}`,
                  '> *': {
                    paddingTop: `${value}`,
                  },
                }
              })
              addComponents(css, {
                variants: variants,
                respectPrefix: false,
              })
            } else if (component === 'overlay' && utility === '.xt-overlay-container') {
              let css = {}
              Object.keys(options[utility]).forEach(name => {
                let value = options[utility][name]
                if (name === 'DEFAULT') {
                  css[utility] = {
                    padding: value,
                  }
                } else {
                  css[utility] = {
                    ...css[utility],
                    [`@screen ${name}`]: {
                      padding: value,
                    },
                  }
                }
              })
              addComponents(css, {
                respectPrefix: false,
              })
            } else if (component === 'layout' && utility === '.xt-container-y') {
              let css = {}
              Object.keys(options[utility]).forEach(name => {
                let value = options[utility][name]
                if (name === 'DEFAULT') {
                  css[utility] = {
                    paddingTop: value,
                    paddingBottom: value,
                  }
                } else {
                  css[utility] = {
                    ...css[utility],
                    [`@screen ${name}`]: {
                      paddingTop: value,
                      paddingBottom: value,
                    },
                  }
                }
              })
              addComponents(css, {
                variants: variants,
                respectPrefix: false,
              })
            } else if (component === 'layout' && utility === '.xt-container-remove') {
              let css = {}
              Object.keys(options[utility]).forEach(name => {
                let value = options[utility][name]
                if (name === 'DEFAULT') {
                  css[utility] = {
                    marginLeft: `-${value}`,
                    marginRight: `-${value}`,
                  }
                } else {
                  css[utility] = {
                    ...css[utility],
                    [`@screen ${name}`]: {
                      marginLeft: `-${value}`,
                      marginRight: `-${value}`,
                    },
                  }
                }
              })
              addComponents(css, {
                variants: variants,
                respectPrefix: false,
              })
            } else if (component === 'layout' && utility === '.xt-container-y-remove') {
              let css = {}
              Object.keys(options[utility]).forEach(name => {
                let value = options[utility][name]
                if (name === 'DEFAULT') {
                  css[utility] = {
                    marginTop: `-${value}`,
                    marginBottom: `-${value}`,
                  }
                } else {
                  css[utility] = {
                    ...css[utility],
                    [`@screen ${name}`]: {
                      marginTop: `-${value}`,
                      marginBottom: `-${value}`,
                    },
                  }
                }
              })
              addComponents(css, {
                variants: variants,
                respectPrefix: false,
              })
            } else {
              // all others
              let css = {}
              css[utility] = options[utility]
              addComponents(css, {
                variants: variants,
                respectPrefix: false,
              })
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

    addVariant('on', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.${e(`on${separator}${className}`)}.on`
      })
    })

    addVariant('group-on', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.group.on .${e(`group-on${separator}${className}`)}`
      })
    })

    addVariant('in', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.${e(`in${separator}${className}`)}.in`
      })
    })

    addVariant('group-in', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.group.in .${e(`group-in${separator}${className}`)}`
      })
    })

    addVariant('out', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.${e(`out${separator}${className}`)}.out`
      })
    })

    addVariant('group-out', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.group.out .${e(`group-out${separator}${className}`)}`
      })
    })
  }
})
