import {MouseFollow} from 'xtend-library/src/extensions/animation/mouse-follow';

/**
 * .demo--loader--mouse-spinner
 */

Xt.mount.push({
  matches: '.demo--loader--mouse-spinner',
  fnc: function mount(object) {

    let element = object;
    let container = element.closest('.card');

    let mouseFollow = new MouseFollow({
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
