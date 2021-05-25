/*!
 * Xtend (https://xtendui.com/)
 * @copyright (c) 2017 - 2021 Riccardo Caroli
 * @license Apache-2.0 (https://github.com/minimit/xtendui/blob/beta/LICENSE)
 */

import { Xt } from './xt'
import RJSON from 'relaxed-json'

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
   */
  init() {
    const self = this
    // vars
    self.classes = []
    self.classesIn = []
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
    self.hasHash = false
    self.detail.queueIn = []
    self.detail.queueOut = []
    self.detail.autopaused = false
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
    const options = self.options
    self.classes = options.class ? [...options.class.split(' ')] : []
    self.classesIn = options.classIn ? [...options.classIn.split(' ')] : []
    self.classesOut = options.classOut ? [...options.classOut.split(' ')] : []
    self.classesDone = options.classDone ? [...options.classDone.split(' ')] : []
    self.classesInitial = options.classInitial ? [...options.classInitial.split(' ')] : []
    self.classesBefore = options.classBefore ? [...options.classBefore.split(' ')] : []
    self.classesAfter = options.classAfter ? [...options.classAfter.split(' ')] : []
  }

  /**
   * init logic
   * @param {Boolean} saveCurrents
   */
  initLogic(saveCurrents = true) {
    const self = this
    // vars
    self.destroyElements = [document, window, self.object]
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
    // mode
    self.containerTargets = self.object
    if (options.targets && options.targets.indexOf('#') !== -1) {
      self.mode = 'unique'
      self.containerTargets = document.documentElement
      self.ns = `${self.componentName}-${options.targets.toString()}-${self.classes.toString()}`
    } else {
      self.mode = 'multiple'
      const uniqueId = Xt.dataStorage.get(self.object, 'xtUniqueId')
      Xt.dataStorage.set(self.object, 'xtUniqueId', uniqueId || Xt.getuniqueId())
      self.ns = `${self.componentName}-${Xt.dataStorage.get(self.object, 'xtUniqueId')}`
    }
    // final namespace
    self.ns = self.ns.replace(/^[^a-z]+|[ ,#_:.-]+/gi, '')
    // remove namespace
    self.removeNamespace()
    // xtNamespace linked components
    const arr = Xt.dataStorage.get(self.ns, 'xtNamespace') || []
    arr.push(self)
    Xt.dataStorage.set(self.ns, 'xtNamespace', arr)
    // currents array based on namespace (so shared between Xt objects)
    self.setCurrents([])
    // initialized class
    if (!options.classSkip) {
      // fix before initScope or slider absolute has multiple active and bugs initial calculations
      self.object.classList.add(`${self.componentName}-init`)
    }
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
    self.containerElements = self.object
    if (options.elements) {
      if (options.elements.indexOf('#') !== -1) {
        self.containerElements = document.documentElement
      }
      let arr = Array.from(Xt.arrSingle(self.containerElements.querySelectorAll(options.elements)))
      if (options.exclude) {
        arr = arr.filter(x => !x.matches(options.exclude))
      }
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
      let arr = Array.from(self.containerTargets.querySelectorAll(options.targets))
      if (options.exclude) {
        arr = arr.filter(x => !x.matches(options.exclude))
      }
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
    self.currentIndex = null
    self.oldIndex = null
    Xt.running[self.ns] = []
    // INSTANT ACTIVATION because we need activation classes right away (e.g.: slider inside demos toggle must be visible to get values)
    // check initial activation
    currents = self.initActivate(saveCurrents)
    // if currents < min
    let todo = options.min - currents
    let start = 0
    if (todo > 0) {
      // initial
      currents += todo
    }
    // todo
    if (todo > 0) {
      for (let i = start; i < todo; i++) {
        const el = self.elements[i]
        if (el) {
          // toggle event if present because of custom listeners
          if (options.on) {
            const event = options.on.split(' ')[0]
            el.dispatchEvent(new CustomEvent(event, { detail: { force: true } }))
          } else {
            self.eventOn(el, true)
          }
        }
      }
    }
    // currents
    if (saveCurrents) {
      self.initialCurrents = self.getCurrents().slice(0)
    }
    // no currents
    if (currents === 0) {
      // keep the same level of raf for custom listener
      requestAnimationFrame(() => {
        // listener dispatch
        self.object.dispatchEvent(new CustomEvent(`init.${self.componentNs}`))
        // fix autostart after self.initial or it gives error on reinitialization (demos fullscreen)
        self.eventAutostart()
        // initial after autostart
        self.initial = false
      })
    }
  }

  /**
   * init activate
   * @param {Boolean} saveCurrents
   * @return {Number} currents count
   */
  initActivate(saveCurrents = false) {
    const self = this
    const options = self.options
    // check
    const checkClass = el => {
      for (const c of self.classes) {
        if (el.classList.contains(c) || el.checked) {
          return true
        }
      }
      return false
    }
    // check hash
    let obj = self.hashChange(saveCurrents)
    let currents = obj.currents ?? 0
    // check class
    for (const el of self.getElementsGroups()) {
      let activated = false
      // check if activated
      if (saveCurrents) {
        if (options.classSkip !== true && !options.classSkip['elements']) {
          activated = checkClass(el)
        }
      } else if (self.initialCurrents.includes(el)) {
        activated = true
      }
      // check if activated
      // fix check options.max for currents of hashChange current reset if hash has current
      // fix check obj.arr has element already activated
      if ((activated && currents < options.max) || obj.arr.includes(el)) {
        // instant animation
        el.classList.add(...self.classes)
        el.classList.add(...self.classesIn)
        el.classList.add(...self.classesInitial)
      } else {
        // reset classes
        if (options.classSkip !== true && !options.classSkip['elements']) {
          el.classList.remove(
            ...self.classes,
            ...self.classesIn,
            ...self.classesOut,
            ...self.classesDone,
            ...self.classesInitial,
            ...self.classesBefore,
            ...self.classesAfter
          )
        }
        if (options.classSkip !== true && !options.classSkip['elementsInner']) {
          const elsInner = Xt.queryAll(el, options.elementsInner)
          for (const elInner of elsInner) {
            elInner.classList.remove(
              ...self.classes,
              ...self.classesIn,
              ...self.classesOut,
              ...self.classesDone,
              ...self.classesInitial,
              ...self.classesBefore,
              ...self.classesAfter
            )
          }
        }
      }
      // check targets
      const targets = self.getTargets(el)
      for (const tr of targets) {
        // check if activated
        if (saveCurrents && !activated) {
          if (options.classSkip !== true && !options.classSkip['targets']) {
            activated = checkClass(tr)
          }
        }
        // check if activated
        // fix check options.max for currents of hashChange current reset if hash has current
        if ((activated && currents < options.max) || obj.arr.includes(el)) {
          // instant animation
          tr.classList.add(...self.classes)
          tr.classList.add(...self.classesIn)
          tr.classList.add(...self.classesInitial)
        } else {
          // reset classes
          if (options.classSkip !== true && !options.classSkip['targets']) {
            tr.classList.remove(
              ...self.classes,
              ...self.classesIn,
              ...self.classesOut,
              ...self.classesDone,
              ...self.classesInitial,
              ...self.classesBefore,
              ...self.classesAfter
            )
          }
          if (options.classSkip !== true && !options.classSkip['targetsInner']) {
            const trsInner = Xt.queryAll(tr, options.targetsInner)
            for (const trInner of trsInner) {
              trInner.classList.remove(
                ...self.classes,
                ...self.classesIn,
                ...self.classesOut,
                ...self.classesDone,
                ...self.classesInitial,
                ...self.classesBefore,
                ...self.classesAfter
              )
            }
          }
        }
      }
      // activate
      if (activated && currents < options.max) {
        // initial
        currents++
        // toggle event if present because of custom listeners
        if (options.on) {
          const event = options.on.split(' ')[0]
          el.dispatchEvent(new CustomEvent(event, { detail: { force: true } }))
        } else {
          self.eventOn(el, true)
        }
      }
    }
    // return
    return currents
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
    // remove events
    self.removeEvents()
    // elements
    for (const el of self.elements) {
      // event on
      const onHandlerCustom = Xt.dataStorage.put(
        el,
        `${options.on}/oncustom/${self.ns}`,
        self.eventOnHandler.bind(self, { element: el, force: true })
      )
      el.addEventListener(`on.trigger.${self.componentNs}`, onHandlerCustom)
      if (options.on) {
        const onHandler = Xt.dataStorage.put(
          el,
          `${options.on}/on/${self.ns}`,
          self.eventOnHandler.bind(self, { element: el })
        )
        const events = [...options.on.split(' ')]
        for (const event of events) {
          el.addEventListener(event, onHandler)
        }
      }
      // event off
      const offHandlerCustom = Xt.dataStorage.put(
        el,
        `${options.off}/offcustom/${self.ns}`,
        self.eventOffHandler.bind(self, { element: el })
      )
      el.addEventListener(`off.trigger.${self.componentNs}`, offHandlerCustom)
      if (options.off) {
        // fix same event for on and off same namespace
        if (options.on !== options.off) {
          const offHandler = Xt.dataStorage.put(
            el,
            `${options.off}/off/${self.ns}`,
            self.eventOffHandler.bind(self, { element: el })
          )
          const events = [...options.off.split(' ')]
          for (const event of events) {
            el.addEventListener(event, offHandler)
          }
        }
      }
      // preventEvent
      if (options.on) {
        if (options.preventEvent) {
          const events = [...options.on.split(' ')]
          if (events.includes('click') || events.includes('mouseenter') || events.includes('mousehover')) {
            // fix prevents click links on click until clicked two times
            const preventeventStartTouchHandler = Xt.dataStorage.put(
              el,
              `touchend/preventevent/${self.ns}`,
              self.eventPreventeventStartHandler.bind(self, { element: el })
            )
            el.addEventListener('touchend', preventeventStartTouchHandler)
          }
          if (events.includes('click')) {
            const preventeventStartMouseHandler = Xt.dataStorage.put(
              el,
              `mouseup/preventevent/${self.ns}`,
              self.eventPreventeventStartHandler.bind(self, { element: el })
            )
            el.addEventListener('mouseup', preventeventStartMouseHandler)
          }
        }
        Xt.dataStorage.put(el, `active/preventevent/${self.ns}`, self.hasCurrent(el))
      }
    }
    // targets
    for (const tr of self.targets) {
      // event on
      const onHandlerCustom = Xt.dataStorage.put(
        tr,
        `${options.on}/oncustom/${self.ns}`,
        self.eventOnHandler.bind(self, { element: tr, force: true })
      )
      tr.addEventListener(`on.trigger.${self.componentNs}`, onHandlerCustom)
      // event off
      const offHandlerCustom = Xt.dataStorage.put(
        tr,
        `${options.off}/offcustom/${self.ns}`,
        self.eventOffHandler.bind(self, { element: tr, force: true })
      )
      tr.addEventListener(`off.trigger.${self.componentNs}`, offHandlerCustom)
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
    // hash
    if (options.hash) {
      for (const element of self.elements) {
        if (element.getAttribute(options.hash)) {
          self.hasHash = true
          break
        }
      }
      if (!self.hasHash) {
        for (const target of self.targets) {
          if (target.getAttribute(options.hash)) {
            self.hasHash = true
            break
          }
        }
      }
    }
    if (self.hasHash) {
      // hash
      const hashHandler = Xt.dataStorage.put(
        window,
        `hashchange/${self.ns}`,
        self.hashChange.bind(self).bind(self, true)
      )
      addEventListener('hashchange', hashHandler)
    }
    // jump
    if (options.jump) {
      for (const tr of self.targets) {
        const jumpHandler = Xt.dataStorage.put(
          tr,
          `click/jump/${self.ns}`,
          self.eventJumpHandler.bind(self).bind(self, tr)
        )
        tr.addEventListener('click', jumpHandler, true) // fix elements inside targets (slider pagination)
        // jump
        if (!self.disabled) {
          tr.classList.add('xt-jump')
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
    if (options.closeauto) {
      const closeautoHandler = Xt.dataStorage.put(window, `closeauto/${self.ns}`, self.eventCloseautoHandler.bind(self))
      addEventListener('closeauto.trigger.xt', closeautoHandler, true)
    }
    if (options.openauto) {
      const openautoHandler = Xt.dataStorage.put(window, `openauto/${self.ns}`, self.eventOpenautoHandler.bind(self))
      addEventListener('openauto.trigger.xt', openautoHandler, true)
    }
    // mediaLoaded
    if (options.mediaLoaded || options.mediaLoadedReinit) {
      for (const el of self.elements) {
        const imgs = el.querySelectorAll('img')
        self.destroyElements.push(...imgs)
        for (const img of imgs) {
          if (!Xt.dataStorage.get(img, `${self.ns}MedialoadedDone`)) {
            Xt.dataStorage.set(img, `${self.ns}MedialoadedDone`, true)
            if (!img.complete) {
              const medialoadedHandler = Xt.dataStorage.put(
                img,
                `load/media/${self.ns}`,
                self.eventMedialoadedHandler.bind(self).bind(self, img, el, true)
              )
              img.addEventListener('load', medialoadedHandler)
            } else {
              self.eventMedialoadedHandler(img, el)
            }
          }
        }
      }
      for (const tr of self.targets) {
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
  eventOnHandler({ element, force = false }, e) {
    const self = this
    const options = self.options
    force = force ? force : e?.detail?.force
    // fix groupElements and targets
    const el = options.groupElements || self.targets.includes(element) ? self.getElements(element)[0] : element
    // handler
    if (!force && options.eventLimit) {
      const eventLimit = self.containerElements.querySelectorAll(options.eventLimit)
      if (self.containerElements.matches(options.eventLimit)) {
        return
      } else if (eventLimit.length) {
        if (Xt.contains(eventLimit, e.target)) {
          return
        }
      }
    }
    self.eventOn(el, force, e)
  }

  /**
   * element off handler
   * @param {Node|HTMLElement|EventTarget|Window} elementelement
   * @param {Boolean} force
   * @param {Event} e
   */
  eventOffHandler({ element, force = false }, e) {
    const self = this
    const options = self.options
    force = force ? force : e?.detail?.force
    // fix groupElements and targets
    const el = options.groupElements || self.targets.includes(element) ? self.getElements(element)[0] : element
    // handler
    if (!force && options.eventLimit) {
      const eventLimit = self.containerElements.querySelectorAll(options.eventLimit)
      if (self.containerElements.matches(options.eventLimit)) {
        return
      } else if (eventLimit.length) {
        if (Xt.contains(eventLimit, e.target)) {
          return
        }
      }
    }
    self.eventOff(el, force, e)
  }

  /**
   * init prevents click on touch until clicked two times
   * @param {Node|HTMLElement|EventTarget|Window} element
   */
  eventPreventeventStartHandler({ element }) {
    const self = this
    // active
    Xt.dataStorage.put(element, `active/preventevent/${self.ns}`, self.hasCurrent(element))
    // event link
    const preventeventHandler = Xt.dataStorage.put(
      element,
      `click/preventevent/${self.ns}`,
      self.eventPreventeventHandler.bind(self, { element })
    )
    element.addEventListener('click', preventeventHandler)
    // event reset
    const preventeventResetHandler = Xt.dataStorage.put(
      element,
      `off/preventevent/${self.ns}`,
      self.eventPreventeventResetHandler.bind(self, { element })
    )
    element.addEventListener(`off.${self.componentNs}`, preventeventResetHandler)
  }

  /**
   * remove prevents click on touch until clicked two times
   * @param {Node|HTMLElement|EventTarget|Window} element
   */
  eventPreventeventEndHandler({ element }) {
    const self = this
    // event link
    const preventeventHandler = Xt.dataStorage.get(element, `click/preventevent/${self.ns}`)
    element.removeEventListener('click', preventeventHandler)
    // event reset
    const preventeventResetHandler = Xt.dataStorage.get(element, `off/preventevent/${self.ns}`)
    element.removeEventListener(`off.${self.componentNs}`, preventeventResetHandler)
  }

  /**
   * prevents click on touch until clicked two times
   * @param {Node|HTMLElement|EventTarget|Window} el
   * @param {Event} e
   */
  eventPreventeventHandler({ element }, e) {
    const self = this
    const active = Xt.dataStorage.get(element, `active/preventevent/${self.ns}`)
    if (!active && !Xt.dataStorage.get(element, `${self.ns}PreventeventDone`)) {
      Xt.dataStorage.set(element, `${self.ns}PreventeventDone`, true)
      // prevent default
      e.preventDefault()
    } else {
      self.eventPreventeventEndHandler({ element })
      Xt.dataStorage.remove(element, `${self.ns}PreventeventDone`)
      Xt.dataStorage.remove(element, `active/preventevent/${self.ns}`)
    }
  }

  /**
   * reset prevents click on touch until clicked two times
   * @param {Node|HTMLElement|EventTarget|Window} element
   */
  eventPreventeventResetHandler({ element }) {
    const self = this
    self.eventPreventeventEndHandler({ element })
    Xt.dataStorage.remove(element, `${self.ns}PreventeventDone`)
    Xt.dataStorage.remove(element, `active/preventevent/${self.ns}`)
  }

  /**
   * hash change
   * @param {Boolean} saveCurrents
   * @return {Object} return
   * @return {Number} return.currents
   * @return {Array} return.arr
   */
  hashChange(saveCurrents) {
    const self = this
    const options = self.options
    // vars
    let currents = 0
    const arr = []
    // disabled
    if (self.disabled) {
      return { currents, arr }
    }
    // logic
    if (self.hasHash) {
      if (!Xt.dataStorage.get(self.object, `${self.ns}HashSkip`)) {
        const hash = decodeURI(location.hash.split('#')[1])
        if (hash) {
          // check
          const checkHash = (el, hash) => {
            if (el.getAttribute(options.hash) === hash) {
              return true
            }
            return false
          }
          // check hash
          for (const el of self.elements) {
            let activated = false
            // check if activated
            if (saveCurrents) {
              activated = checkHash(el, hash)
            }
            // check targets
            const targets = self.getTargets(el)
            for (const tr of targets) {
              // check if activated
              if (saveCurrents && !activated) {
                activated = checkHash(tr, hash)
              }
            }
            // activate
            if (activated && currents < options.max) {
              // initial
              currents++
              arr.push(el)
              // toggle event if present because of custom listeners
              if (options.on) {
                const event = options.on.split(' ')[0]
                el.dispatchEvent(new CustomEvent(event, { detail: { force: true } }))
              } else {
                self.eventOn(el, true)
              }
              Xt.scrolltoHashforce = true
            }
          }
        }
      }
      Xt.dataStorage.set(self.object, `${self.ns}HashSkip`, false)
    }
    // return
    return { currents, arr }
  }

  /**
   * jump handler
   * @param {Node|HTMLElement|EventTarget|Window} tr
   * @param {Event} e
   */
  eventJumpHandler(tr, e) {
    const self = this
    // disabled
    if (self.disabled) {
      return
    }
    // check because of event propagation
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
   * openauto handler
   * @param {Event} e
   */
  eventOpenautoHandler(e) {
    const self = this
    // handler
    let found
    for (const el of Array.from(self.elements).filter(x => x.contains(e.target))) {
      found = el
      break
    }
    if (!found) {
      for (const tr of Array.from(self.targets).filter(x => x.contains(e.target))) {
        found = tr
        break
      }
    }
    if (found) {
      self.eventOn(found, true, e)
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
    // fix multiple calls
    Xt.dataStorage.set(img, `${self.ns}MedialoadedDone`, true)
    // mediaLoadedReinit
    if (options.mediaLoadedReinit && deferred) {
      Xt.eventDelay({
        event: { detail: { delay: Xt.medialoadedDelay } },
        element: self.object,
        prefix: `${self.ns}MedialoadedReinit`,
        func: () => {
          // mediaLoaded
          self.eventMediaLoadedReinit()
        },
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
    const groups = []
    for (const element of self.elements) {
      // choose element by group
      const group = element.getAttribute('data-xt-group')
      if (group) {
        const alreadyFound = groups.filter(x => x.getAttribute('data-xt-group') === group)
        if (!alreadyFound.length) {
          groups.push(element)
        }
      } else {
        groups.push(element)
      }
    }
    return groups
  }

  /**
   * filter elements or targets array with groups array
   * @param {Array} arr Elements or Targets
   * @param {String} attr Groups attribute
   * @param {Boolean} some Filter also if some in Groups attribute
   * @param {Boolean} same Use also data-xt-group-same
   * @return {Array} Filtered array
   */
  groupFilter(elements, attr, some = false, same = false) {
    const self = this
    const options = self.options
    // logic
    const found = []
    for (const el of elements) {
      let currentAttr = el.getAttribute('data-xt-group')
      if (same) {
        const currentAttrSame = el.getAttribute('data-xt-group-same')
        if (currentAttrSame) {
          currentAttr += options.groupSeparator + currentAttrSame
        }
      }
      // if same attr
      if (currentAttr === attr) {
        found.push(el)
        continue
      }
      // if some in attr
      if (some) {
        const groups = attr?.split(options.groupSeparator).filter(x => x)
        const currentGroups = currentAttr?.split(options.groupSeparator).filter(x => x)
        if (currentGroups && groups && currentGroups.some(x => groups.includes(x))) {
          found.push(el)
        }
      }
    }
    return found
  }

  /**
   * get elements from element or target
   * @param {Node|HTMLElement|EventTarget|Window} el Element that triggered interaction
   * @param {Boolean} same Use also data-xt-group-same
   * @return {Array} The first element is the one on getElementsGroups()
   */
  getElements(el = null, same = false) {
    const self = this
    const options = self.options
    // getElements
    if (!self.elements || !self.elements.length) {
      return []
    }
    if (!el) {
      return []
    } else if (self.mode === 'unique') {
      // xtNamespace linked components
      const final = []
      const selfs = Xt.dataStorage.get(self.ns, 'xtNamespace')
      if (selfs) {
        for (const s of selfs) {
          // choose element by group
          final.push(...s.elements)
        }
        return final
      }
      return []
    } else if (self.mode === 'multiple') {
      // choose element by group
      let final
      let attr = el.getAttribute('data-xt-group')
      if (same) {
        const attrSame = el.getAttribute('data-xt-group-same')
        if (attrSame) {
          attr += options.groupSeparator + attrSame
        }
      }
      const some = self.elements.includes(el) ? false : true // data-xt-group some only if finding elements from targets
      const groupElements = self.groupFilter(self.elements, attr, some, same)
      const groupTargets = self.groupFilter(self.targets, attr, some, same)
      if (attr) {
        // if group all group targets
        final = Xt.arrSingle(groupElements)
      } else {
        // not group targets by index
        if (Array.from(self.elements).includes(el)) {
          final = Xt.arrSingle(el)
        } else {
          // groupElements and groupTargets are elements and targets without data-xt-group here
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
   * @param {Boolean} same Use also data-xt-group-same
   * @return {Array}
   */
  getTargets(el = null, same = false) {
    const self = this
    const options = self.options
    // getTargets
    if (!self.targets || !self.targets.length) {
      return []
    }
    if (!el) {
      return []
    } else if (self.mode === 'unique') {
      // xtNamespace linked components
      const final = self.targets
      return final
    } else if (self.mode === 'multiple') {
      // choose only target by group
      let final
      let attr = el.getAttribute('data-xt-group')
      if (same) {
        const attrSame = el.getAttribute('data-xt-group-same')
        if (attrSame) {
          attr += options.groupSeparator + attrSame
        }
      }
      const some = self.targets.includes(el) ? false : true // data-xt-group some only if finding targets from elements
      const groupElements = self.groupFilter(self.elements, attr, some, same)
      const groupTargets = self.groupFilter(self.targets, attr, some, same)
      if (attr) {
        // if group all group targets
        final = Xt.arrSingle(groupTargets)
      } else {
        // not group targets by index
        if (Array.from(self.targets).includes(el)) {
          final = Xt.arrSingle(el)
        } else {
          // groupElements and groupTargets are elements and targets without data-xt-group here
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
    // fix groupElements and targets
    const elements = options.groupElements || self.targets.includes(element) ? self.getElements(element) : [element]
    // hasCurrent
    const arr = running ? Xt.running : Xt.currents
    return arr[self.ns].filter(x => elements.includes(x)).length
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
    obj.elements.runningOn = check
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
    obj.elements.runningOff = check
    return check
  }

  /**
   * set index
   * @param {Node|HTMLElement|EventTarget|Window} element Current group element
   */
  setIndex(element) {
    const self = this
    // fix groupElements and targets
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
      // initial direction and same index direction
      self.direction = 0
    } else if (self.inverse !== null) {
      // forced value
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
      el.classList.remove(...self.classesDone)
      el.classList.remove(...self.classesOut)
      // input
      el.checked = true
      // keep the same level of raf for activation
      cancelAnimationFrame(Xt.dataStorage.get(el, `${self.ns}ActivateFrame`))
      Xt.dataStorage.set(
        el,
        `${self.ns}ActivateFrame`,
        requestAnimationFrame(() => {
          Xt.dataStorage.set(
            el,
            `${self.ns}ActivateFrame`,
            requestAnimationFrame(() => {
              el.classList.add(...self.classesIn)
            })
          )
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
   * activate hash
   * @param {Object} obj Queue object
   * @param {Node|HTMLElement|EventTarget|Window} el Elements to be activated
   * @param {String} type Type of element
   */
  activateHash(obj, el, type) {
    const self = this
    const options = self.options
    // hash
    if (self.hasHash && !self.initial) {
      // fix no data-xt-group-same
      const elMain = obj.elements.queueEls[0]
      if (
        (type === 'elements' && self.getElements(elMain).includes(el)) ||
        (type === 'targets' && self.getTargets(elMain).includes(el))
      ) {
        const attr = el.getAttribute(options.hash)
        if (attr) {
          Xt.dataStorage.set(self.object, `${self.ns}HashSkip`, true)
          // raf prevents hash on chained activations (e.g: multiple hash on elements with same activation)
          cancelAnimationFrame(Xt.dataStorage.get(window, `xtHashFrame`))
          Xt.dataStorage.set(
            window,
            `xtHashFrame`,
            requestAnimationFrame(() => {
              location.hash = `#${encodeURIComponent(attr)}`
            })
          )
        }
      }
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
      el.classList.remove(...self.classesIn)
      el.classList.remove(...self.classesDone)
      el.classList.add(...self.classesOut)
      // input
      el.checked = false
      // keep the same level of raf for activation
      cancelAnimationFrame(Xt.dataStorage.get(el, `${self.ns}ActivateFrame`))
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

  /**
   * deactivate hash
   * @param {Object} obj Queue object
   * @param {Node|HTMLElement|EventTarget|Window} el Elements to be deactivated
   * @param {String} type Type of element
   */
  deactivateHash(obj, el, type) {
    const self = this
    const options = self.options
    // hash
    if (options.hash && self.hasHash && !self.initial) {
      // fix no data-xt-group-same
      const elMain = obj.elements.queueEls[0]
      if (
        (type === 'elements' && self.getElements(elMain).includes(el)) ||
        (type === 'targets' && self.getTargets(elMain).includes(el))
      ) {
        const attr = el.getAttribute(options.hash)
        if (attr && attr === location.hash.split('#')[1]) {
          Xt.dataStorage.set(self.object, `${self.ns}HashSkip`, true)
          // raf prevents hash on chained activations (e.g: multiple hash on elements with same activation)
          cancelAnimationFrame(Xt.dataStorage.get(window, `xtHashFrame`))
          Xt.dataStorage.set(
            window,
            `xtHashFrame`,
            requestAnimationFrame(() => {
              location.hash = ''
            })
          )
        }
      }
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
    if (force || (self.checkOn(element) && (!e || !e.type || e.type !== `off.trigger.${self.componentNs}`))) {
      // fix same event for on and off same namespace
      // auto
      self.eventAutostop()
      // fix groupElements and targets
      const elements =
        options.groupElements || self.targets.includes(element) ? self.getElements(element, true) : [element]
      // on
      self.addCurrent(elements[0])
      self.setIndex(elements[0])
      self.setDirection()
      const targets = self.getTargets(element, true)
      const elementsInner = Xt.queryAll(element, options.elementsInner)
      const targetsInner = Xt.queryAll(targets, options.targetsInner)
      // if currents > max
      const currents = self.getCurrents()
      if (currents.length > options.max) {
        // deactivate old
        self.eventOff(currents[0])
      }
      // queue obj
      const actionCurrent = 'In'
      const actionOther = 'Out'
      self.eventQueue(actionCurrent, elements, targets, elementsInner, targetsInner, force, e)
      // queue run
      // eslint-disable-next-line guard-for-in
      for (const type in self.detail[`queue${actionCurrent}`][0]) {
        self.queueStart(actionCurrent, actionOther, type, 0)
      }
      // activation
      return true
    } else if (options.on === options.off && e?.type !== `on.trigger.${self.componentNs}`) {
      // fix same event for on and off same namespace
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
      // fix groupElements and targets
      const elements =
        options.groupElements || self.targets.includes(element) ? self.getElements(element, true) : [element]
      // off
      self.removeCurrent(elements[0])
      const targets = self.getTargets(element, true)
      const elementsInner = Xt.queryAll(element, options.elementsInner)
      const targetsInner = Xt.queryAll(targets, options.targetsInner)
      // fix sometimes blur is undefined
      if (element.blur) {
        // fix :focus styles
        element.blur()
      }
      // auto
      if (!self.getCurrents().length) {
        self.eventAutostop()
      }
      // queue obj
      const actionCurrent = 'Out'
      const actionOther = 'In'
      self.eventQueue(actionCurrent, elements, targets, elementsInner, targetsInner, force, e)
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
        self.queueStart(actionCurrent, actionOther, type, 0)
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
   * @param {Boolean} force
   * @param {Event} e
   */
  eventQueue(actionCurrent, elements, targets, elementsInner, targetsInner, force, e) {
    const self = this
    const options = self.options
    // populate
    const obj = {}
    obj.elements = {
      queueEls: elements,
      force: force,
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
          self.goToPrev(options.auto.step, false, options.auto.loop)
        } else {
          self.goToNext(options.auto.step, false, options.auto.loop)
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
    if (options.auto && options.auto.time && Xt.autoTimescale) {
      // not when nothing activated
      if (self.currentIndex !== null && (!self.initial || options.auto.initial)) {
        // clear
        clearTimeout(Xt.dataStorage.get(self.object, `${self.ns}AutoTimeout`))
        // auto
        const time = options.auto.time
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
    if (options.auto && options.auto.time) {
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
    // pause
    if (options.auto && options.auto.time) {
      if (self.detail.autopaused) {
        // not when nothing activated
        if (self.currentIndex !== null && (!self.initial || options.auto.initial)) {
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
    }
  }

  /**
   * jump
   * @param {Node|HTMLElement|EventTarget|Window} tr
   */
  eventJump(tr, e) {
    const self = this
    // disabled
    if (self.disabled) {
      return
    }
    // check disabled
    if (tr.classList.contains(...self.classes) || !tr.classList.contains('xt-jump')) {
      return
    }
    // prevent default
    e.preventDefault()
    // jump
    if (self.checkOn(tr)) {
      self.eventOn(tr)
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
    //console.debug('mediaLoadedReinit', self.object)
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
   */
  queueStart(actionCurrent, actionOther, type, index) {
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
        // fix if initial must be instant, fixes queue
        if (self.initial || !options.queue) {
          obj[type].instant = true
        } else if (options.queue && !options.queue[type]) {
          obj[type].instantType = true
        }
        // special
        self.specialClassHtml(actionCurrent)
        // start queue
        self.queueDelay(actionCurrent, actionOther, obj, type)
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
          cancelAnimationFrame(Xt.dataStorage.get(el, `${self.ns}CollapseHeightFrame`))
          cancelAnimationFrame(Xt.dataStorage.get(el, `${self.ns}CollapseWidthFrame`))
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
   */
  queueDelay(actionCurrent, actionOther, obj, type) {
    const self = this
    const options = self.options
    // delay
    const els = obj[type].queueEls
    for (const el of els) {
      // delay
      let delay = Xt.delayTime(el, options.delay || options[`delay${actionCurrent}`], actionCurrent)
      if (delay) {
        if (typeof delay === 'function') {
          const count = Xt.dataStorage.get(el, `${self.ns + actionCurrent}Count`) || els.findIndex(x => x === el)
          const tot = Xt.dataStorage.get(el, `${self.ns + actionCurrent}Tot`) || els.length
          delay = delay({ current: count, total: tot - 1, el })
        }
      }
      // fnc
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
    // check if not already running or if force
    if (actionCurrent === 'In' && (self.checkOnRunning(obj) || obj.elements.force || obj.elements.e?.detail?.force)) {
      // only one time and if last element
      if (type === 'elements' && el === obj.elements.queueEls[0]) {
        self.addCurrent(el, true)
      }
      // activation
      self.activate(el, type)
      self.activateHash(obj, el, type)
      // special
      self.specialZindex(actionCurrent, el, type)
      self.specialAppendto(actionCurrent, el, type)
      self.specialCollapse(actionCurrent, el, type)
      self.specialClose(actionCurrent, el, type, obj)
      if (options.focusLimit) {
        if (obj.targets) {
          if (type === 'targets' || (!self.targets.length && type === 'elements')) {
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
        if (type === 'targets' || (!self.targets.length && type === 'elements')) {
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
          if (type === 'targets' || (!self.targets.length && type === 'elements')) {
            const focusables = el.querySelectorAll(Xt.focusables)
            for (const focusable of focusables) {
              focusable.removeAttribute('tabindex')
            }
          }
        }
      }
      // listener dispatch
      if (type !== 'elementsInner' && type !== 'targetsInner') {
        // keep the same level of raf for custom listener
        requestAnimationFrame(() => {
          el.dispatchEvent(
            new CustomEvent(`on.${self.componentNs}`, {
              detail: obj.elements.e ? obj.elements.e.detail : null,
            })
          )
        })
      }
    } else if (
      actionCurrent === 'Out' &&
      (self.checkOffRunning(obj) || obj.elements.force || obj.elements.e?.detail?.force)
    ) {
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
      self.deactivateHash(obj, el, type)
      // special
      self.specialCollapse(actionCurrent, el, type)
      self.specialClose(actionCurrent, el, type, obj)
      if (options.focusLimit) {
        const el = obj.targets ? obj.targets.queueEls[0] : obj.elements.queueEls[0]
        Xt.focusLimit.off(el)
      }
      // listener dispatch
      if (type !== 'elementsInner' && type !== 'targetsInner') {
        // keep the same level of raf for custom listener
        requestAnimationFrame(() => {
          // raf because after on for setDirection etc..
          requestAnimationFrame(() => {
            if (!self.disabled) {
              el.dispatchEvent(
                new CustomEvent(`off.${self.componentNs}`, {
                  detail: obj.elements.e ? obj.elements.e.detail : null,
                })
              )
            }
          })
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
    // duration
    const els = obj[type].queueEls
    let duration = Xt.animTime(el, options.duration || options[`duration${actionCurrent}`], actionCurrent)
    if (duration) {
      if (typeof duration === 'function') {
        const count = Xt.dataStorage.get(el, `${self.ns + actionCurrent}Count`) || els.findIndex(x => x === el)
        const tot = Xt.dataStorage.get(el, `${self.ns + actionCurrent}Tot`) || els.length
        duration = duration({ current: count, total: tot - 1, el })
      }
    }
    // fnc
    clearTimeout(Xt.dataStorage.get(el, `${self.ns + type}AnimTimeout`))
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
    if (actionCurrent === 'In') {
      // activation
      self.activateDone(el, type)
      // special
      self.specialCollapse('Reset', el, type)
      // listener dispatch
      if (type !== 'elementsInner' && type !== 'targetsInner') {
        // keep the same level of raf for custom listener
        requestAnimationFrame(() => {
          el.dispatchEvent(
            new CustomEvent(`ondone.${self.componentNs}`, {
              detail: obj.elements.e ? obj.elements.e.detail : null,
            })
          )
        })
      }
    } else if (actionCurrent === 'Out') {
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
        if (type === 'targets' || (!self.targets.length && type === 'elements')) {
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
        // keep the same level of raf for custom listener
        requestAnimationFrame(() => {
          // raf because after on for setDirection etc..
          requestAnimationFrame(() => {
            if (!self.disabled) {
              el.dispatchEvent(
                new CustomEvent(`offdone.${self.componentNs}`, {
                  detail: obj.elements.e ? obj.elements.e.detail : null,
                })
              )
            }
          })
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
    if (actionCurrent === 'In') {
      // keep the same level of raf for custom listener
      requestAnimationFrame(() => {
        // remove class initial
        if (self.initial) {
          for (const type in obj) {
            for (const el of obj[type].queueEls) {
              el.classList.remove(...self.classesInitial)
            }
          }
        }
        // listener dispatch
        self.object.dispatchEvent(new CustomEvent(`init.${self.componentNs}`))
        // fix autostart after self.initial or it gives error on reinitialization (demos fullscreen)
        self.eventAutostart()
        // initial after autostart
        self.initial = false
        // reset
        self.inverse = null
      })
    }
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
    // fix when standalone !self.targets.length && type === 'elements'
    if (!self.targets.length && type === 'elements') {
      type = 'targets'
    }
    // set zIndex
    if (options.zIndex && options.zIndex[type]) {
      if (actionCurrent === 'In') {
        self.detail.zIndex = self.detail.zIndex ? self.detail.zIndex : options.zIndex[type].start
        self.detail.zIndex = self.detail.zIndex + options.zIndex[type].factor
        el.style.zIndex = self.detail.zIndex
      } else if (actionCurrent === 'Out') {
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
      if (actionCurrent === 'In') {
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
      } else if (actionCurrent === 'Out') {
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
      if (actionCurrent === 'In') {
        // fix when standalone !self.targets.length && type === 'elements'
        if (type === 'targets' || (!self.targets.length && type === 'elements')) {
          // appendTo
          const appendToTarget = document.querySelector(options.appendTo)
          const appendOrigin = document.querySelector(`[data-xt-origin="${self.ns}"]`)
          if (!appendOrigin) {
            el.before(Xt.createElement(`<div class="xt-ignore hidden" data-xt-origin="${self.ns}"></div>`))
          }
          el.classList.add('xt-ignore', 'xt-ignore-once') // fix ignore once for mount when moving
          appendToTarget.append(el)
        }
      } else if (actionCurrent === 'Out') {
        // fix when standalone !self.targets.length && type === 'elements'
        if (type === 'targets' || (!self.targets.length && type === 'elements')) {
          // appendTo
          if (options.appendTo) {
            const appendOrigin = document.querySelector(`[data-xt-origin="${self.ns}"]`)
            if (appendOrigin) {
              el.classList.add('xt-ignore', 'xt-ignore-once') // fix ignore once for mount when moving
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
      if (actionCurrent === 'In') {
        if (options.collapseHeight === type) {
          el.classList.remove('xt-collapse-reset')
          el.style.height = 'auto'
          const final = el.offsetHeight
          el.style.height = ''
          let initial = el.offsetHeight
          initial = initial === final ? 0 : initial
          el.style.height = `${initial}px`
          // keep the same level of raf for activation
          cancelAnimationFrame(Xt.dataStorage.get(el, `${self.ns}CollapseHeightFrame`))
          Xt.dataStorage.set(
            el,
            `${self.ns}CollapseHeightFrame`,
            requestAnimationFrame(() => {
              Xt.dataStorage.set(
                el,
                `${self.ns}CollapseHeightFrame`,
                requestAnimationFrame(() => {
                  el.style.height = `${final}px`
                })
              )
            })
          )
        }
        if (options.collapseWidth === type) {
          el.classList.remove('xt-collapse-reset')
          el.style.width = 'auto'
          const final = el.offsetWidth
          el.style.width = ''
          let initial = el.offsetWidth
          initial = initial === final ? 0 : initial
          el.style.width = `${initial}px`
          // keep the same level of raf for activation
          cancelAnimationFrame(Xt.dataStorage.get(el, `${self.ns}CollapseWidthFrame`))
          Xt.dataStorage.set(
            el,
            `${self.ns}CollapseWidthFrame`,
            requestAnimationFrame(() => {
              Xt.dataStorage.set(
                el,
                `${self.ns}CollapseWidthFrame`,
                requestAnimationFrame(() => {
                  el.style.width = `${final}px`
                })
              )
            })
          )
        }
      } else if (actionCurrent === 'Out') {
        if (options.collapseHeight === type) {
          el.classList.remove('xt-collapse-reset')
          const current = el.offsetHeight // fix keep current off initial
          el.style.height = ''
          let final = el.offsetHeight
          el.style.height = 'auto'
          const initial = el.offsetHeight
          final = initial === final ? 0 : final
          el.style.height = `${current}px`
          // keep the same level of raf for activation
          cancelAnimationFrame(Xt.dataStorage.get(el, `${self.ns}CollapseHeightFrame`))
          Xt.dataStorage.set(
            el,
            `${self.ns}CollapseHeightFrame`,
            requestAnimationFrame(() => {
              Xt.dataStorage.set(
                el,
                `${self.ns}CollapseHeightFrame`,
                requestAnimationFrame(() => {
                  el.style.height = `${final}px`
                })
              )
            })
          )
        }
        if (options.collapseWidth === type) {
          el.classList.remove('xt-collapse-reset')
          const current = el.offsetWidth // fix keep current off initial
          el.style.width = ''
          let final = el.offsetWidth
          el.style.width = 'auto'
          const initial = el.offsetWidth
          final = initial === final ? 0 : final
          el.style.width = `${current}px`
          // keep the same level of raf for activation
          cancelAnimationFrame(Xt.dataStorage.get(el, `${self.ns}CollapseWidthFrame`))
          Xt.dataStorage.set(
            el,
            `${self.ns}CollapseWidthFrame`,
            requestAnimationFrame(() => {
              Xt.dataStorage.set(
                el,
                `${self.ns}CollapseWidthFrame`,
                requestAnimationFrame(() => {
                  el.style.width = `${final}px`
                })
              )
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
   * @param {Object} obj Queue object
   */
  specialClose(actionCurrent, el, type, obj) {
    const self = this
    const options = self.options
    if (actionCurrent === 'In') {
      // closeInside
      if (options.closeInside) {
        if (type === 'elements' || type === 'targets') {
          const closeElement = el
          const specialcloseinsideHandler = Xt.dataStorage.put(
            closeElement,
            `click/close/${self.ns}`,
            self.eventSpecialcloseinsideHandler.bind(self)
          )
          // fix do not close when clicking things that trigger this
          requestAnimationFrame(() => {
            closeElement.removeEventListener('click', specialcloseinsideHandler)
            closeElement.addEventListener('click', specialcloseinsideHandler)
          })
        }
      }
      // closeOutside
      if (options.closeOutside) {
        // only one time and if last element
        if (type === 'elements' && el === obj.elements.queueEls[0]) {
          const outsides = document.querySelectorAll(options.closeOutside)
          for (const outside of outsides) {
            const specialcloseoutsideHandler = Xt.dataStorage.put(
              outside,
              `click/close/${self.ns}`,
              self.eventSpecialcloseoutsideHandler.bind(self)
            )
            // fix do not close when clicking things that trigger this
            requestAnimationFrame(() => {
              outside.removeEventListener('click', specialcloseoutsideHandler)
              outside.addEventListener('click', specialcloseoutsideHandler)
            })
          }
        }
      }
      // closeDeep
      if (options.closeDeep) {
        // fix when standalone !self.targets.length && type === 'elements'
        if (type === 'targets' || type === 'targetsInner' || (!self.targets.length && type === 'elements')) {
          const closeElements = el.querySelectorAll(options.closeDeep)
          for (const closeElement of closeElements) {
            const specialclosedeepHandler = Xt.dataStorage.put(
              closeElement,
              `click/close/${self.ns}`,
              self.eventSpecialclosedeepHandler.bind(self)
            )
            // fix do not close when clicking things that trigger this
            requestAnimationFrame(() => {
              closeElement.addEventListener('click', specialclosedeepHandler)
            })
            // focusable
            const specialclosedeepKeydownHandler = Xt.dataStorage.put(
              closeElement,
              `keydown/close/${self.ns}`,
              self.eventSpecialclosedeepKeydownHandler.bind(self).bind(self, closeElement)
            )
            // fix do not close when clicking things that trigger this
            requestAnimationFrame(() => {
              closeElement.addEventListener('keydown', specialclosedeepKeydownHandler)
              closeElement.setAttribute('tabindex', '0')
              closeElement.setAttribute('role', 'button')
            })
          }
        }
      }
    } else if (actionCurrent === 'Out') {
      // closeInside
      if (options.closeInside) {
        if (type === 'elements' || type === 'targets') {
          const closeElement = el
          const specialcloseinsideHandler = Xt.dataStorage.get(closeElement, `click/close/${self.ns}`)
          closeElement.removeEventListener('click', specialcloseinsideHandler)
        }
      }
      // closeOutside
      if (options.closeOutside) {
        // only one time and if last element
        if (type === 'elements' && el === obj.elements.queueEls[0]) {
          const closeElements = document.querySelectorAll(options.closeOutside)
          for (const closeElement of closeElements) {
            const specialcloseoutsideHandler = Xt.dataStorage.get(closeElement, `click/close/${self.ns}`)
            closeElement.removeEventListener('click', specialcloseoutsideHandler)
          }
        }
      }
      // closeDeep
      if (options.closeDeep) {
        // fix when standalone !self.targets.length && type === 'elements'
        if (type === 'targets' || type === 'targetsInner' || (!self.targets.length && type === 'elements')) {
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
      }
    }
  }

  /**
   * specialCloseinside handler
   * @param {Event} e
   */
  eventSpecialcloseinsideHandler(e) {
    const self = this
    const options = self.options
    // handler
    if (e.target.matches(options.closeInside)) {
      const currents = self.getCurrents()
      for (const current of currents) {
        self.eventOff(current, true)
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

  //
  // index
  //

  /**
   * get next index
   * @param {Number} index
   * @param {Number} amount
   * @param {Boolean} loop
   * @return {Number} index
   */
  getNextIndex(index = false, amount = 1, loop = null) {
    const self = this
    // logic
    if (index !== false) {
      index = index + amount
    } else if (self.currentIndex !== null) {
      index = self.currentIndex + amount
    } else {
      index = 0
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
    const i = self.getNextIndex(false, amount, loop)
    return self.getElementsGroups()[i]
  }

  /**
   * activate next element
   * @param {Number} amount
   * @param {Boolean} force
   * @param {Boolean} loop
   * @return {Node|HTMLElement|EventTarget|Window} Element
   */
  goToNext(amount = 1, force = false, loop = null) {
    const self = this
    // goToNum
    self.inverse = false
    const index = self.getNextIndex(false, amount, loop)
    const el = self.goToNum(index, force, loop)
    return el
  }

  /**
   * get prev index
   * @param {Number} index
   * @param {Number} amount
   * @param {Boolean} loop
   * @return {Number} index
   */
  getPrevIndex(index = false, amount = 1, loop = null) {
    const self = this
    // logic
    if (index !== false) {
      index = index - amount
    } else if (self.currentIndex !== null) {
      index = self.currentIndex - amount
    } else {
      index = self.getElementsGroups().length - 1
    }
    return self.getNumIndex(index, loop)
  }

  /**
   * get prev element
   * @param {Number} amount
   * @param {Boolean} loop
   * @return {Node|HTMLElement|EventTarget|Window} Element
   */
  getPrev(amount = 1, loop = null) {
    const self = this
    // logic
    const i = self.getPrevIndex(false, amount, loop)
    return self.getElementsGroups()[i]
  }

  /**
   * activate prev element
   * @param {Number} amount
   * @param {Boolean} force
   * @param {Boolean} loop
   * @return {Node|HTMLElement|EventTarget|Window} Element
   */
  goToPrev(amount = 1, force = false, loop = null) {
    const self = this
    // goToNum
    self.inverse = true
    const index = self.getPrevIndex(false, amount, loop)
    const el = self.goToNum(index, force, loop)
    return el
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
      // if only one
      index = null
    } else {
      if (index > max) {
        if (loop || (loop === null && (options.loop || self.wrap))) {
          index = index - max - 1
          index = index > max ? max : index // prevent overflow
        } else {
          index = null
        }
      } else if (index < min) {
        if (loop || (loop == null && (options.loop || self.wrap))) {
          index = index + max + 1
          index = index < min ? min : index // prevent overflow
        } else {
          index = null
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
   * @return {Node|HTMLElement|EventTarget|Window} Element
   */
  goToNum(index, force = false, loop = null) {
    const self = this
    // go
    const el = self.getNum(index, loop)
    if (el) {
      self.eventOn(el, force)
    }
    return el
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
      // set options value
      self.options = Xt.merge([self.options, value])
    } else {
      // set options value from initial
      self.options = Xt.mergeReset(self.options, self.optionsInitial, value)
    }
    // reinit one time only with raf
    if (!skipReinit) {
      // fix appendTo close or self.targets are lost
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
    // keep the same level of raf for custom listener
    cancelAnimationFrame(Xt.dataStorage.get(self.object, `${self.ns}StatusFrame`))
    Xt.dataStorage.set(
      self.object,
      `${self.ns}StatusFrame`,
      requestAnimationFrame(() => {
        // check
        if (options.disabled || self.object.classList.contains('xt-slider-nooverflow')) {
          self.disable()
        } else {
          self.enable()
        }
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
      // fix appendTo close or self.targets are lost
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
      // jump
      if (options.jump) {
        for (const jump of self.targets) {
          jump.classList.remove('xt-jump')
        }
      }
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
        prefix: `${self.ns}Reinit`,
        func: () => {
          // handler
          self.reinit()
        },
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
   * remove namespace
   */
  removeNamespace() {
    const self = this
    // xtNamespace linked components
    const selfs = Xt.dataStorage.get(self.ns, 'xtNamespace')
    if (selfs) {
      const newSelfs = selfs.filter(x => x !== self)
      Xt.dataStorage.set(self.ns, 'xtNamespace', newSelfs)
    }
  }

  /**
   * removeEvents
   */
  removeEvents() {
    const self = this
    // remove internal events on self.destroyElements
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
                }
                // do not remove key because they are not overrided with Xt.dataStorage.put, or they trigger multiple times
                //Xt.dataStorage.remove(element, key)
              }
            }
          }
        }
      }
    }
  }

  /**
   * destroy
   * @param {Boolean} weak Do not destroy component
   */
  destroy(weak = false) {
    const self = this
    // disable
    self.disable()
    // remove events
    self.removeEvents()
    // remove namespace
    self.removeNamespace()
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

  //
}

//
// options
//

Toggle.componentName = 'xt-toggle'
Toggle.optionsDefaultSuper = {
  // element
  elements: false,
  targets: false,
  elementsInner: ':scope > a, :scope > button',
  targetsInner: false,
  exclude: false,
  // class
  class: 'on',
  classIn: 'in',
  classOut: 'out',
  classDone: 'done',
  classInitial: 'initial',
  classBefore: 'dir-before',
  classAfter: 'dir-after',
  classSkip: false,
  hash: 'data-xt-hash',
  groupSeparator: ',',
  groupElements: true,
  // quantity
  min: 0,
  max: 1,
  // event
  on: 'click',
  off: 'click',
  eventLimit: '.xt-event-limit',
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
  delayIn: false,
  delayOut: false,
  duration: false,
  durationIn: false,
  durationOut: false,
  // auto
  auto: {
    time: false,
    initial: true,
    step: 1,
    inverse: false,
    pause: 'a, button',
    loop: true,
  },
  // other
  matches: false,
  disabled: false,
  loop: false,
  jump: false,
  navigation: false,
  keyboard: {
    selector: false,
  },
  appendTo: false,
  classHtml: false,
  closeauto: false,
  openauto: false,
  mediaLoaded: false,
  mediaLoadedReinit: false,
  zIndex: false,
  focusLimit: false,
  collapseHeight: false,
  collapseWidth: false,
  aria: {
    activation: false,
    role: false,
    tabindex: false,
    controls: false,
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
  Xt.mount({
    matches: `[data-${Xt.Toggle.componentName}]`,
    mount: ({ ref }) => {
      // vars

      const optionsMarkup = ref.getAttribute(`data-${Xt.Toggle.componentName}`)
      const options = optionsMarkup ? RJSON.parse(optionsMarkup) : {}

      // init

      let self = new Xt.Toggle(ref, options)

      // unmount

      return () => {
        self.destroy()
        self = null
      }
    },
  })
}
