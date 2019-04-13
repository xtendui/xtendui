/**
 * #toggle-restart
 */

(function () {

  // vars

  let btn = document.querySelector('#toggle-restart');

  // event

  btn.addEventListener('click', function (e) {
    // restart
    let toggles = document.querySelectorAll('[data-xt-toggle]');
    for (let toggle of toggles) {
      let self = Xt.get('xt-toggle', toggle);
      self.initStart();
    }
  });

})();
