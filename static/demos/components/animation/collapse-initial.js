import { Xt } from 'xtendui'
import 'xtendui/src/toggle'

Xt.mount({
  matches: '.demo--collapse-initial',
  mount: ({ ref }) => {
    const unmountCollapses = mountCollapses({ ref })

    // unmount

    return () => {
      unmountCollapses()
    }
  },
})

/* mountCollapse */

const mountCollapse = ({ collapse }) => {
  // disable if not overflowing and not on

  const self = Xt.get({ name: 'xt-toggle', el: collapse })
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

/* mountCollapses */

const mountCollapses = ({ ref }) => {
  // vars

  const collapses = ref.querySelectorAll('[data-xt-toggle]')

  // intersection observer
  for (const collapse of collapses) {
    // when button is visible
    const observer = new IntersectionObserver(
      function (entries, observer) {
        for (const entry of entries) {
          if (entry.intersectionRatio > 0) {
            // disconnect observer
            observer.disconnect()
            // mount
            mountCollapse({ collapse })
          }
        }
      },
      { root: null }
    )
    observer.observe(collapse)
  }

  // unmount

  return () => {}
}
