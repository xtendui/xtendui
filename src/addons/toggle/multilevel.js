import { Xt } from 'xtend-library'

Xt.mount.push({
  matches: '.multilevel',
  mount: function(object) {
    // init

    const self = new Xt.Toggle(object, {
      elements: '.multilevel-tab-reset, .multilevel-tab .multilevel-list button',
      targets: '.multilevel-tab',
      min: 1,
    })

    // btnReset

    const btns = object.querySelectorAll('.multilevel-reset')
    for (const btn of btns) {
      btn.addEventListener('click', function() {
        object.querySelector('.multilevel-tab-reset').dispatchEvent(new CustomEvent('on.xt'))
      })
    }

    // unmount

    return function unmount() {
      self.destroy()
      self = null
    }
  },
})
