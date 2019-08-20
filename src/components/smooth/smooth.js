//////////////////////
// import
//////////////////////

import {Xt} from 'xtend-library'
import {Core} from 'xtend-library/src/components/core/core'

//////////////////////
// smooth
//////////////////////

export class Smooth extends Core {

  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} optionsJs User options
   * @constructor
   */
  constructor(object, optionsJs = {}) {
    super(object, optionsJs);
  }

}

//////////////////////
// option
//////////////////////

Smooth.componentName = 'xt-smooth';
Smooth.optionsDefault = {
  "class": "",
  "wheel": {
    "selector": "scrollingElement",
    "block": false,
    "limit": true,
    "transform": false,
    "horizontal": false,
    "factor": 1,
    "friction": "return delta / 9",
    "frictionLimit": 1.5
  }
};

//////////////////////
// observe
//////////////////////

Xt.mount.push({
  matches: '[data-' + Smooth.componentName + ']',
  fnc: function (main, index, query) {

    let self = new Smooth(main, main.getAttribute('data-' + Smooth.componentName));

    // destroy

    return function unmount() {
      self.destroy();
      self = null;
    };

  }
});
