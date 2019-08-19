import {mouseFollow} from 'xtend-library/src/extensions/general/mouse-follow';

/**
 * .demo--loader--mouse-filler
 */

Xt.observe.push({
  matches: '.demo--loader--mouse-filler',
  fnc: function (main, index, query) {

    let element = main;
    let container = element.closest('.card');

    mouseFollow({
      element: element,
      container: container,
      mouseCheck: function (options) {
        return !options.element.classList.contains('loader--disable') || options.element.classList.contains('loader--js');
      }
    });

  }
});
