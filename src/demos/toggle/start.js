import { Xt } from 'xtend-library'

Xt.mount.push({
  matches: '#demo_toggle-restart',
  mount: function(object) {
    // click

    const eventClick = function() {
      // restart
      const toggles = document.querySelectorAll('[data-xt-toggle]')
      for (const toggle of toggles) {
        const self = Xt.get('xt-toggle', toggle)
        self.restart()
      }
    }

    object.addEventListener('click', eventClick)

    // unmount

    return function unmount() {
      object.removeEventListener('click', eventClick)
    }
  },
})
