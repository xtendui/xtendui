import {TweenMax} from "gsap/TweenMax";
import BezierEasing from "bezier-easing";

/**
 * .loader
 */

(function () {

  // vars

  let time = 2000;
  let easeLinear = Power0.easeNone;

  let loader = document.querySelector('.loader');

  // timeout

  function loaderTimeout() {
    let spinner = loader.querySelectorAll('.spinner svg:nth-child(1) circle');
    loader.dataset.loaderActive = loader.dataset.loaderActive === 'true' ? 'false' : 'true';
    if (loader.dataset.loaderActive === 'true') {
      loader.classList.add('active');
      loader.classList.remove('out');
      TweenMax.set(spinner, {strokeDashoffset: 628});
      TweenMax.to(spinner, time / 1000, {strokeDashoffset: 0, ease: easeLinear, autoRound: false});
      setTimeout(loaderTimeout, time);
    } else {
      loader.classList.remove('active');
      loader.classList.add('out');
      Xt.animTimeout(loader, loaderTimeout);
    }
  }

  loaderTimeout();

})();
