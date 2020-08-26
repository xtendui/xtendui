import { Xt } from 'xtend-library'
import JSON5 from 'json5'

/**
 * InfiniteScroll
 */
class InfiniteScroll {
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
    self.componentName = self.constructor.componentName
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
    // vars
    self.current = 1
    self.classes = self.options.class ? [...self.options.class.split(' ')] : []
    self.classesNoMore = self.options.classNoMore ? [...self.options.classNoMore.split(' ')] : []
    // elements
    self.scrollElement = self.object.querySelector(self.options.elements.scroll)
    self.triggerElement = self.object.querySelector(self.options.elements.trigger)
    self.itemsElement = self.object.querySelector(self.options.elements.items)
    // scroll
    const scrollHandler = Xt.dataStorage.put(window, 'on.xt.scroll' + '/' + self.namespace, self.eventScrollHandler.bind(self))
    addEventListener('scroll', scrollHandler)
    // setCurrent
    self.setCurrent()
    const found = self.itemsElement.querySelector(self.options.elements.item)
    found.setAttribute('data-xt-infinitescroll-item-first', self.current)
    // resume state
    const state = history.state
    if (state && state.scrollResume) {
      document.scrollingElement.scrollTop = state.scrollResume
      // debug
      if (Xt.debug === true) {
        console.debug('Xt.debug: xt-infinitescroll scrollResume', state.scrollResume)
      }
    }
    // paginate
    self.paginate()
    // trigger
    if (self.options.events.trigger) {
      self.triggerElement.addEventListener(self.options.events.trigger, self.eventTrigger.bind(self))
    }
    // initialized class
    self.object.classList.add(self.componentName)
    // @FIX raf because after .xt custom listeners
    requestAnimationFrame(() => {
      // listener dispatch
      self.object.dispatchEvent(new CustomEvent('init.xt'))
    })
  }

  //
  // handler
  //

  /**
   * element on handler
   * @param {Event} e
   */
  eventScrollHandler(e = null) {
    const self = this
    Xt.eventDelay(
      e,
      self.object,
      () => {
        // handler
        self.eventScroll(e)
      },
      self.componentNamespace + 'Scroll'
    )
  }

  //
  // methods
  //

  /**
   * trigger
   */
  eventTrigger() {
    const self = this
    // request
    self.request()
  }

  /**
   * scroll
   */
  eventScroll() {
    const self = this
    // not if requesting
    if (!self.object.classList.contains(self.classes[0])) {
      // scroll
      const top = document.scrollingElement.scrollTop
      const height = window.innerHeight
      // current page
      let found = self.itemsElement.querySelector(self.options.elements.item)
      const scrollInitial = found.offsetTop
      const items = self.itemsElement.querySelectorAll('[data-xt-infinitescroll-item-first]')
      for (const item of items) {
        const itemTop = item.offsetTop
        if (top > itemTop - height) {
          found = item
        }
      }
      self.setCurrent(parseFloat(found.getAttribute('data-xt-infinitescroll-item-first')))
      // replace state
      const scrollResume = top + scrollInitial - found.offsetTop
      history.replaceState({ scrollResume: scrollResume }, null, self.url.href)
      // request if on bottom
      if (self.options.events.scroll) {
        const bottom = self.scrollElement.offsetTop + self.scrollElement.offsetHeight
        if (top > bottom - height) {
          self.request()
        }
      }
    }
  }

  /**
   * request
   */
  request() {
    const self = this
    const options = self.options
    // current
    if (self.current < options.max) {
      self.current = self.current > options.max ? options.max : self.current
      // class
      self.object.classList.add(...self.classes)
      // params
      self.setCurrentNext()
      // request
      const request = new XMLHttpRequest()
      request.open('GET', encodeURI(self.url.href), true)
      request.onload = () => {
        // debug
        if (Xt.debug === true) {
          console.debug('Xt.debug: xt-infinitescroll request success', request, self.url)
        }
        // response
        self.response(request)
      }
      request.onerror = () => {
        // debug
        if (Xt.debug === true) {
          console.debug('Xt.debug: xt-infinitescroll request failed', request)
        }
        // response
        self.response(request)
      }
      request.send()
    }
  }

  /**
   * response
   * @param {XMLHttpRequest|Object} request Html response
   */
  response(request) {
    const self = this
    // request
    if (request.status >= 200 && request.status <= 300) {
      self.success(request)
    } else {
      self.error(request)
    }
  }

  /**
   * success
   * @param {XMLHttpRequest|Object} request Html response
   */
  success(request) {
    const self = this
    // set substitute
    const html = document.createElement('html')
    html.innerHTML = request.responseText.trim()
    const items = html.querySelector(self.options.elements.items)
    if (items) {
      self.populate(items)
    } else {
      // fake
      setTimeout(() => {
        self.populate(self.object.querySelector(self.options.elements.items).cloneNode(true))
      }, 1000)
    }
  }

  /**
   * error
   */
  error() {
    const self = this
    // class
    self.object.classList.remove(...self.classes)
  }

  /**
   * populate
   * @param {Node|HTMLElement|EventTarget|Window} items Items to add
   */
  populate(items) {
    const self = this
    // current page
    const found = items.querySelector(self.options.elements.item)
    found.setAttribute('data-xt-infinitescroll-item-first', self.current)
    // populate dom
    for (const item of items.querySelectorAll(':scope > *')) {
      self.itemsElement.querySelector(':scope > *:last-child').after(item)
    }
    // class
    self.object.classList.remove(...self.classes)
    // paginate
    self.paginate()
    // listener dispatch
    self.object.dispatchEvent(new CustomEvent('replace.xt.infinitescroll'))
  }

  /**
   * paginate
   */
  paginate() {
    const self = this
    const options = self.options
    // paginate
    for (const el of self.object.querySelectorAll('[data-xt-infinite-scroll-tot]')) {
      el.innerHTML = options.max
    }
    for (const el of self.object.querySelectorAll('[data-xt-infinite-scroll-num]')) {
      el.innerHTML = self.current
    }
    // class
    if (self.current >= options.max) {
      self.object.classList.add(...self.classesNoMore)
    }
  }

  //
  // util
  //

  /**
   * setCurrent
   * @param {Number} page Page number to set
   */
  setCurrent(page = null) {
    const self = this
    const options = self.options
    // check url
    const url = new URL(location.href)
    const searchParams = new URLSearchParams(url.search)
    // set current
    const get = searchParams.get(options.get)
    self.current = page ? page : get ? parseFloat(get) : self.current
    searchParams.set(options.get, self.current)
    // set url
    url.search = searchParams.toString()
    self.url = url
  }

  /**
   * setCurrentNext
   */
  setCurrentNext() {
    const self = this
    const options = self.options
    // check url
    const url = new URL(location.href)
    const searchParams = new URLSearchParams(url.search)
    // set current
    const get = searchParams.get(options.get)
    self.current = get ? parseFloat(get) + options.add : self.current + options.add
    searchParams.set(options.get, self.current)
    // set url
    url.search = searchParams.toString()
    self.url = url
  }

  /**
   * destroy
   */
  destroy() {
    const self = this
    // class
    if (self.options.scroll) {
      removeEventListener('scroll', self.eventScroll.bind(self))
    }
    // set self
    Xt.remove(self.componentName, self.object)
    // listener dispatch
    self.object.dispatchEvent(new CustomEvent('destroy.xt'))
  }

  //
}

//
// options
//

InfiniteScroll.componentName = 'xt-infinite-scroll'
InfiniteScroll.optionsDefault = {
  // infiniteScroll
  get: 'page',
  // element
  elements: {
    scroll: '[data-xt-infinite-scroll-scroll]',
    trigger: '[data-xt-infinite-scroll-trigger]',
    items: '[data-xt-infinite-scroll-items]',
    item: ':scope > *',
  },
  // class
  class: 'infinite-scroll-loading',
  classNoMore: 'infinite-scroll-nomore',
  // quantity
  add: 1,
  max: 'Infinity',
  // event
  events: {
    scroll: true,
    trigger: 'click',
  },
}

//
// export
//

Xt.InfiniteScroll = InfiniteScroll

//
// observe
//

Xt.mount.push({
  matches: '[data-' + Xt.InfiniteScroll.componentName + ']',
  mount: (object) => {
    // vars

    const optionsMarkup = object.getAttribute('data-' + Xt.InfiniteScroll.componentName)
    const options = optionsMarkup ? JSON5.parse(optionsMarkup) : {}

    // init

    let self = new Xt.InfiniteScroll(object, options)

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  },
})
