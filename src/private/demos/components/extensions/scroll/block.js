import { Xt } from 'xtend-library'

Xt.mount.push({
  matches: '.demo--scroll-block',
  mount: object => {
    // vars

    const btn = object.querySelector('.demo--scroll-block--btn')

    // init

    let self = new Xt.Scroll(object, {
      elements: '.card, .btn',
    })

    // eventBlock

    const eventBlock = () => {
      for (const element of self.elements) {
        // block
        if (element.classList.contains('xt-block')) {
          // unblock
          element.classList.remove('xt-block')
          // fade in
          element.dispatchEvent(new CustomEvent('on.trigger.xt'))
        } else {
          // fade out
          element.dispatchEvent(new CustomEvent('off.trigger.xt'))
          // block
          element.classList.add('xt-block')
        }
      }
    }

    btn.addEventListener('click', eventBlock)

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  },
})
