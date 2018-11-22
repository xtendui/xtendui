let time = .6;
let delay = .3;
let animSize = 15;

CustomEase.create('easeIn', '.41, .1, .175, 1');
CustomEase.create('easeOut', '.77, 0, .175, 1');

// #toggle-0

for (let [i, el] of document.querySelectorAll('#toggle-0').entries()) {

  // toggle
  let toggle = new Xt.Toggle(el, {
    "durationOn": time * 1000,
    "durationOff": time * 1000,
    "delayOn": delay * 1000,
    "delayOff": delay * 1000
  });

  // toggle items
  for (let [i, tr] of toggle.targets.entries()) {

    // on event
    tr.addEventListener('on.xt', function (e) {
      let target = this;
      // setup
      TweenMax.set(target, {opacity: 0});
      if (!target.classList.contains('direction-inverse')) {
        TweenMax.set(target, {x: -animSize});
      } else {
        TweenMax.set(target, {x: animSize});
      }
      // animation
      TweenMax.to(target, time, {x: 0, opacity: 1, ease: 'easeIn'});
    });

    // off event
    tr.addEventListener('off.xt', function (e) {
      let target = this;
      // animation
      if (!target.classList.contains('direction-inverse')) {
        TweenMax.to(target, time, {x: animSize, opacity: 0, ease: 'easeOut'});
      } else {
        TweenMax.to(target, time, {x: -animSize, opacity: 0, ease: 'easeOut'});
      }
    });

  }

}

// #toggle-1

for (let [i, el] of document.querySelectorAll('#toggle-1').entries()) {

  // toggle
  let toggle = new Xt.Toggle(el, {
    "on": "mouseenter",
    "off": "mouseleave",
    "durationOn": 1000,
    "durationOff": 1000
  });

  // toggle items
  for (let [i, tr] of toggle.targets.entries()) {

    // on event
    tr.addEventListener('on.xt', function (e) {
      let target = this;
      // setup
      TweenMax.set(target, {opacity: 0});
      if (!target.classList.contains('direction-inverse')) {
        TweenMax.set(target, {x: -animSize});
      } else {
        TweenMax.set(target, {x: animSize});
      }
      // animation
      TweenMax.to(target, time, {x: 0, opacity: 1, ease: 'easeIn'});
    });

    // off event
    tr.addEventListener('off.xt', function (e) {
      let target = this;
      // animation
      if (!target.classList.contains('direction-inverse')) {
        TweenMax.to(target, time, {x: animSize, opacity: 0, ease: 'easeOut'});
      } else {
        TweenMax.to(target, time, {x: -animSize, opacity: 0, ease: 'easeOut'});
      }
    });

  }

}
