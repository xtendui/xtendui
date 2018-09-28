let time = .3;
let animSize = 15;
CustomEase.create('easeIn', '.41, .1, .175, 1');
CustomEase.create('easeOut', '.77, 0, .175, 1');

for (let [i, el] of document.querySelectorAll('.slider-container').entries()) {

  // slider
  new XtSlider(el, {
    "auto": 6000,
    "autoPause": 6000,
    "drag": true,
    "timing": time * 1000
  });

  // slider items
  for (let [i, tr] of el.querySelectorAll('.slider-item').entries()) {

    // drag event
    tr.addEventListener('dragStart.slider', function (e) {
      let target = this;
      // dragging
      target.classList.add('dragging');
    });

    // drag event
    tr.addEventListener('drag.slider', function (e) {
      let target = this;
      let self = e.detail.self;
      let eInit = self.eInit;
      let eCurrent = self.eCurrent;
      let xStart = eInit.clientX;
      let xCurrent = eCurrent.clientX;
      let xDist = xCurrent - xStart;
      let xMax = target.clientWidth;
      let ratio = 1 - (Math.abs(xStart - xCurrent) / xMax);
      // drag
      TweenMax.set(target, {left: xDist + 'px', opacity: ratio});
      for (let [i, content] of target.querySelectorAll(':scope > .content').entries()) {
        TweenMax.set(content, {left: -xDist});
      }
    });

    // dragOff event
    tr.addEventListener('dragEnd.slider', function (e) {
      let target = this;
      let self = e.detail.self;
      let xFinal = parseFloat(target.style.left);
      // dragging
      target.classList.remove('dragging');
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
        TweenMax.to(target, time, {left: 0, opacity: 0, ease: 'easeOut'});
        for (let [i, content] of target.querySelectorAll(':scope > .content').entries()) {
          TweenMax.to(content, time, {left: 0, ease: 'easeOut'});
        }
      }
    });

    // on event
    tr.addEventListener('on', function (e) {
      let target = this;
      let xMax = target.clientWidth;
      // dragging
      target.classList.add('dragging');
      // pre initial drag position
      TweenMax.set(target, {opacity: 0});
      if (!target.classList.contains('direction-inverse')) {
        TweenMax.set(target, {left: xMax});
        for (let [i, content] of target.querySelectorAll(':scope > .content').entries()) {
          TweenMax.set(content, {left: -xMax});
          /* can't do this because it gets overwritten by drag animation
          // content animation
          TweenMax.set(content, {left: animSize});
          TweenMax.to(content, time, {left: 0, ease: 'easeOut'});
          */
        }
      } else {
        TweenMax.set(target, {left: -xMax});
        for (let [i, content] of target.querySelectorAll(':scope > .content').entries()) {
          TweenMax.set(content, {left: xMax});
          /* can't do this because it gets overwritten by drag animation
          // content animation
          TweenMax.set(content, {left: -animSize});
          TweenMax.to(content, time, {left: 0, ease: 'easeOut'});
          */
        }
      }
      // initial drag position
      Xt.cancelAnimationFrame.call(window, target.dataset.xtDragResetFrame);
      target.dataset.xtDragResetFrame = Xt.requestAnimationFrame.call(window, function () {
        // dragging
        target.classList.remove('dragging');
        target.dataset.xtDragResetFrame = Xt.requestAnimationFrame.call(window, function () {
          // reset drag
          TweenMax.to(target, time, {left: 0, opacity: 1, ease: 'easeIn'});
          for (let [i, content] of target.querySelectorAll(':scope > .content').entries()) {
            TweenMax.to(content, time, {left: 0, ease: 'easeIn'});
          }
        });
      });
    });

    // off event
    tr.addEventListener('off', function (e) {
      let target = this;
      let xMax = target.clientWidth;
      // dragging
      target.classList.remove('dragging');
      // complete drag
      Xt.cancelAnimationFrame.call(window, target.dataset.xtDragResetFrame);
      if (!target.classList.contains('direction-inverse')) {
        TweenMax.to(target, time, {left: -xMax, opacity: 0, ease: 'easeOut'});
        for (let [i, content] of target.querySelectorAll(':scope > .content').entries()) {
          TweenMax.to(content, time, {left: xMax, ease: 'easeOut'});
        }
      } else {
        TweenMax.to(target, time, {left: xMax, opacity: 0, ease: 'easeOut'});
        for (let [i, content] of target.querySelectorAll(':scope > .content').entries()) {
          TweenMax.to(content, time, {left: -xMax, ease: 'easeOut'});
        }
      }
    });

  }

}