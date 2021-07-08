import { Xt } from 'xtendui'
import 'xtendui/src/slider'
import gsap from 'gsap'

Xt.mount({
  matches: '.demo--slider-animation-js',
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
  const dragEase = 'quart.out'
  let dragDistance
  let dragDuration

  const targetTimeOn = 0.5
  const targetEaseOn = 'quint.out'
  const targetXOn = 192
  const targetTimeOff = 0.5
  const targetEaseOff = 'quint.out'
  const targetXOff = 192

  // init

  /***/
  let self = new Xt.Slider(slider, {
    duration: 500,
  })
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

  // setup

  /***/
  const init = () => {
    const targets = self.targets.filter(x => !self.hasCurrent(x, false, true))
    for (const tr of targets) {
      const index = self.getIndex(tr)
      if (index < self.currentIndex) {
        gsap.set(tr, {
          x: -1 * targetXOn,
          opacity: 0,
        })
      } else if (index >= self.currentIndex) {
        gsap.set(tr, {
          x: 1 * targetXOn,
          opacity: 0,
        })
      }
    }
  }

  self.container.addEventListener('init.xt.slider', init, true)
  /***/

  // on

  /***/
  const on = e => {
    const tr = e.target
    // check because of event propagation
    if (self.targets.includes(tr)) {
      gsap.killTweensOf(tr)
      gsap.to(tr, {
        x: 0,
        opacity: 1,
        duration: targetTimeOn,
        ease: targetEaseOn,
      })
    }
  }

  self.container.addEventListener('on.xt.slider', on, true)
  /***/

  // off

  /***/
  const off = e => {
    const tr = e.target
    // check because of event propagation
    if (self.targets.includes(tr)) {
      gsap.killTweensOf(tr)
      gsap.to(tr, {
        x: -self.direction * targetXOff,
        opacity: 0,
        duration: targetTimeOff,
        ease: targetEaseOff,
      })
    }
  }

  self.container.addEventListener('off.xt.slider', off, true)
  /***/

  // unmount

  return () => {
    self.destroy()
    self = null
  }
}
