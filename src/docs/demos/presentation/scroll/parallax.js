Xt.observe.push({
  matches: '#scroll-0',
  fnc: function (main, index, query) {

    // slider

    let self = Xt.init('xt-scroll', main, {
      "elements": ".scroll-0"
    });
    self.unmount = function () {
      self = null;
    };

    // event

    for (let el of self.elements) {

      // scroll change

      el.addEventListener('change.xt.scroll', function (e) {
        TweenMax.set(el, {transformOrigin: 'left center'});
        TweenMax.set(el, {opacity: e.detail.ratioDouble, scale: .9 + .2 * e.detail.ratioDouble});
      });

    }

  }
});