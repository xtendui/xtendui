/**
 * .slider
 */

(function () {

  // vars

  let timeHide = 300;
  let easeIn = new Ease(BezierEasing(.36, 0, 0, 1));
  let easeOut = new Ease(BezierEasing(1, 0, .64, 1));
  let easeInOut = new Ease(BezierEasing(.68, .13, .25, 1));

  let sliders = document.querySelectorAll('.slider');

  for (let slider of sliders) {

    // xt-slider

    let self = Xt.init('xt-slider', slider, {
      "auto": {
        "time": 4000,
        "pause": "[data-xt-pag]"
      }
    });
    self.unmount = function () {
      self = null;
    };

    // auto start

    self.object.addEventListener('start.xt.auto', function (e) {
      // on slider
      let spinner = self.object.querySelectorAll('.spinner svg:nth-child(2) circle');
      let timeline = new TimelineMax();
      timeline.to(spinner, timeHide / 1000, {strokeDashoffset: 628, ease: easeInOut, autoRound: false});
      timeline.to(spinner, (self.options.auto.time / 1000) - (timeHide / 1000), {
        strokeDashoffset: 0,
        ease: easeInOut,
        autoRound: false
      });
      // on elements
      let elements = self.elements.filter(x => x.classList.contains('active'));
      for (let element of elements) {
        let fillers = element.querySelectorAll('.filler span:nth-child(2)');
        for (let filler of fillers) {
          TweenMax.set(filler, {height: 0, top: '100%', ease: easeInOut});
          TweenMax.to(filler, self.options.auto.time / 1000, {height: '100%', top: 0, ease: easeInOut});
        }
      }
      // on targets
      let targets = self.targets.filter(x => x.classList.contains('active'));
      for (let target of targets) {
        let fillers = target.querySelectorAll('.filler span:nth-child(2)');
        for (let filler of fillers) {
          TweenMax.set(filler, {width: 0, left: 0, ease: easeInOut});
          TweenMax.to(filler, self.options.auto.time / 1000, {width: '100%', left: 0, ease: easeInOut});
        }
      }
    });

    // auto stop

    self.object.addEventListener('stop.xt.auto', function (e) {
      // on elements
      let elements = self.elements.filter(x => x.classList.contains('active'));
      for (let element of elements) {
        let fillers = element.querySelectorAll('.filler span:nth-child(2)');
        for (let filler of fillers) {
          TweenMax.to(filler, timeHide / 1000, {height: 0, top: 0, ease: easeInOut});
        }
      }
      // on targets
      let targets = self.targets.filter(x => x.classList.contains('active'));
      for (let target of targets) {
        let fillers = target.querySelectorAll('.filler span:nth-child(2)');
        for (let filler of fillers) {
          TweenMax.to(filler, timeHide / 1000, {width: 0, left: '100%', ease: easeInOut});
        }
      }
    });

    // auto pause

    self.object.addEventListener('pause.xt.auto', function (e) {
      // on slider
      let spinner = self.object.querySelectorAll('.spinner svg:nth-child(2) circle');
      TweenMax.to(spinner, timeHide / 1000, {strokeDashoffset: 628, ease: easeInOut, autoRound: false});
      // on elements
      let elements = self.elements.filter(x => x.classList.contains('active'));
      for (let element of elements) {
        let fillers = element.querySelectorAll('.filler span:nth-child(2)');
        for (let filler of fillers) {
          TweenMax.to(filler, timeHide / 1000, {height: 0, top: '100%', ease: easeInOut});
        }
      }
      // on targets
      let targets = self.targets.filter(x => x.classList.contains('active'));
      for (let target of targets) {
        let fillers = target.querySelectorAll('.filler span:nth-child(2)');
        for (let filler of fillers) {
          TweenMax.to(filler, timeHide / 1000, {width: 0, left: 0, ease: easeInOut});
        }
      }
    });

    // follow mouse

    let loader = document.querySelector('.loader--mouse');
    let container = slider;
    let width;
    let height;

    function mousemove(e) {
      // fix initial
      if (width === undefined) {
        mouseenter(e);
      }
      // position
      Xt.friction(loader, {
        "x": e.clientX + width / 2,
        "y": e.clientY + height / 2
      });
    }

    function mouseenter(e) {
      if (!loader.classList.contains('loader--disable') || loader.classList.contains('loader--js')) {
        // size
        let rect = loader.getBoundingClientRect();
        width = rect.width;
        height = rect.height;
        // class
        loader.classList.add('active');
        loader.classList.remove('out');
      }
    }

    function mouseleave(e) {
      if (!loader.classList.contains('loader--disable') || loader.classList.contains('loader--js')) {
        // class
        loader.classList.remove('active');
        loader.classList.add('out');
      }
    }

    container.removeEventListener('mousemove', mousemove);
    container.addEventListener('mousemove', mousemove);
    container.removeEventListener('mouseenter', mouseenter);
    container.addEventListener('mouseenter', mouseenter);
    container.removeEventListener('mouseleave', mouseleave);
    container.addEventListener('mouseleave', mouseleave);

  }

})();

