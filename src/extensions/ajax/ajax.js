import { Xt } from 'xtend-library'
import 'xtend-library/src/core/toggle/toggle.js'
import RJSON from 'relaxed-json'

class Ajax extends Xt.Toggle {
  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} optionsCustom User options
   * @constructor
   */
  constructor(object, optionsCustom = {}) {
    super(object, optionsCustom)
    // prevent scroll on popstate
    /*
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual' // @TODO with Xt.ready
    }
    */
  }

  //
  // init
  //

  /**
   * init
   */
  init() {
    const self = this
    // vars
    self.locationFrom = self.locationTo || null // fix popstate
    self.locationTo = null
    // super
    super.init()
  }

  /**
   * init setup
   */
  initSetup() {
    super.initSetup()
    const self = this
    const options = self.options
    // queryElement
    self.queryElement = self.object.querySelector(options.query) || self.object
  }

  /**
   * init elements
   */
  initScopeElements() {
    super.initScopeElements()
    const self = this
    // remove external links
    for (const element of self.elements) {
      if (location.hostname !== element.hostname || element.getAttribute('href').split('#')[0] === '') {
        self.elements = Array.from(self.elements).filter(x => x !== element)
      }
    }
    // generate groups
    self.groupUrl = []
    for (const element of self.elements) {
      // populate
      const url = element.getAttribute('href').split('#')[0]
      if (!self.groupUrl[url]) {
        self.groupUrl[url] = []
      }
      self.groupUrl[url].push(element)
      // assign group
      element.setAttribute('data-xt-group', self.namespace + '-' + url)
    }
  }

  /**
   * init start
   * @param {Boolean} saveCurrents
   */
  initStart(saveCurrents = false) {
    const self = this
    // initial
    self.initial = true
    self.currentIndex = null
    // automatic initial currents
    const elements = self.getGroups()
    if (elements.length) {
      let found = false
      for (const element of elements) {
        const loc = location.pathname + location.search
        const url = element.pathname + element.search
        if (url !== '') {
          if (loc === url) {
            found = true
            // activate
            self.eventOn(element, true)
          } else {
            // deactivate
            self.eventOff(element, true)
          }
        }
      }
      if (!found) {
        // initial
        self.initial = false
      }
    } else {
      // initial
      self.initial = false
    }
    // detect url
    let url
    if (history.state && history.state.url) {
      // detect from history
      url = history.state.url
    } else {
      // detect from url location (absolute url without domain name)
      url = location.pathname + location.search
    }
    // set pushstate
    if (!self.locationFrom) {
      self.locationFrom = new URL(url, location)
    }
    self.pushState(url, document.title)
    // init events
    self.initEvents()
    // listener dispatch
    requestAnimationFrame(function() {
      const detail = self.eDetailSet()
      self.object.dispatchEvent(new CustomEvent('init.xt', { detail: detail }))
    })
  }

  /**
   * init events
   */
  initEvents() {
    super.initEvents()
    const self = this
    // event popstate
    window.onpopstate = self.eventPopstateHandler.bind(self)
  }

  //
  // handler
  //

  /**
   * element on handler
   * @param {Node|HTMLElement|EventTarget|Window} element
   * @param {Event} e
   */
  eventOnHandler(element, e) {
    // not when opening in new tab
    if (e.metaKey || e.ctrlKey) {
      return
    }
    // prevent links (needed for xt-ajax to go to links and propagate event if inside targets)
    e.preventDefault()
    // super
    super.eventOnHandler(element, e)
  }

  /**
   * element popstate handler
   * @param {Event} e
   */
  eventPopstateHandler(e) {
    const self = this
    // handler
    if (history.state && history.state.url) {
      // reinit currents
      self.initStart()
      // request set
      requestAnimationFrame(function() {
        self.ajaxRequest(null, history.state.url)
      })
    }
  }

  //
  // queue
  //

  /**
   * logic to execute on queue complete
   * @param {String} actionCurrent Current action
   * @param {Object} obj Queue object
   */
  queueComplete(actionCurrent, obj) {
    const self = this
    if (actionCurrent === 'On') {
      if (!self.initial) {
        // trigger ajax request
        self.ajaxRequest(obj.elements.queueEls[0], null)
      }
    }
    super.queueComplete(actionCurrent, obj)
  }

  //
  // special
  //

  /**
   * ajax request
   * @param {Node|HTMLElement|EventTarget|Window} element Base node
   * @param {String} url Url to get
   */
  ajaxRequest(element, url) {
    const self = this
    const options = self.options
    // url
    if (element) {
      url = element.getAttribute('href').split('#')[0]
    }
    // location
    self.locationFrom = self.locationTo || self.locationFrom // fix fast change page
    self.locationTo = new URL(url, location)
    // autoClose
    dispatchEvent(new CustomEvent('autoclose.trigger.xt'))
    // dispatch
    const detail = self.eDetailSet()
    self.object.dispatchEvent(new CustomEvent('request.xt', { detail: detail }))
    // duration
    self.detail.requestDate = new Date()
    clearTimeout(Xt.dataStorage.get(self.object, self.componentNamespace + 'AjaxDurationTimeout'))
    if (self.detail.request) {
      self.detail.request.abort()
    } // fix fast change page
    requestAnimationFrame(function() {
      self.detail.requestDuration = options.duration || Xt.animTime(self.queryElement)
      // call
      const request = new XMLHttpRequest()
      request.open('GET', url, true)
      request.onload = function() {
        self.ajaxResponse(element, url, request, self.detail.requestDate)
      }
      request.onerror = function() {
        self.ajaxResponse(element, url, request, self.detail.requestDate)
      }
      if (Xt.debug === true) {
        console.debug('xt-ajax request:', url)
      }
      request.send()
      self.detail.request = request
    })
  }

  /**
   * ajax response
   * @param {Node|HTMLElement|EventTarget|Window} element Base node
   * @param {String} url Url to get
   * @param {XMLHttpRequest} request Html response
   * @param {Date} date Html response
   */
  ajaxResponse(element, url, request, date) {
    const self = this
    // dispatch
    const detail = self.eDetailSet()
    self.object.dispatchEvent(new CustomEvent('response.xt', { detail: detail }))
    // duration
    self.detail.requestDuration -= new Date() - date
    if (self.detail.requestDuration > 0) {
      Xt.dataStorage.set(
        self.object,
        self.componentNamespace + 'AjaxDurationTimeout',
        setTimeout(function() {
          // request
          if (request.status >= 200 && request.status <= 300) {
            self.ajaxSuccess(element, url, request, date)
          } else {
            self.ajaxError(element, url, request)
          }
        }, self.detail.requestDuration)
      )
    } else {
      // request
      if (request.status >= 200 && request.status <= 300) {
        self.ajaxSuccess(element, url, request, date)
      } else {
        self.ajaxError(element, url, request)
      }
    }
  }

  /**
   * ajax success
   * @param {Node|HTMLElement|EventTarget|Window} element Base node
   * @param {String} url Url to get
   * @param {XMLHttpRequest} request Html response
   * @param {Date} date Html response
   */
  ajaxSuccess(element, url, request, date) {
    const self = this
    const options = self.options
    // debug
    if (Xt.debug === true) {
      console.debug('xt-ajax request success:', url)
    }
    // set substitute
    let html = document.createElement('html')
    html.innerHTML = request.responseText.trim()
    const title = html.querySelector('head title').innerHTML
    let replace = html.querySelector(options.query)
    // populate dom
    self.queryElement.outerHTML = replace.outerHTML
    // queryElement
    self.queryElement = self.object.querySelector(options.query) || self.object
    // pushstate
    self.pushState(url, title)
    // garbage collector
    html = null
    replace = null
    // dispatch
    const detail = self.eDetailSet()
    self.object.dispatchEvent(new CustomEvent('replace.xt', { detail: detail }))
    // reinit
    if (!self.initial && date === self.detail.requestDate) {
      // fix fast change page
      requestAnimationFrame(function() {
        self.initial = true
        self.init()
      })
    }
  }

  /**
   * ajax error
   * @param {Node|HTMLElement|EventTarget|Window} element Base node
   * @param {String} url Url to get
   * @param {XMLHttpRequest} request Html response
   */
  ajaxError(element, url, request) {
    const self = this
    // debug
    if (Xt.debug === true) {
      console.debug('xt-ajax request failed:', url)
    }
    // reinit currents
    self.initStart()
    // dispatch
    const detail = self.eDetailSet()
    self.object.dispatchEvent(new CustomEvent('replace.xt', { detail: detail }))
  }

  /**
   * history pushstate
   */
  pushState(url, title) {
    // push object state
    if (!history.state || !history.state.url || history.state.url !== url) {
      document.title = title
      history.pushState({ url: url, title: title }, title, url)
    } else {
      document.title = history.state.title
    }
  }
}

//
// options
//

Ajax.componentName = 'xt-ajax'
Ajax.optionsDefault = {
  elements: 'a[href]:not([href^="#"])',
  targets: false,
  on: 'click',
  min: 0,
  max: 1,
  instant: true,
  class: 'active active-ajax',
  query: 'body', // needs to be unique
  baseUrl: '/',
  duration: false,
  aria: false,
}
Xt.optionsGlobal[Ajax.componentName] = {}

//
// export
//

Xt.Ajax = Ajax

//
// observe
//

Xt.mount.push({
  matches: '[data-' + Xt.Ajax.componentName + ']',
  mount: function(object) {
    // vars

    const optionsMarkup = object.getAttribute('data-' + Xt.Ajax.componentName)
    const options = optionsMarkup ? RJSON.parse(optionsMarkup) : {}

    // init

    let self = new Xt.Ajax(object, options)

    // unmount

    const unmount = function() {
      self.destroy()
      self = null
    }
    return unmount
  },
})
