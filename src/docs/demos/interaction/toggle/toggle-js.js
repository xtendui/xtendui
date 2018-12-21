// vars

let time = .6;
let delay = 0;
let size = 15;

CustomEase.create('easeIn', '.41, .1, .175, 1');
CustomEase.create('easeOut', '.77, 0, .175, 1');

// #toggle-0

Xt.init.push({ // on DOM ready and on content added to DOM
  matches: '#toggle-0',
  fnc: toggle0Init
});

function toggle0Init(main, index) {

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

Xt.init.push({ // on DOM ready and on content added to DOM
  matches: '#toggle-1',
  fnc: toggle1Init
});

function toggle1Init(main, index) {

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