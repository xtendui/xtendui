const plugin = require('tailwindcss/plugin')
const _ = require('lodash')

module.exports = plugin.withOptions(() => {
  return function ({ addComponents, addVariant, matchVariant, e, theme }) {
    const componentsBase = require('./tailwind.components.js') || {}
    const componentsCustom = theme(`xtendui`, {}) || {}

    e =
      e ??
      function (x) {
        return x
      }

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
        const css = _.merge(..._.castArray(base || {}), custom || {})
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
        const variants = _.merge(componentBase.variants || [], componentCustom.variants || [])
        const options = _.merge(..._.castArray(base || {}), custom || {})
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

    const pseudoVariants = [
      ['off-before', '&.dir-before:not(.on):not(.in):not(.out)'],
      ['off-after', '&.dir-after:not(.on):not(.in):not(.out)'],
      ['on-before', '&.on.dir-before'],
      ['on-after', '&.on.dir-after'],
      ['in-before', '&.in.dir-before'],
      ['in-after', '&.in.dir-after'],
      ['out-before', '&.out.dir-before'],
      ['out-after', '&.out.dir-after'],
      ['done-before', '&.done.dir-before'],
      ['done-after', '&.done.dir-after'],
      ['dir-before', '&.dir-before'],
      ['dir-after', '&.dir-after'],
      ['off', '&:not(.on):not(.in):not(.out)'],
      ['on', '&.on'],
      ['in', '&.in'],
      ['out', '&.out'],
      ['done', '&.done'],
      ['valid-submit', '&.valid-submit'],
      ['invalid-submit', '&.invalid-submit'],
    ].map(variant => (Array.isArray(variant) ? variant : [variant, `&:${variant}`]))

    // group and peer variants
    // https://github.com/tailwindlabs/tailwindcss/discussions/9713#discussioncomment-4040990

    const variants = {
      group: (_, { modifier }) => (modifier ? [`:merge(.group\\/${modifier})`, ' &'] : [`:merge(.group)`, ' &']),
      peer: (_, { modifier }) => (modifier ? [`:merge(.peer\\/${modifier})`, ' ~ &'] : [`:merge(.peer)`, ' ~ &']),
    }

    for (const [name, fn] of Object.entries(variants)) {
      matchVariant(
        name,
        (value = '', extra) => {
          let result = value
          if (!result.includes('&')) result = `&${result}`

          const [a, b] = fn('', extra)
          return result.replace(/&(\S+)?/g, (_, pseudo = '') => a + pseudo + b)
        },
        { values: Object.fromEntries(pseudoVariants) },
      )
    }

    // simple variants

    for (const values of pseudoVariants) {
      addVariant(values[0], values[1])
    }

    // other variants

    addVariant('hover-none', '@media (hover: none), (pointer: coarse)')
    addVariant('hover-hover', '@media (hover: hover), not (pointer: coarse)')
  }
})
