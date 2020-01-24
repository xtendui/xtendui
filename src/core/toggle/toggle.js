import RJSON from 'relaxed-json'
import { Xt } from 'xtend-library'

class Toggle {
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
    self.componentNamespace = self.componentName.replace(/^[^a-z]+|[ ,#_:.-]+/gi, '')
    Xt.destroyAndInit(self)
  }

  //
  // init
  //

  /**
   * init
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} optionsCustom User options
   */
  init(object = false, optionsCustom = false) {
    const self = this
    self.object = object || self.object
    self.optionsCustom = optionsCustom || self.optionsCustom
    // vars
    self.classes = []
    self.classesIn = []
    self.classesOut = []
    self.classesInitial = []
    self.classesInverse = []
    self.elements = []
    self.targets = []
    self.currentIndex = null
    self.initialCurrents = []
    self.detail = {}
    self.disabled = false
    self.detail.queueOn = []
    self.detail.queueOff = []
    self.detail.inverse = false
    self.detail.autopaused = false
    self.destroyElements = [document, window, self.object]
    // init
    self.initVars()
    self.initSetup()
    self.initLogic()
  }

  /**
   * init vars
   */
  initVars() {
    const self = this
    // options
    if (self.constructor.optionsDefaultSuper) {
      self.optionsDefault = Xt.merge([self.constructor.optionsDefaultSuper, self.constructor.optionsDefault])
    } else {
      self.optionsDefault = self.constructor.optionsDefaultSuper
    }
    self.optionsDefault = Xt.merge([self.optionsDefault, Xt.optionsGlobal[self.componentName]])
    self.options = Xt.merge([self.optionsDefault, self.optionsCustom ? self.optionsCustom : {}])
    // classes
    self.classes = self.options.class ? [...self.options.class.split(' ')] : []
    self.classesIn = self.options.classIn ? [...self.options.classIn.split(' ')] : []
    self.classesOut = self.options.classOut ? [...self.options.classOut.split(' ')] : []
    self.classesInitial = self.options.classInitial ? [...self.options.classInitial.split(' ')] : []
    self.classesInverse = self.options.classInverse ? [...self.options.classInverse.split(' ')] : []
  }

  /**
   * init setup
   */
  initSetup() {
    const self = this
    const options = self.options
    // setup (based on xtend mode)
    if (options.targets && options.targets.indexOf('#') !== -1) {
      // xtend unique mode
      self.mode = 'unique'
      self.container = document.documentElement
      options.max = Infinity
      self.namespace = self.componentName + '-' + options.targets.toString() + '-' + self.classes.toString()
    } else {
      // xtend multiple mode
      self.mode = 'multiple'
      self.container = self.object
      const uniqueId = Xt.dataStorage.get(self.container, 'xtUniqueId')
      Xt.dataStorage.set(self.container, 'xtUniqueId', uniqueId || Xt.getuniqueId())
      self.namespace = self.componentName + '-' + Xt.dataStorage.get(self.container, 'xtUniqueId')
    }
    // final namespace
    self.namespace = self.namespace.replace(/^[^a-z]+|[ ,#_:.-]+/gi, '')
    // currents array based on namespace (so shared between Xt objects)
    self.setCurrents([])
  }

  /**
   * init logic
   * @param {Boolean} saveCurrents
   */
  initLogic(saveCurrents = true) {
    const self = this
    // init
    self.enable()
    self.initScope()
    self.initAria()
    self.initStart(saveCurrents)
    self.eventStatus()
  }

  /**
   * init elements, targets and currents
   */
  initScope() {
    const self = this
    // elements
    self.initScopeElements()
    // targets
    self.initScopeTargets()
  }

  /**
   * init elements
   */
  initScopeElements() {
    const self = this
    const options = self.options
    // elements
    if (options.elements) {
      let arr = Array.from(Xt.arrSingle(self.container.querySelectorAll(options.elements)))
      arr = arr.filter(x => !x.closest('.xt-ignore')) // filter out ignore
      arr = arr.filter(x => !x.closest('[data-xt-nav]')) // filter out nav
      self.elements = arr
      self.destroyElements.push(...self.elements)
      // reset namespace
      Xt.dataStorage.remove(self.namespace, 'xtNamespaceDone')
    }
    // xtend unique mode
    if (!self.elements.length) {
      self.elements = Xt.arrSingle(self.object)
      // set namespace for next frame
      requestAnimationFrame(() => {
        let arr = Xt.dataStorage.get(self.namespace, 'xtNamespace')
        arr = arr.filter(x => !x.closest('.xt-ignore')) // filter out ignore
        if (arr.length) {
          // fix when using shadow dom doesn't query deep
          self.elements = arr
          self.destroyElements.push(...self.elements)
        }
        // reset namespace
        Xt.dataStorage.remove(self.namespace, 'xtNamespaceDone')
      })
    }
    // set self
    for (const el of self.elements) {
      Xt.set(self.componentName, el, self)
    }
  }

  /**
   * init targets
   */
  initScopeTargets() {
    const self = this
    const options = self.options
    // targets
    if (options.targets) {
      let arr = Array.from(self.container.querySelectorAll(options.targets))
      // arr = arr.filter(x => !x.parentElement.closest(options.targets)) // filter out parent
      arr = arr.filter(x => !x.closest('.xt-ignore')) // filter out ignore
      self.targets = arr
      self.destroyElements.push(...self.targets)
    }
    // set self
    for (const tr of self.targets) {
      Xt.set(self.componentName, tr, self)
    }
  }

  /**
   * init start
   * @param {Boolean} saveCurrents
   */
  initStart(saveCurrents = false) {
    const self = this
    const options = self.options
    // status
    self.eventStatusHandler()
    // initial
    let currents = 0
    self.initial = true
    self.initialContinue = false
    self.currentIndex = null
    // [disabled]
    self.destroyDisabled()
    // reset namespace
    if (!Xt.dataStorage.get(self.namespace, 'xtNamespaceDone')) {
      Xt.dataStorage.set(self.namespace, 'xtNamespace', [])
      Xt.dataStorage.set(self.namespace, 'xtNamespaceDone', true)
    }
    // set namespace for next frame
    for (const el of self.elements) {
      let arr = Xt.dataStorage.get(self.namespace, 'xtNamespace')
      arr.push(el)
      Xt.dataStorage.set(self.namespace, 'xtNamespace', arr)
    }
    // automatic initial currents
    const elements = self.getGroups()
    if (elements.length) {
      // check elements
      for (const element of elements) {
        // reset
        const found = self.initReset(element, saveCurrents)
        if (found && currents < options.max) {
          // initial
          currents++
          // reactivate
          requestAnimationFrame(() => {
            // activate
            self.eventOn(element, true)
          })
        }
      }
      // if currents < min
      let todo = options.min - currents
      if (todo > 0) {
        let start = 0
        // @FIX initial activation drag wrap
        if (!self.disabled && self.dragger && options.drag.wrap) {
          start = self.groupMqFirst.length
          todo += start
        }
        // initial
        currents++
        // activate
        requestAnimationFrame(() => {
          for (let i = start; i < todo; i++) {
            self.eventOn(self.elements[i], true)
          }
        })
      }
      // initial
      self.setCurrents([])
      if (saveCurrents) {
        requestAnimationFrame(() => {
          self.initialCurrents = self.getCurrents().slice(0)
        })
      }
      // no currents
      if (currents === 0) {
        self.initial = false
        // auto
        if (options.auto && options.auto.time) {
          self.eventAutostart()
        }
      }
    }
    // init events
    self.initEvents()
    // listener dispatch
    requestAnimationFrame(() => {
      self.object.dispatchEvent(new CustomEvent('init.xt'))
    })
  }

  /**
   * init reset element activation
   * @param {Node|HTMLElement|EventTarget|Window} el Element to check and reset
   * @param {Boolean} saveCurrents
   * @returns {Boolean} if element was activated
   */
  initReset(el, saveCurrents = false) {
    const self = this
    let found = false
    // reset
    const reset = elReset => {
      let isActive = false
      for (const c of self.classes) {
        if (elReset.classList.contains(c)) {
          isActive = true
          break
        }
      }
      if (isActive) {
        elReset.classList.remove(...self.classes, ...self.classesIn, ...self.classesOut, ...self.classesInitial, ...self.classesInverse)
        Xt.dataStorage.remove(elReset, self.componentNamespace + 'Initial')
        if (saveCurrents) {
          found = true
        }
        // listener dispatch
        elReset.dispatchEvent(new CustomEvent('off.xt'))
      }
      return found
    }
    // elements
    const group = el.getAttribute('data-xt-group')
    if (group) {
      const groupEls = Array.from(self.elements).filter(x => x.getAttribute('data-xt-group') === group)
      for (const groupEl of groupEls) {
        found = reset(groupEl)
        if (!saveCurrents && self.initialCurrents.includes(groupEl)) {
          found = true
        }
      }
    } else {
      found = reset(el)
      if (!saveCurrents && self.initialCurrents.includes(el)) {
        found = true
      }
    }
    // targets
    const targets = self.getTargets(el)
    for (const tr of targets) {
      found = reset(tr)
    }
    return found
  }

  /**
   * init aria
   */
  initAria() {
    const self = this
    const options = self.options
    // role
    self.initAriaRole()
    // aria
    if (options.aria) {
      if (self.targets.length) {
        // elements
        for (const el of self.elements) {
          const ariaEls = Xt.queryAll(el, options.ariaControls)
          const ariaEl = ariaEls.length ? ariaEls[0] : el
          // id
          if (options.aria === true || options.aria.labelledby || options.aria.controls) {
            const id = ariaEl.getAttribute('id')
            if (!id) {
              ariaEl.setAttribute('id', Xt.getuniqueId())
            }
          }
          // selected
          ariaEl.setAttribute('aria-selected', 'false')
        }
        // targets
        for (const tr of self.targets) {
          // expanded
          const role = tr.getAttribute('role')
          if (role === 'tabpanel' || role === 'listbox' || role === 'dialog') {
            tr.setAttribute('aria-expanded', 'false')
          }
          // tabindex
          if (options.aria === true || options.aria.tabindex) {
            const focusables = tr.querySelectorAll(Xt.focusables)
            for (const focusable of focusables) {
              focusable.setAttribute('tabindex', '-1')
            }
          }
          // id
          if (options.aria === true || options.aria.labelledby || options.aria.controls) {
            const id = tr.getAttribute('id')
            if (!id) {
              tr.setAttribute('id', Xt.getuniqueId())
            }
          }
          // labelledby
          if (options.aria === true || options.aria.labelledby) {
            const els = self.getElements(tr)
            let str = ' '
            str += ''
            for (const el of els) {
              const ariaEls = Xt.queryAll(el, options.ariaControls)
              const ariaEl = ariaEls.length ? ariaEls[0] : el
              str += ' ' + ariaEl.getAttribute('id')
            }
            tr.setAttribute('aria-labelledby', str.trim())
          }
        }
        // ariaControls
        if (options.aria === true || options.aria.controls) {
          for (const el of self.elements) {
            const trs = self.getTargets(el)
            const ariaEls = Xt.queryAll(el, options.ariaControls)
            const ariaEl = ariaEls.length ? ariaEls[0] : el
            // controls
            let str = ' '
            str += ''
            for (const tr of trs) {
              str += ' ' + tr.getAttribute('id')
            }
            ariaEl.setAttribute('aria-controls', str.trim())
          }
        }
      }
    }
  }

  /**
   * init aria role
   */
  initAriaRole() {
    const self = this
    const options = self.options
    // aria
    if (options.aria) {
      if (self.targets.length) {
        // role
        if (self.mode === 'multiple') {
          self.object.setAttribute('role', 'tablist')
          if (options.max > 1) {
            self.object.setAttribute('aria-multiselectable', 'true')
          }
          for (const el of self.elements) {
            const ariaEls = Xt.queryAll(el, options.ariaControls)
            const ariaEl = ariaEls.length ? ariaEls[0] : el
            ariaEl.setAttribute('role', 'tab')
          }
          for (const tr of self.targets) {
            tr.setAttribute('role', 'tabpanel')
          }
        }
      }
    }
  }

  /**
   * init events
   */
  initEvents() {
    const self = this
    const options = self.options
    // status
    const checkHandler = Xt.dataStorage.put(window, 'resize/check' + '/' + self.namespace, self.eventStatusHandler.bind(self).bind(self))
    addEventListener('resize', checkHandler)
    // elements
    for (const el of self.elements) {
      // event on
      const onHandler = Xt.dataStorage.put(el, options.on + '/' + self.namespace, self.eventOnHandler.bind(self).bind(self, el))
      if (options.on) {
        const events = [...options.on.split(' ')]
        for (const event of events) {
          el.addEventListener(event, onHandler)
        }
        // @FIX prevents click links on click until clicked two times
        const withlinkStartTouchHandler = Xt.dataStorage.put(
          el,
          'touchend.withlink' + '/' + self.namespace,
          self.eventWithlinkStartHandler.bind(self).bind(self, el)
        )
        el.addEventListener('touchend', withlinkStartTouchHandler)
        if (!events.includes('mouseenter') && !events.includes('mousehover')) {
          const withlinkStartMouseHandler = Xt.dataStorage.put(
            el,
            'mouseup.withlink' + '/' + self.namespace,
            self.eventWithlinkStartHandler.bind(self).bind(self, el)
          )
          el.addEventListener('mouseup', withlinkStartMouseHandler)
        }
        // active
        Xt.dataStorage.put(el, 'active.withlink' + '/' + self.namespace, el.classList.contains(self.classes[0]))
      }
      const onHandlerCustom = Xt.dataStorage.put(el, 'on' + '/' + self.namespace, self.eventOnHandler.bind(self).bind(self, el))
      el.addEventListener('on.trigger.xt', onHandlerCustom)
      // event off
      if (options.off) {
        const offHandler = Xt.dataStorage.put(el, options.off + '/' + self.namespace, self.eventOffHandler.bind(self).bind(self, el))
        const events = [...options.off.split(' ')]
        for (const event of events) {
          el.addEventListener(event, offHandler)
        }
        const offHandlerCustom = Xt.dataStorage.put(el, 'off' + '/' + self.namespace, self.eventOffHandler.bind(self).bind(self, el))
        el.addEventListener('off.trigger.xt', offHandlerCustom)
      } else {
        const offHandlerCustom = Xt.dataStorage.put(el, 'off' + '/' + self.namespace, self.eventOnHandler.bind(self).bind(self, el))
        el.addEventListener('off.trigger.xt', offHandlerCustom)
      }
    }
    // targets
    for (const tr of self.targets) {
      // event
      const onHandler = Xt.dataStorage.put(tr, options.on + '/' + self.namespace, self.eventOnHandler.bind(self).bind(self, tr))
      tr.addEventListener('on.trigger.xt', onHandler)
      if (options.off) {
        const offHandlerCustom = Xt.dataStorage.put(tr, 'off' + '/' + self.namespace, self.eventOffHandler.bind(self).bind(self, tr))
        tr.addEventListener('off.trigger.xt', offHandlerCustom)
      } else {
        const offHandlerCustom = Xt.dataStorage.put(tr, 'off' + '/' + self.namespace, self.eventOnHandler.bind(self).bind(self, tr))
        tr.addEventListener('off.trigger.xt', offHandlerCustom)
      }
    }
    // auto
    if (options.auto && options.auto.time) {
      // event
      const autostartHandler = Xt.dataStorage.put(self.object, 'autostart' + '/' + self.namespace, self.eventAutostart.bind(self))
      self.object.addEventListener('autostart.trigger.xt', autostartHandler)
      const autostopHandler = Xt.dataStorage.put(self.object, 'autostop' + '/' + self.namespace, self.eventAutostop.bind(self))
      self.object.addEventListener('autostop.trigger.xt', autostopHandler)
      // focus auto
      const focusHandler = Xt.dataStorage.put(window, 'focus' + '/' + self.namespace, self.eventAutoresumeHandler.bind(self))
      addEventListener('focus', focusHandler)
      // blur auto
      const blurHandler = Xt.dataStorage.put(window, 'blur' + '/' + self.namespace, self.eventAutopauseHandler.bind(self))
      addEventListener('blur', blurHandler)
      // autopause
      if (options.auto.pause) {
        const autopauseEls = self.object.querySelectorAll(options.auto.pause)
        if (autopauseEls.length) {
          self.destroyElements.push(...autopauseEls)
          for (const el of autopauseEls) {
            // pause
            const autopauseOnHandler = Xt.dataStorage.put(el, 'mouseenter focus' + '/' + self.namespace, self.eventAutopauseHandler.bind(self))
            const eventsPause = ['mouseenter', 'focus']
            for (const event of eventsPause) {
              el.addEventListener(event, autopauseOnHandler)
            }
            // resume
            const autoresumeOnHandler = Xt.dataStorage.put(el, 'mouseleave blur' + '/' + self.namespace, self.eventAutoresumeHandler.bind(self))
            const eventsResume = ['mouseleave', 'blur']
            for (const event of eventsResume) {
              el.addEventListener(event, autoresumeOnHandler)
            }
          }
        }
      }
    }
    // jump
    if (options.jump) {
      for (const jump of self.targets) {
        const jumpHandler = Xt.dataStorage.put(jump, 'click.jump' + '/' + self.namespace, self.eventJumpHandler.bind(self).bind(self, jump))
        jump.addEventListener('click', jumpHandler, true) // @FIX useCapture or it gets the click from elements inside the target
        // jump
        if (!self.disabled) {
          jump.classList.add('xt-jump')
        } else {
          jump.classList.remove('xt-jump')
        }
      }
    }
    // navigation
    if (options.navigation) {
      self.navs = self.object.querySelectorAll(options.navigation)
      if (self.navs.length) {
        self.destroyElements.push(...self.navs)
        for (const nav of self.navs) {
          const navHandler = Xt.dataStorage.put(nav, 'click.nav' + '/' + self.namespace, self.eventNavHandler.bind(self).bind(self, nav))
          nav.addEventListener('click', navHandler)
        }
      }
    }
    // keyboard
    if (options.keyboard && options.keyboard.selector) {
      const keyboards = options.keyboard.selector === 'object' ? Xt.arrSingle(self.object) : self.object.querySelectorAll(options.keyboard.selector)
      self.destroyElements.push(...keyboards)
      for (const keyboard of keyboards) {
        keyboard.setAttribute('tabindex', '0')
        // focus
        const keyboardfocusHandler = Xt.dataStorage.put(
          keyboard,
          'focus.keyboard' + '/' + self.namespace,
          self.eventKeyboardfocusHandler.bind(self).bind(self, keyboard)
        )
        keyboard.addEventListener('focus', keyboardfocusHandler)
        // blur
        const keyboardblurHandler = Xt.dataStorage.put(
          keyboard,
          'blur.keyboard' + '/' + self.namespace,
          self.eventKeyboardblurHandler.bind(self).bind(self, keyboard)
        )
        keyboard.addEventListener('blur', keyboardblurHandler)
      }
    }
    // autoclose
    if (options.autoClose) {
      const autocloseHandler = Xt.dataStorage.put(window, 'autoclose' + '/' + self.namespace, self.eventAutocloseHandler.bind(self))
      addEventListener('autoclose.trigger.xt', autocloseHandler)
    }
    // media
    for (const el of self.elements.filter(x => !x.classList.contains('xt-clone'))) {
      const imgs = el.querySelectorAll('img')
      self.destroyElements.push(...imgs)
      for (const img of imgs) {
        if (!Xt.dataStorage.get(img, self.componentNamespace + 'MedialoadedDone')) {
          Xt.dataStorage.set(img, self.componentNamespace + 'MedialoadedDone', true)
          if (!img.complete) {
            const medialoadedHandler = Xt.dataStorage.put(img, 'load' + '/' + self.namespace, self.eventMedialoadedHandler.bind(self).bind(self, el, true))
            img.addEventListener('load', medialoadedHandler)
          } else {
            self.eventMedialoadedHandler(el, false)
          }
        }
      }
    }
    for (const tr of self.targets.filter(x => !x.classList.contains('xt-clone'))) {
      const imgs = tr.querySelectorAll('img')
      self.destroyElements.push(...imgs)
      for (const img of imgs) {
        if (!Xt.dataStorage.get(img, self.componentNamespace + 'MedialoadedDone')) {
          Xt.dataStorage.set(img, self.componentNamespace + 'MedialoadedDone', true)
          if (!img.complete) {
            const medialoadedHandler = Xt.dataStorage.put(img, 'load' + '/' + self.namespace, self.eventMedialoadedHandler.bind(self).bind(self, tr, true))
            img.addEventListener('load', medialoadedHandler)
          } else {
            self.eventMedialoadedHandler(tr, false)
          }
        }
      }
    }
    // wheel
    if (options.wheel && options.wheel.selector) {
      const wheel = (self.wheel =
        options.wheel.selector === 'object'
          ? self.object
          : options.wheel.selector === 'scrollingElement'
          ? document.scrollingElement
          : self.object.querySelector(options.wheel.selector))
      self.destroyElements.push(wheel)
      const eWheel = 'onwheel' in wheel ? 'wheel' : wheel.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll'
      // wheel
      const wheelHandler = Xt.dataStorage.put(wheel, eWheel + '/' + self.namespace, self.eventWheelHandler.bind(self))
      wheel.addEventListener(eWheel, wheelHandler, { passive: false })
      // stop
      const wheelstopHandler = Xt.dataStorage.put(wheel, eWheel + '.stop' + '/' + self.namespace, self.eventWheelstop.bind(self))
      wheel.addEventListener('wheelstop.trigger.xt', wheelstopHandler, { passive: false })
      // block
      if (options.wheel.block) {
        const block = wheel.parentNode
        const wheelblockHandler = Xt.dataStorage.put(block, eWheel + '.block' + '/' + self.namespace, self.eventWheelblockHandler.bind(self))
        block.addEventListener(eWheel, wheelblockHandler, { passive: false })
      }
    }
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
    const self = this
    const options = self.options
    // @FIX targets handler
    const el = self.getElements(element)[0]
    // event block
    if (options.onBlock) {
      const now = new Date().getTime()
      const old = Xt.dataStorage.get(el, self.componentNamespace + 'EventBlock' + e.type) || 0
      Xt.dataStorage.set(el, self.componentNamespace + 'EventBlock' + e.type, now)
      if (now - old < options.onBlock) {
        return
      }
    }
    // handler
    if (options.eventLimit) {
      const eventLimit = self.container.querySelectorAll(options.eventLimit)
      if (eventLimit.length) {
        if (!Xt.contains(eventLimit, e.target) || e.target.closest('.event-force')) {
          self.eventOn(el, false, e)
        }
      } else {
        self.eventOn(el, false, e)
      }
    } else {
      self.eventOn(el, false, e)
    }
  }

  /**
   * element off handler
   * @param {Node|HTMLElement|EventTarget|Window} element
   * @param {Event} e
   */
  eventOffHandler(element, e) {
    const self = this
    const options = self.options
    // @FIX targets handler
    const el = self.getElements(element)[0]
    // event block
    if (options.offBlock) {
      const now = new Date().getTime()
      const old = Xt.dataStorage.get(el, self.componentNamespace + 'EventBlock' + e.type) || 0
      Xt.dataStorage.set(el, self.componentNamespace + 'EventBlock' + e.type, now)
      if (now - old < options.offBlock) {
        return
      }
    }
    // handler
    if (options.eventLimit) {
      const eventLimit = self.container.querySelectorAll(options.eventLimit)
      if (eventLimit.length) {
        if (!Xt.contains(eventLimit, e.target) || e.target.closest('.event-force')) {
          self.eventOff(el, false, e)
        }
      } else {
        self.eventOff(el, false, e)
      }
    } else {
      self.eventOff(el, false, e)
    }
  }

  /**
   * init prevents click on touch until clicked two times
   * @param {Node|HTMLElement|EventTarget|Window} el
   * @param {Event} e
   */
  eventWithlinkStartHandler(el, e) {
    const self = this
    // active
    Xt.dataStorage.put(el, 'active.withlink' + '/' + self.namespace, el.classList.contains(self.classes[0]))
    // event link
    const withlinkHandler = Xt.dataStorage.put(el, 'click.withlink' + '/' + self.namespace, self.eventWithlinkHandler.bind(self).bind(self, el))
    el.addEventListener('click', withlinkHandler)
    // event reset
    const withlinkResetHandler = Xt.dataStorage.put(el, 'off.withlink' + '/' + self.namespace, self.eventWithlinkResetHandler.bind(self).bind(self, el))
    el.addEventListener('off.xt', withlinkResetHandler)
  }

  /**
   * remove prevents click on touch until clicked two times
   * @param {Node|HTMLElement|EventTarget|Window} el
   */
  eventWithlinkEndHandler(el) {
    const self = this
    // event link
    const withlinkHandler = Xt.dataStorage.get(el, 'click.withlink' + '/' + self.namespace)
    el.removeEventListener('click', withlinkHandler)
    // event reset
    const withlinkResetHandler = Xt.dataStorage.get(el, 'off.withlink' + '/' + self.namespace)
    el.removeEventListener('off.xt', withlinkResetHandler)
  }

  /**
   * prevents click on touch until clicked two times
   * @param {Node|HTMLElement|EventTarget|Window} el
   * @param {Event} e
   */
  eventWithlinkHandler(el, e) {
    const self = this
    const active = Xt.dataStorage.get(el, 'active.withlink' + '/' + self.namespace)
    if (!active && !Xt.dataStorage.get(el, self.componentNamespace + 'WithlinkDone')) {
      Xt.dataStorage.set(el, self.componentNamespace + 'WithlinkDone', true)
      // prevent default
      e.preventDefault()
    } else {
      self.eventWithlinkEndHandler(el)
      Xt.dataStorage.remove(el, self.componentNamespace + 'WithlinkDone')
      Xt.dataStorage.remove(el, 'active.withlink' + '/' + self.namespace)
    }
  }

  /**
   * reset prevents click on touch until clicked two times
   * @param {Node|HTMLElement|EventTarget|Window} el
   * @param {Event} e
   */
  eventWithlinkResetHandler(el, e) {
    const self = this
    self.eventWithlinkEndHandler(el)
    Xt.dataStorage.remove(el, self.componentNamespace + 'WithlinkDone')
    Xt.dataStorage.remove(el, 'active.withlink' + '/' + self.namespace)
  }

  /**
   * auto pause handler
   * @param {Event} e
   */
  eventAutopauseHandler(e) {
    const self = this
    if (!self.detail.autopaused) {
      // handler
      self.eventAutopause()
      // paused
      self.detail.autopaused = true
    }
  }

  /**
   * auto resume handler
   * @param {Event} e
   */
  eventAutoresumeHandler(e) {
    const self = this
    if (self.detail.autopaused) {
      // handler
      self.eventAutostart()
      // paused
      self.detail.autopaused = false
    }
  }

  /**
   * jump handler
   * @param {Node|HTMLElement|EventTarget|Window} tr
   * @param {Event} e
   */
  eventJumpHandler(tr, e) {
    const self = this
    // useCapture delegation
    if (self.targets.includes(tr)) {
      // handler
      self.eventJump(tr, e)
    }
  }

  /**
   * nav handler
   * @param {Node|HTMLElement|EventTarget|Window} nav
   * @param {Event} e
   */
  eventNavHandler(nav, e) {
    const self = this
    // handler
    self.eventNav(nav, e)
  }

  /**
   * keyboard focus handler
   * @param {Node|HTMLElement|EventTarget|Window} el
   * @param {Event} e
   */
  eventKeyboardfocusHandler(el, e) {
    const self = this
    // handler
    const keyboardHandler = Xt.dataStorage.put(document, 'keyup.keyboard' + '/' + self.namespace, self.eventKeyboardHandler.bind(self))
    document.addEventListener('keyup', keyboardHandler)
  }

  /**
   * keyboard blur handler
   * @param {Node|HTMLElement|EventTarget|Window} el
   * @param {Event} e
   */
  eventKeyboardblurHandler(el, e) {
    const self = this
    // handler
    const keyboardHandler = Xt.dataStorage.get(document, 'keyup.keyboard' + '/' + self.namespace)
    document.removeEventListener('keyup', keyboardHandler)
  }

  /**
   * keyboard handler
   * @param {Event} e
   */
  eventKeyboardHandler(e) {
    const self = this
    const options = self.options
    // key
    const code = e.keyCode ? e.keyCode : e.which
    let prev
    let next
    if (options.keyboard.vertical) {
      if (options.keyboard.inverse) {
        prev = 40
        next = 38
      } else {
        prev = 38
        next = 40
      }
    } else {
      if (options.keyboard.inverse) {
        prev = 39
        next = 37
      } else {
        prev = 37
        next = 39
      }
    }
    if (code === prev) {
      self.goToPrev(1)
    } else if (code === next) {
      self.goToNext(1)
    }
  }

  /**
   * autoclose handler
   * @param {Event} e
   */
  eventAutocloseHandler(e) {
    const self = this
    // triggering e.detail.container
    if (!e || !e.detail || !e.detail.container || e.detail.container.contains(self.object)) {
      // handler
      const currents = self.getCurrents()
      for (const current of currents) {
        self.eventOff(current, true)
      }
    }
  }

  /**
   * medialoaded
   * @param {Node|HTMLElement|EventTarget|Window} el
   * @param {Boolean} deferred
   */
  eventMedialoadedHandler(el, deferred = true) {
    const self = this
    const options = self.options
    // class
    el.classList.add('xt-medialoaded')
    // listener dispatch
    el.dispatchEvent(new CustomEvent('medialoaded.xt', { detail: { deferred: deferred } }))
    // mediaLoadedReinit
    if (options.mediaLoadedReinit && deferred) {
      clearTimeout(Xt.dataStorage.get(self.object, 'xt' + self.componentNamespace + 'MedialoadedInit' + 'Timeout'))
      Xt.dataStorage.set(
        self.object,
        'xt' + self.componentNamespace + 'MedialoadedInit' + 'Timeout',
        setTimeout(() => {
          self.reinit()
        }, Xt.medialoadedDelay)
      )
    }
  }

  //
  // event util
  //

  /**
   * get groups (one element per group)
   * @returns {Array} array of elements
   */
  getGroups() {
    const self = this
    // groups
    const groups = []
    for (const element of self.elements) {
      // choose element by group
      const group = element.getAttribute('data-xt-group')
      if (group) {
        const found = groups.filter(x => x.getAttribute('data-xt-group') === group)
        if (!found.length) {
          groups.push(element)
        }
      } else {
        groups.push(element)
      }
    }
    return groups
  }

  /**
   * get elements from element or target
   * @param {Node|HTMLElement|EventTarget|Window} el Element that triggered interaction
   * @returns {Array} The first element is the one on getGroups()
   */
  getElements(el) {
    const self = this
    // getElements
    if (!self.elements || !self.elements.length) {
      return []
    }
    if (self.mode === 'unique' || !el) {
      // choose all elements
      return self.elements
    } else if (self.mode === 'multiple') {
      // choose element by group
      let final
      const group = el.getAttribute('data-xt-group')
      const groupElements = Array.from(self.elements).filter(x => x.getAttribute('data-xt-group') === group)
      const groupTargets = Array.from(self.targets).filter(x => x.getAttribute('data-xt-group') === group)
      if (group) {
        // all group targets if group
        final = Xt.arrSingle(groupElements)
      } else {
        // not group targets by index if not group
        if (Array.from(self.elements).includes(el)) {
          // @FIX when argument is already element
          final = Xt.arrSingle(el)
        } else {
          const index = groupTargets.findIndex(x => x === el)
          final = Xt.arrSingle(groupElements[index])
        }
      }
      return final
    }
  }

  /**
   * get targets from element or target
   * @param {Node|HTMLElement|EventTarget|Window} el Element that triggered interaction
   * @returns {Array}
   */
  getTargets(el) {
    const self = this
    // getTargets
    if (!self.targets || !self.targets.length) {
      return []
    }
    if (self.mode === 'unique' || !el) {
      // choose all targets
      return self.targets
    } else if (self.mode === 'multiple') {
      // choose only target by group
      let final
      const group = el.getAttribute('data-xt-group')
      const groupElements = Array.from(self.elements).filter(x => x.getAttribute('data-xt-group') === group)
      const groupTargets = Array.from(self.targets).filter(x => x.getAttribute('data-xt-group') === group)
      if (group) {
        // all group targets if group
        final = Xt.arrSingle(groupTargets)
      } else {
        // not group targets by index if not group
        if (Array.from(self.targets).includes(el)) {
          // @FIX when argument is already target
          final = Xt.arrSingle(el)
        } else {
          const index = groupElements.findIndex(x => x === el)
          final = Xt.arrSingle(groupTargets[index])
        }
      }
      return final
    }
  }

  /**
   * get currents based on namespace (so shared between Xt objects)
   * @returns {Array}
   */
  getCurrents() {
    const self = this
    // getCurrents
    return Xt.currents[self.namespace]
  }

  /**
   * set currents based on namespace (so shared between Xt objects)
   * @param {Array} arr
   */
  setCurrents(arr) {
    const self = this
    // setCurrents
    Xt.currents[self.namespace] = arr
  }

  /**
   * add current based on namespace (so shared between Xt objects)
   * @param {Node|HTMLElement|EventTarget|Window} element To be added
   */
  addCurrent(element) {
    const self = this
    // addCurrent
    if (!self.hasCurrent(element)) {
      const arr = Xt.currents[self.namespace]
      arr.push(element)
    }
  }

  /**
   * remove currents based on namespace (so shared between Xt objects)
   * @param {Node|HTMLElement|EventTarget|Window} element To be removed
   */
  removeCurrent(element) {
    const self = this
    // removeCurrent
    Xt.currents[self.namespace] = Xt.currents[self.namespace].filter(x => x !== element)
  }

  /**
   * if element or target is in current (so shared between Xt objects)
   * @param {Node|HTMLElement|EventTarget|Window} el To be checked
   */
  hasCurrent(el) {
    const self = this
    // hasCurrent
    const groupElements = self.getElements(el)
    return Xt.currents[self.namespace].filter(x => x === groupElements[0]).length
  }

  /**
   * check element on
   * @param {Node|HTMLElement|EventTarget|Window} element To be checked
   * @returns {Boolean} If elements can activate
   */
  checkOn(element) {
    const self = this
    // check
    return !self.hasCurrent(element)
  }

  /**
   * check element off
   * @param {Node|HTMLElement|EventTarget|Window} element To be checked
   * @returns {Boolean} If elements can deactivate
   */
  checkOff(element) {
    const self = this
    const options = self.options
    // skip if min >= currents
    if (options.min - self.getCurrents().length >= 0) {
      return false
    }
    // check
    return self.hasCurrent(element)
  }

  /**
   * check elements animation
   * @param {NodeList|Array} elements To be checked
   * @returns {Boolean} If elements are animating
   */
  checkAnim(elements) {
    const self = this
    // check
    elements = elements.filter(x => x.classList.contains(self.classesIn[0]) || x.classList.contains(self.classesOut[0]))
    return elements.length > 0
  }

  /**
   * set index and direction
   * @param {Node|HTMLElement|EventTarget|Window} element Current element
   */
  setIndexAndDirection(element) {
    const self = this
    // setIndexAndDirection
    let index = 0
    for (const [i, el] of self.elements.entries()) {
      if (el === element) {
        index = i
        break
      }
    }
    self.detail.inverse = self.detail.inverseForce !== null ? self.detail.inverseForce : self.currentIndex > index
    self.detail.inverseForce = null
    self.currentIndex = index
  }

  /**
   * activate element
   * @param {Node|HTMLElement|EventTarget|Window} el Elements to be activated
   */
  activate(el) {
    const self = this
    // activate
    el.classList.add(...self.classes)
    el.classList.add(...self.classesIn)
    el.classList.remove(...self.classesOut)
    if (self.initial || Xt.dataStorage.get(el, self.componentNamespace + 'Initial')) {
      el.classList.add(...self.classesInitial)
    }
    if (!self.detail.inverse) {
      el.classList.remove(...self.classesInverse)
    } else {
      el.classList.add(...self.classesInverse)
    }
  }

  /**
   * deactivate element
   * @param {Node|HTMLElement|EventTarget|Window} el Elements to be deactivated
   */
  deactivate(el) {
    const self = this
    // activate
    el.classList.remove(...self.classes)
    el.classList.remove(...self.classesIn)
    el.classList.add(...self.classesOut)
    if (!self.initial && !Xt.dataStorage.get(el, self.componentNamespace + 'Initial')) {
      el.classList.remove(...self.classesInitial)
    }
    if (!self.detail.inverse) {
      el.classList.remove(...self.classesInverse)
    } else {
      el.classList.add(...self.classesInverse)
    }
  }

  //
  // event
  //

  /**
   * element on
   * @param {Node|HTMLElement|EventTarget|Window} element To be activated
   * @param {Boolean} force
   * @param {Event} e
   * @returns {Boolean} If activated
   */
  eventOn(element, force = false, e = null) {
    const self = this
    const options = self.options
    // disabled
    if (self.disabled && !self.initial) {
      return false
    }
    // toggle
    if (force || (self.checkOn(element) && (!e || !e.type || e.type !== 'off.trigger.xt'))) {
      // auto
      if (options.auto && options.auto.time) {
        self.eventAutostop()
      }
      // on
      const groupElements = self.getElements(element)
      self.addCurrent(groupElements[0])
      self.setIndexAndDirection(element)
      const targets = self.getTargets(element)
      const elementsInner = Xt.queryAll(element, options.elementsInner)
      const targetsInner = Xt.queryAll(targets, options.targetsInner)
      // [disabled]
      if (options.autoDisable && options.min === options.max) {
        for (const disable of groupElements) {
          disable.setAttribute('disabled', 'disabled')
        }
      }
      // if currents > max
      const currents = self.getCurrents()
      if (currents.length > options.max) {
        // deactivate old
        self.eventOff(currents[0])
      }
      // queue obj
      const actionCurrent = 'On'
      const actionOther = 'Off'
      self.eventQueue(actionCurrent, groupElements, targets, elementsInner, targetsInner, e)
      // queue run
      for (const type in self.detail['queue' + actionCurrent][0]) {
        self.queueStart(actionCurrent, actionOther, type, 0, true)
      }
      // activated
      return true
    } else if (!e || !e.type || e.type !== 'on.trigger.xt') {
      self.eventOff(element, false, e)
    }
    // activated
    return false
  }

  /**
   * element off
   * @param {Node|HTMLElement|EventTarget|Window} element To be deactivated
   * @param {Boolean} force
   * @param {Event} e
   * @returns {Boolean} If deactivated
   */
  eventOff(element, force = false, e = null) {
    const self = this
    const options = self.options
    // disabled
    if (self.disabled && !self.initial) {
      return false
    }
    // toggle
    if (force || self.checkOff(element)) {
      // off
      const groupElements = self.getElements(element)
      self.removeCurrent(groupElements[0])
      const targets = self.getTargets(element)
      const elementsInner = Xt.queryAll(element, options.elementsInner)
      const targetsInner = Xt.queryAll(targets, options.targetsInner)
      // @FIX sometimes blur is undefined
      if (element.blur) {
        // @FIX :focus styles
        element.blur()
      }
      // [disabled]
      if (options.autoDisable && options.min === options.max) {
        for (const disable of groupElements) {
          disable.removeAttribute('disabled')
        }
      }
      // currentIndex after a frame for sequential events
      requestAnimationFrame(() => {
        if (self.getCurrents().length === 0) {
          self.currentIndex = null
        }
      })
      // auto
      if (!self.getCurrents().length) {
        self.eventAutostop()
      }
      // queue obj
      const actionCurrent = 'Off'
      const actionOther = 'On'
      self.eventQueue(actionCurrent, groupElements, targets, elementsInner, targetsInner, e)
      // if queue too big
      if (self.detail['queue' + actionCurrent].length > options.max) {
        // remove queue on and done other queue
        const removedOn = self.detail['queue' + actionOther].shift()
        self.queueStop(actionOther, actionCurrent, removedOn)
        // remove queue off and done other queue
        const removedOff = self.detail['queue' + actionCurrent].shift()
        self.queueStop(actionCurrent, actionOther, removedOff)
      }
      // queue run
      for (const type in self.detail['queue' + actionCurrent][0]) {
        self.queueStart(actionCurrent, actionOther, type, 0, true)
      }
      // deactivated
      return true
    }
    // deactivated
    return false
  }

  /**
   * element on
   * @param {String} actionCurrent
   * @param {NodeList|Array|Node|HTMLElement|EventTarget|Window} groupElements
   * @param {NodeList|Array|Node|HTMLElement|EventTarget|Window} targets
   * @param {NodeList|Array|Node|HTMLElement|EventTarget|Window} elementsInner
   * @param {NodeList|Array|Node|HTMLElement|EventTarget|Window} targetsInner
   * @param {Event} e
   */
  eventQueue(actionCurrent, groupElements, targets, elementsInner, targetsInner, e) {
    const self = this
    const options = self.options
    // populate
    const obj = {}
    obj.elements = {
      queueEls: groupElements,
      event: e,
    }
    if (targets.length) {
      obj.targets = {
        queueEls: targets,
        event: e,
      }
    }
    if (elementsInner.length) {
      obj.elementsInner = {
        queueEls: elementsInner,
        event: e,
      }
    }
    if (targetsInner.length) {
      obj.targetsInner = {
        queueEls: targetsInner,
        event: e,
      }
    }
    // put in queue
    if (typeof options.instant !== 'object' && options.instant === true) {
      self.detail['queue' + actionCurrent] = [obj]
    } else {
      self.detail['queue' + actionCurrent].unshift(obj)
    }
  }

  /**
   * auto start
   */
  eventAutostart() {
    const self = this
    const options = self.options
    // disabled
    if (self.disabled && !self.initial) {
      return
    }
    // start
    if (options.auto && options.auto.time) {
      // paused
      self.detail.autopaused = false
      // clear
      clearInterval(Xt.dataStorage.get(self.object, self.componentNamespace + 'AutostartInterval'))
      // auto
      const time =
        self.initial || self.initialContinue ? (options.auto.timeInitial !== false ? options.auto.timeInitial : options.auto.time) : options.auto.time
      // not when nothing activated
      if (self.currentIndex !== null && (!self.initial || self.initialContinue || options.auto.initial)) {
        // not when initial
        Xt.dataStorage.set(
          self.object,
          self.componentNamespace + 'AutostartInterval',
          // interval because can become :visible
          setInterval(() => {
            if (Xt.visible(self.object)) {
              // not when disabled
              if (getComputedStyle(self.object).pointerEvents !== 'none') {
                if (options.auto.inverse) {
                  self.goToPrev(options.auto.step, true)
                } else {
                  self.goToNext(options.auto.step, true)
                }
              }
            }
          }, time)
        )
        // listener dispatch
        requestAnimationFrame(() => {
          // @FIX event called before removing classes
          self.object.dispatchEvent(new CustomEvent('autostart.xt'))
        })
      }
    }
  }

  /**
   * auto stop
   */
  eventAutostop() {
    const self = this
    const options = self.options
    // stop
    if (options.auto && options.auto.time) {
      // clear
      clearInterval(Xt.dataStorage.get(self.object, self.componentNamespace + 'AutostartInterval'))
      // listener dispatch
      self.object.dispatchEvent(new CustomEvent('autostop.xt'))
    }
  }

  /**
   * auto stop
   */
  eventAutopause() {
    const self = this
    const options = self.options
    // disabled
    if (self.disabled && !self.initial) {
      return
    }
    // pause
    if (options.auto && options.auto.time) {
      // clear
      clearInterval(Xt.dataStorage.get(self.object, self.componentNamespace + 'AutostartInterval'))
      // listener dispatch
      self.object.dispatchEvent(new CustomEvent('autopause.xt'))
    }
  }

  /**
   * jump
   * @param {Node|HTMLElement|EventTarget|Window} tr
   * @param {Event} e
   */
  eventJump(tr, e) {
    const self = this
    // disabled
    if (self.disabled && !self.initial) {
      return
    }
    // check disabled
    if (tr.closest('.xt-jumps-none')) {
      return
    }
    // jump
    const element = self.getElements(tr)[0]
    if (self.checkOn(element)) {
      self.eventOn(element)
    }
  }

  /**
   * nav
   * @param {Node|HTMLElement|EventTarget|Window} nav
   * @param {Event} e
   */
  eventNav(nav, e) {
    const self = this
    // disabled
    if (self.disabled && !self.initial) {
      return
    }
    // nav
    const step = parseFloat(nav.getAttribute('data-xt-nav'))
    if (step < 0) {
      self.goToPrev(-step, true)
    } else {
      self.goToNext(step, true)
    }
  }

  //
  // queue
  //

  /**
   * queue start
   * @param {String} actionCurrent Current action
   * @param {String} actionOther Other action
   * @param {String} type Type of element
   * @param {Number} index Queue index
   * @param {Boolean} queueInitial If it's the initial queue
   */
  queueStart(actionCurrent, actionOther, type, index, queueInitial = false) {
    const self = this
    const options = self.options
    // queue start
    const obj = self.detail['queue' + actionCurrent][index]
    if (obj && obj[type] && !obj[type].done) {
      const objOther = self.detail['queue' + actionOther][self.detail['queue' + actionOther].length - 1]
      if (!objOther || !objOther[type] || objOther[type].done) {
        if (typeof options.instant !== 'object' && options.instant === true) {
          obj[type].instant = true
        } else if (typeof options.instant === 'object' && options.instant[type]) {
          obj[type].instantType = true
        }
        self.queueDelay(actionCurrent, actionOther, obj, type, queueInitial)
      }
    }
  }

  /**
   * queue stop
   * @param {String} actionCurrent Current action
   * @param {String} actionOther Other action
   * @param {Object} obj Queue object to end
   */
  queueStop(actionCurrent, actionOther, obj) {
    const self = this
    // stop type if done
    for (const type in obj) {
      if (obj[type].done) {
        for (const el of obj[type].queueEls) {
          // clear timeout and frame
          cancelAnimationFrame(Xt.dataStorage.get(el, self.componentNamespace + 'CollapseFrame'))
          clearTimeout(Xt.dataStorage.get(el, self.componentNamespace + 'DelayTimeout'))
          clearTimeout(Xt.dataStorage.get(el, self.componentNamespace + 'AnimTimeout'))
          // done other queue
          self.queueDelayDone(actionOther, actionCurrent, obj, el, type, true)
          self.queueAnimDone(actionOther, actionCurrent, obj, el, type, true)
        }
      }
    }
  }

  /**
   * queue stop all
   */
  queueStopAll() {
    const self = this
    // stop all obj in queues
    if (self.detail) {
      // @FIX not already initialized
      const actions = [
        { current: 'On', other: 'Off' },
        { current: 'Off', other: 'On' },
      ]
      for (const action of actions) {
        const queue = self.detail['queue' + action.current]
        for (const obj in queue) {
          self.queueStop(action.current, action.other, obj)
        }
      }
    }
  }

  /**
   * queue delay
   * @param {String} actionCurrent Current action
   * @param {String} actionOther Other action
   * @param {Object} obj Queue object
   * @param {String} type Type of elements
   * @param {Boolean} queueInitial If it's the initial queue
   */
  queueDelay(actionCurrent, actionOther, obj, type, queueInitial) {
    const self = this
    const options = self.options
    // delay
    const els = obj[type].queueEls
    for (const el of els) {
      // delay
      let delay = options['delay' + actionCurrent]
      if (delay) {
        if (isNaN(delay)) {
          const count = Xt.dataStorage.get(el, self.componentNamespace + actionCurrent + 'Count') || els.findIndex(x => x === el)
          const tot = Xt.dataStorage.get(el, self.componentNamespace + actionCurrent + 'Tot') || els.length
          if (typeof delay === 'function') {
            delay = delay(count, tot - 1)
          }
        } else {
          delay = queueInitial ? 0 : delay
        }
      }
      // delay fnc
      clearTimeout(Xt.dataStorage.get(el, self.componentNamespace + 'DelayTimeout'))
      clearTimeout(Xt.dataStorage.get(el, self.componentNamespace + 'AnimTimeout'))
      if (!delay) {
        self.queueDelayDone(actionCurrent, actionOther, obj, el, type)
      } else {
        Xt.dataStorage.set(
          el,
          self.componentNamespace + 'DelayTimeout',
          setTimeout(() => {
            self.queueDelayDone(actionCurrent, actionOther, obj, el, type)
          }, delay)
        )
      }
      // queue done
      if (obj[type].instant) {
        if (el === els[els.length - 1]) {
          // only if last element
          self.queueDone(actionCurrent, actionOther, obj, type)
        }
      }
    }
  }

  /**
   * queue delay done
   * @param {String} actionCurrent Current action
   * @param {String} actionOther Other action
   * @param {Object} obj Queue object
   * @param {Node|HTMLElement|EventTarget|Window} el Elements to be deactivated
   * @param {String} type Type of elements
   * @param {Boolean} skipQueue If skip queue
   */
  queueDelayDone(actionCurrent, actionOther, obj, el, type, skipQueue = false) {
    const self = this
    const options = self.options
    if (actionCurrent === 'On') {
      // activate
      self.activate(el)
      // special
      const before = getComputedStyle(el, ':before')
        .getPropertyValue('content')
        .replace(/['"]+/g, '')
      const after = getComputedStyle(el, ':after')
        .getPropertyValue('content')
        .replace(/['"]+/g, '')
      self.specialCenter(el, before, after)
      self.specialMiddle(el, before, after)
      self.specialCollapse(actionCurrent, el, before, after)
      self.specialBackdrop(actionCurrent, obj)
      if (type === 'targets' || (!self.targets.length && type === 'elements')) {
        // @FIX when standalone
        // appendTo
        if (options.appendTo) {
          const appendToTarget = document.querySelector(options.appendTo)
          const appendOrigin = document.querySelector('[data-xt-origin="' + self.namespace + '"]')
          if (!appendOrigin) {
            el.before(Xt.createElement('<div class="xt-ignore" data-xt-origin="' + self.namespace + '"></div>'))
          }
          el.classList.add('xt-ignore', 'xt-ignore-once') // @FIX ignore once for mount when moving
          appendToTarget.appendChild(el)
        }
      }
      if (type === 'targets' || type === 'targetsInner' || el === self.object) {
        self.specialClose(actionCurrent, el, obj.elements.queueEls[0])
      }
      // aria
      if (options.aria) {
        if (type === 'elements') {
          // selected
          const ariaEls = Xt.queryAll(el, options.ariaControls)
          const ariaEl = ariaEls.length ? ariaEls[0] : el
          ariaEl.setAttribute('aria-selected', 'true')
        }
        if (type === 'targets') {
          // expanded
          const role = el.getAttribute('role')
          if (role === 'tabpanel' || role === 'listbox' || role === 'dialog') {
            el.setAttribute('aria-expanded', 'true')
          }
        }
        // tabindex
        if (options.aria === true || options.aria.tabindex) {
          if (type === 'targets') {
            const focusables = el.querySelectorAll(Xt.focusables)
            for (const focusable of focusables) {
              focusable.removeAttribute('tabindex')
            }
          }
        }
      }
      // listener dispatch
      el.dispatchEvent(new CustomEvent('on.xt'))
    } else if (actionCurrent === 'Off') {
      // deactivate
      self.deactivate(el)
      // special
      const before = getComputedStyle(el, ':before')
        .getPropertyValue('content')
        .replace(/['"]+/g, '')
      const after = getComputedStyle(el, ':after')
        .getPropertyValue('content')
        .replace(/['"]+/g, '')
      self.specialCollapse(actionCurrent, el, before, after)
      if (type === 'targets' || type === 'targetsInner' || el === self.object) {
        self.specialClose(actionCurrent, el)
      }
      // listener dispatch
      el.dispatchEvent(new CustomEvent('off.xt'))
    }
    // queue
    if (!skipQueue) {
      self.queueAnim(actionCurrent, actionOther, obj, el, type)
      // queue done
      if (obj[type].instantType) {
        const els = obj[type].queueEls
        if (el === els[els.length - 1]) {
          // only if last element
          self.queueDone(actionCurrent, actionOther, obj, type)
        }
      }
    }
  }

  /**
   * queue anim
   * @param {String} actionCurrent Current action
   * @param {String} actionOther Other action
   * @param {Object} obj Queue object
   * @param {Node|HTMLElement|EventTarget|Window} el Element to be animated
   * @param {String} type Type of element
   */
  queueAnim(actionCurrent, actionOther, obj, el, type) {
    const self = this
    const options = self.options
    // anim
    const duration = Xt.animTime(el, options['duration' + actionCurrent])
    clearTimeout(Xt.dataStorage.get(el, self.componentNamespace + 'AnimTimeout'))
    if (!duration) {
      self.queueAnimDone(actionCurrent, actionOther, obj, el, type)
    } else {
      Xt.dataStorage.set(
        el,
        self.componentNamespace + 'AnimTimeout',
        setTimeout(() => {
          self.queueAnimDone(actionCurrent, actionOther, obj, el, type)
        }, duration)
      )
    }
  }

  /**
   * queue anim done
   * @param {String} actionCurrent Current action
   * @param {String} actionOther Other action
   * @param {Object} obj Queue object
   * @param {Node|HTMLElement|EventTarget|Window} el Element to be animated
   * @param {String} type Type of element
   * @param {Boolean} skipQueue If skip queue
   */
  queueAnimDone(actionCurrent, actionOther, obj, el, type, skipQueue = false) {
    const self = this
    const options = self.options
    if (actionCurrent === 'On') {
      // reset
      el.classList.remove(...self.classesIn)
      // special
      const before = getComputedStyle(el, ':before')
        .getPropertyValue('content')
        .replace(/['"]+/g, '')
      const after = getComputedStyle(el, ':after')
        .getPropertyValue('content')
        .replace(/['"]+/g, '')
      self.specialCollapse('Reset', el, before, after)
      // listener dispatch
      el.dispatchEvent(new CustomEvent('ondone.xt'))
    } else if (actionCurrent === 'Off') {
      // reset
      el.classList.remove(...self.classesOut)
      // special
      if (type === 'targets' || (!self.targets.length && type === 'elements')) {
        // @FIX when standalone
        // appendTo
        if (options.appendTo) {
          const appendOrigin = document.querySelector('[data-xt-origin="' + self.namespace + '"]')
          if (appendOrigin) {
            el.classList.add('xt-ignore', 'xt-ignore-once') // @FIX ignore once for mount when moving
            appendOrigin.before(el)
            appendOrigin.remove()
          } else {
            el.remove()
          }
        }
      }
      // aria
      if (options.aria) {
        // selected
        if (type === 'elements') {
          const ariaEls = Xt.queryAll(el, options.ariaControls)
          const ariaEl = ariaEls.length ? ariaEls[0] : el
          ariaEl.setAttribute('aria-selected', 'false')
        }
        if (type === 'targets') {
          // expanded
          const role = el.getAttribute('role')
          if (role === 'tabpanel' || role === 'listbox' || role === 'dialog') {
            el.setAttribute('aria-expanded', 'false')
          }
          // tabindex
          if (options.aria === true || options.aria.tabindex) {
            const focusables = el.querySelectorAll(Xt.focusables)
            for (const focusable of focusables) {
              focusable.setAttribute('tabindex', '-1')
              focusable.blur()
            }
          }
        }
      }
      // listener dispatch
      el.dispatchEvent(new CustomEvent('offdone.xt'))
    }
    // queue
    if (!skipQueue) {
      // queue done
      if (!obj[type].instant && !obj[type].instantType) {
        const els = obj[type].queueEls
        if (el === els[els.length - 1]) {
          // only if last element
          self.queueDone(actionCurrent, actionOther, obj, type)
        }
      }
    }
  }

  /**
   * queue done
   * @param {String} actionCurrent Current action
   * @param {String} actionOther Other action
   * @param {Object} obj Queue object
   * @param {String} type Type of element
   */

  queueDone(actionCurrent, actionOther, obj, type) {
    const self = this
    // check
    if (obj[type]) {
      // type done
      obj[type].done = true
      // check done
      let done = 0
      for (const type in obj) {
        if (obj[type].done) {
          done++
        }
      }
      // one done
      if (done === 1) {
        // queue progress
        self.queueProgress(actionCurrent, obj)
      }
      // queue
      self.queueStart(actionOther, actionCurrent, type, self.detail['queue' + actionOther].length - 1)
      // all done
      if (done === Object.entries(obj).length) {
        // remove queue
        self.detail['queue' + actionCurrent].pop()
        // queue complete
        self.queueComplete(actionCurrent, obj)
      }
    }
  }

  /**
   * logic to execute on queue first progress
   * @param {String} actionCurrent Current action
   * @param {Object} obj Queue object
   */
  queueProgress(actionCurrent, obj) {
    const self = this
    const options = self.options
    if (actionCurrent === 'On') {
      // special
      self.specialClassHtml(actionCurrent)
      self.specialScrollbar(actionCurrent)
      // focus
      if (options.focusLimit) {
        const el = obj.targets ? obj.targets.queueEls[0] : obj.elements.queueEls[0]
        Xt.focusLimit.on(el)
      }
    } else if (actionCurrent === 'Off') {
      // special
      self.specialClassHtml(actionCurrent)
      // focus
      if (options.focusLimit) {
        Xt.focusLimit.off()
      }
    }
  }

  /**
   * logic to execute on queue complete
   * @param {String} actionCurrent Current action
   * @param {Object} obj Queue object
   */
  queueComplete(actionCurrent, obj) {
    const self = this
    const options = self.options
    if (actionCurrent === 'On') {
      // auto
      if (options.auto && options.auto.time) {
        self.eventAutostart()
      }
      // initial after raf set initial false after on.xt custom listeners
      requestAnimationFrame(() => {
        self.initial = false
        self.initialContinue = false
      })
    } else if (actionCurrent === 'Off') {
      // special
      self.specialBackdrop(actionCurrent, obj)
      self.specialScrollbar(actionCurrent)
    }
  }

  //
  // wheel
  //

  /**
   * wheel handler
   * @param {Event} e
   */
  eventWheelHandler(e) {
    const self = this
    self.eventWheelsmooth(e)
  }

  /**
   * wheel block handler
   * @param {Event} e
   */
  eventWheelblockHandler(e) {
    const self = this
    // disabled
    if (self.disabled && !self.initial) {
      return
    }
    // prevent default if not loop
    const max = self.getGroups().length - 1
    const delta = -e.deltaY || e.wheelDeltaY
    if ((delta > 0 && self.currentIndex > 0) || (delta < 0 && self.currentIndex < max - 1)) {
      // prevent wheel
      e.preventDefault()
      e.stopPropagation()
    }
  }

  /**
   * event wheel smooth for Xt
   * @param {Event} e
   */

  eventWheelsmooth(e) {
    const self = this
    const options = self.options
    let el = self.wheel
    // disabled
    if (self.disabled && !self.initial) {
      return
    }
    // delta
    let delta = -e.deltaY || e.wheelDeltaY
    // when no delta or delta = 0
    if (!delta) {
      return
    }
    // if document.scrollingElement scroll current overflow scroll
    if (el === document.scrollingElement) {
      let elFinal
      for (let composed of e.composedPath()) {
        if (composed instanceof Element) {
          const overflowY = getComputedStyle(composed).overflowY
          if (composed === document.body) {
            composed = document.scrollingElement // @FIX use scrollingElement when body
          }
          if (
            composed === document.scrollingElement || // always when scrollingElement
            overflowY === 'scroll' || // always when scroll
            (overflowY === 'auto' && composed.scrollHeight > composed.clientHeight)
          ) {
            // only when scrollable
            if (overflowY === 'scroll' && window.self === window.top) {
              // always when scroll and not iframe
              elFinal = composed
            } else if (
              (delta < 0 || composed.scrollTop > 0) && // limit top
              (delta > 0 || composed.scrollTop < composed.scrollHeight - composed.clientHeight)
            ) {
              // limit bottom
              elFinal = composed
            } else if (window.self !== window.top) {
              elFinal = window.top.document.scrollingElement
            } else {
              elFinal = window.self.document.scrollingElement
            }
            break
          }
        }
      }
      if (!elFinal) {
        return
      } else if (elFinal === document.body) {
        elFinal = self.object // document.scrollingElement
      }
      el = elFinal
    }
    // delta
    if (e.deltaMode === 1) {
      // deltaMode 1: by lines
      delta *= 30
    } else if (e.deltaMode === 2) {
      // deltaMode 2: by pages
      if (options.wheel.horizontal) {
        delta *= el.offsetWidth
      } else {
        delta *= el.offsetHeight
      }
    }
    // factor
    delta *= options.wheel.factor
    // instant
    if (!options.wheel.friction) {
      // wheel
      if (delta < 0) {
        self.goToNext(1)
      } else if (delta > 0) {
        self.goToPrev(1)
      }
      // listener dispatch
      self.wheel.dispatchEvent(new CustomEvent('wheelstart.xt'))
      self.wheel.dispatchEvent(new CustomEvent('wheelend.xt'))
      // return
      return
    }
    // min and max
    const min = self.detail.wheelMin || 0
    let max = self.detail.wheelMax
    // calculate max
    if (!self.detail.wheelMax) {
      if (!options.wheel.transform) {
        if (options.wheel.horizontal) {
          max = el.scrollWidth - el.offsetWidth
        } else {
          max = el.scrollHeight - el.offsetHeight
        }
      } else {
        let full = 0
        if (options.wheel.horizontal) {
          for (const child of el.children) {
            full += child.offsetWidth
          }
          max = full - el.offsetWidth
        } else {
          for (const child of el.children) {
            full += child.offsetHeight
          }
          max = full - el.offsetHeight
        }
      }
    }
    // calculate end
    if (!self.detail.wheelMoving) {
      // get current
      if (!options.wheel.transform) {
        if (options.wheel.horizontal) {
          self.detail.wheelCurrent = el.scrollLeft
        } else {
          self.detail.wheelCurrent = el.scrollTop
        }
      } else {
        if (options.wheel.horizontal) {
          self.detail.wheelCurrent = -Xt.getTranslate(el)[0]
        } else {
          self.detail.wheelCurrent = -Xt.getTranslate(el)[1]
        }
      }
      // set end
      self.detail.wheelEnd = self.detail.wheelCurrent - delta
    } else {
      // set end
      self.detail.wheelEnd = self.detail.wheelEnd - delta
    }
    // friction to limit
    if (options.wheel.limit) {
      // limit
      self.detail.wheelEnd = Math.max(min, Math.min(self.detail.wheelEnd, max))
    }
    // propagate if already at min or max
    if (self.detail.wheelMin && self.detail.wheelMax) {
      // only when setting wheelMin and wheelMax
      if (delta < 0) {
        if (self.detail.wheelCurrent >= max) {
          return
        }
      } else if (delta > 0) {
        if (self.detail.wheelCurrent <= min) {
          return
        }
      }
    }
    // prevent wheel
    e.preventDefault()
    // moving
    if (!self.detail.wheelMoving) {
      self.detail.wheelMoving = true
      // listener dispatch
      self.wheel.dispatchEvent(new CustomEvent('wheelstart.xt', { detail: { wheelX: -self.detail.wheelCurrent } }))
      // friction
      self.eventFrictionsmooth(el, min, max)
    }
  }

  /**
   * event friction smooth for Xt
   * @param {Node|HTMLElement|EventTarget|Window} el
   * @param {Number} min Minimum value
   * @param {Number} max Maximum value
   */

  eventFrictionsmooth(el, min, max) {
    const self = this
    const options = self.options
    // disabled
    if (self.disabled && !self.initial) {
      return
    }
    // vars
    const delta = self.detail.wheelEnd - self.detail.wheelCurrent
    const deltaAbs = Math.abs(delta)
    const sign = Math.sign(delta)
    // momentum
    const fncFriction = options.wheel.friction
    if (deltaAbs >= options.wheel.frictionLimit) {
      self.detail.wheelCurrent += fncFriction(deltaAbs) * sign
    } else {
      self.detail.wheelCurrent = self.detail.wheelEnd
    }
    // set
    if (!options.wheel.transform) {
      if (options.wheel.horizontal) {
        el.scrollLeft = self.detail.wheelCurrent
      } else {
        el.scrollTop = self.detail.wheelCurrent
      }
    } else {
      if (options.wheel.horizontal) {
        el.style.transform = 'translateX(' + -self.detail.wheelCurrent + 'px)'
      } else {
        el.style.transform = 'translateY(' + -self.detail.wheelCurrent + 'px)'
      }
    }
    // loop
    if (
      self.detail.wheelCurrent > min &&
      self.detail.wheelCurrent < max && // limit
      deltaAbs >= options.wheel.frictionLimit
    ) {
      // frictionLimit
      // friction
      cancelAnimationFrame(Xt.dataStorage.get(self.wheel, self.componentNamespace + 'WheelsmoothFrame'))
      Xt.dataStorage.set(
        self.wheel,
        self.componentNamespace + 'WheelsmoothFrame',
        requestAnimationFrame(() => {
          self.eventFrictionsmooth(el, min, max)
        })
      )
      // listener dispatch
      self.wheel.dispatchEvent(new CustomEvent('wheel.xt', { detail: { wheelX: -self.detail.wheelCurrent } }))
    } else {
      // moving
      self.detail.wheelMoving = false
      // vars
      self.detail.wheelEnd = false
      // listener dispatch
      self.wheel.dispatchEvent(new CustomEvent('wheelend.xt', { detail: { wheelX: -self.detail.wheelCurrent } }))
    }
  }

  /**
   * event wheel stop for Xt
   */

  eventWheelstop() {
    const self = this
    const el = self.wheel
    cancelAnimationFrame(Xt.dataStorage.get(el, self.componentNamespace + 'WheelsmoothFrame'))
    self.detail.wheelMoving = false
  }

  //
  // special
  //

  /**
   * add or remove close events on element
   * @param {String} actionCurrent Current action
   * @param {Node|HTMLElement|EventTarget|Window} el Element
   * @param {Node|HTMLElement|EventTarget|Window} single Element to toggle
   */
  specialClose(actionCurrent, el, single = null) {
    const self = this
    const options = self.options
    if (actionCurrent === 'On') {
      // closeInside
      if (options.closeInside) {
        const closeElements = el.querySelectorAll(options.closeInside)
        requestAnimationFrame(() => {
          for (const closeElement of closeElements) {
            const specialcloseinsideHandler = Xt.dataStorage.put(
              closeElement,
              'click.close' + '/' + self.namespace,
              self.eventSpecialcloseinsideHandler.bind(self).bind(self, closeElement, single)
            )
            closeElement.addEventListener('click', specialcloseinsideHandler)
          }
        })
      }
      // closeOutside
      if (options.closeOutside) {
        const closeElements = document.querySelectorAll(options.closeOutside)
        requestAnimationFrame(() => {
          for (const closeElement of closeElements) {
            const specialcloseoutsideHandler = Xt.dataStorage.put(
              closeElement,
              'click.close' + '/' + self.namespace,
              self.eventSpecialcloseoutsideHandler.bind(self).bind(self, el, single)
            )
            closeElement.addEventListener('click', specialcloseoutsideHandler)
          }
        })
      }
    } else if (actionCurrent === 'Off') {
      // closeInside
      if (options.closeInside) {
        const closeElements = el.querySelectorAll(options.closeInside)
        for (const closeElement of closeElements) {
          const specialcloseinsideHandler = Xt.dataStorage.get(closeElement, 'click.close' + '/' + self.namespace)
          closeElement.removeEventListener('click', specialcloseinsideHandler)
        }
      }
      // closeOutside
      if (options.closeOutside) {
        const closeElements = document.querySelectorAll(options.closeOutside)
        for (const closeElement of closeElements) {
          const specialcloseoutsideHandler = Xt.dataStorage.get(closeElement, 'click.close' + '/' + self.namespace)
          closeElement.removeEventListener('click', specialcloseoutsideHandler)
        }
      }
    }
  }

  /**
   * specialClose on handler
   * @param {Node|HTMLElement|EventTarget|Window} closeElement
   * @param {Node|HTMLElement|EventTarget|Window} single
   * @param {Event} e
   */
  eventSpecialcloseinsideHandler(closeElement, single, e) {
    const self = this
    // prevent closing when nested and moved (ex: overlay)
    const checkContainer = self.targets.length ? self.targets : Xt.arrSingle(self.object)
    if (!Xt.contains(checkContainer, closeElement)) {
      return
    }
    // handler
    if (Xt.contains(Xt.arrSingle(closeElement), e.target)) {
      self.eventOff(single)
    }
  }

  /**
   * specialClose off handler
   * @param {Node|HTMLElement|EventTarget|Window} closeElement
   * @param {Node|HTMLElement|EventTarget|Window} single
   * @param {Event} e
   */
  eventSpecialcloseoutsideHandler(closeElement, single, e) {
    const self = this
    // handler
    if (!Xt.contains(Xt.arrSingle(closeElement), e.target)) {
      self.eventOff(single)
    }
  }

  /**
   * open or close or reset collapse
   * @param {String} actionCurrent Current action
   * @param {Node|HTMLElement|EventTarget|Window} el Element
   * @param {String} before Before content
   * @param {String} after After content
   */
  specialCollapse(actionCurrent, el, before, after) {
    if (el instanceof HTMLElement) {
      if (actionCurrent === 'On') {
        if (before === 'xt-collapse-height') {
          cancelAnimationFrame(Xt.dataStorage.get(el, self.componentNamespace + 'CollapseFrame'))
          Xt.dataStorage.set(
            el,
            self.componentNamespace + 'CollapseFrame',
            requestAnimationFrame(() => {
              el.classList.add('xt-hide', 'trans-anim-none')
              el.style.height = 'auto'
              const h = el.clientHeight + 'px'
              el.style.height = '0'
              cancelAnimationFrame(Xt.dataStorage.get(el, self.componentNamespace + 'CollapseFrame'))
              Xt.dataStorage.set(
                el,
                self.componentNamespace + 'CollapseFrame',
                requestAnimationFrame(() => {
                  el.classList.remove('xt-hide', 'trans-anim-none')
                  el.style.height = h
                })
              )
            })
          )
        }
        if (after === 'xt-collapse-width') {
          cancelAnimationFrame(Xt.dataStorage.get(el, self.componentNamespace + 'CollapseFrame'))
          Xt.dataStorage.set(
            el,
            self.componentNamespace + 'CollapseFrame',
            requestAnimationFrame(() => {
              el.classList.add('xt-hide', 'trans-anim-none')
              el.style.width = 'auto'
              const w = el.clientHeight + 'px'
              el.style.width = '0'
              cancelAnimationFrame(Xt.dataStorage.get(el, self.componentNamespace + 'CollapseFrame'))
              Xt.dataStorage
                .set(
                  el,
                  self.componentNamespace + 'CollapseFrame',
                  requestAnimationFrame(() => {
                    el.classList.remove('xt-hide', 'trans-anim-none')
                    el.style.width = w
                  })
                )
                .toString()
            })
          )
        }
      } else if (actionCurrent === 'Off') {
        if (before === 'xt-collapse-height') {
          const h = el.offsetHeight + 'px'
          cancelAnimationFrame(Xt.dataStorage.get(el, self.componentNamespace + 'CollapseFrame'))
          Xt.dataStorage.set(
            el,
            self.componentNamespace + 'CollapseFrame',
            requestAnimationFrame(() => {
              el.classList.remove('xt-hide', 'trans-anim-none')
              el.style.height = h
              cancelAnimationFrame(Xt.dataStorage.get(el, self.componentNamespace + 'CollapseFrame'))
              Xt.dataStorage.set(
                el,
                self.componentNamespace + 'CollapseFrame',
                requestAnimationFrame(() => {
                  el.style.height = '0'
                })
              )
            })
          )
        }
        if (after === 'xt-collapse-width') {
          const w = el.offsetWidth + 'px'
          cancelAnimationFrame(Xt.dataStorage.get(el, self.componentNamespace + 'CollapseFrame'))
          Xt.dataStorage.put(
            el,
            self.componentNamespace + 'CollapseFrame',
            requestAnimationFrame(() => {
              el.classList.remove('xt-hide', 'trans-anim-none')
              el.style.width = w
              cancelAnimationFrame(Xt.dataStorage.get(el, self.componentNamespace + 'CollapseFrame'))
              Xt.dataStorage.put(
                el,
                self.componentNamespace + 'CollapseFrame',
                requestAnimationFrame(() => {
                  el.style.width = '0'
                })
              )
            })
          )
        }
      } else if (actionCurrent === 'Reset') {
        if (before === 'xt-collapse-height') {
          el.style.height = 'inherit'
        }
        if (after === 'xt-collapse-width') {
          el.style.width = 'inherit'
        }
      }
    }
  }

  /**
   * scrollbar activation
   * @param {String} actionCurrent Current action
   */
  specialScrollbar(actionCurrent) {
    const self = this
    const options = self.options
    if (actionCurrent === 'On') {
      // scrollbar on
      if (options.scrollbar) {
        // checks
        Xt.scrollbar.add(self.namespace)
        // check fixed
        const checks = document.querySelectorAll('.xt-fixed-check, .xt-fixed-check > *, .btn-close')
        for (const check of checks) {
          const style = getComputedStyle(check)
          if (style.position === 'fixed') {
            check.classList.add('xt-fixed')
          } else {
            check.classList.remove('xt-fixed')
          }
        }
        // scrollbar
        const container = document.documentElement
        container.classList.add('xt-scrollbar')
        Xt.scrollbarSpaceOn(container)
      }
    } else if (actionCurrent === 'Off') {
      // scrollbar off
      if (options.scrollbar) {
        // checks
        Xt.scrollbar.remove(self.namespace)
        if (!Xt.scrollbar.get().length) {
          // scrollbar
          const container = document.documentElement
          container.classList.remove('xt-scrollbar')
          Xt.scrollbarSpaceOff(container)
        }
      }
    }
  }

  /**
   * add or remove html class
   * @param {String} actionCurrent Current action
   */
  specialClassHtml(actionCurrent) {
    const self = this
    const options = self.options
    if (actionCurrent === 'On') {
      // class on
      if (options.classHtml) {
        const container = document.documentElement
        container.classList.add(...options.classHtml.split(' '))
      }
    } else if (actionCurrent === 'Off') {
      // class off
      if (options.classHtml) {
        const container = document.documentElement
        container.classList.remove(...options.classHtml.split(' '))
      }
    }
  }

  /**
   * backdrop append to element
   * @param {String} actionCurrent Current action
   * @param {Object} obj Queue object
   */
  specialBackdrop(actionCurrent, obj) {
    const self = this
    const options = self.options
    // backdrop
    if (options.backdrop) {
      const elements = obj['targets'] ? Xt.arrSingle(obj['targets'].queueEls) : Xt.arrSingle(self.object)
      for (const element of elements) {
        if (actionCurrent === 'On') {
          const backdrops = element.querySelectorAll('.backdrop')
          if (!backdrops.length) {
            const backdrop = Xt.createElement('<div class="backdrop xt-ignore"></div>')
            element.append(backdrop)
            // @FIX pass wheel event or when you mousewheel over .backdrop it doesn't scroll
            const eWheel = 'onwheel' in backdrop ? 'wheel' : backdrop.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll'
            backdrop.addEventListener(
              eWheel,
              e => {
                const delta = -e.deltaY || e.wheelDeltaY
                element.scrollTop -= delta
              },
              { passive: true }
            )
          }
        } else if (actionCurrent === 'Off') {
          const backdrops = element.querySelectorAll('.backdrop')
          if (backdrops.length) {
            for (const backdrop of backdrops) {
              backdrop.remove()
            }
          }
        }
      }
    }
  }

  /**
   * center position on activation
   * @param {Node|HTMLElement|EventTarget|Window} el Element
   * @param {String} before Before content
   * @param {String} after After content
   */
  specialCenter(el, before, after) {
    const self = this
    // specialCenter
    if (before === 'xt-drop-center') {
      const add = self.object.clientWidth
      const remove = el.clientWidth
      el.style.left = (add - remove) / 2 + 'px'
    }
  }

  /**
   * middle position on activation
   * @param {Node|HTMLElement|EventTarget|Window} el Element
   * @param {String} before Before content
   * @param {String} after After content
   */
  specialMiddle(el, before, after) {
    const self = this
    // specialMiddle
    if (after === 'xt-drop-middle') {
      const add = self.object.clientHeight
      const remove = el.clientHeight
      el.style.top = (add - remove) / 2 + 'px'
    }
  }

  //
  // index
  //

  /**
   * get next index
   * @param {Number} amount
   * @param {Boolean} loop
   * @returns {Number} index
   */
  getNextIndex(amount = 1, loop = null) {
    const self = this
    // logic
    let index = 0
    if (self.currentIndex !== null) {
      index = self.currentIndex + amount
    }
    return self.getNumIndex(index, loop)
  }

  /**
   * get next element
   * @param {Number} amount
   * @param {Boolean} loop
   * @returns {Number} index
   */
  getNext(amount = 1, loop = null) {
    const self = this
    // logic
    const i = self.getNextIndex(amount, loop)
    return self.getGroups()[i]
  }

  /**
   * activate next element
   * @param {Number} amount
   * @param {Boolean} force
   * @param {Boolean} loop
   */
  goToNext(amount = 1, force = false, loop = null) {
    const self = this
    // goToNum
    self.detail.inverseForce = false
    self.goToNum(self.getNextIndex(amount, loop), force, loop)
  }

  /**
   * get prev index
   * @param {Number} amount
   * @param {Boolean} loop
   * @returns {Number} index
   */
  getPrevIndex(amount = 1, loop = null) {
    const self = this
    // logic
    let index = self.getGroups().length - 1
    if (self.currentIndex !== null) {
      index = self.currentIndex - amount
    }
    return self.getNumIndex(index, loop)
  }

  /**
   * get prev element
   * @param {Number} amount
   * @param {Boolean} loop
   * @returns {Number} index
   */
  getPrev(amount = 1, loop = null) {
    const self = this
    // logic
    const i = self.getPrevIndex(amount, loop)
    return self.getGroups()[i]
  }

  /**
   * activate prev element
   * @param {Number} amount
   * @param {Boolean} force
   * @param {Boolean} loop
   */
  goToPrev(amount = 1, force = false, loop = null) {
    const self = this
    // goToNum
    self.detail.inverseForce = true
    self.goToNum(self.getPrevIndex(amount, loop), force, loop)
  }

  /**
   * activate index element
   * @param {Number} index
   * @param {Boolean} loop
   * @returns {Number} index
   */
  getNumIndex(index, loop = null) {
    const self = this
    const options = self.options
    // check
    const max = self.getGroups().length - 1
    if (index > max) {
      if (loop || (loop === null && options.loop)) {
        index = index - max - 1
        index = index > max ? max : index // prevent overflow
      } else {
        index = max
      }
    } else if (index < 0) {
      if (loop || (loop == null && options.loop)) {
        index = index + max + 1
        index = index < 0 ? 0 : index // prevent overflow
      } else {
        index = 0
      }
    }
    // element
    return index
  }

  /**
   * get prev element
   * @param {Number} index
   * @param {Boolean} loop
   * @returns {Element} element
   */
  getNum(index = 1, loop = null) {
    const self = this
    // logic
    const i = self.getNumIndex(index, loop)
    return self.getGroups()[i]
  }

  /**
   * activate number element
   * @param {Number} index
   * @param {Boolean} force
   * @param {Boolean} loop
   */
  goToNum(index, force = false, loop = null) {
    const self = this
    // go
    const el = self.getNum(index, loop)
    self.eventOn(el, force)
  }

  //
  // status
  //

  /**
   * status handler
   * @param {Event} e
   */
  eventStatusHandler(e = null) {
    const self = this
    // triggering e.detail.container
    if (!e || !e.detail || !e.detail.container || e.detail.container.contains(self.object)) {
      Xt.eventDelay(
        e,
        self.object,
        () => {
          // handler
          self.eventStatus()
        },
        self.componentNamespace + 'Status'
      )
    }
  }

  /**
   * status
   */
  eventStatus() {
    const self = this
    // check disabled
    if (
      self.object instanceof HTMLElement && // @FIX not on window
      getComputedStyle(self.object, ':after')
        .getPropertyValue('content')
        .replace(/['"]+/g, '') === 'xt-disable'
    ) {
      self.disable()
    } else if (self.disabled) {
      self.enable()
    }
  }

  /**
   * disable
   */
  disable() {
    const self = this
    // disable
    self.disabled = true
    self.object.classList.add('xt-disable')
  }

  /**
   * disable
   */
  enable() {
    const self = this
    // enable
    self.disabled = false
    self.object.classList.remove('xt-disable')
  }

  //
  // util
  //

  /**
   * reinit handler
   * @param {Event} e
   */
  eventReinitHandler(e) {
    const self = this
    // triggering e.detail.container
    if (!e || !e.detail || !e.detail.container || e.detail.container.contains(self.object)) {
      Xt.eventDelay(
        e,
        self.object,
        () => {
          // handler
          self.reinit()
        },
        self.componentNamespace + 'Reinit'
      )
    }
  }

  /**
   * reinit
   * @param {Boolean} saveCurrents
   */
  reinit(saveCurrents = true) {
    const self = this
    // reinit
    self.initLogic(saveCurrents)
    // listener dispatch
    self.object.dispatchEvent(new CustomEvent('reinit.xt'))
  }

  /**
   * restart
   */
  restart() {
    const self = this
    // reset namespace
    Xt.dataStorage.remove(self.namespace, 'xtNamespaceDone')
    // restart
    self.initStart()
    // listener dispatch
    self.object.dispatchEvent(new CustomEvent('restart.xt'))
  }

  /**
   * destroy
   */
  destroy() {
    const self = this
    // stop queue
    self.queueStopAll() // @FIX autoclose with appendTo outside ajax
    // stop auto
    self.eventAutostop()
    // [disabled]
    self.destroyDisabled()
    // remove events
    if (self.destroyElements) {
      for (const element of self.destroyElements) {
        const storages = Xt.dataStorage.getAll(element)
        if (storages) {
          for (const [key] of storages) {
            if (key) {
              if (key.endsWith(self.namespace)) {
                const handler = Xt.dataStorage.get(element, key)
                if (typeof handler === 'function') {
                  const events = key.split('/')[0].split(' ')
                  for (const event of events) {
                    //console.debug(event, element.innerHTML)
                    element.removeEventListener(event, handler)
                    element.removeEventListener(event, handler, true)
                    element.removeEventListener(event, handler, { passive: true })
                    Xt.dataStorage.remove(element, key)
                  }
                }
              }
            }
          }
        }
      }
    }
    // disable
    self.disable()
    // set self
    Xt.remove(self.componentName, self.object)
    for (const el of self.elements) {
      Xt.remove(self.componentName, el)
    }
    for (const tr of self.targets) {
      Xt.remove(self.componentName, tr)
    }
    // listener dispatch
    self.object.dispatchEvent(new CustomEvent('destroy.xt'))
    // delete
    delete this
  }

  /**
   * destroy disabled
   */

  destroyDisabled() {
    const self = this
    const options = self.options
    if (options.autoDisable) {
      for (const el of self.elements) {
        el.removeAttribute('disabled')
      }
    }
  }

  //
}

//
// options
//

Toggle.componentName = 'xt-toggle'
Toggle.optionsDefaultSuper = {
  elements: ':scope > a, :scope > button',
  targets: ':scope > [class^="toggle-"], :scope > [class*=" toggle-"]',
  elementsInner: false,
  targetsInner: false,
  on: 'click',
  off: false,
  min: 0,
  max: 1,
  instant: { elements: true, targets: false, elementsInner: true, targetsInner: false },
  // defaults
  class: 'active active-toggle',
  classIn: 'in',
  classOut: 'out',
  classInitial: 'initial',
  classInverse: 'inverse',
  eventLimit: '.event-limit',
  autoClose: false,
  autoDisable: true,
  onBlock: false,
  offBlock: false,
  loop: true,
  jump: false,
  mediaLoadedReinit: false,
  delayOn: false,
  delayOff: false,
  durationOn: false,
  durationOff: false,
  navigation: false,
  keyboard: {
    selector: false,
  },
  auto: {
    time: false,
    timeInitial: false,
    initial: true,
    step: 1,
    inverse: false,
    pause: false,
  },
  aria: {
    tabindex: true,
    controls: true,
    labelledby: true,
  },
}
Xt.optionsGlobal[Toggle.componentName] = {}

//
// export
//

Xt.Toggle = Toggle

//
// observe
//

Xt.mount.push({
  matches: '[data-' + Xt.Toggle.componentName + ']',
  mount: object => {
    // vars

    const optionsMarkup = object.getAttribute('data-' + Xt.Toggle.componentName)
    const options = optionsMarkup ? RJSON.parse(optionsMarkup) : {}

    // init

    let self = new Xt.Toggle(object, options)

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  },
})
