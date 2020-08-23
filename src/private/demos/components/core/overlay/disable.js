import { Xt } from 'xtend-library'

Xt.mount.push({
  matches: '#demo--overlay-nested-disable-toggle',
  mount: object => {
    // event

    const click = () => {
      document.querySelector('#demo--overlay-nested-disable').dispatchEvent(new CustomEvent('on.trigger.xt'))
    }

    object.addEventListener('click', click)
  },
})
