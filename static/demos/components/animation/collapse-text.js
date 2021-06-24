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
  // init

  /***/
  let self = new Xt.Toggle(ref, {
    elements: '.button--collapse',
    targets: '.target--collapse',
    max: 'Infinity',
    collapseHeight: 'targets',
    duration: 500,
  })
  /***/

  // disable if not overflowing and not on

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

  // unmount

  return () => {}
}
