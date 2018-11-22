for (let [i, el] of document.querySelectorAll('.slider').entries()) {

  // slider
  new Xt.Slider(el, {
    "auto": 6000,
    "autoPause": 6000,
    "drag": true
  });

  // slider items
  for (let [i, tr] of el.querySelectorAll('.slide').entries()) {

    // on event
    tr.addEventListener('on.xt', function (e) {
      let target = this;
      let xMax = target.clientWidth;
      // dragging
      target.classList.add('dragging');
      // setup drag position
      target.style.opacity = '0';
      if (!target.classList.contains('direction-inverse')) {
        target.style.transform = 'translateX(' + xMax + 'px)';
        target.children[0].style.transform = 'translateX(' + (-xMax) + 'px)';
      } else {
        target.style.transform = 'translateX(' + (-xMax) + 'px)';
        target.children[0].style.transform = 'translateX(' + xMax + 'px)';
      }
      // drag position
      window.cancelAnimationFrame(parseFloat(target.dataset.xtDragResetFrame));
      target.dataset.xtDragResetFrame = window.requestAnimationFrame(function () {
        // dragging
        target.classList.remove('dragging');
        target.dataset.xtDragResetFrame = window.requestAnimationFrame(function () {
          // reset drag
          target.style.opacity = '1';
          target.style.transform = 'translateX(' + 0 + 'px)';
          target.children[0].style.transform = 'translateX(' + 0 + 'px)';
        }).toString();
      }).toString();
    });

    // off event
    tr.addEventListener('off.xt', function (e) {
      let target = this;
      let xMax = target.clientWidth;
      // dragging
      target.classList.remove('dragging');
      // complete drag
      window.cancelAnimationFrame(parseFloat(target.dataset.xtDragResetFrame));
      if (!target.classList.contains('direction-inverse')) {
        target.style.opacity = '0';
        target.style.transform = 'translateX(' + -xMax + 'px)';
        target.children[0].style.transform = 'translateX(' + xMax + 'px)';
      } else {
        target.style.opacity = '0';
        target.style.transform = 'translateX(' + xMax + 'px)';
        target.children[0].style.transform = 'translateX(' + -xMax + 'px)';
      }
    });

    // dragstart event
    tr.addEventListener('dragstart.xt.slider', function (e) {
      let target = this;
      // dragging
      target.classList.add('dragging');
    });

    // drag event
    tr.addEventListener('drag.xt.slider', function (e) {
      let target = this;
      let self = e.detail.object;
      let eInit = self.detail.eInit;
      let eCurrent = self.detail.eCurrent;
      let xStart = eInit.clientX;
      let xCurrent = eCurrent.clientX;
      let xDist = xCurrent - xStart;
      let xMax = target.clientWidth;
      let ratio = 1 - (Math.abs(xStart - xCurrent) / xMax);
      // drag
      target.style.opacity = ratio.toString();
      target.style.transform = 'translateX(' + xDist + 'px)';
      target.children[0].style.transform = 'translateX(' + -xDist + 'px)';
    });

    // dragend event
    tr.addEventListener('dragend.xt.slider', function (e) {
      let target = this;
      let self = e.detail.object;
      let eInit = self.detail.eInit;
      let eCurrent = self.detail.eCurrent;
      let xStart = eInit.clientX;
      let xCurrent = eCurrent.clientX;
      let xDist = xCurrent - xStart;
      // dragging
      target.classList.remove('dragging');
      // activate or reset
      if (Math.abs(xDist) > self.options.dragThreshold) {
        // direction
        if (Math.sign(xDist) < 0) {
          self.goToNext();
        } else {
          self.goToPrev();
        }
        // reset after animation done
        let timing = Xt.animDuration(target);
        clearTimeout(target.dataset.xtdragendTimeout);
        target.dataset.xtdragendTimeout = setTimeout(function () {
          target.style.opacity = '0';
          target.style.transform = 'translateX(' + 0 + 'px)';
          target.children[0].style.transform = 'translateX(' + 0 + 'px)';
        }, timing).toString();
      } else {
        // reset drag
        target.style.opacity = '1';
        target.style.transform = 'translateX(' + 0 + 'px)';
        target.children[0].style.transform = 'translateX(' + 0 + 'px)';
      }
    });

  }

}