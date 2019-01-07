Xt.init.push({ // on DOM ready and on content added to DOM
  matches: '.slider',
  fnc: sliderInit
});

function sliderInit(main, index) {

  // slider

  let self = new Xt.Slider(main, {
    "auto": {
      "time": 2000,
      "pause": ".slide, .slider_pagination"
    }
  });

  let slider = self.object;

  // progress event

  slider.addEventListener('auto.xt.start', function (e) {
    console.log('start');
    // on slider
    // on elements
    let elements = self.elements.filter(x => x.classList.contains('active'));
    for (let element of elements) {
      let progresses = element.querySelectorAll('.progress');
      for (let progress of progresses) {
        TweenMax.set(progress, {x: 0});
        TweenMax.to(progress, e.detail.autoTime / 1000, {width: '100%'});
      }
    }
    // on targets
    let targets = self.targets.filter(x => x.classList.contains('active'));
    for (let target of targets) {
      let progresses = target.querySelectorAll('.progress');
      for (let progress of progresses) {
        TweenMax.set(progress, {x: 0});
        TweenMax.to(progress, e.detail.autoTime / 1000, {width: '100%'});
      }
    }
  });

  slider.addEventListener('auto.xt.end', function (e) {
    console.log('end');
    // on slider
    // on elements
    let elements = self.elements.filter(x => x.classList.contains('active'));
    for (let element of elements) {
      let progresses = element.querySelectorAll('.progress');
      for (let progress of progresses) {
        TweenMax.to(progress, e.detail.autoTime / 1000, {width: 0, x: '100%'});
      }
    }
    // on targets
    let targets = self.targets.filter(x => x.classList.contains('active'));
    for (let target of targets) {
      let progresses = target.querySelectorAll('.progress');
      for (let progress of progresses) {
        TweenMax.to(progress, e.detail.autoTime / 1000, {width: 0, x: '100%'});
      }
    }
  });

}