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
    // dragger
    self.dragger = self.object.querySelector(options.drag.dragger)
    self.destroyElements.push(self.dragger)
    // @PERF
    self.detail.moveDir = 0
    self.detail.moveIndex = null
    self.detail.objectWidth = self.object.offsetWidth
    self.detail.draggerWidth = self.dragger.offsetWidth
    self.detail.draggerLeft = self.dragger.offsetLeft
    // fix when dragger not :visible (offsetWidth === 0) do not initialize
    if (self.detail.draggerWidth === 0) {
      return
    }
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
    self.detail.dragPosition = self.detail.dragFinal = self.detail.dragInitial = 0
    // clean
    self.destroyNooverflow()
    self.destroyDrag()
    self.destroyWrap()
    self.destroyPagination()
    // targets
    self.initScopeTargets()
    // initGroups
    self.initGroups()
    // initPagination
    self.initPagination()
    // elements
    self.initScopeElements()
  }

  /**
   * init groups
   */
  initGroups() {
    const self = this
    const options = self.options
    // @PERF
    for (const slide of self.targets) {
      const slideLeft = slide.offsetLeft
      let slideWidth
      if (options.mode === 'absolute') {
        slideWidth = self.detail.draggerWidth
      } else {
        slideWidth = slide.offsetWidth
      }
      Xt.dataStorage.set(slide, `${self.ns}SlideLeftWrap`, slideLeft)
      Xt.dataStorage.set(slide, `${self.ns}SlideLeft`, slideLeft)
      Xt.dataStorage.set(slide, `${self.ns}SlideWidth`, slideWidth)
    }
    // initGroupsInitial
    self.initGroupsInitial()
    // disable slider if not overflowing
    if (options.nooverflow) {
      if (self.detail.availableSpace <= 0) {
        self.object.classList.add('xt-slider-nooverflow')
        // needed for activation all slides
        self.initGroupsInitial({ group: 1 })
      } else {
        self.object.classList.remove('xt-slider-nooverflow')
      }
    }
    // initGroupsPosition
    self.initGroupsPosition()
    // wrap
    if (
      options.wrap &&
      options.mode !== 'absolute' &&
      !options.drag.manual &&
      self.detail.availableSpace >= self.detail.draggerWidth
    ) {
      self.wrap = true
    } else {
      self.wrap = false
    }
    // wrap indexes
    self.detail.moveFirst = 0
    self.detail.moveLast = self.groups.length - 1
    // initGroupsContain
    self.initGroupsContain()
    // save cloned array of targets because we change it in the first loop and breaks second loop
    for (const group of self.groups) {
      group.targetsInitial = [...group.targets]
    }
    // initGroupsSame
    self.initGroupsSame()
    // @PERF
    for (const group of self.groups) {
      let groupHeight = 0
      for (const target of group.targets) {
        const height = target.offsetHeight
        groupHeight = height > groupHeight ? height : groupHeight
      }
      Xt.dataStorage.set(group.target, `${self.ns}GroupHeight`, groupHeight)
    }
  }

  /**
   * init groups initial
   * @param {Object} params
   * @param {Number} params.group
   */
  initGroupsInitial({ group } = {}) {
    const self = this
    const options = self.options
    // inital groups
    self.groups = []
    let currentGroup = 0
    group = group ?? options.group
    let draggerWidthAvailable = group ? self.detail.draggerWidth * group : 0
    let currentCount = draggerWidthAvailable
    self.detail.availableSpace = -self.detail.draggerWidth
    for (const [i, target] of self.targets.entries()) {
      let targetWidth = Xt.dataStorage.get(target, `${self.ns}SlideWidth`)
      currentCount -= targetWidth
      self.detail.availableSpace += targetWidth
      if (currentCount >= 0) {
        // add to previous group
      } else if (i !== 0) {
        // next group and reset count
        currentGroup++
        currentCount = draggerWidthAvailable
        currentCount -= targetWidth
      }
      // assign group
      if (!self.groups[currentGroup]) {
        self.groups[currentGroup] = {
          target: target,
          targets: [target],
        }
      } else {
        self.groups[currentGroup].targets.push(target)
      }
      target.removeAttribute('data-xt-group') // needed or nooverflow doesn't reset
      target.setAttribute('data-xt-group', `${self.ns}-${currentGroup}`)
      target.removeAttribute('data-xt-group-same')
    }
  }

  /**
   * init groups position
   */
  initGroupsPosition() {
    const self = this
    const options = self.options
    // groups position
    self.usedWidth = 0
    for (const group of self.groups) {
      const slide = group.target
      // vars
      const slideLeft = Xt.dataStorage.get(slide, `${self.ns}SlideLeft`)
      const targets = self.getTargets(slide)
      let groupLeft = Infinity
      let groupWidth = 0
      // vars
      for (const target of targets) {
        // @PERF
        const targetLeft = Xt.dataStorage.get(target, `${self.ns}SlideLeft`)
        // groupLeft is last on the left
        groupLeft = targetLeft < groupLeft ? slideLeft : groupLeft
        if (options.mode === 'absolute') {
          // when absolute mode make fake positions as if all items displaced inside dragger
          groupLeft += self.usedWidth
        }
        groupWidth += Xt.dataStorage.get(target, `${self.ns}SlideWidth`)
        self.usedWidth += groupWidth
      }
      // left with alignment
      let left
      if (options.align === 'center') {
        left = self.detail.draggerWidth / 2 - groupLeft - groupWidth / 2
      } else if (options.align === 'left') {
        left = -groupLeft
      } else if (options.align === 'right') {
        left = self.detail.draggerWidth - groupLeft - groupWidth
      }
      // save position
      for (const target of targets) {
        Xt.dataStorage.set(target, `${self.ns}GroupLeft`, Math.floor(left))
        Xt.dataStorage.set(target, `${self.ns}GroupWidth`, groupWidth)
      }
    }
  }

  /**
   * init groups contain
   */
  initGroupsContain() {
    const self = this
    const options = self.options
    // contain groups
    if (options.contain && !self.wrap && options.mode !== 'absolute' && self.usedWidth > self.detail.draggerWidth) {
      // only if slides overflow dragger
      const first = self.groups[self.detail.moveFirst].target
      const last = self.groups[self.detail.moveLast].target
      const firstLeft = Xt.dataStorage.get(first, `${self.ns}SlideLeft`)
      const lastLeft = Xt.dataStorage.get(last, `${self.ns}SlideLeft`)
      const lastWidth = Xt.dataStorage.get(last, `${self.ns}GroupWidth`)
      const min = -firstLeft
      const max = -lastLeft - lastWidth + self.detail.draggerWidth
      // group contain slides with same position
      let iRemoved = 0
      for (let i = 0; i < self.groups.length - iRemoved; i++) {
        const group = self.groups[i]
        for (const slide of group.targets) {
          let left = Xt.dataStorage.get(slide, `${self.ns}GroupLeft`)
          if (left >= min) {
            left = min
            // first group
            const firstIndex = 0
            let width = Xt.dataStorage.get(self.groups[firstIndex].target, `${self.ns}GroupWidth`)
            width += Xt.dataStorage.get(group.target, `${self.ns}GroupWidth`)
            // put group in firstIndex group
            if (i > firstIndex) {
              const groupStr = self.groups[firstIndex].target.getAttribute('data-xt-group')
              for (const target of group.targets) {
                self.groups[firstIndex].targets.push(target) // put at end
                target.setAttribute('data-xt-group', groupStr)
              }
            }
            // group firstIndex contain new position on dragger limit
            for (const target of self.groups[firstIndex].targets) {
              Xt.dataStorage.set(target, `${self.ns}GroupLeft`, left)
              Xt.dataStorage.set(target, `${self.ns}GroupWidth`, width)
            }
            // splice reindex
            if (i > firstIndex) {
              self.groups.splice(i, 1)
              iRemoved++
              i--
            }
          } else {
            // break loop
            i = self.groups.length
            break
          }
        }
      }
      for (let i = self.groups.length - 1; i >= 0; i--) {
        const group = self.groups[i]
        for (const slide of group.targets) {
          let left = Xt.dataStorage.get(slide, `${self.ns}GroupLeft`)
          if (left <= max) {
            left = max
            // last group
            let lastIndex = self.groups.length - 1
            let width = Xt.dataStorage.get(self.groups[lastIndex].target, `${self.ns}GroupWidth`)
            width += Xt.dataStorage.get(group.target, `${self.ns}GroupWidth`)
            // put group in lastIndex group
            if (i < lastIndex) {
              const groupStr = self.groups[lastIndex].target.getAttribute('data-xt-group')
              for (const target of group.targets) {
                self.groups[lastIndex].targets.unshift(target) // put at start
                target.setAttribute('data-xt-group', groupStr)
              }
            }
            // group lastIndex contain new position on dragger limit
            for (const target of self.groups[lastIndex].targets) {
              Xt.dataStorage.set(target, `${self.ns}GroupLeft`, left)
              Xt.dataStorage.set(target, `${self.ns}GroupWidth`, width)
            }
            // splice reindex
            if (i < lastIndex) {
              self.groups.splice(i, 1)
            }
          } else {
            // break loop
            i = 0
            break
          }
        }
      }
      // save position
      for (const group of self.groups) {
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
      // wrap indexes
      self.detail.moveFirst = 0
      self.detail.moveLast = self.groups.length - 1
    }
  }

  /**
   * init groups same
   */
  initGroupsSame() {
    const self = this
    const options = self.options
    // groups multiple targets if are inside dragger
    if (options.mode !== 'absolute') {
      for (const [z, group] of self.groups.entries()) {
        const slide = group.target
        const groupGroup = slide.getAttribute('data-xt-group')
        const groupWidth = Xt.dataStorage.get(slide, `${self.ns}GroupWidth`)
        const groupLeft = Xt.dataStorage.get(slide, `${self.ns}GroupLeft`)
        const slideLeft = Xt.dataStorage.get(slide, `${self.ns}SlideLeft`)
        const spaceLeft = slideLeft + groupLeft // left space available from slide to dragger
        const spaceRight = self.detail.draggerWidth - spaceLeft - groupWidth // right space available from slide to dragger
        // group on the right of current
        let usedWidth = 0
        for (let i = 0; i <= self.groups.length - 1; i++) {
          // loop from current group to nexts
          let iLoop = z + 1 + i
          // when wrap and more than length, loop to first
          iLoop = self.wrap && iLoop > self.groups.length - 1 ? iLoop - self.groups.length : iLoop
          if (iLoop > self.groups.length - 1) break
          const groupCurrent = self.groups[z]
          for (let k = 0; k < self.groups[iLoop].targetsInitial.length; k++) {
            const targetTargets = self.groups[iLoop].targetsInitial[k]
            const width = Xt.dataStorage.get(targetTargets, `${self.ns}SlideWidth`)
            usedWidth += width
            //console.debug(slide, targetTargets, usedWidth, spaceRight)
            if (usedWidth <= spaceRight) {
              // add to current group this target
              groupCurrent.targets.push(targetTargets) // put at end
              // add to target current group
              const groupStr =
                groupGroup +
                options.groupSeparator +
                targetTargets.getAttribute('data-xt-group') +
                options.groupSeparator +
                (targetTargets.getAttribute('data-xt-group-same') ?? '')
              targetTargets.setAttribute('data-xt-group-same', groupStr)
            } else {
              // break loop
              i = self.groups.length - 1
              break
            }
          }
        }
        // group on the left of current
        usedWidth = 0
        for (let i = 0; i <= self.groups.length - 1; i++) {
          // loop from current group to previouses
          let iLoop = z - 1 - i
          // when wrap and less than 0, loop to last
          iLoop = self.wrap && iLoop < 0 ? iLoop + self.groups.length : iLoop
          if (iLoop < 0) break
          const groupCurrent = self.groups[z]
          for (let k = self.groups[iLoop].targetsInitial.length - 1; k >= 0; k--) {
            const targetTargets = self.groups[iLoop].targetsInitial[k]
            const width = Xt.dataStorage.get(targetTargets, `${self.ns}SlideWidth`)
            usedWidth += width
            //console.debug(slide, targetTargets, usedWidth, spaceLeft)
            if (usedWidth <= spaceLeft) {
              // add to current group this target
              groupCurrent.targets.unshift(targetTargets) // put at start
              // add to target current group
              const groupStr =
                targetTargets.getAttribute('data-xt-group') +
                options.groupSeparator +
                groupGroup +
                options.groupSeparator +
                (targetTargets.getAttribute('data-xt-group-same') ?? '')
              targetTargets.setAttribute('data-xt-group-same', groupStr)
            } else {
              // break loop
              i = self.groups.length - 1
              break
            }
          }
        }
      }
    }
  }

  /**
   * init slider pagination
   */
  initPagination() {
    const self = this
    const options = self.options
    // not when empty it's possible to start empty
    if (!self.targets.length) {
      return false
    }
    // generate elements
    const pags = self.object.querySelectorAll(options.pagination)
    if (!pags.length) {
      console.error('Error: Xt.Slider pagination not found for', self.object)
    }
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
      for (const [i, group] of self.groups.entries()) {
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
              replace += content.innerHTML
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
          html = html.replace(regex, self.groups.length.toString())
        }
        item.innerHTML = html
        if (classes.length) {
          item.children[0].classList.add(...classes)
        }
        item.children[0].setAttribute('data-xt-group', group.target.getAttribute('data-xt-group'))
        container.insertBefore(item.children[0], cloned)
        item.remove()
        self.pags[z][i] = container.querySelectorAll('[data-xt-pag]:not(.hidden)')[i]
        // save group element for activation
        self.groups[i].element = self.pags[0][i]
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
    // keep the same level of raf for custom listener
    requestAnimationFrame(() => {
      // listener dispatch
      self.dragger.dispatchEvent(new CustomEvent(`dragposition.${self.componentNs}`))
    })
    // super after because it sets self.initial = false
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
    // get the right slide
    let found
    for (const group of self.groups) {
      // targetsInitial because multiple pagination
      if (group.element === element || group.targetsInitial.includes(element)) {
        found = group
      }
    }
    if (!found) return
    element = found.element
    const slide = found.target
    // vars
    const first = self.groups[self.detail.moveFirst].target
    const last = self.groups[self.detail.moveLast].target
    const min = Xt.dataStorage.get(first, `${self.ns}GroupLeft`)
    const max = Xt.dataStorage.get(last, `${self.ns}GroupLeft`)
    const maxCheck = options.mode !== 'absolute' ? max : Xt.dataStorage.get(first, `${self.ns}GroupWidth`)
    // fix instant false for dragposition but keep for on and off event
    const instant = self.detail.instant
    // fix absolute loop
    if (options.mode === 'absolute' && options.loop && !self.initial) {
      if (slide === last && (self.detail.dragDirection < 0 || self.detail.dragPosition >= min)) {
        // val
        self.detail.instant = true
        self.detail.dragFinal = max - min + self.detail.dragPosition - maxCheck
        // listener dispatch
        self.dragger.dispatchEvent(new CustomEvent(`dragposition.${self.componentNs}`))
      } else if (slide === first && (self.detail.dragDirection > 0 || self.detail.dragPosition <= max)) {
        self.detail.instant = true
        self.detail.dragFinal = min - max + self.detail.dragPosition + maxCheck
        // listener dispatch
        self.dragger.dispatchEvent(new CustomEvent(`dragposition.${self.componentNs}`))
      }
    }
    // val
    self.detail.dragFinal = Xt.dataStorage.get(slide, `${self.ns}GroupLeft`)
    self.detail.dragInitial = self.detail.dragFinal
    // ratio
    self.detail.dragRatioInverse = Math.abs(self.detail.dragPosition - self.detail.dragFinal) / Math.abs(maxCheck - min)
    self.detail.dragRatioInverse = self.detail.dragRatioInverse > 1 ? 1 : self.detail.dragRatioInverse
    self.detail.dragRatioInverse = self.detail.dragRatioInverse < -1 ? -1 : self.detail.dragRatioInverse
    self.detail.dragRatio = 1 - self.detail.dragRatioInverse
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
    // fix instant false for dragposition but keep for on and off event
    self.detail.instant = false
    // listener dispatch
    self.dragger.dispatchEvent(new CustomEvent(`dragposition.${self.componentNs}`))
    // fix instant false for dragposition but keep for on and off event
    self.detail.instant = instant
    // keep super after dragposition because it sets self.initial etc..
    super.eventOn(element, force, e)
    // wrap
    self.eventWrap(self.currentIndex)
    // keep the same level of raf for custom listener
    requestAnimationFrame(() => {
      // fix instant false for dragposition but keep for on and off event
      self.detail.instant = false
    })
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
      // direction from activation position (also when wrap there's no other way)
      const left = Xt.dataStorage.get(self.groups[self.currentIndex].target, `${self.ns}GroupLeft`)
      const leftOld = Xt.dataStorage.get(self.groups[self.oldIndex].target, `${self.ns}GroupLeft`)
      self.direction = left > leftOld ? -1 : 1
    }
    self.inverse = self.direction < 0
  }

  /**
   * wrap
   */
  eventWrap(index) {
    const self = this
    // logic
    if (self.wrap) {
      const slide = self.groups[index].target
      const left = Xt.dataStorage.get(slide, `${self.ns}GroupLeft`)
      const width = Xt.dataStorage.get(slide, `${self.ns}GroupWidth`)
      // only one call
      let dir = self.direction
      if (dir === 0) {
        // fix on resize and reinit set direction to left (-1) if on left, to right (1) if on right
        dir = self.detail.dragFinal > -self.detail.draggerWidth ? -1 : 1
      }
      if (self.detail.moveDir !== dir || self.detail.moveIndex !== index) {
        self.detail.moveDir = dir
        self.detail.moveIndex = index
        //console.debug(dir, index)
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
  eventMove({ index, dir, left, width, movingSpace } = {}) {
    const self = this
    const options = self.options
    // index
    const tot = self.groups.length
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
    // when only one item index is null
    if (index === null) return
    // logic
    let translate
    const moveGroup = self.groups[index].targetsInitial
    const move = moveGroup[0]
    const moveLeftWrap = Xt.dataStorage.get(move, `${self.ns}SlideLeftWrap`)
    const moveWidth = Xt.dataStorage.get(move, `${self.ns}GroupWidth`)
    let moveLeft = left
    if (dir < 0) {
      // move translate
      translate = -left - moveLeftWrap - moveWidth
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
      translate = -left - moveLeftWrap + width
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
    // set new translate position
    for (const tr of moveGroup) {
      const slideLeft = Xt.dataStorage.get(tr, `${self.ns}SlideLeftWrap`)
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
    self.detail.instant = true
    self.detail.dragIndex = self.currentIndex
    self.detail.dragOld = self.detail.dragStart
    self.detail.dragOverflow = null
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
    // disable interaction
    for (const target of self.targets) {
      target.classList.remove('pointer-events-none')
    }
    // fix no drag change when click
    if (self.detail.dragStart === self.detail.dragCurrent) {
      // listener dispatch
      self.dragger.dispatchEvent(new CustomEvent(`dragend.${self.componentNs}`))
      return
    }
    // raf because on.xt.slider event after all drag.xt.slider
    requestAnimationFrame(() => {
      // only if dragging enough
      if (Math.abs(self.detail.dragDist) > options.drag.threshold) {
        const index = self.currentIndex
        // if on the same slide as we started dragging
        if (index !== self.detail.dragIndex || Math.abs(self.detail.dragDist) >= self.detail.draggerWidth) {
          // goToNum
          self.goToNum(index)
        } else {
          // depending on direction and if direction is not going back
          if (
            Math.sign(self.detail.dragDist) > 0 &&
            self.detail.dragDirection > 0 &&
            (options.loop || self.wrap || index !== self.getElementsGroups().length - 1)
          ) {
            self.goToNext(1)
          } else if (
            Math.sign(self.detail.dragDist) < 0 &&
            self.detail.dragDirection < 0 &&
            (options.loop || self.wrap || index !== 0)
          ) {
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
    const first = self.groups[self.detail.moveFirst].target
    const last = self.groups[self.detail.moveLast].target
    const min = Xt.dataStorage.get(first, `${self.ns}GroupLeft`)
    const max = Xt.dataStorage.get(last, `${self.ns}GroupLeft`)
    const maxCheck = options.mode !== 'absolute' ? max : Xt.dataStorage.get(first, `${self.ns}GroupWidth`)
    // val
    let dragFinal = self.detail.dragPosition + (self.detail.dragCurrent - self.detail.dragOld) * options.drag.factor
    self.detail.dragDirection = self.detail.dragCurrent > self.detail.dragOld ? -1 : 1
    self.detail.dragOld = self.detail.dragCurrent
    // overflow
    if (options.drag.overflow && !self.wrap && options.mode !== 'absolute') {
      const direction = Math.sign(self.detail.dragDist)
      if (dragFinal > min && direction < 0) {
        self.detail.dragOverflow = self.detail.dragOverflow ? self.detail.dragOverflow : self.detail.dragCurrent
        const overflow = self.detail.dragCurrent - self.detail.dragOverflow
        dragFinal = overflow > 0 ? min + options.drag.overflow({ overflow }) : dragFinal
        //console.debug(overflow, dragFinal)
      } else if (dragFinal < max && direction > 0) {
        self.detail.dragOverflow = self.detail.dragOverflow ? self.detail.dragOverflow : self.detail.dragCurrent
        const overflow = self.detail.dragCurrent - self.detail.dragOverflow
        dragFinal = overflow < 0 ? max - options.drag.overflow({ overflow: -overflow }) : dragFinal
      }
    }
    // val
    self.detail.dragFinal = dragFinal
    // set direction
    self.direction = self.detail.dragInitial - self.detail.dragFinal < 0 ? -1 : 1
    self.inverse = self.direction < 0
    // ratio
    self.detail.dragRatio = Math.abs(self.detail.dragFinal - self.detail.dragInitial) / Math.abs(maxCheck - min)
    self.detail.dragRatioInverse = 1 - self.detail.dragRatio
    // fix dragging furiously more than one
    if (options.mode === 'absolute' && (self.detail.dragRatio > 1 || self.detail.dragRatio < -1)) {
      return
    }
    // activation
    if (options.mode !== 'absolute' && Math.abs(self.detail.dragDist) > options.drag.threshold) {
      // get nearest
      const found = self.logicDragfind()
      // get nearest
      if (found !== self.currentIndex) {
        super.eventOn(self.groups[found].element, true)
        self.eventWrap(found)
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
    // set direction
    self.direction = self.direction < 0 ? 1 : -1
    self.inverse = self.direction < 0
    // ratio
    self.detail.dragRatio = self.detail.dragRatioInverse
    self.detail.dragRatioInverse = 1 - self.detail.dragRatio
    // val
    self.detail.instant = false
    self.detail.dragFinal = self.detail.dragInitial
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
    // array of orders based on current display order
    let arr = []
    for (let i = self.detail.moveFirst; i < self.groups.length; i++) {
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
        const slide = self.groups[arr[i]].target
        const left = Xt.dataStorage.get(slide, `${self.ns}GroupLeft`)
        const width = Xt.dataStorage.get(slide, `${self.ns}GroupWidth`)
        //console.debug(self.detail.dragFinal, left - width / 2, left, width, slide, self.detail.draggerWidth)
        // first inside dragger on the left
        if (self.detail.dragFinal > left - width / 2) {
          return arr[i]
        }
      }
    } else if (direction > 0) {
      for (let i = arr.length - 1; i >= 0; i--) {
        const slide = self.groups[arr[i]].target
        const left = Xt.dataStorage.get(slide, `${self.ns}GroupLeft`)
        const width = Xt.dataStorage.get(slide, `${self.ns}GroupWidth`)
        //console.debug(self.detail.dragFinal, left + width / 2, left, width, slide, self.detail.draggerWidth)
        // last inside dragger on the right
        if (self.detail.dragFinal < left + width / 2) {
          return arr[i]
        }
      }
    }
    return
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
    // disable
    if (!self.disabled) {
      // clean
      self.destroyGrab()
      self.destroyIntraction()
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
    // clean
    self.destroyGrab()
    self.destroyIntraction()
    self.destroyNooverflow()
    self.destroyDrag()
    self.destroyAutoheight()
    self.destroyPagination()
    self.destroyWrap()
    // super
    super.destroy(weak)
  }

  /**
   * destroy grab
   */
  destroyGrab() {
    const self = this
    // grab
    self.dragger.classList.remove('xt-grab')
  }

  /**
   * destroy intraction
   */
  destroyIntraction() {
    const self = this
    // disable interaction
    for (const target of self.targets) {
      target.classList.remove('pointer-events-none')
    }
  }

  /**
   * destroy drag
   */
  destroyDrag() {
    const self = this
    const options = self.options
    // drag position
    if (!options.drag.manual) {
      self.dragger.style.transform = ''
    }
  }

  /**
   * destroy nooverflow
   */
  destroyNooverflow() {
    const self = this
    // nooverflow
    self.object.classList.remove('xt-slider-nooverflow')
  }

  /**
   * destroy autoheight
   */
  destroyAutoheight() {
    const self = this
    // autoHeight
    if (self.autoHeight || self.keepHeight) {
      self.autoHeight.style.height = ''
    }
  }

  /**
   * destroy pagination
   */
  destroyPagination() {
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
    threshold: 15,
    factor: 1,
    overflow: ({ overflow }) => {
      return Math.min(Math.log(1 + Math.pow(overflow, 10)), overflow)
    },
  },
  // element
  elements: '[data-xt-pag]:not(.hidden)',
  targets: '.xt-slide',
  elementsInner: ':scope > a, :scope > button',
  targetsInner: false,
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
