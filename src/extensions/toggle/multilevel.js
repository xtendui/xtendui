/**
 * xtend extension: multilevel
 */

Xt.mount.push({
  matches: '.multilevel',
  fnc: function (main, index, query) {

    // vars

    let multilevel = main;

    // btnReset

    let btns = multilevel.querySelectorAll('.multilevel-reset');
    for (let btn of btns) {
      btn.addEventListener('click', function (e) {
        multilevel.querySelector('.multilevel-tab-reset').dispatchEvent(new CustomEvent('on.xt'));
      });
    }

  }
});
