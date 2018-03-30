//////////////////////
// imports
//////////////////////

console.log('theme loaded');

// init

import Xt from '../../../scripts/xtend.js';

var toggles = document.querySelectorAll('[data-xt-toggle]');
Array.prototype.forEach.call(toggles, function (toggle, i) {
  var xtend = new Xt(toggle, {
    someCustomOption: 'Plugin was loaded vanilla style!'
  });
  xtend.doSomething();
});

// test utils

import XtUtil from '../../../scripts/xtend-utils.js';
console.log(XtUtil.getElementIndex(toggles));