//////////////////////
// xtend extension: menumobile
//////////////////////

function initMenumobileReset() {
  let btnReset = document.querySelectorAll('#toggle-cat-tab-reset')[0];
  let btns = document.querySelectorAll('.toggle-cat-reset');
  for (let [i, btn] of btns.entries()) {
    btn.addEventListener('click', function (e) {
      if (!e.detail || !e.detail.skipToggle) {
        btnReset.dispatchEvent(new CustomEvent('on', {detail: {skipToggle: true}}));
      }
    });
  }
}

initMenumobileReset();