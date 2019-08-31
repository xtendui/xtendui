import {Xt} from 'xtend-library'
import 'xtend-library/src/extensions/form/TextareaAutosize.js';

/**
 * xtend extension: textarea-autosize
 */

Xt.mount.push({
  matches: 'textarea',
  fnc: function mount(object) {

    let self = new Xt.TextareaAutosize(object);

    // unmount

    return function unmount() {
      self.destroy();
    };

  }
});
