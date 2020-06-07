import { Xt } from '/src/xt.js'

Xt.mount.push({
  matches: '#overlay-nested-toggle',
  mount: object => {
    // event

    function click() {
      document.querySelector('#overlay-nested').dispatchEvent(new CustomEvent('on.trigger.xt'))
    }

    object.addEventListener('click', click)
  },
})
