/*!
 * Xtend UI (https://xtendui.com/)
 * @copyright (c) 2017 - 2021 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/master/LICENSE.txt)
 */

import { Xt } from './xt.mjs'

/**
 * Ripple
 */
class Ripple {
  /**
   * fields
   */
  _optionsCustom
  _optionsDefault
  _optionsInitial
  _componentNs
  componentName
  ns
  options
  initial
  disabled = false
  container
  inner
  targets
  size
  top
  left
  sizeFinal
  scaleFinal

  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} optionsCustom User options
   * @constructor
   */
  constructor(object, optionsCustom = {}) {
    const self = this
    self.container = object
    self._optionsCustom = optionsCustom
    self.componentName = self.constructor.componentName
    self._componentNs = self.componentName.replace('-', '.')
    // init
    self._initVars()
    self._initLogic()
  }

  //
  // init
  //

  /**
   * init vars
   */
  _initVars() {
    const self = this
    // options
    self._optionsDefault = Xt.merge([self.constructor.optionsDefault, Xt.options[self.componentName]])
    self._optionsInitial = self.options = Xt.merge([self._optionsDefault, self._optionsCustom])
  }

  /**
   * init logic
   */
  _initLogic() {
    const self = this
    const options = self.options
    // set self
    Xt._set({ name: self.componentName, el: self.container, self })
    // namespace
    self.ns = self.ns ?? Xt.uniqueId()
    // enable first for proper initial activation
    self.enable()
    // matches
    Xt._initMatches({ self, optionsInitial: self._optionsInitial })
    // vars
    self.initial = true
    // inner
    if (!self.inner) {
      self.container.append(Xt.node({ str: '<div class="xt-ripple-inner"></div>' }))
      self.inner = self.container.querySelector(':scope > .xt-ripple-inner')
    }
    // on
    const onHandler = Xt.dataStorage.put(self.container, `mousedown touchstart/${self.ns}`, self._eventStart.bind(self))
    self.container.addEventListener('mousedown', onHandler)
    self.container.addEventListener('touchstart', onHandler, { passive: true })
    // init
    // needs frameDouble after ondone
    Xt.frameDouble({
      el: self.container,
      ns: `${self.ns}Init`,
      func: () => {
        // initialized class
        self.container.setAttribute(`data-${self.componentName}-init`, '')
        // dispatch event
        self.container.dispatchEvent(new CustomEvent(`init.${self._componentNs}`))
        self.initial = false
        // debug
        if (options.debug) {
          // eslint-disable-next-line no-console
          console.debug(`${self.componentName} init`, self)
        }
      },
    })
    // disable last for proper options.disableDeactivate
    if (self.options.disabled) {
      self.disable()
    }
  }

  //
  // methods
  //

  /**
   * eventStart
   * @param {Event} e
   */
  _eventStart(e) {
    const self = this
    const options = self.options
    // disabled
    if (self.disabled) {
      return
    }
    // check if inside onlyInside
    if (!options.onlyInside || e.target.closest(options.onlyInside)) {
      self.inner.append(Xt.node({ str: '<div class="xt-ripple"></div>' }))
      // fix prevent dragging links and images
      if (e.type === 'mousedown') {
        e.preventDefault()
      }
      // size
      const h = self.container.offsetHeight
      const w = self.container.offsetWidth
      const sizeObject = h > w ? h : w
      const size = sizeObject * options.sizeInitial + 1 // at least 1 pixel
      // scale from diagonal
      const sizeFinal = Math.sqrt(Math.pow(h, 2) + Math.pow(w, 2))
      const scaleFinal = (sizeFinal / size) * 2
      // offset (using clientX and clientY for touch so we need to get values with getBoundingClientRect also)
      let y
      let x
      if (e.clientX !== undefined) {
        y = e.clientY
        x = e.clientX
      } else if (e.touches && e.touches.length) {
        y = e.touches[0].clientY
        x = e.touches[0].clientX
      }
      const rectTarget = e.target.getBoundingClientRect()
      y = y - rectTarget.top
      x = x - rectTarget.left
      // position
      if (self.container !== e.target) {
        const rectObject = self.container.getBoundingClientRect()
        y += rectTarget.top - rectObject.top
        x += rectTarget.left - rectObject.left
      }
      const top = y - size / 2
      const left = x - size / 2
      // dispatch event
      self.size = size
      self.top = top
      self.left = left
      self.sizeFinal = sizeFinal
      self.scaleFinal = scaleFinal
      // dispatch event
      self.container.dispatchEvent(
        new CustomEvent(`on.${self._componentNs}`, {
          detail: e,
        })
      )
      // off
      const endHandler = Xt.dataStorage.put(window, `mouseup touchend/${self.ns}`, self._eventEnd.bind(self))
      addEventListener('mouseup', endHandler)
      addEventListener('touchend', endHandler, { passive: true })
    }
  }

  /**
   * eventEnd
   * @param {Event} e
   */
  _eventEnd(e) {
    const self = this
    // disabled
    if (self.disabled) {
      return
    }
    // off
    const endHandler = Xt.dataStorage.get(window, `mouseup touchend/${self.ns}`)
    removeEventListener('mouseup', endHandler)
    removeEventListener('touchend', endHandler)
    // dispatch event
    self.container.dispatchEvent(
      new CustomEvent(`off.${self._componentNs}`, {
        detail: e,
      })
    )
  }

  //
  // status
  //

  /**
   * enable
   */
  enable() {
    const self = this
    if (self.disabled) {
      // enable
      self.disabled = false
      // dispatch event
      self.container.dispatchEvent(new CustomEvent(`status.${self._componentNs}`))
    }
  }

  /**
   * disable
   * @param {Object} params
   * @param {Boolean} params.skipEvent Skip dispatch event
   */
  disable({ skipEvent = false } = {}) {
    const self = this
    if (!self.disabled) {
      // disable
      self.disabled = true
      // dispatch event
      if (!skipEvent) {
        self.container.dispatchEvent(new CustomEvent(`status.${self._componentNs}`))
      }
    }
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
    self._initLogic()
  }

  /**
   * destroy
   */
  destroy() {
    const self = this
    // inner
    self.inner.remove()
    self.inner = null
    // remove events
    // on
    const onHandler = Xt.dataStorage.get(self.container, `mousedown touchstart/${self.ns}`)
    self.container.removeEventListener('mousedown', onHandler)
    self.container.removeEventListener('touchstart', onHandler, { passive: true })
    // off
    const endHandler = Xt.dataStorage.get(window, `mouseup touchend/${self.ns}`)
    removeEventListener('mouseup', endHandler)
    removeEventListener('touchend', endHandler)
    // initialized class
    self.container.removeAttribute(`data-${self.componentName}-init`)
    // set self
    Xt._remove({ name: self.componentName, el: self.container })
    // dispatch event
    self.container.dispatchEvent(new CustomEvent(`destroy.${self._componentNs}`))
    // delete
    delete this
  }

  //
}

//
// options
//

Ripple.componentName = 'xt-ripple'
Ripple.optionsDefault = {
  debug: false,
  // ripple
  sizeInitial: 0.3,
  onlyInside: 'a, button, .xt-button',
}

//
// export
//

Xt.Ripple = Ripple
