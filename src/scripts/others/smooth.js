//////////////////////
// import
//////////////////////

import Xt from '../xtend';
import Core from '../core';

//////////////////////
// smooth
//////////////////////

class Smooth extends Core {

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
   * init
   */
  init(object = false, optionsJs = false) {
    let self = this;
    // destroy if already done
    if (self.object.getAttribute('data-' + self.componentName + '-inited')) {
      self.destroy(true);
    }
    // var
    self.detail = {};
    self.destroyElements = [self.object];
    // setup
    self.object.setAttribute('data-' + self.componentName + '-inited', 'true');
    // init
    self.initVars();
    self.initSetup();
    self.initEvents();
  }

  /**
   * init vars
   */
  initSetup() {
    super.initSetup();
    let self = this;
    // scrollElement
    self.detail.wheelScrollElement = self.options.scrollElement;
    self.object = self.object ? self.object : document.documentElement; // document.scrollingElement
  }

  /**
   * init events
   */
  initEvents() {
    let self = this;
    // save scroll position for eventWheelSmooth
    self.detail.wheels = Xt.arrSingle(self.object);
    self.destroyElements.push(...self.detail.wheels);
    for (let wheel of self.detail.wheels) {
      // wheel
      self.destroyElements.push(self.detail.wheelScrollElement);
      let eWheel = 'onwheel' in wheel ? 'wheel' : wheel.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll';
      let wheelHandler = Xt.dataStorage.put(self.detail.wheelScrollElement, eWheel + '.' + self.namespace,
        self.eventWheelHandler.bind(self).bind(self, self.detail.wheelScrollElement));
      self.detail.wheelScrollElement.addEventListener(eWheel, wheelHandler);
    }
  }

  /**
   * wheel handler
   * @param {Node|HTMLElement|EventTarget|Window} el
   * @param {Event} e
   */
  eventWheelHandler(el, e) {
    let self = this;
    Xt.eventWheelSmooth(self, el, e);
  }

}

//////////////////////
// option
//////////////////////

Smooth.componentName = 'xt-smooth';
Smooth.optionsDefault = {
  "scrollElement": window,
  "wheel": {
    "horizontal": false,
    "transform": false,
    "limit": .5,
    "friction": "return delta / 9"
  }
};

//////////////////////
// export
//////////////////////

export default Smooth;