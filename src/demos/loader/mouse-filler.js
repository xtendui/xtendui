import {Xt} from 'xtend-library'
import 'xtend-library/src/extensions/animation/mouse-follow.js';

/**
 * .demo--loader--mouse-filler
 */

Xt.mount.push({
  matches: '.demo--loader--mouse-filler',
  fnc: function mount(object) {

    let element = object;
    let container = element.closest('.card');

    let mouseFollow = new Xt.MouseFollow({
      object: element,
      container: container,
      mouseCheck: function (options) {
        return !this.object.classList.contains('loader--disable') || this.object.classList.contains('loader--js');
      }
    });

    // unmount

    return function unmount() {
      mouseFollow.destroy();
    };

  }
});
