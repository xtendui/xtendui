import {Xt} from "xtend-library";

/**
 * xtend extension: jumptocontent
 */

Xt.observe.push({
  matches: '.jumptocontent',
  fnc: function (jumptocontent, index, query) {

    // toggle

    document.addEventListener('focusin', function (e) {
      let active = jumptocontent.contains(e.target);
      if (active) {
        jumptocontent.classList.remove('sr-only');
        jumptocontent.classList.add('active');
      } else {
        jumptocontent.classList.remove('active');
        Xt.animTimeout(jumptocontent, function () {
          jumptocontent.classList.add('sr-only');
        });
      }
    });

  }
});
