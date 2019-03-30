//////////////////////
// .parallax_title
//////////////////////

Xt.observe.push({
  matches: '.parallax_title',
  fnc: function (main, index, query) {

    // scroll

    let self = Xt.init('xt-scroll', main, {
      "scroll": {
        "sticky": true,
        "end": 350
      }
    });
    self.unmount = function () {
      self = null;
    };

    // event

    for (let el of self.elements) {

      // scroll change

      el.addEventListener('change.xt.scroll', function (e) {
        TweenMax.set(el, {transformOrigin: 'left center'});
        TweenMax.set(el, {opacity: e.detail.ratioInverse, scale: .9 + .1 * e.detail.ratioInverse});
      });

    }

  }
});

//////////////////////
// .parallax_img
//////////////////////

Xt.observe.push({
  matches: '.parallax_img',
  fnc: function (main, index, query) {

    // scroll

    let self = Xt.init('xt-scroll', main, {
      "scroll": {
        "sticky": true,
        "end": 350
      }
    });
    self.unmount = function () {
      self = null;
    };

    // event

    for (let el of self.elements) {

      // scroll change

      el.addEventListener('change.xt.scroll', function (e) {
        TweenMax.set(el, {y: 100 * e.detail.ratio, opacity: e.detail.ratioInverse});
      });

    }

  }
});

//////////////////////
// .parallax_footer
//////////////////////

Xt.observe.push({
  matches: '.parallax_footer',
  fnc: function (main, index, query) {

    // scroll

    let self = Xt.init('xt-scroll', main, {
      "scroll": {
        "sticky": true,
        "start": "125%"
      }
    });
    self.unmount = function () {
      self = null;
    };

    // event

    for (let el of self.elements) {

      // scroll change

      el.addEventListener('change.xt.scroll', function (e) {
        TweenMax.set(el, {opacity: e.detail.ratio, scale: .9 + .1 * e.detail.ratio});
      });

    }

  }
});
