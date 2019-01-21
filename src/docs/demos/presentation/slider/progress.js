Xt.init.push({ // on DOM ready and on content added to DOM
  matches: '.slider',
  fnc: sliderInit
});

function sliderInit(main, index) {

  // slider

  let self = new Xt.Slider(main, {
    "auto": {
      "time": 4000,
      "pause": "[data-xt-pag]"
    }
  });

  let object = self.object;

  // vars

  CustomEase.create('easeIn', '.41,.1,.175,1');
  CustomEase.create('easeOut', '.77,0,.175,1');
  CustomEase.create('easeInOut', '.77,.0,.17,1');

  // auto start

  object.addEventListener('auto.xt.start', function (e) {
    // on object
    let spinner = object.querySelectorAll('.spinner svg:nth-child(2) circle');
    let tweens = TweenMax.getTweensOf(spinner);
    if (tweens.length) {
      for (let tween of tweens) {
        let t = (e.detail.autoTime - tween.time() * 1000) / e.detail.autoTime;
        TweenMax.to(tween, .5, {timeScale: t});
      }
    } else {
      TweenMax.set(spinner, {strokeDashoffset: 1});
      TweenMax.to(spinner, e.detail.autoTime / 1000, {strokeDashoffset: 0, ease: 'easeInOut', autoRound: false});
    }
    // on elements
    let elements = self.elements.filter(x => x.classList.contains('active'));
    for (let element of elements) {
      let progresses = element.querySelectorAll('.progress span:nth-child(2)');
      for (let progress of progresses) {
        let tweens = TweenMax.getTweensOf(progress);
        if (tweens.length) {
          for (let tween of tweens) {
            let t = (e.detail.autoTime - tween.time() * 1000) / e.detail.autoTime;
            TweenMax.to(tween, .5, {timeScale: t});
          }
        } else {
          TweenMax.set(progress, {height: 0, top: '100%'});
          TweenMax.to(progress, e.detail.autoTime / 1000, {height: '100%', top: 0, ease: 'easeInOut'});
        }
      }
    }
    // on targets
    let targets = self.targets.filter(x => x.classList.contains('active'));
    for (let target of targets) {
      let progresses = target.querySelectorAll('.progress span:nth-child(2)');
      for (let progress of progresses) {
        let tweens = TweenMax.getTweensOf(progress);
        if (tweens.length) {
          for (let tween of tweens) {
            let t = (e.detail.autoTime - tween.time() * 1000) / e.detail.autoTime;
            TweenMax.to(tween, .5, {timeScale: t});
          }
        } else {
          TweenMax.set(progress, {width: 0, left: 0});
          TweenMax.to(progress, e.detail.autoTime / 1000, {width: '100%', left: 0, ease: 'easeInOut'});
        }
      }
    }
  });

  // auto stop

  object.addEventListener('auto.xt.stop', function (e) {
    // on object
    let spinner = object.querySelectorAll('.spinner svg:nth-child(2) circle');
    TweenMax.set(spinner, {strokeDashoffset: 1});
    // on elements
    let elements = self.elements.filter(x => x.classList.contains('active'));
    for (let element of elements) {
      let progresses = element.querySelectorAll('.progress span:nth-child(2)');
      for (let progress of progresses) {
        TweenMax.to(progress, 0.5, {height: 0, top: 0, ease: 'easeInOut'});
      }
    }
    // on targets
    let targets = self.targets.filter(x => x.classList.contains('active'));
    for (let target of targets) {
      let progresses = target.querySelectorAll('.progress span:nth-child(2)');
      for (let progress of progresses) {
        TweenMax.to(progress, 0.5, {width: 0, left: '100%', ease: 'easeInOut'});
      }
    }
  });

  // auto pause

  object.addEventListener('auto.xt.pause', function (e) {
    // on object
    let spinner = object.querySelectorAll('.spinner svg:nth-child(2) circle');
    let tweens = TweenMax.getTweensOf(spinner);
    for (let tween of tweens) {
      TweenMax.to(tween, .5, {timeScale: 0});
    }
    // on elements
    let elements = self.elements.filter(x => x.classList.contains('active'));
    for (let element of elements) {
      let progresses = element.querySelectorAll('.progress span:nth-child(2)');
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
      let progresses = target.querySelectorAll('.progress span:nth-child(2)');
      for (let progress of progresses) {
        let tweens = TweenMax.getTweensOf(progress);
        for (let tween of tweens) {
          TweenMax.to(tween, .5, {timeScale: 0});
        }
      }
    }
  });

  // follow mouse

  let spinner = object.querySelectorAll('.spinner')[0];
  let spinnerTime = .8;

  function mousemove(e) {
    cancelAnimationFrame(parseFloat(spinner.dataset.xtSpinnerFrame));
    spinner.dataset.xtSpinnerFrame = window.requestAnimationFrame( function() {
      // vars
      let rect = spinner.getBoundingClientRect();
      let top = e.clientY + rect.height / 2 - 20; // 20 for exaclty center
      let left = e.clientX + rect.width / 2 - 20; // 20 for exaclty center
      // tween
      let tweens = TweenMax.getTweensOf(spinner);
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
        spinner.style.top = top + 'px';
        spinner.style.left = left + 'px';
      }
    }).toString();
  }

  function mouseenter(e) {
    spinner.classList.add('active');
    // vars
    let rect = spinner.getBoundingClientRect();
    let top = e.clientY + rect.height / 2 - 20; // 20 for exaclty center
    let left = e.clientX - rect.width / 2 - 20; // 20 for exaclty center
    // tween
    let tweens = TweenMax.getTweensOf(spinner);
    if (tweens.length) {
      for (let tween of tweens) {
        tween.kill();
      }
    }
    TweenMax.to(spinner, spinnerTime, {top: top, left: left, ease: 'easeInOut'});
  }

  function mouseleave(e) {
    spinner.classList.remove('active');
    // vars
    let top = '100%';
    let left = '100%';
    // tween
    let tweens = TweenMax.getTweensOf(spinner);
    if (tweens.length) {
      for (let tween of tweens) {
        tween.kill();
      }
    }
    TweenMax.to(spinner, spinnerTime, {top: top, left: left, ease: 'easeInOut'});
  }

  object.removeEventListener('mousemove', mousemove);
  object.addEventListener('mousemove', mousemove);
  object.removeEventListener('mouseenter', mouseenter);
  object.addEventListener('mouseenter', mouseenter);
  object.removeEventListener('mouseleave', mouseleave);
  object.addEventListener('mouseleave', mouseleave);

}