// vars

let time = .6;
let delay = 0;
let size = 15;

let easeIn = new Ease(BezierEasing(.36,0,0,1));
let easeOut = new Ease(BezierEasing(1,0,.64,1));
let easeInOut = new Ease(BezierEasing(.68,.13,.25,1));

// #toggle-0

Xt.observe.push({
  matches: '#toggle-0',
  fnc: toggle0Init
});

function toggle0Init(main, index, query) {

  // toggle

  let toggle = new Xt.Toggle(main, {
    "durationOn": time * 1000,
    "durationOff": time * 1000,
    "delayOn": delay * 1000,
    "delayOff": delay * 1000
  });

  // toggle items

  for (let tr of toggle.targets) {

    // on event

    tr.addEventListener('on.xt', function (e) {
      let target = this;
      // setup
      TweenMax.set(target, {opacity: 0});
      if (!target.classList.contains('inverse')) {
        TweenMax.set(target, {x: -size});
      } else {
        TweenMax.set(target, {x: size});
      }
      // animation
      TweenMax.to(target, time, {x: 0, opacity: 1, ease: easeIn});
    });

    // off event

    tr.addEventListener('off.xt', function (e) {
      let target = this;
      // animation
      if (!target.classList.contains('inverse')) {
        TweenMax.to(target, time, {x: size, opacity: 0, ease: easeOut});
      } else {
        TweenMax.to(target, time, {x: -size, opacity: 0, ease: easeOut});
      }
    });

  }

}

// #toggle-1

Xt.observe.push({
  matches: '#toggle-1',
  fnc: toggle1Init
});

function toggle1Init(main, index, query) {

  // toggle

  let toggle = new Xt.Toggle(main, {
    "on": "mouseenter",
    "off": "mouseleave",
    "durationOn": time * 1000,
    "durationOff": time * 1000,
    "delayOn": delay * 1000,
    "delayOff": delay * 1000
  });

  // toggle items

  for (let tr of toggle.targets) {

    // on event

    tr.addEventListener('on.xt', function (e) {
      let target = this;
      // setup
      TweenMax.set(target, {opacity: 0});
      if (!target.classList.contains('inverse')) {
        TweenMax.set(target, {x: -size});
      } else {
        TweenMax.set(target, {x: size});
      }
      // animation
      TweenMax.to(target, time, {x: 0, opacity: 1, ease: easeIn});
    });

    // off event

    tr.addEventListener('off.xt', function (e) {
      let target = this;
      // animation
      if (!target.classList.contains('inverse')) {
        TweenMax.to(target, time, {x: size, opacity: 0, ease: easeOut});
      } else {
        TweenMax.to(target, time, {x: -size, opacity: 0, ease: easeOut});
      }
    });

  }

}