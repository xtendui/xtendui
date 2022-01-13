const plugin = require('tailwindcss/plugin')
const merge = require('lodash.merge')
const castArray = require('lodash.castArray')

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
              const css = {}
              Object.keys(options[utility]).forEach(name => {
                const value = options[utility][name]
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
              const css = {}
              Object.keys(options[utility]).forEach(name => {
                const value = options[utility][name]
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
              const css = {}
              Object.keys(options[utility]).forEach(name => {
                const value = options[utility][name]
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
            } else if (component === 'global' && utility === '.xt-container-y') {
              const css = {}
              Object.keys(options[utility]).forEach(name => {
                const value = options[utility][name]
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
            } else if (component === 'global' && utility === '.xt-container-remove') {
              const css = {}
              Object.keys(options[utility]).forEach(name => {
                const value = options[utility][name]
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
            } else if (component === 'global' && utility === '.xt-container-y-remove') {
              const css = {}
              Object.keys(options[utility]).forEach(name => {
                const value = options[utility][name]
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
              const css = {}
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

    addVariant('group-dir-before', '.group.dir-before &')
    addVariant('group-dir-after', '.group.dir-after &')
    addVariant('group-off-before', '.group.dir-before:not(.on):not(.in):not(.out) &')
    addVariant('group-off-after', '.group.dir-after:not(.on):not(.in):not(.out) &')
    addVariant('group-on-before', '.group.on.dir-before &')
    addVariant('group-on-after', '.group.on.dir-after &')
    addVariant('group-in-before', '.group.in.dir-before &')
    addVariant('group-in-after', '.group.in.dir-after &')
    addVariant('group-out-before', '.group.out.dir-before &')
    addVariant('group-out-after', '.group.out.dir-after &')
    addVariant('group-done-before', '.group.done.dir-before &')
    addVariant('group-done-after', '.group.done.dir-after &')
    addVariant('group-off', '.group:not(.on):not(.in):not(.out) &')
    addVariant('group-on', '.group.on &')
    addVariant('group-in', '.group.in &')
    addVariant('group-out', '.group.out &')
    addVariant('group-done', '.group.done &')
    addVariant('group-active', '.group:active &')
    addVariant('dir-before', '&.dir-before')
    addVariant('dir-after', '&.dir-after')
    addVariant('off', '&:not(.on):not(.in):not(.out)')
    addVariant('on', '&.on')
    addVariant('in', '&.in')
    addVariant('out', '&.out')
    addVariant('done', '&.done')
    addVariant('valid-submit', '&.valid-submit')
    addVariant('invalid-submit', '&.invalid-submit')
  }
})
