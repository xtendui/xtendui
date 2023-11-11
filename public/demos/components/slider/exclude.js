import { Xt } from 'xtendui'
import 'xtendui/src/slider'

/* mountToggle */

const mountToggle = ({ ref }) => {
  // vars

  const toggle = ref
  const slider = ref.querySelector('.xt-slider')

  // init

  let selfDestroy
  new Xt.Toggle(toggle, {
    min: 1,
  }).then(self => {
    // change

    const change = () => {
      // deactivate slides
      for (const tr of self.targets.filter(x => !self.hasCurrent({ el: x }))) {
        const slide = tr.closest('.xt-slide')
        if (slide) {
          slide.classList.add('hidden')
        }
      }
      // activate slides
      for (const tr of self.targets.filter(x => self.hasCurrent({ el: x }))) {
        const slide = tr.closest('.xt-slide')
        if (slide) {
          slide.classList.remove('hidden')
        }
      }
      // reinit slides
      Xt.get({ name: 'xt-slider', el: slider }).then(selfSlider => {
        if (selfSlider.initial) {
          requestAnimationFrame(() => {
            selfSlider.reinit({ save: false })
          })
        } else {
          selfSlider.reinit({ save: false })
        }
      })
    }

    for (const el of self.elements) {
      el.addEventListener('on.xt.toggle', change)
    }

    // destroy

    selfDestroy = () => {
      self.destroy()
      self = null
    }
  })

  // unmount

  return () => {
    selfDestroy()
  }
}

/* mount */

Xt.mount({
  matches: '.demo--slider-exclude',
  mount: ({ ref }) => {
    const unmountToggle = mountToggle({ ref })

    // unmount

    return () => {
      unmountToggle()
    }
  },
})
