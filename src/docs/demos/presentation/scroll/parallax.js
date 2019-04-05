//////////////////////
// .parallax_title
//////////////////////

Xt.observe.push({
  matches: '.parallax_title',
  fnc: function (main, index, query) {

    // scroll

    let self = Xt.init('xt-scroll', main, {
      "sticky": "fixed",
      "end": 350
    });
    self.unmount = function () {
      self = null;
    };

    // event

    for (let el of self.elements) {

      // scroll change

      el.addEventListener('change.xt.scroll', function (e) {
        TweenMax.set(el, {transformOrigin: 'left center'});
        TweenMax.set(el, {opacity: self.detail.ratioInverse, scale: .9 + .1 * self.detail.ratioInverse});
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
      "sticky": "fixed",
      "end": 350
    });
    self.unmount = function () {
      self = null;
    };

    // event

    for (let el of self.elements) {

      // scroll change

      el.addEventListener('change.xt.scroll', function (e) {
        TweenMax.set(el, {y: 100 * self.detail.ratio, opacity: self.detail.ratioInverse});
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
        TweenMax.set(el, {opacity: self.detail.ratio, scale: .9 + .1 * self.detail.ratio});
      });

    }

  }
});
