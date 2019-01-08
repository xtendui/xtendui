Xt.init.push({ // on DOM ready and on content added to DOM
  matches: '.slider',
  fnc: sliderInit
});

function sliderInit(main, index) {

  // slider

  let self = new Xt.Slider(main, {
    "auto": {
      "time": 2000,
      "pause": ".slide, [data-xt-pag]"
    }
  });

  let slider = self.object;

  // progress event
  slider.addEventListener('auto.xt.start', function (e) {
    // on slider
    let progress = slider.querySelector('.progress_slider .circle--progress');
    let tweens = TweenMax.getTweensOf(progress);
    if (tweens.length) {
      for (let tween of tweens) {
        let t = (e.detail.autoTime - tween.time() * 1000) / e.detail.autoTime;
        TweenMax.to(tween, .5, {timeScale: t});
      }
    } else {
      //TweenMax.set(progress, {strokeDashoffset: 1});
      //TweenMax.to(progress, e.detail.autoTime / 1000, {strokeDashoffset: 0});
      TweenMax.set(progress, {strokeDashoffset: '0.4%'});
      TweenMax.to(progress, e.detail.autoTime / 1000, {strokeDashoffset: '0%'});
    }
    // on elements
    let elements = self.elements.filter(x => x.classList.contains('active'));
    for (let element of elements) {
      let progresses = element.querySelectorAll('.progress');
      for (let progress of progresses) {
        let tweens = TweenMax.getTweensOf(progress);
        if (tweens.length) {
          for (let tween of tweens) {
            let t = (e.detail.autoTime - tween.time() * 1000) / e.detail.autoTime;
            TweenMax.to(tween, .5, {timeScale: t});
          }
        } else {
          TweenMax.set(progress, {width: 0, left: '0%'});
          TweenMax.to(progress, e.detail.autoTime / 1000, {width: '100%'});
        }
      }
    }
    // on targets
    let targets = self.targets.filter(x => x.classList.contains('active'));
    for (let target of targets) {
      let progresses = target.querySelectorAll('.progress');
      for (let progress of progresses) {
        let tweens = TweenMax.getTweensOf(progress);
        if (tweens.length) {
          for (let tween of tweens) {
            let t = (e.detail.autoTime - tween.time() * 1000) / e.detail.autoTime;
            TweenMax.to(tween, .5, {timeScale: t});
          }
        } else {
          TweenMax.set(progress, {width: 0, left: '0%'});
          TweenMax.to(progress, e.detail.autoTime / 1000, {width: '100%'});
        }
      }
    }
  });

  slider.addEventListener('auto.xt.stop', function (e) {
    // on slider
    let progress = slider.querySelector('.progress_slider .circle--progress');
    //TweenMax.set(progress, {strokeDashoffset: 1});
    TweenMax.set(progress, {strokeDashoffset: '0.4%'});
    // on elements
    let elements = self.elements.filter(x => x.classList.contains('active'));
    for (let element of elements) {
      let progresses = element.querySelectorAll('.progress');
      for (let progress of progresses) {
        TweenMax.set(progress, {width: '100%', left: '0%'});
        TweenMax.to(progress, 0.5, {width: 0, left: '100%'});
      }
    }
    // on targets
    let targets = self.targets.filter(x => x.classList.contains('active'));
    for (let target of targets) {
      let progresses = target.querySelectorAll('.progress');
      for (let progress of progresses) {
        TweenMax.set(progress, {width: '100%', left: '0%'});
        TweenMax.to(progress, 0.5, {width: 0, left: '100%'});
      }
    }
  });

  slider.addEventListener('auto.xt.pause', function (e) {
    // on slider
    let progress = slider.querySelector('.progress_slider .circle--progress');
    let tweens = TweenMax.getTweensOf(progress);
    for (let tween of tweens) {
      TweenMax.to(tween, .5, {timeScale: 0});
    }
    // on elements
    let elements = self.elements.filter(x => x.classList.contains('active'));
    for (let element of elements) {
      let progresses = element.querySelectorAll('.progress');
      for (let progress of progresses) {
        let tweens = TweenMax.getTweensOf(progress);
        for (let tween of tweens) {
          TweenMax.to(tween, .5, {timeScale: 0});
        }
      }
    }
    // on targets
    let targets = self.targets.filter(x => x.classList.contains('active'));
    for (let target of targets) {
      let progresses = target.querySelectorAll('.progress');
      for (let progress of progresses) {
        let tweens = TweenMax.getTweensOf(progress);
        for (let tween of tweens) {
          TweenMax.to(tween, .5, {timeScale: 0});
        }
      }
    }
  });

}