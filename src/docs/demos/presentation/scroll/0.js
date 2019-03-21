Xt.observe.push({
  matches: '#scroll-0',
  fnc: function (main, index, query) {

    // vars

    let easeIn = new Ease(BezierEasing(.36, 0, 0, 1));
    let easeOut = new Ease(BezierEasing(1, 0, .64, 1));
    let easeInOut = new Ease(BezierEasing(.68, .13, .25, 1));

    let timeTiny = .1;
    let timeSmall = .25;
    let timeMedium = .5;
    let timeBig = 1;
    let timeGiant = 2;

    // slider

    let self = Xt.init('xt-scroll', main, {
      "elements": ".scroll-0",
      "durationOn": timeMedium * 1000,
      "durationOff": timeMedium * 1000,
      "delayOn": "return Math.min(current * 75, 300)",
      "delayOff": "return Math.min((total - current) * 75, 300)"
    });
    self.unmount = function () {
      self = null;
    };

    // event

    for (let el of self.elements) {

      // scroll on

      el.addEventListener('on.xt', function (e) {
        TweenMax.set(el, {x: -25, opacity: 0});
        TweenMax.to(el, timeMedium, {x: 0, opacity: 1, ease: easeIn});
      });

      // scroll off

      el.addEventListener('off.xt', function (e) {
        TweenMax.to(el, timeMedium, {x: 25, opacity: 0, ease: easeOut});
      });

      // scroll change

      el.addEventListener('change.xt.scroll', function (e) {
        if (el.getAttribute('id') === 'test') {
          /*
          let topDist = e.detail.bottom - e.detail.scrollTop;
          let bottomDist = e.detail.scrollTop - e.detail.scrollHeight + e.detail.top;
          console.log(el, topDist, bottomDist);
          */
        }
      });

    }

  }
});