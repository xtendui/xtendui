import {Xt} from 'xtend-library'
import 'xtend-library/src/core/toggle/toggle'
import {TweenMax} from 'gsap/TweenMax'

/**
 * .demo--toggle--progress
 */

Xt.mount.push({
  matches: '.demo--toggle--progress',
  fnc: function mount(object) {

    // vars

    let list = object;
    let timeHide = 300;
    let easeLinear = Power0.easeNone;

    // xt-toggle

    let self = new Xt.Toggle(list, {
      "auto": {
        "time": 2000,
        "pause": ":scope > button"
      }
    });

    // auto start

    self.object.addEventListener('start.xt.auto', function (e) {
      // on elements
      let elements = self.elements.filter(x => x.classList.contains(...self.classes));
      for (let element of elements) {
        let fillers = element.querySelectorAll('.filler span:nth-child(1)');
        for (let filler of fillers) {
          TweenMax.set(filler, {height: 0, top: '100%', ease: easeLinear});
          TweenMax.to(filler, self.options.auto.time / 1000, {height: '100%', top: 0, ease: easeLinear});
        }
      }
      // on targets
      let targets = self.targets.filter(x => x.classList.contains(...self.classes));
      for (let target of targets) {
        let fillers = target.querySelectorAll('.filler span:nth-child(1)');
        for (let filler of fillers) {
          TweenMax.set(filler, {width: 0, left: 0, ease: easeLinear});
          TweenMax.to(filler, self.options.auto.time / 1000, {width: '100%', left: 0, ease: easeLinear});
        }
      }
    });

    // auto stop

    self.object.addEventListener('stop.xt.auto', function (e) {
      // on elements
      let elements = self.elements.filter(x => x.classList.contains(...self.classes));
      for (let element of elements) {
        let fillers = element.querySelectorAll('.filler span:nth-child(1)');
        for (let filler of fillers) {
          TweenMax.to(filler, timeHide / 1000, {height: 0, top: 0, ease: easeLinear});
        }
      }
      // on targets
      let targets = self.targets.filter(x => x.classList.contains(...self.classes));
      for (let target of targets) {
        let fillers = target.querySelectorAll('.filler span:nth-child(1)');
        for (let filler of fillers) {
          TweenMax.to(filler, timeHide / 1000, {width: 0, left: '100%', ease: easeLinear});
        }
      }
    });

    // auto pause

    self.object.addEventListener('pause.xt.auto', function (e) {
      // on elements
      let elements = self.elements.filter(x => x.classList.contains(...self.classes));
      for (let element of elements) {
        let fillers = element.querySelectorAll('.filler span:nth-child(1)');
        for (let filler of fillers) {
          TweenMax.to(filler, timeHide / 1000, {height: 0, top: '100%', ease: easeLinear});
        }
      }
      // on targets
      let targets = self.targets.filter(x => x.classList.contains(...self.classes));
      for (let target of targets) {
        let fillers = target.querySelectorAll('.filler span:nth-child(1)');
        for (let filler of fillers) {
          TweenMax.to(filler, timeHide / 1000, {width: 0, left: 0, ease: easeLinear});
        }
      }
    });

    // unmount

    return function unmount() {
      self.destroy();
      self = null;
    };

  }
});
