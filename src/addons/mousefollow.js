import { Xt } from '../xt.js'
import JSON5 from 'json5'

/**
 * Mousefollow
 */
class Mousefollow {
  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Node|HTMLElement|EventTarget|Window} container Container node
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
    // targets
    self.targets = self.object.querySelectorAll(self.options.targets)
    // events
    self.object.addEventListener('mousemove', self.mousemove.bind(self))
    self.object.addEventListener('mouseenter', self.mouseenter.bind(self))
    self.object.addEventListener('mouseleave', self.mouseleave.bind(self))
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
   * mousemove
   */
  mousemove(e) {
    const self = this
    const options = self.options
    // fix initial
    if (self.width === undefined) {
      self.mouseenter(e)
    }
    // position
    for (const tr of self.targets) {
      Xt.friction(
        tr,
        {
          x: e.clientX - self.width / 2,
          y: e.clientY - self.height / 2,
          friction: options.friction,
        },
        options.transform
      )
    }
    // listener dispatch
    self.object.dispatchEvent(new CustomEvent(`change.${self.componentNs}`))
  }

  /**
   * mouseenter
   */
  mouseenter(e) {
    const self = this
    const options = self.options
    if (!options.mouseCheck || options.mouseCheck.call(self)) {
      for (const tr of self.targets) {
        // size
        const rect = tr.getBoundingClientRect()
        self.width = rect.width
        self.height = rect.height
        // class
        Xt.animOn(tr)
        // set
        const x = e.clientX - self.width / 2
        const y = e.clientY - self.height / 2
        if (options.transform) {
          tr.style.transform = `translateX(${x}px) translateY(${y}px)`
        } else {
          tr.style.left = `${x}px`
          tr.style.top = `${y}px`
        }
      }
      // listener dispatch
      self.object.dispatchEvent(new CustomEvent(`on.${self.componentNs}`))
    }
  }

  /**
   * mouseleave
   */
  mouseleave() {
    const self = this
    const options = self.options
    if (!options.mouseCheck || options.mouseCheck.call(self)) {
      for (const tr of self.targets) {
        // class
        Xt.animOff(tr)
      }
      // listener dispatch
      self.object.dispatchEvent(new CustomEvent(`off.${self.componentNs}`))
    }
  }

  //
  // destroy
  //

  /**
   * destroy
   */
  destroy() {
    const self = this
    // remove events
    self.object.removeEventListener('mousemove', self.mousemove.bind(self))
    self.object.removeEventListener('mouseenter', self.mouseenter.bind(self))
    self.object.removeEventListener('mouseleave', self.mouseleave.bind(self))
    removeEventListener('mouseup', self.mouseleave.bind(self))
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

Mousefollow.componentName = 'xt-mousefollow'
Mousefollow.optionsDefault = {
  // elements
  targets: ':scope > .mousefollow',
  // mousefollow
  transform: true,
  friction: delta => {
    return delta / 9
  },
  mouseCheck: false,
}

//
// export
//

Xt.Mousefollow = Mousefollow

//
// observe
//

Xt.mount.push({
  matches: `[data-${Xt.Mousefollow.componentName}]`,
  mount: object => {
    // vars

    const optionsMarkup = object.getAttribute(`data-${Xt.Mousefollow.componentName}`)
    const options = optionsMarkup ? JSON5.parse(optionsMarkup) : {}

    // init

    let self = new Xt.Mousefollow(object, options)

    // unmount

    return () => {
      self.destroy()
      self = null
    }
  },
})