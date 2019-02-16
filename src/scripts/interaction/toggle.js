import Xt from '../xtend';
import Core from '../core';

//////////////////////
// Toggle
//////////////////////

class Toggle extends Core {

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
   * init aria
   */
  initAria() {
    super.initAria();
    let self = this;
    let options = self.options;
    // aria
    if (options.aria) {
      if (self.targets.length) {
        if (self.mode === 'multiple') {
          self.object.setAttribute('role', 'tablist');
          if (options.max > 1) {
            self.object.setAttribute('aria-multiselectable', 'true');
          }
          for (let el of self.elements) {
            let ariaEls = self.getInside(el, options.ariaControls);
            let ariaEl = ariaEls.length ? ariaEls[0] : el;
            ariaEl.setAttribute('role', 'tab');
          }
          for (let tr of self.targets) {
            tr.setAttribute('role', 'tabpanel');
          }
        }
      }
    }
  }

}

//////////////////////
// option
//////////////////////

Toggle.componentName = 'xt-toggle';
Toggle.optionsDefault = {
  "elements": ":scope > a, :scope > button",
  "targets": ":scope > [class^=\"toggle--\"], :scope > [class*=\" toggle--\"]",
  "class": "active",
  "on": "click",
  "min": 0,
  "max": 1,
  "instant": {"elements": true}
};

//////////////////////
// export
//////////////////////

export default Toggle;