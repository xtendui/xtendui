import { Xt } from 'xtendui'
import 'xtendui/src/slider'

Xt.mount({
  matches: '.demo--slider-status .xt-slider',
  mount: ({ ref }) => {
    // vars

    const slider = ref
    let selfDestroy = () => {}

    Xt.get({ name: 'xt-slider', el: slider }).then(self => {
      const current = slider.querySelector('[data-xt-slider-status-current]')
      const total = slider.querySelector('[data-xt-slider-status-total]')

      // change

      const change = e => {
        // useCapture event propagation check
        if (e.target === slider || self.elements.includes(e.target)) {
          // width
          const trs = self.targets.filter(x => self.hasCurrent({ el: x, same: window.demogroupedstatus })) // switcher window.demogroupedstatus true or false
          if (!trs.length) return
          let currentSizeContent = 0
          const left = trs[0].offsetLeft
          for (const tr of trs) {
            currentSizeContent += tr.offsetWidth
          }
          // set
          const totalWidth = total.offsetWidth
          const currentWidth = (currentSizeContent * totalWidth) / self.drag.sizeContent
          const currentLeft = (left * totalWidth) / self.drag.sizeContent
          current.style.width = `${currentWidth}px`
          current.style.left = `${currentLeft}px`
        }
      }

      slider.addEventListener('init.xt.slider', change)
      slider.addEventListener('status.xt.slider', change)
      slider.addEventListener('on.xt.slider', change, true) // useCapture event propagation
      addEventListener('resize', change)

      // destroy

      selfDestroy = () => {
        removeEventListener('resize', change)
      }
    })

    // unmount

    return () => {
      selfDestroy()
    }
  },
})

Xt.mount({
  matches: '.demo--slider-status',
  mount: ({ ref }) => {
    /* switcher for demo purpose remove this */

    // vars

    const slider = ref.querySelector('.xt-slider')
    const switcher = ref.querySelector('input[type="checkbox"]')

    // change

    const change = () => {
      if (switcher.checked) {
        window.demogroupedstatus = true
      } else {
        window.demogroupedstatus = false
      }
      slider.dispatchEvent(new CustomEvent('status.xt.slider'))
    }

    switcher.addEventListener('change', change)

    requestAnimationFrame(() => {
      change()
    })
  },
})
