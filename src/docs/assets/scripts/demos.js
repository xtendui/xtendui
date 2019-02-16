//////////////////////
// import
//////////////////////

import Xt from '../../../scripts/xtend';

//////////////////////
// vars
//////////////////////

window.easeIn = new Ease(BezierEasing(.36, 0, 0, 1));
window.easeOut = new Ease(BezierEasing(1, 0, .64, 1));
window.easeInOut = new Ease(BezierEasing(.68, .13, .25, 1));

//////////////////////
// others
//////////////////////

// .demo-cols

for (let element of document.querySelectorAll('.demo-cols')) {
  for (let [i, el] of element.querySelectorAll('[class^=\'col--\'], [class*=\' col--\']').entries()) {
    el.setAttribute('data-index', i);
  }
}

// .demo-cols-nested

for (let element of document.querySelectorAll('.demo-cols-nested [class^=\'col--\'], .demo-cols-nested [class*=\' col--\']')) {
  for (let [i, el] of element.querySelectorAll('[class^=\'col--\'], [class*=\' col--\']').entries()) {
    el.setAttribute('data-index', i);
  }
}