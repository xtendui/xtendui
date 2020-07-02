import { Xt } from 'xtend-library/src/xt.js'
import RJSON from 'relaxed-json'

/**
 * Infinitescroll
 */
class Infinitescroll {
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
    for(const item of items) {
      self.itemsElement.querySelector(':scope > *:last-child').after(item)
    }
    // class
    self.object.classList.remove(...self.classes)
    // paginate
    self.paginate()
    // debug
    if (Xt.debug === true) {
      console.debug('Xt.debug: xt-infinitescroll request success', request)
    }
    // garbage collector
    html = null
    items = null
    // listener dispatch
    self.object.dispatchEvent(new CustomEvent('replace.xt.infinitescroll'))
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
      console.debug('Xt.debug: xt-infinitescroll request failed', request)
    }
  }

  /**
   * paginate
   */
  paginate() {
    const self = this
    const options = self.options
    // paginate
    for (const el of self.object.querySelectorAll('[data-xt-infinitescroll-tot]')) {
      el.innerHTML = options.max
    }
    for (const el of self.object.querySelectorAll('[data-xt-infinitescroll-num]')) {
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

Infinitescroll.componentName = 'xt-infinitescroll'
Infinitescroll.optionsDefault = {
  url: false,
  current: 1,
  add: 1,
  max: 'Infinity',
  class: 'infinite-scroll-loading',
  classNoMore: 'infinite-scroll-nomore',
  events: {
    scroll: true,
    trigger: 'click',
  },
  elements: {
    scroll: '[data-xt-infinitescroll-scroll]',
    trigger: '[data-xt-infinitescroll-trigger]',
    items: '[data-xt-infinitescroll-items]',
  },
}

//
// export
//

Xt.Infinitescroll = Infinitescroll

//
// observe
//

Xt.mount.push({
  matches: '[data-' + Xt.Infinitescroll.componentName + ']',
  mount: object => {
    // vars

    const optionsMarkup = object.getAttribute('data-' + Xt.Infinitescroll.componentName)
    const options = optionsMarkup ? RJSON.parse(optionsMarkup) : {}

    // init

    let self = new Xt.Infinitescroll(object, options)

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  },
})
