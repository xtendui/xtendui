import { Xt } from 'xtendui'
import 'xtendui/src/slider'
import gsap from 'gsap'

Xt.mount({
  matches: '.demo--slider-usage',
  mount: ({ ref }) => {
    const unmountSlider = mountSlider({ ref })

    // unmount

    return () => {
      unmountSlider()
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

  // status

  const current = ref.querySelector('.slider-status-current')
  const container = ref.querySelector('.slider-status-container')

  const status = () => {
    const self = Xt.get('xt-slider', slider)
    if (!self) return
    const containerWidth = container.offsetWidth
    // availableWidth
    let availableWidth = 0
    for (const tr of self.targets) {
      availableWidth += tr.offsetWidth
    }
    // width
    const el = self.elements.filter(x => self.hasCurrent(x))
    const slides = self.getTargets(el[0])
    let width = 0
    let left = slides[0].offsetLeft
    for (const slide of slides) {
      width += slide.offsetWidth
    }
    // set
    const currentWidth = (width * containerWidth) / availableWidth
    const currentLeft = (left * containerWidth) / availableWidth
    current.style.width = `${currentWidth}px`
    current.style.left = `${currentLeft}px`
  }

  slider.addEventListener('on.xt.slider', status, true)
  slider.addEventListener('init.xt.slider', status, true)
  addEventListener('resize', status)

  // unmount

  return () => {}
}
