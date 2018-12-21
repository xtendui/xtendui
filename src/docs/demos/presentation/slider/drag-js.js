Xt.init.push({ // on DOM ready and on content added to DOM
  matches: '.slider',
  fnc: sliderInit
});

function sliderInit(main, index) {

  // vars

  let time = .6;
  let size = 100;

  let timeContent = .6;
  let delayContent = .15;
  let sizeContent = 100;
  let delayContentMax = delayContent * 2;
  let durationContent = timeContent + delayContentMax;

  let timeDesign = .6;
  let delayDesign = .15;
  let sizeDesign = 100;
  let delayDesignMax = delayDesign * 2;
  let durationDesign = timeDesign + delayDesignMax;

  CustomEase.create('easeIn', '.41, .1, .175, 1');
  CustomEase.create('easeOut', '.77, 0, .175, 1');

  // slider

  new Xt.Slider(main, {
    "auto": 6000,
    "drag": true,
    "durationOn": time * 1000,
    "durationOff": time * 1000
  });

  // slider items

  for (let tr of main.querySelectorAll('.slide')) {

    // on event

    tr.addEventListener('on.xt', function (e) {
      let target = this;
      let xMax = target.clientWidth;
      // content
      for (let [i, content] of target.querySelectorAll('.card_content > *').entries()) {
        content.dataset.tlDelay = Math.min(delayContent * i, delayContentMax).toString();
      }
      // design
      for (let [i, design] of target.querySelectorAll('.card_design').entries()) {
        design.dataset.tlDelay = Math.min(delayDesign * i, delayDesignMax).toString();
      }
      // if inital stop, don't do animation
      if (e.detail.object.detail.initial) {
        return false;
      }
      // setup drag position
      TweenMax.set(target, {opacity: 0});
      if (!target.classList.contains('xt-inverse')) {
        // mask
        TweenMax.set(target, {x: xMax});
        TweenMax.set(target.children[0], {x: -xMax});
        TweenMax.set(target.children[0].children[0], {x: size});
        TweenMax.to(target.children[0].children[0], time, {x: 0, ease: 'easeIn'});
        // content
        for (let content of target.querySelectorAll('.card_content > *')) {
          TweenMax.set(content, {x: sizeContent, opacity: 0});
          setTimeout(function () {
            TweenMax.to(content, timeContent, {x: 0, opacity: 1, ease: 'easeIn'});
          }, parseFloat(content.dataset.tlDelay) * 1000);
        }
        // design
        for (let design of target.querySelectorAll('.card_design')) {
          TweenMax.set(design, {x: sizeDesign, opacity: 0});
          setTimeout(function () {
            TweenMax.to(design, timeDesign, {x: 0, opacity: 1, ease: 'easeIn'});
          }, parseFloat(design.dataset.tlDelay) * 1000);
        }
      } else {
        // mask
        TweenMax.set(target, {x: -xMax});
        TweenMax.set(target.children[0], {x: xMax});
        TweenMax.set(target.children[0].children[0], {x: -size});
        TweenMax.to(target.children[0].children[0], time, {x: 0, ease: 'easeIn'});
        // content
        for (let content of target.querySelectorAll('.card_content > *')) {
          TweenMax.set(content, {x: -sizeContent, opacity: 0});
          setTimeout(function () {
            TweenMax.to(content, timeContent, {x: 0, opacity: 1, ease: 'easeIn'});
          }, parseFloat(content.dataset.tlDelay) * 1000);
        }
        // design
        for (let design of target.querySelectorAll('.card_design')) {
          TweenMax.set(design, {x: -sizeDesign, opacity: 0});
          setTimeout(function () {
            TweenMax.to(design, timeDesign, {x: 0, opacity: 1, ease: 'easeIn'});
          }, parseFloat(design.dataset.tlDelay) * 1000);
        }
      }
      // drag position
      TweenMax.to(target, time, {x: 0, opacity: 1, ease: 'easeIn'});
      TweenMax.to(target.children[0], time, {x: 0, ease: 'easeIn'});
    });

    // off event

    tr.addEventListener('off.xt', function (e) {
      let target = this;
      let xMax = target.clientWidth;
      // complete drag
      if (!target.classList.contains('xt-inverse')) {
        // mask
        TweenMax.to(target, time, {x: -xMax, opacity: 0, ease: 'easeOut'});
        TweenMax.to(target.children[0], time, {x: xMax, ease: 'easeOut'});
        // content
        for (let content of target.querySelectorAll('.card_content > *')) {
          setTimeout(function () {
            TweenMax.to(content, timeContent, {x: -sizeContent, opacity: 0, ease: 'easeOut'});
          }, parseFloat(content.dataset.tlDelay) * 1000);
        }
        // design
        for (let design of target.querySelectorAll('.card_design')) {
          setTimeout(function () {
            TweenMax.to(design, timeDesign, {x: -sizeDesign, opacity: 0, ease: 'easeOut'});
          }, parseFloat(design.dataset.tlDelay) * 1000);
        }
      } else {
        // mask
        TweenMax.to(target, time, {x: xMax, opacity: 0, ease: 'easeOut'});
        TweenMax.to(target.children[0], time, {x: -xMax, ease: 'easeOut'});
        // content
        for (let content of target.querySelectorAll('.card_content > *')) {
          setTimeout(function () {
            TweenMax.to(content, timeContent, {x: sizeContent, opacity: 0, ease: 'easeOut'});
          }, parseFloat(content.dataset.tlDelay) * 1000);
        }
        // design
        for (let design of target.querySelectorAll('.card_design')) {
          setTimeout(function () {
            TweenMax.to(design, timeDesign, {x: sizeDesign, opacity: 0, ease: 'easeOut'});
          }, parseFloat(design.dataset.tlDelay) * 1000);
        }
      }
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
      let ratio = Math.abs(xStart - xCurrent) / xMax;
      // mask
      TweenMax.set(target, {x: xDist + 'px', opacity: 1 - ratio});
      TweenMax.set(target.children[0], {x: -xDist});
      // content
      if (xStart - xCurrent > 0) {
        for (let content of target.querySelectorAll('.card_content > *')) {
          let ratioWithDelay = (durationContent - parseFloat(content.dataset.tlDelay)) * ratio / timeContent;
          TweenMax.set(content, {x: -sizeContent * ratioWithDelay, opacity: 1 - ratioWithDelay});
        }
      } else {
        for (let content of target.querySelectorAll('.card_content > *')) {
          let ratioWithDelay = (durationContent - parseFloat(content.dataset.tlDelay)) * ratio / timeContent;
          TweenMax.set(content, {x: sizeContent * ratioWithDelay, opacity: 1 - ratioWithDelay});
        }
      }
      // design
      if (xStart - xCurrent > 0) {
        for (let design of target.querySelectorAll('.card_design')) {
          let ratioWithDelay = (durationDesign - parseFloat(design.dataset.tlDelay)) * ratio / timeDesign;
          TweenMax.set(design, {x: -sizeDesign * ratioWithDelay, opacity: 1 - ratioWithDelay});
        }
      } else {
        for (let design of target.querySelectorAll('.card_design')) {
          let ratioWithDelay = (durationDesign - parseFloat(design.dataset.tlDelay)) * ratio / timeDesign;
          TweenMax.set(design, {x: sizeDesign * ratioWithDelay, opacity: 1 - ratioWithDelay});
        }
      }
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
      // activate or reset
      if (Math.abs(xDist) > self.options.dragThreshold) {
        // direction
        if (Math.sign(xDist) < 0) {
          self.goToNext();
        } else {
          self.goToPrev();
        }
      } else {
        // mask
        TweenMax.to(target, time, {x: 0, opacity: 1, ease: 'easeOut'});
        TweenMax.to(target.children[0], time, {x: 0, ease: 'easeOut'});
        // content
        for (let content of target.querySelectorAll('.card_content > *')) {
          TweenMax.to(content, timeContent, {x: 0, opacity: 1, ease: 'easeOut'});
        }
        // design
        for (let design of target.querySelectorAll('.card_design')) {
          TweenMax.to(design, timeDesign, {x: 0, opacity: 1, ease: 'easeOut'});
        }
      }
    });

  }

}