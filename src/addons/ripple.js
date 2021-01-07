import { Xt } from '../xt.js'
import JSON5 from 'json5'

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
    // generate
    if (!self.container) {
      self.object.append(Xt.createElement('<div class="ripple-container"></div>'))
      self.container = self.object.querySelector(':scope > .ripple-container')
    }
    // on
    let onHandler = Xt.dataStorage.put(self.object, `mousedown/touchstart/${self.ns}`, self.eventStart.bind(self))
    self.object.addEventListener('mousedown', onHandler)
    self.object.addEventListener('touchstart', onHandler, { passive: true })
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
   * eventStart
   */
  eventStart(e) {
    const self = this
    const options = self.options
    // check if inside onlyInside
    if (!options.onlyInside || e.target.closest(options.onlyInside)) {
      self.container.append(Xt.createElement('<div class="ripple"></div>'))
      // @FIX prevent dragging links and images
      if (e.type === 'mousedown') {
        e.preventDefault()
      }
      // size
      const h = self.object.offsetHeight
      const w = self.object.offsetWidth
      const sizeObject = h > w ? h : w
      const size = sizeObject * options.sizeInitial
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
      let endHandler = Xt.dataStorage.put(window, `mouseup/touchend/${self.ns}`, self.eventEnd.bind(self))
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
    let endHandler = Xt.dataStorage.get(window, `mouseup/touchend/${self.ns}`)
    removeEventListener('mouseup', endHandler)
    removeEventListener('touchend', endHandler)
    // listener dispatch
    self.object.dispatchEvent(new CustomEvent(`off.${self.componentNs}`))
  }

  //
  // util
  //

  /**
   * destroy
   */
  destroy() {
    const self = this
    // generate
    self.object.querySelector(':scope > .ripple-container').remove()
    // remove events
    // on
    let onHandler = Xt.dataStorage.get(self.object, `mousedown/touchstart/${self.ns}`)
    self.object.removeEventListener('mousedown', onHandler)
    self.object.removeEventListener('touchstart', onHandler, { passive: true })
    // off
    let endHandler = Xt.dataStorage.get(window, `mouseup/touchend/${self.ns}`)
    removeEventListener('mouseup', endHandler)
    removeEventListener('touchend', endHandler)
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

Ripple.componentName = 'xt-ripple'
Ripple.optionsDefault = {
  // ripple
  sizeInitial: 0.1,
  onlyInside: 'a, button, .btn',
}

//
// export
//

Xt.Ripple = Ripple

//
// observe
//

Xt.mount.push({
  matches: `[data-${Xt.Ripple.componentName}]`,
  mount: ({ object }) => {
    // vars

    const optionsMarkup = object.getAttribute(`data-${Xt.Ripple.componentName}`)
    const options = optionsMarkup ? JSON5.parse(optionsMarkup) : {}

    // init

    let self = new Xt.Ripple(object, options)

    // unmount

    return () => {
      self.destroy()
      self = null
    }
  },
})
