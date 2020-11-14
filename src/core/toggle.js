import { Xt } from '../xt.js'
import JSON5 from 'json5'

/**
 * Toggle
 */
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
  init(object = null, optionsCustom = null) {
    const self = this
    self.object = object || self.object
    self.optionsCustom = optionsCustom || self.optionsCustom
    // vars
    self.classes = []
    self.classesActive = []
    self.classesOut = []
    self.classesInitial = []
    self.classesInverse = []
    self.elements = []
    self.targets = []
    self.currentIndex = null
    self.oldIndex = null
    self.direction = null
    self.inverse = null
    self.initialCurrents = []
    self.detail = {}
    self.disabled = false
    self.detail.queueOn = []
    self.detail.queueOff = []
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
    self.optionsDefault = Xt.merge([self.constructor.optionsDefaultSuper, self.constructor.optionsDefault])
    self.optionsDefault = Xt.merge([self.optionsDefault, Xt.optionsGlobal[self.componentName]])
    self.options = Xt.merge([self.optionsDefault, self.optionsCustom])
    // classes
    self.classes = self.options.class ? [...self.options.class.split(' ')] : []
    self.classesActive = self.options.classActive ? [...self.options.classActive.split(' ')] : []
    self.classesOut = self.options.classOut ? [...self.options.classOut.split(' ')] : []
    self.classesDone = self.options.classDone ? [...self.options.classDone.split(' ')] : []
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
      self.namespace = `${self.componentName}-${options.targets.toString()}-${self.classes.toString()}`
    } else {
      // xtend multiple mode
      self.mode = 'multiple'
      self.container = self.object
      const uniqueId = Xt.dataStorage.get(self.container, 'xtUniqueId')
      Xt.dataStorage.set(self.container, 'xtUniqueId', uniqueId || Xt.getuniqueId())
      self.namespace = `${self.componentName}-${Xt.dataStorage.get(self.container, 'xtUniqueId')}`
    }
    // final namespace
    self.namespace = self.namespace.replace(/^[^a-z]+|[ ,#_:.-]+/gi, '')
    // currents array based on namespace (so shared between Xt objects)
    self.setCurrents([])
    // xtNamespace linked components
    const arr = Xt.dataStorage.get(self.namespace, 'xtNamespace') || []
    arr.push(self)
    Xt.dataStorage.set(self.namespace, 'xtNamespace', arr)
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
    self.eventStatusHandler()
    self.initEvents()
    self.initStart(saveCurrents)
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
    }
    // object if no elements
    if (!self.elements.length) {
      self.elements = Xt.arrSingle(self.object)
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
      arr = arr.filter(x => !x.closest('.xt-ignore')) // filter out ignore
      self.targets = arr
      self.destroyElements.push(...self.targets)
    }
  }

  /**
   * init start
   * @param {Boolean} saveCurrents
   */
  initStart(saveCurrents = false) {
    const self = this
    const options = self.options
    // currents
    self.setCurrents([])
    // vars
    let currents = 0
    self.initial = true
    self.wrap = false
    self.currentIndex = null
    self.oldIndex = null
    // [disabled]
    self.destroyDisabled()
    // @fix raf because after .xt custom listeners
    requestAnimationFrame(() => {
      // automatic initial currents
      const elements = self.getElementsGroups()
      if (elements.length) {
        // check elements
        for (const element of elements) {
          // reset
          const found = self.initReset(element, saveCurrents)
          if (found && currents < options.max) {
            // initial
            currents++
            // reactivate after raf
            requestAnimationFrame(() => {
              self.eventOn(element, true)
            })
          }
        }
        // if currents < min
        let todo = options.min - currents
        let start = 0
        if (todo > 0 && self.targets.length) {
          // @FIX initial activation drag wrap
          if ((!self.disabled || !self.initial) && self.wrapIndex) {
            start = self.wrapIndex
            todo += start
          }
          // initial
          currents += todo
        }
        if (todo > 0 && self.targets.length) {
          for (let i = start; i < todo; i++) {
            self.eventOn(self.elements[i], true)
          }
        }
        // currents
        if (saveCurrents) {
          // initialCurrents after raf
          requestAnimationFrame(() => {
            self.initialCurrents = self.getCurrents().slice(0)
          })
        }
        // no currents
        if (currents === 0) {
          // vars
          self.initial = false
          // @FIX autostart after self.initial or it gives error on reinitialization (demos fullscreen)
          // auto
          self.eventAutostart()
        }
      }
      // initialized class
      self.object.setAttribute('data-xt-component', self.componentName)
      // listener dispatch
      self.object.dispatchEvent(new CustomEvent('init.xt'))
    })
  }

  /**
   * init reset element activation
   * @param {Node|HTMLElement|EventTarget|Window} el Element to check and reset
   * @param {Boolean} saveCurrents
   * @return {Boolean} if element was activated
   */
  initReset(el, saveCurrents = false) {
    const self = this
    const options = self.options
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
        if (saveCurrents) {
          found = true
        }
        requestAnimationFrame(() => {
          elReset.classList.remove(
            ...self.classes,
            ...self.classesActive,
            ...self.classesOut,
            ...self.classesDone,
            ...self.classesInitial,
            ...self.classesInverse
          )
          const elementsInner = Xt.queryAll(elReset, options.elementsInner)
          for (const elementInner of elementsInner) {
            elementInner.classList.remove(
              ...self.classes,
              ...self.classesActive,
              ...self.classesOut,
              ...self.classesDone,
              ...self.classesInitial,
              ...self.classesInverse
            )
          }
        })
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
          // describedby
          if (options.aria === true || options.aria.describedby) {
            const els = self.getElements(tr)
            let str = ' '
            str += ''
            for (const el of els) {
              const ariaEls = Xt.queryAll(el, options.ariaControls)
              const ariaEl = ariaEls.length ? ariaEls[0] : el
              str += ` ${ariaEl.getAttribute('id')}`
            }
            tr.setAttribute('aria-describedby', str.trim())
          }
          // labelledby
          if (options.aria === true || options.aria.labelledby) {
            const els = self.getElements(tr)
            let str = ' '
            str += ''
            for (const el of els) {
              const ariaEls = Xt.queryAll(el, options.ariaControls)
              const ariaEl = ariaEls.length ? ariaEls[0] : el
              str += ` ${ariaEl.getAttribute('id')}`
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
              str += ` ${tr.getAttribute('id')}`
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
    const checkHandler = Xt.dataStorage.put(window, `resize/check/${self.namespace}`, self.eventStatusHandler.bind(self).bind(self))
    addEventListener('resize', checkHandler)
    // elements
    for (const el of self.elements) {
      // event on
      const onHandler = Xt.dataStorage.put(el, `${options.on}/${self.namespace}`, self.eventOnHandler.bind(self).bind(self, el))
      if (options.on) {
        const events = [...options.on.split(' ')]
        for (const event of events) {
          el.addEventListener(event, onHandler)
        }
        if (options.preventEvent) {
          if (events.includes('click') || events.includes('mouseenter') || events.includes('mousehover')) {
            // @FIX prevents click links on click until clicked two times
            const preventeventStartTouchHandler = Xt.dataStorage.put(
              el,
              `touchend/preventevent/${self.namespace}`,
              self.eventPreventeventStartHandler.bind(self).bind(self, el)
            )
            el.addEventListener('touchend', preventeventStartTouchHandler)
          }
          if (events.includes('click')) {
            const preventeventStartMouseHandler = Xt.dataStorage.put(
              el,
              `mouseup/preventevent/${self.namespace}`,
              self.eventPreventeventStartHandler.bind(self).bind(self, el)
            )
            el.addEventListener('mouseup', preventeventStartMouseHandler)
          }
        }
        Xt.dataStorage.put(el, `active/preventevent/${self.namespace}`, self.hasCurrent(el))
      }
      const onHandlerCustom = Xt.dataStorage.put(el, `on/${self.namespace}`, self.eventOnHandler.bind(self).bind(self, el))
      el.addEventListener('on.trigger.xt', onHandlerCustom)
      // event off
      if (options.off) {
        const offHandler = Xt.dataStorage.put(el, `${options.off}/${self.namespace}`, self.eventOffHandler.bind(self).bind(self, el))
        const events = [...options.off.split(' ')]
        for (const event of events) {
          el.addEventListener(event, offHandler)
        }
        const offHandlerCustom = Xt.dataStorage.put(el, `off/${self.namespace}`, self.eventOffHandler.bind(self).bind(self, el))
        el.addEventListener('off.trigger.xt', offHandlerCustom)
      } else {
        const offHandlerCustom = Xt.dataStorage.put(el, `off/${self.namespace}`, self.eventOnHandler.bind(self).bind(self, el))
        el.addEventListener('off.trigger.xt', offHandlerCustom)
      }
    }
    // targets
    for (const tr of self.targets) {
      // event
      const onHandler = Xt.dataStorage.put(tr, `${options.on}/${self.namespace}`, self.eventOnHandler.bind(self).bind(self, tr))
      tr.addEventListener('on.trigger.xt', onHandler)
      if (options.off) {
        const offHandlerCustom = Xt.dataStorage.put(tr, `off/${self.namespace}`, self.eventOffHandler.bind(self).bind(self, tr))
        tr.addEventListener('off.trigger.xt', offHandlerCustom)
      } else {
        const offHandlerCustom = Xt.dataStorage.put(tr, `off/${self.namespace}`, self.eventOnHandler.bind(self).bind(self, tr))
        tr.addEventListener('off.trigger.xt', offHandlerCustom)
      }
    }
    // auto
    if (options.auto && options.auto.time) {
      // focus
      const focusHandler = Xt.dataStorage.put(window, `focus/auto/${self.namespace}`, self.eventAutoresume.bind(self))
      addEventListener('focus', focusHandler)
      // blur
      const blurHandler = Xt.dataStorage.put(window, `blur/auto/${self.namespace}`, self.eventAutopause.bind(self))
      addEventListener('blur', blurHandler)
      // event
      const autostartHandler = Xt.dataStorage.put(self.object, `autostart/${self.namespace}`, self.eventAutostart.bind(self))
      self.object.addEventListener('autostart.trigger.xt', autostartHandler)
      const autostopHandler = Xt.dataStorage.put(self.object, `autostop/${self.namespace}`, self.eventAutostop.bind(self))
      self.object.addEventListener('autostop.trigger.xt', autostopHandler)
      const autopauseHandler = Xt.dataStorage.put(self.object, `autopause/${self.namespace}`, self.eventAutopause.bind(self))
      self.object.addEventListener('autopause.trigger.xt', autopauseHandler)
      const autoresumeHandler = Xt.dataStorage.put(self.object, `autoresume/${self.namespace}`, self.eventAutoresume.bind(self))
      self.object.addEventListener('autoresume.trigger.xt', autoresumeHandler)
      // autopause
      if (options.auto.pause) {
        const autopauseEls = self.object.querySelectorAll(options.auto.pause)
        if (autopauseEls.length) {
          self.destroyElements.push(...autopauseEls)
          for (const el of autopauseEls) {
            // pause
            const autopauseOnHandler = Xt.dataStorage.put(el, `mouseenter focus/auto/${self.namespace}`, self.eventAutopause.bind(self))
            const eventsPause = ['mouseenter', 'focus']
            for (const event of eventsPause) {
              el.addEventListener(event, autopauseOnHandler)
            }
            // resume
            const autoresumeOnHandler = Xt.dataStorage.put(el, `mouseleave blur/auto/${self.namespace}`, self.eventAutoresume.bind(self))
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
        const jumpHandler = Xt.dataStorage.put(jump, `click/jump/${self.namespace}`, self.eventJumpHandler.bind(self).bind(self, jump))
        jump.addEventListener('click', jumpHandler, true) // @FIX elements inside targets (slider pagination)
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
          const navHandler = Xt.dataStorage.put(nav, `click/nav/${self.namespace}`, self.eventNavHandler.bind(self).bind(self, nav))
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
        const keyboardfocusHandler = Xt.dataStorage.put(keyboard, `focus/keyboard/${self.namespace}`, self.eventKeyboardfocusHandler.bind(self))
        keyboard.addEventListener('focus', keyboardfocusHandler)
        // blur
        const keyboardblurHandler = Xt.dataStorage.put(keyboard, `blur/keyboard/${self.namespace}`, self.eventKeyboardblurHandler.bind(self))
        keyboard.addEventListener('blur', keyboardblurHandler)
      }
    }
    // closeauto
    if (options.closeAuto) {
      const closeautoHandler = Xt.dataStorage.put(window, `closeauto/${self.namespace}`, self.eventAutocloseHandler.bind(self))
      addEventListener('closeauto.trigger.xt', closeautoHandler)
    }
    // mediaLoaded
    if (options.mediaLoaded || options.mediaLoadedReinit) {
      for (const el of self.elements.filter(x => !x.classList.contains('xt-ignore'))) {
        const imgs = el.querySelectorAll('img')
        self.destroyElements.push(...imgs)
        for (const img of imgs) {
          if (!Xt.dataStorage.get(img, `${self.componentNamespace}MedialoadedDone`)) {
            Xt.dataStorage.set(img, `${self.componentNamespace}MedialoadedDone`, true)
            if (!img.complete) {
              const medialoadedHandler = Xt.dataStorage.put(img, `load/media/${self.namespace}`, self.eventMedialoadedHandler.bind(self).bind(self, el, true))
              img.addEventListener('load', medialoadedHandler)
            } else {
              self.eventMedialoadedHandler(el)
            }
          }
        }
      }
      for (const tr of self.targets.filter(x => !x.classList.contains('xt-ignore'))) {
        const imgs = tr.querySelectorAll('img')
        self.destroyElements.push(...imgs)
        for (const img of imgs) {
          if (!Xt.dataStorage.get(img, `${self.componentNamespace}MedialoadedDone`)) {
            if (!img.complete) {
              const medialoadedHandler = Xt.dataStorage.put(
                img,
                `load/media/${self.namespace}`,
                self.eventMedialoadedHandler.bind(self).bind(self, img, tr, true)
              )
              img.addEventListener('load', medialoadedHandler)
            } else {
              self.eventMedialoadedHandler(img, tr)
            }
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
      const wheelHandler = Xt.dataStorage.put(wheel, `${eWheel}/${self.namespace}`, self.eventWheelHandler.bind(self))
      wheel.addEventListener(eWheel, wheelHandler, { passive: false })
      // stop
      const wheelstopHandler = Xt.dataStorage.put(wheel, `${eWheel}/stop/${self.namespace}`, self.eventWheelstop.bind(self))
      wheel.addEventListener('wheelstop.trigger.xt', wheelstopHandler, { passive: false })
      // block
      if (options.wheel.block) {
        const block = wheel.parentNode
        const wheelblockHandler = Xt.dataStorage.put(block, `${eWheel}/block/${self.namespace}`, self.eventWheelblockHandler.bind(self))
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
      const old = Xt.dataStorage.get(el, `${self.componentNamespace}EventBlock${e.type}`) || 0
      Xt.dataStorage.set(el, `${self.componentNamespace}EventBlock${e.type}`, now)
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
      const old = Xt.dataStorage.get(el, `${self.componentNamespace}EventBlock${e.type}`) || 0
      Xt.dataStorage.set(el, `${self.componentNamespace}EventBlock${e.type}`, now)
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
   */
  eventPreventeventStartHandler(el) {
    const self = this
    // active
    Xt.dataStorage.put(el, `active/preventevent/${self.namespace}`, self.hasCurrent(el))
    // event link
    const preventeventHandler = Xt.dataStorage.put(el, `click/preventevent/${self.namespace}`, self.eventPreventeventHandler.bind(self).bind(self, el))
    el.addEventListener('click', preventeventHandler)
    // event reset
    const preventeventResetHandler = Xt.dataStorage.put(el, `off/preventevent/${self.namespace}`, self.eventPreventeventResetHandler.bind(self).bind(self, el))
    el.addEventListener('off.xt', preventeventResetHandler)
  }

  /**
   * remove prevents click on touch until clicked two times
   * @param {Node|HTMLElement|EventTarget|Window} el
   */
  eventPreventeventEndHandler(el) {
    const self = this
    // event link
    const preventeventHandler = Xt.dataStorage.get(el, `click/preventevent/${self.namespace}`)
    el.removeEventListener('click', preventeventHandler)
    // event reset
    const preventeventResetHandler = Xt.dataStorage.get(el, `off/preventevent/${self.namespace}`)
    el.removeEventListener('off.xt', preventeventResetHandler)
  }

  /**
   * prevents click on touch until clicked two times
   * @param {Node|HTMLElement|EventTarget|Window} el
   * @param {Event} e
   */
  eventPreventeventHandler(el, e) {
    const self = this
    const active = Xt.dataStorage.get(el, `active/preventevent/${self.namespace}`)
    if (!active && !Xt.dataStorage.get(el, `${self.componentNamespace}PreventeventDone`)) {
      Xt.dataStorage.set(el, `${self.componentNamespace}PreventeventDone`, true)
      // prevent default
      e.preventDefault()
    } else {
      self.eventPreventeventEndHandler(el)
      Xt.dataStorage.remove(el, `${self.componentNamespace}PreventeventDone`)
      Xt.dataStorage.remove(el, `active/preventevent/${self.namespace}`)
      // off on second interaction on touch
      el.dispatchEvent(new CustomEvent('off.trigger.xt'))
    }
  }

  /**
   * reset prevents click on touch until clicked two times
   * @param {Node|HTMLElement|EventTarget|Window} el
   */
  eventPreventeventResetHandler(el) {
    const self = this
    self.eventPreventeventEndHandler(el)
    Xt.dataStorage.remove(el, `${self.componentNamespace}PreventeventDone`)
    Xt.dataStorage.remove(el, `active/preventevent/${self.namespace}`)
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
   */
  eventKeyboardfocusHandler() {
    const self = this
    // handler
    const keyboardHandler = Xt.dataStorage.put(document, `keyup/keyboard/${self.namespace}`, self.eventKeyboardHandler.bind(self))
    document.addEventListener('keyup', keyboardHandler)
  }

  /**
   * keyboard blur handler
   */
  eventKeyboardblurHandler() {
    const self = this
    // handler
    const keyboardHandler = Xt.dataStorage.get(document, `keyup/keyboard/${self.namespace}`)
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
   * closeauto handler
   * @param {Event} e
   */
  eventAutocloseHandler(e) {
    const self = this
    // check
    let check = self.object
    if (self.mode === 'unique') {
      check = self.targets[0]
    }
    // triggering e.detail.container
    if (!e || !e.detail || !e.detail.container || e.detail.container.contains(check)) {
      Xt.eventDelay(
        e,
        check,
        () => {
          // handler
          const currents = self.getCurrents()
          for (const current of currents) {
            self.eventOff(current, true)
          }
        },
        `${self.componentNamespace}Status`
      )
    }
  }

  /**
   * medialoaded
   * @param {Node|HTMLElement|EventTarget|Window} img
   * @param {Node|HTMLElement|EventTarget|Window} el
   * @param {Boolean} deferred
   */
  eventMedialoadedHandler(img, el, deferred = false) {
    const self = this
    const options = self.options
    // @FIX multiple calls
    Xt.dataStorage.set(img, `${self.componentNamespace}MedialoadedDone`, true)
    // mediaLoadedReinit
    if (options.mediaLoadedReinit && deferred) {
      clearTimeout(Xt.dataStorage.get(self.object, `xt${self.componentNamespace}MedialoadedInit` + `Timeout`))
      Xt.dataStorage.set(
        self.object,
        `xt${self.componentNamespace}MedialoadedInit` + `Timeout`,
        setTimeout(() => {
          // mediaLoaded
          self.eventMediaLoadedReinit()
        }, Xt.medialoadedDelay)
      )
    }
    // mediaLoaded
    if (options.mediaLoaded) {
      el.classList.add('xt-medialoaded')
    }
    // listener dispatch
    el.dispatchEvent(new CustomEvent('medialoaded.xt', { detail: { deferred: deferred } }))
  }

  //
  // event util
  //

  /**
   * get elements groups (one element per group)
   * @return {Array} array of elements
   */
  getElementsGroups() {
    const self = this
    // groups
    const final = []
    for (const element of self.elements) {
      // choose element by group
      const group = element.getAttribute('data-xt-group')
      if (group) {
        const found = final.filter(x => x.getAttribute('data-xt-group') === group)
        if (!found.length) {
          final.push(element)
        }
      } else {
        final.push(element)
      }
    }
    return final
  }

  /**
   * get targets groups (one target per group)
   * @return {Array} array of targets
   */
  getTargetsGroups() {
    const self = this
    // groups
    const final = []
    for (const targets of self.targets) {
      // choose element by group
      const group = targets.getAttribute('data-xt-group')
      if (group) {
        const found = final.filter(x => x.getAttribute('data-xt-group') === group)
        if (!found.length) {
          final.push(targets)
        }
      } else {
        final.push(targets)
      }
    }
    return final
  }

  /**
   * get elements from element or target
   * @param {Node|HTMLElement|EventTarget|Window} el Element that triggered interaction
   * @return {Array} The first element is the one on getElementsGroups()
   */
  getElements(el = null) {
    const self = this
    // getElements
    if (!self.elements || !self.elements.length) {
      return []
    }
    if (self.mode === 'unique' || !el) {
      // xtNamespace linked components
      const final = []
      const selfs = Xt.dataStorage.get(self.namespace, 'xtNamespace')
      for (const item of selfs) {
        // choose element by group
        final.push(...item.getElementsGroups())
      }
      return final
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
   * @return {Array}
   */
  getTargets(el = null) {
    const self = this
    // getTargets
    if (!self.targets || !self.targets.length) {
      return []
    }
    if (self.mode === 'unique' || !el) {
      // xtNamespace linked components
      const final = self.getTargetsGroups()
      return final
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
   * @return {Array}
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
   * @return {Boolean} If elements can activate
   */
  checkOn(element) {
    const self = this
    // check
    return !self.hasCurrent(element) && !element.classList.contains('xt-block')
  }

  /**
   * check element off
   * @param {Node|HTMLElement|EventTarget|Window} element To be checked
   * @return {Boolean} If elements can deactivate
   */
  checkOff(element) {
    const self = this
    const options = self.options
    // skip if min >= currents
    if (options.min - self.getCurrents().length >= 0) {
      return false
    }
    // check
    return self.hasCurrent(element) && !element.classList.contains('xt-block')
  }

  /**
   * check elements animation
   * @param {NodeList|Array} elements To be checked
   * @return {Boolean} If elements are animating
   */
  checkAnim(elements) {
    const self = this
    // check
    elements = elements.filter(x => x.classList.contains(self.classesActive[0]) || x.classList.contains(self.classesOut[0]))
    return elements.length > 0
  }

  /**
   * set index
   * @param {Node|HTMLElement|EventTarget|Window} element Current element
   */
  setIndex(element) {
    const self = this
    // set index
    let index = 0
    for (const [i, el] of self.getElementsGroups().entries()) {
      if (el === element) {
        index = i
        break
      }
    }
    self.oldIndex = self.currentIndex
    self.currentIndex = index
  }

  /**
   * set direction
   */
  setDirection() {
    const self = this
    // set direction
    if (!self.initial && (self.currentIndex === null || self.oldIndex === null)) {
      self.direction = 0
    } else if (self.inverse !== null) {
      self.direction = self.inverse ? -1 : 1
    } else {
      self.direction = self.currentIndex < self.oldIndex ? -1 : 1
    }
  }

  /**
   * activate element
   * @param {Node|HTMLElement|EventTarget|Window} el Elements to be activated
   * @param {String} type Type of element
   */
  activate(el, type) {
    const self = this
    const options = self.options
    // activation
    if (!options.classSkip || !options.classSkip[type]) {
      el.classList.add(...self.classes)
      el.classList.remove(...self.classesActive)
      el.classList.remove(...self.classesOut)
      el.classList.remove(...self.classesDone)
      if (self.initial && !self.wrap) {
        el.classList.add(...self.classesInitial)
      }
      // keep the same level of raf as others
      cancelAnimationFrame(Xt.dataStorage.get(el, `${self.componentNamespace}ActivateFrame`))
      Xt.dataStorage.put(
        el,
        `${self.componentNamespace}ActivateFrame`,
        requestAnimationFrame(() => {
          el.classList.add(...self.classesActive)
          // remove initial instantly when wrap
          if (el.classList.contains('xt-wrap')) {
            el.classList.remove(...self.classesInitial)
          }
        })
      )
      // direction
      if (self.direction >= 0) {
        el.classList.remove(...self.classesInverse)
      } else {
        el.classList.add(...self.classesInverse)
      }
    }
  }

  /**
   * activate element done
   * @param {Node|HTMLElement|EventTarget|Window} el Elements to be deactivated
   * @param {String} type Type of element
   */
  activateDone(el, type) {
    const self = this
    const options = self.options
    // activation
    if (!options.classSkip || !options.classSkip[type]) {
      el.classList.add(...self.classesDone)
    }
  }

  /**
   * deactivate element
   * @param {Node|HTMLElement|EventTarget|Window} el Elements to be deactivated
   * @param {String} type Type of element
   */
  deactivate(el, type) {
    const self = this
    const options = self.options
    // activation
    if (!options.classSkip || !options.classSkip[type]) {
      el.classList.remove(...self.classes)
      el.classList.remove(...self.classesActive)
      el.classList.add(...self.classesOut)
      el.classList.remove(...self.classesDone)
      if (self.direction >= 0) {
        el.classList.remove(...self.classesInverse)
      } else {
        el.classList.add(...self.classesInverse)
      }
    }
  }

  /**
   * deactivate element done
   * @param {Node|HTMLElement|EventTarget|Window} el Elements to be deactivated
   * @param {String} type Type of element
   */
  deactivateDone(el, type) {
    const self = this
    const options = self.options
    // activation
    if (!options.classSkip || !options.classSkip[type]) {
      el.classList.remove(...self.classesOut)
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
   * @return {Boolean} If activated
   */
  eventOn(element, force = false, e = null) {
    const self = this
    const options = self.options
    // disabled
    if (self.disabled) {
      return false
    }
    // toggle
    if (force || (self.checkOn(element) && (!e || !e.type || e.type !== 'off.trigger.xt'))) {
      // auto
      self.eventAutostop()
      // on
      const groupElements = self.getElements(element)
      self.addCurrent(groupElements[0])
      self.setIndex(element)
      self.setDirection()
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
      // eslint-disable-next-line guard-for-in
      for (const type in self.detail[`queue${actionCurrent}`][0]) {
        self.queueStart(actionCurrent, actionOther, type, 0, true)
      }
      // activationd
      return true
    } else if (!e || !e.type || e.type !== 'on.trigger.xt') {
      self.eventOff(element, false, e)
    }
    // activationd
    return false
  }

  /**
   * element off
   * @param {Node|HTMLElement|EventTarget|Window} element To be deactivated
   * @param {Boolean} force
   * @param {Event} e
   * @return {Boolean} If deactivated
   */
  eventOff(element, force = false, e = null) {
    const self = this
    const options = self.options
    // disabled
    if (self.disabled) {
      return false
    }
    // toggle
    if (force || (!element.classList.contains('xt-block') && self.checkOff(element))) {
      // off
      const groupElements = self.getElements(element)
      self.removeCurrent(groupElements[0])
      // @FIX raf for sequential activation/deactivation (eg: mousenter mouseleave)
      requestAnimationFrame(() => {
        if (self.getCurrents().length === 0) {
          self.currentIndex = null
        }
        self.setDirection()
      })
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
      // auto
      if (!self.getCurrents().length) {
        self.eventAutostop()
      }
      // queue obj
      const actionCurrent = 'Off'
      const actionOther = 'On'
      self.eventQueue(actionCurrent, groupElements, targets, elementsInner, targetsInner, e)
      // remove queue not started if queue too big
      if (self.detail[`queue${actionCurrent}`].length > options.max) {
        // remove queue and stop
        const removedOn = self.detail[`queue${actionOther}`].shift()
        self.queueStop(actionOther, actionCurrent, removedOn)
        // remove queue and stop
        const removedOff = self.detail[`queue${actionCurrent}`].shift()
        self.queueStop(actionCurrent, actionOther, removedOff)
      }
      // queue run
      // eslint-disable-next-line guard-for-in
      for (const type in self.detail[`queue${actionCurrent}`][0]) {
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
      self.detail[`queue${actionCurrent}`] = [obj]
    } else {
      self.detail[`queue${actionCurrent}`].unshift(obj)
    }
  }

  /**
   * auto
   */
  eventAuto() {
    const self = this
    const options = self.options
    // disabled
    if (self.disabled) {
      return
    }
    // auto
    if (!self.detail.autopaused) {
      if (Xt.visible(self.object)) {
        // not when disabled
        if (options.auto.inverse) {
          self.goToPrev(options.auto.step)
        } else {
          self.goToNext(options.auto.step)
        }
      }
    }
  }

  /**
   * auto start
   */
  eventAutostart() {
    const self = this
    const options = self.options
    // disabled
    if (self.disabled) {
      return
    }
    // start
    if (options.auto && options.auto.time && !Xt.noAuto && !self.wrap) {
      // not when nothing activated
      if (self.currentIndex !== null && (!self.initial || options.auto.initial)) {
        // clear
        clearTimeout(Xt.dataStorage.get(self.object, `${self.componentNamespace}AutoTimeout`))
        // auto
        const time = options.auto.time
        // @fix raf because after .xt custom listeners
        requestAnimationFrame(() => {
          // timeout
          Xt.dataStorage.set(
            self.object,
            `${self.componentNamespace}AutoTimeout`,
            setTimeout(() => {
              // auto
              self.eventAuto()
            }, time)
          )
          // listener dispatch
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
    if (options.auto && options.auto.time && !self.wrap) {
      // clear
      clearTimeout(Xt.dataStorage.get(self.object, `${self.componentNamespace}AutoTimeout`))
      // listener dispatch
      self.object.dispatchEvent(new CustomEvent('autostop.xt'))
    }
  }

  /**
   * auto pause
   */
  eventAutopause() {
    const self = this
    const options = self.options
    // disabled
    if (self.disabled) {
      return
    }
    // pause
    if (options.auto && options.auto.time) {
      if (!self.detail.autopaused) {
        // paused
        self.detail.autopaused = true
        // clear
        clearTimeout(Xt.dataStorage.get(self.object, `${self.componentNamespace}AutoTimeout`))
        // listener dispatch
        self.object.dispatchEvent(new CustomEvent('autopause.xt'))
      }
    }
  }

  /**
   * auto resume
   */
  eventAutoresume() {
    const self = this
    const options = self.options
    // disabled
    if (self.disabled) {
      return
    }
    // @FIX focus eventAutoresume happening after first interaction
    requestAnimationFrame(() => {
      // pause
      if (options.auto && options.auto.time) {
        if (self.detail.autopaused) {
          // paused
          self.detail.autopaused = false
          // resume
          self.eventAutostart()
          // listener dispatch
          self.object.dispatchEvent(new CustomEvent('autoresume.xt'))
        }
      }
    })
  }

  /**
   * jump
   * @param {Node|HTMLElement|EventTarget|Window} tr
   */
  eventJump(tr) {
    const self = this
    // disabled
    if (self.disabled) {
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
   */
  eventNav(nav) {
    const self = this
    // disabled
    if (self.disabled) {
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

  /**
   * medialoadedReinit
   */
  eventMedialoadedReinit() {
    const self = this
    // debug
    if (Xt.debug) {
      console.debug('Xt.debug mediaLoadedReinit', self.object)
    }
    // restart
    self.reinit()
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
    const obj = self.detail[`queue${actionCurrent}`][index]
    if (obj && obj[type] && !obj[type].done) {
      const queueOther = self.detail[`queue${actionOther}`]
      const objOther = queueOther[queueOther.length - 1]
      /*
      if (objOther) {
        if (objOther[type]) {
          console.debug(actionCurrent, type, objOther[type].done)
        } else {
          console.debug(actionCurrent, type, 'no obj type')
        }
      } else {
        console.debug(actionCurrent, type, 'no obj')
      }
      */
      if (!objOther || !objOther[type] || objOther[type].done) {
        // @FIX if initial must be instant, fixes queue
        if (self.initial || (typeof options.instant !== 'object' && options.instant === true)) {
          obj[type].instant = true
        } else if (typeof options.instant === 'object' && options.instant[type]) {
          obj[type].instantType = true
        }
        // start queue
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
          cancelAnimationFrame(Xt.dataStorage.get(el, `${self.componentNamespace}CollapseFrame`))
          cancelAnimationFrame(Xt.dataStorage.get(el, `${self.componentNamespace + type}AnimFrame`))
          clearTimeout(Xt.dataStorage.get(el, `${self.componentNamespace + type}DelayTimeout`))
          clearTimeout(Xt.dataStorage.get(el, `${self.componentNamespace + type}AnimTimeout`))
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
        // remove queue and stop
        const removed = self.detail[`queue${action.current}`].shift()
        self.queueStop(action.current, action.other, removed)
        self.detail[`queue${action.current}`] = []
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
      let delay = options.delay || options[`delay${actionCurrent}`]
      if (delay) {
        if (isNaN(delay)) {
          const count = Xt.dataStorage.get(el, `${self.componentNamespace + actionCurrent}Count`) || els.findIndex(x => x === el)
          const tot = Xt.dataStorage.get(el, `${self.componentNamespace + actionCurrent}Tot`) || els.length
          if (typeof delay === 'function') {
            delay = delay(count, tot - 1)
          }
        } else {
          delay = queueInitial && !options.delayInitial ? 0 : delay
        }
      }
      if (actionCurrent === 'On') {
        // listener dispatch
        el.dispatchEvent(new CustomEvent('ondelay.xt'))
      } else if (actionCurrent === 'Off') {
        // listener dispatch
        el.dispatchEvent(new CustomEvent('offdelay.xt'))
      }
      // delay fnc
      cancelAnimationFrame(Xt.dataStorage.get(el, `${self.componentNamespace + type}AnimFrame`))
      clearTimeout(Xt.dataStorage.get(el, `${self.componentNamespace + type}DelayTimeout`))
      clearTimeout(Xt.dataStorage.get(el, `${self.componentNamespace + type}AnimTimeout`))
      if (!delay) {
        self.queueDelayDone(actionCurrent, actionOther, obj, el, type)
      } else {
        Xt.dataStorage.set(
          el,
          `${self.componentNamespace + type}DelayTimeout`,
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
      // activation
      self.activate(el, type)
      // special
      self.specialBackdrop(actionCurrent, obj, el, type)
      self.specialClassHtml(actionCurrent, type)
      self.specialScrollbar(actionCurrent, type)
      self.specialCollapse(actionCurrent, el, type)
      self.specialClose(actionCurrent, el, type)
      if (options.focusLimit) {
        if (obj.targets) {
          if (type === 'targets') {
            Xt.focusLimit.on(obj.targets.queueEls[0])
          }
        } else if (type === 'elements') {
          Xt.focusLimit.on(obj.elements.queueEls[0])
        }
      }
      // @FIX when standalone !self.targets.length && type === 'elements'
      if (type === 'targets' || (!self.targets.length && type === 'elements')) {
        // appendTo
        if (options.appendTo) {
          const appendToTarget = document.querySelector(options.appendTo)
          const appendOrigin = document.querySelector(`[data-xt-origin="${self.namespace}"]`)
          if (!appendOrigin) {
            el.before(Xt.createElement(`<div class="xt-ignore" data-xt-origin="${self.namespace}"></div>`))
          }
          el.classList.add('xt-ignore', 'xt-ignore-once') // @FIX ignore once for mount when moving
          appendToTarget.append(el)
        }
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
        if (options.aria === true || (typeof options.aria === 'object' && options.aria.tabindex)) {
          if (type === 'targets') {
            const focusables = el.querySelectorAll(Xt.focusables)
            for (const focusable of focusables) {
              focusable.removeAttribute('tabindex')
            }
          }
        }
      }
      // listener dispatch
      if (type !== 'elementsInner' && type !== 'targetsInner') {
        el.dispatchEvent(new CustomEvent('on.xt'))
      }
    } else if (actionCurrent === 'Off') {
      // activation
      self.deactivate(el, type)
      // special
      self.specialClassHtml(actionCurrent, type)
      self.specialCollapse(actionCurrent, el, type)
      self.specialClose(actionCurrent, el, type)
      if (options.focusLimit) {
        const el = obj.targets ? obj.targets.queueEls[0] : obj.elements.queueEls[0]
        Xt.focusLimit.off(el)
      }
      // listener dispatch
      if (type !== 'elementsInner' && type !== 'targetsInner') {
        el.dispatchEvent(new CustomEvent('off.xt'))
      }
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
    // special
    self.specialZindex(actionCurrent, el, type)
    // anim
    const duration = Xt.noDuration ? 0 : Xt.animTime(el, options.duration || options[`duration${actionCurrent}`])
    clearTimeout(Xt.dataStorage.get(el, `${self.componentNamespace + type}AnimTimeout`))
    // queue done
    if (!duration) {
      // keep the same level of raf as others
      cancelAnimationFrame(Xt.dataStorage.get(el, `${self.componentNamespace + type}AnimFrame`))
      Xt.dataStorage.set(
        el,
        `${self.componentNamespace + type}AnimFrame`,
        requestAnimationFrame(() => {
          self.queueAnimDone(actionCurrent, actionOther, obj, el, type)
        })
      )
    } else {
      Xt.dataStorage.set(
        el,
        `${self.componentNamespace + type}AnimTimeout`,
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
    // special
    if (actionCurrent === 'On') {
      // activation
      self.activateDone(el, type)
      // special
      self.specialCollapse('Reset', el, type)
      // listener dispatch
      if (type !== 'elementsInner' && type !== 'targetsInner') {
        el.dispatchEvent(new CustomEvent('ondone.xt'))
      }
    } else if (actionCurrent === 'Off') {
      // activation
      self.deactivateDone(el, type)
      // special
      self.specialBackdrop(actionCurrent, obj, el, type)
      self.specialScrollbar(actionCurrent, type)
      if (type === 'targets' || (!self.targets.length && type === 'elements')) {
        // appendTo
        if (options.appendTo) {
          const appendOrigin = document.querySelector(`[data-xt-origin="${self.namespace}"]`)
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
          if (options.aria === true || (typeof options.aria === 'object' && options.aria.tabindex)) {
            const focusables = el.querySelectorAll(Xt.focusables)
            for (const focusable of focusables) {
              focusable.setAttribute('tabindex', '-1')
              focusable.blur()
            }
          }
        }
      }
      // listener dispatch
      if (type !== 'elementsInner' && type !== 'targetsInner') {
        el.dispatchEvent(new CustomEvent('offdone.xt'))
      }
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
      // queue
      self.queueStart(actionOther, actionCurrent, type, self.detail[`queue${actionOther}`].length - 1)
      // all done
      if (done === Object.entries(obj).length) {
        // remove queue
        self.detail[`queue${actionCurrent}`].pop()
        // queue complete
        self.queueComplete(actionCurrent, obj)
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
    if (actionCurrent === 'On') {
      // auto
      self.eventAutostart()
      // @fix raf because after .xt custom listeners
      requestAnimationFrame(() => {
        // remove class initial
        if (self.initial) {
          for (const type in obj) {
            if (obj[type].done) {
              for (const el of obj[type].queueEls) {
                el.classList.remove(...self.classesInitial)
              }
            }
          }
        }
        // reset
        self.inverse = null
        self.initial = false
        self.wrap = false
      })
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
    if (self.disabled) {
      return
    }
    // prevent default if not loop
    const max = self.getElementsGroups().length - 1
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
    if (self.disabled) {
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
    // stop old when changing wheel target
    if (self.wheelTarget !== el) {
      self.eventWheelstop()
    }
    self.wheelTarget = el
    // delta
    if (e.deltaMode === 1) {
      // deltaMode 1: by lines
      delta *= 30
    } else if (e.deltaMode === 2) {
      // deltaMode 2: by pages
      if (options.wheel.horizontal) {
        delta *= el.clientWidth
      } else {
        delta *= el.clientHeight
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
          max = el.scrollWidth - el.clientWidth
        } else {
          max = el.scrollHeight - el.clientHeight
        }
      } else {
        let full = 0
        if (options.wheel.horizontal) {
          for (const child of el.children) {
            full += child.clientWidth
          }
          max = full - el.clientWidth
        } else {
          for (const child of el.children) {
            full += child.clientHeight
          }
          max = full - el.clientHeight
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
        const translate = Xt.getTranslate(el)
        if (options.wheel.horizontal) {
          self.detail.wheelCurrent = -translate[0]
        } else {
          self.detail.wheelCurrent = -translate[1]
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
    if (self.disabled) {
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
        el.style.transform = `translateX(${-self.detail.wheelCurrent}px)`
      } else {
        el.style.transform = `translateY(${-self.detail.wheelCurrent}px)`
      }
    }
    // loop
    if (self.detail.wheelCurrent > min && self.detail.wheelCurrent < max && deltaAbs >= options.wheel.frictionLimit) {
      // friction
      cancelAnimationFrame(Xt.dataStorage.get(self.wheel, `${self.componentNamespace}WheelsmoothFrame`))
      Xt.dataStorage.set(
        self.wheel,
        `${self.componentNamespace}WheelsmoothFrame`,
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
    cancelAnimationFrame(Xt.dataStorage.get(el, `${self.componentNamespace}WheelsmoothFrame`))
    self.detail.wheelMoving = false
  }

  //
  // special
  //

  /**
   * zindex on activation
   * @param {String} actionCurrent Current action
   * @param {Node|HTMLElement|EventTarget|Window} el Element to be animated
   * @param {String} type Type of element
   */
  specialZindex(actionCurrent, el, type) {
    const self = this
    const options = self.options
    if (options.zIndex && options.zIndex[type]) {
      if (actionCurrent === 'On') {
        self.detail.zIndex = self.detail.zIndex ? self.detail.zIndex : options.zIndex[type].start
        self.detail.zIndex = self.detail.zIndex + options.zIndex[type].factor
        el.style.zIndex = self.detail.zIndex
      } else if (actionCurrent === 'Off') {
        self.detail.zIndex = options.zIndex[type].start + options.zIndex[type].factor
        el.style.zIndex = self.detail.zIndex
      }
    }
  }

  /**
   * backdrop append to element
   * @param {String} actionCurrent Current action
   * @param {Object} obj Queue object
   * @param {Node|HTMLElement|EventTarget|Window} el Element to be animated
   * @param {String} type Type of element
   */
  specialBackdrop(actionCurrent, obj, el, type) {
    const self = this
    const options = self.options
    // backdrop
    if (options.backdrop) {
      if ((obj['targets'] && type === 'targets') || (!obj['targets'] && type === 'elements')) {
        if (actionCurrent === 'On') {
          const backdrops = el.querySelectorAll('.backdrop')
          if (!backdrops.length) {
            const backdrop = Xt.createElement('<div class="backdrop xt-ignore"></div>')
            el.append(backdrop)
            // @FIX pass wheel event or when you mousewheel over .backdrop it doesn't scroll
            const eWheel = 'onwheel' in backdrop ? 'wheel' : backdrop.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll'
            backdrop.addEventListener(
              eWheel,
              e => {
                const delta = -e.deltaY || e.wheelDeltaY
                el.scrollTop -= delta
              },
              { passive: true }
            )
          }
        } else if (actionCurrent === 'Off') {
          const backdrops = el.querySelectorAll('.backdrop')
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
   * add or remove html class
   * @param {String} actionCurrent Current action
   * @param {String} type Type of element
   */
  specialClassHtml(actionCurrent, type) {
    const self = this
    const options = self.options
    if (options.classHtml) {
      if (type === 'elements') {
        if (actionCurrent === 'On') {
          // class on
          const container = document.documentElement
          container.classList.add(...options.classHtml.split(' '))
        } else if (actionCurrent === 'Off') {
          // class off
          const container = document.documentElement
          container.classList.remove(...options.classHtml.split(' '))
        }
      }
    }
  }

  /**
   * scrollbar activation
   * @param {String} actionCurrent Current action
   * @param {String} type Type of element
   */
  specialScrollbar(actionCurrent, type) {
    const self = this
    const options = self.options
    if (options.scrollbar) {
      if (type === 'elements') {
        if (actionCurrent === 'On') {
          // checks
          Xt.scrollbar.add(self.namespace)
          // scrollbar
          const container = document.documentElement
          container.classList.add('xt-scrollbar')
          Xt.scrollbarSpaceOn(container)
        } else if (actionCurrent === 'Off') {
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
  }

  /**
   * open or close or reset collapse
   * @param {String} actionCurrent Current action
   * @param {Node|HTMLElement|EventTarget|Window} el Element
   * @param {String} type Type of element
   */
  specialCollapse(actionCurrent, el, type) {
    const self = this
    const options = self.options
    if (el instanceof HTMLElement) {
      if (actionCurrent === 'On') {
        if (options.collapseHeight === type) {
          el.classList.remove('xt-collapse-reset')
          el.classList.add('trans-anim-none')
          el.style.height = 'auto'
          const h = `${el.clientHeight}px`
          el.style.height = '0'
          el.classList.remove('trans-anim-none')
          // keep the same level of raf as others
          cancelAnimationFrame(Xt.dataStorage.get(el, `${self.componentNamespace}CollapseFrame`))
          Xt.dataStorage.set(
            el,
            `${self.componentNamespace}CollapseFrame`,
            requestAnimationFrame(() => {
              el.style.height = h
            })
          )
        }
        if (options.collapseWidth === type) {
          el.classList.remove('xt-collapse-reset')
          el.classList.add('trans-anim-none')
          el.style.width = 'auto'
          const w = `${el.clientWidth}px`
          el.style.width = '0'
          el.classList.remove('trans-anim-none')
          // keep the same level of raf as others
          cancelAnimationFrame(Xt.dataStorage.get(el, `${self.componentNamespace}CollapseFrame`))
          Xt.dataStorage.set(
            el,
            `${self.componentNamespace}CollapseFrame`,
            requestAnimationFrame(() => {
              el.style.width = w
            })
          )
        }
      } else if (actionCurrent === 'Off') {
        if (options.collapseHeight === type) {
          el.classList.remove('xt-collapse-reset')
          el.classList.add('trans-anim-none')
          const h = `${el.offsetHeight}px`
          el.style.height = h
          el.classList.remove('trans-anim-none')
          // keep the same level of raf as others
          cancelAnimationFrame(Xt.dataStorage.get(el, `${self.componentNamespace}CollapseFrame`))
          Xt.dataStorage.set(
            el,
            `${self.componentNamespace}CollapseFrame`,
            requestAnimationFrame(() => {
              el.style.height = '0'
            })
          )
        }
        if (options.collapseWidth === type) {
          el.classList.remove('xt-collapse-reset')
          el.classList.add('trans-anim-none')
          const w = `${el.offsetWidth}px`
          el.style.width = w
          el.classList.remove('trans-anim-none')
          // keep the same level of raf as others
          cancelAnimationFrame(Xt.dataStorage.get(el, `${self.componentNamespace}CollapseFrame`))
          Xt.dataStorage.put(
            el,
            `${self.componentNamespace}CollapseFrame`,
            requestAnimationFrame(() => {
              el.style.width = '0'
            })
          )
        }
      } else if (actionCurrent === 'Reset') {
        if (options.collapseHeight === type) {
          el.style.height = 'inherit'
          el.classList.add('xt-collapse-reset')
        }
        if (options.collapseWidth === type) {
          el.style.width = 'inherit'
          el.classList.add('xt-collapse-reset')
        }
      }
    }
  }

  /**
   * add or remove close events on element
   * @param {String} actionCurrent Current action
   * @param {Node|HTMLElement|EventTarget|Window} el Element
   * @param {String} type Type of element
   */
  specialClose(actionCurrent, el, type) {
    const self = this
    const options = self.options
    if (type === 'targets' || type === 'targetsInner' || el === self.object) {
      if (actionCurrent === 'On') {
        // closeInside
        if (options.closeInside) {
          const closeElements = el.querySelectorAll(options.closeInside)
          for (const closeElement of closeElements) {
            const specialcloseinsideHandler = Xt.dataStorage.put(closeElement, `click/close/${self.namespace}`, self.eventSpecialcloseinsideHandler.bind(self))
            // @FIX do not close when clicking things that trigger this
            requestAnimationFrame(() => {
              closeElement.addEventListener('click', specialcloseinsideHandler)
            })
            // focusable
            const specialcloseinsideKeydownHandler = Xt.dataStorage.put(
              closeElement,
              `keydown/close/${self.namespace}`,
              self.eventSpecialcloseinsideKeydownHandler.bind(self).bind(self, closeElement)
            )
            // @FIX do not close when clicking things that trigger this
            requestAnimationFrame(() => {
              closeElement.addEventListener('keydown', specialcloseinsideKeydownHandler)
              closeElement.setAttribute('tabindex', '0')
              closeElement.setAttribute('role', 'button')
            })
          }
        }
        // closeOutside
        if (options.closeOutside) {
          const closeElements = document.querySelectorAll(options.closeOutside)
          for (const closeElement of closeElements) {
            const specialcloseoutsideHandler = Xt.dataStorage.put(
              closeElement,
              `click/close/${self.namespace}`,
              self.eventSpecialcloseoutsideHandler.bind(self)
            )
            // @FIX do not close when clicking things that trigger this
            requestAnimationFrame(() => {
              closeElement.removeEventListener('click', specialcloseoutsideHandler)
              closeElement.addEventListener('click', specialcloseoutsideHandler)
            })
          }
        }
      } else if (actionCurrent === 'Off') {
        // closeInside
        if (options.closeInside) {
          const closeElements = el.querySelectorAll(options.closeInside)
          for (const closeElement of closeElements) {
            const specialcloseinsideHandler = Xt.dataStorage.get(closeElement, `click/close/${self.namespace}`)
            closeElement.removeEventListener('click', specialcloseinsideHandler)
            // focusable
            const specialcloseinsideKeydownHandler = Xt.dataStorage.get(closeElement, `keydown/close/${self.namespace}`)
            closeElement.removeEventListener('keydown', specialcloseinsideKeydownHandler)
            closeElement.removeAttribute('tabindex')
            closeElement.removeAttribute('role')
          }
        }
        // closeOutside
        if (options.closeOutside) {
          const closeElements = document.querySelectorAll(options.closeOutside)
          for (const closeElement of closeElements) {
            const specialcloseoutsideHandler = Xt.dataStorage.get(closeElement, `click/close/${self.namespace}`)
            closeElement.removeEventListener('click', specialcloseoutsideHandler)
          }
        }
      }
    }
  }

  /**
   * specialClose on handler
   * @param {Event} e
   */
  eventSpecialcloseinsideHandler(e) {
    const self = this
    // handler
    if (Xt.contains([...self.elements, ...self.targets], e.target)) {
      const currents = self.getCurrents()
      for (const current of currents) {
        self.eventOff(current, true)
      }
    }
  }

  /**
   * specialClose keydown handler
   * @param {Node|HTMLElement|EventTarget|Window} closeElement
   * @param {Event} e
   */
  eventSpecialcloseinsideKeydownHandler(closeElement, e) {
    const code = e.keyCode ? e.keyCode : e.which
    // key enter or space
    if (code === 13 || code === 32) {
      e.preventDefault()
      closeElement.dispatchEvent(new CustomEvent('click'))
    }
  }

  /**
   * specialClose off handler
   * @param {Event} e
   */
  eventSpecialcloseoutsideHandler(e) {
    const self = this
    // handler
    if (!Xt.contains([...self.elements, ...self.targets], e.target)) {
      const currents = self.getCurrents()
      for (const current of currents) {
        self.eventOff(current, true)
      }
    }
  }

  // index
  //

  /**
   * get next index
   * @param {Number} amount
   * @param {Boolean} loop
   * @return {Number} index
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
   * @return {Number} index
   */
  getNext(amount = 1, loop = null) {
    const self = this
    // logic
    const i = self.getNextIndex(amount, loop)
    return self.getElementsGroups()[i]
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
    self.inverse = false
    self.goToNum(self.getNextIndex(amount, loop), force, loop)
  }

  /**
   * get prev index
   * @param {Number} amount
   * @param {Boolean} loop
   * @return {Number} index
   */
  getPrevIndex(amount = 1, loop = null) {
    const self = this
    // logic
    let index = self.getElementsGroups().length - 1
    if (self.currentIndex !== null) {
      index = self.currentIndex - amount
    }
    return self.getNumIndex(index, loop)
  }

  /**
   * get prev element
   * @param {Number} amount
   * @param {Boolean} loop
   * @return {Number} index
   */
  getPrev(amount = 1, loop = null) {
    const self = this
    // logic
    const i = self.getPrevIndex(amount, loop)
    return self.getElementsGroups()[i]
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
    self.inverse = true
    self.goToNum(self.getPrevIndex(amount, loop), force, loop)
  }

  /**
   * get number index
   * @param {Number} index
   * @param {Boolean} loop
   * @return {Number} index
   */
  getNumIndex(index, loop = null) {
    const self = this
    const options = self.options
    // check
    const min = 0
    const max = self.getElementsGroups().length - 1
    if (min === max) {
      // if only one go to the only one
      index = min
    } else {
      if (index > max) {
        if (loop || (loop === null && options.loop)) {
          index = index - max - 1
          index = index > max ? max : index // prevent overflow
        } else {
          index = max
        }
      } else if (index < min) {
        if (loop || (loop == null && options.loop)) {
          index = index + max + 1
          index = index < min ? min : index // prevent overflow
        } else {
          index = min
        }
      }
    }
    // element
    return index
  }

  /**
   * get number element
   * @param {Number} index
   * @param {Boolean} loop
   * @return {Element} element
   */
  getNum(index = 1, loop = null) {
    const self = this
    // logic
    const i = self.getNumIndex(index, loop)
    return self.getElementsGroups()[i]
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
    // check
    let check = self.object
    if (self.mode === 'unique') {
      check = self.targets[0]
    }
    // triggering e.detail.container
    if (!e || !e.detail || !e.detail.container || e.detail.container.contains(check)) {
      Xt.eventDelay(
        e,
        check,
        () => {
          // handler
          self.eventStatus()
        },
        `${self.componentNamespace}Status`
      )
    }
  }

  /**
   * status
   */
  eventStatus() {
    const self = this
    // check
    let check = self.object
    if (self.mode === 'unique') {
      check = self.targets[0]
    }
    // status
    const str = getComputedStyle(check, ':after').getPropertyValue('content').replace(/['"]+/g, '')
    if (
      check instanceof HTMLElement && // @FIX not on window
      str === 'xt-disable-after-init'
    ) {
      // @FIX do calculation first
      const afterInitDisable = () => {
        self.object.removeEventListener('init.xt', afterInitDisable)
        // @FIX after init activation
        requestAnimationFrame(() => {
          self.disable()
        })
      }
      self.object.addEventListener('init.xt', afterInitDisable)
    } else if (str === 'xt-disable') {
      self.disable()
    } else {
      self.enable()
    }
  }

  /**
   * enable
   */
  enable() {
    const self = this
    if (self.disabled) {
      // enable
      self.disabled = false
      self.object.classList.remove('xt-disabled')
    }
  }

  /**
   * disable
   */
  disable() {
    const self = this
    const options = self.options
    if (!self.disabled) {
      // closeOnDisable
      if (options.closeOnDisable) {
        // @FIX appendTo targets
        for (const target of self.targets) {
          // listener dispatch
          target.dispatchEvent(new CustomEvent('off.trigger.xt'))
        }
      }
      // stop auto
      clearTimeout(Xt.dataStorage.get(self.object, `${self.componentNamespace}AutoTimeout`))
      // disable
      self.disabled = true
      self.object.classList.add('xt-disabled')
    }
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
    // check
    let check = self.object
    if (self.mode === 'unique') {
      check = self.targets[0]
    }
    // triggering e.detail.container
    if (!e || !e.detail || !e.detail.container || e.detail.container.contains(check)) {
      Xt.eventDelay(
        e,
        self.object,
        () => {
          // handler
          self.reinit()
        },
        `${self.componentNamespace}Reinit`
      )
    }
  }

  /**
   * reinit
   * @param {Boolean} saveCurrents
   */
  reinit(saveCurrents = true) {
    const self = this
    // @FIX bug when remove all elements, element becomes the object, then and add new elements
    self.destroy(true)
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
    // restart
    self.initStart()
    // listener dispatch
    self.object.dispatchEvent(new CustomEvent('restart.xt'))
  }

  /**
   * destroy
   * @param {Boolean} weak Do not destroy component
   */
  destroy(weak = false) {
    const self = this
    // [disabled]
    self.destroyDisabled()
    // disable
    self.disable()
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
                    element.removeEventListener(event, handler)
                    element.removeEventListener(event, handler, true)
                    Xt.dataStorage.remove(element, key)
                  }
                }
              }
            }
          }
        }
      }
    }
    // xtNamespace linked components
    const selfs = Xt.dataStorage.get(self.namespace, 'xtNamespace')
    selfs.filter(x => x !== self)
    Xt.dataStorage.set(self.namespace, 'xtNamespace', selfs)
    // weak
    if (!weak) {
      // initialized class
      self.object.removeAttribute('data-xt-component', self.componentName)
      // set self
      Xt.remove(self.componentName, self.object)
      // listener dispatch
      self.object.dispatchEvent(new CustomEvent('destroy.xt'))
      // delete
      delete this
    }
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
  // element
  elements: ':scope > a, :scope > button',
  targets: ':scope > .toggle, :scope > .toggle-inverse',
  elementsInner: false,
  targetsInner: false,
  // class
  class: 'in in-toggle',
  classActive: 'active',
  classOut: 'out',
  classDone: 'done',
  classInitial: 'initial',
  classInverse: 'inverse',
  classSkip: false,
  // quantity
  min: 0,
  max: 1,
  autoDisable: true,
  // event
  on: 'click',
  off: false,
  eventLimit: '.event-limit',
  preventEvent: false,
  // timing
  instant: {
    elements: true,
    targets: false,
    elementsInner: true,
    targetsInner: false,
  },
  delay: false,
  delayOn: false,
  delayOff: false,
  delayInitial: true,
  duration: false,
  durationOn: false,
  durationOff: false,
  // auto
  auto: {
    time: false,
    initial: true,
    step: 1,
    inverse: false,
    pause: false,
  },
  // other
  loop: true,
  jump: false,
  navigation: false,
  keyboard: {
    selector: false,
  },
  backdrop: false,
  appendTo: false,
  classHtml: false,
  closeAuto: false,
  closeInside: false,
  closeOutside: false,
  closeOnDisable: false,
  scrollbar: false,
  onBlock: false,
  offBlock: false,
  mediaLoaded: false,
  mediaLoadedReinit: false,
  zIndex: false,
  focusLimit: false,
  collapseHeight: false,
  collapseWidth: false,
  aria: {
    tabindex: true,
    controls: true,
    describedby: true,
    labelledby: false,
  },
}

//
// export
//

Xt.Toggle = Toggle

//
// observe
//

Xt.mount.push({
  matches: `[data-${Xt.Toggle.componentName}]`,
  mount: object => {
    // vars

    const optionsMarkup = object.getAttribute(`data-${Xt.Toggle.componentName}`)
    const options = optionsMarkup ? JSON5.parse(optionsMarkup) : {}

    // init

    let self = new Xt.Toggle(object, options)

    // unmount

    return () => {
      self.destroy()
      self = null
    }
  },
})
