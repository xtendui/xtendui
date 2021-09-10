import { Xt } from 'xtendui'
import 'xtendui/src/toggle'

Xt.mount({
  matches: '.demo--toggle-reset-to-current',
  mount: ({ ref }) => {
    const unmountToggles = mountToggles({ ref })

    // unmount

    return () => {
      unmountToggles()
    }
  },
})

/* mountToggles */

const mountToggles = ({ ref }) => {
  // mount granularly

  Xt.mount({
    root: ref,
    raf: false,
    matches: '[data-xt-toggle]',
    mount: ({ ref }) => {
      return mountToggle({ ref })
    },
  })

  // unmount

  return () => {}
}

/* mountToggle */

const mountToggle = ({ ref }) => {
  // vars

  const toggle = ref

  // init

  const init = e => {
    const toggle = e.target
    const self = Xt.get({ name: 'xt-toggle', el: toggle })

    // off

    const off = e => {
      const tr = e.target
      /***/
      // check because of event propagation
      if (self.targets.includes(tr)) {
        // reset to current when no activation
        if (self.index === null) {
          const current = self.targets.filter(x => x.classList.contains('current'))[0]
          current.dispatchEvent(new CustomEvent('on.trigger.xt.toggle'))
        }
      }
      /***/
    }

    for (const tr of self.targets) {
      tr.addEventListener('off.xt.toggle', off)
    }
  }

  toggle.addEventListener('init.xt.toggle', init)

  // unmount

  return () => {}
}
