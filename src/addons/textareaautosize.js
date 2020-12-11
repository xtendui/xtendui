import { Xt } from '../xt.js'
import JSON5 from 'json5'

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
    // set self
    Xt.set(self.componentName, self.object, self)
    // init
    self.init()
  }

  //
  // init
  //

  /**
   * init
   */
  init() {
    const self = this
    // options
    self.options = Xt.merge([self.constructor.optionsDefault, self.optionsCustom])
    // key
    self.object.addEventListener('keydown', self.keychange.bind(self))
    self.object.addEventListener('keyup', self.keychange.bind(self))
    // form
    self.form = self.object.closest('form')
    if (self.form) {
      self.form.addEventListener('reset', self.keychange.bind(self))
    }
    // initial
    self.keychange.bind(self)()
    // initialized class
    self.object.classList.add(self.componentName)
    // listener dispatch
    requestAnimationFrame(() => {
      self.object.dispatchEvent(new CustomEvent(`init.${self.componentNs}`))
    })
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
   * destroy
   */
  destroy() {
    const self = this
    // remove events
    if (self.form) {
      self.form.removeEventListener('reset', self.keychange.bind(self))
    }
    self.object.removeEventListener('keydown', self.keychange.bind(self))
    self.object.removeEventListener('keyup', self.keychange.bind(self))
    // initialized class
    self.object.classList.remove(self.componentName)
    // set self
    Xt.remove(self.componentName, self.object)
    // listener dispatch
    self.object.dispatchEvent(new CustomEvent(`destroy.${self.componentNs}`))
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

Xt.mount.push({
  matches: `[data-${Xt.Textareaautosize.componentName}]`,
  mount: object => {
    // vars

    const optionsMarkup = object.getAttribute(`data-${Xt.Textareaautosize.componentName}`)
    const options = optionsMarkup ? JSON5.parse(optionsMarkup) : {}

    // init

    let self = new Xt.Textareaautosize(object, options)

    // unmount

    return () => {
      self.destroy()
      self = null
    }
  },
})
