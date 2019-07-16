/**
 * .list
 */

(function () {

  // vars

  let timeHide = 300;
  let easeIn = new Ease(BezierEasing(.36, 0, 0, 1));
  let easeOut = new Ease(BezierEasing(1, 0, .64, 1));
  let easeInOut = new Ease(BezierEasing(.14,.63,0,1));

  let lists = document.querySelectorAll('.list');

  for (let list of lists) {

    // xt-toggle

    let self = Xt.init('xt-toggle', list, {
      "auto": {
        "time": 2000,
        "pause": ":scope > button"
      }
    });
    self.unmount = function () {
      self = null;
    };

    // auto start

    self.object.addEventListener('start.xt.auto', function (e) {
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

  }

})();
