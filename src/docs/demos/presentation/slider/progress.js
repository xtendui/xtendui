Xt.init.push({ // on DOM ready and on content added to DOM
  matches: '.slider',
  fnc: sliderInit
});

function sliderInit(main, index) {

  // slider

  let slider = new Xt.Slider(main, {
  });

  // progress event

  slider.addEventListener('auto.xt.progress', function (e) {
  });

}