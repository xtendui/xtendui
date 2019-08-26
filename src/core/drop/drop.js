import {Xt} from 'xtend-library'
import 'xtend-library/src/core/controller/controller.js'

//////////////////////
// Drop
//////////////////////

class Drop extends Xt.Controller {

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
// export
//////////////////////

Xt.Drop = Drop;

//////////////////////
// observe
//////////////////////

Xt.mount.push({
  matches: '[data-' + Xt.Drop.componentName + ']',
  fnc: function mount(object) {

    let self = new Xt.Drop(object, object.getAttribute('data-' + Xt.Drop.componentName));

    // unmount

    return function unmount() {
      self.destroy();
      self = null;
    };

  }
});
