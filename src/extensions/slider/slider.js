import { Xt } from 'xtend-library'
import 'xtend-library/src/core/toggle/toggle.js'
import RJSON from 'relaxed-json'

class Slider extends Xt.Toggle {
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
    const self = this
    const options = self.options
    // dragger
    if (options.drag && options.drag.dragger) {
      self.dragger = self.object.querySelector(options.drag.dragger)
      self.destroyElements.push(self.dragger)
    }
    // @FIX performances
    self.detail.objectWidth = self.object.offsetWidth
    if (self.dragger) {
      self.detail.draggerWidth = self.dragger.offsetWidth
    }
    // targets
    self.initScopeTargets()
    // autoHeight
    if (options.autoHeight) {
      self.autoHeight = self.object.querySelector(options.autoHeight)
    }
    // initSliderGroup
    self.initSliderGroup()
    // initSliderPags
    self.initSliderPags()
    // initSliderPos
    if (self.dragger) {
      // @FIX raf because needs to execute initStart before calculating positions
      requestAnimationFrame(() => {
        self.initSliderPos()
      })
    }
    // elements
    self.initScopeElements()
  }

  /**
   * init slider group
   */
  initSliderGroup() {
    const self = this
    const options = self.options
    // not when empty
    if (!self.targets.length) {
      return false
    }
    // @FIX disable slider if not overflowing
    self.object.classList.remove('slider-nooverflow')
    // drag wrap
    self.destroyWraps()
    // width
    let draggerWidth = self.dragger ? self.detail.draggerWidth : self.detail.objectWidth
    let draggerWidthAvailable = 0
    // draggerWidthAvailable
    if (options.groupMq) {
      const mqs = Object.entries(options.groupMq)
      if (mqs.length) {
        for (const [key, value] of mqs) {
          if (window.matchMedia(key).matches) {
            draggerWidthAvailable = draggerWidth * value
          }
        }
      }
    }
    // groupMqInitial
    self.groupMq = []
    self.groupMq.push([])
    let currentCount = draggerWidthAvailable
    let totalCount = draggerWidth
    let doneFirst = false
    for (const target of self.targets) {
      let targetWidth = target.offsetWidth
      if (targetWidth === 0) {
        // when display none
        const container = target.parentNode
        const cloned = target.cloneNode(true)
        cloned.classList.add('xt-calculating', 'xt-ignore')
        container.append(cloned)
        targetWidth = cloned.offsetWidth
        cloned.remove()
      }
      currentCount -= targetWidth
      totalCount -= targetWidth
      // overflow
      let currentGroup = self.groupMq.length - 1
      if (currentCount < 0 && self.groupMq[currentGroup].length) {
        self.groupMq.push([])
        currentGroup = self.groupMq.length - 1
        currentCount = draggerWidthAvailable
        currentCount -= targetWidth
      }
      // @FIX when dragger not :visible with draggerWidth === 0 groups of 1 slide
      if (draggerWidth === 0 && doneFirst) {
        self.groupMq.push([])
        currentGroup = self.groupMq.length - 1
      }
      doneFirst = true
      // assign group
      self.groupMq[currentGroup].push(target)
      target.setAttribute('data-xt-group', self.namespace + '-' + currentGroup)
    }
    self.groupMqInitial = self.groupMq
    // @FIX position values negative margins
    self.detail.fixNegativeMargin = self.groupMq[0][0].offsetLeft
    // @FIX disable slider if not overflowing
    if (totalCount >= 0) {
      const afterInitDisable = () => {
        // disable
        self.object.classList.add('slider-nooverflow')
        self.disable()
        // enable all visible elements also if not .active next frame when self.elements is populated
        const currents = self.getCurrents()
        for (const el of self.elements.filter(x => !currents.includes(self.getElements(x)[0]))) {
          self.activate(el)
          for (const tr of self.getTargets(el)) {
            self.activate(tr)
          }
        }
        self.object.removeEventListener('init.xt', afterInitDisable)
      }
      self.object.addEventListener('init.xt', afterInitDisable)
    }
    // drag wrap
    const wrapFirst = []
    const wrapLast = []
    if (totalCount < 0) {
      if (self.dragger && options.drag.wrap) {
        const container = self.targets[0].parentNode
        if (!options.loop) {
          console.error('Error: Xt.Slider needs "loop": true when using "drag": {"wrap": true}', self.object)
        }
        if (options.contain) {
          console.error('Error: Xt.Slider cannot use "contain": true when using "drag": {"wrap": true}', self.object)
        }
        const cloneSlide = slide => {
          const cloned = slide.cloneNode(true)
          cloned.classList.add('xt-clone', 'xt-wrap')
          cloned.classList.remove(...self.classes, ...self.classesIn, ...self.classesOut, ...self.classesInitial, ...self.classesInverse)
          return cloned
        }
        // wrapLast
        const wrapLastFunction = () => {
          let wrapLastCount = draggerWidth
          for (const [i, group] of self.groupMqInitial.entries()) {
            wrapLast.push([])
            for (const slide of group) {
              const cloned = cloneSlide(slide)
              container.append(cloned)
              wrapLast[i].push(cloned)
              cloned.setAttribute('data-xt-group', self.namespace + '-' + 'wrapLast' + i)
              self.targets.push(cloned)
              wrapLastCount -= slide.offsetWidth
              if (wrapLastCount <= -draggerWidth * (options.drag.wrap - 1)) {
                return
              }
            }
          }
        }
        wrapLastFunction()
        // wrapFirst
        const wrapFirstFunction = () => {
          let wrapFirstCount = draggerWidth
          for (const [i, group] of self.groupMqInitial.reverse().entries()) {
            wrapFirst.unshift([])
            for (const slide of group.reverse()) {
              const cloned = cloneSlide(slide)
              container.prepend(cloned)
              wrapFirst[0].unshift(cloned)
              cloned.setAttribute('data-xt-group', self.namespace + '-' + 'wrapFirst' + i)
              self.targets.unshift(cloned)
              wrapFirstCount -= slide.offsetWidth
              if (wrapFirstCount <= -draggerWidth * (options.drag.wrap - 1)) {
                return
              }
            }
            group.reverse() // reset reverse
          }
        }
        wrapFirstFunction()
        self.groupMqInitial.reverse() // reset reverse
      }
    }
    self.groupMqFirst = wrapFirst
    self.groupMqLast = wrapLast
    self.groupMq = wrapFirst.concat(self.groupMq.concat(wrapLast))
  }

  /**
   * init slider pagination
   */
  initSliderPags() {
    const self = this
    const options = self.options
    // not when empty
    if (!self.targets.length) {
      return false
    }
    // generate elements
    const pags = self.object.querySelectorAll(options.pagination)
    if (!pags.length) {
      console.error('Error: Xt.Slider pagination not found for', self.object)
    }
    // clean pags
    self.destroyPags()
    // pags
    self.pags = self.pags ? self.pags : []
    for (const [z, pag] of pags.entries()) {
      // vars
      const cloned = pag.querySelector('[data-xt-pag]')
      cloned.classList.add('xt-ignore')
      const container = cloned.parentNode
      const arr = self.groupMq
      // populate
      self.pags[z] = []
      for (const [i, group] of arr.entries()) {
        const item = document.createElement('div') // needed to set innerHTML instead of outerHTML to do html.search also attributes
        const clone = cloned.cloneNode(true)
        clone.classList.remove('xt-ignore')
        clone.classList.add('xt-clone')
        item.appendChild(clone)
        let html = item.innerHTML
        if (html.search(new RegExp('xt-content', 'ig')) !== -1) {
          let replace = ''
          for (const slide of group) {
            replace += slide.querySelector('.slide-pagination-content').innerHTML
          }
          html = html.replace(new RegExp('xt-content', 'ig'), replace)
        }
        if (html.search(new RegExp('xt-num', 'ig')) !== -1) {
          html = html.replace(new RegExp('xt-num', 'ig'), (i - self.groupMqFirst.length + 1).toString())
        }
        if (html.search(new RegExp('xt-tot', 'ig')) !== -1) {
          html = html.replace(new RegExp('xt-tot', 'ig'), self.groupMqInitial.length.toString())
        }
        item.innerHTML = html
        item.children[0].setAttribute('data-xt-group', group[0].getAttribute('data-xt-group'))
        container.insertBefore(item.children[0], cloned)
        item.remove()
        self.pags[z][i] = container.querySelectorAll('[data-xt-pag].xt-clone')[i]
        // drag wrap
        if (self.dragger && options.drag.wrap) {
          const min = self.groupMqFirst.length
          const max = self.groupMqFirst.length + self.groupMqInitial.length - 1
          if (i < min || i > max) {
            self.pags[z][i].classList.add('xt-clone', 'xt-wrap', 'display-none')
          }
        }
      }
    }
  }

  /**
   * init slider group positions
   */
  initSliderPos() {
    const self = this
    const options = self.options
    // reset done
    for (const slide of self.targets) {
      Xt.dataStorage.remove(slide, self.componentNamespace + 'GroupPosDone')
    }
    // set pos
    const draggerWidth = self.detail.draggerWidth
    // slides pos
    let slidesWidth = 0
    for (const slide of self.targets) {
      if (!Xt.dataStorage.get(slide, self.componentNamespace + 'GroupPosDone') && Xt.visible(slide)) {
        // vars
        const targets = self.getTargets(slide)
        let slideLeft = Infinity
        let slideWidth = 0
        let slideHeight = 0
        let slideHeightTemp = 0
        // vars
        for (const target of targets) {
          slideLeft = target.offsetLeft < slideLeft ? slide.offsetLeft : slideLeft
          slideWidth += target.offsetWidth
          slideHeightTemp = target.children[0].offsetHeight
          slidesWidth += slideWidth
          slideHeight = slideHeightTemp > slideHeight ? slideHeightTemp : slideHeight
        }
        for (const target of targets) {
          Xt.dataStorage.set(target, self.componentNamespace + 'GroupPosDone', true)
          Xt.dataStorage.set(target, self.componentNamespace + 'GroupHeight', slideHeight)
        }
        // pos with alignment
        let pos
        if (!self.object.classList.contains('slider-nooverflow')) {
          // @FIX disable slider if not overflowing
          if (options.align === 'center') {
            pos = draggerWidth / 2 - slideLeft - slideWidth / 2
          } else if (options.align === 'left') {
            pos = -slideLeft
          } else if (options.align === 'right') {
            pos = draggerWidth - slideLeft - slideWidth
          }
        }
        // console.debug(pos, draggerWidth, slideWidth, slide)
        // save pos
        for (const target of targets) {
          Xt.dataStorage.set(target, self.componentNamespace + 'GroupPos', pos)
        }
      }
    }
    // @FIX xt-wrap clone offsetWidth on resize
    for (const target of self.targets) {
      target.children[0].style.width = ''
    }
    // min max pos with contain
    if (options.contain && slidesWidth > draggerWidth) {
      // only if slides overflow dragger
      const slideFirst = self.targets[0]
      const slideFirstLeft = slideFirst.offsetLeft
      const slideLast = self.targets[self.targets.length - 1]
      const slideLastLeft = slideLast.offsetLeft
      const slideLastWidth = slideLast.offsetWidth
      const min = -slideFirstLeft
      const max = -slideLastLeft + draggerWidth - slideLastWidth
      for (const group of self.groupMq) {
        for (const target of group) {
          let pos = Xt.dataStorage.get(target, self.componentNamespace + 'GroupPos')
          pos = pos > min ? min : pos
          pos = pos < max ? max : pos
          Xt.dataStorage.set(target, self.componentNamespace + 'GroupPos', pos)
        }
      }
    }
    // @FIX position values negative margins
    for (const target of self.targets) {
      let pos = Xt.dataStorage.get(target, self.componentNamespace + 'GroupPos')
      pos += self.detail.fixNegativeMargin
      Xt.dataStorage.set(target, self.componentNamespace + 'GroupPos', pos)
    }
    // set wheel min and max
    if (options.wheel && options.wheel.selector) {
      const arr = self.targets.filter(x => !x.classList.contains('xt-wrap'))
      const first = arr[0]
      const last = arr[arr.length - 1]
      self.detail.wheelMin = -Xt.dataStorage.get(first, self.componentNamespace + 'GroupPos')
      self.detail.wheelMax = -Xt.dataStorage.get(last, self.componentNamespace + 'GroupPos')
    }
  }

  /**
   * init events
   */
  initEvents() {
    super.initEvents()
    const self = this
    const options = self.options
    const dragger = self.dragger
    // elements
    for (const el of self.elements) {
      // event on
      const slideonHandler = Xt.dataStorage.put(el, 'on.slider' + '/' + self.namespace, self.eventSlideonHandler.bind(self).bind(self, dragger, el))
      el.addEventListener('on.xt', slideonHandler)
      // event off
      const slideoffHandler = Xt.dataStorage.put(el, 'off.slider' + '/' + self.namespace, self.eventSlideoffHandler.bind(self).bind(self, dragger, el))
      el.addEventListener('off.xt', slideoffHandler)
    }
    // targets
    for (const tr of self.targets) {
      // disable links not active slide
      if (options.jump) {
        tr.classList.add('xt-links-none')
      }
      // not event on and event off for targets because not needed and bugs pagination inside targets
    }
    // dragger
    if (options.drag) {
      // @FIX prevent firefox image dragging
      for (const img of self.dragger.querySelectorAll('img')) {
        let imgnodragHandler = Xt.dataStorage.put(img, 'mousedown' + '/' + self.namespace, self.eventImgnodragHandler.bind(self))
        img.addEventListener('mousedown', imgnodragHandler)
      }
      // drag start
      const dragstartHandler = Xt.dataStorage.put(
        dragger,
        'mousedown touchstart' + '/' + self.namespace,
        self.eventDragstartHandler.bind(self).bind(self, dragger)
      )
      const events = ['mousedown', 'touchstart']
      for (const event of events) {
        dragger.addEventListener(event, dragstartHandler, { passive: true })
      }
      // xt-grab
      if (!self.disabled) {
        dragger.classList.add('xt-grab')
      } else {
        dragger.classList.remove('xt-grab')
      }
      // wheel
      if (options.wheel && options.wheel.selector) {
        const wheel = self.wheel
        wheel.addEventListener('wheelstart.xt', self.logicDragstart.bind(self).bind(self, dragger))
        wheel.addEventListener('wheel.xt', self.logicDrag.bind(self).bind(self, dragger))
        wheel.addEventListener('wheelend.xt', self.logicDragend.bind(self).bind(self, dragger))
        wheel.addEventListener('wheelend.xt', self.logicDragfrictionend.bind(self).bind(self, dragger))
      }
    }
    // resize
    const reinitHandler = Xt.dataStorage.put(window, 'resize' + '/' + self.namespace, self.eventReinitHandler.bind(self).bind(self))
    addEventListener('resize', reinitHandler)
  }

  //
  // handler
  //

  /**
   * slide on handler
   * @param {Node|HTMLElement|EventTarget|Window} dragger
   * @param {Node|HTMLElement|EventTarget|Window} el
   * @param {Event} e
   */
  eventSlideonHandler(dragger, el, e) {
    const self = this
    // useCapture delegation
    if (self.elements.includes(el)) {
      // handler
      self.eventSlideon(dragger, el, e)
    }
  }

  /**
   * slide off handler
   * @param {Node|HTMLElement|EventTarget|Window} dragger
   * @param {Node|HTMLElement|EventTarget|Window} el
   * @param {Event} e
   */
  eventSlideoffHandler(dragger, el, e) {
    const self = this
    // useCapture delegation
    if (self.elements.includes(el)) {
      // handler
      self.eventSlideoff(dragger, el, e)
    }
  }

  /**
   * drag fix handler
   * @param {Event} e
   */
  eventImgnodragHandler(e) {
    e.preventDefault()
  }

  /**
   * element drag on handler
   * @param {Node|HTMLElement|EventTarget|Window} dragger
   * @param {Event} e
   */
  eventDragstartHandler(dragger, e) {
    const self = this
    const options = self.options
    // handler
    if (!e.button || e.button !== 2) {
      // not right click or it gets stuck
      if (self.initial || !self.checkAnim(Xt.arrSingle(dragger))) {
        // logic
        if (options.eventLimit) {
          const eventLimit = self.container.querySelectorAll(options.eventLimit)
          if (!Xt.contains(eventLimit, e.target) || e.target.closest('.event-force')) {
            self.eventDragstart(dragger, e)
          }
        } else {
          self.eventDragstart(dragger, e)
        }
        // drag end
        const dragendHandler = Xt.dataStorage.put(dragger, 'mouseup touchend' + '/' + self.namespace, self.eventDragendHandler.bind(self).bind(self, dragger))
        const events = ['mouseup', 'touchend']
        for (const event of events) {
          addEventListener(event, dragendHandler)
        }
      }
    }
  }

  /**
   * element drag off handler
   * @param {Node|HTMLElement|EventTarget|Window} dragger
   * @param {Event} e
   */
  eventDragendHandler(dragger, e) {
    const self = this
    const options = self.options
    // logic
    if (options.eventLimit) {
      const eventLimit = self.container.querySelectorAll(options.eventLimit)
      if (!Xt.contains(eventLimit, e.target) || e.target.closest('.event-force')) {
        self.eventDragend(dragger, e)
      }
    } else {
      self.eventDragend(dragger, e)
    }
  }

  /**
   * element drag on
   * @param {Node|HTMLElement|EventTarget|Window} dragger
   * @param {Event} e
   */
  eventDragstart(dragger, e) {
    const self = this
    // event move
    const dragHandler = Xt.dataStorage.put(dragger, 'mousemove touchmove' + '/' + self.namespace, self.eventDragHandler.bind(self).bind(self, dragger))
    const events = ['mousemove', 'touchmove']
    for (const event of events) {
      dragger.addEventListener(event, dragHandler, { passive: true })
    }
    // logic
    self.logicDragstart(dragger, e)
  }

  /**
   * element drag off
   * @param {Node|HTMLElement|EventTarget|Window} dragger
   * @param {Event} e
   */
  eventDragend(dragger, e) {
    const self = this
    // event off
    const dragendHandler = Xt.dataStorage.get(dragger, 'mouseup touchend' + '/' + self.namespace)
    const eventsoff = ['mouseup', 'touchend']
    for (const event of eventsoff) {
      removeEventListener(event, dragendHandler)
    }
    // event move
    const dragHandler = Xt.dataStorage.get(dragger, 'mousemove touchmove' + '/' + self.namespace)
    const eventsmove = ['mousemove', 'touchmove']
    for (const event of eventsmove) {
      dragger.removeEventListener(event, dragHandler, { passive: true })
    }
    // logic
    self.logicDragend(dragger, e)
  }

  /**
   * element drag handler
   * @param {Node|HTMLElement|EventTarget|Window} dragger
   * @param {Event} e
   */
  eventDragHandler(dragger, e) {
    const self = this
    // logic
    self.logicDrag(dragger, e)
  }

  //
  // event
  //

  /**
   * slide on
   * @param {Node|HTMLElement|EventTarget|Window} dragger
   * @param {Node|HTMLElement|EventTarget|Window} el
   * @param {Event} e
   */
  eventSlideon(dragger, el, e) {
    const self = this
    const options = self.options
    // disabled
    if (self.disabled) {
      return
    }
    // @FIX targets handler
    const slides = self.getTargets(el)
    const slide = slides[0]
    // only one call per group
    if (Xt.dataStorage.get(slide, self.componentNamespace + 'SlideonDone')) {
      return
    }
    Xt.dataStorage.set(slide, self.componentNamespace + 'SlideonDone', true)
    requestAnimationFrame(() => {
      Xt.dataStorage.remove(slide, self.componentNamespace + 'SlideonDone')
    })
    // disable links not active slide
    for (const target of slides) {
      if (options.jump) {
        target.classList.remove('xt-links-none')
      }
    }
    // autoHeight
    if (self.autoHeight) {
      let slideHeight = slide.children[0].offsetHeight
      const groupHeight = Xt.dataStorage.get(slide, self.componentNamespace + 'GroupHeight')
      slideHeight = groupHeight > slideHeight ? groupHeight : slideHeight
      if (slideHeight > 0) {
        slideHeight += 'px'
        if (self.autoHeight.style.height !== slideHeight) {
          if (!self.initial) {
            self.autoHeight.classList.add('xt-autoHeight')
          }
          self.autoHeight.style.height = slideHeight
          // listener dispatch
          slide.dispatchEvent(new CustomEvent('autoheight.xt'))
        }
      }
    }
    // val
    self.detail.dragPos = self.detail.dragPosCurrent = self.detail.dragPosReal = Xt.dataStorage.get(slide, self.componentNamespace + 'GroupPos')
    // dragger
    if (dragger) {
      // prevent alignment animation
      dragger.classList.remove('duration-none')
      // initial or resizing
      if (self.initial || self.continue) {
        // prevent alignment animation
        dragger.classList.add('duration-none')
        requestAnimationFrame(() => {
          dragger.classList.remove('duration-none')
        })
      }
      // drag position
      dragger.style.transform = 'translateX(' + self.detail.dragPos + 'px)'
      // disable dragger
      dragger.classList.add('xt-pointer-events-none')
      for (const nav of self.navs) {
        nav.classList.add('xt-pointer-events-none')
      }
      Xt.animTimeout(dragger, () => {
        dragger.classList.remove('xt-pointer-events-none')
        for (const nav of self.navs) {
          nav.classList.remove('xt-pointer-events-none')
        }
      })
      // disable links
      dragger.classList.remove('xt-jumps-none')
      dragger.classList.remove('xt-links-none')
      // drag wrap
      if (self.dragger && options.drag.wrap) {
        if (!self.initial && !self.continue) {
          const min = self.groupMqFirst.length
          const max = self.groupMqFirst.length + self.groupMqInitial.length - 1
          // @FIX wrap with initial
          Xt.animTimeout(
            dragger,
            () => {
              if (self.currentIndex < min) {
                self.initial = true
                self.continue = true
                self.goToNum(max + self.currentIndex - min + 1, true) // wrap around xt-wrap items
              } else if (self.currentIndex > max) {
                self.initial = true
                self.continue = true
                self.goToNum(min + self.currentIndex - max - 1, true) // wrap around xt-wrap items
              }
            },
            'wrap'
          )
        }
      }
    }
  }

  /**
   * slide off
   * @param {Node|HTMLElement|EventTarget|Window} dragger
   * @param {Node|HTMLElement|EventTarget|Window} el
   * @param {Event} e
   */
  eventSlideoff(dragger, el, e) {
    const self = this
    const options = self.options
    // @FIX targets handler
    const slides = self.getTargets(el)
    const slide = slides[0]
    // only one call per group
    if (Xt.dataStorage.get(slide, self.componentNamespace + 'SlideoffDone')) {
      return
    }
    Xt.dataStorage.set(slide, self.componentNamespace + 'SlideoffDone', true)
    requestAnimationFrame(() => {
      Xt.dataStorage.remove(slide, self.componentNamespace + 'SlideoffDone')
    })
    // disable links not active slide
    for (const target of slides) {
      if (options.jump) {
        target.classList.add('xt-links-none')
      }
    }
  }

  //
  // logic
  //

  /**
   * element drag on logic
   * @param {Node|HTMLElement|EventTarget|Window} dragger
   * @param {Event} e
   */
  logicDragstart(dragger, e) {
    const self = this
    // disabled
    if (self.disabled && !self.initial) {
      return
    }
    // save event
    if (e.detail.wheelX !== undefined) {
      self.detail.dragStart = e.detail.wheelX
    } else if (e.clientX !== undefined) {
      self.detail.dragStart = e.clientX
    } else if (e.touches && e.touches.length) {
      self.detail.dragStart = e.touches[0].clientX
    }
    // auto
    self.eventAutopause()
    // prevent dragging animation
    dragger.classList.add('duration-none')
    // logic
    self.detail.dragVelocity = null
    self.detail.dragVelocityNext = null
    // listener dispatch
    if (!self.initial) {
      dragger.dispatchEvent(new CustomEvent('dragstart.xt'))
    }
  }

  /**
   * element drag off logic
   * @param {Node|HTMLElement|EventTarget|Window} dragger
   * @param {Event} e
   */
  logicDragend(dragger, e) {
    const self = this
    // disabled
    if (self.disabled && !self.initial) {
      return
    }
    // save event
    if (e.detail.wheelX !== undefined) {
      self.detail.dragCurrent = e.detail.wheelX
    } else if (e.clientX !== undefined) {
      self.detail.dragCurrent = e.clientX
    } else if (e.touches && e.touches.length) {
      self.detail.dragCurrent = e.touches[0].clientX
    }
    // logic
    self.logicDragfriction(dragger, e)
    // listener dispatch
    if (!self.initial) {
      dragger.dispatchEvent(new CustomEvent('dragend.xt'))
    }
  }

  /**
   * element drag friction logic
   * @param {Node|HTMLElement|EventTarget|Window} dragger
   * @param {Event} e
   */
  logicDragfriction(dragger, e) {
    const self = this
    const options = self.options
    // friction
    if (Math.abs(self.detail.dragVelocity) > options.drag.frictionLimit) {
      // disable dragger
      dragger.classList.add('xt-pointer-events-none')
      for (const nav of self.navs) {
        nav.classList.add('xt-pointer-events-none')
      }
      // drag
      self.logicDrag(dragger, e, true)
      // loop
      requestAnimationFrame(() => {
        self.logicDragfriction(dragger, e)
      })
    } else {
      // disable links
      dragger.classList.remove('xt-links-none')
      dragger.classList.remove('xt-jumps-none')
      // dragend
      requestAnimationFrame(self.logicDragfrictionend.bind(self).bind(e, dragger))
    }
  }

  /**
   * element drag logic
   * @param {Node|HTMLElement|EventTarget|Window} dragger
   * @param {Event} e
   * @param {Boolean} friction
   */
  logicDrag(dragger, e, friction = false) {
    const self = this
    const options = self.options
    // disabled
    if (self.disabled && !self.initial) {
      return
    }
    // save event
    if (e.detail.wheelX !== undefined) {
      self.detail.dragCurrent = e.detail.wheelX
    } else if (e.clientX !== undefined) {
      self.detail.dragCurrent = e.clientX
    } else if (e.touches && e.touches.length) {
      self.detail.dragCurrent = e.touches[0].clientX
    }
    // calculate
    let dragPos = self.detail.dragPosReal
    const dragPosCurrent = self.detail.dragPosCurrent || 0
    const sign = Math.sign(self.detail.dragVelocity)
    if (friction && options.drag.friction) {
      // momentum
      const fncFriction = options.drag.friction
      self.detail.dragVelocity = fncFriction(Math.abs(self.detail.dragVelocity)) * sign
      // no momentum when stopping
      if (self.detail.dragDate) {
        const dateDiff = new Date() - self.detail.dragDate
        self.detail.dragDate = null
        if (dateDiff > options.drag.timeLimit) {
          self.detail.dragVelocity = 0
        }
      }
      // on friction
      dragPos = dragPos + self.detail.dragVelocity
      self.detail.dragCurrent = dragPos + self.detail.dragStart - dragPosCurrent
    } else {
      // momentum
      self.detail.dragDate = new Date()
      // on normal drag
      const dragPosOld = dragPos || 0
      dragPos = dragPosCurrent + (self.detail.dragCurrent - self.detail.dragStart) * options.drag.factor
      // keep some velocity (median value of previous frame and not current frame)
      self.detail.dragVelocity = (self.detail.dragVelocity + self.detail.dragVelocityNext) / 2
      self.detail.dragVelocityNext = dragPos - dragPosOld
    }
    // val
    self.detail.dragPosReal = dragPos
    self.detail.dragCurrentReal = self.detail.dragCurrent
    // check
    const dragDist = dragPos - dragPosCurrent
    if (Math.abs(dragDist) > options.drag.linkThreshold) {
      // disable links
      dragger.classList.add('xt-links-none')
      dragger.classList.add('xt-jumps-none')
    }
    // overflow
    if (options.drag.overflow) {
      const arr = self.targets.filter(x => !x.classList.contains('xt-wrap'))
      const first = arr[0]
      const last = arr[arr.length - 1]
      const min = Xt.dataStorage.get(first, self.componentNamespace + 'GroupPos')
      const max = Xt.dataStorage.get(last, self.componentNamespace + 'GroupPos')
      // overflow
      const fncOverflow = options.drag.overflow
      if (friction && options.drag.friction) {
        if (dragPos > min || dragPos < max) {
          self.detail.dragVelocity = fncOverflow(Math.abs(self.detail.dragVelocity)) * sign
        }
      } else {
        if (dragPos > min) {
          self.detail.dragVelocity = 0
          const overflow = dragPos - min
          dragPos = min + fncOverflow(overflow)
        } else if (dragPos < max) {
          self.detail.dragVelocity = 0
          const overflow = dragPos - max
          dragPos = max - fncOverflow(-overflow)
        }
      }
    }
    // val
    self.detail.dragCurrent = self.detail.dragCurrentReal - (self.detail.dragPosReal - dragPos) // dragCurrent when overflowing
    self.detail.dragPosOld = self.detail.dragPos
    self.detail.dragPos = dragPos
    // drag position
    if (self.initial) {
      self.dragger.classList.add('transition-none')
    }
    if (options.drag.drag) {
      dragger.style.transform = 'translateX(' + self.detail.dragPos + 'px)'
    }
    if (self.initial) {
      self.dragger.classList.remove('transition-none')
    }
    // listener dispatch
    if (!self.initial) {
      dragger.dispatchEvent(new CustomEvent('drag.xt'))
    }
  }

  /**
   * element drag friction off logic
   * @param {Node|HTMLElement|EventTarget|Window} dragger
   * @param {Event} e
   */
  logicDragfrictionend(dragger, e) {
    const self = this
    const options = self.options
    const dragPosCurrent = self.detail.dragPosCurrent || 0
    // prevent dragging animation
    dragger.classList.remove('duration-none')
    // activate or reset
    const draggerWidth = self.detail.draggerWidth
    const dragDist = self.detail.dragPosReal - dragPosCurrent
    if (Math.abs(dragDist) > options.drag.threshold) {
      // get nearest
      let found = self.currentIndex
      for (const [i, group] of self.groupMq.entries()) {
        for (const slideCheck of group) {
          let check
          if (options.align === 'center') {
            check = self.detail.dragPos - draggerWidth / 2 + slideCheck.offsetLeft
          } else if (options.align === 'left') {
            check = self.detail.dragPos + slideCheck.offsetLeft
          } else if (options.align === 'right') {
            check = self.detail.dragPos - draggerWidth + slideCheck.offsetLeft + slideCheck.offsetWidth
          }
          if (check < 0 && Xt.visible(slideCheck)) {
            found = i
          }
        }
      }
      // goTo with force
      if (found === self.currentIndex) {
        // change at least one
        if (Math.sign(dragDist) < 0) {
          self.goToNext(1, true)
        } else {
          self.goToPrev(1, true)
        }
      } else {
        // goToNum
        self.goToNum(found, true)
      }
    } else {
      // val
      self.detail.dragPosOld = self.detail.dragPos
      self.detail.dragPos = self.detail.dragPosCurrent
      // disable drag and links
      Xt.animTimeout(dragger, () => {
        // disable dragger
        dragger.classList.remove('xt-pointer-events-none')
        for (const nav of self.navs) {
          nav.classList.remove('xt-pointer-events-none')
        }
      })
      // drag position
      if (self.initial) {
        self.dragger.classList.add('transition-none')
      }
      dragger.style.transform = 'translateX(' + self.detail.dragPosCurrent + 'px)'
      if (self.initial) {
        self.dragger.classList.remove('transition-none')
      }
      // listener dispatch
      if (!self.initial) {
        dragger.dispatchEvent(new CustomEvent('dragreset.xt'))
      }
    }
  }

  //
  // status
  //

  /**
   * disable
   */
  disable() {
    super.disable()
    const self = this
    // disable
    if (self.dragger) {
      self.dragger.classList.add('transition-none')
      requestAnimationFrame(() => {
        self.dragger.style.transform = ''
      })
    }
    if (self.autoHeight) {
      self.autoHeight.classList.remove('xt-autoHeight')
      requestAnimationFrame(() => {
        self.autoHeight.style.height = ''
      })
    }
  }

  /**
   * disable
   */
  enable() {
    super.enable()
    const self = this
    // enable
    if (self.dragger) {
      self.dragger.classList.remove('transition-none')
    }
  }

  //
  // util
  //

  /**
   * destroy
   */
  destroy(weak = false) {
    const self = this
    const dragger = self.dragger
    // clean pagination
    self.destroyPags()
    // clean wraps
    self.destroyWraps()
    // autoHeight
    if (self.autoHeight) {
      self.autoHeight.style.height = ''
    }
    // dragger
    if (dragger) {
      // links
      dragger.classList.remove('xt-links-none')
      // links
      dragger.classList.add('xt-jumps-none')
      // grab
      dragger.classList.remove('xt-grab')
      // drag
      dragger.classList.add('transition-none')
      dragger.style.transform = ''
      requestAnimationFrame(() => {
        dragger.classList.remove('transition-none')
      })
    }
    // super
    super.destroy()
  }

  /**
   * destroy pagination
   */
  destroyPags() {
    const self = this
    // clean pagination
    if (self.pags && self.pags.length) {
      for (const pag of self.pags) {
        for (const oldPag of pag) {
          oldPag.remove()
        }
      }
    }
  }

  /**
   * destroy wraps
   */
  destroyWraps() {
    const self = this
    const options = self.options
    // drag wrap
    if (self.dragger && options.drag.wrap) {
      // clear elements
      for (const el of self.elements.filter(x => x.classList.contains('xt-wrap'))) {
        el.remove()
      }
      self.elements = self.elements.filter(x => !x.classList.contains('xt-wrap'))
      // clear targets
      for (const tr of self.targets.filter(x => x.classList.contains('xt-wrap'))) {
        tr.remove()
      }
      self.targets = self.targets.filter(x => !x.classList.contains('xt-wrap'))
    }
  }

  //
}

