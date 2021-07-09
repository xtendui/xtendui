import { Xt } from 'xtendui'
import 'xtendui/src/drop'

Xt.mount({
  matches: '.demo--drop-reset-to-current',
  mount: ({ ref }) => {
    const unmountDrops = mountDrops({ ref })

    // unmount

    return () => {
      unmountDrops()
    }
  },
})

/* mountDrops */

const mountDrops = ({ ref }) => {
  // vars

  const drop = ref.querySelector('[data-xt-drop]')

  // init

  const self = Xt.get('xt-drop', drop)

  // off

  const off = e => {
    const tr = e.target
    /***/
    // check because of event propagation
    if (self.targets.includes(tr)) {
      // reset to current when no activation
      if (self.currentIndex === null) {
        const current = self.targets.filter(x => x.classList.contains('current'))[0]
        current.dispatchEvent(new CustomEvent('on.trigger.xt.drop'))
      }
    }
    /***/
  }

  for (const tr of self.targets) {
    tr.addEventListener('off.xt.drop', off)
  }

  // unmount

  return () => {}
}
