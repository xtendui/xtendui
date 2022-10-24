/*!
 * Xtend UI (https://xtendui.com/)
 * @copyright (c) 2017-2022 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/master/LICENSE.txt)
 */

import { Xt } from './xt.mjs'
import './toggle.mjs'
import JSON5 from 'json5'
Xt.JSON5 = JSON5

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
  _init() {
    // super after
    super._init()
  }

  /**
   * init elements, targets and currents
   */
  _initScope() {
    const self = this
    const options = self.options
    // dragger
    self.dragger = self.container.querySelector(options.drag.dragger)
    self._destroyElements.push(self.dragger)
    // dragger initial
    self.dragger.classList.add('initial')
    // @PERF
    self._destroyDrag()
    self.drag._wrapDir = 0
    self.drag._wrapIndex = null
    const rect = self.dragger.getBoundingClientRect()
    self.drag._size = rect.width
    self.drag._left = rect.left
    // fix when dragger not :visible (offsetWidth === 0) do not initialize
    if (self.drag._size === 0) {
      return
    }
    // grab
    if (!self.disabled) {
      self.dragger.classList.add('xt-grab')
    }
    // autoHeight and keepHeight
    if (options.autoHeight) {
      self._autoHeight = self.container.querySelector(options.autoHeight)
    }
    if (options.keepHeight) {
      self._keepHeight = self.container.querySelector(options.keepHeight)
    }
    // val
    self.drag._position = self.drag._final = self.drag._initial = 0
    // clean
    self._destroyNooverflow()
    self._destroyWrap()
    self._destroyPagination()
    // targets
    self._initScopeTargets()
    // initGroups
    self._initGroups()
    // initPagination
    self._initPagination()
    // elements
    self._initScopeElements()
  }

  /**
   * init elements
   */
  _initScopeElements() {
    super._initScopeElements()
    const self = this
    const options = self.options
    // elements
    self.elements = self.elements.filter(x => !x.classList.contains(...options.elementsTemplate.split(' ')))
  }

  /**
   * init groups
   */
  _initGroups() {
    const self = this
    const options = self.options
    // @PERF
    let sizeContent = 0
    let trWidthMax = 0
    for (const tr of self.targets) {
      let trLeft
      let trWidth
      if (options.mode === 'absolute') {
        trLeft = 0
        trWidth = self.drag._size
      } else {
        const rect = tr.getBoundingClientRect()
        trLeft = rect.left - self.drag._left
        trWidth = rect.width
      }
      sizeContent += trWidth
      trWidthMax = trWidth > trWidthMax ? trWidth : trWidthMax
      Xt.dataStorage.set(tr, `${self.ns}TrLeftInitial`, trLeft)
      Xt.dataStorage.set(tr, `${self.ns}TrLeft`, trLeft)
      Xt.dataStorage.set(tr, `${self.ns}TrWidth`, trWidth)
    }
    self.drag.sizeContent = sizeContent
    // initGroupsInitial
    self._initGroupsInitial()
    // disable slider if not overflowing
    if (options.nooverflow) {
      if (self.drag._availableSpace <= 0) {
        self.dragger.classList.add(...options.nooverflow.split(' '))
        // disabledManual
        self._disabledManual = true
        // needed for activation all slides
        self._initGroupsInitial({ group: 1 })
      } else {
        self._destroyNooverflow()
      }
    }
    // initGroupsPosition
    self._initGroupsPosition()
    // wrap
    if (options.wrap !== false && options.mode !== 'absolute' && self.drag._availableSpace > trWidthMax) {
      self._wrap = true
    } else {
      self._wrap = false
    }
    // wrap indexes
    self.drag._wrapFirst = 0
    self.drag._wrapLast = self._groups.length - 1
    // initGroupsContain
    self._initGroupsContain()
    // save cloned array of targets because we change it in the first loop and breaks second loop
    for (const group of self._groups) {
      group.targetsInitial = [...group.targets]
    }
    // initGroupsSame
    self._initGroupsSame()
  }

  /**
   * init groups initial
   * @param {Object} params
   * @param {Number} params.group
   */
  _initGroupsInitial({ group } = {}) {
    const self = this
    const options = self.options
    // inital groups
    self._groups = []
    let currentGroup = 0
    group = group ?? options.group
    const sizeAvailable = group ? self.drag._size * group : 0
    let currentCount = sizeAvailable
    self.drag._availableSpace = -self.drag._size
    for (const [i, target] of self.targets.entries()) {
      const targetWidth = Xt.dataStorage.get(target, `${self.ns}TrWidth`)
      currentCount -= targetWidth
      self.drag._availableSpace += targetWidth
      if (currentCount >= 0) {
        // add to previous group
      } else if (i !== 0) {
        // next group and reset count
        currentGroup++
        currentCount = sizeAvailable
        currentCount -= targetWidth
      }
      // assign group
      if (!self._groups[currentGroup]) {
        self._groups[currentGroup] = {
          target: target,
          targets: [target],
        }
      } else {
        self._groups[currentGroup].targets.push(target)
      }
      target.removeAttribute('data-xt-group') // needed or nooverflow doesn't reset
      target.setAttribute('data-xt-group', `${self.ns}-${currentGroup}`)
      target.removeAttribute('data-xt-group-same')
    }
  }

  /**
   * init groups position
   */
  _initGroupsPosition() {
    const self = this
    const options = self.options
    // groups position
    self._usedWidth = 0
    for (const group of self._groups) {
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
          groupLeft += self._usedWidth
        }
        groupWidth += Xt.dataStorage.get(tr, `${self.ns}TrWidth`)
        self._usedWidth += groupWidth
      }
      // left with alignment
      let left
      if (options.align === 'center') {
        left = self.drag._size / 2 - groupLeft - groupWidth / 2
      } else if (options.align === 'left') {
        left = -groupLeft
      } else if (options.align === 'right') {
        left = self.drag._size - groupLeft - groupWidth
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
  _initGroupsContain() {
    const self = this
    const options = self.options
    // contain groups
    if (options.contain && options.mode !== 'absolute' && !self._wrap && self._usedWidth > self.drag._size) {
      // only if slides overflow dragger
      const first = self._groups[self.drag._wrapFirst].target
      const last = self._groups[self.drag._wrapLast].target
      const firstLeft = Xt.dataStorage.get(first, `${self.ns}TrLeft`)
      const lastLeft = Xt.dataStorage.get(last, `${self.ns}TrLeft`)
      const lastWidth = Xt.dataStorage.get(last, `${self.ns}GroupWidth`)
      const min = -firstLeft
      const max = -lastLeft - lastWidth + self.drag._size
      // group contain slides with same position
      let iRemoved = 0
      for (let i = 0; i < self._groups.length - iRemoved; i++) {
        const group = self._groups[i]
        for (const tr of group.targets) {
          let left = Xt.dataStorage.get(tr, `${self.ns}GroupLeft`)
          if (left >= min) {
            left = min
            // first group
            const firstIndex = 0
            let width = Xt.dataStorage.get(self._groups[firstIndex].target, `${self.ns}GroupWidth`)
            width += Xt.dataStorage.get(group.target, `${self.ns}GroupWidth`)
            // put group in firstIndex group
            if (i > firstIndex) {
              const groupStr = self._groups[firstIndex].target.getAttribute('data-xt-group')
              for (const target of group.targets) {
                self._groups[firstIndex].targets.push(target) // put at end
                target.setAttribute('data-xt-group', groupStr)
              }
            }
            // group firstIndex contain new position on dragger limit
            for (const tr of self._groups[firstIndex].targets) {
              Xt.dataStorage.set(tr, `${self.ns}GroupLeft`, left)
              Xt.dataStorage.set(tr, `${self.ns}GroupWidth`, width)
            }
            // splice reindex
            if (i > firstIndex) {
              self._groups.splice(i, 1)
              iRemoved++
              i--
            }
          } else {
            // break loop
            i = self._groups.length
            break
          }
        }
      }
      for (let i = self._groups.length - 1; i >= 0; i--) {
        const group = self._groups[i]
        for (const tr of group.targets) {
          let left = Xt.dataStorage.get(tr, `${self.ns}GroupLeft`)
          if (left <= max) {
            left = max
            // last group
            const lastIndex = self._groups.length - 1
            let width = Xt.dataStorage.get(self._groups[lastIndex].target, `${self.ns}GroupWidth`)
            width += Xt.dataStorage.get(group.target, `${self.ns}GroupWidth`)
            // put group in lastIndex group
            if (i < lastIndex) {
              const groupStr = self._groups[lastIndex].target.getAttribute('data-xt-group')
              for (const target of group.targets) {
                self._groups[lastIndex].targets.unshift(target) // put at start
                target.setAttribute('data-xt-group', groupStr)
              }
            }
            // group lastIndex contain new position on dragger limit
            for (const target of self._groups[lastIndex].targets) {
              Xt.dataStorage.set(target, `${self.ns}GroupLeft`, left)
              Xt.dataStorage.set(target, `${self.ns}GroupWidth`, width)
            }
            // splice reindex
            if (i < lastIndex) {
              self._groups.splice(i, 1)
            }
          } else {
            // break loop
            i = 0
            break
          }
        }
      }
      // save position
      for (const group of self._groups) {
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
      self.drag._wrapFirst = 0
      self.drag._wrapLast = self._groups.length - 1
    }
  }

  /**
   * init groups same
   */
  _initGroupsSame() {
    const self = this
    const options = self.options
    // groups multiple targets if are inside dragger
    if (options.groupSame && options.mode !== 'absolute') {
      for (const [z, group] of self._groups.entries()) {
        const tr = group.target
        const groupGroup = tr.getAttribute('data-xt-group')
        const groupWidth = Xt.dataStorage.get(tr, `${self.ns}GroupWidth`)
        const groupLeft = Xt.dataStorage.get(tr, `${self.ns}GroupLeft`)
        const trLeft = Xt.dataStorage.get(tr, `${self.ns}TrLeft`)
        const spaceLeft = trLeft + groupLeft // left space available from slide to dragger
        const spaceRight = self.drag._size - spaceLeft - groupWidth // right space available from slide to dragger
        // group on the right of current
        let usedWidth = 0
        for (let i = 0; i <= self._groups.length - 1; i++) {
          // loop from current group to nexts
          let iLoop = z + 1 + i
          // when wrap and more than length, loop to first
          iLoop = self._wrap && iLoop > self._groups.length - 1 ? iLoop - self._groups.length : iLoop
          if (iLoop > self._groups.length - 1) break
          const groupCurrent = self._groups[z]
          for (let k = 0; k < self._groups[iLoop].targetsInitial.length; k++) {
            const targetTargets = self._groups[iLoop].targetsInitial[k]
            const width = Xt.dataStorage.get(targetTargets, `${self.ns}TrWidth`)
            usedWidth += width
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
              i = self._groups.length - 1
              break
            }
          }
        }
        // group on the left of current
        usedWidth = 0
        for (let i = 0; i <= self._groups.length - 1; i++) {
          // loop from current group to previouses
          let iLoop = z - 1 - i
          // when wrap and less than 0, loop to last
          iLoop = self._wrap && iLoop < 0 ? iLoop + self._groups.length : iLoop
          if (iLoop < 0) break
          const groupCurrent = self._groups[z]
          for (let k = self._groups[iLoop].targetsInitial.length - 1; k >= 0; k--) {
            const targetTargets = self._groups[iLoop].targetsInitial[k]
            const width = Xt.dataStorage.get(targetTargets, `${self.ns}TrWidth`)
            usedWidth += width
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
              i = self._groups.length - 1
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
  _initPagination() {
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
      for (const [i, group] of self._groups.entries()) {
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
          html = html.replace(regex, self._groups.length.toString())
        }
        item.innerHTML = Xt.sanitize(html)
        if (classes.length) {
          item.children[0].classList.add(...classes)
        }
        item.children[0].setAttribute('data-xt-group', group.target.getAttribute('data-xt-group'))
        container.insertBefore(item.children[0], cloned)
        item.remove()
        self.pags[z][i] = container.querySelectorAll(templateInverse)[i]
        // save group element for activation
        self._groups[i].element = self.pags[0][i]
      }
    }
  }

  /**
   * init events
   */
  _initEvents() {
    super._initEvents()
    const self = this
    // init
    const initHandler = Xt.dataStorage.put(self.container, `init/${self.ns}`, self._eventInitHandler.bind(self))
    self.container.addEventListener('init.xt.slider', initHandler)
    // dragposition
    const dragpositionHandler = Xt.dataStorage.put(
      self.dragger,
      `dragposition/${self.ns}`,
      self._eventDragpositionHandler.bind(self)
    )
    self.dragger.addEventListener('dragposition.xt.slider', dragpositionHandler)
    // drag start
    const dragstartHandler = Xt.dataStorage.put(
      window,
      `mousedown touchstart/drag/${self.ns}`,
      self._eventDragstartHandler.bind(self)
    )
    const events = ['mousedown', 'touchstart']
    for (const event of events) {
      addEventListener(event, dragstartHandler, { passive: false })
    }
    // fix prevent dragging links and images
    const dragstartFixHandler = Xt.dataStorage.put(window, `dragstart/drag/${self.ns}`, self._eventDragstartFix)
    self.dragger.addEventListener('dragstart', dragstartFixHandler)
    // resize
    const reinitHandler = Xt.dataStorage.put(window, `resize/reinit/${self.ns}`, Xt._eventReinit.bind(null, { self }))
    addEventListener('resize.xt', reinitHandler)
  }

  /**
   * init start
   * @param {Object} params
   * @param {Boolean} params.save Save currents
   */
  _initStart({ save = false } = {}) {
    const self = this
    // init drag
    Xt.frame({
      el: self.container,
      ns: `${self.ns}InitDrag`,
      func: () => {
        // dispatch event
        self.dragger.dispatchEvent(new CustomEvent(`dragposition.${self._componentNs}`))
      },
    })
    // super after
    super._initStart({ save })
  }

  //
  // handler
  //

  /**
   * init handler
   * @param {Event} e
   */
  _eventInitHandler() {
    const self = this
    // dragger initial
    self.dragger.classList.remove('initial')
  }

  /**
   * drag position handler
   * @param {Event} e
   */
  _eventDragpositionHandler() {
    const self = this
    const options = self.options
    // dragposition
    if (!options.dragposition && options.mode !== 'absolute') {
      self.initial || self.drag._instant ? self.dragger.classList.remove('on') : self.dragger.classList.add('on')
      // set internal position to resume animation mid dragging
      self.drag._position = self.drag._final
      self.dragger.style.transform = `translateX(${self.drag._final}px)`
    }
  }

  /**
   * drag fix
   * @param {Event} e
   */
  _eventDragstartFix(e) {
    e.preventDefault()
  }

  /**
   * drag on handler
   * @param {Event} e
   */
  _eventDragstartHandler(e) {
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
        const eventLimit = self._containerTargets.querySelectorAll(options.eventLimit)
        if (!Xt.contains({ els: eventLimit, tr: e.target })) {
          self._eventDragstart(e)
        }
      } else {
        self._eventDragstart(e)
      }
      // dragend
      const dragendHandler = Xt.dataStorage.put(
        window,
        `mouseup touchend/drag/${self.ns}`,
        self._eventDragendHandler.bind(self)
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
  _eventDragendHandler(e) {
    const self = this
    const options = self.options
    // logic
    if (options.eventLimit) {
      const eventLimit = self._containerTargets.querySelectorAll(options.eventLimit)
      if (!Xt.contains({ els: eventLimit, tr: e.target })) {
        self._eventDragend(e)
      }
    } else {
      self._eventDragend(e)
    }
  }

  /**
   * drag on
   * @param {Event} e
   */
  _eventDragstart(e) {
    const self = this
    // event move
    const dragHandler = Xt.dataStorage.put(
      window,
      `mousemove touchmove/drag/${self.ns}`,
      self._eventDragHandler.bind(self)
    )
    const events = ['mousemove', 'touchmove']
    for (const event of events) {
      addEventListener(event, dragHandler, { passive: false })
    }
    // logic
    self._logicDragstart(e)
  }

  /**
   * drag handler
   * @param {Event} e
   */
  _eventDragHandler(e) {
    const self = this
    // logic
    self._logicDrag(e)
  }

  /**
   * drag off
   * @param {Event} e
   */
  _eventDragend(e) {
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
    // logic
    self._logicDragend(e)
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
  _eventOn({ el, force = false }, e) {
    const self = this
    const options = self.options
    // disabled
    if (self.disabled) {
      return
    }
    // get the right slide
    let found
    for (const group of self._groups) {
      // targetsInitial because multiple pagination
      if (group.element === el || group.targetsInitial.includes(el)) {
        found = group
      }
    }
    if (!found) return
    const group = found
    el = found.element
    const tr = found.target
    // fix keep self.drag._instant
    const isDrag = self.drag._instant
    // activation
    super._eventOn({ el, force }, e)
    // vars
    const first = self._groups[self.drag._wrapFirst].target
    const last = self._groups[self.drag._wrapLast].target
    const min = Xt.dataStorage.get(first, `${self.ns}GroupLeft`)
    const max = Xt.dataStorage.get(last, `${self.ns}GroupLeft`)
    const maxCheck = options.mode !== 'absolute' ? max : Xt.dataStorage.get(first, `${self.ns}GroupWidth`)
    // val
    self.drag._initial = Xt.dataStorage.get(tr, `${self.ns}GroupLeft`)
    // fix absolute loop
    if (options.mode === 'absolute' && options.loop && !self.initial) {
      if (tr === last && (self.drag._direction < 0 || self.drag._position >= min)) {
        // val
        self.drag._final = max - min + self.drag._position - maxCheck
        // dispatch event
        self.drag._instant = true
        self.dragger.dispatchEvent(new CustomEvent(`dragposition.${self._componentNs}`))
      } else if (tr === first && (self.drag._direction > 0 || self.drag._position <= max)) {
        self.drag._final = min - max + self.drag._position + maxCheck
        // dispatch event
        self.drag._instant = true
        self.dragger.dispatchEvent(new CustomEvent(`dragposition.${self._componentNs}`))
      }
    }
    // fix absolute multi step activation (only if not already applied fix)
    if (options.mode === 'absolute' && !self.drag._instant && self.direction) {
      const diff = self.drag._initial - self.drag._position
      if (Math.abs(diff) > maxCheck) {
        // remainder add or remove maxCheck depending on direction
        let remainder = diff % maxCheck
        remainder += maxCheck * self.direction
        // val
        self.drag._final = self.drag._initial - remainder
        // dispatch event
        self.drag._instant = true
        self.dragger.dispatchEvent(new CustomEvent(`dragposition.${self._componentNs}`))
      }
    }
    // val
    self.drag._final = self.drag._initial
    // ratio
    self.drag._ratioInverse = Math.abs(self.drag._final - self.drag._position) / Math.abs(maxCheck - min)
    self.drag._ratio = 1 - self.drag._ratioInverse
    // dispatch event
    self.drag._instant = false
    self.dragger.dispatchEvent(new CustomEvent(`dragposition.${self._componentNs}`))
    // fix keep self.drag._instant
    self.drag._instant = isDrag
    Xt.frame({
      el: self.container,
      ns: `${self.ns}isDrag`,
      func: () => {
        self.drag._instant = false
      },
    })
    // wrap after self.drag._final for proper initial initialization direction (e.g. slider api)
    self._eventWrap({ index: self.index })
    // autoHeight and keepHeight
    if (self._autoHeight || (self._keepHeight && self.initial)) {
      let groupHeight = 0
      for (const tr of group.targets) {
        const content = tr.children.length ? tr.children[0] : tr
        const height = content.offsetHeight
        groupHeight = height > groupHeight ? height : groupHeight
      }
      if (groupHeight > 0) {
        groupHeight += 'px'
        if (self._autoHeight.style.height !== groupHeight) {
          self._autoHeight.style.height = groupHeight
          // dispatch event
          tr.dispatchEvent(new CustomEvent(`autoheight.${self._componentNs}`))
        }
        if (self._keepHeight && self.initial) {
          self._keepHeight.style.height = groupHeight
        }
      }
    }
  }

  /**
   * set direction
   */
  _setDirection() {
    const self = this
    // set direction
    if (self.index === null || self.index === self._oldIndex) {
      // initial direction and same index direction
      self.direction = 0
    } else if (self._inverse !== null) {
      // forced value
      self.direction = self._inverse ? -1 : 1
    } else {
      // direction before setting positions we check target activations positions (also when wrap there's no other way)
      const left = Xt.dataStorage.get(self._groups[self.index].target, `${self.ns}GroupLeft`)
      const leftOld = Xt.dataStorage.get(self._groups[self._oldIndex].target, `${self.ns}GroupLeft`)
      self.direction = left > leftOld ? -1 : 1
    }
    self._inverse = self.direction < 0
  }

  /**
   * wrap
   * @param {Object} params
   * @param {Boolean} params.index
   */
  _eventWrap({ index } = {}) {
    const self = this
    // logic
    if (self._wrap) {
      const tr = self._groups[index].target
      const wrapLeft = Xt.dataStorage.get(tr, `${self.ns}GroupLeft`)
      const previousWidth = Xt.dataStorage.get(tr, `${self.ns}GroupWidth`)
      // only one call
      let direction = self.direction
      if (!direction) {
        // fix on init and reinit set direction to left (-1) if on left, to right (1) if on right
        direction = self.drag._final > -self.drag._size ? -1 : 1
      }
      if (self.drag._wrapDir !== direction || self.drag._wrapIndex !== index) {
        self.drag._wrapDir = direction
        self.drag._wrapIndex = index
        self._eventMove({ index, direction, wrapLeft, previousWidth, wrapSpace: previousWidth })
      }
    }
  }

  /**
   * eventMove
   * @param {Object} params
   * @param {Number} params.index
   * @param {Number} params.direction
   * @param {Number} params.wrapLeft
   * @param {Number} params.previousWidth
   * @param {Number} params.wrapSpace
   */
  _eventMove({ index, direction, wrapLeft, previousWidth, wrapSpace } = {}) {
    const self = this
    const options = self.options
    // index
    const tot = self._groups.length
    if (direction < 0) {
      index = self.getPrevIndex({ index })
      // keep index of moved slides
      self.drag._wrapFirst = index
      self.drag._wrapFirst = self.drag._wrapFirst < tot ? self.drag._wrapFirst : self.drag._wrapFirst - tot
      self.drag._wrapFirst = self.drag._wrapFirst >= 0 ? self.drag._wrapFirst : tot + self.drag._wrapFirst
      // keep index of moved slides
      self.drag._wrapLast = self.drag._wrapFirst - 1
      self.drag._wrapLast = self.drag._wrapLast < tot ? self.drag._wrapLast : self.drag._wrapLast - tot
      self.drag._wrapLast = self.drag._wrapLast >= 0 ? self.drag._wrapLast : tot + self.drag._wrapLast
    } else if (direction > 0) {
      index = self.getNextIndex({ index })
      // keep index of moved slides
      self.drag._wrapLast = index
      self.drag._wrapLast = self.drag._wrapLast < tot ? self.drag._wrapLast : self.drag._wrapLast - tot
      self.drag._wrapLast = self.drag._wrapLast >= 0 ? self.drag._wrapLast : tot + self.drag._wrapLast
      // keep index of moved slides
      self.drag._wrapFirst = self.drag._wrapLast + 1
      self.drag._wrapFirst = self.drag._wrapFirst < tot ? self.drag._wrapFirst : self.drag._wrapFirst - tot
      self.drag._wrapFirst = self.drag._wrapFirst >= 0 ? self.drag._wrapFirst : tot + self.drag._wrapFirst
    }
    // when only one item index is null
    if (index === null) return
    // logic
    let translate
    let left = wrapLeft
    const group = self._groups[index].targetsInitial
    const tr = group[0]
    const leftInitial = Xt.dataStorage.get(tr, `${self.ns}TrLeftInitial`)
    const width = Xt.dataStorage.get(tr, `${self.ns}GroupWidth`)
    // calculate left (left position of the dragger when tr activated)
    // values are inverted (+ is going left, - is going right)
    // we need different calculation depending on direction because the line is on the left or on the right of tr
    if (direction < 0) {
      if (options.align === 'center') {
        // left is the center position of current tr
        left += previousWidth / 2 + width / 2
      } else if (options.align === 'left') {
        // left is the left position of current tr
        left += width
      } else if (options.align === 'right') {
        // left is the right position of current tr
        left += previousWidth
      }
    } else if (direction > 0) {
      if (options.align === 'center') {
        // left is the center position of current tr
        left -= previousWidth / 2 + width / 2
      } else if (options.align === 'left') {
        // left is the left position of current tr
        left -= previousWidth
      } else if (options.align === 'right') {
        // left is the right position of current tr
        left -= width
      }
    }
    for (const tr of group) {
      Xt.dataStorage.set(tr, `${self.ns}GroupLeft`, left)
    }
    // calculate translate (translate position of the tr)
    // values are inverted (+ is going left, - is going right)
    if (direction < 0) {
      // translate is the difference from current wrapLeft and tr initial left and tr width
      translate = wrapLeft + leftInitial + width
    } else if (direction > 0) {
      // translate is the difference from current wrapLeft and tr initial left and previous tr width
      translate = wrapLeft + leftInitial - previousWidth
    }
    if (options.align === 'center') {
      // remove the space between left drag position and final position
      // remove from translate the difference between half drag size and half previous tr width
      translate -= self.drag._size / 2 - previousWidth / 2
    } else if (options.align === 'left') {
      // remove the space between left drag position and final position
      translate -= 0
    } else if (options.align === 'right') {
      // remove the space between left drag position and final position
      // remove from translate the difference from drag size and previous tr width
      translate -= self.drag._size - previousWidth
    }
    for (const tr of group) {
      const trLeftInitial = Xt.dataStorage.get(tr, `${self.ns}TrLeftInitial`)
      Xt.dataStorage.set(tr, `${self.ns}TrLeft`, trLeftInitial - translate)
      tr.style.transform = `translateX(${-translate}px)`
    }
    // calculate space (current wrap space difference of activation to check against drag size)
    // we need different calculation depending on direction because the line is on the left or on the right of tr
    if (direction < 0) {
      if (options.align === 'center') {
        wrapSpace += width + previousWidth / 2
      } else if (options.align === 'left') {
        wrapSpace += width + self.drag._size - previousWidth
      } else if (options.align === 'right') {
        wrapSpace += width
      }
    } else if (direction > 0) {
      if (options.align === 'center') {
        wrapSpace += width + previousWidth / 2
      } else if (options.align === 'left') {
        wrapSpace += width
      } else if (options.align === 'right') {
        wrapSpace += width + self.drag._size - previousWidth
      }
    }
    // continue moving only if wrapSpace is smaller than drag
    if (wrapSpace <= self.drag._size) {
      self._eventMove({ index, direction, wrapLeft: left, previousWidth: width, wrapSpace })
    }
  }

  //
  // logic
  //

  /**
   * drag on logic
   * @param {Event} e
   */
  _logicDragstart(e) {
    const self = this
    // disabled
    if (self.disabled) {
      return
    }
    // save event
    if (e.clientX !== undefined) {
      self.drag._start = e.clientX
      self.drag._startOther = e.clientY
    } else if (e.touches && e.touches.length) {
      self.drag._start = e.touches[0].clientX
      self.drag._startOther = e.touches[0].clientY
    }
    // auto
    self._eventAutostop()
    // vars
    self._autoblock = true
    self.drag._instant = true
    self.drag._lock = false
    self.drag._prevent = false
    self.drag._index = self.index
    self.drag._old = self.drag._start
    self.drag._overflow = null
    // dispatch event
    self.dragger.dispatchEvent(new CustomEvent(`dragstart.${self._componentNs}`))
  }

  /**
   * drag off logic
   * @param {Event} e
   */
  _logicDragend(e) {
    const self = this
    const options = self.options
    // disabled
    if (self.disabled) {
      return
    }
    // save event
    if (e.clientX !== undefined) {
      self.drag._current = e.clientX
      self.drag._currentOther = e.clientY
    } else if (e.touches && e.touches.length) {
      self.drag._current = e.touches[0].clientX
      self.drag._currentOther = e.touches[0].clientY
    }
    // vars
    self._autoblock = false
    // disable interaction
    for (const tr of self.targets) {
      tr.classList.remove('pointer-events-none')
    }
    // fix no drag change when click
    if (self.drag._start === self.drag._current) {
      // dispatch event
      self.dragger.dispatchEvent(new CustomEvent(`dragend.${self._componentNs}`))
      return
    }
    // raf because on.xt.slider event after all drag.xt.slider
    requestAnimationFrame(() => {
      // only if dragging enough
      if (self.drag._lock) {
        const index = self.index
        // if on the same slide as we started dragging
        if (index !== self.drag._index || Math.abs(self.drag._distance) >= self.drag._size) {
          // goToNum
          self.goToNum({ index })
        } else {
          // depending on direction and if direction is not going back
          const direction = Math.sign(self.drag._distance)
          if (
            direction > 0 &&
            self.drag._direction > 0 &&
            (options.loop || self._wrap || index !== self.getElementsGroups().length - 1)
          ) {
            self.goToNext({ amount: 1 })
          } else if (direction < 0 && self.drag._direction < 0 && (options.loop || self._wrap || index !== 0)) {
            self.goToPrev({ amount: 1 })
          } else {
            self._logicDragreset()
          }
        }
      } else {
        self._logicDragreset()
      }
      // auto
      self._eventAutostart()
      // dispatch event
      self.dragger.dispatchEvent(new CustomEvent(`dragend.${self._componentNs}`))
    })
  }

  /**
   * drag logic
   * @param {Event} e
   */
  _logicDrag(e) {
    const self = this
    const options = self.options
    // disabled
    if (self.disabled) {
      return
    }
    // save event
    if (e.clientX !== undefined) {
      self.drag._current = e.clientX
      self.drag._currentOther = e.clientY
    } else if (e.touches && e.touches.length) {
      self.drag._current = e.touches[0].clientX
      self.drag._currentOther = e.touches[0].clientY
    }
    // check threshold
    self.drag._distance = self.drag._start - self.drag._current
    self.drag._distanceOther = self.drag._startOther - self.drag._currentOther
    // prevent drag and lock drag
    if (!self.drag._lock && !self.drag._prevent) {
      if (Math.abs(self.drag._distanceOther) > options.drag.threshold) {
        // only if dragging enough other
        // prevent drag
        self.drag._prevent = true
      } else if (Math.abs(self.drag._distance) > options.drag.threshold) {
        // only if dragging enough
        // lock drag
        self.drag._lock = true
      }
    }
    // prevent drag
    if (self.drag._prevent) {
      return
    }
    if (self.drag._lock) {
      // prevent page scroll
      if (e.cancelable) {
        e.preventDefault()
      }
      // disable interaction
      for (const tr of self.targets) {
        tr.classList.add('pointer-events-none')
      }
    }
    // calc
    const first = self._groups[self.drag._wrapFirst].target
    const last = self._groups[self.drag._wrapLast].target
    const min = Xt.dataStorage.get(first, `${self.ns}GroupLeft`)
    const max = Xt.dataStorage.get(last, `${self.ns}GroupLeft`)
    const maxCheck = options.mode !== 'absolute' ? max : Xt.dataStorage.get(first, `${self.ns}GroupWidth`)
    // val
    let final = self.drag._position + (self.drag._current - self.drag._old) * options.drag.factor
    self.drag._direction = self.drag._current > self.drag._old ? -1 : 1
    self.drag._old = self.drag._current
    // overflow
    if (options.drag.overflow && !self._wrap && options.mode !== 'absolute') {
      const direction = Math.sign(self.drag._distance)
      if (final > min && direction < 0) {
        self.drag._overflow = self.drag._overflow ? self.drag._overflow : self.drag._current
        const overflow = self.drag._current - self.drag._overflow
        final = overflow > 0 ? min + options.drag.overflow({ overflow }) : final
      } else if (final < max && direction > 0) {
        self.drag._overflow = self.drag._overflow ? self.drag._overflow : self.drag._current
        const overflow = self.drag._current - self.drag._overflow
        final = overflow < 0 ? max - options.drag.overflow({ overflow: -overflow }) : final
      }
    }
    // val
    self.drag._final = final
    // set direction
    self.direction = Math.sign(self.drag._initial - self.drag._final)
    self._inverse = self.direction < 0
    // ratio
    self.drag._ratio = Math.abs(self.drag._final - self.drag._initial) / Math.abs(maxCheck - min)
    self.drag._ratioInverse = 1 - self.drag._ratio
    // fix dragging furiously more than one
    if (options.mode === 'absolute' && (self.drag._ratio > 1 || self.drag._ratio < -1)) {
      return
    }
    // dispatch event
    self.dragger.dispatchEvent(new CustomEvent(`dragposition.${self._componentNs}`))
    // dispatch event
    self.dragger.dispatchEvent(new CustomEvent(`drag.${self._componentNs}`))
    // reset
    self._inverse = null
    // activation
    if (options.mode !== 'absolute' && self.drag._lock) {
      // get nearest
      const found = self._logicDragfind({ index: self.index })
      if (found !== null && found !== self.index) {
        super._eventOn({ el: self._groups[found].element, force: true })
        self._eventWrap({ index: found })
      }
    }
  }

  /**
   * drag reset logic
   */
  _logicDragreset() {
    const self = this
    // set direction
    self.direction = self.direction * -1
    self._inverse = self.direction < 0
    // ratio
    self.drag._ratio = self.drag._ratioInverse
    self.drag._ratioInverse = 1 - self.drag._ratio
    // val
    self.drag._final = self.drag._initial
    // dispatch event
    self.drag._instant = false
    self.dragger.dispatchEvent(new CustomEvent(`dragposition.${self._componentNs}`))
    // dispatch event
    self.dragger.dispatchEvent(new CustomEvent(`dragreset.${self._componentNs}`))
    // reset
    self._inverse = null
    // auto
    self._eventAutostart()
  }

  /**
   * activate index depending on drag position
   * @param {Object} params
   * @param {Boolean} params.index
   * @return {Number} Activation index
   */
  _logicDragfind({ index } = {}) {
    const self = this
    // find activation
    const direction = self.drag._direction
    if (direction < 0) {
      const first = self._groups[self.drag._wrapFirst].target
      const min = Xt.dataStorage.get(first, `${self.ns}GroupLeft`)
      if (self.drag._final >= min) {
        return self.drag._wrapFirst
      }
      for (let i = index; i >= 0; i--) {
        const tr = self._groups[i].target
        const left = Xt.dataStorage.get(tr, `${self.ns}GroupLeft`)
        const width = Xt.dataStorage.get(tr, `${self.ns}GroupWidth`)
        // first inside dragger on the left
        if (self.drag._final < left + width / 2) {
          return i
        }
        if (i === 0) {
          // continue loop
          i = self._groups.length
        }
        if (i === index + 1) {
          // break loop
          break
        }
      }
    } else if (direction > 0) {
      const last = self._groups[self.drag._wrapLast].target
      const max = Xt.dataStorage.get(last, `${self.ns}GroupLeft`)
      if (self.drag._final <= max) {
        return self.drag._wrapLast
      }
      for (let i = index; i < self._groups.length; i++) {
        const tr = self._groups[i].target
        const left = Xt.dataStorage.get(tr, `${self.ns}GroupLeft`)
        const width = Xt.dataStorage.get(tr, `${self.ns}GroupWidth`)
        // last inside dragger on the right
        if (self.drag._final > left - width / 2) {
          return i
        }
        if (i === self._groups.length - 1) {
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
      self._destroyGrab()
      self._destroyIntraction()
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
    self._destroyGrab()
    self._destroyIntraction()
    self._destroyNooverflow()
    self._destroyDrag()
    self._destroyAutoheight()
    self._destroyPagination()
    self._destroyWrap()
    // super after
    super.destroy({ weak })
  }

  /**
   * destroy grab
   */
  _destroyGrab() {
    const self = this
    // grab
    if (self.dragger) {
      self.dragger.classList.remove('xt-grab')
    }
  }

  /**
   * destroy intraction
   */
  _destroyIntraction() {
    const self = this
    // disable interaction
    for (const tr of self.targets) {
      tr.classList.remove('pointer-events-none')
    }
  }

  /**
   * destroy drag
   */
  _destroyDrag() {
    const self = this
    // drag position
    self.dragger.style.transform = ''
  }

  /**
   * destroy nooverflow
   */
  _destroyNooverflow() {
    const self = this
    const options = self.options
    // reset nooverflow
    if (options.nooverflow) {
      self.dragger.classList.remove(...options.nooverflow.split(' '))
      self._disabledManual = false
    }
  }

  /**
   * destroy autoheight
   */
  _destroyAutoheight() {
    const self = this
    // autoHeight
    if (self._autoHeight || self._keepHeight) {
      self._autoHeight.style.height = ''
    }
  }

  /**
   * destroy pagination
   */
  _destroyPagination() {
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
  _destroyWrap() {
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
    threshold: 30,
    factor: 1,
    overflow: ({ overflow }) => {
      return Math.min(overflow, Math.log(1 + Math.pow(overflow, 10)))
    },
  },
  // element
  elementsTemplate: 'hidden',
  elements: '[data-xt-slider-element]',
  targets: '[data-xt-slider-target]',
  // quantity
  min: 1,
  max: 1,
  // event
  on: 'click',
  off: 'click',
  mouseParent: false,
  // timing
  queue: false,
  // other
  visibleReinit: true,
  jump: false,
  navigation: '[data-xt-nav]',
  zIndex: {
    targets: {
      start: 200, // same as options.zIndex.targets.start
      factor: -1,
    },
  },
  a11y: {
    role: 'carousel',
    labelElements: false,
    labelTargets: true,
    controls: true,
    selected: false,
    expanded: false,
    live: true,
    disabled: true,
    keyboard: true,
    vertical: false,
    items: false,
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
      const options = optionsMarkup ? JSON5.parse(optionsMarkup) : {}

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
