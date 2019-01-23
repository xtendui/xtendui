//////////////////////
// xtend extension: multilevel
//////////////////////

Xt.init.push({ // on DOM ready and on content added to DOM
  matches: '.multilevel',
  fnc: multilevelInit
});

function multilevelInit(main, index, query) {
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
