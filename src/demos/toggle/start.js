/**
 * #demo--toggle--restart
 */

Xt.observe.push({
  matches: '#demo--toggle--restart',
  fnc: function (main, index, query) {

    // vars

    let btn = main;

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
