Xt.init.push({ // on DOM ready and on content added to DOM
  matches: '.slider',
  fnc: sliderInit
});

function sliderInit(main, index) {

  // slider

  let slider = new Xt.Slider(main, {
    "auto": 6000,
    "autoGroup": false
  });

  let dragger = slider.dragger;

  // drag event

  dragger.addEventListener('drag.xt.slider', function (e) {
    let self = e.detail.object;
    // drag
    dragger.style.transform = 'translateX(' + self.detail.xPos + 'px)';
  });

  // dragend event

  dragger.addEventListener('dragend.xt.slider', function (e) {
    let self = e.detail.object;
    // reset
    dragger.style.transform = 'translateX(' + self.detail.xPos + 'px)';
  });

  // slider items

  for (let slide of slider.targets) {

    // on event

    slide.addEventListener('on.xt', function (e) {
      let self = e.detail.object;
      // drag
      dragger.style.transform = 'translateX(' + self.detail.xPos + 'px)';
    });

  }

}