Xt.observe.push({
  matches: '.list',
  fnc: toggleInit
});

function toggleInit(main, index, query) {

  // toggle

  let self = new Xt.Toggle(main, {
    "auto": {
      "time": 2000,
      "pause": ":scope > button, .toggle--block"
    }
  });

  // vars

  let object = self.object;

  let easeIn = new Ease(BezierEasing(.36, 0, 0, 1));
  let easeOut = new Ease(BezierEasing(1, 0, .64, 1));
  let easeInOut = new Ease(BezierEasing(.68, .13, .25, 1));

  // auto start

  object.addEventListener('start.xt.auto', function (e) {
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
          TweenMax.to(filler, e.detail.autoTime / 1000, {height: '100%', top: 0, ease: easeInOut});
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
          TweenMax.to(filler, e.detail.autoTime / 1000, {width: '100%', left: 0, ease: easeInOut});
        }
      }
    }
  });

  // auto stop

  object.addEventListener('stop.xt.auto', function (e) {
    // on elements
    let elements = self.elements.filter(x => x.classList.contains('active'));
    for (let element of elements) {
      let fillers = element.querySelectorAll('.filler span:nth-child(2)');
      for (let filler of fillers) {
        TweenMax.to(filler, 0.5, {height: 0, top: 0, ease: easeInOut});
      }
    }
    // on targets
    let targets = self.targets.filter(x => x.classList.contains('active'));
    for (let target of targets) {
      let fillers = target.querySelectorAll('.filler span:nth-child(2)');
      for (let filler of fillers) {
        TweenMax.to(filler, 0.5, {width: 0, left: '100%', ease: easeInOut});
      }
    }
  });

  // auto pause

  object.addEventListener('pause.xt.auto', function (e) {
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

}