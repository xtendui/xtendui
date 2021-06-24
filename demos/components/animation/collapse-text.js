import { Xt } from 'xtendui'
import 'xtendui/src/toggle'

Xt.mount({
  matches: '.demo--collapse-text',
  mount: ({ ref }) => {
    const unmountCollapse = mountCollapse({ ref })

    // unmount

    return () => {
      unmountCollapse()
    }
  },
})

/* mountCollapse */

const mountCollapse = ({ ref }) => {
  // vars

  const buttons = ref.querySelectorAll('.button--collapse')

  // disable if not overflowing and not on

  for (const button of buttons) {
    const self = Xt.get('xt-toggle', button)
    for (const tr of self.targets) {
      if (tr.scrollHeight <= tr.clientHeight) {
        const elements = self.getElements(tr).filter(x => !self.hasCurrent(x))
        if (elements.length) {
          tr.style.maxHeight = 'none'
          for (const el of elements) {
            el.classList.add('hidden')
          }
        }
      }
    }
  }

  // unmount

  return () => {}
}
