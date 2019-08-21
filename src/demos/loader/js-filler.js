import {TweenMax} from 'gsap/TweenMax'

/**
 * .demo--loader--js-filler
 */

Xt.mount.push({
  matches: '.demo--loader--js-filler',
  fnc: function mount(main, index, query) {

    // vars

    let time = 2000;
    let easeLinear = Power0.easeNone;

    let loader = main;

    // timeout

    function loaderTimeout() {
      let filler = loader.querySelectorAll('.filler span:nth-child(1)');
      loader.dataset.loaderActive = loader.dataset.loaderActive === 'true' ? 'false' : 'true';
      if (loader.dataset.loaderActive === 'true') {
        loader.classList.add('active');
        loader.classList.remove('out');
        TweenMax.set(filler, {width: 0});
        TweenMax.to(filler, time / 1000, {width: '100%', ease: easeLinear});
        setTimeout(loaderTimeout, time);
      } else {
        loader.classList.remove('active');
        loader.classList.add('out');
        Xt.animTimeout(loader, loaderTimeout);
      }
    }

    loaderTimeout();

  }
});
