
let btn = document.querySelectorAll('#toggle-restart')[0];

btn.addEventListener('click', function (e) {

  // restart
  let toggles = document.querySelectorAll('[data-xt-toggle]');
  for (let toggle of toggles) {
    let self = Xt.get('xt-toggle', toggle);
    self.initStart();
  }

});