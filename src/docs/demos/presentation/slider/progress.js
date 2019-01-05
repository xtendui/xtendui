Xt.init.push({ // on DOM ready and on content added to DOM
  matches: '.slider',
  fnc: sliderInit
});

function sliderInit(main, index) {

  // slider

  let self = new Xt.Slider(main, {
    "auto": 2000,
    "autoChange": Infinity,
    "autoPause": ".slide, :scope > .slider_pagination"
  });

  let slider = self.object;

  // progress event

  slider.addEventListener('auto.xt', function (e) {
    console.log(self.detail.autoTime);
  });

}