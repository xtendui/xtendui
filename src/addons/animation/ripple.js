import { Xt } from 'xtend-library'
import RJSON from 'relaxed-json'
import 'xtend-library/src/vars.js'
import gsap from 'gsap'

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
      self.object.classList.add('ripple-element')
      self.object.append(Xt.createElement('<div class="ripple-container"></div>'))
      self.rippleContainer = self.object.querySelector(':scope > .ripple-container')
    }
    // on
    self.object.addEventListener('mousedown', self.eventStart.bind(self))
    self.object.addEventListener('touchstart', self.eventStart.bind(self))
    // off
    self.object.addEventListener('mouseup', self.eventEnd.bind(self))
    self.object.addEventListener('touchend', self.eventEnd.bind(self))
    addEventListener('mouseup', self.eventEnd.bind(self))
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
      const ripple = self.rippleContainer.querySelector('.ripple:last-child')
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
      // animate
      gsap.set(ripple, { height: size, width: size, top: top, left: left, scale: 1, opacity: 0 })
      gsap.to(ripple, { opacity: 1, duration: Xt.vars.timeSmall, ease: 'penguin' })
      gsap.to(ripple, { scale: scaleFinal, duration: Xt.vars.timeMedium, ease: 'penguin' })
    }
  }

  /**
   * eventStart
   */
  eventEnd(e) {
    const self = this
    const options = self.options
    // check if inside onlyInside
    if (!options.onlyInside || e.target.closest(options.onlyInside)) {
      const ripple = self.rippleContainer.querySelector('.ripple:last-child')
      if (ripple) {
        gsap.to(ripple, { opacity: 0, duration: Xt.vars.timeMedium, ease: 'penguin', delay: Xt.vars.timeTiny }).eventCallback('onComplete', () => {
          //ripple.remove()
        })
      }
    }
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
    self.object.classList.remove('ripple-element')
    self.object.querySelector(':scope > .ripple-container').remove()
    // remove events
    // on
    self.object.removeEventListener('mousedown', self.eventStart.bind(self))
    self.object.removeEventListener('touchstart', self.eventStart.bind(self))
    // off
    self.object.removeEventListener('mouseup', self.eventEnd.bind(self))
    self.object.removeEventListener('touchend', self.eventEnd.bind(self))
    removeEventListener('mouseup', self.eventEnd.bind(self))
    // set self
    Xt.remove(self.componentName, self.object)
  }

  //
}

//
// options
//

Ripple.componentName = 'xt-ripple'
Ripple.optionsDefault = {
  sizeFactor: 0.1,
  onlyInside: 'a, button',
}
Xt.optionsGlobal[Ripple.componentName] = {}

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