//
// options
//

Slider.componentName = 'xt-slider'
Slider.optionsDefault = {
  elements: '[data-xt-pag]',
  targets: '.slide',
  on: 'click',
  min: 1,
  max: 1,
  instant: true,
  class: 'active active-slider',
  loop: true,
  jump: true,
  mediaLoadedReinit: true,
  navigation: '[data-xt-nav]',
  wheel: {
    selector: false,
    block: true,
    limit: false,
    transform: true,
    horizontal: true,
    factor: 1,
    friction: delta => {
      return delta / 9
    },
    frictionLimit: 1.5,
  },
  keyboard: {
    selector: '.slides',
  },
  aria: {
    labelledby: false,
  },
  // slider only
  autoHeight: '.slides',
  groupMq: { all: 0.8 },
  align: 'center',
  contain: false,
  pagination: '.slider-pagination',
  drag: {
    drag: true,
    wrap: false,
    dragger: '.slides-inner',
    threshold: 50,
    linkThreshold: 50,
    factor: 1,
    friction: velocity => {
      return Math.pow(velocity, 0.9)
    },
    frictionLimit: 1.5,
    overflow: overflow => {
      return Math.pow(overflow, 0.73)
    },
    timeLimit: 25,
  },
}
Xt.optionsGlobal[Slider.componentName] = {}

//
// export
//

Xt.Slider = Slider

//
// observe
//

Xt.mount.push({
  matches: '[data-' + Xt.Slider.componentName + ']',
  mount: object => {
    // vars

    const optionsMarkup = object.getAttribute('data-' + Xt.Slider.componentName)
    const options = optionsMarkup ? RJSON.parse(optionsMarkup) : {}

    // init

    let self = new Xt.Slider(object, options)

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  },
})
