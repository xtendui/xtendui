import {Xt} from 'xtend-library'

/**
 * #demo--toggle--restart
 */

Xt.mount.push({
  matches: '#demo--toggle--restart',
  fnc: function mount(object) {

    // vars

    let btn = object;

    // event

    btn.addEventListener('click', function (e) {
      // restart
      let toggles = document.querySelectorAll('[data-xt-toggle]');
      for (let toggle of toggles) {
        let self = Xt.get('xt-toggle', toggle);
        self.initStart();
      }
    });

  }
});
