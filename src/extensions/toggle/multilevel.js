import {Xt} from 'xtend-library'

/**
 * xtend extension: multilevel
 */

Xt.mount.push({
  matches: '.multilevel',
  fnc: function mount(object) {

    let self = new Xt.Toggle(object, {
      "elements": ".multilevel-tab-reset, .multilevel-tab .multilevel-list button", "targets": ".multilevel-tab", "min": 1
    });

    // btnReset

    let btns = object.querySelectorAll('.multilevel-reset');
    for (let btn of btns) {
      btn.addEventListener('click', function (e) {
        object.querySelector('.multilevel-tab-reset').dispatchEvent(new CustomEvent('on.xt'));
      });
    }

    // unmount

    return function unmount() {
      self.destroy();
    };

  }
});
