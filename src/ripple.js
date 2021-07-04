/*!
 * Xtend (https://xtendui.com/)
 * @copyright (c) 2017 - 2021 Riccardo Caroli
 * @license Apache-2.0 (https://github.com/minimit/xtendui/blob/beta/LICENSE)
 */

import { Xt } from './xt'

/**
 * Ripple
 */
class Ripple {
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
    // container
    if (!self.container) {
      self.object.append(Xt.createElement('<div class="xt-ripple-container"></div>'))
      self.container = self.object.querySelector(':scope > .xt-ripple-container')
    }
    // on
    const onHandler = Xt.dataStorage.put(self.object, `mousedown touchstart/${self.ns}`, self.eventStart.bind(self))
    self.object.addEventListener('mousedown', onHandler)
    self.object.addEventListener('touchstart', onHandler, { passive: true })
    // keep the same level of raf for custom listener
    requestAnimationFrame(() => {
      // listener dispatch
      self.object.dispatchEvent(new CustomEvent(`init.${self.componentNs}`))
    })
    // initialized class
    self.object.setAttribute(`data-${self.componentName}-init`, '')
  }

  //
  // methods
  //

  /**
   * eventStart
   */
  eventStart(e) {
    const self = this
    const options = self.options
    // check if inside onlyInside
    if (!options.onlyInside || e.target.closest(options.onlyInside)) {
      self.container.append(Xt.createElement('<div class="xt-ripple"></div>'))
      // fix prevent dragging links and images
      if (e.type === 'mousedown') {
        e.preventDefault()
      }
      // size
      const h = self.object.offsetHeight
      const w = self.object.offsetWidth
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
      if (self.object !== e.target) {
        const rectObject = self.object.getBoundingClientRect()
        y += rectTarget.top - rectObject.top
        x += rectTarget.left - rectObject.left
      }
      const top = y - size / 2
      const left = x - size / 2
      // listener dispatch
      self.size = size
      self.top = top
      self.left = left
      self.sizeFinal = sizeFinal
      self.scaleFinal = scaleFinal
      // listener dispatch
      self.object.dispatchEvent(new CustomEvent(`on.${self.componentNs}`))
      // off
      const endHandler = Xt.dataStorage.put(window, `mouseup touchend/${self.ns}`, self.eventEnd.bind(self))
      addEventListener('mouseup', endHandler)
      addEventListener('touchend', endHandler, { passive: true })
    }
  }

  /**
   * eventStart
   */
  eventEnd() {
    const self = this
    // off
    const endHandler = Xt.dataStorage.get(window, `mouseup touchend/${self.ns}`)
    removeEventListener('mouseup', endHandler)
    removeEventListener('touchend', endHandler)
    // listener dispatch
    self.object.dispatchEvent(new CustomEvent(`off.${self.componentNs}`))
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
    // container
    self.container.remove()
    self.container = null
    // remove events
    // on
    const onHandler = Xt.dataStorage.get(self.object, `mousedown touchstart/${self.ns}`)
    self.object.removeEventListener('mousedown', onHandler)
    self.object.removeEventListener('touchstart', onHandler, { passive: true })
    // off
    const endHandler = Xt.dataStorage.get(window, `mouseup touchend/${self.ns}`)
    removeEventListener('mouseup', endHandler)
    removeEventListener('touchend', endHandler)
    // initialized class
    self.object.removeAttribute(`data-${self.componentName}-init`)
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

Ripple.componentName = 'xt-ripple'
Ripple.optionsDefault = {
  // ripple
  sizeInitial: 0.3,
  onlyInside: 'a, button, .xt-button',
}

//
// export
//

Xt.Ripple = Ripple
