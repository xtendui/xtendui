import { Xt } from 'xtendui'

Xt.mount.push({
  matches: '.demo--multilevel',
  mount: ({ object }) => {
    // vars

    const resetInitial = object.querySelector('.multilevel-reset')

    // init

    let self = new Xt.Toggle(object, {
      elements: '.multilevel-reset, .multilevel-list > button',
      targets: ':scope > .xt-toggle',
      min: 1,
      instant: true,
    })

    // click

    const eventClick = () => {
      resetInitial.dispatchEvent(new CustomEvent('on.trigger.xt.toggle'))
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
