/* xtend (https://getxtend.com/)
@copyright (c) 2017 - 2018 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */

'use strict';

import Xt from '../xtend';
import Core from '../core';

//////////////////////
// Slider
//////////////////////

class Slider extends Core {

  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} jsOptions User options
   * @constructor
   */
  constructor(object, jsOptions = {}) {
    super(object, jsOptions);
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
    self.dragger = self.object.querySelectorAll(options.dragger)[0];
    // autoHeight
    if (options.autoHeight) {
      self.autoHeight = self.object.querySelectorAll(options.autoHeight)[0];
    }
    // automatic group
    if (options.autoGroup) {
      // width
      let draggerWidth = self.dragger ? self.dragger.offsetWidth : self.object.offsetWidth;
      if (options.autoGroup.available) {
        draggerWidth *= options.autoGroup.available;
      }
      // generate groups
      self.autoGroup = [];
      self.autoGroup.push([]);
      let currentCount = draggerWidth;
      for (let [i, target] of self.targets.entries()) {
        // calculate
        let targetWidth = target.offsetWidth;
        if (targetWidth === 0) { // when display none
          let container = target.parentNode;
          let clone = target.cloneNode(true);
          clone.classList.add('xt-calculating-block');
          container.append(clone);
          targetWidth = clone.offsetWidth;
          container.removeChild(clone);
        }
        currentCount -= targetWidth;
        // overflow
        let currentGroup = self.autoGroup.length - 1;
        if (currentCount < 0 && self.autoGroup[currentGroup].length) {
          self.autoGroup.push([]);
          currentGroup = self.autoGroup.length - 1;
          currentCount = draggerWidth;
          currentCount -= targetWidth;
        }
        // assign group
        self.autoGroup[currentGroup].push(target);
        target.setAttribute('data-xt-group', self.namespace + '-' + currentGroup);
      }
    }
    // generate elements
    if (options.pagination) {
      let pags = self.object.querySelectorAll(options.pagination);
      if (pags.length) {
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
          let currentPags = self.pags[self.pags.length - 1];
          let clone = pag.querySelectorAll('.slider_pagination_item')[0];
          let container = clone.parentNode;
          // @TODO REFACTOR
          if (options.autoGroup) {
            for (let [i, group] of self.autoGroup.entries()) {
              currentPags[i] = clone.cloneNode(true);
              let item = currentPags[i];
              let html = item.innerHTML.replace(new RegExp('{{num}}', 'ig'), i.toString());
              item.innerHTML = html;
              item.classList.remove('slider_pagination_item');
              item.setAttribute('data-xt-group', self.namespace + '-' + i);
              container.append(item);
            }
          } else {
            for (let [i, target] of self.targets.entries()) {
              currentPags[i] = clone.cloneNode(true);
              let item = currentPags[i];
              let html = item.innerHTML.replace(new RegExp('{{num}}', 'ig'), i.toString());
              item.innerHTML = html;
              item.classList.remove('slider_pagination_item');
              container.append(item);
            }
          }
        }
      }
    }
    // elements
    self.initScopeElements();
  }

  /**
   * init events
   */
  initEvents() {
    super.initEvents();
    let self = this;
    let options = self.options;
    let dragger = self.dragger;
    // resize
    let sliderResizeHandler = Xt.dataStorage.put(window, 'sliderResizeHandler' + self.namespace,
      self.eventSliderResizeHandler.bind(self));
    window.removeEventListener('resize', sliderResizeHandler);
    window.addEventListener('resize', sliderResizeHandler);
    // slide on
    for (let slide of self.targets) {
      let slideOnHandler = Xt.dataStorage.put(slide, 'slideOnHandler' + self.namespace,
        self.eventSlideOnHandler.bind(self).bind(self, dragger));
      slide.removeEventListener('on.xt', slideOnHandler);
      slide.addEventListener('on.xt', slideOnHandler);
    }
    // slide off
    for (let slide of self.targets) {
      let slideOffHandler = Xt.dataStorage.put(slide, 'slideOffHandler' + self.namespace,
        self.eventSlideOffHandler.bind(self).bind(self, dragger));
      slide.removeEventListener('on.xt', slideOffHandler);
      slide.addEventListener('on.xt', slideOffHandler);
    }
    // dragger
    if (options.drag) {
      // grab
      dragger.classList.add('grab');
      // drag on
      let dragstartHandler = Xt.dataStorage.put(dragger, 'dragstartHandler' + self.namespace,
        self.eventDragstartHandler.bind(self).bind(self, dragger));
      let events = ['mousedown', 'touchstart'];
      for (let event of events) {
        dragger.removeEventListener(event, dragstartHandler);
        dragger.addEventListener(event, dragstartHandler);
      }
    }
  }

  //////////////////////
  // handler
  //////////////////////

  /**
   * slider resize handler
   * @param {Event} e
   */
  eventSliderResizeHandler(e) {
    let self = this;
    // handler
    if (!e.detail || !e.detail.skip) {
      Xt.eventDelay(e, self.object, function() {
        self.init();
      });
    }
  }

  /**
   * slide on handler
   * @param {Node|HTMLElement|EventTarget|Window} dragger
   * @param {Event} e
   */
  eventSlideOnHandler(dragger, e) {
    let self = this;
    // handler
    self.eventSlideOn(dragger, e);
  }

  /**
   * slide off handler
   * @param {Node|HTMLElement|EventTarget|Window} dragger
   * @param {Event} e
   */
  eventSlideOffHandler(dragger, e) {
    let self = this;
    // handler
    self.eventSlideOff(dragger, e);
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
      if (self.detail.initial || !self.checkAnim(Xt.arrSingle(dragger))) {
        // save event
        self.detail.eInit = e;
        // logic
        let eventLimit = self.container.querySelectorAll('.event-limit');
        if (eventLimit.length) {
          if (!Xt.checkNested(e.target, eventLimit)) {
            self.eventDragstart(dragger, e);
          }
        } else {
          self.eventDragstart(dragger, e);
        }
        // auto
        self.eventAutoStop();
        // event off
        let dragendHandler = Xt.dataStorage.put(dragger, 'dragendHandler' + self.namespace,
          self.eventDragendHandler.bind(self).bind(self, dragger));
        let events = ['mouseup', 'touchend'];
        for (let event of events) {
          window.removeEventListener(event, dragendHandler);
          window.addEventListener(event, dragendHandler);
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
    let options = self.options;
    // logic
    let eventLimit = self.container.querySelectorAll('.event-limit');
    if (eventLimit.length) {
      if (!Xt.checkNested(e.target, eventLimit)) {
        self.eventDragend(dragger, e);
      }
    } else {
      self.eventDragend(dragger, e);
    }
    // auto
    if (options.eventAutoChange) {
      self.eventAutoChange();
    } else if (options.auto) {
      self.eventAutoStart();
    }
    // event off
    let dragendHandler = Xt.dataStorage.get(dragger, 'dragendHandler' + self.namespace);
    let events = ['mouseup', 'touchend'];
    for (let event of events) {
      window.removeEventListener(event, dragendHandler);
    }
  }

  /**
   * element drag on
   * @param {Node|HTMLElement|EventTarget|Window} dragger
   * @param {Event} e
   */
  eventDragstart(dragger, e) {
    let self = this;
    // save event
    self.detail.eCurrent = e;
    // eDetail
    self.eDetailSet(e);
    // event move
    let dragHandler = Xt.dataStorage.put(dragger, 'dragHandler' + self.namespace,
      self.eventDragHandler.bind(self).bind(self, dragger));
    let events = ['mousemove', 'touchmove'];
    for (let event of events) {
      dragger.removeEventListener(event, dragHandler);
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
    // save event
    self.detail.eCurrent = e;
    // eDetail
    self.eDetailSet(e);
    // event move
    let dragHandler = Xt.dataStorage.get(dragger, 'dragHandler' + self.namespace);
    let events = ['mousemove', 'touchmove'];
    for (let event of events) {
      dragger.removeEventListener(event, dragHandler);
    }
    // logic
    self.logicDragfriction(dragger, e);
  }

  /**
   * element drag handler
   * @param {Node|HTMLElement|EventTarget|Window} dragger
   * @param {Event} e
   */
  eventDragHandler(dragger, e) {
    let self = this;
    // save event
    self.detail.eCurrent = e;
    // eDetail
    self.eDetailSet(e);
    // logic
    self.logicDrag(dragger, e);
  }

  //////////////////////
  // event
  //////////////////////

  /**
   * slide off
   * @param {Node|HTMLElement|EventTarget|Window} dragger
   * @param {Event} e
   */
  eventSlideOff(dragger, e) {
    let slide = e.target;
    // group
    let group = slide.getAttribute('data-xt-group');
    if (group) {
      // only one call per group
      slide.dataset.xtSlideOnDone = 'false';
    }
  }

  /**
   * slide on
   * @param {Node|HTMLElement|EventTarget|Window} dragger
   * @param {Event} e
   */
  eventSlideOn(dragger, e) {
    let self = this;
    let options = self.options;
    // if inital
    if (e.detail.object.detail.initial) {
      // stop, don't execute custom on.xt events
      if (!options.initial) {
        e.stopImmediatePropagation();
        return false;
      }
      // prevent alignment animation
      self.dragger.classList.add('anim-none');
      window.requestAnimationFrame(function () {
        self.dragger.classList.remove('anim-none');
      });
    }
    // var
    let slide = e.target;
    let slideLeft = slide.offsetLeft;
    let slideWidth = slide.offsetWidth;
    let slideHeight = slide.offsetHeight;
    // group
    let group = slide.getAttribute('data-xt-group');
    if (group) {
      // only one call per group
      if (slide.dataset.xtSlideOnDone === 'true') {
        return false;
      }
      // vars
      let targets = self.getTargets(slide);
      slideLeft = Infinity;
      slideWidth = 0;
      slideHeight = 0;
      for (let slide of targets) {
        slideLeft = slide.offsetLeft < slideLeft ? slide.offsetLeft : slideLeft;
        slideWidth += slide.offsetWidth;
        let h = slide.offsetHeight;
        slideHeight = h > slideHeight ? h : slideHeight;
        // only one call per group
        slide.dataset.xtSlideOnDone = 'true';
      }
    }
    // autoHeight
    if (self.autoHeight) {
      self.autoHeight.style.height = slideHeight + 'px';
    }
    // aligment
    let pos;
    if (options.align === 'center') {
      pos = dragger.offsetWidth / 2 - slideLeft - slideWidth / 2;
    } else if (options.align === 'left') {
      pos = - slideLeft;
      pos = pos > 0 ? 0 : pos; // @FIX initial value sometimes is wrong
    } else if (options.align === 'right') {
      pos = - slideLeft + dragger.offsetWidth - slideWidth;
    }
    if (options.contain) {
      let min = 0;
      let slideLast = self.targets[self.targets.length - 1];
      let slideLastLeft = slideLast.offsetLeft;
      let slideLastWidth = slideLast.offsetWidth;
      let max = - slideLastLeft + dragger.offsetWidth - slideLastWidth;
      pos = pos > min ? min : pos;
      pos = pos < max ? max : pos;
    }
    // val
    self.detail.xCache = self.detail.xPos = pos;
    // drag position
    dragger.style.transform = 'translateX(' + self.detail.xPos + 'px)';
  }

  /**
   * element drag on logic
   * @param {Node|HTMLElement|EventTarget|Window} dragger
   * @param {Event} e
   */
  logicDragstart(dragger, e) {
    // inertia
    dragger.classList.add('dragging');
    // listener dispatch
    dragger.dispatchEvent(new CustomEvent('dragstart.xt.slider', {detail: self.eDetail}));
  }

  /**
   * element drag off logic
   * @param {Node|HTMLElement|EventTarget|Window} dragger
   * @param {Event} e
   */
  logicDragend(dragger, e) {
    let self = this;
    let options = self.options;
    let xCache = self.detail.xCache || 0;
    // inertia
    dragger.classList.remove('dragging');
    // activate or reset
    let xPos = Xt.getTranslate(dragger)[0];
    let xDist = xPos - xCache;
    if (Math.abs(xDist) > options.drag.threshold) {
      // get nearest
      let found = self.curentIndex;

      // @TODO REFACTOR
      if (options.autoGroup) {
        self.autoGroup = [];
        for (let [i, group] of self.autoGroup.entries()) {
          for (let [z, slideCheck] of group.entries()) {
            let check = xPos - dragger.offsetWidth / 2 + slideCheck.offsetLeft;
            if (slideCheck.offsetParent && check < 0) { // offsetParent for checking if :visible
              found = i;
            }
          }
        }
      } else {
        for (let [z, slideCheck] of self.targets.entries()) {
          let check = xPos - dragger.offsetWidth / 2 + slideCheck.offsetLeft;
          if (slideCheck.offsetParent && check < 0) { // offsetParent for checking if :visible
            found = z;
          }
        }
      }

      if (found === self.curentIndex) {
        // change at least one
        if (Math.sign(xDist) < 0) {
          self.goToNext(true);
        } else {
          self.goToPrev(true);
        }
      } else {
        // goToIndex
        self.goToIndex(found, true);
      }
    } else {
      self.detail.xPos = self.detail.xCache;
      // drag position
      dragger.style.transform = 'translateX(' + self.detail.xPos + 'px)';
      // listener dispatch
      dragger.dispatchEvent(new CustomEvent('dragend.xt.slider', {detail: self.eDetail}));
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
    self.detail.xVelocity *= options.drag.friction;
    if (Math.abs(self.detail.xVelocity) > options.drag.frictionThreshold) {
      self.logicDrag(dragger, e, true);
      window.requestAnimationFrame(self.logicDragfriction.bind(self).bind(e, dragger));
    } else {
      self.logicDragend(dragger, e);
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
    let xCache = self.detail.xCache || 0;
    // calculate
    if (friction) {
      // on friction
      self.detail.xPos = self.detail.xPos + self.detail.xVelocity;
      self.detail.xStart = self.detail.eInit.clientX;
      self.detail.xCurrent = self.detail.xPos + self.detail.xStart - xCache;
    } else {
      // on normal drag
      let xPosOld = self.detail.xPos;
      let xVelocityOld = self.detail.xVelocity || 0;
      self.detail.xStart = self.detail.eInit.clientX;
      self.detail.xCurrent = self.detail.eCurrent.clientX;
      self.detail.xPos = xCache + self.detail.xCurrent - self.detail.xStart;
      self.detail.xVelocity = self.detail.xPos - xPosOld;
      self.detail.xVelocity += xVelocityOld * options.drag.velocityFriction; // keep some velocity
    }
    // drag position
    dragger.style.transform = 'translateX(' + self.detail.xPos + 'px)';
    // listener dispatch
    dragger.dispatchEvent(new CustomEvent('drag.xt.slider', {detail: self.eDetail}));
  }

}

//////////////////////
// defaults
//////////////////////

Slider.componentName = 'slider';
Slider.defaults = {
  "elements": ":scope > .slider_pagination button:not(.slider_pagination_item)",
  "targets": ".slide",
  "class": "active",
  "on": "click",
  "toggle": false,
  "min": 1,
  "max": 1,
  "instant": true,
  "initial": true,
  "loop": true,
  "autoGroup": true,
  "contain": false,
  "align": "center",
  "dragger": ".slides_inner",
  "autoHeight": ".slides",
  "pagination": ".slider_pagination",
  "drag": {
    "threshold": 100,
    "friction": .75,
    "frictionThreshold": 5,
    "velocityFriction": .33,
  },
  "aria": true
};

//////////////////////
// export
//////////////////////

export default Slider;