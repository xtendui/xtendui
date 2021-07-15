/*!
 * Xtend UI (https://xtendui.com/)
 * @copyright (c) 2017 - 2021 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/beta/LICENSE)
 */

import { Xt } from './xt'
import RJSON from 'relaxed-json'

/**
 * Stickyflow
 */
class Stickyflow {
  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
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
    self.optionsDefault = Xt.merge([self.constructor.optionsDefault, Xt.optionsDefault[self.componentName]])
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
    const uniqueId = Xt.dataStorage.get(self.container, 'xtUniqueId')
    Xt.dataStorage.set(self.container, 'xtUniqueId', uniqueId || Xt.getuniqueId())
    self.ns = `${self.componentName}-${Xt.dataStorage.get(self.container, 'xtUniqueId')}`
    // vars
    self.initial = true
    // elements
    self.element = self.container.querySelector(options.element)
    self.filler = self.container.querySelector(options.filler)
    // vars
    self.scrollTopOld = 0
    // events
    const changeHandler = Xt.dataStorage.put(window, `scroll resize/${self.ns}`, self.eventChange.bind(self))
    addEventListener('scroll', changeHandler)
    addEventListener('resize', changeHandler)
    // initial
    self.initStart()
    // keep the same level of raf for custom listener
    requestAnimationFrame(() => {
      // listener dispatch
      self.container.dispatchEvent(new CustomEvent(`init.${self.componentNs}`))
      self.initial = false
      // debug
      if (options.debug) {
        // eslint-disable-next-line no-console
        console.log(`${self.componentName} init`, self)
      }
    })
    // initialized class
    self.container.setAttribute(`data-${self.componentName}-init`, '')
  }

  /**
   * init start
   */
  initStart() {
    const self = this
    // initial
    self.eventChange()
  }

  //
  // methods
  //

  /**
   * eventChange
   * @param {Node|HTMLElement|EventTarget|Window} step
   * @param {Event} e
   */
  eventChange() {
    const self = this
    // logic
    const scrollTop = document.scrollingElement.scrollTop
    const windowHeight = window.innerHeight
    const objectHeight = self.element.offsetHeight
    if (objectHeight < windowHeight) {
      self.filler.style.height = ''
      self.element.style.top = '0'
      self.element.style.bottom = ''
    } else {
      if (scrollTop > self.scrollTopOld) {
        if (!self.element.classList.contains('xt-stickyflow-top')) {
          const pos = windowHeight - objectHeight
          const height = Math.max(0, self.element.offsetTop - self.filler.offsetTop)
          self.filler.style.height = `${height}px`
          self.element.style.top = `${pos}px`
          self.element.style.bottom = ''
          self.element.classList.remove('xt-stickyflow-bottom')
          self.element.classList.add('xt-stickyflow-top')
        }
      } else {
        if (!self.element.classList.contains('xt-stickyflow-bottom')) {
          const pos = windowHeight - objectHeight
          const height = Math.max(0, self.element.offsetTop - self.filler.offsetTop)
          self.filler.style.height = `${height}px`
          self.element.style.top = ''
          self.element.style.bottom = `${pos}px`
          self.element.classList.add('xt-stickyflow-bottom')
          self.element.classList.remove('xt-stickyflow-top')
        }
      }
    }
    // keep the same level of raf for custom listener
    requestAnimationFrame(() => {
      // listener dispatch
      self.container.dispatchEvent(new CustomEvent(`change.${self.componentNs}`))
    })
    self.scrollTopOld = scrollTop
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
    const changeHandler = Xt.dataStorage.get(window, `scroll resize/${self.ns}`)
    removeEventListener('scroll', changeHandler)
    removeEventListener('resize', changeHandler)
    // initialized class
    self.container.removeAttribute(`data-${self.componentName}-init`)
    // set self
    Xt.remove({ name: self.componentName, el: self.container })
    // listener dispatch
    self.container.dispatchEvent(new CustomEvent(`destroy.${self.componentNs}`))
  }

  //
}

//
// options
//

Stickyflow.componentName = 'xt-stickyflow'
Stickyflow.optionsDefault = {
  debug: false,
  // elements
  element: false,
  filler: false,
}

//
// export
//

Xt.Stickyflow = Stickyflow

//
// observe
//

if (typeof window !== 'undefined') {
  Xt.mount({
    matches: `[data-${Xt.Stickyflow.componentName}]`,
    mount: ({ ref }) => {
      // vars

      const optionsMarkup = ref.getAttribute(`data-${Xt.Stickyflow.componentName}`)
      const options = optionsMarkup ? RJSON.parse(optionsMarkup) : {}

      // init

      let self = new Xt.Stickyflow(ref, options)

      // unmount

      return () => {
        self.destroy()
        self = null
      }
    },
  })
}
