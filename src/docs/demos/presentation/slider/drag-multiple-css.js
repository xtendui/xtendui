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
      let slides = Xt.parents(this, '.slides')[0];
      let xMax = slides.clientWidth;
      // if inital stop, don't do animation
      if (e.detail.object.detail.initial) {
        return false;
      }
      // activation
      let pos = - slides.offsetWidth + slide.offsetLeft + slide.offsetWidth / 2;
      slides.style.transform = 'translateX(' + pos + 'px)';
      self.detail.xCache = pos;
    });

    // off event

    slide.addEventListener('off.xt', function (e) {
      let slide = this;
      let slides = Xt.parents(this, '.slides')[0];
      let xMax = slides.clientWidth;
    });

    // dragstart event

    slide.addEventListener('dragstart.xt.slider', function (e) {
      let slide = this;
      let slides = Xt.parents(this, '.slides')[0];
      // inertia
      slides.classList.remove('drag-inertia');
    });

    // drag event

    slide.addEventListener('drag.xt.slider', function (e) {
      let slide = this;
      let slides = Xt.parents(this, '.slides')[0];
      let self = e.detail.object;
      let eInit = self.detail.eInit;
      let eCurrent = self.detail.eCurrent;
      let xCache =  self.detail.xCache || 0;
      let xStart =  eInit.clientX;
      let xCurrent = eCurrent.clientX;
      let xDist = xCache + xCurrent - xStart;
      let xMax = slides.clientWidth;
      let ratio = 1 - (Math.abs(xStart - xCurrent) / xMax);
      // drag
      slides.style.transform = 'translateX(' + xDist + 'px)';
    });

    // dragend event

    slide.addEventListener('dragend.xt.slider', function (e) {
      let slide = this;
      let slides = Xt.parents(this, '.slides')[0];
      let self = e.detail.object;
      let eInit = self.detail.eInit;
      let eCurrent = self.detail.eCurrent;
      let xCache =  self.detail.xCache || 0;
      let xStart = eInit.clientX;
      let xCurrent = eCurrent.clientX;
      let xDist = xCache + xCurrent - xStart;
      // inertia
      slides.classList.add('drag-inertia');
      // activate or reset
      let translateX = Xt.getTranslate(slides)[0];
      if (Math.abs(translateX - xCache) > self.options.dragThreshold) {
        // get nearest
        let found = null;
        for (let [z, s] of slides.querySelectorAll('.slide').entries()) {
          let pos = translateX - slides.offsetWidth + s.offsetLeft + s.offsetWidth / 2;
          if (pos < 0) {
            found = z;
          }
          console.log(pos, z, found);
        }
        self.goToIndex(found);
      } else {
        // reset
        let pos = xDist;
        self.detail.xCache = pos;
      }
    });

  }

}