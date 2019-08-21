//////////////////////
// import
//////////////////////

import {Xt} from 'xtend-library'
import {Core} from 'xtend-library/src/components/core/core'

//////////////////////
// Drop
//////////////////////

export class Drop extends Core {

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
      for (let el of self.elements) {
        let ariaEls = Xt.queryAll(el, options.ariaControls);
        let ariaEl = ariaEls.length ? ariaEls[0] : el;
        ariaEl.setAttribute('aria-haspopup', 'listbox');
      }
      for (let tr of self.targets) {
        tr.setAttribute('role', 'listbox');
      }
    }
  }

}

//////////////////////
// option
//////////////////////

Drop.componentName = 'xt-drop';
Drop.optionsDefault = {
  "targets": ":scope > .drop",
  "elementsInner": ":scope > a, :scope > button",
  "on": "click",
  "min": 0,
  "max": 1,
  "instant": {"elementsInner": true},
  "autoClose": true,
  "closeOutside": "body",
  "ariaControls": ":scope > a, :scope > button"
};

//////////////////////
// observe
//////////////////////

Xt.mount.push({
  matches: '[data-' + Drop.componentName + ']',
  fnc: function mount(main, index, query) {

    let self = new Drop(main, main.getAttribute('data-' + Drop.componentName));

    // destroy

    return function unmount() {
      self.destroy();
      self = null;
    };

  }
});
