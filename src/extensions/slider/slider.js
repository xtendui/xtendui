import { Xt } from 'xtend-library'
import 'xtend-library/src/core/toggle/toggle.js'
import JSON5 from 'json5'

/**
 * Slider
 */
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
    }
    // @FIX performances
    self.detail.objectWidth = self.object.offsetWidth
    if (self.dragger) {
      self.detail.draggerWidth = self.dragger.offsetWidth
    }
    // targets
    self.initScopeTargets()
    // autoHeight and keepHeight
    if (options.autoHeight) {
      self.autoHeight = self.object.querySelector(options.autoHeight)
    }
    if (options.keepHeight) {
      self.keepHeight = self.object.querySelector(options.keepHeight)
    }
    // initSliderGroup
    self.initSliderGroup()
    // initSliderPags
    self.initSliderPags()
    // elements
    self.initScopeElements()
  }

  /**
   * init start
   * @param {Boolean} saveCurrents
   */
  initStart(saveCurrents = false) {
    const self = this
    // @fix raf because after .xt custom listeners
    requestAnimationFrame(() => {
      // initSliderPos
      if (self.dragger) {
        self.initSliderPos()
      }
    })
    // super
    super.initStart(saveCurrents)
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
    self.object.classList.remove('xt-overflow-auto')
    // drag wrap
    self.destroyWraps()
    // @FIX performances
    self.detail.objectWidth = self.object.offsetWidth
    if (self.dragger) {
      self.detail.draggerWidth = self.dragger.offsetWidth
      self.detail.draggerLeft = self.dragger.offsetLeft
    }
    for (const slide of self.targets) {
      Xt.dataStorage.set(slide, self.componentNamespace + 'SlideLeft', slide.offsetLeft)
      Xt.dataStorage.set(slide, self.componentNamespace + 'SlideWidth', slide.offsetWidth)
    }
    // width
    const draggerWidth = self.dragger ? self.detail.draggerWidth : self.detail.objectWidth
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
      let targetWidth = Xt.dataStorage.get(target, self.componentNamespace + 'SlideWidth')
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
    self.detail.fixNegativeMargin = Xt.dataStorage.get(self.groupMq[0][0], self.componentNamespace + 'SlideLeft')
    // @FIX disable slider if not overflowing
    if (options.overflowAuto && totalCount >= 0) {
      // disable
      self.object.classList.add('xt-overflow-auto')
    }
    // drag wrap
    const wrapFirst = []
    const wrapLast = []
    const wrapMaxWidth = -draggerWidth * (options.drag.wrap - 1)
    let wrapLastCountIteration = 0
    let wrapFirstCountIteration = 0
    if (self.dragger && options.drag.wrap) {
      const container = self.targets[0].parentNode
      if (Xt.debug === true) {
        if (!options.loop) {
          console.debug('Xt.debug: Xt.Slider needs "loop": true when using "drag": {"wrap": true}', self.object)
        }
        if (options.contain) {
          console.debug('Xt.debug: Xt.Slider cannot use "contain": true when using "drag": {"wrap": true}', self.object)
        }
      }
      const cloneSlide = (slide) => {
        const cloned = slide.cloneNode(true)
        cloned.classList.add('xt-clone', 'xt-wrap')
        cloned.classList.remove(...self.classes, ...self.classesIn, ...self.classesOut, ...self.classesInitial, ...self.classesInverse)
        return cloned
      }
      // wrapLast
      let wrapLastCount = draggerWidth
      const wrapLastFunction = () => {
        for (const [i, group] of self.groupMqInitial.entries()) {
          wrapLast.push([])
          for (const slide of group) {
            const cloned = cloneSlide(slide)
            wrapLast[wrapLastCountIteration * self.groupMqInitial.length + i].push(cloned)
            cloned.setAttribute('data-xt-group', self.namespace + '-' + 'wrapLast' + wrapLastCountIteration + i)
            self.targets.push(cloned)
            container.append(cloned)
            wrapLastCount -= Xt.dataStorage.get(slide, self.componentNamespace + 'SlideWidth')
          }
          if (wrapLastCount <= wrapMaxWidth) {
            return
          } else if (i === self.groupMqInitial.length - 1) {
            wrapLastCountIteration++
            wrapLastFunction()
          }
        }
      }
      wrapLastFunction()
      // wrapFirst
      let wrapFirstCount = draggerWidth
      self.groupMqInitial.reverse()
      const wrapFirstFunction = () => {
        for (const [i, group] of self.groupMqInitial.entries()) {
          wrapFirst.unshift([])
          for (const slide of group.reverse()) {
            const cloned = cloneSlide(slide)
            wrapFirst[0].unshift(cloned)
            cloned.setAttribute('data-xt-group', self.namespace + '-' + 'wrapFirst' + wrapFirstCountIteration + i)
            self.targets.unshift(cloned)
            container.prepend(cloned)
            wrapFirstCount -= Xt.dataStorage.get(slide, self.componentNamespace + 'SlideWidth')
          }
          if (wrapFirstCount <= wrapMaxWidth) {
            group.reverse() // reset reverse
            return
          } else if (i === self.groupMqInitial.length - 1) {
            wrapFirstCountIteration++
            group.reverse() // reset reverse
            wrapFirstFunction()
          }
        }
      }
      wrapFirstFunction()
      self.groupMqInitial.reverse() // reset reverse
      // @FIX performances
      for (const slide of self.targets) {
        // needs to recalculate not only xt-wrap but all targets
        Xt.dataStorage.set(slide, self.componentNamespace + 'SlideLeft', slide.offsetLeft)
        Xt.dataStorage.set(slide, self.componentNamespace + 'SlideWidth', slide.offsetWidth)
      }
    }
    self.groupMqFirst = wrapFirst
    self.groupMqLast = wrapLast
    self.groupMq = wrapFirst.concat(self.groupMq.concat(wrapLast))
    self.wrapIndex = self.groupMqFirst.length
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
        item.append(clone)
        let html = item.innerHTML
        const classes = []
        let regex = new RegExp('xt-content', 'ig')
        if (html.search(regex) !== -1) {
          let replace = ''
          for (const slide of group) {
            const content = slide.querySelector('.slide-pagination-content')
            if (content) {
              replace += '<span>' + content.innerHTML + '</span>'
            }
            const attr = slide.querySelector('[data-slide-pagination-class]')
            if (attr) {
              classes.push(attr.getAttribute('data-slide-pagination-class'))
            }
          }
          html = html.replace(regex, replace)
        }
        regex = new RegExp('xt-num', 'ig')
        if (html.search(regex) !== -1) {
          html = html.replace(regex, (i - self.wrapIndex + 1).toString())
        }
        regex = new RegExp('xt-tot', 'ig')
        if (html.search(regex) !== -1) {
          html = html.replace(regex, self.groupMqInitial.length.toString())
        }
        item.innerHTML = html
        if (classes.length) {
          item.children[0].classList.add(...classes)
        }
        item.children[0].setAttribute('data-xt-group', group[0].getAttribute('data-xt-group'))
        container.insertBefore(item.children[0], cloned)
        item.remove()
        self.pags[z][i] = container.querySelectorAll('[data-xt-pag].xt-clone')[i]
        // drag wrap
        if (self.dragger && options.drag.wrap) {
          const min = self.wrapIndex
          const max = self.wrapIndex + self.groupMqInitial.length - 1
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
    // @FIX performances
    const draggerWidth = self.detail.draggerWidth
    for (const slide of self.targets) {
      Xt.dataStorage.set(slide, self.componentNamespace + 'SlideHeight', slide.children[0].offsetHeight)
    }
    // slides pos
    let slidesWidth = 0
    for (const slide of self.targets) {
      // once per group
      if (!Xt.dataStorage.get(slide, self.componentNamespace + 'GroupPosDone')) {
        // vars
        const targets = self.getTargets(slide)
        let slideLeft = Infinity
        let slideWidth = 0
        let slideHeight = 0
        let slideHeightTemp = 0
        // vars
        for (const target of targets) {
          // @FIX performances
          const tl = Xt.dataStorage.get(target, self.componentNamespace + 'SlideLeft')
          const sl = Xt.dataStorage.get(slide, self.componentNamespace + 'SlideLeft')
          slideLeft = tl < slideLeft ? sl : slideLeft
          slideWidth += Xt.dataStorage.get(target, self.componentNamespace + 'SlideWidth')
          slideHeightTemp = Xt.dataStorage.get(target, self.componentNamespace + 'SlideHeight')
          slidesWidth += slideWidth
          slideHeight = slideHeightTemp > slideHeight ? slideHeightTemp : slideHeight
        }
        for (const target of targets) {
          Xt.dataStorage.set(target, self.componentNamespace + 'GroupPosDone', true)
          Xt.dataStorage.set(target, self.componentNamespace + 'GroupHeight', slideHeight)
        }
        // pos with alignment
        let pos
        if (!self.object.classList.contains('xt-overflow-auto')) {
          // @FIX disable slider if not overflowing
          if (options.align === 'center') {
            pos = draggerWidth / 2 - slideLeft - slideWidth / 2
          } else if (options.align === 'left') {
            pos = -slideLeft
          } else if (options.align === 'right') {
            pos = draggerWidth - slideLeft - slideWidth
          }
        }
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
      const slideFirstLeft = Xt.dataStorage.get(slideFirst, self.componentNamespace + 'SlideLeft')
      const slideLast = self.targets[self.targets.length - 1]
      const slideLastLeft = Xt.dataStorage.get(slideLast, self.componentNamespace + 'SlideLeft')
      const slideLastWidth = Xt.dataStorage.get(slideLast, self.componentNamespace + 'SlideWidth')
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
      const arr = self.targets.filter((x) => !x.classList.contains('xt-wrap'))
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
    // dragger
    if (options.drag && !options.drag.manual) {
      // @FIX prevent dragging links and images
      for (const img of self.dragger.querySelectorAll('img')) {
        const imgnodragHandler = Xt.dataStorage.put(img, 'mousedown/drag' + '/' + self.namespace, self.eventImgnodragHandler.bind(self))
        img.addEventListener('mousedown', imgnodragHandler)
      }
      // drag start
      const dragstartHandler = Xt.dataStorage.put(
        window,
        'mousedown touchstart/drag' + '/' + self.namespace,
        self.eventDragstartHandler.bind(self).bind(self, dragger)
      )
      const events = ['mousedown', 'touchstart']
      for (const event of events) {
        addEventListener(event, dragstartHandler, { passive: true })
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
    const reinitHandler = Xt.dataStorage.put(window, 'resize/reinit' + '/' + self.namespace, self.eventReinitHandler.bind(self).bind(self))
    addEventListener('resize', reinitHandler)
  }

  //
  // handler
  //

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
    // not when outside dragger
    if (!dragger.contains(e.target)) {
      return
    }
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
        const dragendHandler = Xt.dataStorage.put(
          window,
          'mouseup touchend/drag' + '/' + self.namespace,
          self.eventDragendHandler.bind(self).bind(self, dragger)
        )
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
    const dragHandler = Xt.dataStorage.put(window, 'mousemove touchmove/drag' + '/' + self.namespace, self.eventDragHandler.bind(self).bind(self, dragger))
    const events = ['mousemove', 'touchmove']
    for (const event of events) {
      addEventListener(event, dragHandler, { passive: false })
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
    const dragendHandler = Xt.dataStorage.get(window, 'mouseup touchend/drag' + '/' + self.namespace)
    const eventsoff = ['mouseup', 'touchend']
    for (const event of eventsoff) {
      removeEventListener(event, dragendHandler)
    }
    // event move
    const dragHandler = Xt.dataStorage.get(window, 'mousemove touchmove/drag' + '/' + self.namespace)
    const eventsmove = ['mousemove', 'touchmove']
    for (const event of eventsmove) {
      removeEventListener(event, dragHandler)
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
      // @FIX targets handler
      const slides = self.getTargets(element)
      const slide = slides[0]
      // only one call per group
      if (Xt.dataStorage.get(slide, self.componentNamespace + 'SlideonDone')) {
        return false
      }
      Xt.dataStorage.set(slide, self.componentNamespace + 'SlideonDone', true)
      requestAnimationFrame(() => {
        Xt.dataStorage.remove(slide, self.componentNamespace + 'SlideonDone')
      })
      // val
      self.detail.dragPos = self.detail.dragPosCurrent = self.detail.dragPosReal = Xt.dataStorage.get(slide, self.componentNamespace + 'GroupPos')
      // autoHeight and keepHeight
      if (self.autoHeight || (self.keepHeight && self.initial)) {
        let slideHeight = Xt.dataStorage.get(slide, self.componentNamespace + 'SlideHeight')
        const groupHeight = Xt.dataStorage.get(slide, self.componentNamespace + 'GroupHeight')
        slideHeight = groupHeight > slideHeight ? groupHeight : slideHeight
        if (slideHeight > 0) {
          slideHeight += 'px'
          if (self.autoHeight) {
            if (self.autoHeight.style.height !== slideHeight) {
              if (!self.initial) {
                self.autoHeight.classList.add('xt-autoHeight')
              }
              self.autoHeight.style.height = slideHeight
              // listener dispatch
              slide.dispatchEvent(new CustomEvent('autoheight.xt'))
            }
          }
          if (self.keepHeight) {
            if (self.initial) {
              self.keepHeight.style.height = slideHeight
            }
          }
        }
      }
      // dragger
      const dragger = self.dragger
      if (dragger && !options.drag.manual) {
        // prevent alignment animation
        dragger.classList.remove('duration-none')
        // initial or resizing
        if (self.initial) {
          // prevent alignment animation
          dragger.classList.add('duration-none')
          requestAnimationFrame(() => {
            dragger.classList.remove('duration-none')
          })
        }
        // drag position
        if (!options.drag.manual) {
          dragger.style.transform = 'translateX(' + self.detail.dragPos + 'px)'
        }
        // disable links not active slide
        Xt.animTimeout(
          dragger,
          () => {
            if (options.jump) {
              if (options.jumpOverflow) {
                const draggerTranslate = Xt.getTranslate(self.dragger)[0]
                for (const target of self.targets) {
                  const slideLeft = Xt.dataStorage.get(target, self.componentNamespace + 'SlideLeft')
                  const slideWidth = Xt.dataStorage.get(target, self.componentNamespace + 'SlideWidth')
                  const slideBound = slideLeft + slideWidth
                  if (slideLeft < -Math.ceil(draggerTranslate) || slideBound > self.detail.draggerWidth - draggerTranslate) {
                    target.classList.add('xt-links-none')
                    target.classList.remove('xt-jumps-none')
                  } else {
                    target.classList.add('xt-jumps-none')
                    target.classList.remove('xt-links-none')
                  }
                }
              } else {
                for (const target of self.targets) {
                  if (!target.classList.contains(...self.classes)) {
                    target.classList.add('xt-links-none')
                    target.classList.remove('xt-jumps-none')
                  } else {
                    target.classList.add('xt-jumps-none')
                    target.classList.remove('xt-links-none')
                  }
                }
              }
            }
          },
          'draggerDisableLinks',
          self.initial ? 0 : self.options.durationOn
        )
        // disable dragger
        dragger.classList.add('xt-pointer-events-none')
        for (const nav of self.navs) {
          nav.classList.add('xt-pointer-events-none')
        }
        for (const el of self.elements) {
          el.classList.add('xt-pointer-events-none')
        }
        Xt.animTimeout(
          dragger,
          () => {
            dragger.classList.remove('xt-pointer-events-none')
            for (const nav of self.navs) {
              nav.classList.remove('xt-pointer-events-none')
            }
            for (const el of self.elements) {
              el.classList.remove('xt-pointer-events-none')
            }
          },
          'draggerDisable',
          self.initial ? 0 : self.options.durationOn
        )
        // disable links
        dragger.classList.remove('xt-links-none')
        dragger.classList.remove('xt-jumps-none')
        // drag wrap
        if (self.dragger && options.drag.wrap && !options.drag.manual && !self.wrap) {
          // @FIX wrap around xt-wrap items
          Xt.animTimeout(
            dragger,
            () => {
              self.eventWrap()
            },
            'wrap'
          )
        }
      }
    } else if (!e || !e.type || e.type !== 'on.trigger.xt') {
      // drag reset
      self.logicDragreset(self.dragger)
    }
    // super
    super.eventOn(element, force, e)
  }

  /**
   * wrap
   */
  eventWrap() {
    const self = this
    // wrap around xt-wrap items
    const min = self.wrapIndex
    const max = self.wrapIndex + self.groupMqInitial.length - 1
    if (self.currentIndex < min) {
      self.initial = true
      self.wrap = true
      self.goToNum(max + self.currentIndex - min + 1, true)
    } else if (self.currentIndex > max) {
      self.initial = true
      self.wrap = true
      self.goToNum(min + self.currentIndex - max - 1, true)
    }
  }

  /**
   * medialoadedReinit
   */
  eventMediaLoadedReinit() {
    const self = this
    // mediaLoaded
    // @FIX performances
    for (const slide of self.targets) {
      // needs to recalculate not only xt-wrap but all targets
      Xt.dataStorage.set(slide, self.componentNamespace + 'SlideLeft', slide.offsetLeft)
      Xt.dataStorage.set(slide, self.componentNamespace + 'SlideWidth', slide.offsetWidth)
      Xt.dataStorage.set(slide, self.componentNamespace + 'SlideHeight', slide.children[0].offsetHeight)
    }
    // debug
    if (Xt.debug === true) {
      console.debug('Xt.debug: mediaLoadedReinit', self.object)
    }
    // restart
    self.reinit()
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
    const options = self.options
    // disabled
    if (self.disabled) {
      return
    }
    // manual
    if (options.drag.manual) {
      return
    }
    // save event
    if (e.detail.wheelX !== undefined) {
      self.detail.dragStart = e.detail.wheelX
      self.detail.dragStartOther = e.detail.wheelY
    } else if (e.clientX !== undefined) {
      self.detail.dragStart = e.clientX
      self.detail.dragStartOther = e.clientY
    } else if (e.touches && e.touches.length) {
      self.detail.dragStart = e.touches[0].clientX
      self.detail.dragStartOther = e.touches[0].clientY
    }
    // auto
    self.eventAutopause()
    // prevent dragging animation
    dragger.classList.add('duration-none')
    // logic
    self.detail.dragVelocity = null
    self.detail.dragVelocityNext = null
    // dragging
    self.detail.dragging = true
    self.detail.dragBlock = false
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
    const options = self.options
    // disabled
    if (self.disabled) {
      return
    }
    // manual
    if (options.drag.manual) {
      return
    }
    // save event
    if (e.detail.wheelX !== undefined) {
      self.detail.dragCurrent = e.detail.wheelX
      self.detail.dragCurrentOther = e.detail.wheelY
    } else if (e.clientX !== undefined) {
      self.detail.dragCurrent = e.clientX
      self.detail.dragCurrentOther = e.clientY
    } else if (e.touches && e.touches.length) {
      self.detail.dragCurrent = e.touches[0].clientX
      self.detail.dragCurrentOther = e.touches[0].clientY
    }
    // logic
    self.logicDragfriction(dragger, e)
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
      for (const el of self.elements) {
        el.classList.add('xt-pointer-events-none')
      }
      // drag
      self.logicDrag(dragger, e, true)
      // loop
      requestAnimationFrame(() => {
        self.logicDragfriction(dragger, e)
      })
    } else if (self.detail.dragVelocity) {
      // disable links
      requestAnimationFrame(() => {
        dragger.classList.remove('xt-links-none')
        dragger.classList.remove('xt-jumps-none')
      })
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
    if (self.disabled) {
      return
    }
    // manual
    if (options.drag.manual) {
      return
    }
    // save event
    if (e.detail.wheelX !== undefined) {
      self.detail.dragCurrent = e.detail.wheelX
      self.detail.dragCurrentOther = e.detail.wheelY
    } else if (e.clientX !== undefined) {
      self.detail.dragCurrent = e.clientX
      self.detail.dragCurrentOther = e.clientY
    } else if (e.touches && e.touches.length) {
      self.detail.dragCurrent = e.touches[0].clientX
      self.detail.dragCurrentOther = e.touches[0].clientY
    }
    // check threshold
    self.detail.dragDist = self.detail.dragStart - self.detail.dragCurrent
    self.detail.dragDistOther = self.detail.dragStartOther - self.detail.dragCurrentOther
    if (Math.abs(self.detail.dragDist) > options.drag.threshold) {
      // disable links
      dragger.classList.add('xt-links-none')
      dragger.classList.add('xt-jumps-none')
    }
    if (!self.detail.dragBlock && Math.abs(self.detail.dragDistOther) > Math.abs(self.detail.dragDist)) {
      // block drag if scrolling
      return
    } else {
      self.detail.dragBlock = true
      // block scrolling if dragging
      if (e.cancelable) {
        e.preventDefault()
      }
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
        self.detail.dragDateDiff = new Date() - self.detail.dragDate
        self.detail.dragDate = null
        if (self.detail.dragDateDiff > options.drag.frictionTime) {
          self.detail.dragVelocity = -1 // @FIX velocity -1 when done
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
    // overflow
    if (options.drag.overflow) {
      const arr = self.targets.filter((x) => !x.classList.contains('xt-wrap'))
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
          self.detail.dragVelocity = -1 // @FIX velocity -1 when done
          const overflow = dragPos - min
          dragPos = min + fncOverflow(overflow)
        } else if (dragPos < max) {
          self.detail.dragVelocity = -1 // @FIX velocity -1 when done
          const overflow = dragPos - max
          dragPos = max - fncOverflow(-overflow)
        }
      }
    }
    // val
    self.detail.dragCurrent = self.detail.dragCurrentReal - (self.detail.dragPosReal - dragPos) // dragCurrent when overflowing
    self.detail.dragPosOld = self.detail.dragPos
    self.detail.dragPos = dragPos
    self.detail.dragRatio = Math.abs(self.detail.dragStart - self.detail.dragCurrent) / self.detail.draggerWidth
    self.detail.dragRatio = self.detail.dragRatio > 1 ? 1 : self.detail.dragRatio
    self.detail.dragRatio = self.detail.dragRatio < -1 ? -1 : self.detail.dragRatio
    self.detail.dragRatioInverse = 1 - self.detail.dragRatio
    self.direction = self.detail.dragStart - self.detail.dragCurrent < 0 ? -1 : 1
    self.inverse = self.direction < 0
    // drag position
    if (self.initial) {
      self.dragger.classList.add('transition-none')
    }
    dragger.style.transform = 'translateX(' + self.detail.dragPos + 'px)'
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
   */
  logicDragfrictionend(dragger) {
    const self = this
    const options = self.options
    const dragPosCurrent = self.detail.dragPosCurrent || 0
    // prevent dragging animation
    dragger.classList.remove('duration-none')
    // check threshold
    self.detail.dragDist = self.detail.dragPosReal - dragPosCurrent
    const direction = Math.sign(self.detail.dragDist)
    if (!self.detail.dragBlock && Math.abs(self.detail.dragDistOther) > Math.abs(self.detail.dragDist)) {
      // drag reset
      self.logicDragreset(dragger)
    } else if (Math.abs(self.detail.dragDist) > options.drag.threshold) {
      // get nearest
      let found = self.currentIndex
      if (found === 0 && direction > 0) {
        found = self.groupMq.length - 1
      } else if (found === self.groupMq.length - 1 && direction < 0) {
        found = 0
      } else {
        const findNext = () => {
          let dist = 0
          if (direction > 0) {
            for (let i = self.currentIndex; i < self.groupMq.length; i++) {
              const group = self.groupMq[i]
              const pos = Xt.dataStorage.get(group[0], self.componentNamespace + 'GroupPos')
              dist += Math.abs(pos)
              if (dragPosCurrent <= dist) {
                return i
              }
            }
          } else {
            for (let i = self.currentIndex; i >= 0; i--) {
              const group = self.groupMq[i]
              const pos = Xt.dataStorage.get(group[0], self.componentNamespace + 'GroupPos')
              dist += Math.abs(pos)
              if (dragPosCurrent <= dist) {
                return i
              }
            }
          }
        }
        found = findNext()
      }
      // goTo with force
      if (found === self.currentIndex) {
        // change at least one
        if (direction < 0) {
          self.goToNext(1)
        } else {
          self.goToPrev(1)
        }
      } else {
        // goToNum
        self.goToNum(found)
      }
    } else {
      // drag reset
      self.logicDragreset(dragger)
    }
    // auto
    self.eventAutoresume()
    // dragging
    self.detail.dragging = false
    // listener dispatch
    if (!self.initial) {
      dragger.dispatchEvent(new CustomEvent('dragend.xt'))
    }
  }

  /**
   * element drag friction off logic
   * @param {Node|HTMLElement|EventTarget|Window} dragger
   */
  logicDragreset(dragger) {
    const self = this
    // val
    self.detail.dragPosOld = self.detail.dragPos
    self.detail.dragPos = self.detail.dragPosCurrent
    // fix direction
    self.direction = self.detail.dragStart - self.detail.dragCurrentReal < 0 ? -1 : 1
    self.inverse = self.direction < 0
    // disable drag and links
    Xt.animTimeout(
      dragger,
      () => {
        dragger.classList.remove('xt-pointer-events-none')
        for (const nav of self.navs) {
          nav.classList.remove('xt-pointer-events-none')
        }
        for (const el of self.elements) {
          el.classList.remove('xt-pointer-events-none')
        }
      },
      'draggerDisable',
      self.initial ? 0 : self.options.durationOn
    )
    // drag position
    if (self.initial) {
      self.dragger.classList.add('transition-none')
    }
    dragger.style.transform = 'translateX(' + self.detail.dragPosCurrent + 'px)'
    if (self.initial) {
      self.dragger.classList.remove('transition-none')
    }
    // auto
    self.eventAutostart()
    // listener dispatch
    if (!self.initial) {
      dragger.dispatchEvent(new CustomEvent('dragreset.xt'))
    }
  }

  //
  // status
  //

  /**
   * disable
   */
  enable() {
    super.enable()
    const self = this
    const dragger = self.dragger
    // enable
    if (dragger) {
      // dragger
      dragger.classList.add('transition-none')
      requestAnimationFrame(() => {
        dragger.classList.remove('transition-none')
      })
    }
  }

  /**
   * disable
   */
  disable() {
    super.disable()
    const self = this
    const options = self.options
    const dragger = self.dragger
    // disable
    if (dragger && !options.drag.manual) {
      // grab
      dragger.classList.remove('xt-grab')
      // links
      dragger.classList.remove('xt-links-none')
      // jump
      dragger.classList.add('xt-jumps-none')
      // dragger
      dragger.classList.add('transition-none')
      requestAnimationFrame(() => {
        dragger.classList.remove('transition-none')
      })
    }
    if (self.autoHeight) {
      // autoHeight
      self.autoHeight.classList.remove('xt-autoHeight')
      requestAnimationFrame(() => {
        self.autoHeight.style.height = ''
      })
    }
    if (self.keepHeight) {
      // keepHeight
      requestAnimationFrame(() => {
        self.keepHeight.style.height = ''
      })
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
    // clean pagination
    self.destroyPags()
    // clean wraps
    self.destroyWraps()
    // super
    super.destroy(weak)
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
      for (const el of self.elements.filter((x) => x.classList.contains('xt-wrap'))) {
        el.remove()
      }
      self.elements = self.elements.filter((x) => !x.classList.contains('xt-wrap'))
      // clear targets
      for (const tr of self.targets.filter((x) => x.classList.contains('xt-wrap'))) {
        tr.remove()
      }
      self.targets = self.targets.filter((x) => !x.classList.contains('xt-wrap'))
    }
  }

  //
}

//
// options
//

Slider.componentName = 'xt-slider'
Slider.optionsDefault = {
  // slider
  autoHeight: false,
  keepHeight: false,
  groupMq: false,
  align: 'center',
  contain: false,
  pagination: '.slider-pagination',
  overflowAuto: true,
  drag: {
    dragger: '.slides-inner',
    wrap: false,
    manual: false,
    threshold: 25,
    factor: 1,
    friction: false,
    /*
    friction: velocity => {
      return Math.pow(velocity, 0.95)
    },
    frictionLimit: 1.5,
    frictionTime: 25,
    */
    overflow: (overflow) => {
      return Math.pow(overflow, 0.73)
    },
  },
  // element
  elements: '[data-xt-pag]',
  targets: '.slide',
  // class
  class: 'active active-slider',
  // quantity
  min: 1,
  max: 1,
  // event
  on: 'click',
  // timing
  instant: true,
  // auto
  auto: {
    pause: '[data-xt-pag], [data-xt-nav], .btn',
  },
  // wheel
  wheel: {
    selector: false,
    block: true,
    limit: false,
    transform: true,
    horizontal: true,
    factor: 1,
    friction: (delta) => {
      return delta / 9
    },
    frictionLimit: 1.5,
  },
  // other
  loop: true,
  jump: true,
  jumpOverflow: false,
  navigation: '[data-xt-nav]',
  keyboard: {
    selector: '.slides',
  },
  aria: {
    labelledby: false,
  },
}

//
// export
//

Xt.Slider = Slider

//
// observe
//

Xt.mount.push({
  matches: '[data-' + Xt.Slider.componentName + ']',
  mount: (object) => {
    // vars

    const optionsMarkup = object.getAttribute('data-' + Xt.Slider.componentName)
    const options = optionsMarkup ? JSON5.parse(optionsMarkup) : {}

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
