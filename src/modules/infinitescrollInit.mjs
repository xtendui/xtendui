/*!
 * Xtend UI (https://xtendui.com/)
 * @copyright (c) 2017-2025 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/master/LICENSE.txt)
 */

import { Xt } from '../xt.mjs'

/**
 * InfinitescrollInit
 */
export class InfinitescrollInit {
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
    // vars
    const options = self.options
    self.current = Math.floor(options.min / options.perPage)
    // fake
    if (!options.get) {
      self._itemsFake = self.container.querySelector(options.elements.itemsContainer).cloneNode(true)
    }
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
    self.scrollUp = self.container.querySelectorAll(options.elements.scrollUp)
    self.scrollDown = self.container.querySelectorAll(options.elements.scrollDown)
    self.itemsContainer = self.container.querySelector(options.elements.itemsContainer)
    self.spaceAdditionals = self.container.querySelectorAll(options.elements.spaceAdditional)
    self.paginations = self.container.querySelectorAll(options.elements.pagination)
    // events
    if (options.nocache) {
      const beforeunloadHandler = Xt.dataStorage.put(
        window,
        `beforeunload/${self.ns}`,
        self._eventBeforeunload.bind(self),
      )
      addEventListener('beforeunload', beforeunloadHandler)
    }
    const scrollHandler = Xt.dataStorage.put(window, `scroll/${self.ns}`, self._eventScroll.bind(self))
    addEventListener('scroll', scrollHandler)
    // trigger
    const events = options.events?.on ? options.events.on.split(' ') : []
    if (events.length) {
      for (const trigger of [...Array.from(self.scrollUp), ...Array.from(self.scrollDown)]) {
        const triggerHandler = Xt.dataStorage.put(
          trigger,
          `${options.events.on}/${self.ns}`,
          self._eventTrigger.bind(self, { trigger }),
        )
        for (const event of events) {
          trigger.addEventListener(event, triggerHandler)
        }
      }
    }
    // initial
    self._initStart()
    // setup
    // dispatch event
    self.container.dispatchEvent(new CustomEvent(`setup.${self._componentNs}`))
    // needs frameDouble after ondone
    Xt.frameDouble({
      el: self.container,
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
      ns: `${self.ns}Init`,
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
    const options = self.options
    // disabled
    if (self.disabled) {
      return
    }
    // logic
    self._setCurrent()
    self._update()
    self._paginate()
    self._prefetch()
    if (self.itemsContainer) {
      const found = self.itemsContainer.querySelector(options.elements.item)
      if (found) {
        found.setAttribute('data-item-first', self.current)
      }
    }
    // resume state
    if (options.nocache) {
      const add = self._additionalSpace()
      const state = history.state
      if (state && state[`scrollResume${self._componentNs}`]) {
        // need readyState complete to properly scroll after page load browsers scrolling
        Xt.ready({
          state: 'complete',
          func: () => {
            requestAnimationFrame(() => {
              const found = self.itemsContainer.querySelector(options.elements.item)
              document.scrollingElement.scrollTop = state[`scrollResume${self._componentNs}`] + found.offsetTop + add
            })
          },
        })
      }
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
  _eventTrigger({ trigger } = {}) {
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
      self._setCurrent({ page: Math.floor(options.min / options.perPage) })
      location = self._url.href
    } else {
      const current = self._getNext({ amount })
      const itemCurrent = self.itemsContainer.querySelector(`[data-item-first="${current}"]`)
      if (current !== self.current && !itemCurrent) {
        self._setCurrent({ page: current })
        self.inverse = !!up
        // not if requesting
        if (!self.container.classList.contains('xt-infinitescroll-loading')) {
          self.container.classList.add('xt-infinitescroll-loading')
          Xt.perf({
            func: () => {
              self._request()
              self._prefetch({ trigger })
            },
          })
        }
      }
    }
  }

  /**
   * get next page index
   * @param {Object} params
   * @param {Number} params.amount
   */
  _getNext({ amount } = {}) {
    const self = this
    const options = self.options
    // return next index
    let current = self.current + amount
    const min = Math.floor(options.min / options.perPage)
    const max = Math.ceil(options.max / options.perPage)
    current = current < min ? min : current
    current = current > max ? max : current
    return current
  }

  /**
   * unload
   */
  _eventBeforeunload() {
    const self = this
    // disabled
    if (self.disabled) {
      return
    }
    // save scroll position
    if (self._scrollResume) {
      const state = {}
      state[`scrollResume${self._componentNs}`] = self._scrollResume
      history.replaceState(state, '', self._url.href)
    }
  }

  /**
   * scroll
   */
  _eventScroll() {
    const self = this
    const options = self.options
    // disabled
    if (self.disabled || self._loading) {
      return
    }
    // scroll
    const scrollTop = document.scrollingElement.scrollTop
    const windowHeight = window.innerHeight
    // current page
    const items = Array.from(self.itemsContainer.querySelectorAll('[data-item-first]')).reverse()
    let found = items[items.length - 1]
    for (const item of items) {
      const itemTop = item.getBoundingClientRect().top
      if (itemTop < windowHeight / 2) {
        found = item
        break
      }
    }
    self._setCurrent({ page: parseFloat(found.getAttribute('data-item-first')) })
    self._paginate()
    // save scroll position
    if (options.nocache) {
      const add = self._additionalSpace()
      self._scrollResume = scrollTop - found.offsetTop - add
    }
    // replace state
    const linkOrigin = self._url.origin || `${self._url.protocol}//${self._url.host}`
    if (linkOrigin === location.origin) {
      if (self._url.href !== location.href) {
        history.replaceState(null, '', self._url.href)
      }
    } else {
      console.error('Error: Xt.Infinitescroll cannot set history with different origin', linkOrigin)
    }
    // triggers
    const events = options.events?.on ? options.events.on.split(' ') : []
    if (events.length) {
      if (options.events.scrollUp && self._scrollTopOld > scrollTop) {
        for (const trigger of self.scrollUp) {
          const top = trigger.offsetTop
          if (scrollTop < top) {
            const triggerHandler = Xt.dataStorage.get(trigger, `${options.events.on}/${self.ns}`)
            triggerHandler({ target: trigger })
          }
        }
      }
      if (options.events.scrollDown && self._scrollTopOld <= scrollTop) {
        for (const trigger of self.scrollDown) {
          const top = trigger.offsetTop
          const bottom = top + trigger.offsetHeight
          if (scrollTop + windowHeight > bottom) {
            const triggerHandler = Xt.dataStorage.get(trigger, `${options.events.on}/${self.ns}`)
            triggerHandler({ target: trigger })
          }
        }
      }
    }
    self._scrollTopOld = scrollTop
  }

  /**
   * request
   */
  _request() {
    const self = this
    // request
    self._loading = true
    fetch(self._url.href, {
      method: 'GET',
    })
      .then(response => {
        if (response.ok) {
          return response.text()
        } else {
          return Promise.reject(response)
        }
      })
      .then(text => {
        self._success({ text })
      })
      .catch(() => {
        self._error()
      })
  }

  /**
   * success
   * @param {Object} params
   * @param {String} params.text Html response
   */
  _success({ text } = {}) {
    const self = this
    const options = self.options
    // set substitute
    const html = document.createElement('html')
    html.innerHTML = text
    self.loadedHtml = html
    const itemsContainer = html.querySelector(options.elements.itemsContainer)
    if (options.get && itemsContainer) {
      self._loading = false
      self._populate({ itemsContainer })
    } else {
      // fake
      setTimeout(() => {
        self._loading = false
        self._populate({ itemsContainer: self._itemsFake.cloneNode(true) })
      }, 1000)
    }
  }

  /**
   * error
   */
  _error() {
    const self = this
    // class
    self._loading = false
    self.container.classList.remove('xt-infinitescroll-loading')
  }

  /**
   * populate
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.itemsContainer Items element
   */
  _populate({ itemsContainer } = {}) {
    const self = this
    const options = self.options
    // vars
    const items = itemsContainer.querySelectorAll(options.elements.item)
    // current page
    items[0].setAttribute('data-item-first', self.current)
    // populate dom
    let last
    const all = self.itemsContainer.querySelectorAll(`${options.elements.item}`)
    for (const item of items) {
      if (self.inverse) {
        const first = all[0]
        first.before(item)
      } else {
        // repeat code querySelectorAll because it always needs to be the last inside loop
        const all = self.itemsContainer.querySelectorAll(`${options.elements.item}`)
        last = all[all.length - 1]
        last.after(item)
      }
    }
    // class
    self.container.classList.remove('xt-infinitescroll-loading')
    // update
    self._update()
    self._paginate()
    self._eventScroll()
    // populate
    Xt.frame({
      el: self.container,
      ns: `${self.ns}Populate`,
      func: () => {
        // dispatch event
        self.container.dispatchEvent(new CustomEvent(`populate.${self._componentNs}`))
      },
    })
  }

  /**
   * paginate
   */
  _paginate() {
    const self = this
    const options = self.options
    // paginate
    for (const pagination of self.paginations) {
      if (!pagination.dataset.current || self.current > parseFloat(pagination.dataset.current)) {
        pagination.dataset.current = self.current
        pagination.dataset.html = pagination.dataset.html ? pagination.dataset.html : pagination.innerHTML
        let html = pagination.dataset.html
        let regex = new RegExp('xt-num', 'ig')
        if (html.search(regex) !== -1) {
          let current = self.current * options.perPage
          current = current > options.max ? options.max : current
          html = html.replace(regex, current)
        }
        regex = new RegExp('xt-tot', 'ig')
        if (html.search(regex) !== -1) {
          html = html.replace(regex, options.max)
        }
        pagination.innerHTML = Xt.sanitize(html)
      }
    }
  }

  /**
   * update
   */
  _update() {
    const self = this
    const options = self.options
    // class
    if (self.current <= Math.floor(options.min / options.perPage)) {
      self.container.classList.add('xt-infinitescroll-first')
    }
    if (self.current >= Math.ceil(options.max / options.perPage)) {
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
   * additionalSpace
   * @return {Number} additionalSpace
   */
  _additionalSpace() {
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
  _setCurrent({ page = null } = {}) {
    const self = this
    const options = self.options
    // check url
    const url = new URL(location.href)
    const searchParams = new URLSearchParams(url.search)
    // set current
    const get = searchParams.get(options.get)
    self.current = page !== null ? page : get ? parseFloat(get) : self.current
    searchParams.set(options.get, self.current)
    url.search = searchParams.toString()
    self._url = url
  }

  /**
   * prefetch next page
   */
  _prefetch({ trigger } = {}) {
    const self = this
    const options = self.options
    // loop scroll down
    if (options.prefetch) {
      const triggers = trigger ? [trigger] : [...Array.from(self.scrollUp), ...Array.from(self.scrollDown)]
      for (const trigger of triggers) {
        const up = parseFloat(trigger.getAttribute('data-xt-infinitescroll-up'))
        const down = parseFloat(trigger.getAttribute('data-xt-infinitescroll-down'))
        const amount = up || down
        // check url
        const url = new URL(location.href)
        const searchParams = new URLSearchParams(url.search)
        // prefetch
        const next = self._getNext({ amount })
        if (self.current !== next) {
          searchParams.set(options.get, next)
          url.search = searchParams.toString()
          const link = document.createElement('link')
          link.rel = 'prefetch'
          link.href = url
          link.as = 'fetch'
          document.head.appendChild(link)
        }
      }
    }
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
    const options = self.options
    // events
    if (options.nocache) {
      const beforeunloadHandler = Xt.dataStorage.get(window, `beforeunload/${self.ns}`)
      removeEventListener('beforeunload', beforeunloadHandler)
    }
    const scrollHandler = Xt.dataStorage.get(window, `scroll/${self.ns}`)
    removeEventListener('scroll', scrollHandler)
    for (const trigger of [...Array.from(self.scrollUp), ...Array.from(self.scrollDown)]) {
      const triggerHandler = Xt.dataStorage.get(trigger, `${options.events.on}/${self.ns}`)
      trigger.removeEventListener(options.events.on, triggerHandler)
    }
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
