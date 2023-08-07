import { Xt } from 'xtendui'
import 'xtendui/src/toggle'

/* mountToggle */

const mountToggle = ({ ref }) => {
  // vars

  const toggle = ref.querySelector('[data-xt-toggle]')
  const self = Xt.get({ name: 'xt-toggle', el: toggle })

  // off

  const off = () => {
    /***/
    // reset to current when no activation
    if (self.index === null) {
      const current = self.targets.filter(x => x.classList.contains('current'))[0]
      current.dispatchEvent(new CustomEvent('on.trigger.xt.toggle'))
    }
    /***/
  }

  for (const tr of self.targets) {
    tr.addEventListener('off.xt.toggle', off)
  }

  // unmount

  return () => {}
}

/* mount */

Xt.mount({
  matches: '.demo--toggle-reset-to-current',
  mount: ({ ref }) => {
    const unmountToggle = mountToggle({ ref })

    // unmount

    return () => {
      unmountToggle()
    }
  },
})
