import { Xt } from 'xtend-library'

Xt.mount.push({
  matches: '#overlay-nested-toggle',
  mount: function(object) {
    // event

    function click() {
      document.querySelector('#overlay-nested').dispatchEvent(new CustomEvent('on.trigger.xt'))
    }

    object.addEventListener('click', click)
  },
})
