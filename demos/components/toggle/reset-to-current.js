import { Xt } from 'xtendui'
import 'xtendui/src/toggle'

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

/* mountToggle */

const mountToggle = ({ ref }) => {
  // vars

  const toggle = ref.querySelector('[data-xt-toggle]')

  // init

  let self = Xt.get('xt-toggle', toggle)

  // off

  const off = e => {
    const tr = e.target
    // check because of event propagation
    if (self.targets.includes(tr)) {
      // reset to current when no activation
      if (self.currentIndex === null) {
        const current = self.targets.filter(x => x.classList.contains('current'))[0]
        current.dispatchEvent(new CustomEvent('on.trigger.xt.toggle'))
      }
    }
  }

  for (const tr of self.targets) {
    tr.addEventListener('off.xt.toggle', off)
  }

  // unmount

  return () => {}
}
