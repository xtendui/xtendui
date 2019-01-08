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

  // auto start

  slider.addEventListener('auto.xt.start', function (e) {
    // on slider
    let progress = slider.querySelector('.progress_slider circle:nth-child(2)');
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
          TweenMax.set(progress, {width: 0, left: 0});
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
          TweenMax.set(progress, {width: 0, left: 0});
          TweenMax.to(progress, e.detail.autoTime / 1000, {width: '100%'});
        }
      }
    }
  });

  // auto stop

  slider.addEventListener('auto.xt.stop', function (e) {
    // on slider
    let progress = slider.querySelector('.progress_slider circle:nth-child(2)');
    //TweenMax.set(progress, {strokeDashoffset: 1});
    TweenMax.set(progress, {strokeDashoffset: '0.4%'});
    // on elements
    let elements = self.elements.filter(x => x.classList.contains('active'));
    for (let element of elements) {
      let progresses = element.querySelectorAll('.progress');
      for (let progress of progresses) {
        TweenMax.set(progress, {width: '100%', left: 0});
        TweenMax.to(progress, 0.5, {width: 0, left: '100%'});
      }
    }
    // on targets
    let targets = self.targets.filter(x => x.classList.contains('active'));
    for (let target of targets) {
      let progresses = target.querySelectorAll('.progress');
      for (let progress of progresses) {
        TweenMax.set(progress, {width: '100%', left: 0});
        TweenMax.to(progress, 0.5, {width: 0, left: '100%'});
      }
    }
  });

  // auto pause

  slider.addEventListener('auto.xt.pause', function (e) {
    // on slider
    let progress = slider.querySelector('.progress_slider circle:nth-child(2)');
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

  // follow mouse

  let progress = slider.querySelector('.progress_slider');
  let time = .8;
  CustomEase.create('easeIn', '.41,.1,.175,1');
  CustomEase.create('easeOut', '.77,0,.175,1');
  CustomEase.create('easeInOut', '.77,.0,.17,1');

  function mousemove(e) {
    // vars
    let rect = progress.getBoundingClientRect();
    let top = e.clientY + rect.height / 2 - 20; // 20 for exaclty center
    let left = e.clientX - rect.width / 2 - 20; // 20 for exaclty center
    // tween
    let tweens = TweenMax.getTweensOf(progress);
    if (tweens.length) {
      for (let tween of tweens) {
        let time = tween.time();
        let css = tween.vars.css;
        if (css) {
          css.top = top;
          css.left = left;
          tween.seek(0).invalidate().seek(time);
        }
      }
    } else {
      progress.style.top = top + 'px';
      progress.style.left = left + 'px';
    }
  }

  function mouseenter(e) {
    progress.classList.add('active');
    // vars
    let rect = progress.getBoundingClientRect();
    let top = e.clientY + rect.height / 2 - 20; // 20 for exaclty center
    let left = e.clientX - rect.width / 2 - 20; // 20 for exaclty center
    // tween
    let tweens = TweenMax.getTweensOf(progress);
    if (tweens.length) {
      for (let tween of tweens) {
        tween.kill();
      }
    }
    TweenMax.to(progress, time, {top: top, left: left, ease: 'easeInOut'});
  }

  function mouseleave(e) {
    progress.classList.remove('active');
    // vars
    let top = '100%';
    let left = 0;
    // tween
    let tweens = TweenMax.getTweensOf(progress);
    if (tweens.length) {
      for (let tween of tweens) {
        tween.kill();
      }
    }
    TweenMax.to(progress, time, {top: top, left: left, ease: 'easeInOut'});
  }

  slider.removeEventListener('mousemove', mousemove);
  slider.addEventListener('mousemove', mousemove);
  slider.removeEventListener('mouseenter', mouseenter);
  slider.addEventListener('mouseenter', mouseenter);
  slider.removeEventListener('mouseleave', mouseleave);
  slider.addEventListener('mouseleave', mouseleave);

}