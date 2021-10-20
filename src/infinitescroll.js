/*!
 * Xtend UI (https://xtendui.com/)
 * @copyright (c) 2017 - 2021 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/beta/LICENSE)
 */

import { Xt } from './xt'
import RJSON from 'relaxed-json'

/**
 * Infinitescroll
 */
class Infinitescroll {
  /**
   * fields
   */
  #optionsCustom
  #optionsDefault
  #componentNs
  #itemsFake
  #url
  #scrollResume
  #scrollTopOld

  componentName
  uniqueId
  ns
  options
  initial
  disabled
  container
  current
  triggersUp
  triggersDown
  itemsContainer
  spaceAdditionals
  paginations

  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} optionsCustom User options
   * @constructor
   */
  constructor(object, optionsCustom = {}) {
    const self = this
    self.container = object
    self.#optionsCustom = optionsCustom
    self.componentName = self.constructor.componentName
    self.#componentNs = self.componentName.replace('-', '.')
    // init
    self.#initVars()
    self.#initLogic()
  }

  //
  // init
  //

  /**
   * init vars
   */
  #initVars() {
    const self = this
    // options
    self.#optionsDefault = Xt.merge([self.constructor.optionsDefault, Xt.options[self.componentName]])
    self.options = Xt.merge([self.#optionsDefault, self.#optionsCustom])
    // vars
    const options = self.options
    self.current = options.min
    // fake
    if (!options.get) {
      self.#itemsFake = self.container.querySelector(options.elements.itemsContainer).cloneNode(true)
    }
  }

  /**
   * init logic
   */
  #initLogic() {
    const self = this
    const options = self.options
    // set self
    Xt.set({ name: self.componentName, el: self.container, self })
    // namespace
    self.uniqueId = self.uniqueId ?? Xt.uniqueId()
    self.ns = `${self.componentName}-${self.uniqueId}`
    // vars
    self.disabled = false
    // enable first for proper initial activation
    self.enable()
    // matches
    Xt.initMatches({ self })
    // vars
    self.initial = true
    // elements
    self.triggersUp = self.container.querySelectorAll(options.elements.scrollUp)
    self.triggersDown = self.container.querySelectorAll(options.elements.scrollDown)
    self.itemsContainer = self.container.querySelector(options.elements.itemsContainer)
    self.spaceAdditionals = self.container.querySelectorAll(options.elements.spaceAdditional)
    self.paginations = self.container.querySelectorAll(options.elements.pagination)
    // events
    const unloadHandler = Xt.dataStorage.put(window, `unload/${self.ns}`, self.#eventUnload.bind(self))
    addEventListener('unload', unloadHandler)
    const beforeunloadHandler = Xt.dataStorage.put(
      window,
      `beforeunload/${self.ns}`,
      self.#eventBeforeunload.bind(self)
    )
    addEventListener('beforeunload', beforeunloadHandler)
    const scrollHandler = Xt.dataStorage.put(window, `scroll/${self.ns}`, self.#eventScroll.bind(self))
    addEventListener('scroll', scrollHandler)
    // trigger
    const events = options.events?.on ? [...options.events.on.split(' ')] : []
    if (events.length) {
      for (const trigger of [...Array.from(self.triggersUp), ...Array.from(self.triggersDown)]) {
        const triggerHandler = Xt.dataStorage.put(
          trigger,
          `${options.events.on}/${self.ns}`,
          self.#eventTrigger.bind(self, { trigger })
        )
        for (const event of events) {
          trigger.addEventListener(event, triggerHandler)
        }
      }
    }
    // initial
    self.#initStart()
    // init
    Xt.frame({
      el: self.container,
      func: () => {
        // initialized class
        self.container.setAttribute(`data-${self.componentName}-init`, '')
        // dispatch event
        self.container.dispatchEvent(new CustomEvent(`init.${self.#componentNs}`))
        self.initial = false
        // debug
        if (options.debug) {
          // eslint-disable-next-line no-console
          console.log(`${self.componentName} init`, self)
        }
      },
      ns: `${self.ns}Init`,
    })
    // disable last for proper options.disableDeactivate
    if (self.options.disabled || self.disabledManual) {
      self.disable()
    }
  }

  /**
   * init start
   */
  #initStart() {
    const self = this
    const options = self.options
    // disabled
    if (self.disabled) {
      return
    }
    // logic
    self.#setCurrent()
    self.#update()
    self.#paginate()
    if (self.itemsContainer) {
      const found = self.itemsContainer.querySelector(options.elements.item)
      if (found) {
        found.setAttribute('data-item-first', self.current)
      }
    }
    // resume state
    const add = self.#additionalSpace()
    const state = history.state
    if (state && state[`scrollResume${self.#componentNs}`]) {
      const found = self.itemsContainer.querySelector(options.elements.item)
      document.scrollingElement.scrollTop = state[`scrollResume${self.#componentNs}`] + found.offsetTop + add
    }
  }

  //
  // methods
  //

  /**
   * trigger
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.trigger
   */
  #eventTrigger({ trigger } = {}) {
    const self = this
    const options = self.options
    // disabled
    if (self.disabled) {
      return
    }
    // request
    const up = parseFloat(trigger.getAttribute('data-xt-infinitescroll-up'))
    const down = parseFloat(trigger.getAttribute('data-xt-infinitescroll-down'))
    const amount = up || down
    if (!amount) {
      self.#setCurrent({ page: options.min })
      location = self.#url.href
    } else {
      let current = self.current + amount
      current = current < options.min ? options.min : current
      current = current > options.max ? options.max : current
      const items = self.itemsContainer.querySelectorAll(`[data-item-first="${current}"]`)
      if (current !== self.current && !items.length) {
        self.#setCurrent({ page: current })
        self.inverse = !!up
        self.#request()
      }
    }
  }

  /**
   * unload
   */
  #eventUnload() {
    const self = this
    // disabled
    if (self.disabled) {
      return
    }
    // save scroll position
    if (self.#scrollResume) {
      document.scrollingElement.scrollTop = 0
    }
  }

  /**
   * unload
   */
  #eventBeforeunload() {
    const self = this
    // disabled
    if (self.disabled) {
      return
    }
    // save scroll position
    if (self.#scrollResume) {
      const state = {}
      state[`scrollResume${self.#componentNs}`] = self.#scrollResume
      history.replaceState(state, '', self.#url.href)
    }
  }

  /**
   * scroll
   */
  #eventScroll() {
    const self = this
    const options = self.options
    // disabled
    if (self.disabled) {
      return
    }
    // scroll
    const scrollTop = document.scrollingElement.scrollTop
    const windowHeight = window.innerHeight
    // current page
    let found = self.itemsContainer.querySelector(options.elements.item)
    const items = self.itemsContainer.querySelectorAll('[data-item-first]')
    for (const item of items) {
      const itemTop = item.offsetTop
      if (scrollTop > itemTop - windowHeight / 2) {
        found = item
      }
    }
    self.#setCurrent({ page: parseFloat(found.getAttribute('data-item-first')) })
    self.#paginate()
    // save scroll position
    const add = self.#additionalSpace()
    self.#scrollResume = scrollTop - found.offsetTop - add
    // replace state
    const linkOrigin = self.#url.origin || `${self.#url.protocol}//${self.#url.host}`
    if (linkOrigin === location.origin) {
      if (self.#url.href !== location.href) {
        history.replaceState(null, '', self.#url.href)
      }
    } else {
      console.error('Error: Xt.Infinitescroll cannot set history with different origin', linkOrigin)
    }
    // triggers
    const events = options.events?.on ? [...options.events.on.split(' ')] : []
    if (events.length) {
      if (options.events.scrollUp && self.#scrollTopOld > scrollTop) {
        for (const trigger of self.triggersUp) {
          const top = trigger.offsetTop
          if (scrollTop < top) {
            const triggerHandler = Xt.dataStorage.get(trigger, `${options.events.on}/${self.ns}`)
            triggerHandler({ target: trigger })
          }
        }
      }
      if (options.events.scrollDown && self.#scrollTopOld < scrollTop) {
        for (const trigger of self.triggersDown) {
          const top = trigger.offsetTop
          const bottom = top + trigger.offsetHeight
          if (scrollTop + windowHeight > bottom) {
            const triggerHandler = Xt.dataStorage.get(trigger, `${options.events.on}/${self.ns}`)
            triggerHandler({ target: trigger })
          }
        }
      }
    }
    self.#scrollTopOld = scrollTop
  }

  /**
   * request
   */
  #request() {
    const self = this
    // not if requesting
    if (!self.container.classList.contains('xt-infinitescroll-loading')) {
      // class
      self.container.classList.add('xt-infinitescroll-loading')
      // request
      const request = new XMLHttpRequest()
      request.open('GET', self.#url.href, true)
      request.onload = () => {
        // response
        self.#response({ request })
      }
      request.onerror = () => {
        // response
        self.#response({ request })
      }
      request.send()
    }
  }

  /**
   * response
   * @param {Object} params
   * @param {XMLHttpRequest|Object} params.request Html response
   */
  #response({ request } = {}) {
    const self = this
    // request
    if (request.status >= 200 && request.status <= 300) {
      self.#success({ request })
    } else {
      self.#error()
    }
  }

  /**
   * success
   * @param {Object} params
   * @param {XMLHttpRequest|Object} params.request Html response
   */
  #success({ request } = {}) {
    const self = this
    const options = self.options
    // set substitute
    const html = document.createElement('html')
    html.innerHTML = request.responseText.trim()
    const itemsContainer = html.querySelector(options.elements.itemsContainer)
    if (options.get && itemsContainer) {
      self.#populate({ itemsContainer })
    } else {
      // fake
      setTimeout(() => {
        self.#populate({ itemsContainer: self.#itemsFake.cloneNode(true) })
      }, 1000)
    }
  }

  /**
   * error
   */
  #error() {
    const self = this
    // class
    self.container.classList.remove('xt-infinitescroll-loading')
  }

  /**
   * populate
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.itemsContainer Items element
   */
  #populate({ itemsContainer } = {}) {
    const self = this
    const options = self.options
    // vars
    const items = itemsContainer.querySelectorAll(options.elements.item)
    // current page
    items[0].setAttribute('data-item-first', self.current)
    // populate dom
    const first = self.itemsContainer.querySelector(`${options.elements.item}:first-child`)
    let last
    for (const item of items) {
      if (self.inverse) {
        first.before(item)
      } else {
        // querySelector here because it always needs to be the last inside loop
        last = self.itemsContainer.querySelector(`${options.elements.item}:last-child`)
        last.after(item)
      }
    }
    // class
    self.container.classList.remove('xt-infinitescroll-loading')
    // update
    self.#update()
    self.#paginate()
    self.#eventScroll()
    // populate
    Xt.frame({
      el: self.container,
      ns: `${self.ns}Populate`,
      func: () => {
        // dispatch event
        self.container.dispatchEvent(new CustomEvent(`populate.${self.#componentNs}`))
      },
    })
  }

  /**
   * paginate
   */
  #paginate() {
    const self = this
    const options = self.options
    // paginate
    for (const pagination of self.paginations) {
      pagination.dataset.html = pagination.dataset.html ? pagination.dataset.html : pagination.innerHTML
      let html = pagination.dataset.html
      let regex = new RegExp('xt-num', 'ig')
      if (html.search(regex) !== -1) {
        html = html.replace(regex, self.current)
      }
      regex = new RegExp('xt-tot', 'ig')
      if (html.search(regex) !== -1) {
        html = html.replace(regex, options.max)
      }
      pagination.innerHTML = html
    }
  }

  /**
   * update
   */
  #update() {
    const self = this
    const options = self.options
    // class
    if (self.current <= options.min) {
      self.container.classList.add('xt-infinitescroll-first')
    }
    if (self.current >= options.max) {
      self.container.classList.add('xt-infinitescroll-last')
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
      self.container.dispatchEvent(new CustomEvent(`status.${self.#componentNs}`))
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
      // dispatch event
      if (!skipEvent) {
        self.container.dispatchEvent(new CustomEvent(`status.${self.#componentNs}`))
      }
    }
  }

  //
  // util
  //

  /**
   * additionalSpace
   * @return {Number} additionalSpace
   */
  #additionalSpace() {
    const self = this
    // logic
    let add = 0
    for (const additional of self.spaceAdditionals) {
      add += additional.offsetHeight
    }
    return add
  }

  /**
   * setCurrent
   * @param {Object} params
   * @param {Number} params.page Page number to set
   */
  #setCurrent({ page = null } = {}) {
    const self = this
    const options = self.options
    // check url
    const url = new URL(location.href)
    const searchParams = new URLSearchParams(url.search)
    // set current
    const get = searchParams.get(options.get)
    self.current = page !== null ? page : get ? parseFloat(get) : self.current
    searchParams.set(options.get, self.current)
    // set url
    url.search = searchParams.toString()
    self.#url = url
  }

  /**
   * reinit
   */
  reinit() {
    const self = this
    // reinit
    self.#initLogic()
  }

  /**
   * destroy
   */
  destroy() {
    const self = this
    const options = self.options
    // events
    const unloadHandler = Xt.dataStorage.get(window, `unload/${self.ns}`)
    removeEventListener('unload', unloadHandler)
    const beforeunloadHandler = Xt.dataStorage.get(window, `beforeunload/${self.ns}`)
    removeEventListener('beforeunload', beforeunloadHandler)
    const scrollHandler = Xt.dataStorage.get(window, `scroll/${self.ns}`)
    removeEventListener('scroll', scrollHandler)
    for (const trigger of [...Array.from(self.triggersUp), ...Array.from(self.triggersDown)]) {
      const triggerHandler = Xt.dataStorage.get(trigger, `${options.events.on}/${self.ns}`)
      trigger.removeEventListener(options.events.on, triggerHandler)
    }
    // initialized class
    self.container.removeAttribute(`data-${self.componentName}-init`)
    // set self
    Xt.remove({ name: self.componentName, el: self.container })
    // dispatch event
    self.container.dispatchEvent(new CustomEvent(`destroy.${self.#componentNs}`))
    // delete
    delete this
  }

  //
}

//
// options
//

Infinitescroll.componentName = 'xt-infinitescroll'
Infinitescroll.optionsDefault = {
  debug: false,
  // infinitescroll
  get: false,
  // quantity
  min: 1,
  max: 'Infinity',
  // event
  events: {
    scrollUp: false,
    scrollDown: false,
    on: 'click',
  },
  // element
  elements: {
    items: false,
    item: false,
    scrollUp: false,
    scrollDown: false,
    spaceAdditional: false,
    pagination: false,
  },
}

//
// export
//

Xt.Infinitescroll = Infinitescroll

//
// observe
//

if (typeof window !== 'undefined') {
  Xt.mount({
    matches: `[data-${Xt.Infinitescroll.componentName}]`,
    mount: ({ ref }) => {
      // vars

      const optionsMarkup = ref.getAttribute(`data-${Xt.Infinitescroll.componentName}`)
      const options = optionsMarkup ? RJSON.parse(optionsMarkup) : {}

      // init

      let self = new Xt.Infinitescroll(ref, options)

      // unmount

      return () => {
        self.destroy()
        self = null
      }
    },
  })
}
