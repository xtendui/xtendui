for (let [i, el] of document.querySelectorAll('.slider-container').entries()) {

  // slider
  new XtSlider(el, {
    "auto": 6000,
    "autoPause": "Infinity",
    "events": {
      "drag": function (self, e, eInit, target) {
        let xStart = eInit.clientX;
        let xCurrent = e.clientX;
        let xDist = xCurrent - xStart;
        target.style.left = xDist + 'px';
        for (let [i, content] of target.querySelectorAll(':scope > .content').entries()) {
          content.style.left = -xDist + 'px';
        }
      },
      "dragOff": function (self, e, eInit, target) {
        let xMax = target.clientWidth;
        let xFinal = parseFloat(target.style.left);
        if (Math.abs(xFinal) > 100) { // trigger if dragging more than 100px
          // direction
          if (Math.sign(xFinal) < 0) {
            // finish drag
            /*
            target.style.left = -xMax + 'px';
            for (let [i, content] of target.querySelectorAll(':scope > .content').entries()) {
              content.style.left = xMax + 'px';
            }
            */
            // goto
            self.goToNext();
          } else {
            // finish drag
            /*
            target.style.left = xMax + 'px';
            for (let [i, content] of target.querySelectorAll(':scope > .content').entries()) {
              content.style.left = -xMax + 'px';
            }
            */
            // goto
            self.goToPrev();
          }
          // reset after animation done
          let timing = self.activationTiming(target);
          clearTimeout(target.dataset.xtDragOffTimeout);
          target.dataset.xtDragOffTimeout = setTimeout(function () {
            // reset drag
            target.style.left = 0 + 'px';
            for (let [i, content] of target.querySelectorAll(':scope > .content').entries()) {
              content.style.left = 0 + 'px';
            }
          }, timing).toString();
        } else {
          // reset drag
          target.style.left = 0 + 'px';
          for (let [i, content] of target.querySelectorAll(':scope > .content').entries()) {
            content.style.left = 0 + 'px';
          }
        }
      }
    }
  });

  // events
  for (let [i, tr] of el.querySelectorAll('.slider-item').entries()) {

    // on event
    tr.addEventListener('on', function (e) {
      let target = this;
      let xMax = target.clientWidth;
      // pre initial drag position
      target.classList.add('dragging');
      if (target.classList.contains('direction-inverse')) {
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
      // initial drag position
      Xt.cancelAnimationFrame.call(window, target.dataset.onFrame);
      target.dataset.onFrame = Xt.requestAnimationFrame.call(window, function () {
        target.classList.remove('dragging');
        target.style.left = 0 + 'px';
        for (let [i, content] of target.querySelectorAll(':scope > .content').entries()) {
          content.style.left = 0 + 'px';
        }
      });
    });

    // off event
    tr.addEventListener('off', function (e) {
      let target = this;
      let xMax = target.clientWidth;
      // finish drag
      target.classList.remove('dragging');
      Xt.cancelAnimationFrame.call(window, target.dataset.onFrame);
      if (target.classList.contains('direction-inverse')) {
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
    });

  }

}