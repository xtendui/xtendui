// vars

let time = .6;
let delay = 0;
let size = 15;

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
      if (!target.classList.contains('xt-inverse')) {
        TweenMax.set(target, {x: -size});
      } else {
        TweenMax.set(target, {x: size});
      }
      // animation
      TweenMax.to(target, time, {x: 0, opacity: 1, ease: 'easeIn'});
    });

    // off event

    tr.addEventListener('off.xt', function (e) {
      let target = this;
      // animation
      if (!target.classList.contains('xt-inverse')) {
        TweenMax.to(target, time, {x: size, opacity: 0, ease: 'easeOut'});
      } else {
        TweenMax.to(target, time, {x: -size, opacity: 0, ease: 'easeOut'});
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
      if (!target.classList.contains('xt-inverse')) {
        TweenMax.set(target, {x: -size});
      } else {
        TweenMax.set(target, {x: size});
      }
      // animation
      TweenMax.to(target, time, {x: 0, opacity: 1, ease: 'easeIn'});
    });

    // off event

    tr.addEventListener('off.xt', function (e) {
      let target = this;
      // animation
      if (!target.classList.contains('xt-inverse')) {
        TweenMax.to(target, time, {x: size, opacity: 0, ease: 'easeOut'});
      } else {
        TweenMax.to(target, time, {x: -size, opacity: 0, ease: 'easeOut'});
      }
    });

  }

}
