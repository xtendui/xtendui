for (let [i, el] of document.querySelectorAll('.slider-container').entries()) {

  // slider
  new XtSlider(el, {
    "auto": 1500,
    "autoPause": 3000,
    "drag": true
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
      // drag
      target.style.left = xDist + 'px';
      for (let [i, content] of target.querySelectorAll(':scope > .content').entries()) {
        content.style.left = -xDist + 'px';
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
        // reset after animation done
        let timing = Xt.animationTiming(target);
        clearTimeout(target.dataset.xtDragEndTimeout);
        target.dataset.xtDragEndTimeout = setTimeout(function () {
          target.style.left = '0';
          for (let [i, content] of target.querySelectorAll(':scope > .content').entries()) {
            content.style.left = '0';
          }
        }, timing).toString();
      } else {
        // reset drag
        target.style.left = '0';
        for (let [i, content] of target.querySelectorAll(':scope > .content').entries()) {
          content.style.left = '0';
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
      if (!target.classList.contains('direction-inverse')) {
        target.style.left = xMax + 'px';
        for (let [i, content] of target.querySelectorAll(':scope > .content').entries()) {
          content.style.left = -xMax + 'px';
        }
      } else {
        target.style.left = -xMax + 'px';
        for (let [i, content] of target.querySelectorAll(':scope > .content').entries()) {
          content.style.left = xMax + 'px';
        }
      }
      // initial drag position
      Xt.cancelAnimationFrame.call(window, target.dataset.xtDragResetFrame);
      target.dataset.xtDragResetFrame = Xt.requestAnimationFrame.call(window, function () {
        // dragging
        target.classList.remove('dragging');
        target.dataset.xtDragResetFrame = Xt.requestAnimationFrame.call(window, function () {
          // reset drag
          target.style.left = '0';
          for (let [i, content] of target.querySelectorAll(':scope > .content').entries()) {
            content.style.left = '0';
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
        target.style.left = -xMax + 'px';
        for (let [i, content] of target.querySelectorAll(':scope > .content').entries()) {
          content.style.left = xMax + 'px';
        }
      } else {
        target.style.left = xMax + 'px';
        for (let [i, content] of target.querySelectorAll(':scope > .content').entries()) {
          content.style.left = -xMax + 'px';
        }
      }
    });

  }

}