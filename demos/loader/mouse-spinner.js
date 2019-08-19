import {mouseFollow} from 'xtend-library/extensions/general/mouse-follow';

/**
 * .demo--loader--mouse-spinner
 */

Xt.observe.push({
  matches: '.demo--loader--mouse-spinner',
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
