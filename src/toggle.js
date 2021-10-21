/*!
 * Xtend UI (https://xtendui.com/)
 * @copyright (c) 2017 - 2021 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/beta/LICENSE)
 */

import { Xt } from './xt'
import RJSON from 'relaxed-json'
import * as focusTrap from 'focus-trap'
Xt.RJSON = RJSON
Xt.focusTrap = focusTrap

/**
 * Toggle
 */
class Toggle {
  /**
   * fields
   */
  _optionsCustom
  _optionsDefault
  _optionsInitial
  _componentNs
  _mode
  _classes = []
  _classesIn = []
  _classesOut = []
  _classesDone = []
  _classesInitial = []
  _classesBefore = []
  _classesAfter = []
  _initialCurrents = []
  _destroyElements
  _containerElements
  _containerTargets
  _oldIndex
  _inverse
  _queueIn = []
  _queueOut = []
  _autoblock
  _disabledManual
  _hasHash
  _autorunning
  _observer
  _focusTrap
  componentName
  uniqueId
  ns
  options
  initial
  disabled = false
  container
  elements = []
  targets = []
  index
  direction

  // slider
  _usedWidth
  _wrap
  _keepHeight
  _autoHeight
  _groups
  drag = {}
  pags

  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} optionsCustom User options
   * @constructor
   */
  constructor(object, optionsCustom = {}) {
    const self = this
    self.container = object
    self._optionsCustom = optionsCustom
    self.componentName = self.constructor.componentName
    self._componentNs = self.componentName.replace('-', '.')
    // set self
    Xt._set({ name: self.componentName, el: self.container, self })
    // init
    self._init()
  }

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
    self._optionsDefault = Xt.merge([self.constructor.optionsDefaultSuper, self.constructor.optionsDefault])
    self._optionsDefault = Xt.merge([self._optionsDefault, Xt.options[self.componentName]])
    self._optionsInitial = self.options = Xt.merge([self._optionsDefault, self._optionsCustom])
    // classes
    const options = self.options
    self._classes = options.class ? [...options.class.split(' ')] : []
    self._classesIn = options.classIn ? [...options.classIn.split(' ')] : []
    self._classesOut = options.classOut ? [...options.classOut.split(' ')] : []
    self._classesDone = options.classDone ? [...options.classDone.split(' ')] : []
    self._classesInitial = options.classInitial ? [...options.classInitial.split(' ')] : []
    self._classesBefore = options.classBefore ? [...options.classBefore.split(' ')] : []
    self._classesAfter = options.classAfter ? [...options.classAfter.split(' ')] : []
  }

  /**
   * init logic
   * @param {Object} params
   * @param {Boolean} params.save Save currents
   */
  _initLogic({ save = true } = {}) {
    const self = this
    // vars
    self._destroyElements = [document, window, self.container]
    // enable first for proper initial activation
    self.enable()
    // init
    self._initSetup()
    Xt._initMatches({ self, optionsInitial: self._optionsInitial })
    self._initScope()
    self._initAria()
    self._initEvents()
    self._initStart({ save })
    // disable last for proper options.disableDeactivate
    if (self.options.disabled || self._disabledManual) {
      self.disable()
    }
  }

  /**
   * init setup
   */
  _initSetup() {
    const self = this
    const options = self.options
    // mode
    self._containerTargets = self.container
    self.uniqueId = self.uniqueId ?? Xt.uniqueId()
    if (options.targets && options.targets.indexOf('#') !== -1) {
      self._mode = 'unique'
      self._containerTargets = document.documentElement
      self.ns = `${self.componentName}-${options.targets.toString()}-${self._classes.toString()}`
    } else {
      self._mode = 'multiple'
      self.ns = `${self.componentName}-${self.uniqueId}`
    }
    // final namespace
    self.ns = self.ns.replace(/^[^a-z]+|[ ,#_:.-]+/gi, '')
    // namespace
    self._addNamespace()
    // currents array based on namespace (so shared between Xt objects)
    self._setCurrents([])
  }

  /**
   * init elements, targets and currents
   */
  _initScope() {
    const self = this
    // elements
    self._initScopeElements()
    // targets
    self._initScopeTargets()
  }

  /**
   * init elements
   */
  _initScopeElements() {
    const self = this
    const options = self.options
    // elements
    self._containerElements = self.container
    if (options.elements) {
      if (options.elements.indexOf('#') !== -1) {
        self._containerElements = document.documentElement
      }
      let arr = Array.from(self._containerElements.querySelectorAll(options.elements))
      if (options.exclude) {
        arr = arr.filter(x => !x.matches(options.exclude))
      }
      self.elements = arr
      self._destroyElements.push(...self.elements)
    }
    // object if no elements
    if (!self.elements.length) {
      self.elements = [self.container]
    }
  }

  /**
   * init targets
   */
  _initScopeTargets() {
    const self = this
    const options = self.options
    // targets
    if (options.targets) {
      let arr = Array.from(self._containerTargets.querySelectorAll(options.targets))
      if (options.exclude) {
        arr = arr.filter(x => !x.matches(options.exclude))
      }
      self.targets = arr
      self._destroyElements.push(...self.targets)
    }
  }

  /**
   * init start
   * @param {Object} params
   * @param {Boolean} params.save Save currents
   */
  _initStart({ save = false } = {}) {
    const self = this
    const options = self.options
    // currents
    self._setCurrents([])
    // vars
    let currents = 0
    self.initial = true
    self.index = null
    self._oldIndex = null
    Xt._running[self.ns] = []
    // INSTANT ACTIVATION because we need activation classes right away (e.g.: slider inside demos toggle must be visible to get values)
    // check initial activation
    currents = self._initActivate({ save })
    // if currents < min
    const todo = options.min - currents
    const start = 0
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
            self._eventOn({ el, force: true })
          }
        }
      }
    }
    // currents
    if (save) {
      self._initialCurrents = self._getCurrents().slice(0) // copy array with slice(0)
    }
    // no currents
    if (currents === 0) {
      // init
      Xt.frame({
        el: self.container,
        ns: `${self.ns}Init`,
        func: () => {
          // fix before _initScope or slider absolute has multiple active and bugs initial calculations
          self.container.setAttribute(`data-${self.componentName}-init`, '')
          // dispatch event
          self.container.dispatchEvent(new CustomEvent(`init.${self._componentNs}`))
          // fix autostart after self.initial or it gives error on reinitialization (demos fullscreen)
          self._eventAutostart()
          // initial after autostart
          self.initial = false
          // debug
          if (options.debug) {
            // eslint-disable-next-line no-console
            console.debug(`${self.componentName} init`, self)
          }
        },
      })
    }
  }

  /**
   * init activate
   * @param {Object} params
   * @param {Boolean} params.save Save currents
   * @return {Number} currents count
   */
  _initActivate({ save = false } = {}) {
    const self = this
    const options = self.options
    // check
    const checkClass = el => {
      for (const c of self._classes) {
        if (el.classList.contains(c) || el.checked) {
          return true
        }
      }
      return false
    }
    // check hash
    const obj = self._hashChange({ save })
    let currents = obj.currents ?? 0
    // check class
    for (const el of self.getElementsGroups()) {
      let activated = false
      // check if activated
      if (save) {
        if (options.classSkip !== true && !options.classSkip.elements) {
          activated = checkClass(el)
        }
      } else if (self._initialCurrents.includes(el)) {
        activated = true
      }
      // check if activated
      // fix check options.max for currents of _hashChange current reset if hash has current
      // fix check obj.arr has element already activated
      if ((activated && currents < options.max) || obj.arr.includes(el)) {
        // instant animation
        el.classList.add(...self._classes)
        el.classList.add(...self._classesIn)
        el.classList.add(...self._classesInitial)
      } else {
        // reset classes
        if (options.classSkip !== true && !options.classSkip.elements) {
          const elsSame = self.getElements({ el })
          for (const elSame of elsSame) {
            elSame.classList.remove(
              ...self._classes,
              ...self._classesIn,
              ...self._classesOut,
              ...self._classesDone,
              ...self._classesInitial,
              ...self._classesBefore,
              ...self._classesAfter
            )
          }
        }
        if (options.classSkip !== true && !options.classSkip.elementsInner) {
          const elsInner = Xt.queryAll({ els: el, query: options.elementsInner })
          for (const elInner of elsInner) {
            elInner.classList.remove(
              ...self._classes,
              ...self._classesIn,
              ...self._classesOut,
              ...self._classesDone,
              ...self._classesInitial,
              ...self._classesBefore,
              ...self._classesAfter
            )
          }
        }
      }
      // check targets
      const targets = self.getTargets({ el })
      for (const tr of targets) {
        // check if activated
        if (save && !activated) {
          if (options.classSkip !== true && !options.classSkip.targets) {
            activated = checkClass(tr)
          }
        }
        // check if activated
        // fix check options.max for currents of _hashChange current reset if hash has current
        if ((activated && currents < options.max) || obj.arr.includes(el)) {
          // instant animation
          tr.classList.add(...self._classes)
          tr.classList.add(...self._classesIn)
          tr.classList.add(...self._classesInitial)
        } else {
          // reset classes
          if (options.classSkip !== true && !options.classSkip.targets) {
            tr.classList.remove(
              ...self._classes,
              ...self._classesIn,
              ...self._classesOut,
              ...self._classesDone,
              ...self._classesInitial,
              ...self._classesBefore,
              ...self._classesAfter
            )
          }
          if (options.classSkip !== true && !options.classSkip.targetsInner) {
            const trsInner = Xt.queryAll({ els: tr, query: options.targetsInner })
            for (const trInner of trsInner) {
              trInner.classList.remove(
                ...self._classes,
                ...self._classesIn,
                ...self._classesOut,
                ...self._classesDone,
                ...self._classesInitial,
                ...self._classesBefore,
                ...self._classesAfter
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
          self._eventOn({ el, force: true })
        }
      }
    }
    // return
    return currents
  }

  /**
   * init aria
   */
  _initAria() {
    const self = this
    const options = self.options
    // role
    self._initAriaRole()
    // aria
    if (options.aria) {
      if (self.targets.length) {
        // targets
        for (const tr of self.targets) {
          // id
          if (options.aria === true || options.aria.labelledby || options.aria.controls) {
            const id = tr.getAttribute('id')
            if (!id) {
              tr.setAttribute('id', Xt.uniqueId())
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
              el.setAttribute('id', Xt.uniqueId())
            }
          }
          // controls
          if (options.aria === true || options.aria.controls) {
            const trs = self.getTargets({ el })
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
          // describedby
          if (options.aria === true || options.aria.describedby) {
            const els = self.getElements({ el: tr })
            let str = ' '
            str += ''
            for (const el of els) {
              str += ` ${el.getAttribute('id')}`
            }
            tr.setAttribute('aria-describedby', str.trim())
          }
          // labelledby
          if (options.aria === true || options.aria.labelledby) {
            const els = self.getElements({ el: tr })
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
  _initAriaRole() {
    const self = this
    const options = self.options
    // aria
    if (options.aria) {
      if (self.targets.length) {
        // role
        if (options.aria === true || options.aria.role) {
          if (self._mode === 'multiple') {
            self.container.setAttribute('role', 'tablist')
            if (options.max > 1) {
              self.container.setAttribute('aria-multiselectable', 'true')
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
  _initEvents() {
    const self = this
    const options = self.options
    // remove events
    self._removeEvents()
    // elements
    for (const el of self.elements) {
      // event on
      const onHandlerCustom = Xt.dataStorage.put(
        el,
        `${options.on}/oncustom/${self.ns}`,
        self._eventOnHandler.bind(self, { el, force: true })
      )
      el.addEventListener(`on.trigger.${self._componentNs}`, onHandlerCustom)
      if (options.on) {
        const onHandler = Xt.dataStorage.put(el, `${options.on}/on/${self.ns}`, self._eventOnHandler.bind(self, { el }))
        const events = [...options.on.split(' ')]
        for (const event of events) {
          el.addEventListener(event, onHandler)
        }
      }
      // event off
      const offHandlerCustom = Xt.dataStorage.put(
        el,
        `${options.off}/offcustom/${self.ns}`,
        self._eventOffHandler.bind(self, { el, force: true })
      )
      el.addEventListener(`off.trigger.${self._componentNs}`, offHandlerCustom)
      if (options.off) {
        const offHandler = Xt.dataStorage.put(
          el,
          `${options.off}/off/${self.ns}`,
          self._eventOffHandler.bind(self, { el })
        )
        const events = [...options.off.split(' ')]
        for (const event of events) {
          // fix same event for on and off same namespace
          if (![...options.on.split(' ')].includes(event)) {
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
              self._eventPreventeventStartHandler.bind(self, { el })
            )
            el.addEventListener('touchend', preventeventStartTouchHandler)
          }
          if (events.includes('click')) {
            const preventeventStartMouseHandler = Xt.dataStorage.put(
              el,
              `mouseup/preventevent/${self.ns}`,
              self._eventPreventeventStartHandler.bind(self, { el })
            )
            el.addEventListener('mouseup', preventeventStartMouseHandler)
          }
        }
        Xt.dataStorage.put(el, `active/preventevent/${self.ns}`, self.hasCurrent({ el }))
      }
    }
    // targets
    for (const tr of self.targets) {
      // event on
      const onHandlerCustom = Xt.dataStorage.put(
        tr,
        `${options.on}/oncustom/${self.ns}`,
        self._eventOnHandler.bind(self, { el: tr, force: true })
      )
      tr.addEventListener(`on.trigger.${self._componentNs}`, onHandlerCustom)
      // event off
      const offHandlerCustom = Xt.dataStorage.put(
        tr,
        `${options.off}/offcustom/${self.ns}`,
        self._eventOffHandler.bind(self, { el: tr, force: true })
      )
      tr.addEventListener(`off.trigger.${self._componentNs}`, offHandlerCustom)
    }
    // auto
    if (options.auto && options.auto.time) {
      const autostartHandler = Xt.dataStorage.put(
        self.container,
        `autostart/${self.ns}`,
        self._eventAutostart.bind(self)
      )
      const autostopHandler = Xt.dataStorage.put(self.container, `autostop/${self.ns}`, self._eventAutostop.bind(self))
      // focus
      // Xt.dataStorage.set with window to fix unique mode same self.ns
      const focusHandler = Xt.dataStorage.set(window, `focus/auto/${self.ns}`, autostartHandler)
      addEventListener('focus', focusHandler)
      // blur
      // Xt.dataStorage.set with window to fix unique mode same self.ns
      const blurHandler = Xt.dataStorage.set(window, `blur/auto/${self.ns}`, autostopHandler)
      addEventListener('blur', blurHandler)
      // event
      self.container.addEventListener(`autostart.trigger.${self._componentNs}`, autostartHandler)
      self.container.addEventListener(`autostop.trigger.${self._componentNs}`, autostopHandler)
      // autopause
      if (options.auto.pause) {
        const autopauseEls = self.container.querySelectorAll(options.auto.pause)
        if (autopauseEls.length) {
          self._destroyElements.push(...autopauseEls)
          for (const el of autopauseEls) {
            // pause
            const autopauseOnHandler = Xt.dataStorage.put(
              el,
              `mouseenter focus/auto/${self.ns}`,
              self._eventAutostop.bind(self)
            )
            const eventsPause = ['mouseenter', 'focus']
            for (const event of eventsPause) {
              el.addEventListener(event, autopauseOnHandler)
            }
            // resume
            const autoresumeOnHandler = Xt.dataStorage.put(
              el,
              `mouseleave blur/auto/${self.ns}`,
              self._eventAutostart.bind(self)
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
      for (const el of self.elements) {
        if (el.getAttribute(options.hash)) {
          self._hasHash = true
          break
        }
      }
      if (!self._hasHash) {
        for (const tr of self.targets) {
          if (tr.getAttribute(options.hash)) {
            self._hasHash = true
            break
          }
        }
      }
    }
    if (self._hasHash) {
      // hash
      const hashHandler = Xt.dataStorage.put(
        window,
        `popstate/${self.ns}`,
        self._hashChange.bind(self).bind(self, { save: true })
      )
      addEventListener('popstate', hashHandler)
    }
    // jump
    if (options.jump) {
      for (const el of self.targets) {
        const jumpHandler = Xt.dataStorage.put(
          el,
          `click/jump/${self.ns}`,
          self._eventJumpHandler.bind(self).bind(self, { el })
        )
        el.addEventListener('click', jumpHandler, true) // fix elements inside targets (slider pagination)
        // jump
        if (!self.disabled) {
          el.classList.add('xt-jump')
        }
      }
    }
    // navigation
    if (options.navigation) {
      self.navs = self.container.querySelectorAll(options.navigation)
      if (self.navs.length) {
        self._destroyElements.push(...self.navs)
        for (const el of self.navs) {
          const navHandler = Xt.dataStorage.put(
            el,
            `click/nav/${self.ns}`,
            self._eventNavHandler.bind(self).bind(self, { el })
          )
          el.addEventListener('click', navHandler)
        }
      }
    }
    // keyboard
    if (options.keyboard && options.keyboard.selector) {
      const keyboards =
        options.keyboard.selector === 'object'
          ? [self.container]
          : self.container.querySelectorAll(options.keyboard.selector)
      self._destroyElements.push(...keyboards)
      for (const keyboard of keyboards) {
        keyboard.setAttribute('tabindex', '0')
        // focus
        const keyboardfocusHandler = Xt.dataStorage.put(
          keyboard,
          `focus/keyboard/${self.ns}`,
          self._eventKeyboardfocusHandler.bind(self)
        )
        keyboard.addEventListener('focus', keyboardfocusHandler)
        // blur
        const keyboardblurHandler = Xt.dataStorage.put(
          keyboard,
          `blur/keyboard/${self.ns}`,
          self._eventKeyboardblurHandler.bind(self)
        )
        keyboard.addEventListener('blur', keyboardblurHandler)
      }
    }
    // closeauto
    if (options.closeauto) {
      // Xt.dataStorage.set with window to fix unique mode same self.ns
      const closeautoHandler = Xt.dataStorage.set(
        window,
        `closeauto.trigger.xt/${self.ns}`,
        self._eventCloseautoHandler.bind(self)
      )
      addEventListener('closeauto.trigger.xt', closeautoHandler, true)
    }
    if (options.openauto) {
      // Xt.dataStorage.set with window to fix unique mode same self.ns
      const openautoHandler = Xt.dataStorage.set(
        window,
        `openauto.trigger.xt/${self.ns}`,
        self._eventOpenautoHandler.bind(self)
      )
      addEventListener('openauto.trigger.xt', openautoHandler, true)
    }
    // mediaLoaded
    if (options.mediaLoaded || options.mediaLoadedReinit) {
      for (const el of self.elements) {
        const imgs = Array.from(el.querySelectorAll('img')).filter(x => !x.closest('.xt-clone'))
        self._destroyElements.push(...imgs)
        for (const img of imgs) {
          if (!Xt.dataStorage.get(img, `${self.ns}MedialoadedDone`)) {
            Xt.dataStorage.set(img, `${self.ns}MedialoadedDone`, true)
            if (!img.complete) {
              const medialoadedHandler = Xt.dataStorage.put(
                img,
                `load/media/${self.ns}`,
                self._eventMedialoadedHandler.bind(self).bind(self, { img, el, deferred: true })
              )
              img.addEventListener('load', medialoadedHandler)
            } else {
              self._eventMedialoadedHandler({ img, el })
            }
          }
        }
      }
      for (const tr of self.targets) {
        const imgs = Array.from(tr.querySelectorAll('img')).filter(x => !x.closest('.xt-clone'))
        self._destroyElements.push(...imgs)
        for (const img of imgs) {
          if (!Xt.dataStorage.get(img, `${self.ns}MedialoadedDone`)) {
            if (!img.complete) {
              const medialoadedHandler = Xt.dataStorage.put(
                img,
                `load/media/${self.ns}`,
                self._eventMedialoadedHandler.bind(self).bind(self, { img, el: tr, deferred: true })
              )
              img.addEventListener('load', medialoadedHandler)
            } else {
              self._eventMedialoadedHandler({ img, el: tr })
            }
          }
        }
      }
    }
    // visibleReinit
    if (options.visibleReinit) {
      if (!Xt.visible({ el: self.container })) {
        // intersection observer
        self._observer = new IntersectionObserver(
          (entries, observer) => {
            for (const entry of entries) {
              if (entry.intersectionRatio > 0) {
                self._eventVisibleReinit()
                observer.disconnect()
                self._observer = null
              }
            }
          },
          { root: null }
        )
        self._observer.observe(self.container)
      }
    }
  }

  //
  // handler
  //

  /**
   * element on handler
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.el
   * @param {Boolean} params.force
   * @param {Event} e
   */
  _eventOnHandler({ el, force = false }, e) {
    const self = this
    const options = self.options
    force = force ? force : e?.detail?.force
    // fix groupElements and targets
    el = options.groupElements || self.targets.includes(el) ? self.getElements({ el })[0] : el
    // handler
    if (!force && options.eventLimit) {
      const eventLimit = self._containerElements.querySelectorAll(options.eventLimit)
      if (self._containerElements.matches(options.eventLimit)) {
        return
      } else if (eventLimit.length) {
        if (Xt.contains({ els: eventLimit, tr: e.target })) {
          return
        }
      }
    }
    self._eventOn({ el, force }, e)
  }

  /**
   * element off handler
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.el
   * @param {Boolean} params.force
   * @param {Event} e
   */
  _eventOffHandler({ el, force = false }, e) {
    const self = this
    const options = self.options
    force = force ? force : e?.detail?.force
    // fix groupElements and targets
    el = options.groupElements || self.targets.includes(el) ? self.getElements({ el })[0] : el
    // handler
    if (!force && options.eventLimit) {
      const eventLimit = self._containerElements.querySelectorAll(options.eventLimit)
      if (self._containerElements.matches(options.eventLimit)) {
        return
      } else if (eventLimit.length) {
        if (Xt.contains({ els: eventLimit, tr: e.target })) {
          return
        }
      }
    }
    self._eventOff({ el, force }, e)
  }

  /**
   * init prevents click on touch until clicked two times
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.el
   */
  _eventPreventeventStartHandler({ el } = {}) {
    const self = this
    // active
    Xt.dataStorage.put(el, `active/preventevent/${self.ns}`, self.hasCurrent({ el }))
    // event link
    const preventeventHandler = Xt.dataStorage.put(
      el,
      `click/preventevent/${self.ns}`,
      self._eventPreventeventHandler.bind(self, { el })
    )
    el.addEventListener('click', preventeventHandler)
    // event reset
    const preventeventResetHandler = Xt.dataStorage.put(
      el,
      `off/preventevent/${self.ns}`,
      self._eventPreventeventResetHandler.bind(self, { el })
    )
    el.addEventListener(`off.${self._componentNs}`, preventeventResetHandler)
  }

  /**
   * remove prevents click on touch until clicked two times
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.el
   */
  _eventPreventeventEndHandler({ el } = {}) {
    const self = this
    // event link
    const preventeventHandler = Xt.dataStorage.get(el, `click/preventevent/${self.ns}`)
    el.removeEventListener('click', preventeventHandler)
    // event reset
    const preventeventResetHandler = Xt.dataStorage.get(el, `off/preventevent/${self.ns}`)
    el.removeEventListener(`off.${self._componentNs}`, preventeventResetHandler)
  }

  /**
   * prevents click on touch until clicked two times
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.el
   * @param {Event} e
   */
  _eventPreventeventHandler({ el }, e) {
    const self = this
    const active = Xt.dataStorage.get(el, `active/preventevent/${self.ns}`)
    if (!active && !Xt.dataStorage.get(el, `${self.ns}PreventeventDone`)) {
      Xt.dataStorage.set(el, `${self.ns}PreventeventDone`, true)
      // prevent default
      e.preventDefault()
    } else {
      self._eventPreventeventEndHandler({ el })
      Xt.dataStorage.remove(el, `${self.ns}PreventeventDone`)
      Xt.dataStorage.remove(el, `active/preventevent/${self.ns}`)
    }
  }

  /**
   * reset prevents click on touch until clicked two times
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.el
   */
  _eventPreventeventResetHandler({ el } = {}) {
    const self = this
    self._eventPreventeventEndHandler({ el })
    Xt.dataStorage.remove(el, `${self.ns}PreventeventDone`)
    Xt.dataStorage.remove(el, `active/preventevent/${self.ns}`)
  }

  /**
   * hash change
   * @param {Object} params
   * @param {Boolean} params.save Save currents
   * @return {Object} return
   * @return {Number} return.currents
   * @return {Array} return.arr
   */
  _hashChange({ save = false } = {}) {
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
    if (self._hasHash) {
      if (!Xt.dataStorage.get(self.container, `${self.ns}HashSkip`)) {
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
            if (save) {
              activated = checkHash(el, hash)
            }
            // check targets
            const targets = self.getTargets({ el })
            for (const tr of targets) {
              // check if activated
              if (save && !activated) {
                activated = checkHash(tr, hash)
              }
            }
            // activate
            if (activated && currents < options.max) {
              // initial
              currents++
              arr.push(el)
              // toggle event if present because of custom listeners
              Xt.dataStorage.set(self.container, `${self.ns}HashSkip`, true)
              if (options.on) {
                const event = options.on.split(' ')[0]
                el.dispatchEvent(new CustomEvent(event, { detail: { force: true } }))
              } else {
                self._eventOn({ el, force: true })
              }
              Xt.dataStorage.set(self.container, `${self.ns}HashSkip`, false)
            }
          }
        }
      }
    }
    // return
    return { currents, arr }
  }

  /**
   * jump handler
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.el
   * @param {Event} e
   */
  _eventJumpHandler({ el }, e) {
    const self = this
    // disabled
    if (self.disabled) {
      return
    }
    // check because of event propagation
    if (self.targets.includes(el)) {
      // handler
      self._eventJump({ el }, e)
    }
  }

  /**
   * nav handler
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.el
   * @param {Event} e
   */
  _eventNavHandler({ el }, e) {
    const self = this
    // handler
    self._eventNav({ el }, e)
  }

  /**
   * keyboard focus handler
   */
  _eventKeyboardfocusHandler() {
    const self = this
    // handler
    const keyboardHandler = Xt.dataStorage.put(
      document,
      `keyup/keyboard/${self.ns}`,
      self._eventKeyboardHandler.bind(self)
    )
    document.addEventListener('keyup', keyboardHandler)
  }

  /**
   * keyboard blur handler
   */
  _eventKeyboardblurHandler() {
    const self = this
    // handler
    const keyboardHandler = Xt.dataStorage.get(document, `keyup/keyboard/${self.ns}`)
    document.removeEventListener('keyup', keyboardHandler)
  }

  /**
   * keyboard handler
   * @param {Event} e
   */
  _eventKeyboardHandler(e) {
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
      self.goToPrev({ amount: 1 })
    } else if (code === next) {
      self.goToNext({ amount: 1 })
    }
  }

  /**
   * closeauto handler
   * @param {Event} e
   */
  _eventCloseautoHandler(e) {
    const self = this
    // triggering e.detail.container
    if (!e?.detail?.container || e?.detail?.container.contains(self.container)) {
      // handler
      const currents = self._getCurrents()
      for (const current of currents) {
        self._eventOff({ el: current, force: true }, e)
      }
    }
  }

  /**
   * openauto handler
   * @param {Event} e
   */
  _eventOpenautoHandler(e) {
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
      self._eventOn({ el: found }, e)
    }
  }

  /**
   * medialoaded
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.img
   * @param {Node|HTMLElement|EventTarget|Window} params.el
   * @param {Boolean} params.deferred
   */
  _eventMedialoadedHandler({ img, el, deferred = false } = {}) {
    const self = this
    const options = self.options
    // fix multiple calls
    Xt.dataStorage.set(img, `${self.ns}MedialoadedDone`, true)
    // mediaLoadedReinit
    if (options.mediaLoadedReinit && deferred) {
      Xt.eventDelay({
        e: { detail: { delay: Xt.medialoadedDelay } },
        el: self.container,
        ns: `${self.ns}MedialoadedReinit`,
        func: () => {
          // mediaLoaded
          self._eventMediaLoadedReinit()
        },
      })
    }
    // mediaLoaded
    if (options.mediaLoaded) {
      el.classList.add('xt-medialoaded')
    }
    // dispatch event
    el.dispatchEvent(
      new CustomEvent(`medialoaded.${self._componentNs}`, {
        detail: { deferred: deferred },
      })
    )
  }

  //
  // event util
  //

  /**
   * Get all elements from element or target
   * @return {Array} array of elements
   */
  getElementsGroups() {
    const self = this
    // groups
    const groups = []
    for (const el of self.elements) {
      // choose element by group
      const group = el.getAttribute('data-xt-group')
      if (group) {
        const alreadyFound = groups.filter(x => x.getAttribute('data-xt-group') === group)
        if (!alreadyFound.length) {
          groups.push(el)
        }
      } else {
        groups.push(el)
      }
    }
    return groups
  }

  /**
   * filter elements or targets array with groups array
   * @param {Object} params
   * @param {Array} params.els Elements or Targets
   * @param {String} params.attr Groups attribute
   * @param {Boolean} params.some Filter also if some in Groups attribute
   * @param {Boolean} params.same Use also data-xt-group-same
   * @return {Array} Filtered array
   */
  _groupFilter({ els, attr, some = false, same = false } = {}) {
    const self = this
    const options = self.options
    // logic
    const found = []
    for (const el of els) {
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
        const groups = attr?.split(options.groupSeparator).filter(x => x) // filter out nullish
        const currentGroups = currentAttr?.split(options.groupSeparator).filter(x => x) // filter out nullish
        if (currentGroups && groups && currentGroups.some(x => groups.includes(x))) {
          found.push(el)
        }
      }
    }
    return found
  }

  /**
   * get elements from element or target
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.el Element animating
   * @param {Boolean} params.same Use also data-xt-group-same
   * @return {Array} The first element is the one on getElementsGroups()
   */
  getElements({ el, same = false } = {}) {
    const self = this
    const options = self.options
    // getElements
    if (!self.elements || !self.elements.length) {
      return []
    }
    if (!el) {
      return []
    } else if (self._mode === 'unique') {
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
    } else if (self._mode === 'multiple') {
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
      const groupElements = self._groupFilter({ els: self.elements, attr, some, same })
      const groupTargets = self._groupFilter({ els: self.targets, attr, some, same })
      if (attr) {
        // if group all group targets
        final = groupElements
      } else {
        // not group targets by index
        if (Array.from(self.elements).includes(el)) {
          final = [el].filter(x => x) // filter out nullish
        } else {
          // groupElements and groupTargets are elements and targets without data-xt-group here
          const index = groupTargets.findIndex(x => x === el)
          final = [groupElements[index]].filter(x => x) // filter out nullish
        }
      }
      return final
    }
  }

  /**
   * Get all targets from element or target
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.el Element animating
   * @param {Boolean} params.same Use also data-xt-group-same
   * @return {Array}
   */
  getTargets({ el, same = false } = {}) {
    const self = this
    const options = self.options
    // getTargets
    if (!self.targets || !self.targets.length) {
      return []
    }
    if (!el) {
      return []
    } else if (self._mode === 'unique') {
      // xtNamespace linked components
      const final = self.targets
      return final
    } else if (self._mode === 'multiple') {
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
      const groupElements = self._groupFilter({ els: self.elements, attr, some, same })
      const groupTargets = self._groupFilter({ els: self.targets, attr, some, same })
      if (attr) {
        // if group all group targets
        final = groupTargets
      } else {
        // not group targets by index
        if (Array.from(self.targets).includes(el)) {
          final = [el].filter(x => x) // filter out nullish
        } else {
          // groupElements and groupTargets are elements and targets without data-xt-group here
          const index = groupElements.findIndex(x => x === el)
          final = [groupTargets[index]].filter(x => x) // filter out nullish
        }
      }
      return final
    }
  }

  /**
   * get currents based on namespace (so shared between Xt objects)
   * @return {Array}
   */
  _getCurrents() {
    const self = this
    // getCurrents
    return Xt._currents[self.ns]
  }

  /**
   * set currents based on namespace (so shared between Xt objects)
   * @param {Array} arr
   */
  _setCurrents(arr) {
    const self = this
    // setCurrents
    Xt._currents[self.ns] = arr
  }

  /**
   * add current based on namespace (so shared between Xt objects)
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.el
   * @param {Boolean} params.running Running currents
   */
  _addCurrent({ el, running = false } = {}) {
    const self = this
    // addCurrent
    if (!self.hasCurrent({ el, running })) {
      const arr = running ? Xt._running : Xt._currents
      arr[self.ns].push(el)
    }
  }

  /**
   * remove currents based on namespace (so shared between Xt objects)
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.el To be removed
   * @param {Boolean} params.running Running currents
   */
  _removeCurrent({ el, running = false } = {}) {
    const self = this
    // removeCurrent
    const arr = running ? Xt._running : Xt._currents
    arr[self.ns] = arr[self.ns].filter(x => x !== el)
  }

  /**
   * Check if element or target is activated
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.el Element animating
   * @param {Boolean} params.same Use also data-xt-group-same
   * @param {Boolean} params.running Running currents
   */
  hasCurrent({ el, same = false, running = false } = {}) {
    const self = this
    const options = self.options
    // fix groupElements and targets
    const elements = options.groupElements || self.targets.includes(el) ? self.getElements({ el, same }) : [el]
    // hasCurrent
    const arr = running ? Xt._running : Xt._currents
    return arr[self.ns].filter(x => elements.includes(x)).length
  }

  /**
   * check element on
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.el To be checked
   * @return {Boolean} If elements can activate
   */
  _checkOn({ el } = {}) {
    const self = this
    // check
    return !self.hasCurrent({ el })
  }

  /**
   * check element off
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.el To be checked
   * @return {Boolean} If elements can deactivate
   */
  _checkOff({ el } = {}) {
    const self = this
    const options = self.options
    // skip if min >= currents
    if (options.min - self._getCurrents().length >= 0) {
      return false
    }
    // check
    return self.hasCurrent({ el })
  }

  /**
   * check element on
   * @param {Object} params
   * @param {Object} params.obj Queue object to end
   * @return {Boolean} If elements can activate
   */
  _checkOnRunning({ obj } = {}) {
    const self = this
    // running check to stop multiple activation/deactivation with delay
    const check = obj.elements.runningOn || !self.hasCurrent({ el: obj.elements.queueEls[0], running: true })
    obj.elements.runningOn = check
    return check
  }

  /**
   * check element off running
   * @param {Object} params
   * @param {Object} params.obj Queue object to end
   * @return {Boolean} If elements can activate
   */
  _checkOffRunning({ obj } = {}) {
    const self = this
    // running check to stop multiple activation/deactivation with delay
    const check = obj.elements.runningOff || self.hasCurrent({ el: obj.elements.queueEls[0], running: true })
    obj.elements.runningOff = check
    return check
  }

  /**
   * set index
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.el
   */
  _setIndex({ el } = {}) {
    const self = this
    // set index
    const index = self.getIndex({ el })
    self._oldIndex = self.index ?? index
    self.index = index
  }

  /**
   * get index
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.el
   */
  getIndex({ el } = {}) {
    const self = this
    // fix groupElements and targets
    el = self.getElements({ el })[0]
    // set index
    let index = null
    for (const [i, element] of self.getElementsGroups().entries()) {
      if (el === element) {
        index = i
        break
      }
    }
    return index
  }

  /**
   * set direction
   */
  _setDirection() {
    const self = this
    // set direction
    if (self.index === null || self.index === self._oldIndex) {
      // initial direction and same index direction
      self.direction = 0
    } else if (self._inverse !== null) {
      // forced value
      self.direction = self._inverse ? -1 : 1
    } else {
      self.direction = self.index < self._oldIndex ? -1 : 1
    }
  }

  /**
   * activate element
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.el Elements to be activated
   * @param {String} params.type Type of element
   * @param {Boolean} params.skipSame If skip activation classes and events
   */
  _activate({ el, type, skipSame } = {}) {
    const self = this
    const options = self.options
    // activation
    if (!skipSame && options.classSkip !== true && !options.classSkip[type]) {
      // input
      el.checked = true
      // activation
      el.classList.add(...self._classes)
      el.classList.remove(...self._classesOut, ...self._classesDone)
      // needs TWO raf or sequential off/on flickr (e.g. display)
      Xt.frameDouble({
        el,
        func: () => {
          el.classList.add(...self._classesIn)
        },
      })
      // direction
      el.classList.remove(...self._classesBefore, ...self._classesAfter)
      if (self.direction < 0) {
        el.classList.add(...self._classesBefore)
      } else if (self.direction > 0) {
        el.classList.add(...self._classesAfter)
      }
    }
  }

  /**
   * activate element done
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.el Elements to be deactivated
   * @param {String} params.type Type of element
   * @param {Boolean} params.skipSame If skip activation classes and events
   */
  _activateDone({ el, type, skipSame } = {}) {
    const self = this
    const options = self.options
    // activation
    if (!skipSame && options.classSkip !== true && !options.classSkip[type]) {
      // fix need to repeat inside frameDouble in case we cancel
      Xt.frameDouble({ el })
      el.classList.add(...self._classesIn, ...self._classesDone)
    }
  }

  /**
   * activate hash
   * @param {Object} params
   * @param {Object} params.obj Queue object
   * @param {Node|HTMLElement|EventTarget|Window} params.el Elements to be activated
   * @param {String} type Type of element
   */
  _activateHash({ obj, el, type } = {}) {
    const self = this
    const options = self.options
    // hash
    if (!Xt.dataStorage.get(self.container, `${self.ns}HashSkip`)) {
      if (self._hasHash && !self.initial) {
        // fix no data-xt-group-same
        const elMain = obj.elements.queueEls[0]
        if (
          (type === 'elements' && self.getElements({ el: elMain }).includes(el)) ||
          (type === 'targets' && self.getTargets({ el: elMain }).includes(el))
        ) {
          const attr = el.getAttribute(options.hash)
          if (attr) {
            // raf prevents hash on chained activations (e.g: multiple hash on elements with same activation)
            Xt.frame({
              el: window,
              ns: `${self.ns}Hash`,
              func: () => {
                Xt.dataStorage.set(self.container, `${self.ns}HashSkip`, true)
                history.pushState({}, '', `#${encodeURIComponent(attr)}`)
                Xt.dataStorage.set(self.container, `${self.ns}HashSkip`, false)
              },
            })
          }
        }
      }
    }
  }

  /**
   * deactivate element
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.el Elements to be deactivated
   * @param {String} params.type Type of element
   * @param {Boolean} params.skipSame If skip activation classes and events
   */
  _deactivate({ el, type, skipSame } = {}) {
    const self = this
    const options = self.options
    // activation
    if (!skipSame && options.classSkip !== true && !options.classSkip[type]) {
      // input
      el.checked = false
      // must be outside inside raf or page jumps (e.g. noqueue, done outside for toggle inverse)
      el.classList.remove(...self._classes, ...self._classesDone)
      // needs TWO raf or sequential off/on flickr (e.g. backdrop megamenu)
      Xt.frameDouble({
        el,
        func: () => {
          el.classList.remove(...self._classesIn)
          el.classList.add(...self._classesOut)
        },
      })
      // direction
      el.classList.remove(...self._classesBefore, ...self._classesAfter)
      if (self.direction < 0) {
        el.classList.add(...self._classesBefore)
      } else if (self.direction > 0) {
        el.classList.add(...self._classesAfter)
      }
    }
  }

  /**
   * deactivate element done
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.el Elements to be deactivated
   * @param {String} params.type Type of element
   * @param {Boolean} params.skipSame If skip activation classes and events
   */
  _deactivateDone({ el, type, skipSame } = {}) {
    const self = this
    const options = self.options
    // activation
    if (!skipSame && options.classSkip !== true && !options.classSkip[type]) {
      // fix need to repeat inside frameDouble in case we cancel
      Xt.frameDouble({ el })
      el.classList.remove(...self._classesIn, ...self._classesOut)
    }
  }

  /**
   * deactivate hash
   * @param {Object} params
   * @param {Object} params.obj Queue object
   * @param {Node|HTMLElement|EventTarget|Window} params.el Elements to be deactivated
   * @param {String} params.type Type of element
   */
  _deactivateHash({ obj, el, type } = {}) {
    const self = this
    const options = self.options
    // hash
    if (!Xt.dataStorage.get(self.container, `${self.ns}HashSkip`)) {
      if (options.hash && self._hasHash && !self.initial) {
        // fix no data-xt-group-same
        const elMain = obj.elements.queueEls[0]
        if (
          (type === 'elements' && self.getElements({ el: elMain }).includes(el)) ||
          (type === 'targets' && self.getTargets({ el: elMain }).includes(el))
        ) {
          const attr = el.getAttribute(options.hash)
          if (attr && attr === location.hash.split('#')[1]) {
            // raf prevents hash on chained activations (e.g: multiple hash on elements with same activation)
            Xt.frame({
              el: window,
              ns: `${self.ns}Hash`,
              func: () => {
                Xt.dataStorage.set(self.container, `${self.ns}HashSkip`, true)
                history.pushState({}, '', '#')
                Xt.dataStorage.set(self.container, `${self.ns}HashSkip`, false)
              },
            })
          }
        }
      }
    }
  }

  //
  // event
  //

  /**
   * element on
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.el To be activated
   * @param {Boolean} params.force
   * @param {Event} e
   * @return {Boolean} If activated
   */
  _eventOn({ el, force = false }, e) {
    const self = this
    const options = self.options
    force = force ? force : e?.detail?.force
    // disabled
    if (self.disabled && !force) {
      return false
    }
    // toggle
    // fix same event for on and off same namespace
    if (force || (self._checkOn({ el }) && (!e || !e.type || e.type !== `off.trigger.${self._componentNs}`))) {
      // auto
      self._eventAutostop()
      // fix groupElements and targets
      const elements = options.groupElements || self.targets.includes(el) ? self.getElements({ el, same: true }) : [el]
      // targets
      const targets = self.getTargets({ el, same: true })
      // on
      self._addCurrent({ el: elements[0] })
      self._setIndex({ el: elements[0] })
      self._setDirection()
      // queue obj
      const actionCurrent = 'In'
      const actionOther = 'Out'
      const elementsInner = Xt.queryAll({ els: el, query: options.elementsInner })
      const targetsInner = Xt.queryAll({ els: targets, query: options.targetsInner })
      let obj = self._eventQueue({ elements, targets, elementsInner, targetsInner, force, e })
      // if currents > max
      const currents = self._getCurrents()
      if (currents.length > options.max) {
        // deactivate old
        const objFiltered = self._eventOff({ el: currents[0], objFilter: obj })
        // skip obj nodes that are in off and on (e.g. group same slider animation-js)
        if (!options.queue && objFiltered?.obj) {
          obj = objFiltered.obj
        }
      }
      // put in queue
      if (!options.queue) {
        self[`_queue${actionCurrent}`] = [obj]
      } else {
        self[`_queue${actionCurrent}`].unshift(obj)
      }
      // queue run
      for (const type in self[`_queue${actionCurrent}`][0]) {
        self._queueStart({ actionCurrent, actionOther, type, index: 0 })
      }
      // return
      return true
    } else if ([...options.on.split(' ')].includes(e?.type)) {
      // fix same event for on and off same namespace
      self._eventOff({ el }, e)
    }
    // return
    return false
  }

  /**
   * element off
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.el To be deactivated
   * @param {Boolean} params.force
   * @param {Object} params.objFilter Object to filter from
   * @param {Event} e
   * @return {Boolean} If deactivated
   */
  _eventOff({ el, force = false, objFilter } = {}, e) {
    const self = this
    const options = self.options
    force = force ? force : e?.detail?.force
    // disabled
    if (self.disabled && !force) {
      return false
    }
    // toggle
    if (force || self._checkOff({ el })) {
      // fix groupElements and targets
      const elements = options.groupElements || self.targets.includes(el) ? self.getElements({ el, same: true }) : [el]
      // off
      self._removeCurrent({ el: elements[0] })
      // targets
      const targets = self.getTargets({ el, same: true })
      // fix sometimes blur is undefined
      if (el.blur) {
        // fix :focus styles
        el.blur()
      }
      // auto
      if (!self._getCurrents().length) {
        self._eventAutostop()
      }
      // queue obj
      const actionCurrent = 'Out'
      const actionOther = 'In'
      const elementsInner = Xt.queryAll({ els: el, query: options.elementsInner })
      const targetsInner = Xt.queryAll({ els: targets, query: options.targetsInner })
      const obj = self._eventQueue({ elements, targets, elementsInner, targetsInner, force, e })
      // fix groupSame do not deactivate/reactivate but do logic (e.g. group same slider animation-js and slider hash)
      if (options.groupSame && !options.queue && objFilter) {
        for (const key in obj) {
          const item = obj[key]
          if (item.queueEls) {
            const itemFilter = objFilter[key]
            const queueEls = item.queueEls.filter(x => !itemFilter.queueEls.includes(x))
            // activation object skip nodes that should deactivate/reactivate
            itemFilter.skipEls = itemFilter.queueEls.filter(x => item.queueEls.includes(x))
            // deactivation object remove nodes that should deactivate/reactivate
            item.queueEls = queueEls
          }
        }
      }
      // put in queue
      if (!options.queue) {
        self[`_queue${actionCurrent}`] = [obj]
      } else {
        self[`_queue${actionCurrent}`].unshift(obj)
      }
      // remove queue not started if queue too big
      if (self[`_queue${actionCurrent}`].length > options.max) {
        // remove queue and stop
        const removedOn = self[`_queue${actionOther}`].shift()
        self._queueStop({ actionCurrent: actionOther, actionOther: actionCurrent, obj: removedOn })
        // remove queue and stop
        const removedOff = self[`_queue${actionCurrent}`].shift()
        self._queueStop({ actionCurrent, actionOther, obj: removedOff })
      }
      // queue run
      for (const type in self[`_queue${actionCurrent}`][0]) {
        self._queueStart({ actionCurrent, actionOther, type, index: 0 })
      }
      // return
      if (objFilter) {
        return { obj: objFilter }
      }
      return true
    }
    // return
    return false
  }

  /**
   * element on
   * @param {Object} params
   * @param {NodeList|Array|Node|HTMLElement|EventTarget|Window} params.elements
   * @param {NodeList|Array|Node|HTMLElement|EventTarget|Window} params.targets
   * @param {NodeList|Array|Node|HTMLElement|EventTarget|Window} params.elementsInner
   * @param {NodeList|Array|Node|HTMLElement|EventTarget|Window} params.targetsInner
   * @param {Boolean} params.force
   * @param {Event} params.e
   */
  _eventQueue({ elements, targets, elementsInner, targetsInner, force, e } = {}) {
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
    return obj
  }

  /**
   * auto
   */
  _eventAuto() {
    const self = this
    const options = self.options
    // disabled
    if (self.disabled) {
      return
    }
    // auto
    if (!self._autoblock && self._autorunning) {
      if (Xt.visible({ el: self.container })) {
        // not when disabled
        if (options.auto.inverse) {
          self.goToPrev({ amount: options.auto.step, loop: options.auto.loop })
        } else {
          self.goToNext({ amount: options.auto.step, loop: options.auto.loop })
        }
      }
    }
  }

  /**
   * auto start
   */
  _eventAutostart() {
    const self = this
    const options = self.options
    // disabled
    if (self.disabled) {
      return
    }
    // start
    if (options.auto && options.auto.time && Xt.autoTimescale) {
      if (!self._autoblock && !self._autorunning) {
        // not when nothing activated
        if (self.index !== null && (!self.initial || options.auto.initial)) {
          // paused
          self._autorunning = true
          // clear
          clearTimeout(Xt.dataStorage.get(self.container, `${self.ns}AutoTimeout`))
          // auto
          const time = options.auto.time
          // disabled
          if (self.disabled) {
            return
          }
          // timeout
          Xt.dataStorage.set(
            self.container,
            `${self.ns}AutoTimeout`,
            setTimeout(() => {
              // auto
              self._eventAuto()
            }, time / Xt.autoTimescale)
          )
          // aria
          if (options.aria === true || options.aria.activation) {
            self.container.setAttribute('aria-live', 'off')
          }
          // dispatch event
          self.container.dispatchEvent(new CustomEvent(`autostart.${self._componentNs}`))
        }
      }
    }
  }

  /**
   * auto stop
   */
  _eventAutostop() {
    const self = this
    const options = self.options
    // stop
    if (options.auto && options.auto.time) {
      if (!self._autoblock && self._autorunning) {
        // paused
        self._autorunning = false
        // clear
        clearTimeout(Xt.dataStorage.get(self.container, `${self.ns}AutoTimeout`))
        // aria
        if (options.aria === true || options.aria.activation) {
          self.container.setAttribute('aria-live', 'polite')
        }
        // dispatch event
        self.container.dispatchEvent(new CustomEvent(`autostop.${self._componentNs}`))
      }
    }
  }

  /**
   * jump
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.el
   * @param {Event} e
   */
  _eventJump({ el }, e) {
    const self = this
    // disabled
    if (self.disabled) {
      return
    }
    // check disabled
    if (el.classList.contains(...self._classes) || !el.classList.contains('xt-jump')) {
      return
    }
    // prevent default
    e.preventDefault()
    // jump
    if (self._checkOn({ el })) {
      self._eventOn({ el })
    }
  }

  /**
   * nav
   * @param {Node|HTMLElement|EventTarget|Window} el
   */
  _eventNav({ el } = {}) {
    const self = this
    // disabled
    if (self.disabled) {
      return
    }
    // nav
    const step = parseFloat(el.getAttribute('data-xt-nav'))
    if (step < 0) {
      self.goToPrev({ amount: -step })
    } else {
      self.goToNext({ amount: step })
    }
  }

  /**
   * medialoadedReinit
   */
  _eventMediaLoadedReinit() {
    const self = this
    // reinit
    self.reinit()
  }

  /**
   * eventVisibleReinit
   */
  _eventVisibleReinit() {
    const self = this
    // reinit
    self.reinit()
  }

  //
  // queue
  //

  /**
   * queue start
   * @param {Object} params
   * @param {String} params.actionCurrent Current action
   * @param {String} params.actionOther Other action
   * @param {String} params.type Type of element
   * @param {Number} params.index Queue index
   */
  _queueStart({ actionCurrent, actionOther, type, index } = {}) {
    const self = this
    const options = self.options
    // queue start
    const obj = self[`_queue${actionCurrent}`][index]
    if (obj && obj[type] && !obj[type].done) {
      const queueOther = self[`_queue${actionOther}`]
      const objOther = queueOther[queueOther.length - 1]
      if (!objOther || !objOther[type] || objOther[type].done) {
        // fix if initial must be instant, fixes queue
        if (self.initial || !options.queue) {
          obj[type].instant = true
        } else if (options.queue && !options.queue[type]) {
          obj[type].instantType = true
        }
        // special
        self._specialClassBody({ actionCurrent, type })
        // start queue
        self._queueDelay({ actionCurrent, actionOther, obj, type })
      }
    }
  }

  /**
   * queue stop
   * @param {Object} params
   * @param {String} params.actionCurrent Current action
   * @param {String} params.actionOther Other action
   * @param {Object} params.obj Queue object to end
   */
  _queueStop({ actionCurrent, actionOther, obj } = {}) {
    const self = this
    // stop type if done
    for (const type in obj) {
      if (obj[type].done) {
        for (const el of obj[type].queueEls) {
          // clear timeout and frame
          Xt.frameDouble({ el, ns: `${self.ns}CollapseHeightFrame` })
          Xt.frameDouble({ el, ns: `${self.ns}CollapseWidthFrame` })
          clearTimeout(Xt.dataStorage.get(el, `${self.ns + type}DelayTimeout`))
          clearTimeout(Xt.dataStorage.get(el, `${self.ns + type}AnimTimeout`))
          // done other queue
          self._queueDelayDone({
            actionCurrent: actionOther,
            actionOther: actionCurrent,
            obj,
            el,
            type,
            skipQueue: true,
          })
          self._queueAnimDone({
            actionCurrent: actionOther,
            actionOther: actionCurrent,
            obj,
            el,
            type,
            skipQueue: true,
          })
        }
      }
    }
  }

  /**
   * queue delay
   * @param {Object} params
   * @param {String} params.actionCurrent Current action
   * @param {String} params.actionOther Other action
   * @param {Object} params.obj Queue object
   * @param {String} params.type Type of elements
   */
  _queueDelay({ actionCurrent, actionOther, obj, type } = {}) {
    const self = this
    const options = self.options
    // delay
    const els = obj[type].queueEls
    for (const el of els) {
      // fix groupSame do not deactivate/reactivate but do logic (e.g. group same slider animation-js and slider hash)
      const skipSame = obj[type].skipEls?.includes(el)
      // delay
      let delay =
        self.initial || self.disabled // off from disable/destroy
          ? false
          : Xt.delayTime({ el, duration: options.delay || options[`delay${actionCurrent}`], actionCurrent })
      if (delay) {
        if (typeof delay === 'function') {
          const count = Xt.dataStorage.get(el, `${self.ns + actionCurrent}Count`) || els.findIndex(x => x === el)
          const tot = Xt.dataStorage.get(el, `${self.ns + actionCurrent}Tot`) || els.length
          delay = delay({ current: count, total: tot - 1, el, self })
        }
      }
      // fnc
      clearTimeout(Xt.dataStorage.get(el, `${self.ns + type}DelayTimeout`))
      clearTimeout(Xt.dataStorage.get(el, `${self.ns + type}AnimTimeout`))
      if (!delay) {
        self._queueDelayDone({ actionCurrent, actionOther, obj, el, type, skipSame })
      } else if (delay === 'raf') {
        Xt.frameDouble({
          el,
          ns: `${self.ns + type}QueueDelayDone`,
          func: () => {
            self._queueDelayDone({ actionCurrent, actionOther, obj, el, type, skipSame })
          },
        })
      } else {
        Xt.dataStorage.set(
          el,
          `${self.ns + type}DelayTimeout`,
          setTimeout(() => {
            self._queueDelayDone({ actionCurrent, actionOther, obj, el, type, skipSame })
          }, delay)
        )
      }
      // queue done
      if (obj[type].instant) {
        // only if last element
        if (el === els[els.length - 1]) {
          self._queueDone({ actionCurrent, actionOther, obj, type })
        }
      }
    }
    // queue done
    if (!els.length) {
      self._queueDone({ actionCurrent, actionOther, obj, type })
    }
  }

  /**
   * queue delay done
   * @param {Object} params
   * @param {String} params.actionCurrent Current action
   * @param {String} params.actionOther Other action
   * @param {Object} params.obj Queue object
   * @param {Node|HTMLElement|EventTarget|Window} params.el Elements to be deactivated
   * @param {String} params.type Type of elements
   * @param {Boolean} params.skipSame If skip activation classes and events
   * @param {Boolean} params.skipQueue If skip queue
   */
  _queueDelayDone({ actionCurrent, actionOther, obj, el, type, skipSame, skipQueue = false } = {}) {
    const self = this
    const options = self.options
    // check if not already running or if force
    if (actionCurrent === 'In' && (self._checkOnRunning({ obj }) || obj.elements.force)) {
      // only one time and if last element
      if (type === 'elements' && el === obj.elements.queueEls[0]) {
        self._addCurrent({ el, running: true })
      }
      // activation
      self._activate({ el, type })
      self._activateHash({ obj, el, type })
      // special
      self._specialZindex({ actionCurrent, obj, el, type })
      self._specialAppendto({ actionCurrent, el, type })
      self._specialClose({ actionCurrent, el, type, obj })
      if (!self.initial) {
        self._specialCollapse({ actionCurrent, el, type })
      } else {
        self._specialCollapse({ actionCurrent, el, type, reset: true })
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
      }
      // dispatch event
      if (!skipSame && type !== 'elementsInner' && type !== 'targetsInner') {
        // off from disable/destroy
        if (!self.disabled) {
          Xt.frame({
            el,
            ns: `${self.ns}${actionCurrent}DelayDone`,
            func: () => {
              el.dispatchEvent(
                new CustomEvent(`on.${self._componentNs}`, {
                  detail: obj.elements.e,
                })
              )
            },
          })
        }
      }
    } else if (actionCurrent === 'Out' && (self._checkOffRunning({ obj }) || obj.elements.force)) {
      // only one time and if last element
      if (type === 'elements' && el === obj.elements.queueEls[0]) {
        self._removeCurrent({ el, running: true })
        // if no currents
        if (!self._getCurrents().length) {
          // reset index and direction
          self.index = null
          self._setDirection()
        }
      }
      // activation
      self._deactivate({ el, type })
      self._deactivateHash({ obj, el, type })
      // special
      self._specialCollapse({ actionCurrent, el, type })
      self._specialClose({ actionCurrent, el, type, obj })
      // dispatch event
      if (!skipSame && type !== 'elementsInner' && type !== 'targetsInner') {
        // off from disable/destroy
        if (!self.disabled) {
          Xt.frame({
            el,
            ns: `${self.ns}${actionCurrent}DelayDone`,
            func: () => {
              el.dispatchEvent(
                new CustomEvent(`off.${self._componentNs}`, {
                  detail: obj.elements.e,
                })
              )
            },
          })
        }
      }
    }
    // queue
    if (!skipQueue) {
      // off from disable/destroy
      // must be instant on destroy (e.g. overlay mobile)
      if (self.disabled) {
        Xt.frame({
          el,
          ns: `${self.ns + type}QueueAnim`,
        })
        self._queueAnim({ actionCurrent, actionOther, obj, el, type, skipSame })
      } else {
        // needs ONE raf or sequential off/on flickr (e.g. toggle inverse)
        Xt.frame({
          el,
          ns: `${self.ns + type}QueueAnim`,
          func: () => {
            self._queueAnim({ actionCurrent, actionOther, obj, el, type, skipSame })
          },
        })
      }
      // queue done
      if (!obj[type].instant && obj[type].instantType) {
        const els = obj[type].queueEls
        // only if last element
        if (el === els[els.length - 1]) {
          self._queueDone({ actionCurrent, actionOther, obj, type })
        }
      }
    }
  }

  /**
   * queue anim
   * @param {Object} params
   * @param {String} params.actionCurrent Current action
   * @param {String} params.actionOther Other action
   * @param {Object} params.obj Queue object
   * @param {Node|HTMLElement|EventTarget|Window} params.el Element to be animated
   * @param {String} params.type Type of element
   * @param {Boolean} params.skipSame If skip activation classes and events
   */
  _queueAnim({ actionCurrent, actionOther, obj, el, type, skipSame } = {}) {
    const self = this
    const options = self.options
    // duration
    const els = obj[type].queueEls
    let duration =
      self.initial || self.disabled // off from disable/destroy
        ? false
        : Xt.animTime({ el, duration: options.duration || options[`duration${actionCurrent}`], actionCurrent })
    if (duration) {
      if (typeof duration === 'function') {
        const count = Xt.dataStorage.get(el, `${self.ns + actionCurrent}Count`) || els.findIndex(x => x === el)
        const tot = Xt.dataStorage.get(el, `${self.ns + actionCurrent}Tot`) || els.length
        duration = duration({ current: count, total: tot - 1, el, self })
      }
    }
    // fnc
    clearTimeout(Xt.dataStorage.get(el, `${self.ns + type}AnimTimeout`))
    if (!duration) {
      self._queueAnimDone({ actionCurrent, actionOther, obj, el, type, skipSame })
    } else if (duration === 'raf') {
      Xt.frameDouble({
        el,
        ns: `${self.ns + type}QueueAnimDone`,
        func: () => {
          self._queueAnimDone({ actionCurrent, actionOther, obj, el, type, skipSame })
        },
      })
    } else {
      Xt.dataStorage.set(
        el,
        `${self.ns + type}AnimTimeout`,
        setTimeout(() => {
          self._queueAnimDone({ actionCurrent, actionOther, obj, el, type, skipSame })
        }, duration)
      )
    }
  }

  /**
   * queue anim done
   * @param {Object} params
   * @param {String} params.actionCurrent Current action
   * @param {String} params.actionOther Other action
   * @param {Object} params.obj Queue object
   * @param {Node|HTMLElement|EventTarget|Window} params.el Element to be animated
   * @param {String} params.type Type of element
   * @param {Boolean} params.skipSame If skip activation classes and events
   * @param {Boolean} params.skipQueue If skip queue
   */
  _queueAnimDone({ actionCurrent, actionOther, obj, el, type, skipSame, skipQueue = false } = {}) {
    const self = this
    const options = self.options
    // special
    if (actionCurrent === 'In') {
      // only one time and if last element
      if (type === 'elements' && el === obj.elements.queueEls[0]) {
        // if no queueOut
        if (!self[`_queue${actionOther}`].length) {
          // reset all zIndex
          for (const type in obj) {
            self._specialZindex({ actionCurrent: actionOther, obj, type })
          }
        }
      }
      // activation
      self._activateDone({ el, type })
      // special
      self._specialCollapse({ actionCurrent, el, type, reset: true })
      self._specialScrollto({ actionCurrent, el, type, obj })
      // dispatch event
      if (!skipSame && type !== 'elementsInner' && type !== 'targetsInner') {
        // off from disable/destroy
        if (!self.disabled) {
          Xt.frame({
            el,
            ns: `${self.ns}${actionCurrent}AnimDone`,
            func: () => {
              el.dispatchEvent(
                new CustomEvent(`ondone.${self._componentNs}`, {
                  detail: obj.elements.e,
                })
              )
            },
          })
        }
      }
    } else if (actionCurrent === 'Out') {
      // only one time and if last element
      if (type === 'elements' && el === obj.elements.queueEls[0]) {
        // if no currents
        if (!self._getCurrents().length) {
          // reset all zIndex
          for (const type in obj) {
            self._specialZindex({ actionCurrent, obj, type })
          }
        }
      }
      // activation
      self._deactivateDone({ el, type })
      // special
      self._specialAppendto({ actionCurrent, el, type })
      self._specialCollapse({ actionCurrent, el, type, reset: true })
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
        }
      }
      // dispatch event
      if (!skipSame && type !== 'elementsInner' && type !== 'targetsInner') {
        // off from disable/destroy
        if (!self.disabled) {
          Xt.frame({
            el,
            ns: `${self.ns}${actionCurrent}AnimDone`,
            func: () => {
              el.dispatchEvent(
                new CustomEvent(`offdone.${self._componentNs}`, {
                  detail: obj.elements.e,
                })
              )
            },
          })
        }
      }
    }
    // queue
    if (!skipQueue) {
      // queue done
      if (!obj[type].instant && !obj[type].instantType) {
        const els = obj[type].queueEls
        // only if last element
        if (el === els[els.length - 1]) {
          self._queueDone({ actionCurrent, actionOther, obj, type })
        }
      }
    }
  }

  /**
   * queue done
   * @param {Object} params
   * @param {String} params.actionCurrent Current action
   * @param {String} params.actionOther Other action
   * @param {Object} params.obj Queue object
   * @param {String} params.type Type of element
   */
  _queueDone({ actionCurrent, actionOther, obj, type } = {}) {
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
          self._queueStart({
            actionCurrent: actionOther,
            actionOther: actionCurrent,
            type,
            index: self[`_queue${actionOther}`].length - 1,
          })
        }
        // remove queue
        self[`_queue${actionCurrent}`].pop()
        // queue complete
        self._queueComplete({ actionCurrent, obj })
      }
    }
  }

  /**
   * logic to execute on queue complete
   * @param {Object} params
   * @param {String} params.actionCurrent Current action
   * @param {Object} params.obj Queue object
   */
  _queueComplete({ actionCurrent, obj } = {}) {
    const self = this
    const options = self.options
    // logic
    if (actionCurrent === 'In') {
      // init
      Xt.frame({
        el: self.container,
        ns: `${self.ns}Init`,
        func: () => {
          if (self.initial) {
            // fix before _initScope or slider absolute has multiple active and bugs initial calculations
            self.container.setAttribute(`data-${self.componentName}-init`, '')
            // dispatch event
            self.container.dispatchEvent(new CustomEvent(`init.${self._componentNs}`))
            // remove class initial
            for (const type in obj) {
              for (const el of obj[type].queueEls) {
                el.classList.remove(...self._classesInitial)
              }
            }
            // debug
            if (options.debug) {
              // eslint-disable-next-line no-console
              console.debug(`${self.componentName} init`, self)
            }
          }
          // fix autostart after self.initial or it gives error on reinitialization (demos fullscreen)
          self._eventAutostart()
          // initial after autostart
          if (self.initial) {
            self.initial = false
          }
          // reset
          self._inverse = null
        },
      })
      // focusLimit
      if (options.focusLimit && !self._focusTrap) {
        const els = self.targets.length ? self.targets : self.elements
        self._focusTrap = focusTrap.createFocusTrap(els, options.focusTrap)
        self._focusTrap.activate()
      }
    } else if (actionCurrent === 'Out') {
      // focusLimit
      if (options.focusLimit && self._focusTrap) {
        self._focusTrap.deactivate()
        self._focusTrap = null
      }
    }
  }

  //
  // special
  //

  /**
   * zindex on activation
   * @param {Object} params
   * @param {String} params.actionCurrent Current action
   * @param {Object} params.obj Queue object
   * @param {Node|HTMLElement|EventTarget|Window} params.el Element to be animated
   * @param {String} params.type Type of element
   */
  _specialZindex({ actionCurrent, obj, el, type } = {}) {
    const self = this
    const options = self.options
    // fix when standalone !self.targets.length && type === 'elements'
    if (!self.targets.length && type === 'elements') {
      type = 'targets'
    }
    // set zIndex
    if (options.zIndex && options.zIndex[type]) {
      if (actionCurrent === 'In') {
        self.zIndex = self.zIndex ? self.zIndex : options.zIndex[type].start
        self.zIndex = self.zIndex + options.zIndex[type].factor
        el.style.zIndex = self.zIndex
      } else if (actionCurrent === 'Out') {
        self.zIndex = options.zIndex[type].start
        // check actionOther
        if (obj[type]) {
          for (const el of obj[type].queueEls) {
            el.style.zIndex = self.zIndex
          }
        }
      }
    }
  }

  /**
   * add or remove html class
   * @param {Object} params
   * @param {String} params.actionCurrent Current action
   * @param {String} params.type Type of element
   */
  _specialClassBody({ actionCurrent, type } = {}) {
    const self = this
    const options = self.options
    if (options.classBody) {
      // fix when standalone !self.targets.length && type === 'elements'
      if (type === 'targets' || (!self.targets.length && type === 'elements')) {
        if (actionCurrent === 'In') {
          // raf because only one time on route update
          Xt.frame({
            el: self.container,
            ns: `${self.ns}ClassBodyFrame`,
            func: () => {
              for (const c of options.classBody.split(' ')) {
                // checks
                Xt._classBody.add({
                  c: c,
                  ns: self.ns,
                })
                // class on
                const container = document.documentElement.querySelector('body')
                container.classList.add(c)
              }
            },
          })
        } else if (actionCurrent === 'Out') {
          // raf because only one time on route update
          Xt.frame({
            el: self.container,
            ns: `${self.ns}ClassBodyFrame`,
            func: () => {
              for (const c of options.classBody.split(' ')) {
                // checks
                Xt._classBody.remove({
                  c: c,
                  ns: self.ns,
                })
                if (!Xt._classBody.get({ c: c }).length) {
                  // class off
                  const container = document.documentElement.querySelector('body')
                  container.classList.remove(c)
                }
              }
            },
          })
        }
      }
    }
  }

  /**
   * appendTo
   * @param {Object} params
   * @param {String} params.actionCurrent Current action
   * @param {Node|HTMLElement|EventTarget|Window} params.el Element to be animated
   * @param {String} params.type Type of element
   */
  _specialAppendto({ actionCurrent, el, type } = {}) {
    const self = this
    const options = self.options
    if (options.appendTo) {
      // fix when standalone !self.targets.length && type === 'elements'
      if (type === 'targets' || (!self.targets.length && type === 'elements')) {
        if (actionCurrent === 'In') {
          // appendTo
          const appendToTarget = document.querySelector(options.appendTo)
          const appendOrigin = document.querySelector(`[data-xt-origin="${self.uniqueId}"]`)
          if (!appendOrigin) {
            el.before(Xt.node({ str: `<div class="xt-ignore hidden" data-xt-origin="${self.uniqueId}"></div>` }))
          }
          appendToTarget.append(el)
        } else if (actionCurrent === 'Out') {
          // appendTo
          const appendOrigin = document.querySelector(`[data-xt-origin="${self.uniqueId}"]`)
          if (appendOrigin) {
            appendOrigin.before(el)
            appendOrigin.remove()
          } else {
            el.remove()
          }
        }
      }
    }
  }

  /**
   * scrollto
   * @param {Object} params
   * @param {String} params.actionCurrent Current action
   * @param {Object} params.obj Queue object
   * @param {Node|HTMLElement|EventTarget|Window} params.el Element to be animated
   * @param {String} params.type Type of element
   */
  _specialScrollto({ actionCurrent, obj, el, type } = {}) {
    const self = this
    const options = self.options
    if (options.scrollto) {
      if (actionCurrent === 'In') {
        const scrollto = ({ el }) => {
          // using data-xt-hash or options.min or .on and scrollto should not scroll on init
          if (!self.initial || options.scrolltoInit) {
            // Xt.ready complete and raf to be right after page refresh
            const instant = self.initial
            Xt.ready({
              state: 'complete',
              func: () => {
                requestAnimationFrame(() => {
                  if (instant) {
                    Xt.scrolltoHashforce = true
                  }
                  el.dispatchEvent(new CustomEvent('scrollto.trigger.xt.scrollto'))
                })
              },
            })
          }
        }
        // check
        if (typeof options.scrollto === 'string') {
          if (type === options.scrollto) {
            scrollto({ el })
          } else if (type === 'elements' && el === obj.elements.queueEls[0]) {
            let scrolltoElement = self.container.querySelector(options.scrollto)
            scrolltoElement = scrolltoElement ?? document.querySelector(options.scrollto)
            if (scrolltoElement) {
              scrollto({ el: scrolltoElement })
            }
          }
        } else if (type === 'elements' && el === obj.elements.queueEls[0]) {
          scrollto({ el: self.container })
        }
      }
    }
  }

  /**
   * open or close or reset collapse
   * @param {Object} params
   * @param {String} params.actionCurrent Current action
   * @param {Node|HTMLElement|EventTarget|Window} params.el Element to be animated
   * @param {String} params.type Type of element
   * @param {Boolean} reset Reset
   */
  _specialCollapse({ actionCurrent, el, type, reset = false } = {}) {
    const self = this
    const options = self.options
    if (el instanceof HTMLElement) {
      if (actionCurrent === 'In') {
        if (options.collapseHeight === type) {
          if (reset) {
            el.style.height = 'inherit'
            el.style.maxHeight = 'none'
            el.classList.add('xt-collapse-reset')
          } else {
            el.classList.remove('xt-collapse-reset')
            el.style.height = 'auto'
            el.style.maxHeight = 'none'
            const final = el.offsetHeight
            el.style.height = ''
            el.style.maxHeight = ''
            let initial = el.offsetHeight
            initial = initial === final ? 0 : initial
            el.style.height = `${initial}px`
            el.style.maxHeight = 'none'
            Xt.frameDouble({
              el,
              ns: `${self.ns}CollapseHeightFrame`,
              func: () => {
                el.style.height = `${final}px`
              },
            })
          }
        }
        if (options.collapseWidth === type) {
          if (reset) {
            el.style.width = 'inherit'
            el.style.maxWidth = 'none'
            el.classList.add('xt-collapse-reset')
          } else {
            el.classList.remove('xt-collapse-reset')
            el.style.width = 'auto'
            el.style.maxWidth = 'none'
            const final = el.offsetWidth
            el.style.width = ''
            el.style.maxWidth = ''
            let initial = el.offsetWidth
            initial = initial === final ? 0 : initial
            el.style.width = `${initial}px`
            el.style.maxWidth = 'none'
            Xt.frameDouble({
              el,
              ns: `${self.ns}CollapseWidthFrame`,
              func: () => {
                el.style.width = `${final}px`
              },
            })
          }
        }
      } else if (actionCurrent === 'Out') {
        if (options.collapseHeight === type) {
          if (reset) {
            el.style.height = ''
            el.style.maxHeight = ''
          } else {
            el.classList.remove('xt-collapse-reset')
            const current = el.offsetHeight // fix keep current off initial
            el.style.height = ''
            el.style.maxHeight = ''
            let final = el.offsetHeight
            el.style.height = 'auto'
            el.style.maxHeight = 'none'
            const initial = el.offsetHeight
            final = initial === final ? 0 : final
            el.style.height = `${current}px`
            Xt.frameDouble({
              el,
              ns: `${self.ns}CollapseHeightFrame`,
              func: () => {
                el.style.height = `${final}px`
              },
            })
          }
        }
        if (options.collapseWidth === type) {
          if (reset) {
            el.style.width = ''
            el.style.maxWidth = ''
          } else {
            el.classList.remove('xt-collapse-reset')
            const current = el.offsetWidth // fix keep current off initial
            el.style.width = ''
            el.style.maxWidth = ''
            let final = el.offsetWidth
            el.style.width = 'auto'
            el.style.maxWidth = 'none'
            const initial = el.offsetWidth
            final = initial === final ? 0 : final
            el.style.width = `${current}px`
            Xt.frameDouble({
              el,
              ns: `${self.ns}CollapseWidthFrame`,
              func: () => {
                el.style.width = `${final}px`
              },
            })
          }
        }
      }
    }
  }

  /**
   * add or remove close events on element
   * @param {Object} params
   * @param {String} params.actionCurrent Current action
   * @param {Node|HTMLElement|EventTarget|Window} params.el Element to be animated
   * @param {String} params.type Type of element
   * @param {Object} obj Queue object
   */
  _specialClose({ actionCurrent, el, type, obj } = {}) {
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
            self._eventSpecialcloseinsideHandler.bind(self)
          )
          // raf because do not close when clicking things that trigger this
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
              self._eventSpecialcloseoutsideHandler.bind(self)
            )
            // raf because do not close when clicking things that trigger this
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
              self._eventSpecialclosedeepHandler.bind(self)
            )
            // raf because do not close when clicking things that trigger this
            requestAnimationFrame(() => {
              closeElement.removeEventListener('click', specialclosedeepHandler)
              closeElement.addEventListener('click', specialclosedeepHandler)
            })
            // focusable
            const specialclosedeepKeydownHandler = Xt.dataStorage.put(
              closeElement,
              `keydown/close/${self.ns}`,
              self._eventSpecialclosedeepKeydownHandler.bind(self).bind(self, { closeElement })
            )
            // raf because do not close when clicking things that trigger this
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
  _eventSpecialcloseinsideHandler(e) {
    const self = this
    const options = self.options
    // handler
    if (e.target.matches(options.closeInside)) {
      const currents = self._getCurrents()
      for (const current of currents) {
        self._eventOff({ el: current, force: true })
      }
    }
  }

  /**
   * specialCloseoutside handler
   * @param {Event} e
   */
  _eventSpecialcloseoutsideHandler(e) {
    const self = this
    // handler
    if (!Xt.contains({ els: [...self.elements, ...self.targets], tr: e.target })) {
      const currents = self._getCurrents()
      for (const current of currents) {
        self._eventOff({ el: current, force: true })
      }
    }
  }

  /**
   * specialClosedeep handler
   * @param {Event} e
   */
  _eventSpecialclosedeepHandler(e) {
    const self = this
    // handler
    if (Xt.contains({ els: [...self.elements, ...self.targets], tr: e.target })) {
      const currents = self._getCurrents()
      for (const current of currents) {
        self._eventOff({ el: current, force: true })
      }
    }
  }

  /**
   * specialClosedeep keydown handler
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.closeElement
   * @param {Event} e
   */
  _eventSpecialclosedeepKeydownHandler({ closeElement }, e) {
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
   * Get next activation index
   * @param {Object} params
   * @param {Number} params.index
   * @param {Number} params.amount
   * @param {Boolean} params.loop
   * @return {Number} index
   */
  getNextIndex({ index = false, amount = 1, loop = null } = {}) {
    const self = this
    // logic
    if (index !== false) {
      index = index + amount
    } else if (self.index !== null) {
      index = self.index + amount
    } else {
      index = 0
    }
    return self.getNumIndex({ index, loop })
  }

  /**
   * Get next element
   * @param {Object} params
   * @param {Number} params.amount
   * @param {Boolean} params.loop
   * @return {Node|HTMLElement|EventTarget|Window} Element
   */
  getNext({ amount = 1, loop = null } = {}) {
    const self = this
    // logic
    const i = self.getNextIndex({ amount, loop })
    return self.getElementsGroups()[i]
  }

  /**
   * Activate next element
   * @param {Object} params
   * @param {Number} params.amount
   * @param {Boolean} params.force
   * @param {Boolean} params.loop
   * @return {Node|HTMLElement|EventTarget|Window} Element
   */
  goToNext({ amount = 1, force = false, loop = null } = {}) {
    const self = this
    // goToNum
    self._inverse = false
    const index = self.getNextIndex({ amount, loop })
    const el = self.goToNum({ index, force, loop })
    return el
  }

  /**
   * Get prev activation index
   * @param {Object} params
   * @param {Number} params.index
   * @param {Number} params.amount
   * @param {Boolean} params.loop
   * @return {Number} index
   */
  getPrevIndex({ index = false, amount = 1, loop = null } = {}) {
    const self = this
    // logic
    if (index !== false) {
      index = index - amount
    } else if (self.index !== null) {
      index = self.index - amount
    } else {
      index = self.getElementsGroups().length - 1
    }
    return self.getNumIndex({ index, loop })
  }

  /**
   * Get previous element
   * @param {Object} params
   * @param {Number} params.amount
   * @param {Boolean} params.loop
   * @return {Node|HTMLElement|EventTarget|Window} Element
   */
  getPrev({ amount = 1, loop = null } = {}) {
    const self = this
    // logic
    const i = self.getPrevIndex({ amount, loop })
    return self.getElementsGroups()[i]
  }

  /**
   * Activate previous element
   * @param {Object} params
   * @param {Number} params.amount
   * @param {Boolean} params.force
   * @param {Boolean} params.loop
   * @return {Node|HTMLElement|EventTarget|Window} Element
   */
  goToPrev({ amount = 1, force = false, loop = null } = {}) {
    const self = this
    // goToNum
    self._inverse = true
    const index = self.getPrevIndex({ amount, loop })
    const el = self.goToNum({ index, force, loop })
    return el
  }

  /**
   * Get index from number
   * @param {Object} params
   * @param {Number} params.index
   * @param {Boolean} params.loop
   * @return {Number} index
   */
  getNumIndex({ index, loop = null } = {}) {
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
        if (loop || (loop === null && (options.loop || self._wrap))) {
          index = index - max - 1
          index = index > max ? max : index // prevent overflow
        } else {
          index = null
        }
      } else if (index < min) {
        if (loop || (loop == null && (options.loop || self._wrap))) {
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
   * Get element from index
   * @param {Object} params
   * @param {Number} params.index
   * @param {Boolean} params.loop
   * @return {Node|HTMLElement|EventTarget|Window} Element
   */
  getNum({ index = 1, loop = null } = {}) {
    const self = this
    // logic
    const i = self.getNumIndex({ index, loop })
    return self.getElementsGroups()[i]
  }

  /**
   * activate number element
   * @param {Object} params
   * @param {Number} params.index
   * @param {Boolean} params.force
   * @param {Boolean} params.loop
   * @return {Node|HTMLElement|EventTarget|Window} Element
   */
  goToNum({ index, force = false, loop = null } = {}) {
    const self = this
    // go
    const el = self.getNum({ index, loop })
    if (el) {
      self._eventOn({ el, force })
    }
    return el
  }

  //
  // status
  //

  /**
   * enable
   */
  enable() {
    const self = this
    const options = self.options
    if (self.disabled) {
      // enable
      self.disabled = false
      self.container.removeAttribute(`data-${self.componentName}-disabled`)
      for (const el of self.elements) {
        el.removeAttribute(`data-${self.componentName}-disabled`)
      }
      for (const tr of self.targets) {
        tr.removeAttribute(`data-${self.componentName}-disabled`)
      }
      // aria
      if (options.aria === true || options.aria.activation) {
        for (const el of self.elements) {
          el.removeAttribute('aria-disabled')
        }
      }
      // dispatch event
      self.container.dispatchEvent(new CustomEvent(`status.${self._componentNs}`))
    }
  }

  /**
   * disable
   * @param {Object} params
   */
  disable({ skipEvent = false } = {}) {
    const self = this
    const options = self.options
    if (!self.disabled) {
      self.disabled = true
      // off from disable/destroy
      // need to deactivate on disable on some components (e.g.destroy overlay mobile, matches disable)
      if (options.disableDeactivate) {
        for (const el of self.elements.filter(x => self.hasCurrent({ el: x }))) {
          self._eventOff({ el, force: true })
        }
      }
      // disable
      self.container.setAttribute(`data-${self.componentName}-disabled`, '')
      for (const el of self.elements) {
        el.setAttribute(`data-${self.componentName}-disabled`, '')
      }
      for (const tr of self.targets) {
        tr.setAttribute(`data-${self.componentName}-disabled`, '')
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
      // intersection observer
      if (self._observer) {
        self._observer.disconnect()
        self._observer = null
      }
      // stop auto
      clearTimeout(Xt.dataStorage.get(self.container, `${self.ns}AutoTimeout`))
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
   * Reinit component and save currents as initial
   * @param {Object} params
   * @param {Boolean} params.save Save currents
   */
  reinit({ save = true } = {}) {
    const self = this
    // reinit
    self._initLogic({ save })
  }

  /**
   * restart
   */
  restart() {
    const self = this
    // restart
    self._initStart()
    // dispatch event
    self.container.dispatchEvent(new CustomEvent(`restart.${self._componentNs}`))
  }

  /**
   * add namespace
   */
  _addNamespace() {
    const self = this
    // xtNamespace linked components
    if (self._mode === 'unique') {
      const arr = Xt.dataStorage.get(self.ns, 'xtNamespace') ?? []
      if (!arr.includes(self)) {
        arr.push(self)
        Xt.dataStorage.set(self.ns, 'xtNamespace', arr)
      }
    }
  }

  /**
   * remove namespace
   */
  _removeNamespace() {
    const self = this
    // xtNamespace linked components
    if (self._mode === 'unique') {
      let arr = Xt.dataStorage.get(self.ns, 'xtNamespace')
      if (arr) {
        arr = arr.filter(x => x !== self)
        Xt.dataStorage.set(self.ns, 'xtNamespace', arr)
      }
    }
  }

  /**
   * removeEvents
   */
  _removeEvents() {
    const self = this
    // remove internal events on self._destroyElements
    for (const el of self._destroyElements) {
      const storages = Xt.dataStorage.getAll(el)
      if (storages) {
        for (const [key] of storages) {
          if (key) {
            if (key.endsWith(self.ns)) {
              const handler = Xt.dataStorage.get(el, key)
              if (typeof handler === 'function') {
                const events = key.split('/')[0].split(' ')
                for (const event of events) {
                  el.removeEventListener(event, handler)
                  el.removeEventListener(event, handler, true)
                }
                // do not remove key because they are not overrided with Xt.dataStorage.put, or they trigger multiple times Xt.dataStorage.remove(element, key)
              }
            }
          }
        }
      }
    }
  }

  /**
   * destroy
   * @param {Object} params
   * @param {Boolean} params.weak Do not destroy component
   */
  destroy({ weak = false } = {}) {
    const self = this
    // disable
    self.disable({ skipEvent: true })
    // remove matches
    Xt._removeMatches({ self, optionsInitial: self._optionsInitial })
    // remove events
    self._removeEvents()
    // namespace
    self._removeNamespace()
    // weak
    if (!weak) {
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

  //
}

//
// options
//

Toggle.componentName = 'xt-toggle'
Toggle.optionsDefaultSuper = {
  debug: false,
  // element
  elements: '[data-xt-toggle-element]',
  targets: '[data-xt-toggle-target]',
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
  disableDeactivate: false,
  scrollto: false,
  scrolltoInit: false,
  matches: false,
  disabled: false,
  visibleReinit: false,
  loop: false,
  jump: false,
  navigation: false,
  keyboard: {
    selector: false,
  },
  appendTo: false,
  classBody: false,
  closeauto: false,
  openauto: false,
  mediaLoaded: false,
  mediaLoadedReinit: false,
  zIndex: false,
  focusLimit: false,
  focusTrap: {
    initialFocus: false,
    preventScroll: true,
    allowOutsideClick: true,
  },
  collapseHeight: false,
  collapseWidth: false,
  aria: {
    activation: false,
    role: false,
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
