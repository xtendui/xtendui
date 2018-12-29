Xt.init.push({ // on DOM ready and on content added to DOM
  matches: '.slider',
  fnc: sliderInit
});

function sliderInit(main, index) {

  // slider

  new Xt.Slider(main, {
    "auto": 6000
  });

  // slider items

  for (let tr of main.querySelectorAll('.slide')) {

    // on event

    tr.addEventListener('on.xt', function (e) {
      let slide = this;
      let xMax = slide.clientWidth;
      // if inital stop, don't do animation
      if (e.detail.object.detail.initial) {
        return false;
      }
      // dragging
      slide.classList.add('dragging');
      // setup drag position
      slide.style.opacity = '0';
      if (!slide.classList.contains('xt-inverse')) {
        slide.style.transform = 'translateX(' + xMax + 'px)';
        slide.children[0].style.transform = 'translateX(' + (-xMax) + 'px)';
      } else {
        slide.style.transform = 'translateX(' + (-xMax) + 'px)';
        slide.children[0].style.transform = 'translateX(' + xMax + 'px)';
      }
      // drag position
      window.cancelAnimationFrame(parseFloat(slide.dataset.xtDragResetFrame));
      slide.dataset.xtDragResetFrame = window.requestAnimationFrame(function () {
        // dragging
        slide.classList.remove('dragging');
        slide.dataset.xtDragResetFrame = window.requestAnimationFrame(function () {
          // reset drag
          slide.style.opacity = '1';
          slide.style.transform = 'translateX(' + 0 + 'px)';
          slide.children[0].style.transform = 'translateX(' + 0 + 'px)';
        }).toString();
      }).toString();
    });

    // off event

    tr.addEventListener('off.xt', function (e) {
      let slide = this;
      let xMax = slide.clientWidth;
      // dragging
      slide.classList.remove('dragging');
      // complete drag
      window.cancelAnimationFrame(parseFloat(slide.dataset.xtDragResetFrame));
      if (!slide.classList.contains('xt-inverse')) {
        slide.style.opacity = '0';
        slide.style.transform = 'translateX(' + -xMax + 'px)';
        slide.children[0].style.transform = 'translateX(' + xMax + 'px)';
      } else {
        slide.style.opacity = '0';
        slide.style.transform = 'translateX(' + xMax + 'px)';
        slide.children[0].style.transform = 'translateX(' + -xMax + 'px)';
      }
    });

    // dragstart event

    tr.addEventListener('dragstart.xt.slider', function (e) {
      let slide = this;
      // dragging
      slide.classList.add('dragging');
    });

    // drag event

    tr.addEventListener('drag.xt.slider', function (e) {
      let slide = this;
      let self = e.detail.object;
      let eInit = self.detail.eInit;
      let eCurrent = self.detail.eCurrent;
      let xStart = eInit.clientX;
      let xCurrent = eCurrent.clientX;
      let xDist = xCurrent - xStart;
      let xMax = slide.clientWidth;
      let ratio = 1 - (Math.abs(xStart - xCurrent) / xMax);
      // drag
      slide.style.opacity = ratio.toString();
      slide.style.transform = 'translateX(' + xDist + 'px)';
      slide.children[0].style.transform = 'translateX(' + -xDist + 'px)';
    });

    // dragend event

    tr.addEventListener('dragend.xt.slider', function (e) {
      let slide = this;
      let self = e.detail.object;
      let eInit = self.detail.eInit;
      let eCurrent = self.detail.eCurrent;
      let xStart = eInit.clientX;
      let xCurrent = eCurrent.clientX;
      let xDist = xCurrent - xStart;
      // dragging
      slide.classList.remove('dragging');
      // activate or reset
      if (Math.abs(xDist) > self.options.dragThreshold) {
        // direction
        if (Math.sign(xDist) < 0) {
          self.goToNext();
        } else {
          self.goToPrev();
        }
        // reset after animation done
        let timing = Xt.animDuration(slide);
        clearTimeout(slide.dataset.xtdragendTimeout);
        slide.dataset.xtdragendTimeout = setTimeout(function () {
          slide.style.opacity = '0';
          slide.style.transform = 'translateX(' + 0 + 'px)';
          slide.children[0].style.transform = 'translateX(' + 0 + 'px)';
        }, timing).toString();
      } else {
        // reset drag
        slide.style.opacity = '1';
        slide.style.transform = 'translateX(' + 0 + 'px)';
        slide.children[0].style.transform = 'translateX(' + 0 + 'px)';
      }
    });

  }

}