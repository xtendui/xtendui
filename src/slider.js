import { Xt } from './xt'
import './toggle'

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
   * init start
   * @param {Boolean} saveCurrents
   */
  initStart(saveCurrents = false) {
    const self = this
    super.initStart(saveCurrents)
    // keep the same level of raf as others
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        // listener dispatch
        self.dragger.dispatchEvent(new CustomEvent(`dragposition.${self.componentNs}`))
      })
    })
  }

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
    // not jump in absolute mode
    if (options.mode === 'absolute') {
      self.options.jump = false
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
    // not when empty
    if (!self.targets.length) {
      return false
    }
    // val
    self.detail.dragPosition = self.detail.dragFinal = self.detail.dragActive = 0
    // @PERF
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
    // clean wraps
    self.destroyWrap()
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
    self.detail.availableSpace = self.detail.draggerWidth
    let doneFirst = false
    for (const target of self.targets) {
      let targetWidth = Xt.dataStorage.get(target, `${self.ns}SlideWidth`)
      currentCount -= targetWidth
      self.detail.availableSpace -= targetWidth
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
    self.detail.moveFirst = 0
    self.detail.moveLast = self.group.length - 1
    // @FIX disable slider if not overflowing
    if (options.overflowAuto) {
      if (self.detail.availableSpace >= 0) {
        self.object.classList.add('xt-overflow-auto')
        self.disable()
      } else {
        self.object.classList.remove('xt-overflow-auto')
        self.enable()
      }
    }
  }

  /**
   * init slider group positions
   */
  initSliderPos() {
    const self = this
    const options = self.options
    const first = self.group[self.detail.moveFirst][0]
    const last = self.group[self.detail.moveLast][0]
    // reset done
    for (const slide of self.targets) {
      Xt.dataStorage.remove(slide, `${self.ns}GroupPosDone`)
      Xt.dataStorage.remove(slide, `${self.ns}GroupContainDone`)
    }
    // @PERF
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
          // @PERF
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
    // min max pos with contain
    if (options.contain && slidesWidth > self.detail.draggerWidth) {
      // only if slides overflow dragger
      const firstLeft = Xt.dataStorage.get(first, `${self.ns}SlideLeft`)
      const lastLeft = Xt.dataStorage.get(last, `${self.ns}SlideLeft`)
      const lastWidth = Xt.dataStorage.get(last, `${self.ns}SlideWidth`)
      const min = -firstLeft
      const max = -lastLeft + self.detail.draggerWidth - lastWidth
      // group contain slides with same pos
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
              const firstIndex = 0
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
              const lastIndex = self.group.length - 1 - iRemoved
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
      self.detail.moveFirst = 0
      self.detail.moveLast = self.group.length - 1
    }
    // set wheel min and max
    if (options.wheel && options.wheel.selector) {
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
          html = html.replace(regex, (i + 1).toString())
        }
        regex = new RegExp('xt-tot', 'ig')
        if (html.search(regex) !== -1) {
          html = html.replace(regex, self.group.length.toString())
        }
        item.innerHTML = html
        if (classes.length) {
          item.children[0].classList.add(...classes)
        }
        item.children[0].setAttribute('data-xt-group', group[0].getAttribute('data-xt-group'))
        container.insertBefore(item.children[0], cloned)
        item.remove()
        self.pags[z][i] = container.querySelectorAll('[data-xt-pag].xt-clone')[i]
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
        addEventListener(event, dragstartHandler, { passive: false })
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
        const eventLimit = self.containerTargets.querySelectorAll(options.eventLimit)
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
      const eventLimit = self.containerTargets.querySelectorAll(options.eventLimit)
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
    self.logicDrag(e)
  }

  /**
   * element drag handler
   * @param {Event} e
   */
  eventDragHandler(e) {
    const self = this
    // raf Drag and Dragend
    cancelAnimationFrame(Xt.dataStorage.get(self.dragger, `${self.ns}DragFrame`))
    Xt.dataStorage.set(
      self.dragger,
      `${self.ns}DragFrame`,
      requestAnimationFrame(() => {
        // logic
        self.logicDrag(e)
      })
    )
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
    // raf Drag and Dragend
    requestAnimationFrame(() => {
      // logic
      self.logicDragend(e)
    })
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
    self.detail.dragFinalOld = self.detail.dragFinal
    self.detail.dragFinal = self.detail.dragActive = Xt.dataStorage.get(slide, `${self.ns}GroupPos`)
    // calc
    const first = self.group[self.detail.moveFirst][0]
    const last = self.group[self.detail.moveLast][0]
    const min = Xt.dataStorage.get(first, `${self.ns}GroupPos`)
    const max = Xt.dataStorage.get(last, `${self.ns}GroupPos`)
    const maxCheck = options.mode !== 'absolute' ? max : Xt.dataStorage.get(first, `${self.ns}GroupWidth`)
    /*
    // @FIX absolute loop
    if (options.mode === 'absolute' && !self.detail.dragging) {
      if (self.direction > 0 && self.detail.dragActive === min) {
        //self.detail.dragFinal = self.detail.dragFinal + max - maxCheck
        console.log('>>>>>')
        // listener dispatch
        //self.dragger.dispatchEvent(new CustomEvent(`dragposition.${self.componentNs}`))
      } else if (self.direction < 0 && self.detail.dragActive === max) {
        //self.detail.dragFinal = self.detail.dragFinal - max + maxCheck
        console.log('<<<<<')
        // listener dispatch
        //self.dragger.dispatchEvent(new CustomEvent(`dragposition.${self.componentNs}`))
      }
    }
    */
    // ratio
    self.detail.dragRatioInverse = Math.abs(self.detail.dragPosition - self.detail.dragFinal) / Math.abs(maxCheck - min)
    self.detail.dragRatioInverse = self.detail.dragRatioInverse > 1 ? 1 : self.detail.dragRatioInverse
    self.detail.dragRatioInverse = self.detail.dragRatioInverse < -1 ? -1 : self.detail.dragRatioInverse
    self.detail.dragRatio = 1 - self.detail.dragRatioInverse
    /*
    self.detail.dragRatio = 0
    self.detail.dragRatioInverse = 1 - self.detail.dragRatio
    */
    // toggle
    if (force || (self.checkOn(element) && (!e || !e.type || e.type !== `off.trigger.${self.componentNs}`))) {
      // autoHeight and keepHeight
      if (self.autoHeight || (self.keepHeight && self.initial)) {
        let slideHeight = Xt.dataStorage.get(slide, `${self.ns}SlideHeight`)
        const groupHeight = Xt.dataStorage.get(slide, `${self.ns}GroupHeight`)
        slideHeight = groupHeight > slideHeight ? groupHeight : slideHeight
        if (slideHeight > 0) {
          slideHeight += 'px'
          if (self.autoHeight.style.height !== slideHeight) {
            self.autoHeight.style.height = slideHeight
            // listener dispatch
            slide.dispatchEvent(new CustomEvent(`autoheight.${self.componentNs}`))
          }
          if (self.keepHeight && self.initial) {
            self.keepHeight.style.height = slideHeight
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
        // jump activation
        if (options.jump) {
          for (const target of self.targets) {
            const slideLeft = Xt.dataStorage.get(target, `${self.ns}SlideLeft`)
            const slideWidth = Xt.dataStorage.get(target, `${self.ns}SlideWidth`)
            const slideBound = slideLeft + slideWidth
            if (
              slideLeft < -Math.ceil(self.detail.dragFinal) ||
              slideBound > Math.ceil(self.detail.draggerWidth - self.detail.dragFinal)
            ) {
              target.classList.add('xt-links-none')
              target.classList.remove('xt-jumps-none')
            } else {
              target.classList.add('xt-jumps-none')
              target.classList.remove('xt-links-none')
            }
          }
        }
        // disable links
        self.dragger.classList.remove('xt-links-none')
        self.dragger.classList.remove('xt-jumps-none')
      }
    }
    // super
    super.eventOn(element, force, e)
    // wrap
    self.eventWrap()
    // @FIX no instant dragposition on dragend
    // dragging
    self.detail.dragging = false
    // listener dispatch
    self.dragger.dispatchEvent(new CustomEvent(`dragposition.${self.componentNs}`))
  }

  /**
   * wrap
   */
  eventWrap() {
    const self = this
    const options = self.options
    // logic
    if (options.drag.wrap && !options.drag.manual && self.detail.availableSpace < 0) {
      const index = self.currentIndex
      const slide = self.group[index][0]
      const pos = Xt.dataStorage.get(slide, `${self.ns}GroupPos`)
      const width = Xt.dataStorage.get(slide, `${self.ns}GroupWidth`)
      const first = self.group[self.detail.moveFirst][0]
      const last = self.group[self.detail.moveLast][0]
      const min = Xt.dataStorage.get(first, `${self.ns}GroupPos`)
      const max = Xt.dataStorage.get(last, `${self.ns}GroupPos`)
      let moveIndex
      let dir = 0
      if (pos >= min) {
        dir = -1
        moveIndex = self.getPrevIndex()
      } else if (pos <= max) {
        dir = 1
        moveIndex = self.getNextIndex()
      }
      if (dir) {
        // console.debug(self.detail.moveFirst, self.detail.moveLast, dir, pos, first, min, last, max)
        let translate
        const moveEl = self.getElementsGroups()[moveIndex]
        const move = self.getTargets(moveEl)[0]
        const moveLeft = Xt.dataStorage.get(move, `${self.ns}SlideLeft`)
        const moveWidth = Xt.dataStorage.get(move, `${self.ns}GroupWidth`)
        let movePos = pos
        if (dir < 0) {
          // move translate
          translate = -pos - moveLeft - moveWidth
          // set new activation pos
          if (options.align === 'center') {
            movePos += width / 2 + moveWidth / 2
          } else if (options.align === 'left') {
            movePos += -moveLeft
          } else if (options.align === 'right') {
            movePos += width
          }
          // keep index of moved slides
          self.detail.moveFirst -= 1
        } else if (dir > 0) {
          // move translate
          translate = -pos - moveLeft + width
          // set new activation pos
          if (options.align === 'center') {
            movePos -= width / 2 + moveWidth / 2
          } else if (options.align === 'left') {
            movePos -= -moveLeft
          } else if (options.align === 'right') {
            movePos -= width
          }
          // keep index of moved slides
          self.detail.moveFirst += 1
        }
        // move translate
        if (options.align === 'center') {
          translate += self.detail.draggerWidth / 2 - width / 2
        } else if (options.align === 'left') {
          translate += -moveLeft
        } else if (options.align === 'right') {
          translate += self.detail.draggerWidth - width
        }
        move.style.transform = `translateX(${translate}px)`
        // set new activation pos
        Xt.dataStorage.set(move, `${self.ns}GroupPos`, movePos)
        // keep index of moved slides
        self.detail.moveFirst =
          self.detail.moveFirst < self.group.length ? self.detail.moveFirst : self.detail.moveFirst - self.group.length
        self.detail.moveFirst =
          self.detail.moveFirst >= 0 ? self.detail.moveFirst : self.group.length + self.detail.moveFirst
        // keep index of moved slides
        self.detail.moveLast = self.detail.moveFirst - 1
        self.detail.moveLast =
          self.detail.moveLast < self.group.length ? self.detail.moveLast : self.detail.moveLast - self.group.length
        self.detail.moveLast =
          self.detail.moveLast >= 0 ? self.detail.moveLast : self.group.length + self.detail.moveLast
      }
    }
  }

  /**
   * medialoadedReinit
   */
  eventMediaLoadedReinit() {
    const self = this
    // mediaLoaded
    // @PERF
    for (const slide of self.targets) {
      // needs to recalculate
      Xt.dataStorage.set(slide, `${self.ns}SlideLeft`, slide.offsetLeft)
      Xt.dataStorage.set(slide, `${self.ns}SlideWidth`, slide.offsetWidth)
      Xt.dataStorage.set(slide, `${self.ns}SlideHeight`, slide.children[0].offsetHeight)
    }
    //console.debug('Xt.debug mediaLoadedReinit', self.object)
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
    self.detail.dragUpdated = self.detail.dragStart
    self.detail.dragIndex = self.currentIndex
    // dragging
    self.detail.dragging = true
    self.detail.dragBlock = false
    // listener dispatch
    self.dragger.dispatchEvent(new CustomEvent(`dragstart.${self.componentNs}`))
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
    // disable links
    requestAnimationFrame(() => {
      self.dragger.classList.remove('xt-links-none')
      self.dragger.classList.remove('xt-jumps-none')
    })
    // prevent dragging animation
    self.dragger.classList.remove('xt-duration-none')
    // calc
    /*
    const first = self.group[self.detail.moveFirst][0]
    const last = self.group[self.detail.moveLast][0]
    const min = Xt.dataStorage.get(first, `${self.ns}GroupPos`)
    const max = Xt.dataStorage.get(last, `${self.ns}GroupPos`)
    const maxCheck = options.mode !== 'absolute' ? max : Xt.dataStorage.get(first, `${self.ns}GroupWidth`)
    // @FIX absolute loop
    // console.debug(tr.querySelector('.xt-h4').textContent.replace(/[^0-9]/g, ''))
    if (options.mode === 'absolute') {
      if (self.detail.dragDirection < 0 && self.detail.dragActive === min) {
        self.detail.dragFinal = self.detail.dragFinal + max - maxCheck
        // listener dispatch
        self.dragger.dispatchEvent(new CustomEvent(`dragposition.${self.componentNs}`))
      } else if (self.detail.dragDirection > 0 && self.detail.dragActive === max) {
        self.detail.dragFinal = self.detail.dragFinal - max + maxCheck
        // listener dispatch
        self.dragger.dispatchEvent(new CustomEvent(`dragposition.${self.componentNs}`))
      }
    }
    */
    // @FIX no drag change when click
    if (self.detail.dragStart === self.detail.dragCurrent) {
      self.logicDragreset()
      return
    }
    // dragging
    self.detail.dragging = false
    // @FIX on.xt.slider event after all drag.xt.slider
    requestAnimationFrame(() => {
      // activation
      const direction = Math.sign(self.detail.dragDist)
      if (!self.detail.dragBlock && Math.abs(self.detail.dragDistOther) > Math.abs(self.detail.dragDist)) {
        // drag reset
        self.logicDragreset()
      } else if (Math.abs(self.detail.dragDist) > options.drag.threshold) {
        // get nearest
        const index = self.detail.dragIndex
        const found = self.logicDragfind(index)
        // if on the same slide as we started dragging
        if (found !== index) {
          // goToNum
          self.goToNum(found)
        } else {
          // depending on direction and if direction is also activation direction and drag direction
          if (
            direction > 0 &&
            self.detail.dragDirection > 0 &&
            (options.loop || index !== self.getElementsGroups().length - 1)
          ) {
            self.goToNext(1)
          } else if (direction < 0 && self.detail.dragDirection < 0 && (options.loop || index !== 0)) {
            self.goToPrev(1)
          } else {
            self.logicDragreset()
          }
        }
      } else {
        self.logicDragreset()
      }
      // auto
      self.eventAutoresume()
      // listener dispatch
      self.dragger.dispatchEvent(new CustomEvent(`dragend.${self.componentNs}`))
    })
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
    // calc
    const first = self.group[self.detail.moveFirst][0]
    const last = self.group[self.detail.moveLast][0]
    const min = Xt.dataStorage.get(first, `${self.ns}GroupPos`)
    const max = Xt.dataStorage.get(last, `${self.ns}GroupPos`)
    const maxCheck = options.mode !== 'absolute' ? max : Xt.dataStorage.get(first, `${self.ns}GroupWidth`)
    // val
    let dragFinal = self.detail.dragPosition + (self.detail.dragCurrent - self.detail.dragUpdated) * options.drag.factor
    self.detail.dragUpdated = self.detail.dragCurrent
    // overflow
    if (options.mode !== 'absolute' && options.drag.overflow) {
      // overflow
      const direction = Math.sign(self.detail.dragDist)
      const fncOverflow = options.drag.overflow
      if (dragFinal > min && direction < 0) {
        dragFinal = self.detail.dragPosition + (self.detail.dragCurrent - self.detail.dragStart) * options.drag.factor
        const overflow = dragFinal - min
        dragFinal = min + fncOverflow(overflow)
      } else if (dragFinal < max && direction > 0) {
        dragFinal = self.detail.dragPosition + (self.detail.dragCurrent - self.detail.dragStart) * options.drag.factor
        const overflow = dragFinal - max
        dragFinal = max - fncOverflow(-overflow)
      }
    }
    // val
    self.detail.dragFinalOld = self.detail.dragFinal
    self.detail.dragFinal = dragFinal
    self.detail.dragDirection = self.detail.dragFinal > self.detail.dragFinalOld ? -1 : 1
    // direction
    self.direction = self.detail.dragActive - self.detail.dragFinal < 0 ? -1 : 1
    self.inverse = self.direction < 0
    // ratio
    self.detail.dragRatio = Math.abs(self.detail.dragFinal - self.detail.dragActive) / Math.abs(maxCheck - min)
    self.detail.dragRatioInverse = 1 - self.detail.dragRatio
    // @FIX dragging furiously
    if (self.detail.dragRatio > 1 || self.detail.dragRatio < -1) {
      return
    }
    // activation
    if (options.mode !== 'absolute' && Math.abs(self.detail.dragDist) > options.drag.threshold) {
      // get nearest
      const index = self.currentIndex
      const found = self.logicDragfind(index)
      if (found !== index) {
        const currentPos = Xt.dataStorage.get(self.group[found][0], `${self.ns}GroupPos`)
        const pos = Xt.dataStorage.get(self.group[index][0], `${self.ns}GroupPos`)
        if (pos !== currentPos) {
          super.eventOn(self.getElementsGroups()[found], true)
          self.eventWrap()
        }
      }
    }
    // listener dispatch
    self.dragger.dispatchEvent(new CustomEvent(`dragposition.${self.componentNs}`))
    // listener dispatch
    self.dragger.dispatchEvent(new CustomEvent(`drag.${self.componentNs}`))
  }

  /**
   * element drag reset logic
   */
  logicDragreset() {
    const self = this
    // val
    self.detail.dragFinalOld = self.detail.dragFinal
    self.detail.dragFinal = self.detail.dragActive
    // listener dispatch
    self.dragger.dispatchEvent(new CustomEvent(`dragposition.${self.componentNs}`))
    // listener dispatch
    self.dragger.dispatchEvent(new CustomEvent(`dragreset.${self.componentNs}`))
    // auto
    self.eventAutostart()
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
        const diff = Math.floor(self.detail.dragFinal - pos - (width / 2) * direction)
        // @TEST slide.querySelector('.card').innerHTML = `${diff} ${self.detail.dragDist}`
        // next in direction from drag diff
        if (diff > 0 && (self.detail.dragDirection > 0 || diff <= -self.detail.dragDist)) {
          return i
        }
      }
    } else if (direction > 0) {
      for (let i = self.group.length - 1; i >= 0; i--) {
        const slide = self.group[i][0]
        const pos = Xt.dataStorage.get(slide, `${self.ns}GroupPos`)
        const width = Xt.dataStorage.get(slide, `${self.ns}GroupWidth`)
        const diff = Math.floor(self.detail.dragFinal - pos - (width / 2) * direction)
        // @TEST slide.querySelector('.card').innerHTML = `${diff} ${self.detail.dragDist}`
        // next in direction from drag diff
        if (diff < 0 && (self.detail.dragDirection < 0 || diff >= -self.detail.dragDist)) {
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
      }
      if (self.autoHeight || self.keepHeight) {
        // autoHeight
        self.autoHeight.style.height = ''
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
    self.destroyWrap()
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
   * destroy wrap
   */
  destroyWrap() {
    const self = this
    const options = self.options
    // clean wrap
    self.detail.moveFirst = 0
    self.detail.moveLast = self.group.length - 1
    if (options.drag.wrap && !options.drag.manual) {
      for (const slide of self.targets) {
        slide.style.transform = ''
      }
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
  navigation: '[data-xt-nav]',
  keyboard: {
    selector: '.xt-slides',
  },
  zIndex: {
    targets: {
      start: 50, // same as options.zIndex.targets.start
      factor: -1,
    },
  },
}

//
// export
//

Xt.Slider = Slider
