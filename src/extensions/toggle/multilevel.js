/**
 * xtend extension: multilevel
 */

Xt.mount.push({
  matches: '.multilevel',
  fnc: function mount(object) {

    // vars

    let multilevel = object;

    // btnReset

    let btns = multilevel.querySelectorAll('.multilevel-reset');
    for (let btn of btns) {
      btn.addEventListener('click', function (e) {
        multilevel.querySelector('.multilevel-tab-reset').dispatchEvent(new CustomEvent('on.xt'));
      });
    }

  }
});
