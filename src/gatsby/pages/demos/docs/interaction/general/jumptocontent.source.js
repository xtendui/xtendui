import {Xt} from "xtend-library";

/**
 * xtend extension: jumptocontent
 */

(function () {

  // vars

  let jumptocontent = document.querySelector('.jumptocontent');

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

})();
