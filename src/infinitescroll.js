import { Xt } from './xt'
import JSON5 from 'json5'

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
    self.optionsDefault = Xt.merge([self.constructor.optionsDefault, Xt.optionsGlobal[self.componentName]])
    self.optionsInitial = self.options = Xt.merge([self.optionsDefault, self.optionsCustom])
    // vars
    const options = self.options
    self.current = options.min
    // fake
    if (!options.get) {
      self.itemsFake = self.object.querySelector(options.elements.itemsContainer).cloneNode(true)
    }
  }

  /**
   * init logic
   */
  initLogic() {
    const self = this
    const options = self.options
    // set self
    Xt.set(self.componentName, self.object, self)
    // namespace
    const uniqueId = Xt.dataStorage.get(self.object, 'xtUniqueId')
    Xt.dataStorage.set(self.object, 'xtUniqueId', uniqueId || Xt.getuniqueId())
    self.ns = `${self.componentName}-${Xt.dataStorage.get(self.object, 'xtUniqueId')}`
    // elements
    self.elementsUp = self.object.querySelectorAll(options.elements.scrollUp)
    self.elementsDown = self.object.querySelectorAll(options.elements.scrollDown)
    self.itemsContainer = self.object.querySelector(options.elements.itemsContainer)
    self.spaceAdditionals = self.object.querySelectorAll(options.elements.spaceAdditional)
    self.paginations = self.object.querySelectorAll(options.elements.pagination)
    // events
    let unloadHandler = Xt.dataStorage.put(window, `unload/${self.ns}`, self.eventUnload.bind(self))
    addEventListener('unload', unloadHandler)
    let beforeunloadHandler = Xt.dataStorage.put(window, `beforeunload/${self.ns}`, self.eventBeforeunload.bind(self))
    addEventListener('beforeunload', beforeunloadHandler)
    let scrollHandler = Xt.dataStorage.put(window, `scroll/${self.ns}`, self.eventScroll.bind(self))
    addEventListener('scroll', scrollHandler)
    // update
    self.setCurrent()
    self.update()
    self.paginate()
    if (self.itemsContainer) {
      const found = self.itemsContainer.querySelector(options.elements.item)
      if (found) {
        found.setAttribute('data-item-first', self.current)
      }
    }
    // trigger
    for (const trigger of [...Array.from(self.elementsUp), ...Array.from(self.elementsDown)]) {
      const triggerHandler = Xt.dataStorage.put(
        trigger,
        `${options.events.trigger}}/${self.ns}`,
        self.eventTrigger.bind(self, trigger)
      )
      const events = [...options.events.on.split(' ')]
      for (const event of events) {
        trigger.addEventListener(event, triggerHandler)
      }
    }
    // resume state
    const add = self.additionalSpace()
    const state = history.state
    if (state && state.scrollResume) {
      const found = self.itemsContainer.querySelector(options.elements.item)
      document.scrollingElement.scrollTop = state.scrollResume + found.offsetTop + add
      //console.debug('xt-infinitescroll scrollResume', state.scrollResume, found.offsetTop, add)
    }
    // initialized class
    self.object.classList.add(`${self.componentName}-init`)
    // listener dispatch
    requestAnimationFrame(() => {
      self.object.dispatchEvent(new CustomEvent(`init.${self.componentNs}`))
    })
  }

  //
  // methods
  //

  /**
   * trigger
   */
  eventTrigger(trigger) {
    const self = this
    const options = self.options
    // request
    const up = parseFloat(trigger.getAttribute('data-xt-infinitescroll-up'))
    const down = parseFloat(trigger.getAttribute('data-xt-infinitescroll-down'))
    const amount = up || down
    if (!amount) {
      self.setCurrent(options.min)
      window.location = self.url.href
    } else {
      let current = self.current + amount
      current = current < options.min ? options.min : current
      current = current > options.max ? options.max : current
      const items = self.itemsContainer.querySelectorAll(`[data-item-first="${current}"]`)
      if (current !== self.current && !items.length) {
        self.setCurrent(current)
        self.inverse = !!up
        self.request()
      }
    }
  }

  /**
   * unload
   */
  eventUnload() {
    const self = this
    // save scroll position
    if (self.scrollResume) {
      document.scrollingElement.scrollTop = 0
    }
  }

  /**
   * unload
   */
  eventBeforeunload() {
    const self = this
    // save scroll position
    if (self.scrollResume) {
      history.replaceState({ scrollResume: self.scrollResume }, '', self.url.href)
    }
  }

  /**
   * scroll
   */
  eventScroll() {
    const self = this
    const options = self.options
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
    self.setCurrent(parseFloat(found.getAttribute('data-item-first')))
    self.paginate()
    // save scroll position
    const add = self.additionalSpace()
    self.scrollResume = scrollTop - found.offsetTop - add
    //console.debug('xt-infinitescroll scrollResume', self.scrollResume, found.offsetTop, add)
    // replace state
    const linkOrigin = self.url.origin || `${self.url.protocol}//${self.url.host}`
    if (linkOrigin === location.origin) {
      if (self.url.href !== location.href) {
        history.replaceState(null, '', self.url.href)
        //console.debug('xt-infinitescroll history replace', self.url.href)
      }
    } else {
      console.error('xt-infinitescroll cannot set history with different origin', linkOrigin)
    }
    // triggers
    if (options.events.scrollUp && self.scrollTopOld > scrollTop) {
      for (const trigger of self.elementsUp) {
        const top = trigger.offsetTop
        if (scrollTop < top) {
          const triggerHandler = Xt.dataStorage.get(trigger, `${options.events.trigger}}/${self.ns}`)
          triggerHandler({ target: trigger })
        }
      }
    }
    if (options.events.scrollDown && self.scrollTopOld < scrollTop) {
      for (const trigger of self.elementsDown) {
        const top = trigger.offsetTop
        const bottom = top + trigger.offsetHeight
        if (scrollTop + windowHeight > bottom) {
          const triggerHandler = Xt.dataStorage.get(trigger, `${options.events.trigger}}/${self.ns}`)
          triggerHandler({ target: trigger })
        }
      }
    }
    self.scrollTopOld = scrollTop
  }

  /**
   * request
   */
  request() {
    const self = this
    // not if requesting
    if (!self.object.classList.contains('xt-infinitescroll-loading')) {
      // class
      self.object.classList.add('xt-infinitescroll-loading')
      // request
      const request = new XMLHttpRequest()
      request.open('GET', self.url.href, true)
      request.onload = () => {
        //console.debug('xt-infinitescroll request success', request, self.url)
        // response
        self.response(request)
      }
      request.onerror = () => {
        //console.debug('xt-infinitescroll request failed', request)
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
    const options = self.options
    // set substitute
    const html = document.createElement('html')
    html.innerHTML = request.responseText.trim()
    const itemsContainer = html.querySelector(options.elements.itemsContainer)
    if (options.get && itemsContainer) {
      self.populate(itemsContainer)
    } else {
      //console.debug('xt-infinitescroll fake populate because no items found')
      // fake
      setTimeout(() => {
        self.populate(self.itemsFake.cloneNode(true))
      }, 1000)
    }
  }

  /**
   * error
   */
  error() {
    const self = this
    // class
    self.object.classList.remove('xt-infinitescroll-loading')
  }

  /**
   * populate
   * @param {Node|HTMLElement|EventTarget|Window} itemsContainer Items element
   */
  populate(itemsContainer) {
    const self = this
    const options = self.options
    // vars
    let items = itemsContainer.querySelectorAll(options.elements.item)
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
    self.object.classList.remove('xt-infinitescroll-loading')
    // update
    self.update()
    self.paginate()
    self.eventScroll()
    // listener dispatch
    self.object.dispatchEvent(new CustomEvent(`populate.${self.componentNs}`))
  }

  /**
   * paginate
   */
  paginate() {
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
  update() {
    const self = this
    const options = self.options
    // class
    if (self.current <= options.min) {
      self.object.classList.add('xt-infinitescroll-first')
    }
    if (self.current >= options.max) {
      self.object.classList.add('xt-infinitescroll-last')
    }
  }

  //
  // util
  //

  /**
   * additionalSpace
   * @return {Number} additionalSpace
   */
  additionalSpace() {
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
    self.current = page !== null ? page : get ? parseFloat(get) : self.current
    searchParams.set(options.get, self.current)
    // set url
    url.search = searchParams.toString()
    self.url = url
    //console.debug('xt-infinitescroll current', self.current)
  }

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
    const options = self.options
    // events
    let unloadHandler = Xt.dataStorage.get(window, `unload/${self.ns}`)
    removeEventListener('unload', unloadHandler)
    let beforeunloadHandler = Xt.dataStorage.get(window, `beforeunload/${self.ns}`)
    removeEventListener('beforeunload', beforeunloadHandler)
    let scrollHandler = Xt.dataStorage.get(window, `scroll/${self.ns}`)
    removeEventListener('scroll', scrollHandler)
    for (const trigger of [...Array.from(self.elementsUp), ...Array.from(self.elementsDown)]) {
      const triggerHandler = Xt.dataStorage.get(trigger, `${options.events.trigger}}/${self.ns}`)
      trigger.removeEventListener(options.events.trigger, triggerHandler)
    }
    // initialized class
    self.object.classList.remove(`${self.componentName}-init`)
    // set self
    Xt.remove(self.componentName, self.object)
    // listener dispatch
    self.object.dispatchEvent(new CustomEvent(`destroy.${self.componentNs}`))
  }

  //
}

//
// options
//

Infinitescroll.componentName = 'xt-infinitescroll'
Infinitescroll.optionsDefault = {
  // infiniteScroll
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
      const options = optionsMarkup ? JSON5.parse(optionsMarkup) : {}

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