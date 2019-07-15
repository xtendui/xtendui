/**
 * xtend extension: multilevel
 */

(function () {

  // vars

  let multilevels = document.querySelectorAll('.multilevel');

  for (let multilevel of multilevels) {

    // btnReset

    let btnReset = multilevel.querySelector('.multilevel-tab-reset');
    let btns = multilevel.querySelectorAll('.multilevel-reset');
    for (let btn of btns) {
      btn.addEventListener('click', function (e) {
        if (!e || !e.detail || !e.detail.skipToggle) {
          btnReset.dispatchEvent(new CustomEvent('on.xt', {detail: {skipToggle: true}}));
        }
      });
    }

  }

})();
