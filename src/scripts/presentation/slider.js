//////////////////////
// import
//////////////////////

import Xt from '../xtend';
import Core from '../core';

//////////////////////
// Slider
//////////////////////

class Slider extends Core {

  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} optionsJs User options
   * @constructor
   */
  constructor(object, optionsJs = {}) {
    super(object, optionsJs);
  }

  //////////////////////
  // init
  //////////////////////

  /**
   * init elements, targets and currents
   */
  initScope() {
    let self = this;
    let options = self.options;
    // targets
    self.initScopeTargets();
    // dragger
    if (options.drag && options.drag.dragger) {
      self.dragger = self.object.querySelectorAll(options.drag.dragger)[0];
    }
    // autoHeight
    if (options.autoHeight) {
      self.autoHeight = self.object.querySelectorAll(options.autoHeight)[0];
    }
    // automatic group
    let draggerWidthTemp;
    if (options.groupMq) {
      // width
      let draggerWidth = self.dragger ? self.dragger.offsetWidth : self.object.offsetWidth;
      // groupMq media
      let mqs = Object.entries(options.groupMq);
      if (mqs.length) {
        for (let [key, value] of mqs) {
          if (window.matchMedia(key).matches) {
            draggerWidthTemp = draggerWidth * value;
          }
        }
      }
      draggerWidth = draggerWidthTemp;
      // generate groups
      self.groupMq = [];
      self.groupMq.push([]);
      let currentCount = draggerWidth;
      for (let [i, target] of self.targets.entries()) {
        // calculate
        let targetWidth = target.offsetWidth;
        if (targetWidth === 0) { // when display none
          let container = target.parentNode;
          let clone = target.cloneNode(true);
          clone.classList.add('xt-calculating', 'xt-ignore');
          container.append(clone);
          targetWidth = clone.offsetWidth;
          container.removeChild(clone);
        }
        currentCount -= targetWidth;
        // overflow
        let currentGroup = self.groupMq.length - 1;
        if (currentCount < 0 && self.groupMq[currentGroup].length) {
          self.groupMq.push([]);
          currentGroup = self.groupMq.length - 1;
          currentCount = draggerWidth;
          currentCount -= targetWidth;
        }
        // assign group
        self.groupMq[currentGroup].push(target);
        target.setAttribute('data-xt-group', self.namespace + '-' + currentGroup);
      }
    }
    // generate elements
    if (options.pagination) {
      let pags = self.object.querySelectorAll(options.pagination);
      if (!pags.length) {
        console.error('Error: Xt.Slider pagination not found for', self.object); // Xt check
      }
      // remove old
      self.pags = self.pags ? self.pags : [];
      for (let pags of self.pags) {
        for (let pag of pags) {
          let container = pag.parentNode;
          container.removeChild(pag);
        }
      }
      // add new
      self.pags = [];
      for (let pag of pags) {
        self.pags.push([]);
        // vars
        let currentPags = self.pags[self.pags.length - 1];
        let clone = pag.querySelectorAll('.xt-clone')[0];
        let container = clone.parentNode;
        let arr;
        if (options.groupMq) {
          arr = self.groupMq;
        } else {
          arr = self.targets;
        }
        // populate
        for (let [i, group] of arr.entries()) {
          currentPags[i] = clone.cloneNode(true);
          let item = currentPags[i];
          let html = item.innerHTML;
          html = html.replace(new RegExp('{{num}}', 'ig'), (i + 1).toString());
          html = html.replace(new RegExp('{{tot}}', 'ig'), arr.length.toString());
          item.innerHTML = html;
          item.classList.remove('xt-clone');
          if (options.groupMq) {
            item.setAttribute('data-xt-group', self.namespace + '-' + i);
          }
          container.insertBefore(item, clone);
        }
      }
    }
    // only one call per group
    for (let slide of self.targets) {
      Xt.dataStorage.remove(slide, self.componentNamespace + 'SlideOnDone');
    }
    // dragger
    if (self.dragger) {
      self.destroyElements.push(self.dragger);
    }
    // initSliderPos
    if (self.dragger) {
      self.initSliderPos();
    }
    // elements
    self.initScopeElements();
  }

  /**
   * init slider group positions
   */
  initSliderPos() {
    let self = this;
    let options = self.options;
    // reset
    for (let slide of self.targets) {
      Xt.dataStorage.remove(slide, self.componentNamespace + 'GroupPosDone');
    }
    // set
    for (let slide of self.targets) {
      if (!Xt.dataStorage.get(slide, self.componentNamespace + 'GroupPosDone') && Xt.visible(slide)) {
        // vars
        let targets = self.getTargets(slide);
        let slideLeft = slide.offsetLeft;
        let slideWidth = slide.offsetWidth;
        let slideHeight = slide.offsetHeight;
        // group
        let group = slide.getAttribute('data-xt-group');
        if (group) {
          // vars
          slideLeft = Infinity;
          slideWidth = 0;
          slideHeight = 0;
          for (let [i, target] of targets.entries()) {
            slideLeft = target.offsetLeft < slideLeft ? slide.offsetLeft : slideLeft;
            slideWidth += target.offsetWidth;
            let h = target.offsetHeight;
            slideHeight = h > slideHeight ? h : slideHeight;
            // fix position with negative margin on initial render
            if (i === 0 && slideLeft < 0) {
              self.detail.fixNegativeMargin = target.offsetLeft;
            }
            if (i === 0 && self.detail.fixNegativeMargin) {
              slideLeft -= self.detail.fixNegativeMargin;
            }
          }
          for (let target of targets) {
            Xt.dataStorage.set(target, self.componentNamespace + 'GroupPosDone', true);
            Xt.dataStorage.set(target, self.componentNamespace + 'groupHeight', slideHeight);
          }
        } else {
          Xt.dataStorage.set(slide, self.componentNamespace + 'GroupPosDone', true);
        }
        // pos with alignment
        let pos;
        if (options.align === 'center') {
          pos = self.dragger.offsetWidth / 2 - slideLeft - slideWidth / 2;
        } else if (options.align === 'left') {
          pos = -slideLeft;
          pos = pos > 0 ? 0 : pos; // @FIX initial value sometimes is wrong
        } else if (options.align === 'right') {
          pos = -slideLeft + self.dragger.offsetWidth - slideWidth;
        }
        // pos with contain
        if (options.contain) {
          let min = 0;
          let slideLast = self.targets[self.targets.length - 1];
          let slideLastLeft = slideLast.offsetLeft;
          let slideLastWidth = slideLast.offsetWidth;
          let max = -slideLastLeft + self.dragger.offsetWidth - slideLastWidth;
          pos = pos > min ? min : pos;
          pos = pos < max ? max : pos;
        }
        // save pos
        if (group) {
          for (let target of targets) {
            Xt.dataStorage.set(target, self.componentNamespace + 'GroupPos', pos);
            //console.log(target, self.componentNamespace + 'GroupPos', pos);
          }
        } else {
          Xt.dataStorage.set(slide, self.componentNamespace + 'GroupPos', pos);
        }
      }
    }
    // wheel
    if (options.wheel && options.wheel.selector) {
      let first = self.targets[0];
      let last = self.targets[self.targets.length - 1];
      self.detail.wheelMin = -Xt.dataStorage.get(first, self.componentNamespace + 'GroupPos');
      self.detail.wheelMax = -Xt.dataStorage.get(last, self.componentNamespace + 'GroupPos');
    }
  }

  /**
   * init events
   */
  initEvents() {
    super.initEvents();
    let self = this;
    let options = self.options;
    let dragger = self.dragger;
    // targets
    for (let slide of self.targets) {
      // disable links not active slide
      slide.classList.add('links--none');
      // slide on
      let slideOnHandler = Xt.dataStorage.put(slide, 'on' + '.' + self.namespace,
        self.eventSlideOnHandler.bind(self).bind(self, dragger, slide));
      slide.addEventListener('on.xt', slideOnHandler, true); // @FIX event.xt: useCapture for custom events order on re-init
      // slide off
      let slideOffHandler = Xt.dataStorage.put(slide, 'off' + '.' + self.namespace,
        self.eventSlideOffHandler.bind(self).bind(self, dragger, slide));
      slide.addEventListener('off.xt', slideOffHandler, true); // @FIX event.xt: useCapture for custom events order on re-init
    }
    // dragger
    if (options.drag) {
      // drag
      let dragstartHandler = Xt.dataStorage.put(dragger, 'mousedown touchstart' + '.' + self.namespace,
        self.eventDragstartHandler.bind(self).bind(self, dragger));
      let events = ['mousedown', 'touchstart'];
      for (let event of events) {
        dragger.addEventListener(event, dragstartHandler, Xt.passiveSupported ? {passive: true} : false);
      }
      // grab
      if (!self.disabled) {
        dragger.classList.add('grab');
      } else {
        dragger.classList.remove('grab');
      }
      // wheel
      if (options.wheel && options.wheel.selector) {
        for (let wheel of self.detail.wheels) {
          wheel.addEventListener('wheelstart.xt', self.logicDragstart.bind(self).bind(self, dragger));
          wheel.addEventListener('wheel.xt', self.logicDrag.bind(self).bind(self, dragger));
          wheel.addEventListener('wheelend.xt', self.logicDragend.bind(self).bind(self, dragger));
          wheel.addEventListener('wheelend.xt', self.logicDragfrictionend.bind(self).bind(self, dragger));
        }
      }
    }
    // resize
    let resizeHandler = Xt.dataStorage.put(window, 'resize' + '.' + self.namespace,
      self.eventResizeHandler.bind(self).bind(self));
    addEventListener('resize', resizeHandler);
  }

  //////////////////////
  // handler
  //////////////////////

  /**
   * slide on handler
   * @param {Node|HTMLElement|EventTarget|Window} dragger
   * @param {Node|HTMLElement|EventTarget|Window} slide
   * @param {Event} e
   */
  eventSlideOnHandler(dragger, slide, e) {
    let self = this;
    // handler
    if (e.target === slide) { // @FIX event.xt: handler triggered by child xt events
      self.eventSlideOn(dragger, e);
    }
  }

  /**
   * slide off handler
   * @param {Node|HTMLElement|EventTarget|Window} dragger
   * @param {Node|HTMLElement|EventTarget|Window} slide
   * @param {Event} e
   */
  eventSlideOffHandler(dragger, slide, e) {
    let self = this;
    // handler
    if (e.target === slide) { // @FIX event.xt: handler triggered by child xt events
      self.eventSlideOff(dragger, e);
    }
  }

  /**
   * element drag on handler
   * @param {Node|HTMLElement|EventTarget|Window} dragger
   * @param {Event} e
   */
  eventDragstartHandler(dragger, e) {
    let self = this;
    // handler
    if (!e.button || e.button !== 2) { // not right click or it gets stuck
      if (self.initial || !self.checkAnim(Xt.arrSingle(dragger))) {
        // logic
        let eventLimit = self.object.querySelectorAll('.event-limit');
        if (eventLimit.length) {
          if (!Xt.checkNested(e.target, eventLimit)) {
            self.eventDragstart(dragger, e);
          }
        } else {
          self.eventDragstart(dragger, e);
        }
        // event off
        let dragendHandler = Xt.dataStorage.put(dragger, 'mouseup touchend' + '.' + self.namespace,
          self.eventDragendHandler.bind(self).bind(self, dragger));
        let events = ['mouseup', 'touchend'];
        for (let event of events) {
          addEventListener(event, dragendHandler);
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
    let self = this;
    // logic
    let eventLimit = self.object.querySelectorAll('.event-limit');
    if (eventLimit.length) {
      if (!Xt.checkNested(e.target, eventLimit)) {
        self.eventDragend(dragger, e);
      }
    } else {
      self.eventDragend(dragger, e);
    }
    // event off
    let dragendHandler = Xt.dataStorage.get(dragger, 'mouseup touchend' + '.' + self.namespace);
    let events = ['mouseup', 'touchend'];
    for (let event of events) {
      removeEventListener(event, dragendHandler);
    }
  }

  /**
   * element drag on
   * @param {Node|HTMLElement|EventTarget|Window} dragger
   * @param {Event} e
   */
  eventDragstart(dragger, e) {
    let self = this;
    // event move
    let dragHandler = Xt.dataStorage.put(dragger, 'mousemove touchmove' + '.' + self.namespace,
      self.eventDragHandler.bind(self).bind(self, dragger));
    let events = ['mousemove', 'touchmove'];
    for (let event of events) {
      dragger.addEventListener(event, dragHandler);
    }
    // logic
    self.logicDragstart(dragger, e);
  }

  /**
   * element drag off
   * @param {Node|HTMLElement|EventTarget|Window} dragger
   * @param {Event} e
   */
  eventDragend(dragger, e) {
    let self = this;
    // event move
    let dragHandler = Xt.dataStorage.get(dragger, 'mousemove touchmove' + '.' + self.namespace);
    let events = ['mousemove', 'touchmove'];
    for (let event of events) {
      dragger.removeEventListener(event, dragHandler);
    }
    // logic
    self.logicDragend(dragger, e);
  }

  /**
   * element drag handler
   * @param {Node|HTMLElement|EventTarget|Window} dragger
   * @param {Event} e
   */
  eventDragHandler(dragger, e) {
    let self = this;
    // logic
    self.logicDrag(dragger, e);
  }

  /**
   * resize
   * @param {Event} e
   */
  eventResizeHandler(e) {
    let self = this;
    // reinit
    if (!self.initial) {
      Xt.eventDelay(e, self.object, function () {
        self.initial = true;
        self.init();
      }, self.componentNamespace + 'Resize');
    }
  }

  /**
   * imageLoaded
   * @param {Node|HTMLElement|EventTarget|Window} el
   * @param {Node|HTMLElement|EventTarget|Window} img
   * @param {Event} e
   */
  eventImgLoadedHandler(el, img = null, e = null) {
    super.eventImgLoadedHandler(el, img, e);
    let self = this;
    // autoHeight
    if (self.autoHeight) {
      self.eventAutoHeight(el);
    }
  }

  //////////////////////
  // event
  //////////////////////

  /**
   * slide on
   * @param {Node|HTMLElement|EventTarget|Window} dragger
   * @param {Event} e
   */
  eventSlideOn(dragger, e) {
    let self = this;
    let slide = e.target;
    // only one call per group
    if (Xt.dataStorage.get(slide, self.componentNamespace + 'SlideOnDone')) {
      return false;
    }
    let targets = self.getTargets(slide);
    for (let target of targets) {
      Xt.dataStorage.set(target, self.componentNamespace + 'SlideOnDone', true);
    }
    //console.log(slide);
    // autoHeight
    if (self.autoHeight) {
      self.eventAutoHeight(slide);
    }
    // val
    self.detail.xPos = self.detail.xPosCurrent = self.detail.xPosReal = Xt.dataStorage.get(slide, self.componentNamespace + 'GroupPos');
    // dragger
    if (dragger) {
      // prevent alignment animation
      dragger.classList.remove('duration-none');
      // initial or resizing
      if (self.initial) {
        // prevent alignment animation
        dragger.classList.add('duration-none');
        requestAnimationFrame(function () {
          dragger.classList.remove('duration-none');
        });
      }
      // drag position
      dragger.style.transform = 'translateX(' + self.detail.xPos + 'px)';
      // disable drag
      dragger.classList.add('pointer-events--none');
      Xt.animTimeout(dragger, function () {
        dragger.classList.remove('pointer-events--none');
      });
      // disable links
      dragger.classList.remove('jumps--none');
      dragger.classList.remove('links--none');
    }
    // disable links not active slide
    slide.classList.remove('links--none');
  }

  /**
   * slide off
   * @param {Node|HTMLElement|EventTarget|Window} dragger
   * @param {Event} e
   */
  eventSlideOff(dragger, e) {
    let self = this;
    let slide = e.target;
    // disable links not active slide
    slide.classList.add('links--none');
    // only one call per group
    let targets = self.getTargets(slide);
    for (let target of targets) {
      Xt.dataStorage.remove(target, self.componentNamespace + 'SlideOnDone');
    }
  }

  /**
   * slide resize
   * @param {Node|HTMLElement|EventTarget|Window} slide
   * @param {Event} e
   */
  eventAutoHeight(slide, e = null) {
    let self = this;
    // resize
    let slideHeight = slide.offsetHeight;
    if (slide.getAttribute('data-xt-group')) {
      let groupHeight = Xt.dataStorage.get(slide, self.componentNamespace + 'groupHeight');
      slideHeight = groupHeight > slideHeight ? groupHeight : slideHeight;
    }
    self.autoHeight.style.height = slideHeight + 'px';
    // listener dispatch
    let detail = self.eDetailSet(e);
    slide.dispatchEvent(new CustomEvent('autoHeight.xt', {detail: detail}));
  }

  //////////////////////
  // logic
  //////////////////////

  /**
   * element drag on logic
   * @param {Node|HTMLElement|EventTarget|Window} dragger
   * @param {Event} e
   */
  logicDragstart(dragger, e) {
    let self = this;
    // disabled
    if (self.disabled && !self.initial) {
      return false;
    }
    // save event
    self.detail.eDragstart = e;
    // auto
    self.eventAutoPause();
    // prevent dragging animation
    dragger.classList.add('duration-none');
    // logic
    self.detail.xVelocity = null;
    self.detail.xVelocityNext = null;
    // listener dispatch
    let detail = self.eDetailSet(e);
    dragger.dispatchEvent(new CustomEvent('dragstart.xt.slider', {detail: detail}));
  }

  /**
   * element drag off logic
   * @param {Node|HTMLElement|EventTarget|Window} dragger
   * @param {Event} e
   */
  logicDragend(dragger, e) {
    let self = this;
    // disabled
    if (self.disabled && !self.initial) {
      return false;
    }
    // save event
    self.detail.eCurrent = e;
    // auto
    self.eventAutoStart();
    // disable drag
    requestAnimationFrame(function () { // needed for touch links triggering before logicDragend
      dragger.classList.add('pointer-events--none');
    });
    // disable links
    requestAnimationFrame(function () {
      dragger.classList.remove('links--none');
      dragger.classList.remove('jumps--none');
    });
    // logic
    self.logicDragfriction(dragger, e);
    // listener dispatch
    let detail = self.eDetailSet(e);
    dragger.dispatchEvent(new CustomEvent('dragend.xt.slider', {detail: detail}));
  }

  /**
   * element drag friction logic
   * @param {Node|HTMLElement|EventTarget|Window} dragger
   * @param {Event} e
   */
  logicDragfriction(dragger, e) {
    let self = this;
    let options = self.options;
    // friction
    if (Math.abs(self.detail.xVelocity) > options.drag.frictionLimit) {
      // drag
      self.logicDrag(dragger, e, true);
      // loop
      requestAnimationFrame(function () {
        self.logicDragfriction(dragger, e);
      });
    } else {
      // dragend
      requestAnimationFrame(self.logicDragfrictionend.bind(self).bind(e, dragger));
    }
  }

  /**
   * element drag logic
   * @param {Node|HTMLElement|EventTarget|Window} dragger
   * @param {Event} e
   * @param {Boolean} friction
   */
  logicDrag(dragger, e, friction = false) {
    let self = this;
    let options = self.options;
    // disabled
    if (self.disabled && !self.initial) {
      return false;
    }
    // save event
    self.detail.eCurrent = e;
    // calculate
    let xPos = self.detail.xPosReal;
    let xPosCurrent = self.detail.xPosCurrent || 0;
    let sign = Math.sign(self.detail.xVelocity);
    if (friction && options.drag.friction) {
      // momentum
      let fncFriction = options.drag.friction;
      if (typeof fncFriction === 'string') {
        fncFriction = new Function('velocity', fncFriction);
      }
      self.detail.xVelocity = fncFriction(Math.abs(self.detail.xVelocity)) * sign;
      // no momentum when stopping
      if (self.detail.dragDate) {
        let dateDiff = new Date() - self.detail.dragDate;
        self.detail.dragDate = null;
        if (dateDiff > options.drag.timeLimit) {
          self.detail.xVelocity = 0;
        }
      }
      // on friction
      xPos = xPos + self.detail.xVelocity;
      if (self.detail.eDragstart.detail.wheelX !== undefined) {
        self.detail.xStart = self.detail.eDragstart.detail.wheelX;
      } else if (self.detail.eDragstart.clientX !== undefined) {
        self.detail.xStart = self.detail.eDragstart.clientX;
      } else if (self.detail.eDragstart.touches.length) {
        self.detail.xStart = self.detail.eDragstart.touches[0].clientX;
      }
      self.detail.xCurrent = xPos + self.detail.xStart - xPosCurrent;
    } else {
      // momentum
      self.detail.dragDate = new Date();
      // on normal drag
      let xPosOld = xPos || 0;
      if (self.detail.eDragstart.detail.wheelX !== undefined) {
        self.detail.xStart = self.detail.eDragstart.detail.wheelX;
      } else if (self.detail.eDragstart.clientX !== undefined) {
        self.detail.xStart = self.detail.eDragstart.clientX;
      } else if (self.detail.eDragstart.touches.length) {
        self.detail.xStart = self.detail.eDragstart.touches[0].clientX;
      }
      if (self.detail.eCurrent.detail.wheelX !== undefined) {
        self.detail.xCurrent = self.detail.eCurrent.detail.wheelX;
      } else if (self.detail.eCurrent.clientX !== undefined) {
        self.detail.xCurrent = self.detail.eCurrent.clientX;
      } else if (self.detail.eCurrent.touches.length) {
        self.detail.xCurrent = self.detail.eCurrent.touches[0].clientX;
      }
      xPos = xPosCurrent + (self.detail.xCurrent - self.detail.xStart) * options.drag.factor;
      // keep some velocity (median value of previous frame and not current frame)
      self.detail.xVelocity = (self.detail.xVelocity + self.detail.xVelocityNext) / 2;
      self.detail.xVelocityNext = xPos - xPosOld;
    }
    // val
    self.detail.xPosReal = xPos;
    // check
    let xDist = xPos - xPosCurrent;
    if (Math.abs(xDist) > options.drag.linkThreshold) {
      // disable links
      dragger.classList.add('links--none');
      dragger.classList.add('jumps--none');
    }
    // overflow
    if (options.drag.overflow) {
      let first = self.targets[0];
      let last = self.targets[self.targets.length - 1];
      let min = Xt.dataStorage.get(first, self.componentNamespace + 'GroupPos');
      let max = Xt.dataStorage.get(last, self.componentNamespace + 'GroupPos');
      // overflow
      let fncOverflow = options.drag.overflow;
      if (typeof fncOverflow === 'string') {
        fncOverflow = new Function('overflow', fncOverflow);
      }
      if (friction && options.drag.friction) {
        if (xPos > min || xPos < max) {
          self.detail.xVelocity = fncOverflow(Math.abs(self.detail.xVelocity)) * sign;
        }
      } else {
        if (xPos > min) {
          self.detail.xVelocity = 0;
          let overflow = xPos - min;
          xPos = min + fncOverflow(overflow);
        } else if (xPos < max) {
          self.detail.xVelocity = 0;
          let overflow = xPos - max;
          xPos = max - fncOverflow(-overflow);
        }
      }
    }
    // val
    self.detail.xPosOld = self.detail.xPos;
    self.detail.xPos = xPos;
    // drag position
    dragger.style.transform = 'translateX(' + self.detail.xPos + 'px)';
    // listener dispatch
    let detail = self.eDetailSet(e);
    dragger.dispatchEvent(new CustomEvent('drag.xt.slider', {detail: detail}));
  }

  /**
   * element drag friction off logic
   * @param {Node|HTMLElement|EventTarget|Window} dragger
   * @param {Event} e
   */
  logicDragfrictionend(dragger, e) {
    let self = this;
    let options = self.options;
    let xPosCurrent = self.detail.xPosCurrent || 0;
    // prevent dragging animation
    dragger.classList.remove('duration-none');
    // only one call per group
    let currents = self.getCurrents();
    for (let current of currents) {
      let group = current.getAttribute('data-xt-group');
      if (group) {
        for (let target of self.getTargets(current)) {
          Xt.dataStorage.remove(target, self.componentNamespace + 'SlideOnDone');
        }
      }
    }
    // activate or reset
    let xPos = self.detail.xPosReal;
    let xDist = xPos - xPosCurrent;
    if (Math.abs(xDist) > options.drag.threshold) {
      // get nearest
      let found = self.currentIndex;
      if (options.groupMq) {
        for (let [i, group] of self.groupMq.entries()) {
          for (let slideCheck of group) {
            let check = xPos - dragger.offsetWidth / 2 + slideCheck.offsetLeft;
            if (check < 0 && Xt.visible(slideCheck)) {
              found = i;
            }
          }
        }
      } else {
        for (let [i, slideCheck] of self.targets.entries()) {
          let check = xPos - dragger.offsetWidth / 2 + slideCheck.offsetLeft;
          if (check < 0 && Xt.visible(slideCheck)) {
            found = i;
          }
        }
      }
      // goTo with force
      if (found === self.currentIndex) {
        // change at least one
        if (Math.sign(xDist) < 0) {
          self.goToNext(1, true);
        } else {
          self.goToPrev(1, true);
        }
      } else {
        // goToIndex
        self.goToIndex(found, true);
      }
    } else {
      // val
      self.detail.xPosOld = self.detail.xPos;
      self.detail.xPos = self.detail.xPosCurrent;
      // drag position
      dragger.style.transform = 'translateX(' + self.detail.xPosCurrent + 'px)';
      // disable drag and links
      Xt.animTimeout(dragger, function () {
        // disable drag
        dragger.classList.remove('pointer-events--none');
      });
      // listener dispatch
      let detail = self.eDetailSet(e);
      dragger.dispatchEvent(new CustomEvent('dragreset.xt.slider', {detail: detail}));
    }
  }

}

//////////////////////
// option
//////////////////////

Slider.componentName = 'xt-slider';
Slider.optionsDefault = {
  "elements": "[data-xt-pag]",
  "targets": ".slide",
  "on": "click",
  "toggle": false,
  "min": 1,
  "max": 1,
  "instant": true,
  "jump": true,
  "navigation": "[data-xt-nav]",
  "wheel": {
    "selector": false,
    "block": true,
    "limit": false,
    "transform": true,
    "horizontal": true,
    "factor": 1,
    "friction": "return delta / 9",
    "frictionLimit": 1.5
  },
  "keyboard": {
    "selector": ".slides"
  },
  "aria": {
    "labelledby": false
  },
  // slider only
  "autoHeight": ".slides",
  "groupMq": {"all": 0.8},
  "align": "center",
  "contain": false,
  "pagination": ".slider_pagination",
  "drag": {
    "dragger": ".slides_inner",
    "threshold": 100,
    "linkThreshold": 50,
    "factor": 1,
    "friction": "return Math.pow(velocity, 0.95)",
    "frictionLimit": 1.5,
    "overflow": "return Math.pow(overflow, 0.73)",
    "timeLimit": 25
  }
};

//////////////////////
// export
//////////////////////

export default Slider;
