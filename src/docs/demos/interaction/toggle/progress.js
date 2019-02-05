Xt.observe.push({
  matches: '.list',
  fnc: toggleInit
});

function toggleInit(main, index, query) {

  // vars

  let timeHide = 300;
  let easeIn = new Ease(BezierEasing(.36, 0, 0, 1));
  let easeOut = new Ease(BezierEasing(1, 0, .64, 1));
  let easeInOut = new Ease(BezierEasing(.68, .13, .25, 1));

  // toggle

  let self = new Xt.Toggle(main, {
    "auto": {
      "time": 2000,
      "pause": ":scope > button, .toggle--block"
    }
  });

  let slider = self.object;

  // auto start

  slider.addEventListener('start.xt.auto', function (e) {
    // on elements
    let elements = self.elements.filter(x => x.classList.contains('active'));
    for (let element of elements) {
      let fillers = element.querySelectorAll('.filler span:nth-child(2)');
      for (let filler of fillers) {
        let timeline = new TimelineMax();
        timeline.to(filler, timeHide / 1000, {height: 0, top: '100%', ease: easeInOut});
        timeline.to(filler, (e.detail.autoTime / 1000) - (timeHide / 1000), {height: '100%', top: 0, ease: easeInOut});
      }
    }
    // on targets
    let targets = self.targets.filter(x => x.classList.contains('active'));
    for (let target of targets) {
      let fillers = target.querySelectorAll('.filler span:nth-child(2)');
      for (let filler of fillers) {
        let timeline = new TimelineMax();
        timeline.to(filler, timeHide / 1000, {width: 0, left: 0, ease: easeInOut});
        timeline.to(filler, (e.detail.autoTime / 1000) - (timeHide / 1000), {width: '100%', left: 0, ease: easeInOut});
      }
    }
  });

  // auto stop

  slider.addEventListener('stop.xt.auto', function (e) {
    // on elements
    let elements = self.elements.filter(x => x.classList.contains('active'));
    for (let element of elements) {
      let fillers = element.querySelectorAll('.filler span:nth-child(2)');
      for (let filler of fillers) {
        TweenMax.to(filler, timeHide / 1000, {height: 0, top: 0, ease: easeInOut});
      }
    }
    // on targets
    let targets = self.targets.filter(x => x.classList.contains('active'));
    for (let target of targets) {
      let fillers = target.querySelectorAll('.filler span:nth-child(2)');
      for (let filler of fillers) {
        TweenMax.to(filler, timeHide / 1000, {width: 0, left: '100%', ease: easeInOut});
      }
    }
  });

  // auto pause

  slider.addEventListener('pause.xt.auto', function (e) {
    // on elements
    let elements = self.elements.filter(x => x.classList.contains('active'));
    for (let element of elements) {
      let fillers = element.querySelectorAll('.filler span:nth-child(2)');
      for (let filler of fillers) {
        TweenMax.to(filler, timeHide / 1000, {height: 0, top: '100%', ease: easeInOut});
      }
    }
    // on targets
    let targets = self.targets.filter(x => x.classList.contains('active'));
    for (let target of targets) {
      let fillers = target.querySelectorAll('.filler span:nth-child(2)');
      for (let filler of fillers) {
        TweenMax.to(filler, timeHide / 1000, {width: 0, left: 0, ease: easeInOut});
      }
    }
  });

}