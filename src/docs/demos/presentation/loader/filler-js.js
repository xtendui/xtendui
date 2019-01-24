Xt.observe.push({
  matches: '.loader',
  fnc: loaderInit
});

function loaderInit(main, index, query) {

  let loader = main;

  // vars

  let time = 2000;
  CustomEase.create('easeIn', '.36,0,0,1');
  CustomEase.create('easeOut', '1,0,.64,1');
  CustomEase.create('easeInOut', '.68,.13,.25,1');

  // loader

  function loaderTimeout() {
    let filler = loader.querySelectorAll('.filler span:nth-child(2)');
    loader.dataset.loaderActive = loader.dataset.loaderActive === 'true' ? 'false' : 'true';
    if (loader.dataset.loaderActive === 'true') {
      loader.classList.add('active');
      loader.classList.remove('out');
      TweenMax.set(filler, {width: 0});
      TweenMax.to(filler, time / 1000, {width: '100%', ease: 'easeInOut'});
      setTimeout(loaderTimeout, time);
    } else {
      loader.classList.remove('active');
      loader.classList.add('out');
      Xt.animTimeout(loader, loaderTimeout);
    }
  }
  loaderTimeout();

}