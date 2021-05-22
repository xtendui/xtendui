/*!
 * Xtend (https://xtendui.com/)
 * @copyright (c) 2017 - 2021 Riccardo Caroli
 * @license Apache-2.0 (https://github.com/minimit/xtendui/blob/beta/LICENSE)
 */

import { Xt } from './xt'
import RJSON from 'relaxed-json'

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
    // init
    self.initVars()
    // raf after automatic scroll on hash (fixes when you have mouse over self.object on page load and page automatically scrolls)
    requestAnimationFrame(() => {
      self.initLogic()
    })
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
    Xt.set(self.componentName, self.object, self)
    // namespace
    const uniqueId = Xt.dataStorage.get(self.object, 'xtUniqueId')
    Xt.dataStorage.set(self.object, 'xtUniqueId', uniqueId || Xt.getuniqueId())
    self.ns = `${self.componentName}-${Xt.dataStorage.get(self.object, 'xtUniqueId')}`
    // targets
    self.targets = self.object.querySelectorAll(options.targets)
    // events
    const moveHandler = Xt.dataStorage.put(self.object, `mousemove/${self.ns}`, self.mousemove.bind(self))
    self.object.addEventListener('mousemove', moveHandler)
    const enterHandler = Xt.dataStorage.put(self.object, `mouseenter/${self.ns}`, self.mouseenter.bind(self))
    self.object.addEventListener('mouseenter', enterHandler)
    const leaveHandler = Xt.dataStorage.put(self.object, `mouseleave/${self.ns}`, self.mouseleave.bind(self))
    self.object.addEventListener('mouseleave', leaveHandler)
    // keep the same level of raf for custom listener
    requestAnimationFrame(() => {
      // listener dispatch
      self.object.dispatchEvent(new CustomEvent(`init.${self.componentNs}`))
    })
    // initialized class
    self.object.classList.add(`${self.componentName}-init`)
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
        Xt.on(tr)
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
        Xt.off(tr)
      }
      // listener dispatch
      self.object.dispatchEvent(new CustomEvent(`off.${self.componentNs}`))
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
    self.initLogic()
  }

  /**
   * destroy
   */
  destroy() {
    const self = this
    // remove events
    const moveHandler = Xt.dataStorage.get(self.object, `mousemove/${self.ns}`)
    self.object.removeEventListener('mousemove', moveHandler)
    const enterHandler = Xt.dataStorage.get(self.object, `mouseenter/${self.ns}`)
    self.object.removeEventListener('mouseenter', enterHandler)
    const leaveHandler = Xt.dataStorage.get(self.object, `mouseleave/${self.ns}`)
    self.object.removeEventListener('mouseleave', leaveHandler)
    // initialized class
    self.object.classList.remove(`${self.componentName}-init`)
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
  targets: ':scope > .xt-mousefollow',
  // mousefollow
  transform: true,
  friction: ({ delta }) => {
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

if (typeof window !== 'undefined') {
  Xt.mount({
    matches: `[data-${Xt.Mousefollow.componentName}]`,
    mount: ({ ref }) => {
      // vars

      const optionsMarkup = ref.getAttribute(`data-${Xt.Mousefollow.componentName}`)
      const options = optionsMarkup ? RJSON.parse(optionsMarkup) : {}

      // init

      let self = new Xt.Mousefollow(ref, options)

      // unmount

      return () => {
        self.destroy()
        self = null
      }
    },
  })
}
