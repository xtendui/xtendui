/*!
 * Xtend (https://xtendui.com/)
 * @copyright (c) 2017 - 2021 Riccardo Caroli
 * @license Apache-2.0 (https://github.com/minimit/xtendui/blob/beta/LICENSE)
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
    self.object = object
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
    // set self
    Xt.set(self.componentName, self.object, self)
    // namespace
    const uniqueId = Xt.dataStorage.get(self.object, 'xtUniqueId')
    Xt.dataStorage.set(self.object, 'xtUniqueId', uniqueId || Xt.getuniqueId())
    self.ns = `${self.componentName}-${Xt.dataStorage.get(self.object, 'xtUniqueId')}`
    // vars
    self.initial = true
    // key
    const changeHandler = Xt.dataStorage.put(self.object, `keydown keyup reset/${self.ns}`, self.keychange.bind(self))
    self.object.addEventListener('keydown', changeHandler)
    self.object.addEventListener('keyup', changeHandler)
    self.form = self.object.closest('form')
    if (self.form) {
      self.form.addEventListener('reset', changeHandler)
    }
    // initial
    self.initStart()
    // keep the same level of raf for custom listener
    requestAnimationFrame(() => {
      // listener dispatch
      self.object.dispatchEvent(new CustomEvent(`init.${self.componentNs}`))
      self.initial = false
    })
    // initialized class
    self.object.setAttribute(`data-${self.componentName}-init`, '')
  }

  /**
   * init start
   * @param {Boolean} saveCurrents
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
    self.object.style.height = '5px'
    self.object.style.height = `${self.object.scrollHeight}px` // fixes both safari RAF and form reset
    requestAnimationFrame(() => {
      self.object.style.height = '5px' // fixes both safari RAF and form reset
      self.object.style.height = `${self.object.scrollHeight}px`
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
    self.object.style.height = ''
    // remove events
    const changeHandler = Xt.dataStorage.get(self.object, `keydown keyup reset/${self.ns}`)
    self.object.removeEventListener('keydown', changeHandler)
    self.object.removeEventListener('keyup', changeHandler)
    if (self.form) {
      self.form.removeEventListener('reset', changeHandler)
    }
    // initialized class
    self.object.removeAttribute(`data-${self.componentName}-init`)
    // set self
    Xt.remove(self.componentName, self.object)
    // keep the same level of raf for custom listener
    requestAnimationFrame(() => {
      // listener dispatch
      self.object.dispatchEvent(new CustomEvent(`destroy.${self.componentNs}`))
    })
  }

  //
}

//
// options
//

Textareaautosize.componentName = 'xt-textareaautosize'
Textareaautosize.optionsDefault = {}

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
