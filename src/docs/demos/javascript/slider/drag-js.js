let time = .6;
let animSize = 15;

let timeInner = .6;
let delayInner = .15;
let delayInnerMax = delayInner * 2;
let durationInner = timeInner + delayInnerMax;

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
      // inner
      let inners = target.querySelectorAll(':scope > * > .content > .box > .content > *');
      for (let [z, inner] of inners.entries()) {
        inner.dataset.tlDelay = Math.min(delayInner * z, delayInnerMax).toString();
      }
      // pre initial drag position
      TweenMax.set(target, {opacity: 0});
      if (!target.classList.contains('direction-inverse')) {
        TweenMax.set(target, {x: xMax});
        TweenMax.set(target.children[0], {x: -xMax});
        TweenMax.set(target.children[0].children[0], {x: animSize});
        TweenMax.to(target.children[0].children[0], time, {x: 0, ease: 'easeIn'});
        // inner
        for (let [z, inner] of target.querySelectorAll(':scope > * > .content > .box > .content > *').entries()) {
          TweenMax.set(inner, {x: animSize, opacity: 0});
          setTimeout(function () {
            TweenMax.to(inner, timeInner, {x: 0, opacity: 1, ease: 'easeIn'});
          }, parseFloat(inner.dataset.tlDelay) * 1000);
        }
      } else {
        TweenMax.set(target, {x: -xMax});
        TweenMax.set(target.children[0], {x: xMax});
        TweenMax.set(target.children[0].children[0], {x: -animSize});
        TweenMax.to(target.children[0].children[0], time, {x: 0, ease: 'easeIn'});
        // inner
        for (let [z, inner] of target.querySelectorAll(':scope > * > .content > .box > .content > *').entries()) {
          TweenMax.set(inner, {x: -animSize, opacity: 0});
          setTimeout(function () {
            TweenMax.to(inner, timeInner, {x: 0, opacity: 1, ease: 'easeIn'});
          }, parseFloat(inner.dataset.tlDelay) * 1000);
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
        // inner
        for (let [z, inner] of target.querySelectorAll(':scope > * > .content > .box > .content > *').entries()) {
          setTimeout(function () {
            TweenMax.to(inner, timeInner, {x: -animSize, opacity: 1, ease: 'easeOut'});
          }, parseFloat(inner.dataset.tlDelay) * 1000);
        }
      } else {
        TweenMax.to(target, time, {x: xMax, opacity: 0, ease: 'easeOut'});
        TweenMax.to(target.children[0], time, {x: -xMax, ease: 'easeOut'});
        // inner
        for (let [z, inner] of target.querySelectorAll(':scope > * > .content > .box > .content > *').entries()) {
          setTimeout(function () {
            TweenMax.to(inner, timeInner, {x: animSize, opacity: 1, ease: 'easeOut'});
          }, parseFloat(inner.dataset.tlDelay) * 1000);
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
      // inner
      if (xStart - xCurrent > 0) {
        for (let [z, inner] of target.querySelectorAll(':scope > * > .content > .box > .content > *').entries()) {
          let ratioWithDelay = (durationInner - parseFloat(inner.dataset.tlDelay)) * ratio / timeInner;
          TweenMax.set(inner, {x: -animSize * ratioWithDelay, opacity: 1 - ratioWithDelay});
        }
      } else {
        for (let [z, inner] of target.querySelectorAll(':scope > * > .content > .box > .content > *').entries()) {
          let ratioWithDelay = (durationInner - parseFloat(inner.dataset.tlDelay)) * ratio / timeInner;
          TweenMax.set(inner, {x: animSize * ratioWithDelay, opacity: 1 - ratioWithDelay});
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
        // inner timeline
        for (let [z, inner] of target.querySelectorAll(':scope > * > .content > .box > .content > *').entries()) {
          TweenMax.to(inner, timeInner, {x: 0, opacity: 1, ease: 'easeOut'});
        }
      }
    });

  }

}