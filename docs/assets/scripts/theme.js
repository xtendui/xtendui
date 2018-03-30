//////////////////////
// imports
//////////////////////

// init

import Xt from '../../../scripts/xtend.js';

var toggles = document.querySelectorAll('[data-xt-toggle]');
Array.prototype.forEach.call(toggles, function (toggle, i) {
  var xtend = new Xt(toggle);
  //xtend.doSomething();
});

// test utils

import XtUtil from '../../../scripts/xtend-utils.js';
//console.log(XtUtil.getElementIndex(toggles));