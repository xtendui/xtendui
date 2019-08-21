//////////////////////
// import
//////////////////////

import {Xt} from 'xtend-library'
import {Core} from 'xtend-library/src/components/core/core'

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
    // only one call per group
    for (let slide of self.targets) {
      Xt.dataStorage.remove(slide, self.componentNamespace + 'SlideOnDone');
    }
    // dragger
    if (options.drag && options.drag.dragger) {
      self.dragger = self.object.querySelector(options.drag.dragger);
      self.destroyElements.push(self.dragger);
    }
    // autoHeight
    if (options.autoHeight) {
      self.autoHeight = self.object.querySelector(options.autoHeight);
      self.autoHeight.classList.add('xt-autoHeight');
    }
    // initSliderGroup
    self.initSliderGroup();
    // initSliderPags
    self.initSliderPags();
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
    // @FIX disable slider if not overflowing
    self.object.classList.remove('slider--nooverflow');
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
    let draggerWidthAvailable = 0;
    // draggerWidthAvailable
    if (options.groupMq) {
      let mqs = Object.entries(options.groupMq);
      if (mqs.length) {
        for (let [key, value] of mqs) {
          if (window.matchMedia(key).matches) {
            draggerWidthAvailable = draggerWidth * value;
          }
        }
      }
    }
    // groupMqInitial
    self.groupMq = [];
    self.groupMq.push([]);
    let currentCount = draggerWidthAvailable;
    let totalCount = draggerWidth;
    for (let target of self.targets) {
      let targetWidth = target.offsetWidth;
      if (targetWidth === 0) { // when display none
        let container = target.parentNode;
        let cloned = target.cloneNode(true);
        cloned.classList.add('xt-calculating', 'xt-ignore');
        container.append(cloned);
        targetWidth = cloned.offsetWidth;
        cloned.remove();
      }
      currentCount -= targetWidth;
      totalCount -= targetWidth;
      // overflow
      let currentGroup = self.groupMq.length - 1;
      if (currentCount < 0 && self.groupMq[currentGroup].length) {
        self.groupMq.push([]);
        currentGroup = self.groupMq.length - 1;
        currentCount = draggerWidthAvailable;
        currentCount -= targetWidth;
      }
      // assign group
      self.groupMq[currentGroup].push(target);
      target.setAttribute('data-xt-group', self.namespace + '-' + currentGroup);
    }
    self.groupMqInitial = self.groupMq;
    // @FIX position values negative margins
    self.detail.fixNegativeMargin = self.groupMq[0][0].offsetLeft;
    // @FIX disable slider if not overflowing
    if (totalCount >= 0) {
      self.object.classList.add('slider--nooverflow');
      self.disable();
      // enable all visible elements also if not .active next frame when self.elements is populated
      let afterInitDisable = function() {
        let currents = self.getCurrents();
        for (let el of self.elements.filter(x => !currents.includes(self.getElements(x)[0]))) {
          self.activate(el);
          for (let tr of self.getTargets(el)) {
            self.activate(tr);
          }
        }
        self.object.removeEventListener('init.xt', afterInitDisable);
      };
      self.object.addEventListener('init.xt', afterInitDisable);
    }
    // drag wrap
    let wrapFirst = [];
    let wrapLast = [];
    if (totalCount < 0) {
      if (self.dragger && options.drag.wrap) {
        let container = self.targets[0].parentNode;
        if (!options.loop) {
          console.error('Error: Xt.Slider needs "loop": true when using "drag": {"wrap": true}', self.object);
        }
        if (options.contain) {
          console.error('Error: Xt.Slider cannot use "contain": true when using "drag": {"wrap": true}', self.object);
        }
        // wrapLast
        let wrapLastCount = draggerWidth;
        wrapLastLabel: for (let [i, group] of self.groupMqInitial.entries()) {
          wrapLast.push([]);
          for (let slide of group) {
            let cloned = slide.cloneNode(true);
            Xt.dataStorage.set(cloned, 'xt' + self.componentNamespace + 'cloneSource', slide);
            cloned.classList.add('xt-clone', 'xt-wrap');
            cloned.classList.remove(...self.classes, ...self.classesIn, ...self.classesOut, ...self.classesInitial, ...self.classesInverse);
            container.append(cloned);
            wrapLast[i].push(cloned);
            cloned.setAttribute('data-xt-group', self.namespace + '-' + 'wrapLast' + i);
            self.targets.push(cloned);
            wrapLastCount -= slide.offsetWidth;
            if (wrapLastCount <= - draggerWidth * (options.drag.wrap - 1)) {
              break wrapLastLabel;
            }
          }
        }
        // wrapFirst
        let wrapFirstCount = draggerWidth;
        wrapFirstLabel: for (let [i, group] of self.groupMqInitial.reverse().entries()) {
          wrapFirst.unshift([]);
          for (let slide of group.reverse()) {
            let cloned = slide.cloneNode(true);
            Xt.dataStorage.set(cloned, 'xt' + self.componentNamespace + 'cloneSource', slide);
            cloned.classList.add('xt-clone', 'xt-wrap');
            cloned.classList.remove(...self.classes, ...self.classesIn, ...self.classesOut, ...self.classesInitial, ...self.classesInverse);
            container.prepend(cloned);
            wrapFirst[0].unshift(cloned);
            cloned.setAttribute('data-xt-group', self.namespace + '-' + 'wrapFirst' + i);
            self.targets.unshift(cloned);
            wrapFirstCount -= slide.offsetWidth;
            if (wrapFirstCount <= - draggerWidth * (options.drag.wrap - 1)) {
              break wrapFirstLabel;
            }
          }
          group.reverse(); // reset reverse
        }
        self.groupMqInitial.reverse(); // reset reverse
      }
    }
    self.groupMqFirst = wrapFirst;
    self.groupMqLast = wrapLast;
    self.groupMq = wrapFirst.concat(self.groupMq.concat(wrapLast));
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
        console.error('Error: Xt.Slider pagination not found for', self.object);
      }
      // pags
      self.pags = self.pags ? self.pags : [];
      for (let [z, pag] of pags.entries()) {
        // clean
        if (self.pags[z]) {
          for (let oldPag of self.pags[z]) {
            oldPag.remove();
          }
        }
        // vars
        let cloned = pag.querySelector('[data-xt-pag]');
        cloned.classList.add('xt-ignore');
        let container = cloned.parentNode;
        let arr = self.groupMq;
        // populate
        self.pags[z] = [];
        for (let [i, group] of arr.entries()) {
          let item = document.createElement('div'); // needed to set innerHTML instead of outerHTML to do html.search also attributes
          let clone = cloned.cloneNode(true);
          clone.classList.remove('xt-ignore');
          clone.classList.add('xt-clone');
          item.appendChild(clone);
          let html = item.innerHTML;
          if (html.search(new RegExp('xt-content', 'ig')) !== -1) {
            let replace = '';
            for (let slide of group) {
              replace += slide.querySelector('.slide_pagination_content').innerHTML;
            }
            html = html.replace(new RegExp('xt-content', 'ig'), replace);
          }
          if (html.search(new RegExp('xt-num', 'ig')) !== -1) {
            html = html.replace(new RegExp('xt-num', 'ig'), (i - self.groupMqFirst.length + 1).toString());
          }
          if (html.search(new RegExp('xt-tot', 'ig')) !== -1) {
            html = html.replace(new RegExp('xt-tot', 'ig'), self.groupMqInitial.length.toString());
          }
          item.innerHTML = html;
          item.children[0].setAttribute('data-xt-group', group[0].getAttribute('data-xt-group'));
          container.insertBefore(item.children[0], cloned);
          item.remove();
          self.pags[z][i] = container.querySelectorAll('[data-xt-pag].xt-clone')[i];
          // drag wrap
          if (self.dragger && options.drag.wrap) {
            let min = self.groupMqFirst.length;
            let max = self.groupMqFirst.length + self.groupMqInitial.length - 1;
            if (i < min || i > max) {
              self.pags[z][i].classList.add('xt-clone', 'xt-wrap', 'display--none');
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
        let slideHeightTemp = 0;
        // vars
        for (let target of targets) {
          let cloneSource = Xt.dataStorage.get(target, 'xt' + self.componentNamespace + 'cloneSource');
          slideLeft = target.offsetLeft < slideLeft ? slide.offsetLeft : slideLeft;
          if (cloneSource) {
            // @FIX xt-wrap clone offsetWidth on resize
            let w = cloneSource.offsetWidth;
            slideWidth += w;
            target.children[0].style.width = w + 'px';
            // @FIX xt-wrap clone offsetHeight on autoHeight
            slideHeightTemp = cloneSource.children[0].offsetHeight;
          } else {
            slideWidth += target.offsetWidth;
            slideHeightTemp = target.children[0].offsetHeight;
          }
          slidesWidth += slideWidth;
          slideHeight = slideHeightTemp > slideHeight ? slideHeightTemp : slideHeight;
        }
        for (let target of targets) {
          Xt.dataStorage.set(target, self.componentNamespace + 'GroupPosDone', true);
          Xt.dataStorage.set(target, self.componentNamespace + 'GroupHeight', slideHeight);
        }
        // pos with alignment
        let pos;
        if (!self.object.classList.contains('slider--nooverflow')) { // @FIX disable slider if not overflowing
          if (options.align === 'center') {
            pos = draggerWidth / 2 - slideLeft - slideWidth / 2;
          } else if (options.align === 'left') {
            pos = -slideLeft;
          } else if (options.align === 'right') {
            pos = draggerWidth - slideLeft - slideWidth;
          }
        }
        //console.debug(pos, draggerWidth, slideWidth, slide);
        // save pos
        for (let target of targets) {
          Xt.dataStorage.set(target, self.componentNamespace + 'GroupPos', pos);
        }
      }
    }
    // @FIX xt-wrap clone offsetWidth on resize
    for (let target of self.targets) {
      target.children[0].style.width = '';
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
      let arr = self.targets.filter(x => !x.classList.contains('xt-wrap'));
      let first = arr[0];
      let last = arr[arr.length - 1];
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
      // drag start
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
    if (slide === e.target || slide.contains(e.target)) { // @FIX on.xt and off.xt: handler triggered by child xt events
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
    if (slide === e.target || slide.contains(e.target)) { // @FIX on.xt and off.xt: handler triggered by child xt events
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
        // drag end
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
    // event off
    let dragendHandler = Xt.dataStorage.get(dragger, 'mouseup touchend' + '.' + self.namespace);
    let eventsoff = ['mouseup', 'touchend'];
    for (let event of eventsoff) {
      removeEventListener(event, dragendHandler);
    }
    // event move
    let dragHandler = Xt.dataStorage.get(dragger, 'mousemove touchmove' + '.' + self.namespace);
    let eventsmove = ['mousemove', 'touchmove'];
    for (let event of eventsmove) {
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
        self.initLogic();
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
      let slideHeight = slide.children[0].offsetHeight;
      let groupHeight = Xt.dataStorage.get(slide, self.componentNamespace + 'GroupHeight');
      slideHeight = groupHeight > slideHeight ? groupHeight : slideHeight;
      slideHeight += 'px';
      if (self.autoHeight.style.height !== slideHeight) {
        self.autoHeight.style.height = slideHeight;
        // listener dispatch
        let detail = self.eDetailSet();
        slide.dispatchEvent(new CustomEvent('autoHeight.xt', {bubbles: true, detail: detail}));
      }
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
      // disable dragger
      dragger.classList.add('pointer-events--none');
      for (let nav of self.navs) {
        nav.classList.add('pointer-events--none');
      }
      Xt.animTimeout(dragger, function () {
        dragger.classList.remove('pointer-events--none');
        for (let nav of self.navs) {
          nav.classList.remove('pointer-events--none');
        }
      });
      // disable links
      dragger.classList.remove('jumps--none');
      dragger.classList.remove('links--none');
      // drag wrap
      if (self.dragger && options.drag.wrap) {
        let min = self.groupMqFirst.length;
        let max = self.groupMqFirst.length + self.groupMqInitial.length - 1;
        if (self.initial) {
          // @FIX initial activation
          if (self.currentIndex < min) {
            requestAnimationFrame(function () {
              self.initial = true;
              self.goToIndex(min, true);
              self.initialCurrents = self.getCurrents().slice(0); // @FIX initialCurrents
            });
          }
        } else {
          // @FIX wrap with initial
          Xt.animTimeout(dragger, function () {
            if (!self.initial) {
              if (self.currentIndex < min) {
                self.initial = true;
                self.goToIndex(max + self.currentIndex - min + 1, true); // wrap around xt-wrap items
              } else if (self.currentIndex > max) {
                self.initial = true;
                self.goToIndex(min + self.currentIndex - max - 1, true); // wrap around xt-wrap items
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
    if (e.detail.wheelX !== undefined) {
      self.detail.xStart = e.detail.wheelX;
    } else if (e.clientX !== undefined) {
      self.detail.xStart = e.clientX;
    } else if (e.touches && e.touches.length) {
      self.detail.xStart = e.touches[0].clientX;
    }
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
    if (e.detail.wheelX !== undefined) {
      self.detail.xCurrent = e.detail.wheelX;
    } else if (e.clientX !== undefined) {
      self.detail.xCurrent = e.clientX;
    } else if (e.touches && e.touches.length) {
      self.detail.xCurrent = e.touches[0].clientX;
    }
    // auto
    self.eventAutoStart();
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
      // disable dragger
      dragger.classList.add('pointer-events--none');
      for (let nav of self.navs) {
        nav.classList.add('pointer-events--none');
      }
      // drag
      self.logicDrag(dragger, e, true);
      // loop
      requestAnimationFrame(function () {
        self.logicDragfriction(dragger, e);
      });
    } else {
      // disable links
      dragger.classList.remove('links--none');
      dragger.classList.remove('jumps--none');
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
    if (e.detail.wheelX !== undefined) {
      self.detail.xCurrent = e.detail.wheelX;
    } else if (e.clientX !== undefined) {
      self.detail.xCurrent = e.clientX;
    } else if (e.touches && e.touches.length) {
      self.detail.xCurrent = e.touches[0].clientX;
    }
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
      self.detail.xCurrent = xPos + self.detail.xStart - xPosCurrent;
    } else {
      // momentum
      self.detail.dragDate = new Date();
      // on normal drag
      let xPosOld = xPos || 0;
      xPos = xPosCurrent + (self.detail.xCurrent - self.detail.xStart) * options.drag.factor;
      // keep some velocity (median value of previous frame and not current frame)
      self.detail.xVelocity = (self.detail.xVelocity + self.detail.xVelocityNext) / 2;
      self.detail.xVelocityNext = xPos - xPosOld;
    }
    // val
    self.detail.xPosReal = xPos;
    self.detail.xCurrentReal = self.detail.xCurrent;
    // check
    let xDist = xPos - xPosCurrent;
    if (Math.abs(xDist) > options.drag.linkThreshold) {
      // disable links
      dragger.classList.add('links--none');
      dragger.classList.add('jumps--none');
    }
    // overflow
    if (options.drag.overflow) {
      let arr = self.targets.filter(x => !x.classList.contains('xt-wrap'));
      let first = arr[0];
      let last = arr[arr.length - 1];
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
    self.detail.xCurrent = self.detail.xCurrentReal - (self.detail.xPosReal - xPos); // xCurrent when overflowing
    self.detail.xPosOld = self.detail.xPos;
    self.detail.xPos = xPos;
    // drag position
    if (self.initial) {
      self.dragger.classList.add('transition-none');
    }
    if (options.drag.drag) {
      dragger.style.transform = 'translateX(' + self.detail.xPos + 'px)';
    }
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
    let draggerWidth = self.dragger.offsetWidth;
    let xDist = self.detail.xPosReal - xPosCurrent;
    if (Math.abs(xDist) > options.drag.threshold) {
      // get nearest
      let found = self.currentIndex;
      for (let [i, group] of self.groupMq.entries()) {
        for (let slideCheck of group) {
          let check;
          if (options.align === 'center') {
            check = self.detail.xPos - draggerWidth / 2 + slideCheck.offsetLeft;
          } else if (options.align === 'left') {
            check = self.detail.xPos + slideCheck.offsetLeft;
          } else if (options.align === 'right') {
            check = self.detail.xPos - draggerWidth + slideCheck.offsetLeft + slideCheck.offsetWidth;
          }
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
        // disable dragger
        dragger.classList.remove('pointer-events--none');
        for (let nav of self.navs) {
          nav.classList.remove('pointer-events--none');
        }
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
  "min": 1,
  "max": 1,
  "instant": true,
  "loop": true,
  "jump": true,
  "imageLoadedInit": true,
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
    "drag": true,
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

//////////////////////
// observe
//////////////////////

Xt.mount.push({
  matches: '[data-' + Slider.componentName + ']',
  fnc: function (main, index, query) {

    let self = new Slider(main, main.getAttribute('data-' + Slider.componentName));

    // destroy

    return function unmount() {
      self.destroy();
      self = null;
    };

  }
});
