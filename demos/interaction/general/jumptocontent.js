//////////////////////
// xtend extension: jumptocontent
//////////////////////

Xt.observe.push({
  matches: '.jumptocontent',
  fnc: function (main, index, query) {

    document.addEventListener('focusin', function(e) {
      let active = main.contains(e.target);
      if (active) {
        main.classList.remove('sr-only');
        main.classList.add('active');
      } else {
        main.classList.remove('active');
        Xt.animTimeout(main, function () {
          main.classList.add('sr-only');
        });
      }
    });

  }
});
