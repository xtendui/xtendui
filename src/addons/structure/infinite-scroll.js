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
    self.current = self.options.current
    self.classes = self.options.class ? [...self.options.class.split(' ')] : []
    self.classesNoMore = self.options.classNoMore ? [...self.options.classNoMore.split(' ')] : []
    // elements
    self.scrollElement = self.object.querySelector(self.options.elements.scroll)
    self.triggerElement = self.object.querySelector(self.options.elements.trigger)
    self.itemsElement = self.object.querySelector(self.options.elements.items)
    // scroll
    if (self.options.events.scroll) {
      const scrollHandler = Xt.dataStorage.put(window, 'on.xt.scroll' + '/' + self.namespace, self.eventScrollHandler.bind(self))
      addEventListener('scroll', scrollHandler)
      self.eventScrollHandler()
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
   * @param {Boolean} initial
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
    // scroll
    if (!self.object.classList.contains(self.classes[0])) {
      const top = document.scrollingElement.scrollTop
      const bottom = self.scrollElement.offsetTop + self.scrollElement.offsetHeight
      const height = window.innerHeight
      if (top >= bottom - height) {
        // request
        self.request()
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
    self.current = self.current + options.add
    if (self.current <= options.max) {
      self.current = self.current > options.max ? options.max : self.current
      // class
      self.object.classList.add(...self.classes)
      // logic
      if (options.url) {
        // request
        const url = options.url + self.current
        const request = new XMLHttpRequest()
        request.open('GET', url, true)
        request.onload = () => {
          self.response(request)
        }
        request.onerror = () => {
          self.response(request)
        }
        request.send()
      } else {
        // fake
        clearTimeout(Xt.dataStorage.get(self.object, 'xt' + self.componentNamespace + 'FakeTimeout'))
        Xt.dataStorage.set(
          self.object,
          'xt' + self.componentNamespace + 'FakeTimeout',
          setTimeout(() => {
            // func
            const request = { responseText: self.object.outerHTML }
            self.success(request)
          }, 1000)
        )
      }
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
    let html = document.createElement('html')
    html.innerHTML = request.responseText.trim()
    let items = html.querySelector(self.options.elements.items).querySelectorAll(':scope > *')
    // populate dom
    for (const item of items) {
      self.itemsElement.querySelector(':scope > *:last-child').after(item)
    }
    // class
    self.object.classList.remove(...self.classes)
    // paginate
    self.paginate()
    // debug
    if (Xt.debug === true) {
      console.debug('Xt.debug: xt-infinite-scroll request success', request)
    }
    // garbage collector
    html = null
    items = null
    // listener dispatch
    self.object.dispatchEvent(new CustomEvent('replace.xt.infinite-scroll'))
  }

  /**
   * error
   * @param {XMLHttpRequest|Object} request Html response
   */
  error(request) {
    const self = this
    // class
    self.object.classList.remove(...self.classes)
    // debug
    if (Xt.debug === true) {
      console.debug('Xt.debug: xt-infinite-scroll request failed', request)
    }
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
  url: false,
  // element
  elements: {
    scroll: '[data-xt-infinite-scroll-scroll]',
    trigger: '[data-xt-infinite-scroll-trigger]',
    items: '[data-xt-infinite-scroll-items]',
  },
  // class
  class: 'infinite-scroll-loading',
  classNoMore: 'infinite-scroll-nomore',
  // quantity
  current: 1,
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
  mount: object => {
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
