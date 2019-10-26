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
  constructor (object, optionsCustom = {}) {
    super(object, optionsCustom)
  }

  //
  // init
  //

  /**
   * init elements, targets and currents
   */
  initScope () {
    const self = this
    const options = self.options
    // targets
    self.initScopeTargets()
    // only one call per group
    for (const slide of self.targets) {
      Xt.dataStorage.remove(slide, self.componentNamespace + 'SlideOnDone')
    }
    // dragger
    if (options.drag && options.drag.dragger) {
      self.dragger = self.object.querySelector(options.drag.dragger)
      self.destroyElements.push(self.dragger)
    }
    // autoHeight
    if (options.autoHeight) {
      self.autoHeight = self.object.querySelector(options.autoHeight)
      self.autoHeight.classList.add('xt-autoHeight')
    }
    // initSliderGroup
    self.initSliderGroup()
    // initSliderPags
    self.initSliderPags()
    // initSliderPos
    if (self.dragger) {
      self.initSliderPos()
    }
    // elements
    self.initScopeElements()
  }

  /**
   * init slider group
   */
  initSliderGroup () {
    const self = this
    const options = self.options
    // not when empty
    if (!self.targets.length) {
      return false;
    }
    // @FIX disable slider if not overflowing
    self.object.classList.remove('slider--nooverflow')
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
    // width
    const draggerWidth = self.dragger ? self.dragger.offsetWidth : self.object.offsetWidth
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
    for (const target of self.targets) {
      let targetWidth = target.offsetWidth
      if (targetWidth === 0) { // when display none
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
      // assign group
      self.groupMq[currentGroup].push(target)
      target.setAttribute('data-xt-group', self.namespace + '-' + currentGroup)
    }
    self.groupMqInitial = self.groupMq
    // @FIX position values negative margins
    self.detail.fixNegativeMargin = self.groupMq[0][0].offsetLeft
    // @FIX disable slider if not overflowing
    if (totalCount >= 0) {
      const afterInitDisable = function () {
        // disable
        self.object.classList.add('slider--nooverflow')
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
        const cloneSlide = function (slide) {
          const cloned = slide.cloneNode(true)
          Xt.dataStorage.set(cloned, 'xt' + self.componentNamespace + 'cloneSource', slide)
          cloned.classList.add('xt-clone', 'xt-wrap')
          cloned.classList.remove(...self.classes, ...self.classesIn, ...self.classesOut, ...self.classesInitial, ...self.classesInverse)
          return cloned
        }
        // wrapLast
        const wrapLastFunction = function () {
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
        const wrapFirstFunction = function () {
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
  initSliderPags () {
    const self = this
    const options = self.options
    // not when empty
    if (!self.targets.length) {
      return false;
    }
    // generate elements
    if (options.pagination) {
      const pags = self.object.querySelectorAll(options.pagination)
      if (!pags.length) {
        console.error('Error: Xt.Slider pagination not found for', self.object)
      }
      // pags
      self.pags = self.pags ? self.pags : []
      for (const [z, pag] of pags.entries()) {
        // clean
        if (self.pags[z]) {
          for (const oldPag of self.pags[z]) {
            oldPag.remove()
          }
        }
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
              replace += slide.querySelector('.slide_pagination-content').innerHTML
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
              self.pags[z][i].classList.add('xt-clone', 'xt-wrap', 'display--none')
            }
          }
        }
      }
    }
  }

  /**
   * init slider group positions
   */
  initSliderPos () {
    const self = this
    const options = self.options
    // reset done
    for (const slide of self.targets) {
      Xt.dataStorage.remove(slide, self.componentNamespace + 'GroupPosDone')
    }
    // set pos
    const draggerWidth = self.dragger.offsetWidth
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
          const cloneSource = Xt.dataStorage.get(target, 'xt' + self.componentNamespace + 'cloneSource')
          slideLeft = target.offsetLeft < slideLeft ? slide.offsetLeft : slideLeft
          if (cloneSource) {
            // @FIX xt-wrap clone offsetWidth on resize
            const w = cloneSource.offsetWidth
            slideWidth += w
            target.children[0].style.width = w + 'px'
            // @FIX xt-wrap clone offsetHeight on autoHeight
            slideHeightTemp = cloneSource.children[0].offsetHeight
          } else {
            slideWidth += target.offsetWidth
            slideHeightTemp = target.children[0].offsetHeight
          }
          slidesWidth += slideWidth
          slideHeight = slideHeightTemp > slideHeight ? slideHeightTemp : slideHeight
        }
        for (const target of targets) {
          Xt.dataStorage.set(target, self.componentNamespace + 'GroupPosDone', true)
          Xt.dataStorage.set(target, self.componentNamespace + 'GroupHeight', slideHeight)
        }
        // pos with alignment
        let pos
        if (!self.object.classList.contains('slider--nooverflow')) { // @FIX disable slider if not overflowing
          if (options.align === 'center') {
            pos = draggerWidth / 2 - slideLeft - slideWidth / 2
          } else if (options.align === 'left') {
            pos = -slideLeft
          } else if (options.align === 'right') {
            pos = draggerWidth - slideLeft - slideWidth
          }
        }
        // console.debug(pos, draggerWidth, slideWidth, slide);
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
    if (options.contain &&
      slidesWidth > draggerWidth) { // only if slides overflow dragger
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
  initEvents () {
    super.initEvents()
    const self = this
    const options = self.options
    const dragger = self.dragger
    // targets
    for (const slide of self.targets) {
      // disable links not active slide
      if (options.jump) {
        slide.classList.add('links--none')
      }
      // slide on
      const slideOnHandler = Xt.dataStorage.put(slide, 'on' + '.' + self.namespace,
        self.eventSlideOnHandler.bind(self).bind(self, dragger, slide))
      slide.addEventListener('on.xt', slideOnHandler, true) // @FIX useCapture for custom events order on re-init
      // slide off
      const slideOffHandler = Xt.dataStorage.put(slide, 'off' + '.' + self.namespace,
        self.eventSlideOffHandler.bind(self).bind(self, dragger, slide))
      slide.addEventListener('off.xt', slideOffHandler, true) // @FIX useCapture for custom events order on re-init
    }
    // dragger
    if (options.drag) {
      // drag start
      const dragstartHandler = Xt.dataStorage.put(dragger, 'mousedown touchstart' + '.' + self.namespace,
        self.eventDragstartHandler.bind(self).bind(self, dragger))
      const events = ['mousedown', 'touchstart']
      for (const event of events) {
        dragger.addEventListener(event, dragstartHandler, Xt.passiveSupported ? { passive: true } : false)
      }
      // grab
      if (!self.disabled) {
        dragger.classList.add('grab')
      } else {
        dragger.classList.remove('grab')
      }
      // wheel
      if (options.wheel && options.wheel.selector) {
        const wheel = self.detail.wheel
        wheel.addEventListener('wheelstart.xt', self.logicDragstart.bind(self).bind(self, dragger))
        wheel.addEventListener('wheel.xt', self.logicDrag.bind(self).bind(self, dragger))
        wheel.addEventListener('wheelend.xt', self.logicDragend.bind(self).bind(self, dragger))
        wheel.addEventListener('wheelend.xt', self.logicDragfrictionend.bind(self).bind(self, dragger))
      }
    }
    // resize
    const resizeHandler = Xt.dataStorage.put(window, 'resize' + '.' + self.namespace,
      self.eventResizeHandler.bind(self).bind(self))
    addEventListener('resize', resizeHandler)
  }

  //
  // handler
  //

  /**
   * slide on handler
   * @param {Node|HTMLElement|EventTarget|Window} dragger
   * @param {Node|HTMLElement|EventTarget|Window} slide
   * @param {Event} e
   */
  eventSlideOnHandler (dragger, slide, e) {
    const self = this
    // handler
    if (slide === e.target) { // @FIX on.xt and off.xt event bubbles
      self.eventSlideOn(dragger, e)
    }
  }

  /**
   * slide off handler
   * @param {Node|HTMLElement|EventTarget|Window} dragger
   * @param {Node|HTMLElement|EventTarget|Window} slide
   * @param {Event} e
   */
  eventSlideOffHandler (dragger, slide, e) {
    const self = this
    // handler
    if (slide === e.target) { // @FIX on.xt and off.xt event bubbles
      self.eventSlideOff(dragger, e)
    }
  }

  /**
   * element drag on handler
   * @param {Node|HTMLElement|EventTarget|Window} dragger
   * @param {Event} e
   */
  eventDragstartHandler (dragger, e) {
    const self = this
    const options = self.options
    // handler
    if (!e.button || e.button !== 2) { // not right click or it gets stuck
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
        const dragendHandler = Xt.dataStorage.put(dragger, 'mouseup touchend' + '.' + self.namespace,
          self.eventDragendHandler.bind(self).bind(self, dragger))
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
  eventDragendHandler (dragger, e) {
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
  eventDragstart (dragger, e) {
    const self = this
    // event move
    const dragHandler = Xt.dataStorage.put(dragger, 'mousemove touchmove' + '.' + self.namespace,
      self.eventDragHandler.bind(self).bind(self, dragger))
    const events = ['mousemove', 'touchmove']
    for (const event of events) {
      dragger.addEventListener(event, dragHandler)
    }
    // logic
    self.logicDragstart(dragger, e)
  }

  /**
   * element drag off
   * @param {Node|HTMLElement|EventTarget|Window} dragger
   * @param {Event} e
   */
  eventDragend (dragger, e) {
    const self = this
    // event off
    const dragendHandler = Xt.dataStorage.get(dragger, 'mouseup touchend' + '.' + self.namespace)
    const eventsoff = ['mouseup', 'touchend']
    for (const event of eventsoff) {
      removeEventListener(event, dragendHandler)
    }
    // event move
    const dragHandler = Xt.dataStorage.get(dragger, 'mousemove touchmove' + '.' + self.namespace)
    const eventsmove = ['mousemove', 'touchmove']
    for (const event of eventsmove) {
      dragger.removeEventListener(event, dragHandler)
    }
    // logic
    self.logicDragend(dragger, e)
  }

  /**
   * element drag handler
   * @param {Node|HTMLElement|EventTarget|Window} dragger
   * @param {Event} e
   */
  eventDragHandler (dragger, e) {
    const self = this
    // logic
    self.logicDrag(dragger, e)
  }

  /**
   * resize
   * @param {Event} e
   */
  eventResizeHandler (e) {
    const self = this
    // reinit
    if (!self.initial) {
      Xt.eventDelay(e, self.object, function () {
        self.initLogic()
      }, self.componentNamespace + 'Resize')
    }
  }

  //
  // event
  //

  /**
   * slide on
   * @param {Node|HTMLElement|EventTarget|Window} dragger
   * @param {Event} e
   */
  eventSlideOn (dragger, e) {
    const self = this
    const options = self.options
    const slide = e.target
    // only one call per group
    if (Xt.dataStorage.get(slide, self.componentNamespace + 'SlideOnDone')) {
      return
    }
    const targets = self.getTargets(slide)
    for (const target of targets) {
      Xt.dataStorage.set(target, self.componentNamespace + 'SlideOnDone', true)
    }
    // autoHeight
    if (self.autoHeight) {
      let slideHeight = slide.children[0].offsetHeight
      const groupHeight = Xt.dataStorage.get(slide, self.componentNamespace + 'GroupHeight')
      slideHeight = groupHeight > slideHeight ? groupHeight : slideHeight
      slideHeight += 'px'
      if (self.autoHeight.style.height !== slideHeight) {
        self.autoHeight.style.height = slideHeight
        // listener dispatch
        const detail = self.eDetailSet()
        slide.dispatchEvent(new CustomEvent('autoHeight.xt', { bubbles: true, detail: detail }))
      }
    }
    // val
    self.detail.xPos = self.detail.xPosCurrent = self.detail.xPosReal = Xt.dataStorage.get(slide, self.componentNamespace + 'GroupPos')
    // dragger
    if (dragger) {
      // prevent alignment animation
      dragger.classList.remove('duration-none')
      // initial or resizing
      if (self.initial) {
        // prevent alignment animation
        dragger.classList.add('duration-none')
        requestAnimationFrame(function () {
          dragger.classList.remove('duration-none')
        })
      }
      // drag position
      dragger.style.transform = 'translateX(' + self.detail.xPos + 'px)'
      // disable dragger
      dragger.classList.add('pointer-events--none')
      for (const nav of self.navs) {
        nav.classList.add('pointer-events--none')
      }
      Xt.animTimeout(dragger, function () {
        dragger.classList.remove('pointer-events--none')
        for (const nav of self.navs) {
          nav.classList.remove('pointer-events--none')
        }
      })
      // disable links
      dragger.classList.remove('jumps--none')
      dragger.classList.remove('links--none')
      // drag wrap
      if (self.dragger && options.drag.wrap) {
        const min = self.groupMqFirst.length
        const max = self.groupMqFirst.length + self.groupMqInitial.length - 1
        if (self.initial) {
          // @FIX initial activation
          if (self.currentIndex < min) {
            requestAnimationFrame(function () {
              self.initial = true
              self.goToIndex(min, true)
              self.initialCurrents = self.getCurrents().slice(0) // @FIX initialCurrents
            })
          }
        } else {
          // @FIX wrap with initial
          Xt.animTimeout(dragger, function () {
            if (!self.initial) {
              if (self.currentIndex < min) {
                self.initial = true
                self.goToIndex(max + self.currentIndex - min + 1, true) // wrap around xt-wrap items
              } else if (self.currentIndex > max) {
                self.initial = true
                self.goToIndex(min + self.currentIndex - max - 1, true) // wrap around xt-wrap items
              }
            }
          }, 'wrap')
        }
      }
    }
    // disable links not active slide
    if (options.jump) {
      slide.classList.remove('links--none')
    }
  }

  /**
   * slide off
   * @param {Node|HTMLElement|EventTarget|Window} dragger
   * @param {Event} e
   */
  eventSlideOff (dragger, e) {
    const self = this
    const options = self.options
    const slide = e.target
    // disable links not active slide
    if (options.jump) {
      slide.classList.add('links--none')
    }
    // only one call per group
    const targets = self.getTargets(slide)
    for (const target of targets) {
      Xt.dataStorage.remove(target, self.componentNamespace + 'SlideOnDone')
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
  logicDragstart (dragger, e) {
    const self = this
    // disabled
    if (self.disabled && !self.initial) {
      return
    }
    // save event
    if (e.detail.wheelX !== undefined) {
      self.detail.xStart = e.detail.wheelX
    } else if (e.clientX !== undefined) {
      self.detail.xStart = e.clientX
    } else if (e.touches && e.touches.length) {
      self.detail.xStart = e.touches[0].clientX
    }
    // auto
    self.eventAutoPause()
    // prevent dragging animation
    dragger.classList.add('duration-none')
    // logic
    self.detail.xVelocity = null
    self.detail.xVelocityNext = null
    // listener dispatch
    if (!self.initial) {
      const detail = self.eDetailSet(e)
      dragger.dispatchEvent(new CustomEvent('dragstart.xt.slider', { detail: detail }))
    }
  }

  /**
   * element drag off logic
   * @param {Node|HTMLElement|EventTarget|Window} dragger
   * @param {Event} e
   */
  logicDragend (dragger, e) {
    const self = this
    // disabled
    if (self.disabled && !self.initial) {
      return
    }
    // save event
    if (e.detail.wheelX !== undefined) {
      self.detail.xCurrent = e.detail.wheelX
    } else if (e.clientX !== undefined) {
      self.detail.xCurrent = e.clientX
    } else if (e.touches && e.touches.length) {
      self.detail.xCurrent = e.touches[0].clientX
    }
    // auto
    self.eventAutoStart()
    // logic
    self.logicDragfriction(dragger, e)
    // listener dispatch
    if (!self.initial) {
      const detail = self.eDetailSet(e)
      dragger.dispatchEvent(new CustomEvent('dragend.xt.slider', { detail: detail }))
    }
  }

  /**
   * element drag friction logic
   * @param {Node|HTMLElement|EventTarget|Window} dragger
   * @param {Event} e
   */
  logicDragfriction (dragger, e) {
    const self = this
    const options = self.options
    // friction
    if (Math.abs(self.detail.xVelocity) > options.drag.frictionLimit) {
      // disable dragger
      dragger.classList.add('pointer-events--none')
      for (const nav of self.navs) {
        nav.classList.add('pointer-events--none')
      }
      // drag
      self.logicDrag(dragger, e, true)
      // loop
      requestAnimationFrame(function () {
        self.logicDragfriction(dragger, e)
      })
    } else {
      // disable links
      dragger.classList.remove('links--none')
      dragger.classList.remove('jumps--none')
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
  logicDrag (dragger, e, friction = false) {
    const self = this
    const options = self.options
    // disabled
    if (self.disabled && !self.initial) {
      return
    }
    // save event
    if (e.detail.wheelX !== undefined) {
      self.detail.xCurrent = e.detail.wheelX
    } else if (e.clientX !== undefined) {
      self.detail.xCurrent = e.clientX
    } else if (e.touches && e.touches.length) {
      self.detail.xCurrent = e.touches[0].clientX
    }
    // calculate
    let xPos = self.detail.xPosReal
    const xPosCurrent = self.detail.xPosCurrent || 0
    const sign = Math.sign(self.detail.xVelocity)
    if (friction && options.drag.friction) {
      // momentum
      const fncFriction = options.drag.friction
      self.detail.xVelocity = fncFriction(Math.abs(self.detail.xVelocity)) * sign
      // no momentum when stopping
      if (self.detail.dragDate) {
        const dateDiff = new Date() - self.detail.dragDate
        self.detail.dragDate = null
        if (dateDiff > options.drag.timeLimit) {
          self.detail.xVelocity = 0
        }
      }
      // on friction
      xPos = xPos + self.detail.xVelocity
      self.detail.xCurrent = xPos + self.detail.xStart - xPosCurrent
    } else {
      // momentum
      self.detail.dragDate = new Date()
      // on normal drag
      const xPosOld = xPos || 0
      xPos = xPosCurrent + (self.detail.xCurrent - self.detail.xStart) * options.drag.factor
      // keep some velocity (median value of previous frame and not current frame)
      self.detail.xVelocity = (self.detail.xVelocity + self.detail.xVelocityNext) / 2
      self.detail.xVelocityNext = xPos - xPosOld
    }
    // val
    self.detail.xPosReal = xPos
    self.detail.xCurrentReal = self.detail.xCurrent
    // check
    const xDist = xPos - xPosCurrent
    if (Math.abs(xDist) > options.drag.linkThreshold) {
      // disable links
      dragger.classList.add('links--none')
      dragger.classList.add('jumps--none')
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
        if (xPos > min || xPos < max) {
          self.detail.xVelocity = fncOverflow(Math.abs(self.detail.xVelocity)) * sign
        }
      } else {
        if (xPos > min) {
          self.detail.xVelocity = 0
          const overflow = xPos - min
          xPos = min + fncOverflow(overflow)
        } else if (xPos < max) {
          self.detail.xVelocity = 0
          const overflow = xPos - max
          xPos = max - fncOverflow(-overflow)
        }
      }
    }
    // val
    self.detail.xCurrent = self.detail.xCurrentReal - (self.detail.xPosReal - xPos) // xCurrent when overflowing
    self.detail.xPosOld = self.detail.xPos
    self.detail.xPos = xPos
    // drag position
    if (self.initial) {
      self.dragger.classList.add('transition-none')
    }
    if (options.drag.drag) {
      dragger.style.transform = 'translateX(' + self.detail.xPos + 'px)'
    }
    if (self.initial) {
      self.dragger.classList.remove('transition-none')
    }
    // listener dispatch
    if (!self.initial) {
      const detail = self.eDetailSet(e)
      dragger.dispatchEvent(new CustomEvent('drag.xt.slider', { detail: detail }))
    }
  }

  /**
   * element drag friction off logic
   * @param {Node|HTMLElement|EventTarget|Window} dragger
   * @param {Event} e
   */
  logicDragfrictionend (dragger, e) {
    const self = this
    const options = self.options
    const xPosCurrent = self.detail.xPosCurrent || 0
    // prevent dragging animation
    dragger.classList.remove('duration-none')
    // only one call per group
    const currents = self.getCurrents()
    for (const current of currents) {
      for (const target of self.getTargets(current)) {
        Xt.dataStorage.remove(target, self.componentNamespace + 'SlideOnDone')
      }
    }
    // activate or reset
    const draggerWidth = self.dragger.offsetWidth
    const xDist = self.detail.xPosReal - xPosCurrent
    if (Math.abs(xDist) > options.drag.threshold) {
      // get nearest
      let found = self.currentIndex
      for (const [i, group] of self.groupMq.entries()) {
        for (const slideCheck of group) {
          let check
          if (options.align === 'center') {
            check = self.detail.xPos - draggerWidth / 2 + slideCheck.offsetLeft
          } else if (options.align === 'left') {
            check = self.detail.xPos + slideCheck.offsetLeft
          } else if (options.align === 'right') {
            check = self.detail.xPos - draggerWidth + slideCheck.offsetLeft + slideCheck.offsetWidth
          }
          if (check < 0 && Xt.visible(slideCheck)) {
            found = i
          }
        }
      }
      // goTo with force
      if (found === self.currentIndex) {
        // change at least one
        if (Math.sign(xDist) < 0) {
          self.goToNext(1, true)
        } else {
          self.goToPrev(1, true)
        }
      } else {
        // goToIndex
        self.goToIndex(found, true)
      }
    } else {
      // val
      self.detail.xPosOld = self.detail.xPos
      self.detail.xPos = self.detail.xPosCurrent
      // disable drag and links
      Xt.animTimeout(dragger, function () {
        // disable dragger
        dragger.classList.remove('pointer-events--none')
        for (const nav of self.navs) {
          nav.classList.remove('pointer-events--none')
        }
      })
      // drag position
      if (self.initial) {
        self.dragger.classList.add('transition-none')
      }
      dragger.style.transform = 'translateX(' + self.detail.xPosCurrent + 'px)'
      if (self.initial) {
        self.dragger.classList.remove('transition-none')
      }
      // listener dispatch
      if (!self.initial) {
        const detail = self.eDetailSet(e)
        dragger.dispatchEvent(new CustomEvent('dragreset.xt.slider', { detail: detail }))
      }
    }
  }
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
  loop: true,
  jump: true,
  imageLoadedInit: true,
  navigation: '[data-xt-nav]',
  wheel: {
    selector: false,
    block: true,
    limit: false,
    transform: true,
    horizontal: true,
    factor: 1,
    friction: function (delta) {
      return delta / 9
    },
    frictionLimit: 1.5
  },
  keyboard: {
    selector: '.slides'
  },
  aria: {
    labelledby: false
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
    friction: function (velocity) {
      return Math.pow(velocity, 0.9)
    },
    frictionLimit: 1.5,
    overflow: function (overflow) {
      return Math.pow(overflow, 0.73)
    },
    timeLimit: 25
  }
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
  mount: function (object) {
    // vars

    const optionsMarkup = object.getAttribute('data-' + Xt.Slider.componentName)
    const options = optionsMarkup ? RJSON.parse(optionsMarkup) : {}

    // init

    let self = new Xt.Slider(object, options)

    // unmount

    return function unmount () {
      self.destroy()
      self = null
    }
  }
})
