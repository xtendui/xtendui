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
  const dragTime = 1
  const dragEase = 'quint.out'

  // init

  const self = new Xt.Slider(slider, {})

  // dragposition (set internal dragPosition to resume animation mid dragging)

  const dragposition = () => {
    // dragPosition tween with main time and ease
    gsap.killTweensOf(self.detail)
    gsap.to(self.detail, {
      dragPosition: self.detail.dragFinal,
      duration: self.initial || self.detail.dragging ? 0 : dragTime,
      ease: dragEase,
    })
    // dragger tween with main time and ease
    gsap.killTweensOf(self.dragger)
    gsap.to(self.dragger, {
      x: self.detail.dragFinal,
      duration: self.initial || self.detail.dragging ? 0 : dragTime,
      ease: dragEase,
    })
  }

  self.dragger.addEventListener('dragposition.xt.slider', dragposition)

  // unmount

  return () => {}
}

/* mountStatus */

const mountStatus = ({ ref }) => {
  // vars

  const slider = ref.querySelector('.xt-slider')
  const status = ref.querySelector('.slider-status')
  const current = slider.querySelector('.slider-status-current')
  const container = slider.querySelector('.slider-status-container')

  // change

  const change = e => {
    // check because of event propagation
    if (e.target === slider) {
      const self = Xt.get('xt-slider', slider)
      if (!self) return
      if (!self.targets.length) return
      // availableWidth
      let availableWidth = 0
      for (const tr of self.targets) {
        availableWidth += tr.offsetWidth
      }
      // width
      const el = self.elements.filter(x => self.hasCurrent(x))
      const slides = self.getTargets(el[0], true)
      let width = 0
      let left = slides[0].offsetLeft
      for (const slide of slides) {
        width += slide.offsetWidth
      }
      // set
      const containerWidth = container.offsetWidth
      const currentWidth = (width * containerWidth) / availableWidth
      const currentLeft = (left * containerWidth) / availableWidth
      current.style.width = `${currentWidth}px`
      current.style.left = `${currentLeft}px`
      // disabled
      if (self.disabled) {
        status.classList.add('hidden')
      } else {
        status.classList.remove('hidden')
      }
    }
  }

  slider.addEventListener('on.xt.slider', change)
  slider.addEventListener('init.xt.slider', change)
  slider.addEventListener('status.xt.slider', change)
  addEventListener('resize', change)

  // unmount

  return () => {
    removeEventListener('resize', change)
  }
}
