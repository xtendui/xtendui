let time = .6;
let animSize = 15;

let timeInner = .3;
let delayInner = .1;
let delayInnerMax = .3;
let durationInner = timeInner * 2 + delayInnerMax * 2;

CustomEase.create('easeIn', '.41, .1, .175, 1');
CustomEase.create('easeOut', '.77, 0, .175, 1');

for (let [i, el] of document.querySelectorAll('.slider').entries()) {

  // slider
  new XtSlider(el, {
    "auto": 6000,
    "autoPause": 6000,
    "drag": true,
    "timing": time * 1000
  });

  // slider items
  for (let [i, tr] of el.querySelectorAll('.slide').entries()) {

    // on event
    tr.addEventListener('on', function (e) {
      let target = this;
      let xMax = target.clientWidth;
      // timeline init
      window.tl = [];
      for (let [z, inner] of target.querySelectorAll(':scope > * > .content > .box > .content > *').entries()) {
        window.tl[z] = new TimelineMax({paused: true});
        window.tl[z].addLabel('start');
        window.tl[z].add(TweenMax.set(inner, {x: -animSize, opacity: 0}));
        window.tl[z].add(TweenMax.to(inner, delayInnerMax, {x: -animSize, opacity: 0, ease: 'easeIn'})); // delay
        window.tl[z].addLabel('startDelay');
        window.tl[z].add(TweenMax.to(inner, timeInner, {x: 0, opacity: 1, ease: 'easeIn'}));
        window.tl[z].addLabel('middle');
        window.tl[z].add(TweenMax.to(inner, timeInner, {x: animSize, opacity: 0, ease: 'easeIn'}));
        window.tl[z].addLabel('endDelay');
        window.tl[z].add(TweenMax.to(inner, delayInnerMax, {x: animSize, opacity: 0, ease: 'easeIn'})); // delay
        window.tl[z].addLabel('end');
        // timeline
        window.tl[z].seek('middle');
      }
      // pre initial drag position
      TweenMax.set(target, {opacity: 0});
      if (!target.classList.contains('direction-inverse')) {
        TweenMax.set(target, {x: xMax});
        TweenMax.set(target.children[0], {x: -xMax});
        TweenMax.set(target.children[0].children[0], {x: animSize});
        TweenMax.to(target.children[0].children[0], time, {x: 0, ease: 'easeOut'});
        // timeline
        for(let [z, inner] of target.querySelectorAll(':scope > * > .content > .box > .content > *').entries()) {
          TweenMax.set(inner, {opacity: 0});
          setTimeout( function() {
            window.tl[z].seek('end').tweenTo('middle');
          }, Math.min(delayInner * z, delayInnerMax) * 1000).toString();
        }
      } else {
        TweenMax.set(target, {x: -xMax});
        TweenMax.set(target.children[0], {x: xMax});
        TweenMax.set(target.children[0].children[0], {x: -animSize});
        TweenMax.to(target.children[0].children[0], time, {x: 0, ease: 'easeOut'});
        // timeline
        for(let [z, inner] of target.querySelectorAll(':scope > * > .content > .box > .content > *').entries()) {
          TweenMax.set(inner, {opacity: 0});
          setTimeout( function() {
            window.tl[z].seek('start').tweenTo('middle');
          }, Math.min(delayInner * z, delayInnerMax) * 1000).toString();
        }
      }
      // reset drag
      TweenMax.to(target, time, {x: 0, opacity: 1, ease: 'easeIn'});
      TweenMax.to(target.children[0], time, {x: 0, ease: 'easeIn'});
    });

    // off event
    tr.addEventListener('off', function (e) {
      let target = this;
      let xMax = target.clientWidth;
      // complete drag
      Xt.cancelAnimationFrame.call(window, target.dataset.xtDragResetFrame);
      if (!target.classList.contains('direction-inverse')) {
        TweenMax.to(target, time, {x: -xMax, opacity: 0, ease: 'easeOut'});
        TweenMax.to(target.children[0], time, {x: xMax, ease: 'easeOut'});
        // timeline
        for(let [z, inner] of target.querySelectorAll(':scope > * > .content > .box > .content > *').entries()) {
          let delay = Math.min(delayInner * z, delayInnerMax);
          setTimeout( function() {
            window.tl[z].tweenTo('end');
          }, delay * 1000).toString();
        }
      } else {
        TweenMax.to(target, time, {x: xMax, opacity: 0, ease: 'easeOut'});
        TweenMax.to(target.children[0], time, {x: -xMax, ease: 'easeOut'});
        // timeline
        for(let [z, inner] of target.querySelectorAll(':scope > * > .content > .box > .content > *').entries()) {
          let delay = Math.min(delayInner * z, delayInnerMax);
          setTimeout( function() {
            window.tl[z].tweenTo('start');
          }, delay * 1000).toString();
        }
      }
    });

    // drag event
    tr.addEventListener('drag.slider', function (e) {
      let target = this;
      let self = e.detail.object;
      let eInit = self.detail.eInit;
      let eCurrent = self.detail.eCurrent;
      let xStart = eInit.clientX;
      let xCurrent = eCurrent.clientX;
      let xDist = xCurrent - xStart;
      let xMax = target.clientWidth;
      let ratio = Math.abs(xStart - xCurrent) / xMax;
      // drag
      TweenMax.set(target, {x: xDist + 'px', opacity: 1 - ratio});
      TweenMax.set(target.children[0], {x: -xDist});
      // timeline
      if (xStart - xCurrent > 0) {
        for(let [z, inner] of target.querySelectorAll(':scope > * > .content > .box > .content > *').entries()) {
          let delay = Math.min(delayInner * z, delayInnerMax);
          let tlPos = durationInner / 2 + (durationInner / 2 + delay) * ratio;
          window.tl[z].time(tlPos);
        }
      } else {
        for(let [z, inner] of target.querySelectorAll(':scope > * > .content > .box > .content > *').entries()) {
          let delay = Math.min(delayInner * z, delayInnerMax);
          let tlPos = durationInner / 2  - (durationInner / 2 + delay) * ratio;
          window.tl[z].time(tlPos);
        }
      }
    });

    // dragOff event
    tr.addEventListener('dragEnd.slider', function (e) {
      let target = this;
      let self = e.detail.object;
      let xFinal = parseFloat(target._gsTransform.x);
      // activate or reset
      if (Math.abs(xFinal) > self.options.dragThreshold) {
        // direction
        if (Math.sign(xFinal) < 0) {
          self.goToNext();
        } else {
          self.goToPrev();
        }
      } else {
        // reset drag
        TweenMax.to(target, time, {x: 0, opacity: 1, ease: 'easeOut'});
        TweenMax.to(target.children[0], time, {x: 0, ease: 'easeOut'});
        // timeline
        for(let [z, inner] of target.querySelectorAll(':scope > * > .content > .box > .content > *').entries()) {
          setTimeout( function() {
            window.tl[z].tweenTo('middle');
          }, Math.min(delayInner * z, delayInnerMax) * 1000).toString();
        }
      }
    });

  }

}