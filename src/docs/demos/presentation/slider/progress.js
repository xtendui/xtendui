Xt.observe.push({
  matches: '.slider',
  fnc: sliderInit
});

function sliderInit(main, index, query) {

  // slider

  let self = new Xt.Slider(main, {
    "auto": {
      "time": 4000,
      "pause": "[data-xt-pag]"
    }
  });

  let object = self.object;

  // vars

  let timeHide = .33;
  CustomEase.create('easeIn', '.36,0,0,1');
  CustomEase.create('easeOut', '1,0,.64,1');
  CustomEase.create('easeInOut', '.68,.13,.25,1');

  // auto start

  object.addEventListener('auto.xt.start', function (e) {
    // on object
    let spinner = object.querySelectorAll('.spinner svg:nth-child(2) circle');
    TweenMax.set(spinner, {strokeDashoffset: 628});
    TweenMax.to(spinner, e.detail.autoTime / 1000, {strokeDashoffset: 0, ease: 'easeInOut', autoRound: false});
    // on elements
    let elements = self.elements.filter(x => x.classList.contains('active'));
    for (let element of elements) {
      let fillers = element.querySelectorAll('.filler span:nth-child(2)');
      for (let filler of fillers) {
        let tweens = TweenMax.getTweensOf(filler);
        if (tweens.length) {
          for (let tween of tweens) {
            let t = (e.detail.autoTime - tween.time() * 1000) / e.detail.autoTime;
            TweenMax.to(tween, .5, {timeScale: t});
          }
        } else {
          TweenMax.set(filler, {height: 0, top: '100%'});
          TweenMax.to(filler, e.detail.autoTime / 1000, {height: '100%', top: 0, ease: 'easeInOut'});
        }
      }
    }
    // on targets
    let targets = self.targets.filter(x => x.classList.contains('active'));
    for (let target of targets) {
      let fillers = target.querySelectorAll('.filler span:nth-child(2)');
      for (let filler of fillers) {
        let tweens = TweenMax.getTweensOf(filler);
        if (tweens.length) {
          for (let tween of tweens) {
            let t = (e.detail.autoTime - tween.time() * 1000) / e.detail.autoTime;
            TweenMax.to(tween, .5, {timeScale: t});
          }
        } else {
          TweenMax.set(filler, {width: 0, left: 0});
          TweenMax.to(filler, e.detail.autoTime / 1000, {width: '100%', left: 0, ease: 'easeInOut'});
        }
      }
    }
  });

  // auto stop

  object.addEventListener('auto.xt.stop', function (e) {
    // on object
    let spinner = object.querySelectorAll('.spinner svg:nth-child(2) circle');
    TweenMax.to(spinner, timeHide, {strokeDashoffset: 628, ease: 'easeInOut', autoRound: false});
    // on elements
    let elements = self.elements.filter(x => x.classList.contains('active'));
    for (let element of elements) {
      let fillers = element.querySelectorAll('.filler span:nth-child(2)');
      for (let filler of fillers) {
        TweenMax.to(filler, 0.5, {height: 0, top: 0, ease: 'easeInOut'});
      }
    }
    // on targets
    let targets = self.targets.filter(x => x.classList.contains('active'));
    for (let target of targets) {
      let fillers = target.querySelectorAll('.filler span:nth-child(2)');
      for (let filler of fillers) {
        TweenMax.to(filler, 0.5, {width: 0, left: '100%', ease: 'easeInOut'});
      }
    }
  });

  // auto pause

  object.addEventListener('auto.xt.pause', function (e) {
    // on object
    let spinner = object.querySelectorAll('.spinner svg:nth-child(2) circle');
    TweenMax.to(spinner, timeHide, {strokeDashoffset: 628, ease: 'easeInOut', autoRound: false});
    // on elements
    let elements = self.elements.filter(x => x.classList.contains('active'));
    for (let element of elements) {
      let fillers = element.querySelectorAll('.filler span:nth-child(2)');
      for (let filler of fillers) {
        let tweens = TweenMax.getTweensOf(filler);
        for (let tween of tweens) {
          TweenMax.to(tween, .5, {timeScale: 0});
        }
      }
    }
    // on targets
    let targets = self.targets.filter(x => x.classList.contains('active'));
    for (let target of targets) {
      let fillers = target.querySelectorAll('.filler span:nth-child(2)');
      for (let filler of fillers) {
        let tweens = TweenMax.getTweensOf(filler);
        for (let tween of tweens) {
          TweenMax.to(tween, .5, {timeScale: 0});
        }
      }
    }
  });

  // follow mouse

  let container = object;
  let loader = object.querySelectorAll('.loader--mouse')[0];
  let rect = loader.getBoundingClientRect();
  let width = rect.width;
  let height = rect.height;

  function mousemove(e) {
    cancelAnimationFrame(parseFloat(loader.dataset.xtLoaderFrame));
    loader.dataset.xtLoaderFrame = window.requestAnimationFrame( function() {
      let top = e.clientY + height / 2;
      let left = e.clientX + width / 2;
      loader.style.top = top + 'px';
      loader.style.left = left + 'px';
    }).toString();
  }

  function mouseenter(e) {
    loader.classList.add('active');
    loader.classList.remove('out');
    let top = e.clientY + height / 2;
    let left = e.clientX + width / 2;
    loader.style.top = top + 'px';
    loader.style.left = left + 'px';
  }

  function mouseleave(e) {
    loader.classList.remove('active');
    loader.classList.add('out');
  }

  container.removeEventListener('mousemove', mousemove);
  container.addEventListener('mousemove', mousemove);
  container.removeEventListener('mouseenter', mouseenter);
  container.addEventListener('mouseenter', mouseenter);
  container.removeEventListener('mouseleave', mouseleave);
  container.addEventListener('mouseleave', mouseleave);

}