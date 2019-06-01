import {Xt} from "xtend-library";
import {TweenMax} from "gsap/TweenMax";

Xt.ready(function () {

  /**
   * .parallax_title
   */

    // vars

  let parallaxTitle = document.querySelector('.parallax_title');

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

});

/**
 * .parallax_img
 */

Xt.ready(function () {

  // vars

  let parallaxImg = document.querySelector('.parallax_img');

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

});

/**
 * .parallax_footer
 */

Xt.ready(function () {

  // vars

  let parallaxFooter = document.querySelector('.parallax_footer');

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

});


