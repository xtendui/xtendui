Xt.observe.push({
  matches: '.slider',
  fnc: sliderInit
});

function sliderInit(main, index, query) {

  // vars

  let timeHide = 300;
  let easeIn = new Ease(BezierEasing(.36, 0, 0, 1));
  let easeOut = new Ease(BezierEasing(1, 0, .64, 1));
  let easeInOut = new Ease(BezierEasing(.68, .13, .25, 1));

  // slider

  let self = new Xt.Slider(main, {
    "auto": {
      "time": 4000,
      "pause": "[data-xt-pag]"
    }
  });

  let slider = self.object;

  // auto start

  slider.addEventListener('start.xt.auto', function (e) {
    // on slider
    let spinner = slider.querySelectorAll('.spinner svg:nth-child(2) circle');
    let timeline = new TimelineMax();
    timeline.to(spinner, timeHide / 1000, {strokeDashoffset: 628, ease: easeInOut, autoRound: false});
    timeline.to(spinner, (e.detail.autoTime / 1000) - (timeHide / 1000), {strokeDashoffset: 0, ease: easeInOut, autoRound: false});
    // on elements
    let elements = self.elements.filter(x => x.classList.contains('active'));
    for (let element of elements) {
      let fillers = element.querySelectorAll('.filler span:nth-child(2)');
      for (let filler of fillers) {
        TweenMax.set(filler, {height: 0, top: '100%', ease: easeInOut});
        TweenMax.to(filler, e.detail.autoTime / 1000, {height: '100%', top: 0, ease: easeInOut});
      }
    }
    // on targets
    let targets = self.targets.filter(x => x.classList.contains('active'));
    for (let target of targets) {
      let fillers = target.querySelectorAll('.filler span:nth-child(2)');
      for (let filler of fillers) {
        TweenMax.set(filler, {width: 0, left: 0, ease: easeInOut});
        TweenMax.to(filler, e.detail.autoTime / 1000, {width: '100%', left: 0, ease: easeInOut});
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
    // on slider
    let spinner = slider.querySelectorAll('.spinner svg:nth-child(2) circle');
    TweenMax.to(spinner, timeHide / 1000, {strokeDashoffset: 628, ease: easeInOut, autoRound: false});
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

  // follow mouse

  let container = slider;
  let loader = container.querySelectorAll('.loader--mouse')[0];
  let rect = loader.getBoundingClientRect();
  let width = rect.width;
  let height = rect.height;

  function mousemove(e) {
    let top = e.clientY + height / 2;
    let left = e.clientX + width / 2;
    loader.style.top = top + 'px';
    loader.style.left = left + 'px';
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