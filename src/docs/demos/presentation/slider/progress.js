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
      TweenMax.set(spinner, {strokeDashoffset: 628});
      TweenMax.to(spinner, e.detail.autoTime / 1000, {strokeDashoffset: 0, ease: 'easeInOut', autoRound: false});
    }
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
    TweenMax.set(spinner, {strokeDashoffset: 628});
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
    let tweens = TweenMax.getTweensOf(spinner);
    for (let tween of tweens) {
      TweenMax.to(tween, .5, {timeScale: 0});
    }
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

  function mousemove(e) {
    cancelAnimationFrame(parseFloat(loader.dataset.xtLoaderFrame));
    loader.dataset.xtLoaderFrame = window.requestAnimationFrame( function() {
      let rect = loader.getBoundingClientRect();
      let top = e.clientY + rect.height / 2;
      let left = e.clientX + rect.width / 2;
      loader.style.top = top + 'px';
      loader.style.left = left + 'px';
    }).toString();
  }

  function mouseenter(e) {
    loader.classList.add('active');
    loader.classList.remove('out');
    let rect = loader.getBoundingClientRect();
    let top = e.clientY + rect.height / 2;
    let left = e.clientX + rect.width / 2;
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
  container.dispatchEvent(new CustomEvent('mouseenter')); // fix when mouse is not moving

}