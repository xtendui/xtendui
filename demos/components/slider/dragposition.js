import { Xt } from 'xtendui'
import 'xtendui/src/slider'
import gsap from 'gsap'

/* mountSlider */

const mountSlider = ({ ref }) => {
  // vars

  const slider = ref.querySelector('.xt-slider')
  let dragDuration
  const dragEase = 'quart.out'

  // init

  /***/
  let self = new Xt.Slider(slider, {
    duration: () => dragDuration * 1000,
    dragposition: true,
  })
  /***/

  // dragposition (set internal position to resume animation mid dragging)

  const dragposition = () => {
    // duration depending on dragger size
    dragDuration = self.initial || self.drag.instant ? 0 : Math.max(0.5, Math.min(1, Math.log(self.drag.size / 400)))
    // position animation to keep updated with animation
    gsap.killTweensOf(self.drag)
    gsap.to(self.drag, {
      position: self.drag.final,
      duration: dragDuration,
      ease: dragEase,
    })
    // dragger animation
    gsap.killTweensOf(self.dragger)
    gsap.to(self.dragger, {
      x: self.drag.final,
      duration: dragDuration,
      ease: dragEase,
    })
  }

  self.dragger.addEventListener('dragposition.xt.slider', dragposition)

  // unmount

  return () => {
    self.destroy()
    self = null
  }
}

/* mount */

Xt.mount({
  matches: '.demo--slider-dragposition',
  mount: ({ ref }) => {
    const unmountSlider = mountSlider({ ref })

    // unmount

    return () => {
      unmountSlider()
    }
  },
})
