import { Xt } from 'xtendui'

Xt.mount.push({
  matches: '.demo--multilevel',
  mount: object => {
    // init

    let self = new Xt.Toggle(object, {
      elements: '[data-multilevel-reset], [data-multilevel-element]',
      targets: '[data-multilevel-tab]',
      min: 1,
    })

    // click

    const eventClick = () => {
      object.querySelector('[data-multilevel-reset]').dispatchEvent(new CustomEvent('on.trigger.xt'))
    }

    const btns = object.querySelectorAll('[data-multilevel-reset]')
    for (const btn of btns) {
      btn.addEventListener('click', eventClick)
    }

    // unmount

    return () => {
      self.destroy()
      self = null
    }
  },
})
