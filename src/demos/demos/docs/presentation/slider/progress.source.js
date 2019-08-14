import {Xt} from 'xtend-library';
import {TweenMax} from 'gsap/TweenMax'
import BezierEasing from 'bezier-easing'

import {mouseFollow} from 'xtend-library/extensions/mouseFollow';

Xt.observe.push({
  matches: '.slider',
  fnc: function (main, index, query) {

    // vars

    let slider = main;
    let timeHide = 300;
    let easeLinear = Power0.easeNone;

    // xt-slider

    let self = Xt.init('xt-slider', slider, {
      "auto": {
        "time": 4000,
        "pause": "[data-xt-pag]"
      }
    });

    // auto start

    self.object.addEventListener('start.xt.auto', function (e) {
      // on slider
      let spinner = self.object.querySelectorAll('.spinner svg:nth-child(1) circle');
      let timeline = new TimelineMax();
      timeline.to(spinner, timeHide / 1000, {strokeDashoffset: 628, ease: easeLinear, autoRound: false});
      timeline.to(spinner, (self.options.auto.time / 1000) - (timeHide / 1000), {
        strokeDashoffset: 0,
        ease: easeLinear,
        autoRound: false
      });
      // on elements
      let elements = self.elements.filter(x => self.hasCurrent(x));
      for (let element of elements) {
        let fillers = element.querySelectorAll('.filler span:nth-child(1)');
        for (let filler of fillers) {
          TweenMax.set(filler, {height: 0, top: '100%'});
          TweenMax.to(filler, self.options.auto.time / 1000, {height: '100%', top: 0, ease: easeLinear});
        }
      }
      // on targets
      let targets = self.targets.filter(x => self.hasCurrent(x));
      for (let target of targets) {
        let fillers = target.querySelectorAll('.filler span:nth-child(1)');
        for (let filler of fillers) {
          TweenMax.set(filler, {width: 0, left: 0});
          TweenMax.to(filler, self.options.auto.time / 1000, {width: '100%', left: 0, ease: easeLinear});
        }
      }
    });

    // auto stop

    self.object.addEventListener('stop.xt.auto', function (e) {
      // on elements
      let elements = self.elements.filter(x => self.hasCurrent(x));
      for (let element of elements) {
        let fillers = element.querySelectorAll('.filler span:nth-child(1)');
        for (let filler of fillers) {
          TweenMax.to(filler, timeHide / 1000, {height: 0, top: 0, ease: easeLinear});
        }
      }
      // on targets
      let targets = self.targets.filter(x => self.hasCurrent(x));
      for (let target of targets) {
        let fillers = target.querySelectorAll('.filler span:nth-child(1)');
        for (let filler of fillers) {
          TweenMax.to(filler, timeHide / 1000, {width: 0, left: '100%', ease: easeLinear});
        }
      }
    });

    // auto pause

    self.object.addEventListener('pause.xt.auto', function (e) {
      // on slider
      let spinner = self.object.querySelectorAll('.spinner svg:nth-child(1) circle');
      TweenMax.to(spinner, timeHide / 1000, {strokeDashoffset: 628, ease: easeLinear, autoRound: false});
      // on elements
      let elements = self.elements.filter(x => self.hasCurrent(x));
      for (let element of elements) {
        let fillers = element.querySelectorAll('.filler span:nth-child(1)');
        for (let filler of fillers) {
          TweenMax.to(filler, timeHide / 1000, {height: 0, top: '100%', ease: easeLinear});
        }
      }
      // on targets
      let targets = self.targets.filter(x => self.hasCurrent(x));
      for (let target of targets) {
        let fillers = target.querySelectorAll('.filler span:nth-child(1)');
        for (let filler of fillers) {
          TweenMax.to(filler, timeHide / 1000, {width: 0, left: 0, ease: easeLinear});
        }
      }
    });

    /**
     * mouseFollow
     */

    let element = document.querySelector('.loader--mouse');
    let container = slider;

    mouseFollow({
      element: element,
      container: container,
      mouseCheck: function(options) {
        return !options.element.classList.contains('loader--disable') || options.element.classList.contains('loader--js');
      }
    });

  }
});
