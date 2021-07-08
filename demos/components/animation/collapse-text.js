import { Xt } from 'xtendui'
import 'xtendui/src/toggle'

Xt.mount({
  matches: '.demo--collapse-text',
  mount: ({ ref }) => {
    const unmountCollapses = mountCollapses({ ref })

    // unmount

    return () => {
      unmountCollapses()
    }
  },
})

/* mountCollapse */

const mountCollapse = ({ button }) => {
  // disable if not overflowing and not on

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

/* mountCollapses */

const mountCollapses = ({ ref }) => {
  // vars

  const buttons = ref.querySelectorAll('.button--collapse')

  // intersection observer
  for (const button of buttons) {
    // when button is visible
    const observer = new IntersectionObserver(
      function (entries, observer) {
        for (const entry of entries) {
          if (entry.intersectionRatio > 0) {
            // disconnect observer
            observer.disconnect()
            // mount
            mountCollapse({ button })
          }
        }
      },
      { root: null }
    )
    observer.observe(button)
  }

  // unmount

  return () => {}
}
