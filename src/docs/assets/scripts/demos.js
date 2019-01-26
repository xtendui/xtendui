/* xtend (https://getxtend.com/)
@copyright (c) 2017 - 2018 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */

//////////////////////
// import
//////////////////////

//import '../../../../dist/scripts/xtend';
import Xt from '../../../scripts/xtend';

//////////////////////
// vars
//////////////////////

window.easeIn = new Ease(BezierEasing(.36,0,0,1));
window.easeOut = new Ease(BezierEasing(1,0,.64,1));
window.easeInOut = new Ease(BezierEasing(.68,.13,.25,1));

//////////////////////
// others
//////////////////////

// .demo-cols

for (let element of document.querySelectorAll('.demo-cols')) {
  for (let [i, el] of element.querySelectorAll('.col').entries()) {
    el.setAttribute('data-index', i);
  }
}

// .demo-cols-nested

for (let element of document.querySelectorAll('.demo-cols-nested .col')) {
  for (let [i, el] of element.querySelectorAll('.col').entries()) {
    el.setAttribute('data-index', i);
  }
}
