//////////////////////
// xtend extension: jumptocontent
//////////////////////

Xt.observe.push({
  matches: '.jumptocontent',
  fnc: function (main, index, query) {

    document.addEventListener('keyup', function(e) {
      let code = e.keyCode ? e.keyCode : e.which;
      if (code === 9 || code === 32) {
        let active = Xt.parents(document.activeElement, '.jumptocontent').length;
        if (active) {
          main.classList.remove('sr-only');
          main.classList.add('active');
          document.activeElement.blur();
        } else {
          main.classList.remove('active');
          Xt.animTimeout(main, function () {
            main.classList.add('sr-only');
          });
        }
      }
    });

  }
});
