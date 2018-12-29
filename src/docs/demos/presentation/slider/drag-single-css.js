Xt.init.push({ // on DOM ready and on content added to DOM
  matches: '.slider',
  fnc: sliderInit
});

function sliderInit(main, index) {

  // slider

  let slider = new Xt.Slider(main, {
    "auto": 6000
  });

  let dragger = slider.dragger;

  // slider items

  for (let slide of slider.targets) {

    // on event

    slide.addEventListener('on.xt', function (e) {
      let xMax = slide.clientWidth;
      // if inital stop, don't do animation
      if (e.detail.object.detail.initial) {
        return false;
      }
      // dragging
      dragger.classList.add('dragging');
      // setup drag position
      dragger.style.opacity = '0';
      if (!slide.classList.contains('xt-inverse')) {
        dragger.style.transform = 'translateX(' + xMax + 'px)';
        dragger.children[0].style.transform = 'translateX(' + (-xMax) + 'px)';
      } else {
        dragger.style.transform = 'translateX(' + (-xMax) + 'px)';
        dragger.children[0].style.transform = 'translateX(' + xMax + 'px)';
      }
      // drag position
      window.cancelAnimationFrame(parseFloat(dragger.dataset.xtDragResetFrame));
      dragger.dataset.xtDragResetFrame = window.requestAnimationFrame(function () {
        // dragging
        dragger.classList.remove('dragging');
        dragger.dataset.xtDragResetFrame = window.requestAnimationFrame(function () {
          // reset drag
          dragger.style.opacity = '1';
          dragger.style.transform = 'translateX(' + 0 + 'px)';
          dragger.children[0].style.transform = 'translateX(' + 0 + 'px)';
        }).toString();
      }).toString();
    });

    // off event

    slide.addEventListener('off.xt', function (e) {
      let xMax = slide.clientWidth;
      // dragging
      dragger.classList.remove('dragging');
      // complete drag
      window.cancelAnimationFrame(parseFloat(dragger.dataset.xtDragResetFrame));
      if (!slide.classList.contains('xt-inverse')) {
        dragger.style.opacity = '0';
        dragger.style.transform = 'translateX(' + -xMax + 'px)';
        dragger.children[0].style.transform = 'translateX(' + xMax + 'px)';
      } else {
        dragger.style.opacity = '0';
        dragger.style.transform = 'translateX(' + xMax + 'px)';
        dragger.children[0].style.transform = 'translateX(' + -xMax + 'px)';
      }
    });

  }

  // dragstart event

  dragger.addEventListener('dragstart.xt.slider', function (e) {
    // dragging
    dragger.classList.add('dragging');
  });

  // drag event

  dragger.addEventListener('drag.xt.slider', function (e) {
    let slide = slider.targets.filter(x => x.classList.contains('active'))[0];
    let self = e.detail.object;
    let eInit = self.detail.eInit;
    let eCurrent = self.detail.eCurrent;
    let xStart = eInit.clientX;
    let xCurrent = eCurrent.clientX;
    let xDist = xCurrent - xStart;
    let xMax = slide.clientWidth;
    let ratio = 1 - (Math.abs(xStart - xCurrent) / xMax);
    // drag
    dragger.style.opacity = ratio.toString();
    dragger.style.transform = 'translateX(' + xDist + 'px)';
    dragger.children[0].style.transform = 'translateX(' + -xDist + 'px)';
  });

  // dragend event

  dragger.addEventListener('dragend.xt.slider', function (e) {
    let slide = slider.targets.filter(x => x.classList.contains('active'))[0];
    let self = e.detail.object;
    let eInit = self.detail.eInit;
    let eCurrent = self.detail.eCurrent;
    let xStart = eInit.clientX;
    let xCurrent = eCurrent.clientX;
    let xDist = xCurrent - xStart;
    // dragging
    dragger.classList.remove('dragging');
    // activate or reset
    if (Math.abs(xDist) > self.options.dragThreshold) {
      // direction
      if (Math.sign(xDist) < 0) {
        self.goToNext();
      } else {
        self.goToPrev();
      }
      // reset after animation done
      let timing = Xt.animDuration(dragger);
      clearTimeout(dragger.dataset.xtdragendTimeout);
      dragger.dataset.xtdragendTimeout = setTimeout(function () {
        dragger.style.opacity = '0';
        dragger.style.transform = 'translateX(' + 0 + 'px)';
        dragger.children[0].style.transform = 'translateX(' + 0 + 'px)';
      }, timing).toString();
    } else {
      // reset drag
      dragger.style.opacity = '1';
      dragger.style.transform = 'translateX(' + 0 + 'px)';
      dragger.children[0].style.transform = 'translateX(' + 0 + 'px)';
    }
  });

}