import { Xt } from 'xtend-library'

Xt.mount.push({
  matches: '.multilevel',
  mount: function(object) {
    // init

    let self = new Xt.Toggle(object, {
      elements: '.multilevel-tab-reset, .multilevel-tab .multilevel-list button',
      targets: '.multilevel-tab',
      min: 1,
    })

    // click

    const eventClick = function(e) {
      object.querySelector('.multilevel-tab-reset').dispatchEvent(new CustomEvent('on.trigger.xt'))
    }

    const btns = object.querySelectorAll('.multilevel-reset')
    for (const btn of btns) {
      btn.addEventListener('click', eventClick)
    }

    // unmount

    const unmount = function() {
      self.destroy()
      self = null
    }
    return unmount
  },
})
