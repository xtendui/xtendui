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

}

//////////////////////
// option
//////////////////////

Smooth.componentName = 'xt-smooth';
Smooth.optionsDefault = {
  "wheel": {
    "selector": "scrollingElement",
    "limit": true,
    "transform": false,
    "horizontal": false,
    "factor": 1,
    "friction": "return delta / 9",
    "frictionLimit": 0.5
  }
};

//////////////////////
// export
//////////////////////

export default Smooth;