import { Xt } from 'xtend-library'
import 'xtend-library/src/core/toggle/toggle.js'
import RJSON from 'relaxed-json'

class Sticky extends Xt.Toggle {
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
    // mode
    self.mode = 'unique'
    // sticky container
    for (const el of self.elements) {
      let container = el.closest('.xt-container')
      if (!container) {
        container = Xt.createElement('<div class="xt-container xt-fixed-check"></div>')
        el.before(container)
        el.classList.add('xt-ignore', 'xt-ignore-once') // @FIX ignore once for mount when moving
        container.append(el)
      }
      el.style[options.position] = '0px'
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
      // hide
      if (options.hide === 'down') {
        el.classList.add('sticky-hide--down')
      } else {
        el.classList.remove('sticky-hide--down')
      }
      if (options.hide === 'up') {
        el.classList.add('sticky-hide--up')
      } else {
        el.classList.remove('sticky-hide--up')
      }
      // @index-sticky by javascript 100 and decreses with sequential sticky
      el.style.zIndex = Xt.getStickyIndex()
    }
  }

  /**
   * init events
   */
  initEvents() {
    const self = this
    const options = self.options
    // event on
    if (options.on) {
      const stickyHandler = Xt.dataStorage.put(window, options.on + '/' + self.namespace, self.eventStickyHandler.bind(self))
      const events = [...options.on.split(' ')]
      for (const event of events) {
        addEventListener(event, stickyHandler, { passive: true })
      }
      self.eventStickyHandler(null, true)
    }
    // focusin
    const focusInHandler = Xt.dataStorage.put(document, 'focusin/sticky' + '/' + self.namespace, self.eventFocusinHandler.bind(self))
    document.addEventListener('focusin', focusInHandler, { passive: true })
  }

  //
  // handler
  //

  /**
   * element on handler
   * @param {Event} e
   * @param {Boolean} initial
   */
  eventStickyHandler(e = null, initial = false) {
    const self = this
    Xt.eventDelay(
      e,
      self.object,
      () => {
        // handler
        self.eventSticky(e, initial)
      },
      self.componentNamespace + 'Sticky'
    )
  }

  /**
   * element focusin handler
   * @param {Event} e
   */
  eventFocusinHandler(e) {
    const self = this
    // handler
    for (const tr of self.targets) {
      const el = self.getElements(tr)[0]
      // show element if is hiding on focus
      if (el.classList.contains('sticky-hide')) {
        const active = el.contains(e.target)
        if (active) {
          el.style.top = '0px'
        } else {
          el.style.top = Xt.dataStorage.get(el, self.componentNamespace + 'AddOld') + 'px'
        }
      }
    }
  }

  //
  // event
  //

  /**
   * window scroll
   * @param {Event} e
   * @param {Boolean} initial
   */
  eventSticky(e, initial) {
    const self = this
    const options = self.options
    // disabled
    if (self.disabled && !self.initial) {
      return
    }
    // vars
    let anim = true
    let hide = false
    let add = 0
    let addHide = 0
    const windowHeight = Xt.windowHeight
    const scrollingElement = document.scrollingElement
    const scrollHeight = scrollingElement.scrollHeight
    const scrollTop = scrollingElement.scrollTop
    // direction
    self.inverse = scrollTop < self.detail.scrollTopOld
    // loop
    for (const el of self.elements) {
      const tr = self.getTargets(el)[0]
      // vars
      const heightEl = parseFloat(getComputedStyle(el).height)
      const heightTr = parseFloat(getComputedStyle(tr).height)
      const topTr = tr.getBoundingClientRect().top
      // hide
      if (options.hide === 'down') {
        if (!self.inverse) {
          addHide = heightTr
        }
      }
      if (options.hide === 'up') {
        if (self.inverse) {
          addHide = heightTr
        }
      }
      // scroll
      let top = self.eventStickypos(options.limit.top || self.targets, scrollTop, topTr)
      let bottom = self.eventStickypos(options.limit.bottom, scrollTop, Infinity)
      if (options.position === 'top') {
        bottom -= heightTr
      }
      if (options.position === 'bottom') {
        top -= windowHeight - heightTr
        bottom = Math.abs(scrollHeight - windowHeight - bottom)
      }
      // contain and add
      let addTop = 0
      let addBottom = 0
      if (options.contain) {
        if (options.contain.top) {
          const addTopObj = self.eventStickyheight(options.contain.top)
          addTop = addTopObj.val
          if (addTop !== null && addTop > topTr) {
            add = addTop
            if (!addTopObj.foundHide) {
              anim = false
            }
          } else {
            addTop = null
          }
        }
        if (options.contain.bottom) {
          addBottom = self.eventStickypos(options.contain.bottom)
          if (addBottom !== null && addBottom < heightEl + addTop) {
            add = addBottom - heightEl
            anim = false
          } else {
            addBottom = null
          }
        }
      }
      // save real add for calculation
      Xt.dataStorage.set(el, self.componentNamespace + 'Add', add)
      // activation
      const checkTop = scrollTop >= top - add + addHide
      const checkBottom = scrollTop < bottom + add - addHide
      if (checkTop && checkBottom) {
        // initial
        if (initial) {
          Xt.dataStorage.set(el, self.componentNamespace + 'Initial', true)
        } else {
          Xt.dataStorage.remove(el, self.componentNamespace + 'Initial')
        }
        // inside
        self.eventOn(el, true)
        // hide
        if (addHide) {
          hide = true
        }
      } else {
        // initial
        if (initial) {
          Xt.dataStorage.set(el, self.componentNamespace + 'Initial', true)
        } else {
          Xt.dataStorage.remove(el, self.componentNamespace + 'Initial')
        }
        // outside
        self.eventOff(el, true)
      }
      // after active
      if (el.classList.contains(self.classes[0])) {
        // hide
        if (hide) {
          add = -heightEl
          if (!el.classList.contains('sticky-hide')) {
            el.classList.add('sticky-hide')
            // autoclose
            dispatchEvent(new CustomEvent('autoclose.trigger.xt', { detail: { container: el } }))
            // listener dispatch
            el.dispatchEvent(new CustomEvent('hide.xt'))
          }
        } else {
          if (el.classList.contains('sticky-hide')) {
            el.classList.remove('sticky-hide')
            // listener dispatch
            el.dispatchEvent(new CustomEvent('show.xt'))
          }
        }
      } else {
        // reset
        add = 0
        anim = false
      }
      // anim
      if (anim && (addTop || !addBottom) && self.detail.scrollTopOld !== undefined) {
        if (!el.classList.contains('sticky-moving')) {
          el.classList.add('sticky-moving')
        }
      } else {
        if (el.classList.contains('sticky-moving')) {
          el.classList.remove('sticky-moving')
        }
      }
      // top and bottom
      /*
      if (!checkTop) {
        if (!el.classList.contains('sticky-top')) {
          el.classList.add('sticky-top')
        }
      } else {
        if (el.classList.contains('sticky-top')) {
          el.classList.remove('sticky-top')
        }
      }
      if (!checkBottom) {
        if (!el.classList.contains('sticky-bottom')) {
          el.classList.add('sticky-bottom')
        }
      } else {
        if (el.classList.contains('sticky-bottom')) {
          el.classList.remove('sticky-bottom')
        }
      }
      */
      // set add
      if (add !== Xt.dataStorage.get(el, self.componentNamespace + 'AddOld')) {
        el.style[options.position] = add + 'px'
      }
      // fix position fixed width 100% of parent
      const width = Xt.normalizeWidth(tr.clientWidth)
      if (el.style.width !== width) {
        el.style.width = width
      }
      // listener dispatch
      el.dispatchEvent(new CustomEvent('change.xt'))
      // save for direction
      Xt.dataStorage.set(el, self.componentNamespace + 'AddOld', add)
    }
    // save for direction
    self.detail.scrollTopOld = scrollTop
  }

  /**
   * get position of option
   * @param {String|Number|Element} option
   * @param {Number} val Default value
   * @param {Number} scrollTop Window's scrollTop
   * @returns {Number} value Option's position (px)
   */
  eventStickypos(option, scrollTop = 0, val = null) {
    if (!isNaN(parseFloat(option))) {
      val = option
    } else {
      const elements = Array.isArray(option) || option instanceof Element ? option : document.querySelectorAll(option)
      if (elements.length) {
        let found = false
        val = 0
        for (const el of elements) {
          const add = Xt.dataStorage.get(el, self.componentNamespace + 'Add')
          if (add) {
            // if sticky-hide get real add
            const style = getComputedStyle(el)
            if (style.display !== 'none') {
              val += add
              found = true
            }
          } else {
            const rect = el.getBoundingClientRect()
            val += rect.top
            found = true
          }
        }
        if (found) {
          val += scrollTop
        } else {
          val = null
        }
      }
    }
    return val
  }

  //
  // event util
  //

  /**
   * get height of option
   * @param {String|Number|Element} option
   * @param {Number} val Default value
   * @returns {Object} obj Option's height (px) and if found hide element
   */
  eventStickyheight(option, val = null) {
    const self = this
    // logic
    let foundHide = false
    if (!isNaN(parseFloat(option))) {
      val = option
    } else {
      const elements = Array.isArray(option) || option instanceof Element ? option : document.querySelectorAll(option)
      if (elements.length) {
        for (const el of elements) {
          if (el.classList.contains('sticky-hide--down') && el.classList.contains(self.classes[0])) {
            if (self.inverse) {
              val += el.clientHeight
              foundHide = true
            }
          } else if (el.classList.contains('sticky-hide--up') && el.classList.contains(self.classes[0])) {
            if (!self.inverse) {
              val += el.clientHeight
              foundHide = true
            }
          } else {
            val += el.clientHeight
          }
        }
      }
    }
    return { val: val, foundHide: foundHide }
  }

  //
}

//
// options
//

Sticky.componentName = 'xt-sticky'
Sticky.optionsDefault = {
  elements: false,
  targets: false,
  on: 'scroll resize',
  min: 0,
  max: 'Infinity',
  instant: true,
  class: 'active active-sticky',
  aria: false,
  // sticky only
  sticky: true,
  position: 'top',
  limit: { bottom: 'Infinity' },
  contain: false,
  hide: false,
}

//
// export
//

Xt.Sticky = Sticky

//
// observe
//

Xt.mount.push({
  matches: '[data-' + Xt.Sticky.componentName + ']',
  mount: object => {
    // vars

    const optionsMarkup = object.getAttribute('data-' + Xt.Sticky.componentName)
    const options = optionsMarkup ? RJSON.parse(optionsMarkup) : {}

    // init

    let self = new Xt.Sticky(object, options)

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  },
})
