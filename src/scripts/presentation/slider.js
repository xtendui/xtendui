//////////////////////
// import
//////////////////////

import {Xt} from '../xtend';
import {Core} from '../core';

//////////////////////
// Slider
//////////////////////

export class Slider extends Core {

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
      self.dragger = self.object.querySelector(options.drag.dragger);
    }
    // autoHeight
    if (options.autoHeight) {
      self.autoHeight = self.object.querySelector(options.autoHeight);
    }
    // initSliderGroup
    self.initSliderGroup();
    // initSliderPags
    self.initSliderPags();
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
   * init slider group
   */
  initSliderGroup() {
    let self = this;
    let options = self.options;
    // drag wrap
    if (self.dragger && options.drag.wrap) {
      // clear elements
      for (let el of self.elements.filter(x => x.classList.contains('xt-wrap'))) {
        el.remove();
      }
      self.elements = self.elements.filter(x => !x.classList.contains('xt-wrap'));
      // clear targets
      for (let tr of self.targets.filter(x => x.classList.contains('xt-wrap'))) {
        tr.remove();
      }
      self.targets = self.targets.filter(x => !x.classList.contains('xt-wrap'));
    }
    // width
    let draggerWidth = self.dragger ? self.dragger.offsetWidth : self.object.offsetWidth;
    let draggerWidthInit = 0;
    let draggerWidthCalc = 0;
    // groupMq media
    if (options.groupMq) {
      let mqs = Object.entries(options.groupMq);
      if (mqs.length) {
        for (let [key, value] of mqs) {
          if (window.matchMedia(key).matches) {
            draggerWidthInit = draggerWidthCalc = draggerWidth * value;
          }
        }
      }
    }
    // generate groups
    self.groupMq = [];
    self.groupMq.push([]);
    let currentCount = draggerWidthCalc;
    // calculate
    for (let target of self.targets) {
      let targetWidth = target.offsetWidth;
      if (targetWidth === 0) { // when display none
        let container = target.parentNode;
        let clone = target.cloneNode(true);
        clone.classList.add('xt-calculating', 'xt-ignore');
        container.append(clone);
        targetWidth = clone.offsetWidth;
        clone.remove();
      }
      currentCount -= targetWidth;
      // overflow
      let currentGroup = self.groupMq.length - 1;
      if (currentCount < 0 && self.groupMq[currentGroup].length) {
        self.groupMq.push([]);
        currentGroup = self.groupMq.length - 1;
        currentCount = draggerWidthInit;
        currentCount -= targetWidth;
      }
      // assign group
      self.groupMq[currentGroup].push(target);
      target.setAttribute('data-xt-group', self.namespace + '-' + currentGroup);
    }
    // @FIX position values negative margins
    self.detail.fixNegativeMargin = self.groupMq[0][0].offsetLeft;
    // drag wrap
    if (self.dragger && options.drag.wrap) {
      if (!options.loop) {
        console.error('Error: Xt.Slider needs "loop": true when using "drag": {"wrap": true}', self.object); // Xt check
      }
      if (options.contain) {
        console.error('Error: Xt.Slider cannot use "contain": true when using "drag": {"wrap": true}', self.object); // Xt check
      }
      // wrapFirst
      let wrapFirst = [];
      for (let group of self.groupMq) {
        wrapFirst.unshift([]);
      }
      // wrapLast
      let wrapLast = [];
      for (let group of self.groupMq) {
        wrapLast.push([]);
      }
      // merge groupMq with wraps
      let container = self.targets[0].parentNode;
      let firstElementInitial = self.groupMq[0][0];
      self.groupMqInitial = self.groupMq;
      self.groupMq = wrapFirst.concat(self.groupMq.concat(wrapLast));
      // wrapFirst
      for (let [i, group] of self.groupMqInitial.entries()) {
        for (let [z, slide] of group.entries()) {
          let clone;
          if (wrapFirst[i][z]) {
            clone = wrapFirst[i][z];
          } else {
            clone = slide.cloneNode(true);
            clone.classList.add('xt-wrap');
            container.insertBefore(clone, firstElementInitial);
            wrapFirst[i].unshift(clone);
          }
          clone.setAttribute('data-xt-group', self.namespace + '-' + 'wrapFirst' + i);
          self.targets.unshift(clone);
        }
      }
      // wrapLast
      for (let [i, group] of self.groupMqInitial.entries()) {
        for (let [z, slide] of group.entries()) {
          let clone;
          if (wrapLast[i][z]) {
            clone = wrapLast[i][z];
          } else {
            clone = slide.cloneNode(true);
            clone.classList.add('xt-wrap');
            container.append(clone);
            wrapLast[i].push(clone);
          }
          clone.setAttribute('data-xt-group', self.namespace + '-' + 'wrapLast' + i);
          self.targets.push(clone);
        }
      }
      // save
      Xt.dataStorage.set(self.object, self.componentNamespace + 'WrapFirst', wrapFirst);
      Xt.dataStorage.set(self.object, self.componentNamespace + 'WrapLast', wrapLast);
    }
  }

  /**
   * init slider pagination
   */
  initSliderPags() {
    let self = this;
    let options = self.options;
    // generate elements
    if (options.pagination) {
      let pags = self.object.querySelectorAll(options.pagination);
      if (!pags.length) {
        console.error('Error: Xt.Slider pagination not found for', self.object); // Xt check
      }
      // pags
      self.pags = self.pags ? self.pags : [];
      for (let [z, pag] of pags.entries()) {
        // vars
        let template = pag.querySelector('[data-xt-pag]');
        template.classList.add('xt-ignore'); // add ignore to no put in elements
        let container = template.parentNode;
        let arr = self.groupMq;
        // check if currentPags has different length
        if (!self.pags[z] || self.pags[z].length !== arr.length) {
          // clean
          if (self.pags[z]) {
            for (let oldPag of self.pags[z]) {
              oldPag.remove();
            }
          }
          // populate
          self.pags[z] = [];
          for (let [i, group] of arr.entries()) {
            let item = template.cloneNode(true);
            let html = item.innerHTML;
            html = html.replace(new RegExp('{{content}}', 'ig'), self.targets[i].innerHTML);
            html = html.replace(new RegExp('{{num}}', 'ig'), (i + 1).toString());
            html = html.replace(new RegExp('{{tot}}', 'ig'), arr.length.toString());
            item.innerHTML = html;
            item.classList.remove('xt-clone', 'xt-ignore');
            item.setAttribute('data-xt-group', group[0].getAttribute('data-xt-group'));
            container.insertBefore(item, template);
            self.pags[z][i] = item;
            // drag wrap
            if (self.dragger && options.drag.wrap) {
              let length = self.groupMqInitial.length;
              if (i < length || i > length * 2 - 1) {
                item.classList.add('xt-wrap', 'display--none');
              }
            }
          }
        }
      }
    }
  }

  /**
   * init slider group positions
   */
  initSliderPos() {
    let self = this;
    let options = self.options;
    // reset done
    for (let slide of self.targets) {
      Xt.dataStorage.remove(slide, self.componentNamespace + 'GroupPosDone');
    }
    // set pos
    let draggerWidth = self.dragger.offsetWidth;
    // slides pos
    let slidesWidth = 0;
    for (let slide of self.targets) {
      if (!Xt.dataStorage.get(slide, self.componentNamespace + 'GroupPosDone') && Xt.visible(slide)) {
        // vars
        let targets = self.getTargets(slide);
        let slideLeft = Infinity;
        let slideWidth = 0;
        let slideHeight = 0;
        // vars
        for (let target of targets) {
          slideLeft = target.offsetLeft < slideLeft ? slide.offsetLeft : slideLeft;
          slideWidth += target.offsetWidth;
          slidesWidth += slideWidth;
          let h = target.offsetHeight;
          slideHeight = h > slideHeight ? h : slideHeight;
        }
        for (let target of targets) {
          Xt.dataStorage.set(target, self.componentNamespace + 'GroupPosDone', true);
          Xt.dataStorage.set(target, self.componentNamespace + 'groupHeight', slideHeight);
        }
        // pos with alignment
        let pos;
        if (options.align === 'center') {
          pos = draggerWidth / 2 - slideLeft - slideWidth / 2;
        } else if (options.align === 'left') {
          pos = -slideLeft;
        } else if (options.align === 'right') {
          pos = -slideLeft + draggerWidth - slideWidth;
        }
        // save pos
        for (let target of targets) {
          Xt.dataStorage.set(target, self.componentNamespace + 'GroupPos', pos);
          //console.log(target, pos);
        }
      }
    }
    // min max pos with contain
    if (options.contain
      && slidesWidth > draggerWidth) { // only if slides overflow dragger
      let slideFirst = self.targets[0];
      let slideFirstLeft = slideFirst.offsetLeft;
      let slideLast = self.targets[self.targets.length - 1];
      let slideLastLeft = slideLast.offsetLeft;
      let slideLastWidth = slideLast.offsetWidth;
      let min = -slideFirstLeft;
      let max = -slideLastLeft + draggerWidth - slideLastWidth;
      for (let group of self.groupMq) {
        for (let target of group) {
          let pos = Xt.dataStorage.get(target, self.componentNamespace + 'GroupPos');
          pos = pos > min ? min : pos;
          pos = pos < max ? max : pos;
          Xt.dataStorage.set(target, self.componentNamespace + 'GroupPos', pos);
        }
      }
    }
    // @FIX position values negative margins
    for (let target of self.targets) {
      let pos = Xt.dataStorage.get(target, self.componentNamespace + 'GroupPos');
      pos += self.detail.fixNegativeMargin;
      Xt.dataStorage.set(target, self.componentNamespace + 'GroupPos', pos);
    }
    // set wheel min and max
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
      if (options.jump) {
        slide.classList.add('links--none');
      }
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
        let wheel = self.detail.wheel;
        wheel.addEventListener('wheelstart.xt', self.logicDragstart.bind(self).bind(self, dragger));
        wheel.addEventListener('wheel.xt', self.logicDrag.bind(self).bind(self, dragger));
        wheel.addEventListener('wheelend.xt', self.logicDragend.bind(self).bind(self, dragger));
        wheel.addEventListener('wheelend.xt', self.logicDragfrictionend.bind(self).bind(self, dragger));
      }
    }
    // image loaded
    for (let slide of self.targets) {
      // slide on
      let eventImgLoadedHandler = Xt.dataStorage.put(slide, 'imageLoaded' + '.' + self.namespace,
        self.eventImgLoaded.bind(self).bind(self, slide));
      slide.addEventListener('imageLoaded.xt', eventImgLoadedHandler, true); // @FIX event.xt: useCapture for custom events order on re-init
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
    let options = self.options;
    // reinit
    if (!self.initial) {
      Xt.eventDelay(e, self.object, function () {
        self.initial = true; // @FIX initial
        options.imgLoaded = false; // don't rerun imageLoaded
        self.init();
      }, self.componentNamespace + 'Resize');
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
    let options = self.options;
    let slide = e.target;
    // only one call per group
    if (Xt.dataStorage.get(slide, self.componentNamespace + 'SlideOnDone')) {
      return false;
    }
    let targets = self.getTargets(slide);
    for (let target of targets) {
      Xt.dataStorage.set(target, self.componentNamespace + 'SlideOnDone', true);
    }
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
      // drag wrap
      if (self.dragger && options.drag.wrap) {
        let length = self.groupMqInitial.length;
        if (self.initial) {
          // @FIX initial activation
          if (self.currentIndex < length) {
            requestAnimationFrame(function () {
              self.initial = true;
              self.goToIndex(length, true);
            });
          }
        } else {
          // @FIX wrap with initial
          Xt.animTimeout(dragger, function () {
            if (!self.initial) {
              if (self.currentIndex < length) {
                self.initial = true;
                self.goToIndex(length * 2 - 1, true);
              } else if (self.currentIndex > length * 2 - 1) {
                self.initial = true;
                self.goToIndex(length, true);
              }
            }
          }, 'wrap');
        }
      }
    }
    // disable links not active slide
    if (options.jump) {
      slide.classList.remove('links--none');
    }
  }

  /**
   * slide off
   * @param {Node|HTMLElement|EventTarget|Window} dragger
   * @param {Event} e
   */
  eventSlideOff(dragger, e) {
    let self = this;
    let options = self.options;
    let slide = e.target;
    // disable links not active slide
    if (options.jump) {
      slide.classList.add('links--none');
    }
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
    let groupHeight = Xt.dataStorage.get(slide, self.componentNamespace + 'groupHeight');
    slideHeight = groupHeight > slideHeight ? groupHeight : slideHeight;
    self.autoHeight.style.height = slideHeight + 'px';
    // listener dispatch
    let detail = self.eDetailSet(e);
    slide.dispatchEvent(new CustomEvent('autoHeight.xt', {detail: detail}));
  }

  /**
   * image loaded
   * @param {Node|HTMLElement|EventTarget|Window} el
   * @param {Event} e
   */
  eventImgLoaded(el, e = null) {
    let self = this;
    // reinit
    self.initLogic();
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
    if (!self.initial) {
      let detail = self.eDetailSet(e);
      dragger.dispatchEvent(new CustomEvent('dragstart.xt.slider', {detail: detail}));
    }
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
    if (!self.initial) {
      let detail = self.eDetailSet(e);
      dragger.dispatchEvent(new CustomEvent('dragend.xt.slider', {detail: detail}));
    }
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
    if (self.initial) {
      self.dragger.classList.add('transition-none');
    }
    dragger.style.transform = 'translateX(' + self.detail.xPos + 'px)';
    if (self.initial) {
      self.dragger.classList.remove('transition-none');
    }
    // listener dispatch
    if (!self.initial) {
      let detail = self.eDetailSet(e);
      dragger.dispatchEvent(new CustomEvent('drag.xt.slider', {detail: detail}));
    }
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
      for (let target of self.getTargets(current)) {
        Xt.dataStorage.remove(target, self.componentNamespace + 'SlideOnDone');
      }
    }
    // activate or reset
    let xPos = self.detail.xPosReal;
    let xDist = xPos - xPosCurrent;
    if (Math.abs(xDist) > options.drag.threshold) {
      // get nearest
      let found = self.currentIndex;
      for (let [i, group] of self.groupMq.entries()) {
        for (let slideCheck of group) {
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
      // disable drag and links
      Xt.animTimeout(dragger, function () {
        // disable drag
        dragger.classList.remove('pointer-events--none');
      });
      // drag position
      if (self.initial) {
        self.dragger.classList.add('transition-none');
      }
      dragger.style.transform = 'translateX(' + self.detail.xPosCurrent + 'px)';
      if (self.initial) {
        self.dragger.classList.remove('transition-none');
      }
      // listener dispatch
      if (!self.initial) {
        let detail = self.eDetailSet(e);
        dragger.dispatchEvent(new CustomEvent('dragreset.xt.slider', {detail: detail}));
      }
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
  "loop": true,
  "jump": true,
  "imgLoaded": true,
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
    "wrap": false,
    "dragger": ".slides_inner",
    "threshold": 50,
    "linkThreshold": 50,
    "factor": 1,
    "friction": "return Math.pow(velocity, 0.9)",
    "frictionLimit": 1.5,
    "overflow": "return Math.pow(overflow, 0.73)",
    "timeLimit": 25
  }
};
