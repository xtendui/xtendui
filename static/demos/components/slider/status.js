import { Xt } from 'xtendui'
import 'xtendui/src/slider'
import gsap from 'gsap'

Xt.mount({
  matches: '.demo--slider-status',
  mount: ({ ref }) => {
    const unmountSlider = mountSlider({ ref })
    const unmountStatus = mountStatus({ ref })

    // unmount

    return () => {
      unmountSlider()
      unmountStatus()
    }
  },
})

/* mountSlider */

const mountSlider = ({ ref }) => {
  // vars

  const slider = ref.querySelector('.xt-slider')
  const dragEase = 'quart.out'
  let distance
  let duration

  // init

  /***/
  let self = new Xt.Slider(slider, {})
  /***/

  // dragposition (set internal position to resume animation mid dragging)

  const dragposition = () => {
    // duration depending on distance
    distance = Math.abs(self.drag.position - self.drag.final)
    duration = self.initial || self.drag.instant ? 0 : Math.min(Math.log(1 + distance / 125), 1.5)
    // position animation to keep updated with animation
    gsap.killTweensOf(self.drag)
    gsap.to(self.drag, {
      position: self.drag.final,
      duration: duration,
      ease: dragEase,
    })
    // dragger animation
    gsap.killTweensOf(self.dragger)
    gsap.to(self.dragger, {
      x: self.drag.final,
      duration: duration,
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

/* mountStatus */

const mountStatus = ({ ref }) => {
  // vars

  const slider = ref.querySelector('.xt-slider')
  const self = Xt.get({ name: 'xt-slider', el: slider })
  if (!self) return () => {}
  const current = slider.querySelector('[data-xt-slider-status-current]')
  const total = slider.querySelector('[data-xt-slider-status-total]')

  // change

  const change = e => {
    // check because of event propagation
    if (e.target === slider || self.targets.includes(e.target)) {
      // availableWidth
      let availableWidth = 0
      for (const tr of self.targets) {
        availableWidth += tr.offsetWidth
      }
      // width
      const trs = self.targets.filter(x => self.hasCurrent({ el: x }))
      if (!trs.length) return
      let width = 0
      const left = trs[0].offsetLeft
      for (const tr of trs) {
        width += tr.offsetWidth
      }
      // set
      const totalWidth = total.offsetWidth
      const currentWidth = (width * totalWidth) / availableWidth
      const currentLeft = (left * totalWidth) / availableWidth
      current.style.width = `${currentWidth}px`
      current.style.left = `${currentLeft}px`
    }
  }

  slider.addEventListener('on.xt.slider', change, true)
  slider.addEventListener('init.xt.slider', change)
  slider.addEventListener('status.xt.slider', change)
  addEventListener('resize', change)

  // unmount

  return () => {
    removeEventListener('resize', change)
  }
}
