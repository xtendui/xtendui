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
    self.componentNs = self.componentName.replace('-', '.')
    // set self
    Xt.set(self.componentName, self.object, self)
    // init
    self.init()
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
    self.classesBefore = []
    self.classesAfter = []
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
    self.optionsInitial = self.options = Xt.merge([self.optionsDefault, self.optionsCustom])
    // classes
    self.classes = self.options.class ? [...self.options.class.split(' ')] : []
    self.classesActive = self.options.classActive ? [...self.options.classActive.split(' ')] : []
    self.classesOut = self.options.classOut ? [...self.options.classOut.split(' ')] : []
    self.classesDone = self.options.classDone ? [...self.options.classDone.split(' ')] : []
    self.classesInitial = self.options.classInitial ? [...self.options.classInitial.split(' ')] : []
    self.classesBefore = self.options.classBefore ? [...self.options.classBefore.split(' ')] : []
    self.classesAfter = self.options.classAfter ? [...self.options.classAfter.split(' ')] : []
  }

  /**
   * init logic
   * @param {Boolean} saveCurrents
   */
  initLogic(saveCurrents = true) {
    const self = this
    // init
    self.initSetup()
    self.initMatch()
    self.initScope()
    self.initAria()
    self.initEvents()
    self.initStart(saveCurrents)
    self.initStatus()
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
      self.ns = `${self.componentName}-${options.targets.toString()}-${self.classes.toString()}`
    } else {
      // xtend multiple mode
      self.mode = 'multiple'
      self.container = self.object
      const uniqueId = Xt.dataStorage.get(self.container, 'xtUniqueId')
      Xt.dataStorage.set(self.container, 'xtUniqueId', uniqueId || Xt.getuniqueId())
      self.ns = `${self.componentName}-${Xt.dataStorage.get(self.container, 'xtUniqueId')}`
    }
    // final namespace
    self.ns = self.ns.replace(/^[^a-z]+|[ ,#_:.-]+/gi, '')
    // xtNamespace linked components
    const arr = Xt.dataStorage.get(self.ns, 'xtNamespace') || []
    arr.push(self)
    Xt.dataStorage.set(self.ns, 'xtNamespace', arr)
    // currents array based on namespace (so shared between Xt objects)
    self.setCurrents([])
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
    if (options.elements && self.mode !== 'unique') {
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
    Xt.running[self.ns] = []
    // [disabled]
    self.destroyDisabled()
    // check elements
    for (const element of self.elements) {
      // reset
      const found = self.initCheck(element, saveCurrents)
      if (found && currents < options.max) {
        // initial
        currents++
        // keep the same level of raf as others
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            self.eventOn(element, true)
          })
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
      // keep the same level of raf as others
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          self.initialCurrents = self.getCurrents().slice(0)
        })
      })
    }
    // no currents
    if (currents === 0) {
      // @FIX autostart after self.initial or it gives error on reinitialization (demos fullscreen)
      self.initial = false
      // auto
      self.eventAutostart()
    }
    // initialized class
    if (!options.classSkip) {
      self.object.classList.add(`${self.componentName}-init`)
    }
    // keep the same level of raf as others
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        // listener dispatch
        self.object.dispatchEvent(new CustomEvent(`init.${self.componentNs}`))
      })
    })
  }

  /**
   * init check element activation
   * @param {Node|HTMLElement|EventTarget|Window} el Element to check
   * @param {Boolean} saveCurrents
   * @return {Boolean} if element was activated
   */
  initCheck(el, saveCurrents = false) {
    const self = this
    const options = self.options
    // check
    const check = elCheck => {
      for (const c of self.classes) {
        if (elCheck.classList.contains(c)) {
          return true
        }
      }
      return false
    }
    // logic
    let activated = false
    // check if activated
    if (saveCurrents) {
      activated = check(el)
    } else if (self.initialCurrents.includes(el)) {
      activated = true
    }
    // remove classes !saveCurrents needed to not flickr on initialization
    if (!saveCurrents) {
      el.classList.remove(
        ...self.classes,
        ...self.classesActive,
        ...self.classesOut,
        ...self.classesDone,
        ...self.classesInitial,
        ...self.classesBefore,
        ...self.classesAfter
      )
      const elsInner = Xt.queryAll(el, options.elementsInner)
      for (const elInner of elsInner) {
        elInner.classList.remove(
          ...self.classes,
          ...self.classesActive,
          ...self.classesOut,
          ...self.classesDone,
          ...self.classesInitial,
          ...self.classesBefore,
          ...self.classesAfter
        )
      }
    }
    // check targets
    const targets = self.getTargets(el)
    for (const tr of targets) {
      // check if activated
      if (!activated) {
        if (saveCurrents) {
          activated = check(tr)
        }
      }
      // remove classes !saveCurrents needed to not flickr on initialization
      if (!saveCurrents) {
        tr.classList.remove(
          ...self.classes,
          ...self.classesActive,
          ...self.classesOut,
          ...self.classesDone,
          ...self.classesInitial,
          ...self.classesBefore,
          ...self.classesAfter
        )
        const trsInner = Xt.queryAll(tr, options.targetsInner)
        for (const trInner of trsInner) {
          trInner.classList.remove(
            ...self.classes,
            ...self.classesActive,
            ...self.classesOut,
            ...self.classesDone,
            ...self.classesInitial,
            ...self.classesBefore,
            ...self.classesAfter
          )
        }
      }
    }
    return activated
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
        // targets
        for (const tr of self.targets) {
          // id
          if (options.aria === true || options.aria.labelledby || options.aria.controls) {
            const id = tr.getAttribute('id')
            if (!id) {
              tr.setAttribute('id', Xt.getuniqueId())
            }
          }
        }
        // elements
        for (const el of self.elements) {
          // selected
          if (options.aria === true || options.aria.activation) {
            el.setAttribute('aria-selected', 'false')
          }
          // id
          if (options.aria === true || options.aria.labelledby || options.aria.controls) {
            const id = el.getAttribute('id')
            if (!id) {
              el.setAttribute('id', Xt.getuniqueId())
            }
          }
          // controls
          if (options.aria === true || options.aria.controls) {
            const trs = self.getTargets(el)
            let str = ' '
            str += ''
            for (const tr of trs) {
              str += ` ${tr.getAttribute('id')}`
            }
            el.setAttribute('aria-controls', str.trim())
          }
        }
        // targets
        for (const tr of self.targets) {
          // expanded
          if (options.aria === true || options.aria.activation) {
            const role = tr.getAttribute('role')
            if (role === 'tabpanel' || role === 'listbox' || role === 'tooltip' || role === 'dialog') {
              tr.setAttribute('aria-expanded', 'false')
            }
          }
          // tabindex
          if (options.aria === true || options.aria.tabindex) {
            const focusables = tr.querySelectorAll(Xt.focusables)
            for (const focusable of focusables) {
              focusable.setAttribute('tabindex', '-1')
            }
          }
          // describedby
          if (options.aria === true || options.aria.describedby) {
            const els = self.getElements(tr)
            let str = ' '
            str += ''
            for (const el of els) {
              str += ` ${el.getAttribute('id')}`
            }
            tr.setAttribute('aria-describedby', str.trim())
          }
          // labelledby
          if (options.aria === true || options.aria.labelledby) {
            const els = self.getElements(tr)
            let str = ' '
            str += ''
            for (const el of els) {
              str += ` ${el.getAttribute('id')}`
            }
            tr.setAttribute('aria-labelledby', str.trim())
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
        if (options.aria === true || options.aria.role) {
          if (self.mode === 'multiple') {
            self.object.setAttribute('role', 'tablist')
            if (options.max > 1) {
              self.object.setAttribute('aria-multiselectable', 'true')
            }
            for (const el of self.elements) {
              el.setAttribute('role', 'tab')
            }
            for (const tr of self.targets) {
              tr.setAttribute('role', 'tabpanel')
            }
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
    // elements
    for (const el of self.elements) {
      // event on
      if (options.on) {
        const onHandler = Xt.dataStorage.put(
          el,
          `${options.on}/${self.ns}`, // @FIX same event for on and off same namespace
          self.eventOnHandler.bind(self).bind(self, el)
        )
        const events = [...options.on.split(' ')]
        for (const event of events) {
          el.addEventListener(event, onHandler)
        }
        const onHandlerCustom = Xt.dataStorage.put(
          el,
          `${options.on}/${self.ns}`,
          self.eventOnHandler.bind(self).bind(self, el, true)
        )
        el.addEventListener(`on.trigger.${self.componentNs}`, onHandlerCustom)
        // preventEvent
        if (options.preventEvent) {
          if (events.includes('click') || events.includes('mouseenter') || events.includes('mousehover')) {
            // @FIX prevents click links on click until clicked two times
            const preventeventStartTouchHandler = Xt.dataStorage.put(
              el,
              `touchend/preventevent/${self.ns}`,
              self.eventPreventeventStartHandler.bind(self).bind(self, el)
            )
            el.addEventListener('touchend', preventeventStartTouchHandler)
          }
          if (events.includes('click')) {
            const preventeventStartMouseHandler = Xt.dataStorage.put(
              el,
              `mouseup/preventevent/${self.ns}`,
              self.eventPreventeventStartHandler.bind(self).bind(self, el)
            )
            el.addEventListener('mouseup', preventeventStartMouseHandler)
          }
        }
        Xt.dataStorage.put(el, `active/preventevent/${self.ns}`, self.hasCurrent(el))
      }
      // event off
      if (options.off) {
        const offHandler = Xt.dataStorage.put(
          el,
          `${options.off}/${self.ns}`, // @FIX same event for on and off same namespace
          self.eventOffHandler.bind(self).bind(self, el)
        )
        const events = [...options.off.split(' ')]
        for (const event of events) {
          el.addEventListener(event, offHandler)
        }
        const offHandlerCustom = Xt.dataStorage.put(
          el,
          `${options.off}/${self.ns}`, // @FIX same event for on and off same namespace
          self.eventOffHandler.bind(self).bind(self, el, true)
        )
        el.addEventListener(`off.trigger.${self.componentNs}`, offHandlerCustom)
      }
    }
    // targets
    for (const tr of self.targets) {
      // event on
      if (options.on) {
        const onHandler = Xt.dataStorage.put(
          tr,
          `${options.on}/${self.ns}`,
          self.eventOnHandler.bind(self).bind(self, tr, true)
        )
        tr.addEventListener(`on.trigger.${self.componentNs}`, onHandler)
      }
      // event off
      if (options.off) {
        const offHandlerCustom = Xt.dataStorage.put(
          tr,
          `${options.off}/${self.ns}`,
          self.eventOffHandler.bind(self).bind(self, tr, true)
        )
        tr.addEventListener(`off.trigger.${self.componentNs}`, offHandlerCustom)
      } else {
        const offHandlerCustom = Xt.dataStorage.put(
          tr,
          `${options.off}/${self.ns}`,
          self.eventOnHandler.bind(self).bind(self, tr, true)
        )
        tr.addEventListener(`off.trigger.${self.componentNs}`, offHandlerCustom)
      }
    }
    // auto
    if (options.auto && options.auto.time) {
      // focus
      const focusHandler = Xt.dataStorage.put(window, `focus/auto/${self.ns}`, self.eventAutoresume.bind(self))
      addEventListener('focus', focusHandler)
      // blur
      const blurHandler = Xt.dataStorage.put(window, `blur/auto/${self.ns}`, self.eventAutopause.bind(self))
      addEventListener('blur', blurHandler)
      // event
      const autostartHandler = Xt.dataStorage.put(self.object, `autostart/${self.ns}`, self.eventAutostart.bind(self))
      self.object.addEventListener(`autostart.trigger.${self.componentNs}`, autostartHandler)
      const autostopHandler = Xt.dataStorage.put(self.object, `autostop/${self.ns}`, self.eventAutostop.bind(self))
      self.object.addEventListener(`autostop.trigger.${self.componentNs}`, autostopHandler)
      const autopauseHandler = Xt.dataStorage.put(self.object, `autopause/${self.ns}`, self.eventAutopause.bind(self))
      self.object.addEventListener(`autopause.trigger.${self.componentNs}`, autopauseHandler)
      const autoresumeHandler = Xt.dataStorage.put(
        self.object,
        `autoresume/${self.ns}`,
        self.eventAutoresume.bind(self)
      )
      self.object.addEventListener(`autoresume.trigger.${self.componentNs}`, autoresumeHandler)
      // autopause
      if (options.auto.pause) {
        const autopauseEls = self.object.querySelectorAll(options.auto.pause)
        if (autopauseEls.length) {
          self.destroyElements.push(...autopauseEls)
          for (const el of autopauseEls) {
            // pause
            const autopauseOnHandler = Xt.dataStorage.put(
              el,
              `mouseenter focus/auto/${self.ns}`,
              self.eventAutopause.bind(self)
            )
            const eventsPause = ['mouseenter', 'focus']
            for (const event of eventsPause) {
              el.addEventListener(event, autopauseOnHandler)
            }
            // resume
            const autoresumeOnHandler = Xt.dataStorage.put(
              el,
              `mouseleave blur/auto/${self.ns}`,
              self.eventAutoresume.bind(self)
            )
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
        const jumpHandler = Xt.dataStorage.put(
          jump,
          `click/jump/${self.ns}`,
          self.eventJumpHandler.bind(self).bind(self, jump)
        )
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
          const navHandler = Xt.dataStorage.put(
            nav,
            `click/nav/${self.ns}`,
            self.eventNavHandler.bind(self).bind(self, nav)
          )
          nav.addEventListener('click', navHandler)
        }
      }
    }
    // keyboard
    if (options.keyboard && options.keyboard.selector) {
      const keyboards =
        options.keyboard.selector === 'object'
          ? Xt.arrSingle(self.object)
          : self.object.querySelectorAll(options.keyboard.selector)
      self.destroyElements.push(...keyboards)
      for (const keyboard of keyboards) {
        keyboard.setAttribute('tabindex', '0')
        // focus
        const keyboardfocusHandler = Xt.dataStorage.put(
          keyboard,
          `focus/keyboard/${self.ns}`,
          self.eventKeyboardfocusHandler.bind(self)
        )
        keyboard.addEventListener('focus', keyboardfocusHandler)
        // blur
        const keyboardblurHandler = Xt.dataStorage.put(
          keyboard,
          `blur/keyboard/${self.ns}`,
          self.eventKeyboardblurHandler.bind(self)
        )
        keyboard.addEventListener('blur', keyboardblurHandler)
      }
    }
    // closeauto
    if (options.closeAuto) {
      const closeautoHandler = Xt.dataStorage.put(window, `closeauto/${self.ns}`, self.eventCloseautoHandler.bind(self))
      addEventListener('closeauto.trigger.xt', closeautoHandler)
    }
    // mediaLoaded
    if (options.mediaLoaded || options.mediaLoadedReinit) {
      for (const el of self.elements.filter(x => !x.classList.contains('xt-ignore'))) {
        const imgs = el.querySelectorAll('img')
        self.destroyElements.push(...imgs)
        for (const img of imgs) {
          if (!Xt.dataStorage.get(img, `${self.ns}MedialoadedDone`)) {
            Xt.dataStorage.set(img, `${self.ns}MedialoadedDone`, true)
            if (!img.complete) {
              const medialoadedHandler = Xt.dataStorage.put(
                img,
                `load/media/${self.ns}`,
                self.eventMedialoadedHandler.bind(self).bind(self, el, true)
              )
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
          if (!Xt.dataStorage.get(img, `${self.ns}MedialoadedDone`)) {
            if (!img.complete) {
              const medialoadedHandler = Xt.dataStorage.put(
                img,
                `load/media/${self.ns}`,
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
      const wheelHandler = Xt.dataStorage.put(wheel, `${eWheel}/${self.ns}`, self.eventWheelHandler.bind(self))
      wheel.addEventListener(eWheel, wheelHandler, { passive: false })
      // stop
      const wheelstopHandler = Xt.dataStorage.put(wheel, `${eWheel}/stop/${self.ns}`, self.eventWheelstop.bind(self))
      wheel.addEventListener(`wheelstop.trigger.${self.componentNs}`, wheelstopHandler, { passive: false })
      // block
      if (options.wheel.block) {
        const block = wheel.parentNode
        const wheelblockHandler = Xt.dataStorage.put(
          block,
          `${eWheel}/block/${self.ns}`,
          self.eventWheelblockHandler.bind(self)
        )
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
   * @param {Boolean} force
   * @param {Event} e
   */
  eventOnHandler(element, e, force = false) {
    const self = this
    const options = self.options
    // @FIX groupElements and targets
    const el = options.groupElements || self.targets.includes(element) ? self.getElements(element)[0] : element
    // handler
    if (!force && options.eventLimit) {
      const eventLimit = self.container.querySelectorAll(options.eventLimit)
      if (self.container.matches(options.eventLimit)) {
        return
      } else if (eventLimit.length) {
        if (Xt.contains(eventLimit, e.target)) {
          return
        }
      }
    }
    self.eventOn(el, false, e)
  }

  /**
   * element off handler
   * @param {Node|HTMLElement|EventTarget|Window} elementelement
   * @param {Boolean} force
   * @param {Event} e
   */
  eventOffHandler(element, e, force = false) {
    const self = this
    const options = self.options
    // @FIX groupElements and targets
    const el = options.groupElements || self.targets.includes(element) ? self.getElements(element)[0] : element
    // handler
    if (!force && options.eventLimit) {
      const eventLimit = self.container.querySelectorAll(options.eventLimit)
      if (self.container.matches(options.eventLimit)) {
        return
      } else if (eventLimit.length) {
        if (Xt.contains(eventLimit, e.target)) {
          return
        }
      }
    }
    self.eventOff(el, false, e)
  }

  /**
   * init prevents click on touch until clicked two times
   * @param {Node|HTMLElement|EventTarget|Window} el
   */
  eventPreventeventStartHandler(el) {
    const self = this
    // active
    Xt.dataStorage.put(el, `active/preventevent/${self.ns}`, self.hasCurrent(el))
    // event link
    const preventeventHandler = Xt.dataStorage.put(
      el,
      `click/preventevent/${self.ns}`,
      self.eventPreventeventHandler.bind(self).bind(self, el)
    )
    el.addEventListener('click', preventeventHandler)
    // event reset
    const preventeventResetHandler = Xt.dataStorage.put(
      el,
      `off/preventevent/${self.ns}`,
      self.eventPreventeventResetHandler.bind(self).bind(self, el)
    )
    el.addEventListener(`off.${self.componentNs}`, preventeventResetHandler)
  }

  /**
   * remove prevents click on touch until clicked two times
   * @param {Node|HTMLElement|EventTarget|Window} el
   */
  eventPreventeventEndHandler(el) {
    const self = this
    // event link
    const preventeventHandler = Xt.dataStorage.get(el, `click/preventevent/${self.ns}`)
    el.removeEventListener('click', preventeventHandler)
    // event reset
    const preventeventResetHandler = Xt.dataStorage.get(el, `off/preventevent/${self.ns}`)
    el.removeEventListener(`off.${self.componentNs}`, preventeventResetHandler)
  }

  /**
   * prevents click on touch until clicked two times
   * @param {Node|HTMLElement|EventTarget|Window} el
   * @param {Event} e
   */
  eventPreventeventHandler(el, e) {
    const self = this
    const active = Xt.dataStorage.get(el, `active/preventevent/${self.ns}`)
    if (!active && !Xt.dataStorage.get(el, `${self.ns}PreventeventDone`)) {
      Xt.dataStorage.set(el, `${self.ns}PreventeventDone`, true)
      // prevent default
      e.preventDefault()
    } else {
      self.eventPreventeventEndHandler(el)
      Xt.dataStorage.remove(el, `${self.ns}PreventeventDone`)
      Xt.dataStorage.remove(el, `active/preventevent/${self.ns}`)
    }
  }

  /**
   * reset prevents click on touch until clicked two times
   * @param {Node|HTMLElement|EventTarget|Window} el
   */
  eventPreventeventResetHandler(el) {
    const self = this
    self.eventPreventeventEndHandler(el)
    Xt.dataStorage.remove(el, `${self.ns}PreventeventDone`)
    Xt.dataStorage.remove(el, `active/preventevent/${self.ns}`)
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
    const keyboardHandler = Xt.dataStorage.put(
      document,
      `keyup/keyboard/${self.ns}`,
      self.eventKeyboardHandler.bind(self)
    )
    document.addEventListener('keyup', keyboardHandler)
  }

  /**
   * keyboard blur handler
   */
  eventKeyboardblurHandler() {
    const self = this
    // handler
    const keyboardHandler = Xt.dataStorage.get(document, `keyup/keyboard/${self.ns}`)
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
  eventCloseautoHandler(e) {
    const self = this
    // check
    let check = self.object
    if (self.mode === 'unique') {
      check = self.targets[0]
    }
    // triggering e.detail.container
    if (!e?.detail?.container || e.detail.container.contains(check)) {
      // handler
      const currents = self.getCurrents()
      for (const current of currents) {
        self.eventOff(current, true, e)
      }
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
    Xt.dataStorage.set(img, `${self.ns}MedialoadedDone`, true)
    // mediaLoadedReinit
    if (options.mediaLoadedReinit && deferred) {
      Xt.eventDelay({
        event: { detail: { delay: Xt.medialoadedDelay } },
        element: self.object,
        func: () => {
          // mediaLoaded
          self.eventMediaLoadedReinit()
        },
        prefix: `${self.ns}MedialoadedReinit`,
      })
    }
    // mediaLoaded
    if (options.mediaLoaded) {
      el.classList.add('xt-medialoaded')
    }
    // listener dispatch
    el.dispatchEvent(
      new CustomEvent(`medialoaded.${self.componentNs}`, {
        detail: { deferred: deferred },
      })
    )
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
    const found = []
    for (const element of self.elements) {
      // choose element by group
      const group = element.getAttribute('data-xt-group')
      if (group) {
        const alreadyFound = found.filter(x => x.getAttribute('data-xt-group') === group)
        if (!alreadyFound.length) {
          found.push(element)
        }
      } else {
        found.push(element)
      }
    }
    return found
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
      const selfs = Xt.dataStorage.get(self.ns, 'xtNamespace')
      if (selfs.length) {
        for (const item of selfs) {
          // choose element by group
          final.push(...item.getElementsGroups())
        }
        return final
      }
      return []
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
    return Xt.currents[self.ns]
  }

  /**
   * set currents based on namespace (so shared between Xt objects)
   * @param {Array} arr
   */
  setCurrents(arr) {
    const self = this
    // setCurrents
    Xt.currents[self.ns] = arr
  }

  /**
   * add current based on namespace (so shared between Xt objects)
   * @param {Node|HTMLElement|EventTarget|Window} element To be added
   * @param {Boolean} running Running currents
   */
  addCurrent(element, running) {
    const self = this
    // addCurrent
    if (!self.hasCurrent(element, running)) {
      const arr = running ? Xt.running : Xt.currents
      arr[self.ns].push(element)
    }
  }

  /**
   * remove currents based on namespace (so shared between Xt objects)
   * @param {Node|HTMLElement|EventTarget|Window} element To be removed
   * @param {Boolean} running Running currents
   */
  removeCurrent(element, running) {
    const self = this
    // removeCurrent
    const arr = running ? Xt.running : Xt.currents
    arr[self.ns] = arr[self.ns].filter(x => x !== element)
  }

  /**
   * if element or target is in current (so shared between Xt objects)
   * @param {Node|HTMLElement|EventTarget|Window} element To be checked
   * @param {Boolean} running Running currents
   */
  hasCurrent(element, running) {
    const self = this
    const options = self.options
    // @FIX groupElements and targets
    element = options.groupElements || self.targets.includes(element) ? self.getElements(element)[0] : element
    // hasCurrent
    const arr = running ? Xt.running : Xt.currents
    return arr[self.ns].filter(x => x === element).length
  }

  /**
   * check element on
   * @param {Node|HTMLElement|EventTarget|Window} element To be checked
   * @return {Boolean} If elements can activate
   */
  checkOn(element) {
    const self = this
    // check
    return !self.hasCurrent(element)
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
    return self.hasCurrent(element)
  }

  /**
   * check element on
   * @param {Object} obj Queue object to end
   * @return {Boolean} If elements can activate
   */
  checkOnRunning(obj) {
    const self = this
    // running check to stop multiple activation/deactivation with delay
    const check = obj.elements.runningOn || !self.hasCurrent(obj.elements.queueEls[0], true)
    obj.elements.runningOn = check ? true : false
    return check
  }

  /**
   * check element off running
   * @param {Object} obj Queue object to end
   * @return {Boolean} If elements can activate
   */
  checkOffRunning(obj) {
    const self = this
    // running check to stop multiple activation/deactivation with delay
    const check = obj.elements.runningOff || self.hasCurrent(obj.elements.queueEls[0], true)
    obj.elements.runningOff = check ? true : false
    return check
  }

  /**
   * set index
   * @param {Node|HTMLElement|EventTarget|Window} element Current group element
   */
  setIndex(element) {
    const self = this
    // @FIX groupElements and targets
    element = self.getElements(element)[0]
    // set index
    let index = 0
    for (const [i, el] of self.getElementsGroups().entries()) {
      if (el === element) {
        index = i
        break
      }
    }
    self.oldIndex = self.currentIndex ?? index
    self.currentIndex = index
  }

  /**
   * set direction
   */
  setDirection() {
    const self = this
    // set direction
    if (self.currentIndex === null || self.currentIndex === self.oldIndex) {
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
    if (options.classSkip !== true && !options.classSkip[type]) {
      el.classList.add(...self.classes)
      el.classList.remove(...self.classesActive)
      el.classList.remove(...self.classesOut)
      el.classList.remove(...self.classesDone)
      if (self.initial && !self.wrap) {
        el.classList.add(...self.classesInitial)
      }
      // keep the same level of raf as others
      cancelAnimationFrame(Xt.dataStorage.get(el, `${self.ns}ActivateFrame`))
      Xt.dataStorage.put(
        el,
        `${self.ns}ActivateFrame`,
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            el.classList.add(...self.classesActive)
            // remove initial instantly when wrap
            if (el.classList.contains('xt-wrap')) {
              el.classList.remove(...self.classesInitial)
            }
          })
        })
      )
      // direction
      el.classList.remove(...self.classesBefore, ...self.classesAfter)
      if (self.direction < 0) {
        el.classList.add(...self.classesBefore)
      } else if (self.direction > 0) {
        el.classList.add(...self.classesAfter)
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
    if (options.classSkip !== true && !options.classSkip[type]) {
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
    if (options.classSkip !== true && !options.classSkip[type]) {
      el.classList.remove(...self.classes)
      el.classList.add(...self.classesOut)
      el.classList.remove(...self.classesDone)
      // keep the same level of raf as others
      cancelAnimationFrame(Xt.dataStorage.get(el, `${self.ns}ActivateFrame`))
      Xt.dataStorage.put(
        el,
        `${self.ns}ActivateFrame`,
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            el.classList.remove(...self.classesActive)
          })
        })
      )
      // direction
      el.classList.remove(...self.classesBefore, ...self.classesAfter)
      if (self.direction < 0) {
        el.classList.add(...self.classesBefore)
      } else if (self.direction > 0) {
        el.classList.add(...self.classesAfter)
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
    if (options.classSkip !== true && !options.classSkip[type]) {
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
    if (self.disabled && !self.initial) {
      return false
    }
    // toggle
    // @FIX same event for on and off same namespace
    if (force || (self.checkOn(element) && e?.detail?.type !== `off.trigger.${self.componentNs}`)) {
      // auto
      self.eventAutostop()
      // @FIX groupElements and targets
      const elements = options.groupElements || self.targets.includes(element) ? self.getElements(element) : [element]
      // on
      self.addCurrent(elements[0])
      self.setIndex(elements[0])
      self.setDirection()
      const targets = self.getTargets(element)
      const elementsInner = Xt.queryAll(element, options.elementsInner)
      const targetsInner = Xt.queryAll(targets, options.targetsInner)
      // [disabled]
      if (options.autoDisable && options.min === options.max) {
        for (const disable of elements) {
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
      self.eventQueue(actionCurrent, elements, targets, elementsInner, targetsInner, e)
      // queue run
      // eslint-disable-next-line guard-for-in
      for (const type in self.detail[`queue${actionCurrent}`][0]) {
        self.queueStart(actionCurrent, actionOther, type, 0, true)
      }
      // activation
      return true
    } else if (options.on === options.off && e?.detail?.type !== `on.trigger.${self.componentNs}`) {
      // @FIX same event for on and off same namespace
      self.eventOff(element, false, e)
    }
    // activation
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
    if (self.disabled && !self.initial) {
      return false
    }
    // toggle
    if (force || self.checkOff(element)) {
      // @FIX groupElements and targets
      const elements = options.groupElements || self.targets.includes(element) ? self.getElements(element) : [element]
      // off
      self.removeCurrent(elements[0])
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
        for (const disable of elements) {
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
      self.eventQueue(actionCurrent, elements, targets, elementsInner, targetsInner, e)
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
   * @param {NodeList|Array|Node|HTMLElement|EventTarget|Window} elements
   * @param {NodeList|Array|Node|HTMLElement|EventTarget|Window} targets
   * @param {NodeList|Array|Node|HTMLElement|EventTarget|Window} elementsInner
   * @param {NodeList|Array|Node|HTMLElement|EventTarget|Window} targetsInner
   * @param {Event} e
   */
  eventQueue(actionCurrent, elements, targets, elementsInner, targetsInner, e) {
    const self = this
    const options = self.options
    // populate
    const obj = {}
    obj.elements = {
      queueEls: elements,
      e: e,
    }
    if (targets.length) {
      obj.targets = {
        queueEls: targets,
      }
    }
    if (elementsInner.length) {
      obj.elementsInner = {
        queueEls: elementsInner,
      }
    }
    if (targetsInner.length) {
      obj.targetsInner = {
        queueEls: targetsInner,
      }
    }
    // put in queue
    if (!options.queue) {
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
   * @param {Event} e
   */
  eventAutostart(e = null) {
    const self = this
    const options = self.options
    // disabled
    if (self.disabled) {
      return
    }
    // start
    if (options.auto && options.auto.time && Xt.autoTimescale && !self.wrap) {
      // not when nothing activated
      if (self.currentIndex !== null && (!self.initial || options.auto.initial)) {
        // clear
        clearTimeout(Xt.dataStorage.get(self.object, `${self.ns}AutoTimeout`))
        // auto
        const time = options.auto.time
        // raf because after .xt custom listeners
        requestAnimationFrame(() => {
          // disabled
          if (self.disabled) {
            return
          }
          // timeout
          Xt.dataStorage.set(
            self.object,
            `${self.ns}AutoTimeout`,
            setTimeout(() => {
              // auto
              self.eventAuto()
            }, time / Xt.autoTimescale)
          )
          // aria
          if (options.aria === true || options.aria.activation) {
            self.object.setAttribute('aria-live', 'off')
          }
          // listener dispatch
          self.object.dispatchEvent(
            new CustomEvent(`autostart.${self.componentNs}`, {
              detail: e ? e.detail : null,
            })
          )
        })
      }
    }
  }

  /**
   * auto stop
   * @param {Event} e
   */
  eventAutostop(e = null) {
    const self = this
    const options = self.options
    // stop
    if (options.auto && options.auto.time && !self.wrap) {
      // clear
      clearTimeout(Xt.dataStorage.get(self.object, `${self.ns}AutoTimeout`))
      // aria
      if (options.aria === true || options.aria.activation) {
        self.object.setAttribute('aria-live', 'polite')
      }
      // listener dispatch
      self.object.dispatchEvent(
        new CustomEvent(`autostop.${self.componentNs}`, {
          detail: e ? e.detail : null,
        })
      )
    }
  }

  /**
   * auto pause
   * @param {Event} e
   */
  eventAutopause(e = null) {
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
        clearTimeout(Xt.dataStorage.get(self.object, `${self.ns}AutoTimeout`))
        // aria
        if (options.aria === true || options.aria.activation) {
          self.object.setAttribute('aria-live', 'polite')
        }
        // listener dispatch
        self.object.dispatchEvent(
          new CustomEvent(`autopause.${self.componentNs}`, {
            detail: e ? e.detail : null,
          })
        )
      }
    }
  }

  /**
   * auto resume
   * @param {Event} e
   */
  eventAutoresume(e = null) {
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
          self.object.dispatchEvent(
            new CustomEvent(`autoresume.${self.componentNs}`, {
              detail: e ? e.detail : null,
            })
          )
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
      self.goToPrev(-step)
    } else {
      self.goToNext(step)
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
    // reinit
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
      /* @TEST
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
        if (self.initial || !options.queue) {
          obj[type].instant = true
        } else if (options.queue && !options.queue[type]) {
          obj[type].instantType = true
        }
        // special
        self.specialClassHtml(actionCurrent)
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
          cancelAnimationFrame(Xt.dataStorage.get(el, `${self.ns}CollapseFrame`))
          clearTimeout(Xt.dataStorage.get(el, `${self.ns + type}DelayTimeout`))
          clearTimeout(Xt.dataStorage.get(el, `${self.ns + type}AnimTimeout`))
          // done other queue
          self.queueDelayDone(actionOther, actionCurrent, obj, el, type, true)
          self.queueAnimDone(actionOther, actionCurrent, obj, el, type, true)
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
      let delay = options.delay || options[`delay${actionCurrent}`]
      if (delay) {
        if (isNaN(delay)) {
          const count = Xt.dataStorage.get(el, `${self.ns + actionCurrent}Count`) || els.findIndex(x => x === el)
          const tot = Xt.dataStorage.get(el, `${self.ns + actionCurrent}Tot`) || els.length
          if (typeof delay === 'function') {
            delay = delay(count, tot - 1)
          }
        } else {
          delay = queueInitial && !options.delayInitial ? 0 : delay
        }
      }
      if (actionCurrent === 'On') {
        // listener dispatch
        el.dispatchEvent(new CustomEvent(`ondelay.${self.componentNs}`))
      } else if (actionCurrent === 'Off') {
        // listener dispatch
        el.dispatchEvent(new CustomEvent(`offdelay.${self.componentNs}`))
      }
      // delay fnc
      clearTimeout(Xt.dataStorage.get(el, `${self.ns + type}DelayTimeout`))
      clearTimeout(Xt.dataStorage.get(el, `${self.ns + type}AnimTimeout`))
      if (!delay) {
        self.queueDelayDone(actionCurrent, actionOther, obj, el, type)
      } else {
        Xt.dataStorage.set(
          el,
          `${self.ns + type}DelayTimeout`,
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
    if (actionCurrent === 'On' && self.checkOnRunning(obj)) {
      // only one time and if last element
      if (type === 'elements' && el === obj.elements.queueEls[0]) {
        self.addCurrent(el, true)
      }
      // activation
      self.activate(el, type)
      // special
      self.specialZindex(actionCurrent, el, type)
      self.specialAppendto(actionCurrent, el, type)
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
      // aria
      if (options.aria) {
        if (type === 'elements') {
          // selected
          if (options.aria === true || options.aria.activation) {
            el.setAttribute('aria-selected', 'true')
          }
        }
        if (type === 'targets') {
          // expanded
          if (options.aria === true || options.aria.activation) {
            const role = el.getAttribute('role')
            if (role === 'tabpanel' || role === 'listbox' || role === 'tooltip' || role === 'dialog') {
              el.setAttribute('aria-expanded', 'true')
            }
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
        el.dispatchEvent(
          new CustomEvent(`on.${self.componentNs}`, {
            detail: obj.elements.e ? obj.elements.e.detail : null,
          })
        )
      }
    } else if (actionCurrent === 'Off' && self.checkOffRunning(obj)) {
      // only one time and if last element
      if (type === 'elements' && el === obj.elements.queueEls[0]) {
        self.removeCurrent(el, true)
        // only if no currents
        if (!self.getCurrents().length) {
          // reset currentIndex and direction
          self.currentIndex = null
          self.setDirection()
        }
      }
      // activation
      self.deactivate(el, type)
      // special
      self.specialCollapse(actionCurrent, el, type)
      self.specialClose(actionCurrent, el, type)
      if (options.focusLimit) {
        const el = obj.targets ? obj.targets.queueEls[0] : obj.elements.queueEls[0]
        Xt.focusLimit.off(el)
      }
      // listener dispatch
      if (type !== 'elementsInner' && type !== 'targetsInner') {
        // raf because setDirection
        requestAnimationFrame(() => {
          if (!self.disabled) {
            el.dispatchEvent(
              new CustomEvent(`off.${self.componentNs}`, {
                detail: obj.elements.e ? obj.elements.e.detail : null,
              })
            )
          }
        })
      }
    }
    // queue
    if (!skipQueue) {
      self.queueAnim(actionCurrent, actionOther, obj, el, type)
      // queue done
      if (!obj[type].instant && obj[type].instantType) {
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
    const duration = Xt.animTime(el, options.duration || options[`duration${actionCurrent}`], actionCurrent)
    clearTimeout(Xt.dataStorage.get(el, `${self.ns + type}AnimTimeout`))
    // queue done
    if (!duration) {
      self.queueAnimDone(actionCurrent, actionOther, obj, el, type)
    } else {
      Xt.dataStorage.set(
        el,
        `${self.ns + type}AnimTimeout`,
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
        el.dispatchEvent(
          new CustomEvent(`ondone.${self.componentNs}`, {
            detail: obj.elements.e ? obj.elements.e.detail : null,
          })
        )
      }
    } else if (actionCurrent === 'Off') {
      // only one time and if last element
      if (type === 'elements' && el === obj.elements.queueEls[0]) {
        // only if no currents
        if (!self.getCurrents().length) {
          for (const type in obj) {
            self.specialZindex(actionCurrent, false, type)
          }
        }
      }
      // activation
      self.deactivateDone(el, type)
      // special
      self.specialAppendto(actionCurrent, el, type)
      // aria
      if (options.aria) {
        // selected
        if (type === 'elements') {
          if (options.aria === true || options.aria.activation) {
            el.setAttribute('aria-selected', 'false')
          }
        }
        if (type === 'targets') {
          // expanded
          if (options.aria === true || options.aria.activation) {
            const role = el.getAttribute('role')
            if (role === 'tabpanel' || role === 'listbox' || role === 'tooltip' || role === 'dialog') {
              el.setAttribute('aria-expanded', 'false')
            }
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
        // raf because setDirection
        requestAnimationFrame(() => {
          if (!self.disabled) {
            el.dispatchEvent(
              new CustomEvent(`offdone.${self.componentNs}`, {
                detail: obj.elements.e ? obj.elements.e.detail : null,
              })
            )
          }
        })
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
      // all done
      if (done === Object.entries(obj).length) {
        // queue other when all done
        for (const type in obj) {
          self.queueStart(actionOther, actionCurrent, type, self.detail[`queue${actionOther}`].length - 1)
        }
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
    // logic
    if (actionCurrent === 'On') {
      // auto
      self.eventAutostart()
      // raf because after .xt custom listeners
      requestAnimationFrame(() => {
        // remove class initial
        if (self.initial) {
          for (const type in obj) {
            for (const el of obj[type].queueEls) {
              el.classList.remove(...self.classesInitial)
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
      self.wheel.dispatchEvent(new CustomEvent(`wheelstart.${self.componentNs}`))
      self.wheel.dispatchEvent(new CustomEvent(`wheelend.${self.componentNs}`))
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
      self.wheel.dispatchEvent(
        new CustomEvent(`wheelstart.${self.componentNs}`, {
          detail: { wheelX: -self.detail.wheelCurrent },
        })
      )
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
      cancelAnimationFrame(Xt.dataStorage.get(self.wheel, `${self.ns}WheelsmoothFrame`))
      Xt.dataStorage.set(
        self.wheel,
        `${self.ns}WheelsmoothFrame`,
        requestAnimationFrame(() => {
          self.eventFrictionsmooth(el, min, max)
        })
      )
      // listener dispatch
      self.wheel.dispatchEvent(
        new CustomEvent(`wheel.${self.componentNs}`, {
          detail: { wheelX: -self.detail.wheelCurrent },
        })
      )
    } else {
      // moving
      self.detail.wheelMoving = false
      // vars
      self.detail.wheelEnd = false
      // listener dispatch
      self.wheel.dispatchEvent(
        new CustomEvent(`wheelend.${self.componentNs}`, {
          detail: { wheelX: -self.detail.wheelCurrent },
        })
      )
    }
  }

  /**
   * event wheel stop for Xt
   */
  eventWheelstop() {
    const self = this
    const el = self.wheel
    cancelAnimationFrame(Xt.dataStorage.get(el, `${self.ns}WheelsmoothFrame`))
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
    // @FIX when standalone !self.targets.length && type === 'elements'
    if (!self.targets.length && type === 'elements') {
      type = 'targets'
    }
    // set zIndex
    if (options.zIndex && options.zIndex[type]) {
      if (actionCurrent === 'On') {
        self.detail.zIndex = self.detail.zIndex ? self.detail.zIndex : options.zIndex[type].start
        self.detail.zIndex = self.detail.zIndex + options.zIndex[type].factor
        el.style.zIndex = self.detail.zIndex
      } else if (actionCurrent === 'Off') {
        self.detail.zIndex = options.zIndex[type].start
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
    if (options.classHtml) {
      if (actionCurrent === 'On') {
        for (const c of options.classHtml.split(' ')) {
          // checks
          Xt.classHtml.add({
            c: c,
            ns: self.ns,
          })
          // class on
          const container = document.documentElement
          container.classList.add(c)
        }
      } else if (actionCurrent === 'Off') {
        for (const c of options.classHtml.split(' ')) {
          // checks
          Xt.classHtml.remove({
            c: c,
            ns: self.ns,
          })
          if (!Xt.classHtml.get({ c: c }).length) {
            // class off
            const container = document.documentElement
            container.classList.remove(c)
          }
        }
      }
    }
  }

  /**
   * appendTo
   * @param {String} actionCurrent Current action
   * @param {Node|HTMLElement|EventTarget|Window} el Element
   * @param {String} type Type of element
   */
  specialAppendto(actionCurrent, el, type) {
    const self = this
    const options = self.options
    if (options.appendTo) {
      if (actionCurrent === 'On') {
        // @FIX when standalone !self.targets.length && type === 'elements'
        if (type === 'targets' || (!self.targets.length && type === 'elements')) {
          // appendTo
          const appendToTarget = document.querySelector(options.appendTo)
          const appendOrigin = document.querySelector(`[data-xt-origin="${self.ns}"]`)
          if (!appendOrigin) {
            el.before(Xt.createElement(`<div class="xt-ignore hidden" data-xt-origin="${self.ns}"></div>`))
          }
          el.classList.add('xt-ignore', 'xt-ignore-once') // @FIX ignore once for mount when moving
          appendToTarget.append(el)
        }
      } else if (actionCurrent === 'Off') {
        // @FIX when standalone !self.targets.length && type === 'elements'
        if (type === 'targets' || (!self.targets.length && type === 'elements')) {
          // appendTo
          if (options.appendTo) {
            const appendOrigin = document.querySelector(`[data-xt-origin="${self.ns}"]`)
            if (appendOrigin) {
              el.classList.add('xt-ignore', 'xt-ignore-once') // @FIX ignore once for mount when moving
              appendOrigin.before(el)
              appendOrigin.remove()
            }
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
          cancelAnimationFrame(Xt.dataStorage.get(el, `${self.ns}CollapseFrame`))
          Xt.dataStorage.set(
            el,
            `${self.ns}CollapseFrame`,
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                el.style.height = h
              })
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
          cancelAnimationFrame(Xt.dataStorage.get(el, `${self.ns}CollapseFrame`))
          Xt.dataStorage.set(
            el,
            `${self.ns}CollapseFrame`,
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                el.style.width = w
              })
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
          cancelAnimationFrame(Xt.dataStorage.get(el, `${self.ns}CollapseFrame`))
          Xt.dataStorage.set(
            el,
            `${self.ns}CollapseFrame`,
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                el.style.height = '0'
              })
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
          cancelAnimationFrame(Xt.dataStorage.get(el, `${self.ns}CollapseFrame`))
          Xt.dataStorage.put(
            el,
            `${self.ns}CollapseFrame`,
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                el.style.width = '0'
              })
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
    // @FIX when standalone !self.targets.length && type === 'elements'
    if (type === 'targets' || type === 'targetsInner' || (!self.targets.length && type === 'elements')) {
      if (actionCurrent === 'On') {
        // closeDeep
        if (options.closeDeep) {
          const closeElements = el.querySelectorAll(options.closeDeep)
          for (const closeElement of closeElements) {
            const specialclosedeepHandler = Xt.dataStorage.put(
              closeElement,
              `click/close/${self.ns}`,
              self.eventSpecialclosedeepHandler.bind(self)
            )
            // @FIX do not close when clicking things that trigger this
            requestAnimationFrame(() => {
              closeElement.addEventListener('click', specialclosedeepHandler)
            })
            // focusable
            const specialclosedeepKeydownHandler = Xt.dataStorage.put(
              closeElement,
              `keydown/close/${self.ns}`,
              self.eventSpecialclosedeepKeydownHandler.bind(self).bind(self, closeElement)
            )
            // @FIX do not close when clicking things that trigger this
            requestAnimationFrame(() => {
              closeElement.addEventListener('keydown', specialclosedeepKeydownHandler)
              closeElement.setAttribute('tabindex', '0')
              closeElement.setAttribute('role', 'button')
            })
          }
        }
        // closeInside
        if (options.closeInside) {
          const closeElements = document.querySelectorAll(options.closeInside)
          for (const closeElement of closeElements) {
            const specialcloseinsideHandler = Xt.dataStorage.put(
              closeElement,
              `click/close/${self.ns}`,
              self.eventSpecialcloseinsideHandler.bind(self).bind(self, closeElement)
            )
            // @FIX do not close when clicking things that trigger this
            requestAnimationFrame(() => {
              closeElement.removeEventListener('click', specialcloseinsideHandler)
              closeElement.addEventListener('click', specialcloseinsideHandler)
            })
          }
        }
        // closeOutside
        if (options.closeOutside) {
          const closeElements = document.querySelectorAll(options.closeOutside)
          for (const closeElement of closeElements) {
            const specialcloseoutsideHandler = Xt.dataStorage.put(
              closeElement,
              `click/close/${self.ns}`,
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
        // closeDeep
        if (options.closeDeep) {
          const closeElements = el.querySelectorAll(options.closeDeep)
          for (const closeElement of closeElements) {
            const specialclosedeepHandler = Xt.dataStorage.get(closeElement, `click/close/${self.ns}`)
            closeElement.removeEventListener('click', specialclosedeepHandler)
            // focusable
            const specialclosedeepKeydownHandler = Xt.dataStorage.get(closeElement, `keydown/close/${self.ns}`)
            closeElement.removeEventListener('keydown', specialclosedeepKeydownHandler)
            closeElement.removeAttribute('tabindex')
            closeElement.removeAttribute('role')
          }
        }
        // closeInside
        if (options.closeInside) {
          const closeElements = document.querySelectorAll(options.closeOutside)
          for (const closeElement of closeElements) {
            const specialcloseinsideHandler = Xt.dataStorage.get(closeElement, `click/close/${self.ns}`)
            closeElement.removeEventListener('click', specialcloseinsideHandler)
          }
        }
        // closeOutside
        if (options.closeOutside) {
          const closeElements = document.querySelectorAll(options.closeOutside)
          for (const closeElement of closeElements) {
            const specialcloseoutsideHandler = Xt.dataStorage.get(closeElement, `click/close/${self.ns}`)
            closeElement.removeEventListener('click', specialcloseoutsideHandler)
          }
        }
      }
    }
  }

  /**
   * specialClosedeep handler
   * @param {Event} e
   */
  eventSpecialclosedeepHandler(e) {
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
   * specialClosedeep keydown handler
   * @param {Node|HTMLElement|EventTarget|Window} closeElement
   * @param {Event} e
   */
  eventSpecialclosedeepKeydownHandler(closeElement, e) {
    const code = e.keyCode ? e.keyCode : e.which
    // key enter or space
    if (code === 13 || code === 32) {
      e.preventDefault()
      closeElement.dispatchEvent(new CustomEvent('click'))
    }
  }

  /**
   * specialCloseinside handler
   * @param {Node|HTMLElement|EventTarget|Window} element
   * @param {Event} e
   */
  eventSpecialcloseinsideHandler(el, e) {
    const self = this
    // handler
    if (e.target === el) {
      if (Xt.contains([...self.elements, ...self.targets], e.target)) {
        const currents = self.getCurrents()
        for (const current of currents) {
          self.eventOff(current, true)
        }
      }
    }
  }

  /**
   * specialCloseoutside handler
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
   * @return {Node|HTMLElement|EventTarget|Window} Element
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
   * @return {Number} Index
   */
  goToNext(amount = 1, force = false, loop = null) {
    const self = this
    // goToNum
    self.inverse = false
    const index = self.getNextIndex(amount, loop)
    self.goToNum(index, force, loop)
    return index
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
   * @return {Number} Index
   */
  goToPrev(amount = 1, force = false, loop = null) {
    const self = this
    // goToNum
    self.inverse = true
    const index = self.getPrevIndex(amount, loop)
    self.goToNum(index, force, loop)
    return index
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
   * @return {Node|HTMLElement|EventTarget|Window} Element
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
   * @return {Number} Index
   */
  goToNum(index, force = false, loop = null) {
    const self = this
    // go
    const el = self.getNum(index, loop)
    self.eventOn(el, force)
    return index
  }

  //
  // match and status
  //

  /**
   * init match
   */
  initMatch() {
    const self = this
    const options = self.options
    // matches
    if (self.initial === undefined) {
      if (options.matches) {
        const mqs = Object.entries(options.matches)
        if (mqs.length) {
          for (const [key, value] of mqs) {
            // matches
            const mq = matchMedia(key)
            self.eventMatch(value, mq, true)
            mq.removeListener(self.eventMatch.bind(self).bind(self, value))
            mq.addListener(self.eventMatch.bind(self).bind(self, value))
          }
        }
      }
    }
  }

  /**
   * match
   * @param {Object} mq Match media query
   * @param {Object} value Match media value
   * @param {Boolean} skipReinit Skip reinit
   */
  eventMatch(value, mq, skipReinit = false) {
    const self = this
    const options = self.options
    // replace options
    if (mq.matches) {
      self.options = Xt.merge([self.options, value])
    } else {
      self.options = Xt.mergeReset(self.options, self.optionsInitial, value)
    }
    // reinit one time only with raf
    if (!skipReinit) {
      // @FIX appendTo close or self.targets are lost
      if (options.appendTo) {
        for (const element of self.elements.filter(x => self.hasCurrent(x))) {
          self.eventOff(element)
        }
      }
      // reinit
      cancelAnimationFrame(Xt.dataStorage.get(self.object, `${self.ns}MatchFrame`))
      Xt.dataStorage.set(self.object, `${self.ns}MatchFrame`, requestAnimationFrame(self.eventReinitHandler.bind(self)))
    }
  }

  /**
   * init status
   */
  initStatus() {
    const self = this
    const options = self.options
    // keep the same level of raf as others
    cancelAnimationFrame(Xt.dataStorage.get(self.object, `${self.ns}StatusFrame`))
    Xt.dataStorage.put(
      self.object,
      `${self.ns}StatusFrame`,
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          // check
          if (options.disabled) {
            self.disable()
          } else {
            self.enable()
          }
        })
      })
    )
  }

  /**
   * enable
   */
  enable() {
    const self = this
    const options = self.options
    if (self.disabled) {
      // enable
      self.disabled = false
      if (!options.classSkip) {
        self.object.classList.remove(`${self.componentName}-disabled`)
      }
      if (options.classSkip !== true && !options.classSkip['elements']) {
        for (const el of self.elements) {
          el.classList.remove(`${self.componentName}-disabled`)
        }
      }
      if (options.classSkip !== true && !options.classSkip['targets']) {
        for (const tr of self.targets) {
          tr.classList.remove(`${self.componentName}-disabled`)
        }
      }
      // aria
      if (options.aria === true || options.aria.activation) {
        for (const el of self.elements) {
          el.removeAttribute('aria-disabled')
        }
      }
      // listener dispatch
      self.object.dispatchEvent(new CustomEvent(`status.${self.componentNs}`))
    }
  }

  /**
   * disable
   */
  disable() {
    const self = this
    const options = self.options
    if (!self.disabled) {
      // @FIX appendTo close or self.targets are lost
      if (options.appendTo) {
        for (const element of self.elements.filter(x => self.hasCurrent(x))) {
          self.eventOff(element)
        }
      }
      // stop auto
      clearTimeout(Xt.dataStorage.get(self.object, `${self.ns}AutoTimeout`))
      // disable
      self.disabled = true
      if (!options.classSkip) {
        self.object.classList.add(`${self.componentName}-disabled`)
      }
      if (options.classSkip !== true && !options.classSkip['elements']) {
        for (const el of self.elements) {
          el.classList.add(`${self.componentName}-disabled`)
        }
      }
      if (options.classSkip !== true && !options.classSkip['targets']) {
        for (const tr of self.targets) {
          tr.classList.add(`${self.componentName}-disabled`)
        }
      }
      // aria
      if (options.aria === true || options.aria.activation) {
        for (const el of self.elements) {
          el.setAttribute('aria-disabled', 'true')
        }
      }
      // [disabled]
      // listener dispatch
      self.object.dispatchEvent(new CustomEvent(`status.${self.componentNs}`))
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
    if (!e?.detail?.container || e.detail.container.contains(check)) {
      Xt.eventDelay({
        event: e,
        element: self.object,
        func: () => {
          // handler
          self.reinit()
        },
        prefix: `${self.ns}Reinit`,
      })
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
    self.object.dispatchEvent(new CustomEvent(`reinit.${self.componentNs}`))
  }

  /**
   * restart
   */
  restart() {
    const self = this
    // restart
    self.initStart()
    // listener dispatch
    self.object.dispatchEvent(new CustomEvent(`restart.${self.componentNs}`))
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
              if (key.endsWith(self.ns)) {
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
    const selfs = Xt.dataStorage.get(self.ns, 'xtNamespace')
    if (selfs.length) {
      const newSelfs = selfs.filter(x => x !== self)
      Xt.dataStorage.set(self.ns, 'xtNamespace', newSelfs)
    }
    // weak
    if (!weak) {
      // initialized class
      self.object.classList.remove(`${self.componentName}-init`)
      // set self
      Xt.remove(self.componentName, self.object)
      // listener dispatch
      self.object.dispatchEvent(new CustomEvent(`destroy.${self.componentNs}`))
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
  elements: ':scope > a, :scope > button, .xt-toggle-item',
  targets: ':scope > .xt-toggle, .xt-toggle-item > .xt-toggle',
  elementsInner: ':scope > a, :scope > button',
  targetsInner: false,
  // class
  class: 'in in-toggle',
  classActive: 'active',
  classOut: 'out',
  classDone: 'done',
  classInitial: 'initial',
  classBefore: 'direction-before',
  classAfter: 'direction-after',
  classSkip: false,
  groupElements: false,
  // quantity
  min: 0,
  max: 1,
  autoDisable: true,
  // event
  on: 'click',
  off: 'click',
  eventLimit: '.event-limit',
  closeDeep: false,
  closeInside: false,
  closeOutside: false,
  preventEvent: false,
  // timing
  queue: {
    elements: false,
    targets: true,
    elementsInner: false,
    targetsInner: true,
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
  matches: false,
  disabled: false,
  loop: true,
  jump: false,
  navigation: false,
  keyboard: {
    selector: false,
  },
  appendTo: false,
  classHtml: false,
  closeAuto: false,
  mediaLoaded: false,
  mediaLoadedReinit: false,
  zIndex: false,
  focusLimit: false,
  collapseHeight: false,
  collapseWidth: false,
  aria: {
    activation: true,
    role: true,
    tabindex: true,
    controls: true,
    describedby: false,
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

if (typeof window !== 'undefined') {
  Xt.mount.push({
    matches: `[data-${Xt.Toggle.componentName}]`,
    mount: ({ object }) => {
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
}
