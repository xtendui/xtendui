import {mouseFollow} from 'xtend-library/src/extensions/general/mouse-follow';

/**
 * .demo--loader--mouse-spinner
 */

Xt.mount.push({
  matches: '.demo--loader--mouse-spinner',
  fnc: function mount(main, index, query) {

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
