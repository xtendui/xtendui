//////////////////////
// xtend extension: multilevel
//////////////////////

function initToggleLevels() {
  let btnReset = document.querySelectorAll('#multilevel-tab-reset')[0];
  let btns = document.querySelectorAll('.multilevel-reset');
  for (let [i, btn] of btns.entries()) {
    btn.addEventListener('click', function (e) {
      if (!e.detail || !e.detail.skipToggle) {
        btnReset.dispatchEvent(new CustomEvent('on.xt', {detail: {skipToggle: true}}));
      }
    });
  }
}

initToggleLevels();