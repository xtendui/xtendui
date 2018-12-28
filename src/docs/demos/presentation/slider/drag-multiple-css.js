Xt.init.push({ // on DOM ready and on content added to DOM
  matches: '.slider',
  fnc: sliderInit
});

function sliderInit(main, index) {

  // slider

  new Xt.Slider(main, {
    "drag": true
  });

  // slider items

  for (let slide of main.querySelectorAll('.slide')) {

    // on event

    slide.addEventListener('on.xt', function (e) {
      let slide = this;
      let slides = Xt.parents(slide, '.slides')[0];
      let self = e.detail.object;
      // if inital stop, don't do animation
      if (e.detail.object.detail.initial) {
        return false;
      }
      // activation
      let xPos = slides.offsetWidth / 2 - slide.offsetLeft - slide.offsetWidth / 2;
      slides.style.transform = 'translateX(' + xPos + 'px)';
      self.detail.xCache = xPos;
    });

    // dragstart event

    slide.addEventListener('dragstart.xt.slider', function (e) {
      let slide = this;
      let slides = Xt.parents(slide, '.slides')[0];
      // inertia
      slides.classList.remove('drag-inertia');
    });

    // drag event

    slide.addEventListener('drag.xt.slider', function (e) {
      let slide = this;
      let slides = Xt.parents(slide, '.slides')[0];
      let self = e.detail.object;
      let eInit = self.detail.eInit;
      let eCurrent = self.detail.eCurrent;
      let xStart =  eInit.clientX;
      let xCurrent = eCurrent.clientX;
      let xCache =  self.detail.xCache || 0;
      let xDist = xCache + xCurrent - xStart;
      // drag
      slides.style.transform = 'translateX(' + xDist + 'px)';
    });

    // dragend event

    slide.addEventListener('dragend.xt.slider', function (e) {
      let slide = this;
      let slides = Xt.parents(slide, '.slides')[0];
      let self = e.detail.object;
      let xCache =  self.detail.xCache || 0;
      // inertia
      slides.classList.add('drag-inertia');
      // activate or reset
      let xPos = Xt.getTranslate(slides)[0];
      let xDist = xPos - xCache;
      if (Math.abs(xDist) > self.options.dragThreshold) {
        // get nearest
        let found = 0;
        for (let [z, slideCheck] of slides.querySelectorAll('.slide').entries()) {
          let check = xPos - slides.offsetWidth / 2 + slideCheck.offsetLeft;
          if (check < 0) {
            found = z;
          }
          //console.log(check, z, found); // @TODO ora se passa la metà esatta cambia, di dovrebbe fare quando pass il dragThreshold cambia di almeno uno
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
        slides.style.transform = 'translateX(' + self.detail.xCache + 'px)';
      }
    });

  }

}