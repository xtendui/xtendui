Xt.observe.push({
  matches: '.slider',
  fnc: function (main, index, query) {

    // vars

    let time = .8;
    let timeMask = .8;
    let timeContent = .8;
    let sizeContent = 100;
    let easeIn = new Ease(BezierEasing(.36,0,0,1));
    let easeOut = new Ease(BezierEasing(1,0,.64,1));
    let easeInOut = new Ease(BezierEasing(.68,.13,.25,1));

    // slider

    let self = Xt.init('xt-slider', main, {
      "durationOn": time * 1000,
      "durationOff": time * 1000,
      "instant": false
    });
    self.unmount = function() {
      self = null;
    };

    // drag

    self.dragger.addEventListener('drag.xt.slider', function (e) {
      let target = self.targets.filter(x => x.classList.contains('active'))[0];
      let ratio = Math.abs(self.detail.xStart - self.detail.xCurrent) / target.clientWidth;
      // direction
      let direction = 1;
      if (self.detail.xStart - self.detail.xCurrent > 0) {
        direction = -1;
      }
      // mask
      TweenMax.set(target, {x: -self.detail.xPos + 'px', opacity: 1});
      TweenMax.set(self.dragger, {x: self.detail.xPos});
      // content
      let contents = target.querySelectorAll('.card_content > *');
      for (let content of contents) {
        TweenMax.set(content, {x: sizeContent * ratio * direction, opacity: 1});
      }
    });

    // dragend

    self.dragger.addEventListener('dragreset.xt.slider', function (e) {
      let target = self.targets.filter(x => x.classList.contains('active'))[0];
      // mask
      TweenMax.set(target, {x: -self.detail.xPosOld + 'px'});
      TweenMax.to(target, timeMask, {x: 0, opacity: 1, ease: easeInOut});
      TweenMax.set(self.dragger, {x: self.detail.xPosOld});
      TweenMax.to(self.dragger, timeMask, {x: 0, ease: easeInOut});
      // content
      let contents = target.querySelectorAll('.card_content > *');
      for (let content of contents) {
        TweenMax.to(content, timeContent, {x: 0, opacity: 1, ease: easeInOut});
      }
    });

    // targets

    for (let target of self.targets) {

      // on

      target.addEventListener('on.xt', function (e) {
        if (!self.initial) {
          let xMax = target.clientWidth;
          // direction
          let direction = 1;
          if (target.classList.contains('inverse')) {
            direction = -1;
          }
          // setup
          TweenMax.set(target, {opacity: 0});
          // mask
          TweenMax.set(target, {x: -xMax * direction});
          TweenMax.to(target, timeMask, {x: 0, opacity: 1, ease: easeInOut});
          TweenMax.set(self.dragger, {x: xMax * direction});
          TweenMax.to(self.dragger, timeMask, {x: 0, ease: easeInOut});
          // content
          let contents = target.querySelectorAll('.card_content > *');
          for (let content of contents) {
            TweenMax.set(content, {x: sizeContent * direction, opacity: 0});
            TweenMax.to(content, timeContent, {x: 0, opacity: 1, ease: easeInOut});
          }
        }
      });

      // off

      target.addEventListener('off.xt', function (e) {
        let xMax = target.clientWidth;
        // direction
        let direction = 1;
        if (target.classList.contains('inverse')) {
          direction = -1;
        }
        // mask
        TweenMax.to(target, timeMask, {x: xMax * direction, opacity: 0, ease: easeInOut});
        TweenMax.to(self.dragger, timeMask, {x: -xMax * direction, ease: easeInOut});
        // content
        let contents = target.querySelectorAll('.card_content > *');
        for (let content of contents) {
          TweenMax.to(content, timeContent, {x: -sizeContent * direction, opacity: 0, ease: easeInOut});
        }
      });

    }

  }
});
