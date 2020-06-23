import { Xt } from 'xtend-library/src/xt.js'

Xt.mount.push({
  matches: '.demo--scroll-block',
  mount: object => {
    // vars

    const btns = object.querySelectorAll('.demo--scroll-block--btn')

    // init

    let self = new Xt.Scroll(object, {
      elements: '.card, .btn',
    })

    // eventBlock

    const eventBlock = () => {
      for (const element of self.elements) {
        // fade out
        element.dispatchEvent(new CustomEvent('off.trigger.xt'))
        // block
        element.classList.add('xt-block')
        // this doesn't trigger because when .xt-block on and off are blocked
        element.dispatchEvent(new CustomEvent('on.trigger.xt'))
      }
    }

    for (const btn of btns) {
      btn.addEventListener('click', eventBlock)
    }

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  },
})
