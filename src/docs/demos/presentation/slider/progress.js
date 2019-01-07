Xt.init.push({ // on DOM ready and on content added to DOM
  matches: '.slider',
  fnc: sliderInit
});

function sliderInit(main, index) {

  // slider

  let self = new Xt.Slider(main, {
    "auto": {
      "time": 2000,
      "pause": ".slide, .slider_pagination",
      "progress": ".progress"
    }
  });

  let slider = self.object;

  // progress event

  slider.addEventListener('auto.xt', function (e) {
    //console.log(self.detail.autoTime);
  });

}