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
      // event on
      let dragstartHandler = Xt.dataStorage.put(dragger, 'dragstartHandler' + self.namespace,
        self.eventDragstartHandler.bind(self).bind(self, dragger));
      let events = ['mousedown', 'touchstart'];
      for (let event of events) {
        dragger.removeEventListener(event, dragstartHandler);
        dragger.addEventListener(event, dragstartHandler);
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
    // listener dispatch
    dragger.dispatchEvent(new CustomEvent('dragstart.xt.slider', {detail: self.eDetail}));
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
    // listener dispatch
    dragger.dispatchEvent(new CustomEvent('dragend.xt.slider', {detail: self.eDetail}));
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
    // listener dispatch
    dragger.dispatchEvent(new CustomEvent('drag.xt.slider', {detail: self.eDetail}));
  }

  //////////////////////
  // init
  //////////////////////

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
  "min": 1,
  "max": 1,
  "instant": {"elements": true},
  "drag": ":scope > .slides",
  "dragThreshold": 100,
  "aria": true
};

//////////////////////
// export
//////////////////////

export default Slider;