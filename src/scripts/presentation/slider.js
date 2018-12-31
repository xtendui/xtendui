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
    super.initScope();
    let self = this;
    let options = self.options;
    if (options.drag) {
      self.dragger = self.object.querySelectorAll(options.drag)[0];
    }
  }

  /**
   * init events
   */
  initEvents() {
    super.initEvents();
    let self = this;
    let options = self.options;
    if (options.drag) {
      let dragger = self.dragger;
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
      // slide on
      for (let slide of self.targets) {
        let slideOnHandler = Xt.dataStorage.put(slide, 'slideOnHandler' + self.namespace,
          self.slideOn.bind(self).bind(self, dragger));
        slide.removeEventListener('on.xt', slideOnHandler);
        slide.addEventListener('on.xt', slideOnHandler);
      }
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
        self.autoStop();
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
    if (options.autoChange) {
      self.autoChange();
    } else if (options.auto) {
      self.autoStart();
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
  // logic
  //////////////////////

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
    let xCache = self.detail.xCache || 0;
    // inertia
    dragger.classList.remove('dragging');
    // activate or reset
    let xPos = Xt.getTranslate(dragger)[0];
    let xDist = xPos - xCache;
    if (Math.abs(xDist) > self.options.dragThreshold) {
      // get nearest
      let found = self.curentIndex;
      for (let [z, slideCheck] of dragger.querySelectorAll('.slide').entries()) {
        let check = xPos - dragger.offsetWidth / 2 + slideCheck.offsetLeft;
        if (slideCheck.offsetParent && check < 0) { // offsetParent for checking if :visible
          found = z;
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
    self.detail.xVelocity *= options.dragFriction;
    if (Math.abs(self.detail.xVelocity) > options.dragFrictionThreshold) {
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
    // drag
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
      self.detail.xVelocity += xVelocityOld * options.dragVelocityFriction; // keep some velocity
    }
    // listener dispatch
    dragger.dispatchEvent(new CustomEvent('drag.xt.slider', {detail: self.eDetail}));
  }

  /**
   * targets on logic
   * @param {Node|HTMLElement|EventTarget|Window} dragger
   * @param {Event} e
   */
  slideOn(dragger, e) {
    let self = this;
    let options = self.options;
    let slide = e.target;
    // aligment
    let pos;
    if (options.align === 'center') {
      pos = dragger.offsetWidth / 2 - slide.offsetLeft - slide.offsetWidth / 2;
    } else if (options.align === 'left') {
      pos = - slide.offsetLeft;
    } else if (options.align === 'right') {
      pos = - slide.offsetLeft + dragger.offsetWidth - slide.offsetWidth;
    }
    if (options.contain) {
      let min = 0;
      let max = - dragger.offsetWidth + slide.offsetWidth;
      pos = pos > min ? min : pos;
      pos = pos < max ? max : pos;
    }
    self.detail.xCache = self.detail.xPos = pos;
    // if inital
    if (e.detail.object.detail.initial) {
      // stop, don't execute custom on.xt events
      if (!options.initial) {
        e.stopImmediatePropagation();
      }
      // prevent alignment animation
      self.dragger.classList.add('anim-none');
      window.requestAnimationFrame(function () {
        self.dragger.classList.remove('anim-none');
      });
    }
  }

}

//////////////////////
// defaults
//////////////////////

Slider.componentName = 'slider';
Slider.defaults = {
  "elements": ".slide-control",
  "targets": ":scope > .slides > .slides_inner > .slide",
  "class": "active",
  "on": "click",
  "toggle": false,
  "min": 1,
  "max": 1,
  "instant": true,
  "initial": true,
  "contain": true,
  "align": "center",
  "drag": ":scope > .slides > .slides_inner",
  "dragThreshold": 100,
  "dragFriction": .75,
  "dragFrictionThreshold": 5,
  "dragVelocityFriction": .33,
  "aria": true
};

//////////////////////
// export
//////////////////////

export default Slider;