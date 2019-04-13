/**
 * .parallax_title
 */

(function () {

  // vars

  let parallaxTitles = document.querySelectorAll('.parallax_title');

  for (let parallaxTitle of parallaxTitles) {

    // xt-scroll

    let self = Xt.init('xt-scroll', parallaxTitle, {
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

})();

/**
 * .parallax_img
 */

(function () {

  // vars

  let parallaxImgs = document.querySelectorAll('.parallax_img');

  for (let parallaxImg of parallaxImgs) {

    // xt-scroll

    let self = Xt.init('xt-scroll', parallaxImg, {
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

})();


/**
 * .parallax_footer
 */

(function () {

  // vars

  let parallaxFooters = document.querySelectorAll('.parallax_footer');

  for (let parallaxFooter of parallaxFooters) {

    // xt-scroll

    let self = Xt.init('xt-scroll', parallaxFooter, {
      "sticky": true,
      "start": "125%"
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

})();
