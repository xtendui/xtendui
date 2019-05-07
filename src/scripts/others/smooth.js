//////////////////////
// import
//////////////////////

import {Xt} from '../xtend';
import {Core} from '../core';

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
