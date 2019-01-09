Xt.init.push({ // on DOM ready and on content added to DOM
  matches: '.loader',
  fnc: loaderInit
});

function loaderInit(main, index) {

  // vars

  let time = 2000;
  CustomEase.create('easeIn', '.41,.1,.175,1');
  CustomEase.create('easeOut', '.77,0,.175,1');
  CustomEase.create('easeInOut', '.77,.0,.17,1');

  // progress

  function progress() {
    let progress = main.querySelector('.progress > span:nth-child(2)');
    TweenMax.set(progress, {width: 0});
    TweenMax.to(progress, time / 1000, {width: '100%', ease: 'easeInOut'});
  }
  setInterval(progress, time);
  progress();

}