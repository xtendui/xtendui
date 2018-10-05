let time = .6;
let animSize = 15;
let timeInner = .3;
let delayInner = .1;
let delayInnerMax = .3;
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
      for (let [z, inner] of target.querySelectorAll('.content > *').entries()) {
        window.tl[z] = new TimelineMax({paused: true});
        window.tl[z].add(TweenMax.set(inner, {x: -animSize, opacity: 0}));
        window.tl[z].add(TweenMax.to(inner, timeInner, {x: 0, opacity: 1, ease: 'easeIn'}));
        window.tl[z].add(TweenMax.to(inner, timeInner + timeInner, {x: animSize, opacity: 0, ease: 'easeIn'}));
        let tlPos = timeInner;
        window.tl[z].time(tlPos);
      }
      // pre initial drag position
      TweenMax.set(target, {opacity: 0});
      if (!target.classList.contains('direction-inverse')) {
        TweenMax.set(target, {x: xMax});
        TweenMax.set(target.children[0], {x: -xMax});
        TweenMax.set(target.children[0].children[0], {x: animSize});
        TweenMax.to(target.children[0].children[0], time, {x: 0, ease: 'easeOut'});
        // timeline
        let tlPos = timeInner + timeInner;
        for(let [z, inner] of target.querySelectorAll('.content > *').entries()) {
          TweenMax.set(inner, {opacity: 0});
          setTimeout( function() {
            window.tl[z].time(tlPos).tweenTo(timeInner);
          }, Math.min(delayInner * z, delayInnerMax) * 1000).toString();
        }
      } else {
        TweenMax.set(target, {x: -xMax});
        TweenMax.set(target.children[0], {x: xMax});
        TweenMax.set(target.children[0].children[0], {x: -animSize});
        TweenMax.to(target.children[0].children[0], time, {x: 0, ease: 'easeOut'});
        // timeline
        let tlPos = timeInner - timeInner;
        for(let [z, inner] of target.querySelectorAll('.content > *').entries()) {
          TweenMax.set(inner, {opacity: 0});
          setTimeout( function() {
            window.tl[z].time(tlPos).tweenTo(timeInner);
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
        let tlPos = timeInner + timeInner;
        for(let [z, inner] of target.querySelectorAll('.content > *').entries()) {
          setTimeout( function() {
            window.tl[z].tweenTo(tlPos);
          }, Math.min(delayInner * z, delayInnerMax) * 1000).toString();
        }
      } else {
        TweenMax.to(target, time, {x: xMax, opacity: 0, ease: 'easeOut'});
        TweenMax.to(target.children[0], time, {x: -xMax, ease: 'easeOut'});
        // timeline
        let tlPos = timeInner - timeInner;
        for(let [z, inner] of target.querySelectorAll('.content > *').entries()) {
          setTimeout( function() {
            window.tl[z].tweenTo(tlPos);
          }, Math.min(delayInner * z, delayInnerMax) * 1000).toString();
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
        let tlPos = timeInner + timeInner * ratio;
        for(let [z, inner] of target.querySelectorAll('.content > *').entries()) {
          window.tl[z].time(tlPos);
        }
      } else {
        let tlPos = timeInner - timeInner * ratio;
        for(let [z, inner] of target.querySelectorAll('.content > *').entries()) {
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
        let tlPos = timeInner;
        for(let [z, inner] of target.querySelectorAll('.content > *').entries()) {
          setTimeout( function() {
            window.tl[z].tweenTo(tlPos);
          }, Math.min(delayInner * z, delayInnerMax) * 1000).toString();
        }
      }
    });

  }

}