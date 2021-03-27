import { Xt } from './xt'
import './toggle'
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
    self.dragger = self.object.querySelector(options.drag.dragger)
    self.destroyElements.push(self.dragger)
    // grab
    self.dragger.classList.add('xt-grab')
    // targets
    self.initScopeTargets()
    // autoHeight and keepHeight
    if (options.autoHeight) {
      self.autoHeight = self.object.querySelector(options.autoHeight)
    }
    if (options.keepHeight) {
      self.keepHeight = self.object.querySelector(options.keepHeight)
    }
    // not when empty
    if (!self.targets.length) {
      return false
    }
    // clean wraps
    self.destroyWraps()
    // @FIX performances
    self.detail.objectWidth = self.object.offsetWidth
    self.detail.draggerWidth = self.dragger.offsetWidth
    self.detail.draggerLeft = self.dragger.offsetLeft
    let fixNegativeMargin = 0
    for (const [i, slide] of self.targets.entries()) {
      const slideLeft = slide.offsetLeft
      let slideWidth = slide.offsetWidth
      if (slideWidth === 0) {
        // when display none
        const container = slide.parentNode
        const cloned = slide.cloneNode(true)
        cloned.classList.add('xt-calculating', 'xt-ignore')
        container.append(cloned)
        slideWidth = cloned.offsetWidth
        cloned.remove()
      }
      if (i === 0) {
        fixNegativeMargin = slideLeft
      }
      Xt.dataStorage.set(slide, `${self.ns}SlideLeft`, slideLeft - fixNegativeMargin)
      Xt.dataStorage.set(slide, `${self.ns}SlideWidth`, slideWidth)
    }
    // initSliderGroup
    self.initSliderGroup()
    // initSliderPos
    self.initSliderPos()
    // initSliderPags
    self.initSliderPags()
    // elements
    self.initScopeElements()
  }

  /**
   * init slider group
   */
  initSliderGroup() {
    const self = this
    const options = self.options
    // width
    let draggerWidthAvailable = 0
    // draggerWidthAvailable
    if (options.group) {
      draggerWidthAvailable = self.detail.draggerWidth * options.group
    }
    // groupInitial
    self.group = []
    self.group.push([])
    let currentCount = draggerWidthAvailable
    let totalCount = self.detail.draggerWidth
    let doneFirst = false
    for (const target of self.targets) {
      let targetWidth = Xt.dataStorage.get(target, `${self.ns}SlideWidth`)
      currentCount -= targetWidth
      totalCount -= targetWidth
      // overflow
      let currentGroup = self.group.length - 1
      if (currentCount < 0 && self.group[currentGroup].length) {
        self.group.push([])
        currentGroup = self.group.length - 1
        currentCount = draggerWidthAvailable
        currentCount -= targetWidth
      }
      // @FIX when dragger not :visible with draggerWidth === 0 groups of 1 slide
      if (self.detail.draggerWidth === 0 && doneFirst) {
        self.group.push([])
        currentGroup = self.group.length - 1
      }
      doneFirst = true
      // assign group
      self.group[currentGroup].push(target)
      target.setAttribute('data-xt-group', `${self.ns}-${currentGroup}`)
    }
    self.groupInitial = self.group
    // @FIX disable slider if not overflowing
    if (options.overflowAuto) {
      if (totalCount >= 0) {
        self.object.classList.add('xt-overflow-auto')
        self.disable()
      } else {
        self.object.classList.remove('xt-overflow-auto')
        self.enable()
      }
    }
    // drag wrap
    const wrapFirst = []
    const wrapLast = []
    const wrapMaxWidth = -self.detail.draggerWidth * (options.drag.wrap - 1)
    let wrapLastCountIteration = 0
    let wrapFirstCountIteration = 0
    if (options.drag.wrap) {
      const container = self.targets[0].parentNode
      if (!options.loop) {
        console.warn('Xt.Slider needs "loop": true when using "drag": {"wrap": true}', self.object)
      }
      if (options.contain) {
        console.warn('Xt.Slider cannot use "contain": true when using "drag": {"wrap": true}', self.object)
      }
      const cloneSlide = slide => {
        const cloned = slide.cloneNode(true)
        cloned.classList.add('xt-clone', 'xt-wrap')
        cloned.classList.remove(
          ...self.classes,
          ...self.classesActive,
          ...self.classesOut,
          ...self.classesDone,
          ...self.classesInitial,
          ...self.classesBefore,
          ...self.classesAfter
        )
        return cloned
      }
      // wrapLast
      let wrapLastCount = self.detail.draggerWidth
      const wrapLastFunction = () => {
        for (const [i, group] of self.groupInitial.entries()) {
          wrapLast.push([])
          for (const slide of group) {
            const cloned = cloneSlide(slide)
            wrapLast[wrapLastCountIteration * self.groupInitial.length + i].push(cloned)
            cloned.setAttribute('data-xt-group', `${self.ns}-` + `wrapLast${wrapLastCountIteration}${i}`)
            self.targets.push(cloned)
            container.append(cloned)
            wrapLastCount -= Xt.dataStorage.get(slide, `${self.ns}SlideWidth`)
          }
          if (wrapLastCount <= wrapMaxWidth) {
            return
          } else if (i === self.groupInitial.length - 1) {
            wrapLastCountIteration++
            wrapLastFunction()
          }
        }
      }
      wrapLastFunction()
      // wrapFirst
      let wrapFirstCount = self.detail.draggerWidth
      self.groupInitial.reverse()
      const wrapFirstFunction = () => {
        for (const [i, group] of self.groupInitial.entries()) {
          wrapFirst.unshift([])
          for (const slide of group.reverse()) {
            const cloned = cloneSlide(slide)
            wrapFirst[0].unshift(cloned)
            cloned.setAttribute('data-xt-group', `${self.ns}-` + `wrapFirst${wrapFirstCountIteration}${i}`)
            self.targets.unshift(cloned)
            container.prepend(cloned)
            wrapFirstCount -= Xt.dataStorage.get(slide, `${self.ns}SlideWidth`)
          }
          if (wrapFirstCount <= wrapMaxWidth) {
            group.reverse() // reset reverse
            return
          } else if (i === self.groupInitial.length - 1) {
            wrapFirstCountIteration++
            group.reverse() // reset reverse
            wrapFirstFunction()
          }
        }
      }
      wrapFirstFunction()
      self.groupInitial.reverse() // reset reverse
      // @FIX performances
      let fixNegativeMargin = 0
      for (const [i, slide] of self.targets.entries()) {
        // needs to recalculate not only xt-wrap but all targets
        const slideLeft = slide.offsetLeft
        const slideWidth = slide.offsetWidth
        if (i === 0) {
          fixNegativeMargin = slideLeft
        }
        Xt.dataStorage.set(slide, `${self.ns}SlideLeft`, slideLeft - fixNegativeMargin)
        Xt.dataStorage.set(slide, `${self.ns}SlideWidth`, slideWidth)
      }
    }
    self.groupFirst = wrapFirst
    self.groupLast = wrapLast
    self.group = wrapFirst.concat(self.group.concat(wrapLast))
    self.wrapIndex = self.groupFirst.length
  }

  /**
   * init slider group positions
   */
  initSliderPos() {
    const self = this
    const options = self.options
    // reset done
    for (const slide of self.targets) {
      Xt.dataStorage.remove(slide, `${self.ns}GroupPosDone`)
      Xt.dataStorage.remove(slide, `${self.ns}GroupContainDone`)
    }
    // @FIX performances
    for (const slide of self.targets) {
      Xt.dataStorage.set(slide, `${self.ns}SlideHeight`, slide.children[0].offsetHeight)
    }
    // slides pos
    let slidesWidth = 0
    for (const slide of self.targets) {
      // once per group
      if (!Xt.dataStorage.get(slide, `${self.ns}GroupPosDone`)) {
        // vars
        const targets = self.getTargets(slide)
        let slideLeft = Infinity
        let slideWidth = 0
        let slideHeight = 0
        let slideHeightTemp = 0
        // vars
        for (const target of targets) {
          // @FIX performances
          const tl = Xt.dataStorage.get(target, `${self.ns}SlideLeft`)
          const sl = Xt.dataStorage.get(slide, `${self.ns}SlideLeft`)
          slideLeft = tl < slideLeft ? sl : slideLeft
          if (options.mode === 'absolute') {
            // when absolute mode make fake positions as if all items displaced inside dragger
            slideLeft += slidesWidth
          }
          slideWidth += Xt.dataStorage.get(target, `${self.ns}SlideWidth`)
          slideHeightTemp = Xt.dataStorage.get(target, `${self.ns}SlideHeight`)
          slidesWidth += slideWidth
          slideHeight = slideHeightTemp > slideHeight ? slideHeightTemp : slideHeight
        }
        for (const target of targets) {
          Xt.dataStorage.set(target, `${self.ns}GroupPosDone`, true)
          Xt.dataStorage.set(target, `${self.ns}GroupHeight`, slideHeight)
        }
        // pos with alignment
        let pos
        if (options.align === 'center') {
          pos = self.detail.draggerWidth / 2 - slideLeft - slideWidth / 2
        } else if (options.align === 'left') {
          pos = -slideLeft
        } else if (options.align === 'right') {
          pos = self.detail.draggerWidth - slideLeft - slideWidth
        }
        // save pos
        for (const target of targets) {
          Xt.dataStorage.set(target, `${self.ns}GroupPos`, pos)
          Xt.dataStorage.set(target, `${self.ns}GroupWidth`, slideWidth)
        }
      }
    }
    // @FIX xt-wrap clone offsetWidth on resize
    for (const target of self.targets) {
      target.children[0].style.width = ''
    }
    // cannot have contain and wrap together because not possible and we set groupInitial
    if (options.contain && options.drag.wrap) {
      console.warn('Cannot have a slider with "contain: true" and "wrap: true"', self.object)
    }
    // min max pos with contain
    if (options.contain && slidesWidth > self.detail.draggerWidth) {
      // only if slides overflow dragger
      const first = self.groupInitial[0][0]
      const last = self.groupInitial[self.groupInitial.length - 1][0]
      const firstLeft = Xt.dataStorage.get(first, `${self.ns}SlideLeft`)
      const lastLeft = Xt.dataStorage.get(last, `${self.ns}SlideLeft`)
      const lastWidth = Xt.dataStorage.get(last, `${self.ns}SlideWidth`)
      const min = -firstLeft
      const max = -lastLeft + self.detail.draggerWidth - lastWidth
      let iRemoved = 0
      for (let i = 0; i < self.group.length; i++) {
        const group = self.group[i]
        for (const slide of group) {
          // once per group
          if (!Xt.dataStorage.get(slide, `${self.ns}GroupContainDone`)) {
            let pos = Math.ceil(Xt.dataStorage.get(slide, `${self.ns}GroupPos`))
            if (pos >= min) {
              pos = min
              // reassign group
              const firstIndex = self.wrapIndex
              if (i > firstIndex) {
                for (const target of group) {
                  self.group[firstIndex].push(target)
                  target.setAttribute('data-xt-group', `${self.ns}-${firstIndex}`)
                }
                self.group.splice(i, 1)
                // splice reindex
                i--
                iRemoved++
              }
            } else if (pos <= max) {
              pos = max
              // reassign group
              const lastIndex = self.wrapIndex + self.groupInitial.length - 1 - iRemoved
              if (i < lastIndex) {
                for (const target of group) {
                  self.group[lastIndex].push(target)
                  target.setAttribute('data-xt-group', `${self.ns}-${lastIndex}`)
                }
                self.group.splice(i, 1)
                // splice reindex
                i--
                iRemoved++
              }
            }
            for (const target of group) {
              Xt.dataStorage.set(target, `${self.ns}GroupPos`, pos)
              Xt.dataStorage.set(target, `${self.ns}GroupContainDone`, true)
            }
          }
        }
      }
      // groupInitial
      self.groupInitial = self.group
    }
    // set wheel min and max
    if (options.wheel && options.wheel.selector) {
      const first = self.groupInitial[0][0]
      const last = self.groupInitial[self.groupInitial.length - 1][0]
      self.detail.wheelMin = -Xt.dataStorage.get(first, `${self.ns}GroupPos`)
      self.detail.wheelMax = -Xt.dataStorage.get(last, `${self.ns}GroupPos`)
    }
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
    // clean pagination
    self.destroyPags()
    // pags
    self.pags = self.pags ? self.pags : []
    for (const [z, pag] of pags.entries()) {
      // vars
      const cloned = pag.querySelector('[data-xt-pag].xt-ignore')
      const container = cloned.parentNode
      const arr = self.group
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
            const content = slide.querySelector('.xt-slide-content')
            if (content) {
              replace += `<span>${content.innerHTML}</span>`
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
          html = html.replace(regex, self.groupInitial.length.toString())
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
        if (options.drag.wrap) {
          const firstIndex = self.wrapIndex
          const lastIndex = self.wrapIndex + self.groupInitial.length - 1
          if (i < firstIndex || i > lastIndex) {
            self.pags[z][i].classList.add('xt-clone', 'xt-wrap', 'hidden')
          }
        }
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
    // dragger
    if (!options.drag.manual) {
      // drag start
      const dragstartHandler = Xt.dataStorage.put(
        window,
        `mousedown touchstart/drag/${self.ns}`,
        self.eventDragstartHandler.bind(self)
      )
      const events = ['mousedown', 'touchstart']
      for (const event of events) {
        addEventListener(event, dragstartHandler, { passive: true })
      }
      // @FIX prevent dragging links and images
      const dragstartFixHandler = Xt.dataStorage.put(window, `dragstart/drag/${self.ns}`, self.eventDragstartFix)
      self.dragger.addEventListener('dragstart', dragstartFixHandler)
      // wheel
      if (options.wheel && options.wheel.selector) {
        const wheel = self.wheel
        wheel.addEventListener(`wheelstart.${self.componentNs}`, self.logicDragstart.bind(self))
        wheel.addEventListener(`wheel.${self.componentNs}`, self.logicDrag.bind(self))
        wheel.addEventListener(`wheelend.${self.componentNs}`, self.logicDragend.bind(self))
      }
    }
    // resize
    const reinitHandler = Xt.dataStorage.put(window, `resize/reinit/${self.ns}`, self.eventReinitHandler.bind(self))
    addEventListener('resize', reinitHandler)
  }

  /**
   * init aria
   */
  initAriaRole() {
    const self = this
    const options = self.options
    // aria
    if (options.aria) {
      // role
      if (options.aria === true || options.aria.role) {
        for (const tr of self.targets) {
          tr.setAttribute('role', 'group')
          tr.setAttribute('aria-roledescription', 'slide')
        }
        self.object.setAttribute('aria-roledescription', 'carousel')
      }
    }
  }

  //
  // handler
  //

  /**
   * element drag fix
   * @param {Event} e
   */
  eventDragstartFix(e) {
    e.preventDefault()
  }

  /**
   * element drag on handler
   * @param {Event} e
   */
  eventDragstartHandler(e) {
    const self = this
    const options = self.options
    // not when outside dragger
    if (!self.dragger.contains(e.target)) {
      return
    }
    // not right click or it gets stuck
    if (!e.button || e.button !== 2) {
      // handler
      if (options.eventLimit) {
        const eventLimit = self.container.querySelectorAll(options.eventLimit)
        if (!Xt.contains(eventLimit, e.target)) {
          self.eventDragstart(e)
        }
      } else {
        self.eventDragstart(e)
      }
      // dragend
      const dragendHandler = Xt.dataStorage.put(
        window,
        `mouseup touchend/drag/${self.ns}`,
        self.eventDragendHandler.bind(self)
      )
      const events = ['mouseup', 'touchend']
      for (const event of events) {
        addEventListener(event, dragendHandler)
      }
    }
  }

  /**
   * element drag off handler
   * @param {Event} e
   */
  eventDragendHandler(e) {
    const self = this
    const options = self.options
    // logic
    if (options.eventLimit) {
      const eventLimit = self.container.querySelectorAll(options.eventLimit)
      if (!Xt.contains(eventLimit, e.target)) {
        self.eventDragend(e)
      }
    } else {
      self.eventDragend(e)
    }
  }

  /**
   * element drag on
   * @param {Event} e
   */
  eventDragstart(e) {
    const self = this
    // event move
    const dragHandler = Xt.dataStorage.put(
      window,
      `mousemove touchmove/drag/${self.ns}`,
      self.eventDragHandler.bind(self)
    )
    const events = ['mousemove', 'touchmove']
    for (const event of events) {
      addEventListener(event, dragHandler, { passive: false })
    }
    // logic
    self.logicDragstart(e)
  }

  /**
   * element drag off
   * @param {Event} e
   */
  eventDragend(e) {
    const self = this
    // event off
    const dragendHandler = Xt.dataStorage.get(window, `mouseup touchend/drag/${self.ns}`)
    const eventsoff = ['mouseup', 'touchend']
    for (const event of eventsoff) {
      removeEventListener(event, dragendHandler)
    }
    // event move
    const dragHandler = Xt.dataStorage.get(window, `mousemove touchmove/drag/${self.ns}`)
    const eventsmove = ['mousemove', 'touchmove']
    for (const event of eventsmove) {
      removeEventListener(event, dragHandler)
    }
    // @FIX on.xt.slider event after all drag.xt.slider
    requestAnimationFrame(() => {
      // logic
      self.logicDragend(e)
    })
  }

  /**
   * element drag handler
   * @param {Event} e
   */
  eventDragHandler(e) {
    const self = this
    // logic
    cancelAnimationFrame(Xt.dataStorage.get(self.dragger, `${self.ns}DragFrame`))
    Xt.dataStorage.set(
      self.dragger,
      `${self.ns}DragFrame`,
      requestAnimationFrame(() => {
        self.logicDrag(e)
      })
    )
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
      return
    }
    // @FIX targets handler
    const slides = self.getTargets(element)
    const slide = slides[0]
    // only one call per group
    if (Xt.dataStorage.get(slide, `${self.ns}SlideonDone`)) {
      return false
    }
    Xt.dataStorage.set(slide, `${self.ns}SlideonDone`, true)
    requestAnimationFrame(() => {
      Xt.dataStorage.remove(slide, `${self.ns}SlideonDone`)
    })
    // val
    self.detail.dragPos = self.detail.dragPosCurrent = self.detail.dragPosReal = Xt.dataStorage.get(
      slide,
      `${self.ns}GroupPos`
    )
    // toggle
    if (force || (self.checkOn(element) && e?.detail?.type !== `off.trigger.${self.componentNs}`)) {
      // autoHeight and keepHeight
      if (self.autoHeight || (self.keepHeight && self.initial)) {
        let slideHeight = Xt.dataStorage.get(slide, `${self.ns}SlideHeight`)
        const groupHeight = Xt.dataStorage.get(slide, `${self.ns}GroupHeight`)
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
              slide.dispatchEvent(new CustomEvent(`autoheight.${self.componentNs}`))
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
      if (!options.drag.manual) {
        // prevent alignment animation
        self.dragger.classList.remove('xt-duration-none')
        // initial or resizing
        if (self.initial) {
          // prevent alignment animation
          self.dragger.classList.add('xt-duration-none')
          requestAnimationFrame(() => {
            self.dragger.classList.remove('xt-duration-none')
          })
        }
        // drag position
        self.dragger.style.transform = `translateX(${self.detail.dragPos}px)`
        // disable links not active slide
        const duration = self.options.duration || self.options.durationOn
        Xt.animTimeout(
          self.dragger,
          () => {
            if (options.jump) {
              if (options.jumpOverflow) {
                const draggerTranslate = Xt.getTranslate(self.dragger)[0]
                for (const target of self.targets) {
                  const slideLeft = Xt.dataStorage.get(target, `${self.ns}SlideLeft`)
                  const slideWidth = Xt.dataStorage.get(target, `${self.ns}SlideWidth`)
                  const slideBound = slideLeft + slideWidth
                  if (
                    slideLeft < -Math.ceil(draggerTranslate) ||
                    slideBound > Math.ceil(self.detail.draggerWidth - draggerTranslate)
                  ) {
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
          self.initial ? 0 : duration ? duration / Xt.durationTimescale : null
        )
        // disable dragger
        self.dragger.classList.add('xt-pointer-events-none')
        for (const nav of self.navs) {
          nav.classList.add('xt-pointer-events-none')
        }
        for (const el of self.elements) {
          el.classList.add('xt-pointer-events-none')
        }
        Xt.animTimeout(
          self.dragger,
          () => {
            self.dragger.classList.remove('xt-pointer-events-none')
            for (const nav of self.navs) {
              nav.classList.remove('xt-pointer-events-none')
            }
            for (const el of self.elements) {
              el.classList.remove('xt-pointer-events-none')
            }
          },
          'draggerDisable',
          self.initial ? 0 : duration ? duration / Xt.durationTimescale : null
        )
        // disable links
        self.dragger.classList.remove('xt-links-none')
        self.dragger.classList.remove('xt-jumps-none')
        // drag wrap
        if (options.drag.wrap && !options.drag.manual && !self.wrap) {
          // @FIX wrap around xt-wrap items
          Xt.animTimeout(
            self.dragger,
            () => {
              self.eventWrap()
            },
            'wrap'
          )
        }
      }
    } else if (e?.detail?.type !== `on.trigger.${self.componentNs}`) {
      // drag reset
      self.logicDragreset()
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
    const firstIndex = self.wrapIndex
    const lastIndex = self.wrapIndex + self.groupInitial.length - 1
    if (self.currentIndex < firstIndex) {
      self.initial = true
      self.wrap = true
      self.goToNum(lastIndex + self.currentIndex - firstIndex + 1, true)
    } else if (self.currentIndex > lastIndex) {
      self.initial = true
      self.wrap = true
      self.goToNum(firstIndex + self.currentIndex - lastIndex - 1, true)
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
      Xt.dataStorage.set(slide, `${self.ns}SlideLeft`, slide.offsetLeft)
      Xt.dataStorage.set(slide, `${self.ns}SlideWidth`, slide.offsetWidth)
      Xt.dataStorage.set(slide, `${self.ns}SlideHeight`, slide.children[0].offsetHeight)
    }
    // @TEST console.debug('mediaLoadedReinit', self.object)
    // restart
    self.reinit()
  }

  //
  // logic
  //

  /**
   * element drag on logic
   * @param {Event} e
   */
  logicDragstart(e) {
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
    self.dragger.classList.add('xt-duration-none')
    // logic
    self.detail.dragIndex = self.currentIndex
    self.detail.dragVelocity = null
    self.detail.dragVelocityNext = null
    // dragging
    self.detail.dragging = true
    self.detail.dragBlock = false
    // listener dispatch
    if (!self.initial) {
      self.dragger.dispatchEvent(new CustomEvent(`dragstart.${self.componentNs}`))
    }
  }

  /**
   * element drag off logic
   * @param {Event} e
   */
  logicDragend(e) {
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
    // fix direction
    self.direction = self.detail.dragStart - self.detail.dragCurrentReal < 0 ? -1 : 1
    self.inverse = self.direction < 0
    // disable links
    requestAnimationFrame(() => {
      self.dragger.classList.remove('xt-links-none')
      self.dragger.classList.remove('xt-jumps-none')
    })
    // prevent dragging animation
    self.dragger.classList.remove('xt-duration-none')
    // activation
    const direction = Math.sign(self.detail.dragDist)
    if (!self.detail.dragBlock && Math.abs(self.detail.dragDistOther) > Math.abs(self.detail.dragDist)) {
      // drag reset
      self.logicDragreset()
    } else if (Math.abs(self.detail.dragDist) > options.drag.threshold) {
      // get nearest
      const found = self.logicDragfind(self.currentIndex)
      // if on the same slide as we started draggin
      // @TEST console.debug(self.currentIndex, found, self.detail.dragIndex)
      if (found !== self.detail.dragIndex) {
        // goToNum
        self.goToNum(found)
      } else {
        // change at least one
        if (direction > 0 && self.detail.dragDirection < 0) {
          self.goToNext(1)
        } else if (direction < 0 && self.detail.dragDirection > 0) {
          self.goToPrev(1)
        } else {
          // drag reset
          self.logicDragreset()
        }
      }
    } else {
      // drag reset
      self.logicDragreset()
    }
    // auto
    self.eventAutoresume()
    // dragging
    self.detail.dragging = false
    // listener dispatch
    if (!self.initial) {
      self.dragger.dispatchEvent(new CustomEvent(`dragend.${self.componentNs}`))
    }
  }

  /**
   * element drag logic
   * @param {Event} e
   */
  logicDrag(e) {
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
      self.dragger.classList.add('xt-links-none')
      self.dragger.classList.add('xt-jumps-none')
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
    // momentum
    self.detail.dragDate = new Date()
    // on normal drag
    const dragPosOld = dragPos || 0
    dragPos = dragPosCurrent + (self.detail.dragCurrent - self.detail.dragStart) * options.drag.factor
    // keep some velocity (median value of previous frame and not current frame)
    self.detail.dragVelocity = (self.detail.dragVelocity + self.detail.dragVelocityNext) / 2
    self.detail.dragVelocityNext = dragPos - dragPosOld
    // val
    self.detail.dragPosReal = dragPos
    self.detail.dragCurrentReal = self.detail.dragCurrent
    self.detail.dragDirection = self.detail.dragPos < self.detail.dragPosOld ? -1 : 1
    // overflow
    if (options.drag.overflow) {
      const first = self.groupInitial[0][0]
      const last = self.groupInitial[self.groupInitial.length - 1][0]
      const min = Xt.dataStorage.get(first, `${self.ns}GroupPos`)
      const max = Xt.dataStorage.get(last, `${self.ns}GroupPos`)
      // overflow
      const direction = Math.sign(self.detail.dragDist)
      const fncOverflow = options.drag.overflow
      if (dragPos > min && direction < 0) {
        self.detail.dragVelocity = -1 // @FIX velocity -1 when done
        const overflow = dragPos - min
        dragPos = min + fncOverflow(overflow)
      } else if (dragPos < max && direction > 0) {
        self.detail.dragVelocity = -1 // @FIX velocity -1 when done
        const overflow = dragPos - max
        dragPos = max - fncOverflow(-overflow)
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
      self.dragger.classList.add('xt-instant')
    }
    self.dragger.style.transform = `translateX(${self.detail.dragPos}px)`
    if (self.initial) {
      self.dragger.classList.remove('xt-instant')
    }
    // activation
    if (Math.abs(self.detail.dragDist) > options.drag.threshold) {
      // get nearest
      const found = self.logicDragfind(self.currentIndex)
      // @TEST console.debug(self.currentIndex, found, self.detail.dragIndex)
      if (found !== self.currentIndex) {
        const currentPos = Xt.dataStorage.get(self.group[found][0], `${self.ns}GroupPos`)
        const pos = Xt.dataStorage.get(self.group[self.currentIndex][0], `${self.ns}GroupPos`)
        if (pos !== currentPos) {
          super.eventOn(self.getElementsGroups()[found], true)
        }
      }
    }
    // listener dispatch
    if (!self.initial) {
      self.dragger.dispatchEvent(new CustomEvent(`drag.${self.componentNs}`))
    }
  }

  /**
   * element drag reset logic
   */
  logicDragreset() {
    const self = this
    // val
    self.detail.dragPosOld = self.detail.dragPos
    self.detail.dragPos = self.detail.dragPosCurrent
    // disable dragger
    self.dragger.classList.add('xt-pointer-events-none')
    for (const nav of self.navs) {
      nav.classList.add('xt-pointer-events-none')
    }
    for (const el of self.elements) {
      el.classList.add('xt-pointer-events-none')
    }
    Xt.animTimeout(
      self.dragger,
      () => {
        self.dragger.classList.remove('xt-pointer-events-none')
        for (const nav of self.navs) {
          nav.classList.remove('xt-pointer-events-none')
        }
        for (const el of self.elements) {
          el.classList.remove('xt-pointer-events-none')
        }
      },
      'draggerDisable',
      self.initial ? 0 : (self.options.duration || self.options.durationOn) / Xt.durationTimescale
    )
    // drag position
    if (self.initial) {
      self.dragger.classList.add('xt-instant')
    }
    self.dragger.style.transform = `translateX(${self.detail.dragPosCurrent}px)`
    if (self.initial) {
      self.dragger.classList.remove('xt-instant')
    }
    // auto
    self.eventAutostart()
    // listener dispatch
    if (!self.initial) {
      self.dragger.dispatchEvent(new CustomEvent(`dragreset.${self.componentNs}`))
    }
  }

  /**
   * activate depending on drag
   * @param {Number} found Current index
   */
  logicDragfind(found) {
    const self = this
    // find
    const direction = Math.sign(self.detail.dragDist)
    if (direction < 0) {
      for (let i = 0; i < self.group.length; i++) {
        const slide = self.group[i][0]
        const pos = Xt.dataStorage.get(slide, `${self.ns}GroupPos`)
        const width = Xt.dataStorage.get(slide, `${self.ns}GroupWidth`)
        const diff = Math.floor(self.detail.dragPos - pos - (width / 2) * direction)
        // @TEST slide.querySelector('.xt-card').innerHTML = `${diff} ${self.detail.dragDist}`
        // next in direction from drag diff
        if (diff > 0 && (self.detail.dragDirection < 0 || diff <= -self.detail.dragDist)) {
          return i
        }
      }
    } else if (direction > 0) {
      for (let i = self.group.length - 1; i >= 0; i--) {
        const slide = self.group[i][0]
        const pos = Xt.dataStorage.get(slide, `${self.ns}GroupPos`)
        const width = Xt.dataStorage.get(slide, `${self.ns}GroupWidth`)
        const diff = Math.floor(self.detail.dragPos - pos - (width / 2) * direction)
        // @TEST slide.querySelector('.xt-card').innerHTML = `${diff} ${self.detail.dragDist}`
        // next in direction from drag diff
        if (diff < 0 && (self.detail.dragDirection > 0 || diff >= -self.detail.dragDist)) {
          return i
        }
      }
    }
    return found
  }

  //
  // status
  //

  /**
   * disable
   */
  enable() {
    const self = this
    const options = self.options
    // enable
    if (self.disabled) {
      if (!options.drag.manual) {
        // grab
        self.dragger.classList.add('xt-grab')
        // dragger
        self.dragger.classList.add('xt-instant')
        requestAnimationFrame(() => {
          self.dragger.classList.remove('xt-instant')
        })
      }
    }
    // super
    super.enable()
  }

  /**
   * disable
   */
  disable() {
    const self = this
    const options = self.options
    // disable
    if (!self.disabled) {
      if (!options.drag.manual) {
        // grab
        self.dragger.classList.remove('xt-grab')
        // links
        self.dragger.classList.remove('xt-links-none')
        // jump
        self.dragger.classList.add('xt-jumps-none')
        // dragger
        self.dragger.classList.add('xt-instant')
        requestAnimationFrame(() => {
          self.dragger.classList.remove('xt-instant')
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
    // super
    super.disable()
  }

  //
  // util
  //

  /**
   * destroy
   * @param {Boolean} weak Do not destroy component
   */
  destroy(weak = false) {
    const self = this
    const options = self.options
    // drag position
    if (!options.drag.manual) {
      self.dragger.style.transform = ''
    }
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
      self.pags = []
    }
  }

  /**
   * destroy wraps
   */
  destroyWraps() {
    const self = this
    // clear wrap elements
    for (const el of self.elements.filter(x => x.classList.contains('xt-wrap'))) {
      el.remove()
    }
    self.elements = self.elements.filter(x => !x.classList.contains('xt-wrap'))
    // clear wrap targets
    for (const tr of self.targets.filter(x => x.classList.contains('xt-wrap'))) {
      tr.remove()
    }
    self.targets = self.targets.filter(x => !x.classList.contains('xt-wrap'))
  }

  //
}

//
// options
//

Slider.componentName = 'xt-slider'
Slider.optionsDefault = {
  // slider
  mode: 'relative',
  autoHeight: false,
  keepHeight: false,
  group: false,
  align: 'center',
  contain: false,
  pagination: '.xt-slider-pagination',
  overflowAuto: true,
  drag: {
    dragger: '.xt-slides-inner',
    wrap: false,
    manual: false,
    threshold: 25,
    factor: 1,
    overflow: overflow => {
      return Math.pow(overflow, 0.73)
    },
  },
  // element
  elements: '[data-xt-pag]',
  targets: '.xt-slide',
  // class
  class: 'in in-slider',
  groupElements: true,
  // quantity
  min: 1,
  max: 1,
  // event
  on: 'click',
  // timing
  queue: false,
  // auto
  auto: {
    pause: '[data-xt-pag], [data-xt-nav], .xt-button',
  },
  // wheel
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
  // other
  loop: true,
  jump: true,
  jumpOverflow: false,
  navigation: '[data-xt-nav]',
  keyboard: {
    selector: '.xt-slides',
  },
}

//
// export
//

Xt.Slider = Slider
