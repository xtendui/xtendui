import {Xt} from 'xtend-library'
import {Scroll} from 'xtend-library/src/components/scroll/scroll'
import {TweenMax} from 'gsap/TweenMax'

/**
 * .demo--parallax_title
 */

Xt.mount.push({
  matches: '.demo--parallax_title',
  fnc: function mount(main, index, query) {

    // vars

    let parallaxTitle = main;

    // xt-scroll

    let self = new Scroll(parallaxTitle, {
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

  }
});


/**
 * .demo--parallax_img
 */

Xt.mount.push({
  matches: '.demo--parallax_img',
  fnc: function mount(main, index, query) {

    // vars

    let parallaxImg = main;

    // xt-scroll

    let self = new Scroll(parallaxImg, {
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

  }
});

/**
 * .demo--parallax_footer
 */

Xt.mount.push({
  matches: '.demo--parallax_footer',
  fnc: function mount(main, index, query) {

    // vars

    let parallaxFooter = main;

    // xt-scroll

    let self = new Scroll(parallaxFooter, {
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

  }
});
