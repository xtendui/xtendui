/*!
 * Xtend UI (https://xtendui.com/)
 * @copyright (c) 2017 - 2021 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/master/LICENSE.txt)
 */

import { Xt } from './xt.mjs'
import RJSON from 'relaxed-json'

/**
 * Mousefollow
 */
class Mousefollow {
  /**
   * fields
   */
  _optionsCustom
  _optionsDefault
  _optionsInitial
  _componentNs
  _width
  _height
  componentName
  ns
  options
  initial
  disabled = false
  container
  targets

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
    self._optionsCustom = optionsCustom
    self.componentName = self.constructor.componentName
    self._componentNs = self.componentName.replace('-', '.')
    // init
    self._initVars()
    // raf after automatic scroll on hash (fixes when you have mouse over self.container on page load and page automatically scrolls)
    requestAnimationFrame(() => {
      self._initLogic()
    })
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
    // targets
    self.targets = self.container.querySelectorAll(options.targets)
    // events
    const moveHandler = Xt.dataStorage.put(self.container, `mousemove/${self.ns}`, self._mousemove.bind(self))
    self.container.addEventListener('mousemove', moveHandler)
    const enterHandler = Xt.dataStorage.put(self.container, `mouseenter/${self.ns}`, self._mouseenter.bind(self))
    self.container.addEventListener('mouseenter', enterHandler)
    const leaveHandler = Xt.dataStorage.put(self.container, `mouseleave/${self.ns}`, self._mouseleave.bind(self))
    self.container.addEventListener('mouseleave', leaveHandler)
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
   * mousemove
   */
  _mousemove(e) {
    const self = this
    const options = self.options
    // disabled
    if (self.disabled) {
      return
    }
    // fix initial
    if (self._width === undefined) {
      self._mouseenter(e)
    }
    // position
    for (const tr of self.targets) {
      Xt._friction({
        el: tr,
        obj: {
          x: e.clientX - self._width / 2,
          y: e.clientY - self._height / 2,
          friction: options.friction,
        },
        transform: options.transform,
      })
    }
    // dispatch event
    self.container.dispatchEvent(
      new CustomEvent(`change.${self._componentNs}`, {
        detail: e,
      })
    )
  }

  /**
   * mouseenter
   * @param {Event} e
   */
  _mouseenter(e) {
    const self = this
    const options = self.options
    // disabled
    if (self.disabled) {
      return
    }
    // check
    if (!options.mouseCheck || options.mouseCheck({ self })) {
      for (const tr of self.targets) {
        // size
        const rect = tr.getBoundingClientRect()
        self._width = rect.width
        self._height = rect.height
        // class
        if (!options.classSkip) {
          Xt.on({ el: tr })
        }
        // set
        const x = e.clientX - self._width / 2
        const y = e.clientY - self._height / 2
        if (options.transform) {
          tr.style.transform = `translateX(${x}px) translateY(${y}px)`
        } else {
          tr.style.left = `${x}px`
          tr.style.top = `${y}px`
        }
      }
      // dispatch event
      self.container.dispatchEvent(
        new CustomEvent(`on.${self._componentNs}`, {
          detail: e,
        })
      )
    }
  }

  /**
   * mouseleave
   * @param {Event} e
   */
  _mouseleave(e) {
    const self = this
    const options = self.options
    // disabled
    if (self.disabled) {
      return
    }
    // check
    if (!options.mouseCheck || options.mouseCheck({ self })) {
      for (const tr of self.targets) {
        // class
        if (!options.classSkip) {
          Xt.off({ el: tr })
        }
      }
      // dispatch event
      self.container.dispatchEvent(
        new CustomEvent(`off.${self._componentNs}`, {
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
    // disable
    self.disable({ skipEvent: true })
    // remove matches
    Xt._removeMatches({ self, optionsInitial: self._optionsInitial })
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
