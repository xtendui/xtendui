/**
 * xtend extension: multilevel
 */

(function () {

  // vars

  let multilevels = document.querySelectorAll('.multilevel');

  for (let multilevel of multilevels) {

    // btnReset

    let btns = multilevel.querySelectorAll('.multilevel-reset');
    for (let btn of btns) {
      btn.addEventListener('click', function (e) {
        multilevel.querySelector('#multilevel-tab-reset').dispatchEvent(new CustomEvent('on.xt'));
      });
    }

  }

})();
