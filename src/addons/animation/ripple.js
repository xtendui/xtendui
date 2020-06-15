import { Xt } from 'xtend-library/src/xt.js'
import RJSON from 'relaxed-json'

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
    Xt.destroyAndInit(self)
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
    if (!self.rippleContainer) {
      self.object.append(Xt.createElement('<div class="ripple-container"></div>'))
      self.rippleContainer = self.object.querySelector(':scope > .ripple-container')
    }
    // on
    self.object.addEventListener('mousedown', self.eventStart.bind(self))
    self.object.addEventListener('touchstart', self.eventStart.bind(self), { passive: true })
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
      self.rippleContainer.append(Xt.createElement('<div class="ripple"></div>'))
      // @FIX prevent dragging links and images
      if (e.type === 'mousedown') {
        e.preventDefault()
      }
      // size
      const h = self.object.offsetHeight
      const w = self.object.offsetWidth
      const sizeObject = h > w ? h : w
      const size = sizeObject * options.sizeFactor
      // scale from diagonal
      const sizeFinal = Math.sqrt(Math.pow(h, 2) + Math.pow(w, 2))
      const scaleFinal = (sizeFinal / size) * 2
      // offset (using clientX and clientY for touch so we need to get values with getBoundingClientRect also)
      let y
      let x
      if (e.offsetX !== undefined) {
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
      self.object.dispatchEvent(new CustomEvent('ripple.on.xt'))
      // off
      self.offListener = self.eventEnd.bind(self)
      addEventListener('mouseup', self.offListener)
      addEventListener('touchend', self.offListener, { passive: true })
    }
  }

  /**
   * eventStart
   */
  eventEnd(e) {
    const self = this
    const options = self.options
    // off
    removeEventListener('mouseup', self.offListener)
    removeEventListener('touchend', self.offListener)
    // listener dispatch
    self.object.dispatchEvent(new CustomEvent('ripple.off.xt'))
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
    self.object.removeEventListener('mousedown', self.eventStart.bind(self))
    self.object.removeEventListener('touchstart', self.eventStart.bind(self), { passive: true })
    // off
    removeEventListener('mouseup', self.offListener)
    removeEventListener('touchend', self.offListener)
    // set self
    Xt.remove(self.componentName, self.object)
    // listener dispatch
    self.object.dispatchEvent(new CustomEvent('destroy.xt'))
  }

  //
}

//
// options
//

Ripple.componentName = 'xt-ripple'
Ripple.optionsDefault = {
  sizeFactor: 0.1,
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
  matches: '[data-' + Xt.Ripple.componentName + ']',
  mount: object => {
    // vars

    const optionsMarkup = object.getAttribute('data-' + Xt.Ripple.componentName)
    const options = optionsMarkup ? RJSON.parse(optionsMarkup) : {}

    // init

    let self = new Xt.Ripple(object, options)

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  },
})
