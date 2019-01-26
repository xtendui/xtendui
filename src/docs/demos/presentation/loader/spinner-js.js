Xt.observe.push({
  matches: '.loader',
  fnc: loaderInit
});

function loaderInit(main, index, query) {

  let loader = main;

  // vars

  let time = 2000;

  let easeIn = new Ease(BezierEasing(.36,0,0,1));
  let easeOut = new Ease(BezierEasing(1,0,.64,1));
  let easeInOut = new Ease(BezierEasing(.68,.13,.25,1));

  // loader

  function loaderTimeout() {
    let spinner = loader.querySelectorAll('.spinner svg:nth-child(2) circle');
    loader.dataset.loaderActive = loader.dataset.loaderActive === 'true' ? 'false' : 'true';
    if (loader.dataset.loaderActive === 'true') {
      loader.classList.add('active');
      loader.classList.remove('out');
      TweenMax.set(spinner, {strokeDashoffset: 628});
      TweenMax.to(spinner, time / 1000, {strokeDashoffset: 0, ease: easeInOut, autoRound:false});
      setTimeout(loaderTimeout, time);
    } else {
      loader.classList.remove('active');
      loader.classList.add('out');
      Xt.animTimeout(loader, loaderTimeout);
    }
  }
  loaderTimeout();

}