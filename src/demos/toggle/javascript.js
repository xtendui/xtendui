import {Xt} from 'xtend-library'
import 'xtend-library/src/core/toggle/toggle'
import {TweenMax} from 'gsap/TweenMax'
import BezierEasing from 'bezier-easing'

/**
 * #demo--toggle-js-0
 */

Xt.mount.push({
  matches: '#demo--toggle-js-0',
  fnc: function mount(object) {

    // vars

    let time = .6;
    let delay = 0;
    let size = 15;

    let easeIn = new Ease(BezierEasing(.14, .63, 0, 1));
    let easeOut = new Ease(BezierEasing(.14, .63, 0, 1));

    let toggle = object;

    // xt-toggle

    let self = new Xt.Toggle(toggle, {
      "durationOn": time * 1000,
      "durationOff": time * 1000,
      "delayOn": delay * 1000,
      "delayOff": delay * 1000
    });

    // toggle items

    for (let tr of self.targets) {

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

    // unmount

    return function unmount() {
      self.destroy();
      self = null;
    };

  }
});

/**
 * #demo--toggle-js-0
 */

Xt.mount.push({
  matches: '#demo--toggle-js-1',
  fnc: function mount(object) {

    // vars

    let time = .6;
    let delay = 0;
    let size = 15;

    let easeIn = new Ease(BezierEasing(.14,.63,0,1));
    let easeOut = new Ease(BezierEasing(.14,.63,0,1));

    let toggle = object;

    // xt-toggle

    let self = new Xt.Toggle(toggle, {
      "on": "mouseenter",
      "off": "mouseleave",
      "durationOn": time * 1000,
      "durationOff": time * 1000,
      "delayOn": delay * 1000,
      "delayOff": delay * 1000
    });

    // toggle items

    for (let tr of self.targets) {

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

    // unmount

    return function unmount() {
      self.destroy();
      self = null;
    };

  }
});
