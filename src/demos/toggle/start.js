import { Xt } from 'xtend-library'

/**
 * #demo--toggle--restart
 */

Xt.mount.push({
  matches: '#demo--toggle--restart',
  mount: function (object) {
    // event

    object.addEventListener('click', function (e) {
      // restart
      const toggles = document.querySelectorAll('[data-xt-toggle]')
      for (const toggle of toggles) {
        const self = Xt.get('xt-toggle', toggle)
        self.initStart()
      }
    })
  }
})
