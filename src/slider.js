/*!
 * Xtend (https://xtendui.com/)
 * @copyright (c) 2017 - 2021 Riccardo Caroli
 * @license Apache-2.0 (https://github.com/minimit/xtendui/blob/beta/LICENSE)
 */

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
   * init elements, targets and currents
   */
  initScope() {
    const self = this
    const options = self.options
    // vars
    self.initSliderVars()
    // targets
    self.initScopeTargets()
    // @PERF
    self.detail.moveDir = 0
    self.detail.moveIndex = null
    self.detail.objectWidth = self.object.offsetWidth
    self.detail.draggerWidth = self.dragger.offsetWidth
    self.detail.draggerLeft = self.dragger.offsetLeft
    let slideWidthAbsolute
    if (options.mode === 'absolute') {
      for (const slide of self.targets) {
        let slideWidth = slide.offsetWidth
        if (slideWidth) {
          slideWidthAbsolute = slideWidth
          break
        }
      }
    }
    for (const slide of self.targets) {
      const slideLeft = slide.offsetLeft
      let slideWidth
      if (options.mode === 'absolute') {
        slideWidth = slideWidthAbsolute
      } else {
        slideWidth = slide.offsetWidth
      }
      Xt.dataStorage.set(slide, `${self.ns}SlideLeft`, slideLeft)
      Xt.dataStorage.set(slide, `${self.ns}SlideLeftInitial`, slideLeft)
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
   * init slider vars
   */
  initSliderVars() {
    const self = this
    const options = self.options
    // dragger
    self.dragger = self.object.querySelector(options.drag.dragger)
    self.destroyElements.push(self.dragger)
    // grab
    if (!self.disabled) {
      self.dragger.classList.add('xt-grab')
    }
    // autoHeight and keepHeight
    if (options.autoHeight) {
      self.autoHeight = self.object.querySelector(options.autoHeight)
    }
    if (options.keepHeight) {
      self.keepHeight = self.object.querySelector(options.keepHeight)
    }
    // val
    self.detail.dragPosition = self.detail.dragFinal = self.detail.dragActive = 0
  }

  /**
   * init slider group
   */
  initSliderGroup() {
    const self = this
    const options = self.options
    // draggerWidthAvailable
    let draggerWidthAvailable = options.group ? self.detail.draggerWidth * options.group : 0
    // groupInitial
    self.group = []
    let currentGroup = 0
    let currentCount = draggerWidthAvailable
    self.detail.availableSpace = -self.detail.draggerWidth
    for (const [i, target] of self.targets.entries()) {
      let targetWidth = Xt.dataStorage.get(target, `${self.ns}SlideWidth`)
      currentCount -= targetWidth
      self.detail.availableSpace += targetWidth
      if (self.detail.draggerWidth === 0) {
        // fix when dragger not :visible with draggerWidth === 0 groups of 1 slide
        currentGroup = 0
      } else if (currentCount >= 0) {
        // add to previous group
      } else if (i !== 0) {
        // next group and reset count
        currentGroup++
        currentCount = draggerWidthAvailable
        currentCount -= targetWidth
      }
      // assign group
      if (!self.group[currentGroup]) {
        self.group[currentGroup] = {
          target: target,
          targets: [target],
        }
      } else {
        self.group[currentGroup].targets.push(target)
      }
      target.setAttribute('data-xt-group', `${self.ns}-${currentGroup}`)
    }
    self.detail.moveFirst = 0
    self.detail.moveLast = self.group.length - 1
    // disable slider if not overflowing
    if (options.nooverflow) {
      if (self.detail.availableSpace < 0) {
        self.object.classList.add('xt-slider-nooverflow')
      } else {
        self.object.classList.remove('xt-slider-nooverflow')
      }
    }
  }

  /**
   * init slider group positions
   */
  initSliderPos() {
    const self = this
    const options = self.options
    const first = self.group[self.detail.moveFirst].target
    const last = self.group[self.detail.moveLast].target
    // slides position
    let usedWidth = 0
    for (const group of self.group) {
      const slide = group.target
      // vars
      const sl = Xt.dataStorage.get(slide, `${self.ns}SlideLeftInitial`)
      const targets = self.getTargets(slide)
      let slideLeft = Infinity
      let groupWidth = 0
      // vars
      for (const target of targets) {
        // @PERF
        const tl = Xt.dataStorage.get(target, `${self.ns}SlideLeftInitial`)
        slideLeft = tl < slideLeft ? sl : slideLeft
        if (options.mode === 'absolute') {
          // when absolute mode make fake positions as if all items displaced inside dragger
          slideLeft += usedWidth
        }
        groupWidth += Xt.dataStorage.get(target, `${self.ns}SlideWidth`)
        usedWidth += groupWidth
      }
      // left with alignment
      let left
      if (options.align === 'center') {
        left = self.detail.draggerWidth / 2 - slideLeft - groupWidth / 2
      } else if (options.align === 'left') {
        left = -slideLeft
      } else if (options.align === 'right') {
        left = self.detail.draggerWidth - slideLeft - groupWidth
      }
      // save position
      for (const target of targets) {
        Xt.dataStorage.set(target, `${self.ns}GroupLeft`, Math.floor(left))
        Xt.dataStorage.set(target, `${self.ns}GroupWidth`, groupWidth)
      }
    }
    // min max position with contain
    if (options.contain && options.mode !== 'absolute' && !options.wrap && usedWidth > self.detail.draggerWidth) {
      // only if slides overflow dragger
      const firstLeft = Xt.dataStorage.get(first, `${self.ns}SlideLeftInitial`)
      const lastLeft = Xt.dataStorage.get(last, `${self.ns}SlideLeftInitial`)
      const lastWidth = Xt.dataStorage.get(last, `${self.ns}GroupWidth`)
      const min = -firstLeft
      const max = -lastLeft - lastWidth + self.detail.draggerWidth
      // group contain slides with same position
      let iRemoved = 0
      for (let i = 0; i < self.group.length - iRemoved; i++) {
        const group = self.group[i]
        for (const slide of group.targets) {
          let left = Xt.dataStorage.get(slide, `${self.ns}GroupLeft`)
          if (left >= min) {
            left = min
            // first group
            const firstIndex = 0
            let width = Xt.dataStorage.get(self.group[firstIndex].target, `${self.ns}GroupWidth`)
            width += Xt.dataStorage.get(group.target, `${self.ns}GroupWidth`)
            // put group in firstIndex group
            if (i > firstIndex) {
              const groupStr = self.group[firstIndex].target.getAttribute('data-xt-group')
              for (const target of group.targets) {
                self.group[firstIndex].targets.push(target)
                target.setAttribute('data-xt-group', groupStr)
              }
            }
            // group firstIndex contain new position on dragger limit
            for (const target of self.group[firstIndex].targets) {
              Xt.dataStorage.set(target, `${self.ns}GroupLeft`, left)
              Xt.dataStorage.set(target, `${self.ns}GroupWidth`, width)
            }
            // splice reindex
            if (i > firstIndex) {
              self.group.splice(i, 1)
              iRemoved++
              i--
            }
          } else {
            // break loop
            i = self.group.length
            break
          }
        }
      }
      iRemoved = 0
      for (let i = self.group.length - 1; i >= 0; i--) {
        const group = self.group[i]
        for (const slide of group.targets) {
          let left = Xt.dataStorage.get(slide, `${self.ns}GroupLeft`)
          if (left <= max) {
            left = max
            // last group
            let lastIndex = self.group.length - 1 - iRemoved
            let width = Xt.dataStorage.get(self.group[lastIndex].target, `${self.ns}GroupWidth`)
            width += Xt.dataStorage.get(group.target, `${self.ns}GroupWidth`)
            // put group in lastIndex group
            if (i < lastIndex) {
              const groupStr = self.group[lastIndex].target.getAttribute('data-xt-group')
              for (const target of group.targets) {
                self.group[lastIndex].targets.push(target)
                target.setAttribute('data-xt-group', groupStr)
              }
            }
            // group lastIndex contain new position on dragger limit
            for (const target of self.group[lastIndex].targets) {
              Xt.dataStorage.set(target, `${self.ns}GroupLeft`, left)
              Xt.dataStorage.set(target, `${self.ns}GroupWidth`, width)
            }
            // splice reindex
            if (i < lastIndex) {
              self.group.splice(i, 1)
              iRemoved++
              i--
            }
          } else {
            // break loop
            i = 0
            break
          }
        }
      }
      // save position
      for (const group of self.group) {
        let groupWidth = 0
        let left = Xt.dataStorage.get(group.target, `${self.ns}GroupLeft`)
        for (const target of group.targets) {
          groupWidth += Xt.dataStorage.get(target, `${self.ns}SlideWidth`)
        }
        for (const target of group.targets) {
          Xt.dataStorage.set(target, `${self.ns}GroupLeft`, left)
          Xt.dataStorage.set(target, `${self.ns}GroupWidth`, groupWidth)
        }
      }
      // groupInitial
      self.detail.moveFirst = 0
      self.detail.moveLast = self.group.length - 1
    }
    // @PERF
    for (const group of self.group) {
      let groupHeight = 0
      for (const target of group.targets) {
        const height = target.children[0].offsetHeight
        groupHeight = height > groupHeight ? height : groupHeight
      }
      Xt.dataStorage.set(group.target, `${self.ns}GroupHeight`, groupHeight)
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
      const cloned = pag.querySelector('[data-xt-pag].hidden')
      if (!cloned) {
        console.error('Error: Xt.Slider [data-xt-pag].hidden not found for', self.object)
      }
      const container = cloned.parentNode
      // populate
      self.pags[z] = []
      for (const [i, group] of self.group.entries()) {
        const item = document.createElement('div') // needed to set innerHTML instead of outerHTML to do html.search also attributes
        const clone = cloned.cloneNode(true)
        clone.classList.remove('hidden')
        item.append(clone)
        let html = item.innerHTML
        const classes = []
        let regex = new RegExp('xt-content', 'ig')
        if (html.search(regex) !== -1) {
          let replace = ''
          for (const slide of group.targets) {
            const content = slide.querySelector('.xt-slide-content')
            if (content) {
              replace += `<span>${content.innerHTML}</span>`
            }
            const attr = slide.querySelector('[data-xt-pag-classes]')
            if (attr) {
              classes.push(attr.getAttribute('data-xt-pag-classes'))
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
        item.children[0].setAttribute('data-xt-group', group.target.getAttribute('data-xt-group'))
        container.insertBefore(item.children[0], cloned)
        item.remove()
        self.pags[z][i] = container.querySelectorAll('[data-xt-pag]:not(.hidden)')[i]
      }
    }
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
      // fix prevent dragging links and images
      const dragstartFixHandler = Xt.dataStorage.put(window, `dragstart/drag/${self.ns}`, self.eventDragstartFix)
      self.dragger.addEventListener('dragstart', dragstartFixHandler)
    }
    // resize
    const reinitHandler = Xt.dataStorage.put(window, `resize/reinit/${self.ns}`, self.eventReinitHandler.bind(self))
    addEventListener('resize', reinitHandler)
  }

  /**
   * init start
   * @param {Boolean} saveCurrents
   */
  initStart(saveCurrents = false) {
    const self = this
    // listener dispatch
    self.dragger.dispatchEvent(new CustomEvent(`dragposition.${self.componentNs}`))
    // super
    super.initStart(saveCurrents)
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
    cancelAnimationFrame(Xt.dataStorage.get(self.dragger, `${self.ns}DragFrame`))
    Xt.dataStorage.set(
      self.dragger,
      `${self.ns}DragFrame`,
      requestAnimationFrame(() => {
        // logic
        self.logicDragend(e)
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
    // fix targets handler
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
    // vars
    self.detail.dragging = false
    // val
    self.detail.dragFinalOld = self.detail.dragFinal
    self.detail.dragFinal = self.detail.dragActive = Xt.dataStorage.get(slide, `${self.ns}GroupLeft`)
    // calc
    const first = self.group[self.detail.moveFirst].target
    const last = self.group[self.detail.moveLast].target
    const min = Xt.dataStorage.get(first, `${self.ns}GroupLeft`)
    const max = Xt.dataStorage.get(last, `${self.ns}GroupLeft`)
    const maxCheck = options.mode !== 'absolute' ? max : Xt.dataStorage.get(first, `${self.ns}GroupWidth`)
    /*
    // fix absolute loop
    if (options.mode === 'absolute' && !self.detail.dragging) {
      if (self.direction > 0 && self.detail.dragActive === min) {
        //self.detail.dragFinal = self.detail.dragFinal + max - maxCheck
        // listener dispatch
        //self.dragger.dispatchEvent(new CustomEvent(`dragposition.${self.componentNs}`))
      } else if (self.direction < 0 && self.detail.dragActive === max) {
        //self.detail.dragFinal = self.detail.dragFinal - max + maxCheck
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
    // direction
    self.direction = self.detail.dragFinalOld - self.detail.dragFinal < 0 ? -1 : 1
    self.inverse = self.direction < 0
    // autoHeight and keepHeight
    if (self.autoHeight || (self.keepHeight && self.initial)) {
      let groupHeight = Xt.dataStorage.get(slide, `${self.ns}GroupHeight`)
      if (groupHeight > 0) {
        groupHeight += 'px'
        if (self.autoHeight.style.height !== groupHeight) {
          self.autoHeight.style.height = groupHeight
          // listener dispatch
          slide.dispatchEvent(new CustomEvent(`autoheight.${self.componentNs}`))
        }
        if (self.keepHeight && self.initial) {
          self.keepHeight.style.height = groupHeight
        }
      }
    }
    // jump activation
    if (!self.disabled && !options.drag.manual) {
      if (options.jump) {
        for (const slide of self.targets) {
          const left = Xt.dataStorage.get(slide, `${self.ns}SlideLeft`)
          const width = Xt.dataStorage.get(slide, `${self.ns}SlideWidth`)
          if (left < -self.detail.dragFinal || left + width > -self.detail.dragFinal + self.detail.draggerWidth) {
            slide.classList.add('xt-jump')
          } else {
            slide.classList.remove('xt-jump')
          }
        }
      }
    }
    // keep the same level of raf for custom listener
    requestAnimationFrame(() => {
      // listener dispatch
      self.dragger.dispatchEvent(new CustomEvent(`dragposition.${self.componentNs}`))
    })
    // keep super after dragposition because it sets self.initial etc..
    super.eventOn(element, force, e)
    // wrap
    self.eventWrap(self.currentIndex)
  }

  /**
   * wrap
   */
  eventWrap(index) {
    const self = this
    const options = self.options
    // logic
    if (options.wrap && options.mode !== 'absolute' && !options.drag.manual && self.detail.availableSpace >= 0) {
      const slide = self.group[index].target
      const left = Xt.dataStorage.get(slide, `${self.ns}GroupLeft`)
      const width = Xt.dataStorage.get(slide, `${self.ns}GroupWidth`)
      // only one call
      const dir = self.direction
      if (self.detail.moveDir !== dir || self.detail.moveIndex !== index) {
        self.detail.moveDir = dir
        self.detail.moveIndex = index
        self.eventMove({ index, dir, left, width, movingSpace: width })
      }
    }
  }

  /**
   * eventMove
   * @param {Object} params
   * @param {Number} params.index
   * @param {Number} params.dir
   * @param {Number} params.left
   * @param {Number} params.width
   * @param {Number} params.movingSpace
   */
  eventMove({ index, dir, left, width, movingSpace }) {
    const self = this
    const options = self.options
    // index
    const tot = self.group.length
    if (dir < 0) {
      index = self.getPrevIndex(index)
      // keep index of moved slides
      self.detail.moveFirst = index
      self.detail.moveFirst = self.detail.moveFirst < tot ? self.detail.moveFirst : self.detail.moveFirst - tot
      self.detail.moveFirst = self.detail.moveFirst >= 0 ? self.detail.moveFirst : tot + self.detail.moveFirst
      // keep index of moved slides
      self.detail.moveLast = self.detail.moveFirst - 1
      self.detail.moveLast = self.detail.moveLast < tot ? self.detail.moveLast : self.detail.moveLast - tot
      self.detail.moveLast = self.detail.moveLast >= 0 ? self.detail.moveLast : tot + self.detail.moveLast
    } else if (dir > 0) {
      index = self.getNextIndex(index)
      // keep index of moved slides
      self.detail.moveLast = index
      self.detail.moveLast = self.detail.moveLast < tot ? self.detail.moveLast : self.detail.moveLast - tot
      self.detail.moveLast = self.detail.moveLast >= 0 ? self.detail.moveLast : tot + self.detail.moveLast
      // keep index of moved slides
      self.detail.moveFirst = self.detail.moveLast + 1
      self.detail.moveFirst = self.detail.moveFirst < tot ? self.detail.moveFirst : self.detail.moveFirst - tot
      self.detail.moveFirst = self.detail.moveFirst >= 0 ? self.detail.moveFirst : tot + self.detail.moveFirst
    }
    // logic
    let translate
    const moveEl = self.getElementsGroups()[index]
    const moveGroup = self.getTargets(moveEl)
    const move = moveGroup[0]
    const moveLeftInitial = Xt.dataStorage.get(move, `${self.ns}SlideLeftInitial`)
    const moveWidth = Xt.dataStorage.get(move, `${self.ns}GroupWidth`)
    let moveLeft = left
    if (dir < 0) {
      // move translate
      translate = -left - moveLeftInitial - moveWidth
      // set new activation position
      if (options.align === 'center') {
        moveLeft += width / 2 + moveWidth / 2
      } else if (options.align === 'left') {
        moveLeft += moveWidth
      } else if (options.align === 'right') {
        moveLeft += width
      }
    } else if (dir > 0) {
      // move translate
      translate = -left - moveLeftInitial + width
      // set new activation position
      if (options.align === 'center') {
        moveLeft -= width / 2 + moveWidth / 2
      } else if (options.align === 'left') {
        moveLeft -= width
      } else if (options.align === 'right') {
        moveLeft -= moveWidth
      }
    }
    // set new activation position
    for (const tr of moveGroup) {
      Xt.dataStorage.set(tr, `${self.ns}GroupLeft`, moveLeft)
    }
    // move translate
    const moveAlignCenter = self.detail.draggerWidth / 2 - width / 2
    const moveAlignNone = 0
    const moveAlignFull = self.detail.draggerWidth - width
    if (options.align === 'center') {
      translate += moveAlignCenter
    } else if (options.align === 'left') {
      translate += moveAlignNone
    } else if (options.align === 'right') {
      translate += moveAlignFull
    }
    for (const tr of moveGroup) {
      tr.style.transform = `translateX(${translate}px)`
    }
    // set new activation position
    for (const tr of moveGroup) {
      const slideLeft = Xt.dataStorage.get(tr, `${self.ns}SlideLeftInitial`)
      Xt.dataStorage.set(tr, `${self.ns}SlideLeft`, slideLeft + translate)
    }
    // loop available width
    if (dir < 0) {
      if (options.align === 'center') {
        movingSpace += moveWidth + moveAlignCenter
      } else if (options.align === 'left') {
        movingSpace += moveWidth + moveAlignFull
      } else if (options.align === 'right') {
        movingSpace += moveWidth + moveAlignNone
      }
    } else if (dir > 0) {
      if (options.align === 'center') {
        movingSpace += moveWidth + moveAlignCenter
      } else if (options.align === 'left') {
        movingSpace += moveWidth + moveAlignNone
      } else if (options.align === 'right') {
        movingSpace += moveWidth + moveAlignFull
      }
    }
    if (movingSpace < self.detail.draggerWidth) {
      self.eventMove({ index, dir, left: moveLeft, width: moveWidth, movingSpace })
    }
  }

  /**
   * medialoadedReinit
   */
  eventMediaLoadedReinit() {
    const self = this
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
    if (e.clientX !== undefined) {
      self.detail.dragStart = e.clientX
      self.detail.dragStartOther = e.clientY
    } else if (e.touches && e.touches.length) {
      self.detail.dragStart = e.touches[0].clientX
      self.detail.dragStartOther = e.touches[0].clientY
    }
    // auto
    self.eventAutopause()
    // vars
    self.detail.dragging = true
    self.detail.dragStartUpdated = self.detail.dragStart
    self.detail.dragStartOverflow = null
    self.detail.dragIndex = self.currentIndex
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
    if (e.clientX !== undefined) {
      self.detail.dragCurrent = e.clientX
      self.detail.dragCurrentOther = e.clientY
    } else if (e.touches && e.touches.length) {
      self.detail.dragCurrent = e.touches[0].clientX
      self.detail.dragCurrentOther = e.touches[0].clientY
    }
    // vars
    self.detail.dragging = false
    // disable interaction
    for (const target of self.targets) {
      target.classList.remove('pointer-events-none')
    }
    // calc
    /*
    const first = self.group[self.detail.moveFirst].target
    const last = self.group[self.detail.moveLast].target
    const min = Xt.dataStorage.get(first, `${self.ns}GroupLeft`)
    const max = Xt.dataStorage.get(last, `${self.ns}GroupLeft`)
    const maxCheck = options.mode !== 'absolute' ? max : Xt.dataStorage.get(first, `${self.ns}GroupWidth`)
    // fix absolute loop
    //console.debug(tr.querySelector('.xt-h4').textContent.replace(/[^0-9]/g, ''))
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
    // fix no drag change when click
    if (self.detail.dragStart === self.detail.dragCurrent) {
      self.logicDragreset()
      return
    }
    // fix on.xt.slider event after all drag.xt.slider
    requestAnimationFrame(() => {
      // activation
      const direction = Math.sign(self.detail.dragDist)
      if (Math.abs(self.detail.dragDist) > options.drag.threshold) {
        // get nearest
        const index = self.currentIndex
        const found = self.detail.dragIndex
        // if on the same slide as we started dragging
        if (found !== index || Math.abs(self.detail.dragDist) >= self.detail.draggerWidth) {
          // goToNum
          self.goToNum(found)
        } else {
          // depending on direction and if direction is also activation direction and drag direction
          if (
            direction > 0 &&
            self.detail.dragDirection > 0 &&
            (options.loop || options.wrap || index !== self.getElementsGroups().length - 1)
          ) {
            self.goToNext(1)
          } else if (direction < 0 && self.detail.dragDirection < 0 && (options.loop || options.wrap || index !== 0)) {
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
    if (e.clientX !== undefined) {
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
      // disable interaction
      for (const target of self.targets) {
        target.classList.add('pointer-events-none')
      }
    }
    // check drag direction
    if (Math.abs(self.detail.dragDistOther) > Math.abs(self.detail.dragDist)) {
      // prevent drag logic
      return
    } else {
      // prevent page scroll
      if (e.cancelable) {
        e.preventDefault()
      }
    }
    // calc
    const first = self.group[self.detail.moveFirst].target
    const last = self.group[self.detail.moveLast].target
    const min = Xt.dataStorage.get(first, `${self.ns}GroupLeft`)
    const max = Xt.dataStorage.get(last, `${self.ns}GroupLeft`)
    const maxCheck = options.mode !== 'absolute' ? max : Xt.dataStorage.get(first, `${self.ns}GroupWidth`)
    // val
    let dragFinal =
      self.detail.dragPosition + (self.detail.dragCurrent - self.detail.dragStartUpdated) * options.drag.factor
    self.detail.dragStartUpdated = self.detail.dragCurrent
    // overflow
    if (options.drag.overflow) {
      const direction = Math.sign(self.detail.dragDist)
      if (dragFinal > min && direction < 0) {
        self.detail.dragStartOverflow = self.detail.dragStartOverflow
          ? self.detail.dragStartOverflow
          : self.detail.dragStartUpdated
        const overflow = self.detail.dragStartUpdated - self.detail.dragStartOverflow
        dragFinal = overflow > 0 ? min + options.drag.overflow({ overflow }) : dragFinal
        //console.debug(overflow, dragFinal)
      } else if (dragFinal < max && direction > 0) {
        self.detail.dragStartOverflow = self.detail.dragStartOverflow
          ? self.detail.dragStartOverflow
          : self.detail.dragStartUpdated
        const overflow = self.detail.dragStartUpdated - self.detail.dragStartOverflow
        dragFinal = overflow < 0 ? max - options.drag.overflow({ overflow: -overflow }) : dragFinal
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
    // fix absolute dragging more than one
    if (options.mode === 'absolute' && (self.detail.dragRatio > 1 || self.detail.dragRatio < -1)) {
      //return
    }
    // activation
    if (options.mode !== 'absolute' && Math.abs(self.detail.dragDist) > options.drag.threshold) {
      // get nearest
      const found = self.logicDragfind() ?? self.detail.dragIndex
      self.eventWrap(found)
      self.detail.dragIndex = found
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
   * @return {Boolean} Found index
   */
  logicDragfind() {
    const self = this
    const options = self.options
    // array of orders based on current display order
    let arr = []
    for (let i = self.detail.moveFirst; i < self.group.length; i++) {
      arr.push(i)
    }
    if (self.detail.moveFirst !== 0) {
      for (let i = 0; i <= self.detail.moveLast; i++) {
        arr.push(i)
      }
    }
    // find
    const direction = Math.sign(self.detail.dragDist)
    if (direction < 0) {
      for (let i = 0; i < arr.length; i++) {
        const slide = self.group[arr[i]].target
        let left = Xt.dataStorage.get(slide, `${self.ns}SlideLeft`)
        const groupWidth = Xt.dataStorage.get(slide, `${self.ns}GroupWidth`)
        // loop available width
        if (options.align === 'center') {
          left += 0
        } else if (options.align === 'left') {
          left += groupWidth / 2
        } else if (options.align === 'right') {
          left += -self.detail.draggerWidth / 2 + groupWidth
        }
        // first inside dragger on the left
        if (self.detail.dragFinal > -left) {
          return arr[i]
        }
      }
    } else if (direction > 0) {
      for (let i = arr.length - 1; i >= 0; i--) {
        const slide = self.group[arr[i]].target
        let left = Xt.dataStorage.get(slide, `${self.ns}SlideLeft`)
        const groupWidth = Xt.dataStorage.get(slide, `${self.ns}GroupWidth`)
        // loop available width
        if (options.align === 'center') {
          left -= groupWidth
        } else if (options.align === 'left') {
          left -= groupWidth / 2
        } else if (options.align === 'right') {
          left -= self.detail.draggerWidth - groupWidth / 2
        }
        // last inside dragger on the right
        if (self.detail.dragFinal < -left) {
          return arr[i]
        }
      }
    }
    return
  }

  /*

    // loop available width
    const moveAlignCenter = self.detail.draggerWidth / 2 - width / 2
    const moveAlignNone = 0
    const moveAlignFull = self.detail.draggerWidth - width
    if (dir < 0) {
      if (options.align === 'center') {
        movingSpace += moveWidth + moveAlignCenter
      } else if (options.align === 'left') {
        movingSpace += moveWidth + moveAlignFull
      } else if (options.align === 'right') {
        movingSpace += moveWidth + moveAlignNone
      }
    } else if (dir > 0) {
      if (options.align === 'center') {
        movingSpace += moveWidth + moveAlignCenter
      } else if (options.align === 'left') {
        movingSpace += moveWidth + moveAlignNone
      } else if (options.align === 'right') {
        movingSpace += moveWidth + moveAlignFull
      }
    }
    */

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
        // disable interaction
        for (const target of self.targets) {
          target.classList.remove('pointer-events-none')
        }
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
    // clean wrap also if no wrap in options
    for (const slide of self.targets) {
      slide.style.transform = ''
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
  group: false,
  align: 'center',
  contain: true,
  wrap: false,
  nooverflow: true,
  autoHeight: false,
  keepHeight: false,
  pagination: '.xt-slider-pagination',
  drag: {
    dragger: '.xt-slides',
    manual: false,
    threshold: 25,
    factor: 1,
    overflow: ({ overflow }) => {
      return Math.min(Math.log(1 + Math.pow(overflow, 10)), overflow)
    },
  },
  // element
  elements: '[data-xt-pag]:not(.hidden)',
  targets: '.xt-slide',
  // quantity
  min: 1,
  max: 1,
  // event
  on: 'click',
  off: 'click',
  // timing
  queue: false,
  // other
  jump: false,
  navigation: '[data-xt-nav]',
  keyboard: {
    selector: '.xt-slides',
  },
  zIndex: {
    targets: {
      start: 200, // same as options.zIndex.targets.start
      factor: -1,
    },
  },
}

//
// export
//

Xt.Slider = Slider
