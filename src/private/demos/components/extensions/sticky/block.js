import { Xt } from 'xtend-library'

Xt.mount.push({
  matches: '.demo--sticky-block',
  mount: object => {
    // vars

    const btn = object.querySelector('.demo--sticky-block--btn')

    // init

    let self = new Xt.Sticky(object, {
      sticky: 'absolute',
    })

    // eventBlock

    const eventBlock = () => {
      for (const element of self.elements) {
        // block
        if (element.classList.contains('xt-block')) {
          // unblock
          element.classList.remove('xt-block')
          // recheck
          dispatchEvent(new CustomEvent('sticky.trigger.xt'))
        } else {
          // recheck
          dispatchEvent(new CustomEvent('sticky.trigger.xt'))
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
