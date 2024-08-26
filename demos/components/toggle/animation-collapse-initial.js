import { Xt } from 'xtendui'
import 'xtendui/src/toggle'

Xt.mount({
  matches: '.demo--collapse-initial [data-xt-toggle]',
  mount: ({ ref }) => {
    // vars

    const toggle = ref

    // init

    const init = () => {
      Xt.get({ name: 'xt-toggle', el: toggle }).then(self => {
        // disable if not overflowing and not on
        for (const tr of self.targets) {
          if (tr.scrollHeight <= tr.clientHeight && tr.clientHeight > 0) {
            const els = self.getElements({ el: tr }).filter(x => !self.hasCurrent({ el: x }))
            if (els.length) {
              tr.style.maxHeight = 'none'
              for (const el of els) {
                el.classList.add('hidden')
              }
            }
          }
        }
      })
    }

    toggle.addEventListener('init.xt.toggle', init)
  },
})
