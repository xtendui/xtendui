import {mouseFollow} from 'xtend-library/components/mouse-follow';

/**
 * mouseFollow
 */

let element = document.querySelector('.loader--mouse');
let container = document.closest('.card');

mouseFollow({
  element: element,
  container: container,
  mouseCheck: function(options) {
    return !options.element.classList.contains('loader--disable') || options.element.classList.contains('loader--js');
  }
});
