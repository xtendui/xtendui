//////////////////////
// xtend extension: multilevel
//////////////////////

Xt.observe.push({
  matches: '.multilevel',
  fnc: function (main, index, query) {

    let btnReset = main.querySelectorAll('#multilevel-tab-reset')[0];
    let btns = main.querySelectorAll('.multilevel-reset');
    for (let btn of btns) {
      btn.addEventListener('click', function (e) {
        if (!e.detail || !e.detail.skipToggle) {
          btnReset.dispatchEvent(new CustomEvent('on.xt', {detail: {skipToggle: true}}));
        }
      });
    }

  }
});


