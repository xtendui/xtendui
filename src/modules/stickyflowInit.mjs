/*!
 * Xtend UI (https://xtendui.com/)
 * @copyright (c) 2017-2025 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/master/LICENSE.txt)
 */

import { Xt } from '../xt.mjs'

/**
 * StickyflowInit
 */
export class StickyflowInit {
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
    self._initLogic()
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
    // elements
    self.element = self.container.querySelector(options.element)
    self.filler = self.container.querySelector(options.filler)
    self.scrollers = [document.scrollingElement, ...document.querySelectorAll(options.scrollers)].reverse() // need reverse for proper activation
    for (const scroller of self.scrollers) {
      if (scroller) {
        if (scroller.contains(self.element)) {
          self.scroller = scroller
          break
        }
      }
    }
    // vars
    self._scrollTopOld = 0
    // events
    if (self.scroller === document.scrollingElement) {
      const scrollHandler = Xt.dataStorage.put(window, `scroll/${self.ns}`, self._eventChange.bind(self))
      addEventListener('scroll', scrollHandler)
    } else {
      const scrollHandler = Xt.dataStorage.put(self.scroller, `scroll/${self.ns}`, self._eventChange.bind(self))
      self.scroller.addEventListener('scroll', scrollHandler)
    }
    const resizeHandler = Xt.dataStorage.put(window, `resize/${self.ns}`, self._eventChange.bind(self))
    addEventListener('resize', resizeHandler)
    // initial
    self._initStart()
    // setup
    // dispatch event
    self.container.dispatchEvent(new CustomEvent(`setup.${self._componentNs}`))
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

  /**
   * init start
   */
  _initStart() {
    const self = this
    // disabled
    if (self.disabled) {
      return
    }
    // initial
    const style = getComputedStyle(self.element)
    self._initialTop = style.top && style.top !== 'auto' ? parseFloat(style.top) : 0
    self._initialBottom = style.bottom && style.bottom !== 'auto' ? parseFloat(style.bottom) : 0
    self._eventChange()
  }

  //
  // methods
  //

  /**
   * eventChange
   * @param {Node|HTMLElement|EventTarget|Window} step
   * @param {Event} e
   */
  _eventChange() {
    const self = this
    // disabled
    if (self.disabled) {
      return
    }
    // position
    const scrollTop = self.scroller.scrollTop
    const windowHeight = window.innerHeight
    const objectHeight = self.element.offsetHeight
    if (objectHeight + self._initialTop + self._initialBottom < windowHeight) {
      self.filler.style.height = ''
      self.element.style.top = `${self._initialTop}px`
      self.element.style.bottom = 'auto'
    } else {
      if (scrollTop > self._scrollTopOld) {
        if (!self.element.classList.contains('xt-stickyflow-top')) {
          const pos = windowHeight - objectHeight - self._initialBottom
          const height = Math.max(0, self.element.offsetTop - self.filler.offsetTop)
          self.filler.style.height = `${height}px`
          self.element.style.top = `${pos}px`
          self.element.style.bottom = 'auto'
          self.element.classList.remove('xt-stickyflow-bottom')
          self.element.classList.add('xt-stickyflow-top')
        }
      } else {
        if (!self.element.classList.contains('xt-stickyflow-bottom')) {
          const pos = windowHeight - objectHeight - self._initialTop
          const height = Math.max(0, self.element.offsetTop - self.filler.offsetTop)
          self.filler.style.height = `${height}px`
          self.element.style.top = 'auto'
          self.element.style.bottom = `${pos}px`
          self.element.classList.add('xt-stickyflow-bottom')
          self.element.classList.remove('xt-stickyflow-top')
        }
      }
    }
    // change
    Xt.frame({
      el: self.container,
      ns: `${self.ns}Change`,
      func: () => {
        // dispatch event
        self.container.dispatchEvent(new CustomEvent(`change.${self._componentNs}`))
      },
    })
    self._scrollTopOld = scrollTop
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
      // position
      self.filler.style.height = ''
      self.element.style.top = ''
      self.element.style.bottom = ''
      self.element.classList.remove('xt-stickyflow-bottom')
      self.element.classList.remove('xt-stickyflow-top')
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
    // remove events
    if (self.scroller === document.scrollingElement) {
      const scrollHandler = Xt.dataStorage.get(window, `scroll/${self.ns}`)
      removeEventListener('scroll', scrollHandler)
    } else {
      const scrollHandler = Xt.dataStorage.get(self.scroller, `scroll/${self.ns}`)
      self.scroller.removeEventListener('scroll', scrollHandler)
    }
    const resizeHandler = Xt.dataStorage.get(window, `resize/${self.ns}`)
    removeEventListener('resize', resizeHandler)
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
