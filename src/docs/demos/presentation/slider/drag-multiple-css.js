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
      let self = e.detail.object;
      // if inital stop, don't do animation
      if (e.detail.object.detail.initial) {
        return false;
      }
      // activation
      let xPos = dragger.offsetWidth / 2 - slide.offsetLeft - slide.offsetWidth / 2;
      dragger.style.transform = 'translateX(' + xPos + 'px)';
      self.detail.xCache = xPos;
    });

  }

  // dragstart event

  dragger.addEventListener('dragstart.xt.slider', function (e) {
    // inertia
    dragger.classList.remove('drag-inertia');
  });

  // drag event

  dragger.addEventListener('drag.xt.slider', function (e) {
    let self = e.detail.object;
    let eInit = self.detail.eInit;
    let eCurrent = self.detail.eCurrent;
    let xStart = eInit.clientX;
    let xCurrent = eCurrent.clientX;
    let xCache = self.detail.xCache || 0;
    let xDist = xCache + xCurrent - xStart;
    // drag
    dragger.style.transform = 'translateX(' + xDist + 'px)';
  });

  // dragend event

  dragger.addEventListener('dragend.xt.slider', function (e) {
    let self = e.detail.object;
    let xCache = self.detail.xCache || 0;
    // inertia
    dragger.classList.add('drag-inertia');
    // activate or reset
    let xPos = Xt.getTranslate(dragger)[0];
    let xDist = xPos - xCache;
    if (Math.abs(xDist) > self.options.dragThreshold) {
      // get nearest
      let found = 0;
      for (let [z, slideCheck] of dragger.querySelectorAll('.slide').entries()) {
        let check = xPos - dragger.offsetWidth / 2 + slideCheck.offsetLeft;
        if (check < 0) {
          found = z;
        }
      }
      if (found === self.curentIndex) {
        // change at least one
        if (Math.sign(xDist) < 0) {
          self.goToNext();
        } else {
          self.goToPrev();
        }
      } else {
        // goToIndex
        self.goToIndex(found, true);
      }
    } else {
      // reset
      dragger.style.transform = 'translateX(' + self.detail.xCache + 'px)';
    }
  });

}