import { Xt } from 'xtendui'
import 'xtendui/src/drop'

Xt.mount({
  matches: '.demo--drop-reset-to-current',
  mount: ({ ref }) => {
    // vars

    const drop = ref.querySelector('[data-xt-drop]')
    Xt.get({ name: 'xt-drop', el: drop }).then(self => {
      // off

      const off = () => {
        /***/
        // reset to current when no activation
        if (self.index === null) {
          const current = self.targets.filter(x => x.classList.contains('current'))[0]
          current.dispatchEvent(new CustomEvent('on.trigger.xt.drop'))
        }
        /***/
      }

      for (const tr of self.targets) {
        tr.addEventListener('off.xt.drop', off)
      }
    })
  },
})
