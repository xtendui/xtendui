import { Xt } from 'xtend-library'

/**
 * #demo--toggle-restart
 */

Xt.mount.push({
  matches: '#demo--toggle-restart',
  mount: function(object) {
    // click

    const eventClick = function() {
      // restart
      const toggles = document.querySelectorAll('[data-xt-toggle]')
      for (const toggle of toggles) {
        const self = Xt.get('xt-toggle', toggle)
        self.initStart()
      }
    }

    object.addEventListener('click', eventClick)

    // unmount

    return function unmount() {
      object.removeEventListener('click', eventClick)
    }
  },
})
