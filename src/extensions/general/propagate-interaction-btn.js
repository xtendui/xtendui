import {Xt} from 'xtend-library'
import 'xtend-library/src/extensions/general/propagate-interaction.js';

/**
 * xtend extension: propagate-interaction-btn
 */

Xt.mount.push({
  matches: 'a, button',
  fnc: function mount(object) {

    let propagateInteractionObject = object;
    let propagateInteraction = new Xt.PropagateInteraction(propagateInteractionObject, {'targets': '.btn'});

    // unmount

    return function unmount() {
      propagateInteraction.destroy();
    };

  }
});
