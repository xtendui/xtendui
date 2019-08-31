import {Xt} from 'xtend-library'
import 'xtend-library/src/extensions/animation/MouseFollow.js';

/**
 * .demo--loader--mouse-filler
 */

Xt.mount.push({
  matches: '.demo--loader--mouse-filler',
  fnc: function mount(object) {

    let mouseFollowObject = object;
    let mouseFollowContainer = mouseFollowObject.closest('.card');

    let mouseFollow = new Xt.MouseFollow(mouseFollowObject, mouseFollowContainer, {
      mouseCheck: function () {
        return !this.object.classList.contains('loader--disable') || this.object.classList.contains('loader--js');
      }
    });

    // unmount

    return function unmount() {
      mouseFollow.destroy();
    };

  }
});
