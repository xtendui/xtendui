let time = .6;
let animSize = 15;
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
      // pre initial drag position
      TweenMax.set(target, {opacity: 0});
      if (!target.classList.contains('direction-inverse')) {
        TweenMax.set(target, {x: xMax});
        TweenMax.set(target.children[0], {x: -xMax});
        TweenMax.set(target.children[0].children[0], {x: animSize});
        TweenMax.to(target.children[0].children[0], time, {x: 0, ease: 'easeOut'});
      } else {
        TweenMax.set(target, {x: -xMax});
        TweenMax.set(target.children[0], {x: xMax});
        TweenMax.set(target.children[0].children[0], {x: -animSize});
        TweenMax.to(target.children[0].children[0], time, {x: 0, ease: 'easeOut'});
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
      } else {
        TweenMax.to(target, time, {x: xMax, opacity: 0, ease: 'easeOut'});
        TweenMax.to(target.children[0], time, {x: -xMax, ease: 'easeOut'});
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
      }
    });

  }

}