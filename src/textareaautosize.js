/*!
 * Xtend (https://xtendui.com/)
 * @copyright (c) 2017 - 2021 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/beta/LICENSE)
 */

import { Xt } from './xt'
import RJSON from 'relaxed-json'

/**
 * Textareaautosize
 */
class Textareaautosize {
  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} optionsCustom User options
   * @constructor
   */
  constructor(object, optionsCustom = {}) {
    const self = this
    self.container = object
    self.optionsCustom = optionsCustom
    self.componentName = self.constructor.componentName
    self.componentNs = self.componentName.replace('-', '.')
    // init
    self.initVars()
    self.initLogic()
  }

  //
  // init
  //

  /**
   * init vars
   */
  initVars() {
    const self = this
    // options
    self.optionsDefault = Xt.merge([self.constructor.optionsDefault, Xt.optionsGlobal[self.componentName]])
    self.optionsInitial = self.options = Xt.merge([self.optionsDefault, self.optionsCustom])
  }

  /**
   * init logic
   */
  initLogic() {
    const self = this
    const options = self.options
    // set self
    Xt.set({ name: self.componentName, el: self.container, self })
    // namespace
    const uniqueId = Xt.dataStorage.get(self.container, 'xtUniqueId')
    Xt.dataStorage.set(self.container, 'xtUniqueId', uniqueId || Xt.getuniqueId())
    self.ns = `${self.componentName}-${Xt.dataStorage.get(self.container, 'xtUniqueId')}`
    // vars
    self.initial = true
    // key
    const changeHandler = Xt.dataStorage.put(
      self.container,
      `keydown keyup reset/${self.ns}`,
      self.keychange.bind(self)
    )
    self.container.addEventListener('keydown', changeHandler)
    self.container.addEventListener('keyup', changeHandler)
    self.form = self.container.closest('form')
    if (self.form) {
      self.form.addEventListener('reset', changeHandler)
    }
    // initial
    self.initStart()
    // keep the same level of raf for custom listener
    requestAnimationFrame(() => {
      // listener dispatch
      self.container.dispatchEvent(new CustomEvent(`init.${self.componentNs}`))
      self.initial = false
      // debug
      if (options.debug) {
        // eslint-disable-next-line no-console
        console.log(`${self.componentName} init`, self)
      }
    })
    // initialized class
    self.container.setAttribute(`data-${self.componentName}-init`, '')
  }

  /**
   * init start
   */
  initStart() {
    const self = this
    // logic
    self.keychange.bind(self)()
  }

  //
  // methods
  //

  /**
   * keychange
   */
  keychange() {
    const self = this
    self.container.style.height = '5px'
    self.container.style.height = `${self.container.scrollHeight}px` // fixes both safari RAF and form reset
    requestAnimationFrame(() => {
      self.container.style.height = '5px' // fixes both safari RAF and form reset
      self.container.style.height = `${self.container.scrollHeight}px`
    })
  }

  //
  // util
  //

  /**
   * reinit
   */
  reinit() {
    const self = this
    // reinit
    self.initLogic()
  }

  /**
   * destroy
   */
  destroy() {
    const self = this
    // reset
    self.container.style.height = ''
    // remove events
    const changeHandler = Xt.dataStorage.get(self.container, `keydown keyup reset/${self.ns}`)
    self.container.removeEventListener('keydown', changeHandler)
    self.container.removeEventListener('keyup', changeHandler)
    if (self.form) {
      self.form.removeEventListener('reset', changeHandler)
    }
    // initialized class
    self.container.removeAttribute(`data-${self.componentName}-init`)
    // set self
    Xt.remove({ name: self.componentName, el: self.container })
    // keep the same level of raf for custom listener
    requestAnimationFrame(() => {
      // listener dispatch
      self.container.dispatchEvent(new CustomEvent(`destroy.${self.componentNs}`))
    })
  }

  //
}

//
// options
//

Textareaautosize.componentName = 'xt-textareaautosize'
Textareaautosize.optionsDefault = {
  debug: false,
}

//
// export
//

Xt.Textareaautosize = Textareaautosize

//
// observe
//

if (typeof window !== 'undefined') {
  Xt.mount({
    matches: `[data-${Xt.Textareaautosize.componentName}]`,
    mount: ({ ref }) => {
      // vars

      const optionsMarkup = ref.getAttribute(`data-${Xt.Textareaautosize.componentName}`)
      const options = optionsMarkup ? RJSON.parse(optionsMarkup) : {}

      // init

      let self = new Xt.Textareaautosize(ref, options)

      // unmount

      return () => {
        self.destroy()
        self = null
      }
    },
  })
}
