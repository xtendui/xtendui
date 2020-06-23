import { Xt } from 'xtend-library/src/xt.js'
import 'xtend-library/src/core/toggle/toggle.js'
import RJSON from 'relaxed-json'

/**
 * Scroll
 */
class Scroll extends Xt.Toggle {
  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} optionsCustom User options
   * @constructor
   */
  constructor(object, optionsCustom = {}) {
    super(object, optionsCustom)
  }

  //
  // init
  //

  /**
   * init elements, targets and currents
   */
  initScope() {
    super.initScope()
    const self = this
    const options = self.options
    // loop
    self.targets = []
    for (const el of self.elements) {
      if (!options.sticky) {
        // not sticky
        self.targets.push(el)
      } else {
        // sticky container
        let container = el.closest('.xt-container')
        if (!container) {
          container = Xt.createElement('<div class="xt-container xt-fixed-check"></div>')
          el.before(container)
          el.classList.add('xt-ignore', 'xt-ignore-once') // @FIX ignore once for mount when moving
          container.append(el)
        }
        // sticky clone
        let target = container.querySelector('.xt-clone')
        if (!target) {
          target = el.cloneNode(true)
          target.classList.add('xt-clone', 'xt-ignore')
          target.classList.remove('xt-ignore-once') // @FIX ignore once for mount when moving
          for (const elId of target.querySelectorAll('[id]')) {
            elId.setAttribute('id', elId.getAttribute('id') + '-clone')
          }
          for (const elName of target.querySelectorAll('[name]')) {
            elName.setAttribute('name', elName.getAttribute('name') + '-clone')
          }
          container.append(target)
        }
        self.targets.push(target)
        // sticky
        el.classList.add('xt-fixed', 'xt-sticky')
        if (options.sticky === 'absolute') {
          el.classList.add('xt-sticky-absolute')
        } else if (options.sticky === 'fixed') {
          el.classList.add('xt-sticky-fixed')
        } else if (options.sticky === 'fixed-always') {
          el.classList.add('xt-sticky-fixed-always')
        }
        if (target) {
          target.classList.add('xt-fixed', 'xt-sticky')
          if (options.sticky === 'absolute') {
            target.classList.add('xt-sticky-absolute')
          } else if (options.sticky === 'fixed') {
            target.classList.add('xt-sticky-fixed')
          } else if (options.sticky === 'fixed-always') {
            target.classList.add('xt-sticky-fixed-always')
          }
        }
      }
      // indicator
      if (el.classList.contains('indicator')) {
        const indicatorTrigger = Xt.createElement('<div class="xt-ignore xt-indicator xt-indicator-trigger"></div>')
        document.body.append(indicatorTrigger)
        const indicatorStart = Xt.createElement('<div class="xt-ignore xt-indicator xt-indicator-start"></div>')
        document.body.append(indicatorStart)
        const indicatorEnd = Xt.createElement('<div class="xt-ignore xt-indicator xt-indicator-end"></div>')
        document.body.append(indicatorEnd)
        const indicatorStartReal = Xt.createElement('<div class="xt-ignore xt-indicator xt-indicator-start-real"></div>')
        document.body.append(indicatorStartReal)
        const indicatorEndReal = Xt.createElement('<div class="xt-ignore xt-indicator xt-indicator-end-real"></div>')
        document.body.append(indicatorEndReal)
      }
    }
  }

  /**
   * init events
   */
  initEvents() {
    super.initEvents()
    const self = this
    const options = self.options
    // event scroll and resize
    const scrollHandler = Xt.dataStorage.put(window, options.on + '/' + self.namespace, self.eventScrollHandler.bind(self).bind(self, false))
    const events = [...'scroll resize'.split(' ')]
    for (const event of events) {
      addEventListener(event, scrollHandler, { passive: true })
    }
    self.eventScrollHandler(true)
  }

  //
  // handler
  //

  /**
   * element on handler
   * @param {Event} e
   * @param {Boolean} initial
   */
  eventScrollHandler(initial = false, e = null) {
    const self = this
    Xt.eventDelay(
      e,
      self.object,
      () => {
        // handler
        self.eventScroll(e, initial)
      },
      self.componentNamespace + 'Scroll'
    )
  }

  //
  // event
  //

  /**
   * window scroll
   * @param {Event} e
   * @param {Boolean} initial
   */
  eventScroll(e, initial) {
    const self = this
    const options = self.options
    // disabled
    if (self.disabled) {
      return
    }
    // vars
    let currentOn = 0
    let currentOff = 0
    const currentsOn = []
    const currentsOff = []
    const scrollingElement = document.scrollingElement
    const scrollHeight = scrollingElement.scrollHeight
    const scrollTop = scrollingElement.scrollTop
    const windowHeight = Xt.windowHeight
    // loop
    for (const el of self.elements) {
      const tr = self.getTargets(el)[0]
      if (!el.classList.contains('xt-block') && Xt.visible(el) && tr.offsetParent) {
        // filter out document.documentElement
        // vars
        let changed = false
        const elTop = tr.offsetParent.getBoundingClientRect().top + tr.offsetTop + scrollTop // we use parents to not include transforms animations
        const elHeight = tr.offsetHeight
        // size fix when position fixed
        if (options.sticky) {
          el.style.width = tr.offsetWidth + 'px'
        }
        // position
        const max = self.detail.trigger + scrollHeight - window.innerHeight
        const fallback = Xt.windowPercent(options.fallback)
        self.detail.distance = Xt.windowPercent(options.distance)
        self.detail.trigger = Xt.windowPercent(options.trigger)
        self.detail.start = self.detail.startReal = elTop - windowHeight + Xt.windowPercent(options.start) + self.detail.distance
        self.detail.start = self.detail.start < self.detail.trigger ? self.detail.trigger : self.detail.start // limit fixes activation on page top
        self.detail.start = self.detail.start > max ? max - fallback : self.detail.start // limit fixes activation on page bottom
        self.detail.end = self.detail.endReal = options.end
          ? self.detail.start + Xt.windowPercent(options.end) + elHeight - self.detail.distance
          : elTop + elHeight + self.detail.trigger - self.detail.distance
        self.detail.end = self.detail.end < self.detail.start + fallback ? self.detail.start + fallback : self.detail.end // limit fixes deactivation on page top
        // ratio
        const current = scrollTop + self.detail.trigger - self.detail.start
        const total = self.detail.end - self.detail.start
        self.detail.ratio = Math.max(0, current) / total
        self.detail.ratio = self.detail.ratio > 0 ? self.detail.ratio : 0
        self.detail.ratio = self.detail.ratio < 1 ? self.detail.ratio : 1
        self.detail.ratioInverse = 1 - self.detail.ratio
        self.detail.ratioDouble = 1 - Math.abs((self.detail.ratio - 0.5) * 2)
        // activation
        // @FIX fixes on page top || self.detail.start > self.detail.end
        if ((current >= 0 && current <= total) || self.detail.start > self.detail.end) {
          // inside
          changed = self.checkOn(el)
          if (changed) {
            currentsOn.push(el)
            cancelAnimationFrame(Xt.dataStorage.get(el, self.componentNamespace + 'ScrollFrame'))
            Xt.dataStorage.set(
              el,
              self.componentNamespace + 'ScrollFrame',
              requestAnimationFrame(() => {
                // initial
                if (initial) {
                  Xt.dataStorage.set(el, self.componentNamespace + 'Initial', true)
                } else {
                  Xt.dataStorage.remove(el, self.componentNamespace + 'Initial')
                }
                // direction
                self.inverse = current > self.detail.trigger
                // activation
                Xt.dataStorage.set(el, self.componentNamespace + 'OnCount', currentOn)
                Xt.dataStorage.set(el, self.componentNamespace + 'OnTot', currentsOn.length)
                currentOn++
                self.eventOn(el, true)
              })
            )
          }
        } else {
          // outside
          changed = self.checkOff(el)
          el.classList.add('scroll-outside')
          if (changed) {
            el.classList.add('scroll-done')
            currentsOff.push(el)
            cancelAnimationFrame(Xt.dataStorage.get(el, self.componentNamespace + 'ScrollFrame'))
            Xt.dataStorage.set(
              el,
              self.componentNamespace + 'ScrollFrame',
              requestAnimationFrame(() => {
                // initial
                if (initial) {
                  Xt.dataStorage.set(el, self.componentNamespace + 'Initial', true)
                } else {
                  Xt.dataStorage.remove(el, self.componentNamespace + 'Initial')
                }
                // direction
                self.inverse = current > self.detail.trigger
                // deactivate
                Xt.dataStorage.set(el, self.componentNamespace + 'OffCount', currentOff)
                Xt.dataStorage.set(el, self.componentNamespace + 'OffTot', currentsOff.length)
                currentOff++
                self.eventOff(el, true)
              })
            )
          }
        }
        // indicator
        if (el.classList.contains('indicator')) {
          const triggerEl = document.body.querySelector('.xt-indicator-trigger')
          triggerEl.style.top = self.detail.trigger + 'px'
          const startEl = document.body.querySelector('.xt-indicator-start')
          startEl.style.top = self.detail.start - scrollTop + 'px'
          const endEl = document.body.querySelector('.xt-indicator-end')
          endEl.style.top = self.detail.end - scrollTop + 'px'
          const startRealEl = document.body.querySelector('.xt-indicator-start-real')
          startRealEl.style.top = self.detail.startReal - scrollTop + 'px'
          const endRealEl = document.body.querySelector('.xt-indicator-end-real')
          endRealEl.style.top = self.detail.endReal - scrollTop + 'px'
        }
        // listener dispatch
        cancelAnimationFrame(Xt.dataStorage.get(el, self.componentNamespace + 'ScrollDispatchFrame'))
        Xt.dataStorage.set(
          el,
          self.componentNamespace + 'ScrollDispatchFrame',
          requestAnimationFrame(() => {
            el.dispatchEvent(new CustomEvent('change.xt'))
          })
        )
      }
    }
  }

  //
}

//
// options
//

Scroll.componentName = 'xt-scroll'
Scroll.optionsDefault = {
  elements: false,
  targets: false,
  on: 'on.xt.scroll',
  min: 0,
  max: 'Infinity',
  instant: true,
  class: 'fade',
  classIn: 'fade-in',
  classOut: 'fade-out',
  aria: false,
  // scroll only
  sticky: false,
  distance: 100,
  trigger: '100%',
  start: '100%',
  end: false,
  fallback: 0,
}

//
// export
//

Xt.Scroll = Scroll

//
// observe
//

Xt.mount.push({
  matches: '[data-' + Scroll.componentName + ']',
  mount: object => {
    // vars

    const optionsMarkup = object.getAttribute('data-' + Xt.Scroll.componentName)
    const options = optionsMarkup ? RJSON.parse(optionsMarkup) : {}

    // init

    let self = new Xt.Scroll(object, options)

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  },
})
