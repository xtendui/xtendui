/* xtend (https://getxtend.com/)
@copyright (c) 2017 - 2018 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */

'use strict';

import Xt from '../xtend';
import Core from '../core';

//////////////////////
// Drop
//////////////////////

class Drop extends Core {

  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} jsOptions User options
   * @constructor
   */
  constructor(object, jsOptions = {}) {
    super(object, jsOptions);
  }

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
        let ariaEls = self.getInside(el, options.ariaControls);
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
// defaults
//////////////////////

Drop.componentName = 'drop';
Drop.defaults = {
  "targets": ":scope > .drop",
  "elementsInner": ":scope > button",
  "class": "active",
  "on": "click",
  "min": 0,
  "max": 1,
  "instant": {"elementsInner": true},
  "closeOutside": "body",
  "ariaControls": ":scope > button"
};

//////////////////////
// export
//////////////////////

export default Drop;