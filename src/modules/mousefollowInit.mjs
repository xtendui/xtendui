/*!
 * Xtend UI (https://xtendui.com/)
 * @copyright (c) 2017-2024 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/master/LICENSE.txt)
 */

import { Xt } from '../xt.mjs'

/**
 * MousefollowInit
 */
export class MousefollowInit {
  //
  // init
  //

  /**
   * init
   */
  _init() {
    const self = this
    // init
    self._initVars()
    // raf after automatic scroll on hash (fixes when you have mouse over self.container on page load and page automatically scrolls)
    requestAnimationFrame(() => {
      self._initLogic()
    })
  }

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
      self.friction({
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
      }),
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
        }),
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
        }),
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
   * friction
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.el Element
   * @param {Object} params.obj Object with x and y values
   * @param {Boolean} params.transform Use transforms instead of position
   */
  friction({ el, obj, transform = true } = {}) {
    const self = this
    Xt.frame({
      el,
      ns: `xtFrictionFrame`,
    })
    Xt.frame({
      el,
      ns: `xtFrictionInitFrame`,
      func: () => {
        // fix loop when not visible
        if (Xt.visible({ el })) {
          let xCurrent
          let yCurrent
          if (transform) {
            const translate = Xt.getTranslate({ el })
            xCurrent = translate[0]
            yCurrent = translate[1]
          } else {
            const rect = el.getBoundingClientRect()
            xCurrent = rect.left
            yCurrent = rect.top
          }
          let xDist = obj.x - xCurrent
          let yDist = obj.y - yCurrent
          // momentum
          const fncFriction = obj.friction
          // set
          if (fncFriction && Xt.dataStorage.get(el, 'xtFrictionX') && Xt.durationTimescale !== 1000) {
            // friction
            xCurrent += fncFriction({ delta: Math.abs(xDist) }) * Math.sign(xDist)
            yCurrent += fncFriction({ delta: Math.abs(yDist) }) * Math.sign(yDist)
            if (transform) {
              el.style.transform = `translateX(${xCurrent}px) translateY(${yCurrent}px)`
            } else {
              el.style.left = `${xCurrent}px`
              el.style.top = `${yCurrent}px`
            }
          } else {
            // instant
            xCurrent = obj.x
            yCurrent = obj.y
            // set
            if (transform) {
              el.style.transform = `translateX(${xCurrent}px) translateY(${yCurrent}px)`
            } else {
              el.style.top = `${yCurrent}px`
              el.style.left = `${xCurrent}px`
            }
          }
          // next interaction friction
          Xt.dataStorage.set(el, 'xtFrictionX', xCurrent)
          Xt.dataStorage.set(el, 'xtFrictionY', yCurrent)
          // loop
          if (fncFriction && Xt.durationTimescale !== 1000) {
            const frictionLimit = obj.frictionLimit ? obj.frictionLimit : 1.5
            xDist = obj.x - xCurrent
            yDist = obj.y - yCurrent
            Xt.frame({
              el,
              ns: `xtFrictionFrame`,
              func: () => {
                if (Math.abs(xDist) >= frictionLimit || Math.abs(yDist) >= frictionLimit) {
                  // continue friction
                  self.friction({ el, obj, transform })
                } else {
                  // next interaction instant
                  Xt.dataStorage.remove(el, 'xtFrictionX')
                  Xt.dataStorage.remove(el, 'xtFrictionY')
                }
              },
            })
          }
        }
      },
    })
  }

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
}
