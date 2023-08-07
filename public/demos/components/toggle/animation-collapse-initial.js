import { Xt } from 'xtendui'
import 'xtendui/src/toggle'

/* mountToggles */

const mountToggles = ({ ref }) => {
  // mount granularly

  Xt.mount({
    root: ref,
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

  const init = () => {
    const self = Xt.get({ name: 'xt-toggle', el: toggle })
    // disable if not overflowing and not on
    for (const tr of self.targets) {
      if (tr.scrollHeight <= tr.clientHeight) {
        const els = self.getElements({ el: tr }).filter(x => !self.hasCurrent({ el: x }))
        if (els.length) {
          tr.style.maxHeight = 'none'
          for (const el of els) {
            el.classList.add('hidden')
          }
        }
      }
    }
  }

  toggle.addEventListener('init.xt.toggle', init)

  // unmount

  return () => {}
}

/* mount */

Xt.mount({
  matches: '.demo--collapse-initial',
  mount: ({ ref }) => {
    const unmountToggles = mountToggles({ ref })

    // unmount

    return () => {
      unmountToggles()
    }
  },
})
