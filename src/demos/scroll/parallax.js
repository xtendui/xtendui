import {Xt} from 'xtend-library'
import 'xtend-library/src/core/scroll/scroll'
import {TweenMax} from 'gsap/TweenMax'

/**
 * .demo--parallax_title
 */

Xt.mount.push({
  matches: '.demo--parallax_title',
  fnc: function mount(object) {

    // vars

    let parallaxTitle = object;

    // xt-scroll

    let self = new Xt.Scroll(parallaxTitle, {
      "sticky": "fixed",
      "end": 350
    });

    // event

    for (let el of self.elements) {

      // scroll change

      el.addEventListener('change.xt.scroll', function (e) {
        TweenMax.set(el, {transformOrigin: 'left center'});
        TweenMax.set(el, {opacity: self.detail.ratioInverse, scale: .9 + .1 * self.detail.ratioInverse});
      });

    }

    // unmount

    return function unmount() {
      self.destroy();
      self = null;
    };

  }
});


/**
 * .demo--parallax_img
 */

Xt.mount.push({
  matches: '.demo--parallax_img',
  fnc: function mount(object) {

    // vars

    let parallaxImg = object;

    // xt-scroll

    let self = new Xt.Scroll(parallaxImg, {
      "sticky": "fixed",
      "end": 350
    });

    // event

    for (let el of self.elements) {

      // scroll change

      el.addEventListener('change.xt.scroll', function (e) {
        TweenMax.set(el, {y: 100 * self.detail.ratio, opacity: self.detail.ratioInverse});
      });

    }

    // unmount

    return function unmount() {
      self.destroy();
      self = null;
    };

  }
});

/**
 * .demo--parallax_footer
 */

Xt.mount.push({
  matches: '.demo--parallax_footer',
  fnc: function mount(object) {

    // vars

    let parallaxFooter = object;

    // xt-scroll

    let self = new Xt.Scroll(parallaxFooter, {
      "sticky": true,
      "start": "125%"
    });

    // event

    for (let el of self.elements) {

      // scroll change

      el.addEventListener('change.xt.scroll', function (e) {
        TweenMax.set(el, {opacity: self.detail.ratio, scale: .9 + .1 * self.detail.ratio});
      });

    }

    // unmount

    return function unmount() {
      self.destroy();
      self = null;
    };

  }
});
