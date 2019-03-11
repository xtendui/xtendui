//////////////////////
// xtend extension: toggle-levels
//////////////////////

function initToggleLevels() {
  let btnReset = document.querySelectorAll('#toggle-levels-tab-reset')[0];
  let btns = document.querySelectorAll('.toggle-levels-reset');
  for (let [i, btn] of btns.entries()) {
    btn.addEventListener('click', function (e) {
      if (!e.detail || !e.detail.skipToggle) {
        btnReset.dispatchEvent(new CustomEvent('on', {detail: {skipToggle: true}}));
      }
    });
  }
}

initToggleLevels();