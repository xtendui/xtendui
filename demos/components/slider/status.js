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
  let dragDistance
  let dragDuration

  // init

  /***/
  let self = new Xt.Slider(slider, {})
  /***/

  // dragposition (set internal dragPosition to resume animation mid dragging)

  const dragposition = () => {
    // dragDuration depending on distance
    dragDistance = Math.abs(self.detail.dragPosition - self.detail.dragFinal)
    dragDuration = self.initial || self.detail.isDrag ? 0 : Math.min(Math.log(1 + dragDistance / 125), 1.5)
    // dragPosition animation to keep updated with animation
    gsap.killTweensOf(self.detail)
    gsap.to(self.detail, {
      dragPosition: self.detail.dragFinal,
      duration: dragDuration,
      ease: dragEase,
    })
    // dragger animation
    gsap.killTweensOf(self.dragger)
    gsap.to(self.dragger, {
      x: self.detail.dragFinal,
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

/* mountStatus */

const mountStatus = ({ ref }) => {
  // vars

  const slider = ref.querySelector('.xt-slider')
  const self = Xt.get('xt-slider', slider)
  if (!self) return () => {}
  const current = slider.querySelector('.slider-status-current')
  const container = slider.querySelector('.slider-status-container')

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
      const trs = self.targets.filter(x => self.hasCurrent(x))
      if (!trs.length) return
      let width = 0
      let left = trs[0].offsetLeft
      for (const tr of trs) {
        width += tr.offsetWidth
      }
      // set
      const containerWidth = container.offsetWidth
      const currentWidth = (width * containerWidth) / availableWidth
      const currentLeft = (left * containerWidth) / availableWidth
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
