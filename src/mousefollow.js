/*!
 * Xtend UI (https://xtendui.com/)
 * @copyright (c) 2017 - 2021 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/beta/LICENSE)
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
    self.container = object
    self.optionsCustom = optionsCustom
    self.componentName = self.constructor.componentName
    self.componentNs = self.componentName.replace('-', '.')
    // init
    self.initVars()
    // raf after automatic scroll on hash (fixes when you have mouse over self.container on page load and page automatically scrolls)
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
    self.optionsDefault = Xt.merge([self.constructor.optionsDefault, Xt.options[self.componentName]])
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
    self.disabled = false
    // enable first for proper initial activation
    self.enable()
    // matches
    Xt.initMatches({ self })
    // vars
    self.initial = true
    // targets
    self.targets = self.container.querySelectorAll(options.targets)
    // events
    const moveHandler = Xt.dataStorage.put(self.container, `mousemove/${self.ns}`, self.mousemove.bind(self))
    self.container.addEventListener('mousemove', moveHandler)
    const enterHandler = Xt.dataStorage.put(self.container, `mouseenter/${self.ns}`, self.mouseenter.bind(self))
    self.container.addEventListener('mouseenter', enterHandler)
    const leaveHandler = Xt.dataStorage.put(self.container, `mouseleave/${self.ns}`, self.mouseleave.bind(self))
    self.container.addEventListener('mouseleave', leaveHandler)
    // init
    Xt.frame({
      el: self.container,
      ns: `${self.ns}Init`,
      func: () => {
        // initialized class
        self.container.setAttribute(`data-${self.componentName}-init`, '')
        // dispatch event
        self.container.dispatchEvent(new CustomEvent(`init.${self.componentNs}`))
        self.initial = false
        // debug
        if (options.debug) {
          // eslint-disable-next-line no-console
          console.log(`${self.componentName} init`, self)
        }
      },
    })
    // disable last for proper options.disableDeactivate
    if (self.options.disabled || self.disabledManual) {
      self.disable()
    }
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
    // disabled
    if (self.disabled) {
      return
    }
    // fix initial
    if (self.width === undefined) {
      self.mouseenter(e)
    }
    // position
    for (const tr of self.targets) {
      Xt.friction({
        el: tr,
        obj: {
          x: e.clientX - self.width / 2,
          y: e.clientY - self.height / 2,
          friction: options.friction,
        },
        transform: options.transform,
      })
    }
    // dispatch event
    self.container.dispatchEvent(
      new CustomEvent(`change.${self.componentNs}`, {
        detail: e,
      })
    )
  }

  /**
   * mouseenter
   * @param {Event} e
   */
  mouseenter(e) {
    const self = this
    const options = self.options
    // disabled
    if (self.disabled) {
      return
    }
    // check
    if (!options.mouseCheck || options.mouseCheck.call(self)) {
      for (const tr of self.targets) {
        // size
        const rect = tr.getBoundingClientRect()
        self.width = rect.width
        self.height = rect.height
        // class
        if (!options.classSkip) {
          Xt.on({ el: tr })
        }
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
      // dispatch event
      self.container.dispatchEvent(
        new CustomEvent(`on.${self.componentNs}`, {
          detail: e,
        })
      )
    }
  }

  /**
   * mouseleave
   * @param {Event} e
   */
  mouseleave(e) {
    const self = this
    const options = self.options
    // disabled
    if (self.disabled) {
      return
    }
    // check
    if (!options.mouseCheck || options.mouseCheck.call(self)) {
      for (const tr of self.targets) {
        // class
        if (!options.classSkip) {
          Xt.off({ el: tr })
        }
      }
      // dispatch event
      self.container.dispatchEvent(
        new CustomEvent(`off.${self.componentNs}`, {
          detail: e,
        })
      )
    }
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
      self.container.dispatchEvent(new CustomEvent(`status.${self.componentNs}`))
    }
  }

  /**
   * disable
   * @param {Object} params
   * @param {Boolean} params.skipEvent Skip dispatch event
   */
  disable({ skipEvent = false } = {}) {
    const self = this
    const options = self.options
    if (!self.disabled) {
      // disable
      self.disabled = true
      // position
      for (const tr of self.targets) {
        if (options.transform) {
          tr.style.transform = ''
        } else {
          tr.style.left = ''
          tr.style.top = ''
        }
      }
      // dispatch event
      if (!skipEvent) {
        self.container.dispatchEvent(new CustomEvent(`status.${self.componentNs}`))
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
    self.initLogic()
  }

  /**
   * destroy
   */
  destroy() {
    const self = this
    // disable
    self.disable({ skipEvent: true })
    // remove matches
    Xt.removeMatches({ self })
    // remove events
    const moveHandler = Xt.dataStorage.get(self.container, `mousemove/${self.ns}`)
    self.container.removeEventListener('mousemove', moveHandler)
    const enterHandler = Xt.dataStorage.get(self.container, `mouseenter/${self.ns}`)
    self.container.removeEventListener('mouseenter', enterHandler)
    const leaveHandler = Xt.dataStorage.get(self.container, `mouseleave/${self.ns}`)
    self.container.removeEventListener('mouseleave', leaveHandler)
    // initialized class
    self.container.removeAttribute(`data-${self.componentName}-init`)
    // set self
    Xt.remove({ name: self.componentName, el: self.container })
    // dispatch event
    self.container.dispatchEvent(new CustomEvent(`destroy.${self.componentNs}`))
    // delete
    delete this
  }

  //
}

//
// options
//

Mousefollow.componentName = 'xt-mousefollow'
Mousefollow.optionsDefault = {
  debug: false,
  // elements
  targets: '[data-xt-mousefollow-target]',
  // class
  classSkip: false,
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
