import { Xt } from 'xtendui'

Xt.mount.push({
  matches: '.demo--multilevel',
  mount: object => {
    // init

    let self = new Xt.Toggle(object, {
      elements: '.multilevel-reset, .multilevel-list > button',
      targets: ':scope > .toggle',
      min: 1,
    })

    // click

    const eventClick = () => {
      object.querySelector('.multilevel-reset').dispatchEvent(new CustomEvent('on.trigger.xt'))
    }

    const btns = object.querySelectorAll('.multilevel-reset')
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
