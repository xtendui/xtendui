/*!
 * Xtend UI (https://xtendui.com/)
 * @copyright (c) 2017 - 2021 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/beta/LICENSE)
 */

import { Xt } from './xt'
import './toggle'
import RJSON from 'relaxed-json'

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
   * init
   */
  init() {
    const self = this
    // vars
    self.drag = {}
    // super after
    super.init()
  }

  /**
   * init elements, targets and currents
   */
  initScope() {
    const self = this
    const options = self.options
    // dragger
    self.dragger = self.container.querySelector(options.drag.dragger)
    self.destroyElements.push(self.dragger)
    // dragger initial
    self.dragger.classList.add('initial')
    // @PERF
    self.drag.wrapDir = 0
    self.drag.wrapIndex = null
    self.drag.size = self.dragger.offsetWidth
    // fix when dragger not :visible (offsetWidth === 0) do not initialize
    if (self.drag.size === 0) {
      return
    }
    // grab
    if (!self.disabled) {
      self.dragger.classList.add('xt-grab')
    }
    // autoHeight and keepHeight
    if (options.autoHeight) {
      self.autoHeight = self.container.querySelector(options.autoHeight)
    }
    if (options.keepHeight) {
      self.keepHeight = self.container.querySelector(options.keepHeight)
    }
    // val
    self.drag.position = self.drag.final = self.drag.initial = 0
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
   * init elements
   */
  initScopeElements() {
    super.initScopeElements()
    const self = this
    const options = self.options
    // elements
    self.elements = self.elements.filter(x => !x.classList.contains(...options.elementsTemplate.split(' ')))
  }

  /**
   * init groups
   */
  initGroups() {
    const self = this
    const options = self.options
    // @PERF
    let sizeContent = 0
    for (const tr of self.targets) {
      let trLeft
      let trWidth
      if (options.mode === 'absolute') {
        trLeft = 0
        trWidth = self.drag.size
      } else {
        trLeft = tr.offsetLeft
        trWidth = tr.offsetWidth
      }
      sizeContent += trWidth
      Xt.dataStorage.set(tr, `${self.ns}TrLeftWrap`, trLeft)
      Xt.dataStorage.set(tr, `${self.ns}TrLeft`, trLeft)
      Xt.dataStorage.set(tr, `${self.ns}TrWidth`, trWidth)
    }
    self.drag.sizeContent = sizeContent
    // initGroupsInitial
    self.initGroupsInitial()
    // disable slider if not overflowing
    if (options.nooverflow) {
      if (self.drag.availableSpace <= 0) {
        self.dragger.classList.add(...options.nooverflow.split(' '))
        // disabledManual
        self.disabledManual = true
        // needed for activation all slides
        self.initGroupsInitial({ group: 1 })
      } else {
        self.destroyNooverflow()
      }
    }
    // initGroupsPosition
    self.initGroupsPosition()
    // wrap
    if (
      options.wrap !== false &&
      options.mode !== 'absolute' &&
      self.drag.availableSpace > self.drag.size * options.wrap
    ) {
      self.wrap = true
    } else {
      self.wrap = false
    }
    // wrap indexes
    self.drag.wrapFirst = 0
    self.drag.wrapLast = self.groups.length - 1
    // initGroupsContain
    self.initGroupsContain()
    // save cloned array of targets because we change it in the first loop and breaks second loop
    for (const group of self.groups) {
      group.targetsInitial = [...group.targets]
    }
    // initGroupsSame
    self.initGroupsSame()
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
    const sizeAvailable = group ? self.drag.size * group : 0
    let currentCount = sizeAvailable
    self.drag.availableSpace = -self.drag.size
    for (const [i, target] of self.targets.entries()) {
      const targetWidth = Xt.dataStorage.get(target, `${self.ns}TrWidth`)
      currentCount -= targetWidth
      self.drag.availableSpace += targetWidth
      if (currentCount >= 0) {
        // add to previous group
      } else if (i !== 0) {
        // next group and reset count
        currentGroup++
        currentCount = sizeAvailable
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
      const tr = group.target
      // vars
      const trLeft = Xt.dataStorage.get(tr, `${self.ns}TrLeft`)
      const targets = self.getTargets({ el: tr })
      let groupLeft = Infinity
      let groupWidth = 0
      // vars
      for (const tr of targets) {
        // @PERF
        const targetLeft = Xt.dataStorage.get(tr, `${self.ns}TrLeft`)
        // groupLeft is last on the left
        groupLeft = targetLeft < groupLeft ? trLeft : groupLeft
        if (options.mode === 'absolute') {
          // when absolute mode make fake positions as if all items displaced inside dragger
          groupLeft += self.usedWidth
        }
        groupWidth += Xt.dataStorage.get(tr, `${self.ns}TrWidth`)
        self.usedWidth += groupWidth
      }
      // left with alignment
      let left
      if (options.align === 'center') {
        left = self.drag.size / 2 - groupLeft - groupWidth / 2
      } else if (options.align === 'left') {
        left = -groupLeft
      } else if (options.align === 'right') {
        left = self.drag.size - groupLeft - groupWidth
      }
      // save position
      for (const tr of targets) {
        Xt.dataStorage.set(tr, `${self.ns}GroupLeft`, Math.floor(left))
        Xt.dataStorage.set(tr, `${self.ns}GroupWidth`, groupWidth)
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
    if (options.contain && options.mode !== 'absolute' && !self.wrap && self.usedWidth > self.drag.size) {
      // only if slides overflow dragger
      const first = self.groups[self.drag.wrapFirst].target
      const last = self.groups[self.drag.wrapLast].target
      const firstLeft = Xt.dataStorage.get(first, `${self.ns}TrLeft`)
      const lastLeft = Xt.dataStorage.get(last, `${self.ns}TrLeft`)
      const lastWidth = Xt.dataStorage.get(last, `${self.ns}GroupWidth`)
      const min = -firstLeft
      const max = -lastLeft - lastWidth + self.drag.size
      // group contain slides with same position
      let iRemoved = 0
      for (let i = 0; i < self.groups.length - iRemoved; i++) {
        const group = self.groups[i]
        for (const tr of group.targets) {
          let left = Xt.dataStorage.get(tr, `${self.ns}GroupLeft`)
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
            for (const tr of self.groups[firstIndex].targets) {
              Xt.dataStorage.set(tr, `${self.ns}GroupLeft`, left)
              Xt.dataStorage.set(tr, `${self.ns}GroupWidth`, width)
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
        for (const tr of group.targets) {
          let left = Xt.dataStorage.get(tr, `${self.ns}GroupLeft`)
          if (left <= max) {
            left = max
            // last group
            const lastIndex = self.groups.length - 1
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
        const left = Xt.dataStorage.get(group.target, `${self.ns}GroupLeft`)
        for (const tr of group.targets) {
          groupWidth += Xt.dataStorage.get(tr, `${self.ns}TrWidth`)
        }
        for (const tr of group.targets) {
          Xt.dataStorage.set(tr, `${self.ns}GroupLeft`, left)
          Xt.dataStorage.set(tr, `${self.ns}GroupWidth`, groupWidth)
        }
      }
      // wrap indexes
      self.drag.wrapFirst = 0
      self.drag.wrapLast = self.groups.length - 1
    }
  }

  /**
   * init groups same
   */
  initGroupsSame() {
    const self = this
    const options = self.options
    // groups multiple targets if are inside dragger
    if (options.groupSame && options.mode !== 'absolute') {
      for (const [z, group] of self.groups.entries()) {
        const tr = group.target
        const groupGroup = tr.getAttribute('data-xt-group')
        const groupWidth = Xt.dataStorage.get(tr, `${self.ns}GroupWidth`)
        const groupLeft = Xt.dataStorage.get(tr, `${self.ns}GroupLeft`)
        const trLeft = Xt.dataStorage.get(tr, `${self.ns}TrLeft`)
        const spaceLeft = trLeft + groupLeft // left space available from slide to dragger
        const spaceRight = self.drag.size - spaceLeft - groupWidth // right space available from slide to dragger
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
            const width = Xt.dataStorage.get(targetTargets, `${self.ns}TrWidth`)
            usedWidth += width
            //console.debug(tr, targetTargets, usedWidth, spaceRight)
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
            const width = Xt.dataStorage.get(targetTargets, `${self.ns}TrWidth`)
            usedWidth += width
            //console.debug(tr, targetTargets, usedWidth, spaceLeft)
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
    const pags = self.container.querySelectorAll(options.pagination)
    if (!pags.length) {
      console.error('Error: Xt.Slider pagination not found for', self.container)
    }
    // pags
    self.pags = self.pags ? self.pags : []
    const template = `${options.elements}.${options.elementsTemplate.split(' ').join('.')}`
    const templateInverse = `${options.elements}:not(.${options.elementsTemplate.split(' ').join('.')})`
    for (const [z, pag] of pags.entries()) {
      // vars
      const cloned = pag.querySelector(template)
      if (!cloned) {
        console.error(`Error: Xt.Slider ${template} not found inside`, pag)
      }
      const container = cloned.parentNode
      // populate
      self.pags[z] = []
      for (const [i, group] of self.groups.entries()) {
        const item = document.createElement('div') // needed to set innerHTML instead of outerHTML to do html.search also attributes
        const clone = cloned.cloneNode(true)
        clone.classList.remove(...options.elementsTemplate.split(' '))
        item.append(clone)
        let html = item.innerHTML
        const classes = ['xt-clone']
        let regex = new RegExp('xt-content', 'ig')
        if (html.search(regex) !== -1) {
          let replace = ''
          for (const tr of group.targets) {
            const content = tr.querySelector('[data-xt-slider-content]')
            if (content) {
              replace += content.innerHTML
            }
            const attr = tr.querySelector('[data-xt-slider-element-classes]')
            if (attr) {
              classes.push(attr.getAttribute('data-xt-slider-element-classes'))
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
        self.pags[z][i] = container.querySelectorAll(templateInverse)[i]
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
        self.container.setAttribute('aria-roledescription', 'carousel')
      }
    }
  }

  /**
   * init events
   */
  initEvents() {
    super.initEvents()
    const self = this
    // init
    const initHandler = Xt.dataStorage.put(self.container, `init/${self.ns}`, self.eventInitHandler.bind(self))
    self.container.addEventListener('init.xt.slider', initHandler)
    // dragposition
    const dragpositionHandler = Xt.dataStorage.put(
      self.dragger,
      `dragposition/${self.ns}`,
      self.eventDragpositionHandler.bind(self)
    )
    self.dragger.addEventListener('dragposition.xt.slider', dragpositionHandler)
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
    // resize
    const reinitHandler = Xt.dataStorage.put(window, `resize/reinit/${self.ns}`, Xt.eventReinit.bind(null, { self }))
    addEventListener('resize', reinitHandler)
  }

  /**
   * init start
   * @param {Object} params
   * @param {Boolean} params.save Save currents
   */
  initStart({ save = false } = {}) {
    const self = this
    // init drag
    Xt.frame({
      el: self.container,
      func: () => {
        // dispatch event
        self.dragger.dispatchEvent(new CustomEvent(`dragposition.${self.componentNs}`))
      },
      ns: `${self.ns}InitDrag`,
    })
    // super after
    super.initStart({ save })
  }

  //
  // handler
  //

  /**
   * init handler
   * @param {Event} e
   */
  eventInitHandler() {
    const self = this
    // dragger initial
    self.dragger.classList.remove('initial')
  }

  /**
   * drag position handler
   * @param {Event} e
   */
  eventDragpositionHandler() {
    const self = this
    const options = self.options
    // dragposition
    if (!options.dragposition && options.mode !== 'absolute') {
      self.initial || self.drag.instant ? self.dragger.classList.remove('on') : self.dragger.classList.add('on')
      // set internal position to resume animation mid dragging
      self.drag.position = self.drag.final
      self.dragger.style.transform = `translateX(${self.drag.final}px)`
    }
  }

  /**
   * drag fix
   * @param {Event} e
   */
  eventDragstartFix(e) {
    e.preventDefault()
  }

  /**
   * drag on handler
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
        if (!Xt.contains({ els: eventLimit, tr: e.target })) {
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
   * drag off handler
   * @param {Event} e
   */
  eventDragendHandler(e) {
    const self = this
    const options = self.options
    // logic
    if (options.eventLimit) {
      const eventLimit = self.containerTargets.querySelectorAll(options.eventLimit)
      if (!Xt.contains({ els: eventLimit, tr: e.target })) {
        self.eventDragend(e)
      }
    } else {
      self.eventDragend(e)
    }
  }

  /**
   * drag on
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
   * drag handler
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
   * drag off
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
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.el To be activated
   * @param {Boolean} params.force
   * @param {Event} e
   * @return {Boolean} If activated
   */
  eventOn({ el, force = false }, e = null) {
    const self = this
    const options = self.options
    // disabled
    if (self.disabled) {
      return
    }
    // get the right slide
    let found
    for (const group of self.groups) {
      // targetsInitial because multiple pagination
      if (group.element === el || group.targetsInitial.includes(el)) {
        found = group
      }
    }
    if (!found) return
    const group = found
    el = found.element
    const tr = found.target
    // fix keep self.drag.instant
    const isDrag = self.drag.instant
    // activation
    super.eventOn({ el, force }, e)
    // vars
    const first = self.groups[self.drag.wrapFirst].target
    const last = self.groups[self.drag.wrapLast].target
    const min = Xt.dataStorage.get(first, `${self.ns}GroupLeft`)
    const max = Xt.dataStorage.get(last, `${self.ns}GroupLeft`)
    const maxCheck = options.mode !== 'absolute' ? max : Xt.dataStorage.get(first, `${self.ns}GroupWidth`)
    // val
    self.drag.initial = Xt.dataStorage.get(tr, `${self.ns}GroupLeft`)
    // fix absolute loop
    if (options.mode === 'absolute' && options.loop && !self.initial) {
      if (tr === last && (self.drag.direction < 0 || self.drag.position >= min)) {
        // val
        self.drag.final = max - min + self.drag.position - maxCheck
        // dispatch event
        self.drag.instant = true
        self.dragger.dispatchEvent(new CustomEvent(`dragposition.${self.componentNs}`))
      } else if (tr === first && (self.drag.direction > 0 || self.drag.position <= max)) {
        self.drag.final = min - max + self.drag.position + maxCheck
        // dispatch event
        self.drag.instant = true
        self.dragger.dispatchEvent(new CustomEvent(`dragposition.${self.componentNs}`))
      }
    }
    // fix absolute multi step activation (only if not already applied fix)
    if (options.mode === 'absolute' && !self.drag.instant && self.direction) {
      const diff = self.drag.initial - self.drag.position
      //console.debug(diff, self.drag.initial, self.drag.position)
      if (Math.abs(diff) > maxCheck) {
        // remainder add or remove maxCheck depending on direction
        let remainder = diff % maxCheck
        remainder += maxCheck * self.direction
        // val
        self.drag.final = self.drag.initial - remainder
        //console.debug(diff, remainder, self.drag.position, self.drag.final, self.drag.initial)
        // dispatch event
        self.drag.instant = true
        self.dragger.dispatchEvent(new CustomEvent(`dragposition.${self.componentNs}`))
      }
    }
    // val
    self.drag.final = self.drag.initial
    // ratio
    self.drag.ratioInverse = Math.abs(self.drag.final - self.drag.position) / Math.abs(maxCheck - min)
    self.drag.ratio = 1 - self.drag.ratioInverse
    // dispatch event
    self.drag.instant = false
    self.dragger.dispatchEvent(new CustomEvent(`dragposition.${self.componentNs}`))
    // fix keep self.drag.instant
    self.drag.instant = isDrag
    Xt.frame({
      el: self.container,
      func: () => {
        self.drag.instant = false
      },
      ns: `${self.ns}isDrag`,
    })
    // wrap after self.drag.final for proper initial initialization direction (e.g. slider api)
    self.eventWrap({ index: self.index })
    // autoHeight and keepHeight
    if (self.autoHeight || (self.keepHeight && self.initial)) {
      let groupHeight = 0
      for (const tr of group.targets) {
        const content = tr.children.length ? tr.children[0] : tr
        const height = content.offsetHeight
        groupHeight = height > groupHeight ? height : groupHeight
      }
      if (groupHeight > 0) {
        groupHeight += 'px'
        if (self.autoHeight.style.height !== groupHeight) {
          self.autoHeight.style.height = groupHeight
          // dispatch event
          tr.dispatchEvent(new CustomEvent(`autoheight.${self.componentNs}`))
        }
        if (self.keepHeight && self.initial) {
          self.keepHeight.style.height = groupHeight
        }
      }
    }
  }

  /**
   * set direction
   */
  setDirection() {
    const self = this
    // set direction
    if (self.index === null || self.index === self.oldIndex) {
      // initial direction and same index direction
      self.direction = 0
    } else if (self.inverse !== null) {
      // forced value
      self.direction = self.inverse ? -1 : 1
    } else {
      // direction before setting positions we check target activations positions (also when wrap there's no other way)
      const left = Xt.dataStorage.get(self.groups[self.index].target, `${self.ns}GroupLeft`)
      const leftOld = Xt.dataStorage.get(self.groups[self.oldIndex].target, `${self.ns}GroupLeft`)
      self.direction = left > leftOld ? -1 : 1
    }
    self.inverse = self.direction < 0
  }

  /**
   * wrap
   * @param {Object} params
   * @param {Boolean} params.index
   */
  eventWrap({ index } = {}) {
    const self = this
    // logic
    if (self.wrap) {
      const tr = self.groups[index].target
      const left = Xt.dataStorage.get(tr, `${self.ns}GroupLeft`)
      const width = Xt.dataStorage.get(tr, `${self.ns}GroupWidth`)
      // only one call
      let direction = self.direction
      if (!direction) {
        // fix on init and reinit set direction to left (-1) if on left, to right (1) if on right
        direction = self.drag.final > -self.drag.size ? -1 : 1
      }
      if (self.drag.wrapDir !== direction || self.drag.wrapIndex !== index) {
        self.drag.wrapDir = direction
        self.drag.wrapIndex = index
        self.eventMove({ index, direction, left, width, movingSpace: 0 })
      }
    }
  }

  /**
   * eventMove
   * @param {Object} params
   * @param {Number} params.index
   * @param {Number} params.direction
   * @param {Number} params.left
   * @param {Number} params.width
   * @param {Number} params.movingSpace
   */
  eventMove({ index, direction, left, width, movingSpace } = {}) {
    const self = this
    const options = self.options
    // index
    const tot = self.groups.length
    if (direction < 0) {
      index = self.getPrevIndex({ index })
      // keep index of moved slides
      self.drag.wrapFirst = index
      self.drag.wrapFirst = self.drag.wrapFirst < tot ? self.drag.wrapFirst : self.drag.wrapFirst - tot
      self.drag.wrapFirst = self.drag.wrapFirst >= 0 ? self.drag.wrapFirst : tot + self.drag.wrapFirst
      // keep index of moved slides
      self.drag.wrapLast = self.drag.wrapFirst - 1
      self.drag.wrapLast = self.drag.wrapLast < tot ? self.drag.wrapLast : self.drag.wrapLast - tot
      self.drag.wrapLast = self.drag.wrapLast >= 0 ? self.drag.wrapLast : tot + self.drag.wrapLast
    } else if (direction > 0) {
      index = self.getNextIndex({ index })
      // keep index of moved slides
      self.drag.wrapLast = index
      self.drag.wrapLast = self.drag.wrapLast < tot ? self.drag.wrapLast : self.drag.wrapLast - tot
      self.drag.wrapLast = self.drag.wrapLast >= 0 ? self.drag.wrapLast : tot + self.drag.wrapLast
      // keep index of moved slides
      self.drag.wrapFirst = self.drag.wrapLast + 1
      self.drag.wrapFirst = self.drag.wrapFirst < tot ? self.drag.wrapFirst : self.drag.wrapFirst - tot
      self.drag.wrapFirst = self.drag.wrapFirst >= 0 ? self.drag.wrapFirst : tot + self.drag.wrapFirst
    }
    // when only one item index is null
    if (index === null) return
    // logic
    let translate
    const moveGroup = self.groups[index].targetsInitial
    const move = moveGroup[0]
    const moveLeftWrap = Xt.dataStorage.get(move, `${self.ns}TrLeftWrap`)
    const moveWidth = Xt.dataStorage.get(move, `${self.ns}GroupWidth`)
    let moveLeft = left
    if (direction < 0) {
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
    } else if (direction > 0) {
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
    const moveAlignCenter = self.drag.size / 2 - width / 2
    const moveAlignNone = 0
    const moveAlignFull = self.drag.size - width
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
      const trLeft = Xt.dataStorage.get(tr, `${self.ns}TrLeftWrap`)
      Xt.dataStorage.set(tr, `${self.ns}TrLeft`, trLeft + translate)
    }
    // loop available width
    if (direction < 0) {
      if (options.align === 'center') {
        movingSpace += moveWidth + moveAlignCenter
      } else if (options.align === 'left') {
        movingSpace += moveWidth + moveAlignFull
      } else if (options.align === 'right') {
        movingSpace += moveWidth + moveAlignNone
      }
    } else if (direction > 0) {
      if (options.align === 'center') {
        movingSpace += moveWidth + moveAlignCenter
      } else if (options.align === 'left') {
        movingSpace += moveWidth + moveAlignNone
      } else if (options.align === 'right') {
        movingSpace += moveWidth + moveAlignFull
      }
    }
    //console.debug(index, movingSpace, self.drag.size) // logicDragfind
    if (movingSpace <= self.drag.size) {
      self.eventMove({ index, direction, left: moveLeft, width: moveWidth, movingSpace })
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
   * drag on logic
   * @param {Event} e
   */
  logicDragstart(e) {
    const self = this
    // disabled
    if (self.disabled) {
      return
    }
    // save event
    if (e.clientX !== undefined) {
      self.drag.start = e.clientX
      self.drag.startOther = e.clientY
    } else if (e.touches && e.touches.length) {
      self.drag.start = e.touches[0].clientX
      self.drag.startOther = e.touches[0].clientY
    }
    // auto
    self.eventAutostop()
    // vars
    self.autoblock = true
    self.drag.instant = true
    self.drag.draglock = false
    self.drag.index = self.index
    self.drag.old = self.drag.start
    self.drag.overflow = null
    // dispatch event
    self.dragger.dispatchEvent(new CustomEvent(`dragstart.${self.componentNs}`))
  }

  /**
   * drag off logic
   * @param {Event} e
   */
  logicDragend(e) {
    const self = this
    const options = self.options
    // disabled
    if (self.disabled) {
      return
    }
    // save event
    if (e.clientX !== undefined) {
      self.drag.current = e.clientX
      self.drag.currentOther = e.clientY
    } else if (e.touches && e.touches.length) {
      self.drag.current = e.touches[0].clientX
      self.drag.currentOther = e.touches[0].clientY
    }
    // vars
    self.autoblock = false
    // disable interaction
    for (const tr of self.targets) {
      tr.classList.remove('pointer-events-none')
    }
    // fix no drag change when click
    if (self.drag.start === self.drag.current) {
      // dispatch event
      self.dragger.dispatchEvent(new CustomEvent(`dragend.${self.componentNs}`))
      return
    }
    // raf because on.xt.slider event after all drag.xt.slider
    requestAnimationFrame(() => {
      // only if dragging enough
      if (self.drag.draglock) {
        const index = self.index
        // if on the same slide as we started dragging
        if (index !== self.drag.index || Math.abs(self.drag.distance) >= self.drag.size) {
          // goToNum
          self.goToNum({ index })
        } else {
          // depending on direction and if direction is not going back
          const direction = Math.sign(self.drag.distance)
          if (
            direction > 0 &&
            self.drag.direction > 0 &&
            (options.loop || self.wrap || index !== self.getElementsGroups().length - 1)
          ) {
            self.goToNext({ amount: 1 })
          } else if (direction < 0 && self.drag.direction < 0 && (options.loop || self.wrap || index !== 0)) {
            self.goToPrev({ amount: 1 })
          } else {
            self.logicDragreset()
          }
        }
      } else {
        self.logicDragreset()
      }
      // auto
      self.eventAutostart()
      // dispatch event
      self.dragger.dispatchEvent(new CustomEvent(`dragend.${self.componentNs}`))
    })
  }

  /**
   * drag logic
   * @param {Event} e
   */
  logicDrag(e) {
    const self = this
    const options = self.options
    // disabled
    if (self.disabled) {
      return
    }
    // save event
    if (e.clientX !== undefined) {
      self.drag.current = e.clientX
      self.drag.currentOther = e.clientY
    } else if (e.touches && e.touches.length) {
      self.drag.current = e.touches[0].clientX
      self.drag.currentOther = e.touches[0].clientY
    }
    // check threshold
    self.drag.distance = self.drag.start - self.drag.current
    self.drag.distanceOther = self.drag.startOther - self.drag.currentOther
    // check drag direction
    if (Math.abs(self.drag.distanceOther) > Math.abs(self.drag.distance)) {
      // prevent drag logic
      return
    } else {
      // prevent page scroll
      if (e.cancelable) {
        e.preventDefault()
      }
    }
    // only if dragging enough
    self.drag.draglock = self.drag.draglock ? self.drag.draglock : Math.abs(self.drag.distance) > options.drag.threshold
    // disable interaction
    if (self.drag.draglock) {
      for (const tr of self.targets) {
        tr.classList.add('pointer-events-none')
      }
    }
    // calc
    const first = self.groups[self.drag.wrapFirst].target
    const last = self.groups[self.drag.wrapLast].target
    const min = Xt.dataStorage.get(first, `${self.ns}GroupLeft`)
    const max = Xt.dataStorage.get(last, `${self.ns}GroupLeft`)
    const maxCheck = options.mode !== 'absolute' ? max : Xt.dataStorage.get(first, `${self.ns}GroupWidth`)
    // val
    let final = self.drag.position + (self.drag.current - self.drag.old) * options.drag.factor
    self.drag.direction = self.drag.current > self.drag.old ? -1 : 1
    self.drag.old = self.drag.current
    // overflow
    if (options.drag.overflow && !self.wrap && options.mode !== 'absolute') {
      const direction = Math.sign(self.drag.distance)
      if (final > min && direction < 0) {
        self.drag.overflow = self.drag.overflow ? self.drag.overflow : self.drag.current
        const overflow = self.drag.current - self.drag.overflow
        final = overflow > 0 ? min + options.drag.overflow({ overflow }) : final
        //console.debug(overflow, final)
      } else if (final < max && direction > 0) {
        self.drag.overflow = self.drag.overflow ? self.drag.overflow : self.drag.current
        const overflow = self.drag.current - self.drag.overflow
        final = overflow < 0 ? max - options.drag.overflow({ overflow: -overflow }) : final
      }
    }
    // val
    self.drag.final = final
    // set direction
    self.direction = Math.sign(self.drag.initial - self.drag.final)
    self.inverse = self.direction < 0
    // ratio
    self.drag.ratio = Math.abs(self.drag.final - self.drag.initial) / Math.abs(maxCheck - min)
    self.drag.ratioInverse = 1 - self.drag.ratio
    // fix dragging furiously more than one
    if (options.mode === 'absolute' && (self.drag.ratio > 1 || self.drag.ratio < -1)) {
      return
    }
    // dispatch event
    self.dragger.dispatchEvent(new CustomEvent(`dragposition.${self.componentNs}`))
    // dispatch event
    self.dragger.dispatchEvent(new CustomEvent(`drag.${self.componentNs}`))
    // reset
    self.inverse = null
    // activation
    if (options.mode !== 'absolute' && self.drag.draglock) {
      // get nearest
      const found = self.logicDragfind({ index: self.index })
      if (found !== null && found !== self.index) {
        //console.debug(found)
        super.eventOn({ el: self.groups[found].element, force: true })
        self.eventWrap({ index: found })
      }
    }
  }

  /**
   * drag reset logic
   */
  logicDragreset() {
    const self = this
    // set direction
    self.direction = self.direction * -1
    self.inverse = self.direction < 0
    // ratio
    self.drag.ratio = self.drag.ratioInverse
    self.drag.ratioInverse = 1 - self.drag.ratio
    // val
    self.drag.final = self.drag.initial
    // dispatch event
    self.drag.instant = false
    self.dragger.dispatchEvent(new CustomEvent(`dragposition.${self.componentNs}`))
    // dispatch event
    self.dragger.dispatchEvent(new CustomEvent(`dragreset.${self.componentNs}`))
    // reset
    self.inverse = null
    // auto
    self.eventAutostart()
  }

  /**
   * activate index depending on drag position
   * @param {Object} params
   * @param {Boolean} params.index
   * @return {Number} Activation index
   */
  logicDragfind({ index } = {}) {
    const self = this
    // find activation
    const direction = self.drag.direction
    if (direction < 0) {
      for (let i = index; i >= 0; i--) {
        const tr = self.groups[i].target
        const left = Xt.dataStorage.get(tr, `${self.ns}GroupLeft`)
        const width = Xt.dataStorage.get(tr, `${self.ns}GroupWidth`)
        //console.debug(direction, index, i, self.drag.final, left - width / 2)
        // first inside dragger on the left
        if (self.drag.final < left + width / 2) {
          return i
        }
        if (i === 0) {
          // continue loop
          i = self.groups.length
        }
        if (i === index + 1) {
          // break loop
          break
        }
      }
    } else if (direction > 0) {
      for (let i = index; i < self.groups.length; i++) {
        const tr = self.groups[i].target
        const left = Xt.dataStorage.get(tr, `${self.ns}GroupLeft`)
        const width = Xt.dataStorage.get(tr, `${self.ns}GroupWidth`)
        //console.debug(direction, index, i, self.drag.final, left - width / 2)
        // last inside dragger on the right
        if (self.drag.final > left - width / 2) {
          return i
        }
        if (i === self.groups.length - 1) {
          // continue loop
          i = -1
        }
        if (i === index - 1) {
          // break loop
          break
        }
      }
    }
    return null
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
      // grab
      self.dragger.classList.add('xt-grab')
      // hideDisable
      if (options.hideDisable) {
        const els = self.container.querySelectorAll(options.hideDisable)
        for (const el of els) {
          el.classList.remove('hidden')
        }
      }
    }
    // super after
    super.enable()
  }

  /**
   * disable
   * @param {Object} params
   * @param {Boolean} params.skipEvent Skip dispatch event
   */
  disable({ skipEvent = false } = {}) {
    const self = this
    const options = self.options
    // disable
    if (!self.disabled) {
      // clean
      self.destroyGrab()
      self.destroyIntraction()
      // hideDisable
      if (options.hideDisable) {
        const els = self.container.querySelectorAll(options.hideDisable)
        for (const el of els) {
          el.classList.add('hidden')
        }
      }
    }
    // super after
    super.disable({ skipEvent })
  }

  //
  // util
  //

  /**
   * destroy
   * @param {Object} params
   * @param {Boolean} params.weak Do not destroy component
   */
  destroy({ weak = false } = {}) {
    const self = this
    // clean
    self.destroyGrab()
    self.destroyIntraction()
    self.destroyNooverflow()
    self.destroyDrag()
    self.destroyAutoheight()
    self.destroyPagination()
    self.destroyWrap()
    // super after
    super.destroy({ weak })
  }

  /**
   * destroy grab
   */
  destroyGrab() {
    const self = this
    // grab
    if (self.dragger) {
      self.dragger.classList.remove('xt-grab')
    }
  }

  /**
   * destroy intraction
   */
  destroyIntraction() {
    const self = this
    // disable interaction
    for (const tr of self.targets) {
      tr.classList.remove('pointer-events-none')
    }
  }

  /**
   * destroy drag
   */
  destroyDrag() {
    const self = this
    // drag position
    self.dragger.style.transform = ''
  }

  /**
   * destroy nooverflow
   */
  destroyNooverflow() {
    const self = this
    const options = self.options
    // reset nooverflow
    if (options.nooverflow) {
      self.dragger.classList.remove(...options.nooverflow.split(' '))
      self.disabledManual = false
    }
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
    for (const tr of self.targets) {
      tr.style.transform = ''
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
  groupSame: true,
  align: 'center',
  contain: true,
  wrap: false,
  dragposition: false,
  nooverflow: '!transform-none justify-center',
  autoHeight: false,
  keepHeight: false,
  pagination: '[data-xt-slider-pagination]',
  hideDisable: '[data-xt-slider-pagination], [data-xt-nav], [data-xt-slider-hide-disabled]',
  drag: {
    dragger: '[data-xt-slider-dragger]',
    threshold: 15,
    factor: 1,
    overflow: ({ overflow }) => {
      return Math.min(Math.log(1 + Math.pow(overflow, 10)), overflow)
    },
  },
  // element
  elementsTemplate: 'hidden',
  elements: '[data-xt-slider-element]',
  targets: '[data-xt-slider-target]',
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
  visibleReinit: true,
  disableDeactivate: true,
  jump: false,
  navigation: '[data-xt-nav]',
  keyboard: {
    selector: '[data-xt-slider-dragger]',
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

//
// observe
//

if (typeof window !== 'undefined') {
  Xt.mount({
    matches: `[data-${Xt.Slider.componentName}]`,
    mount: ({ ref }) => {
      // vars

      const optionsMarkup = ref.getAttribute(`data-${Xt.Slider.componentName}`)
      const options = optionsMarkup ? RJSON.parse(optionsMarkup) : {}

      // init

      let self = new Xt.Slider(ref, options)

      // unmount

      return () => {
        self.destroy()
        self = null
      }
    },
  })
}
