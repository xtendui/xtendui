import { Xt } from 'xtendui'
import 'xtendui/src/slider'
import gsap from 'gsap'

Xt.mount({
  matches: '.demo--slider-animation-absolute-mask',
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

  const maskPercent = 100
  const maskInnerPercent = 100
  const maskInnerOpacity = 0.65

  // slider

  /***/
  let self = new Xt.Slider(slider, {
    duration: () => dragDuration * 1000,
    mode: 'absolute',
    loop: true,
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
  }

  self.dragger.addEventListener('dragposition.xt.slider', dragposition)

  // drag (set drag frame on drag and initial position on activation)

  const drag = () => {
    const tr = self.targets.filter(x => self.hasCurrent(x))[0]
    // mask
    const mask = tr.querySelector('.hero')
    gsap.killTweensOf(mask)
    gsap.set(mask, {
      x: `${-maskPercent * self.detail.dragRatio * self.direction}%`,
    })
    const maskInner = mask.querySelector('.hero-inner')
    gsap.killTweensOf(maskInner)
    gsap.set(maskInner, {
      x: `${maskInnerPercent * self.detail.dragRatio * self.direction}%`,
      opacity: 1 - maskInnerOpacity * self.detail.dragRatio,
    })
    /***/
    // incomings
    for (const incoming of self.targets.filter(x => x.classList.contains('incoming'))) {
      incoming.classList.remove('incoming', '!block')
    }
    const incomings = self.direction < 0 ? self.getTargets(self.getPrev()) : self.getTargets(self.getNext())
    for (const incoming of incomings) {
      incoming.classList.add('incoming', '!block')
      // mask
      const mask = incoming.querySelector('.hero')
      gsap.killTweensOf(mask)
      gsap.set(mask, {
        x: `${maskPercent * self.detail.dragRatioInverse * self.direction}%`,
      })
      const maskInner = mask.querySelector('.hero-inner')
      gsap.killTweensOf(maskInner)
      gsap.set(maskInner, {
        x: `${-maskInnerPercent * self.detail.dragRatioInverse * self.direction}%`,
        opacity: 1 - maskInnerOpacity * self.detail.dragRatioInverse,
      })
    }
    /***/
  }

  self.dragger.addEventListener('drag.xt.slider', drag)

  // dragreset (set animation on drag reset, when dragging opposite position from initial dragging)

  const dragreset = () => {
    const tr = self.targets.filter(x => self.hasCurrent(x))[0]
    off({ target: tr })
    on({ target: tr })
  }

  self.dragger.addEventListener('dragreset.xt.slider', dragreset)

  // on

  const on = e => {
    const tr = e.target
    // check because of event propagation
    if (self.targets.includes(tr) && !self.initial) {
      // mask
      const mask = tr.querySelector('.hero')
      gsap.killTweensOf(mask)
      gsap.set(mask, {
        x: `${maskPercent * self.detail.dragRatioInverse * self.direction}%`,
      })
      gsap.to(mask, {
        x: '0%',
        duration: dragDuration,
        ease: dragEase,
      })
      const maskInner = mask.querySelector('.hero-inner')
      gsap.killTweensOf(maskInner)
      gsap.set(maskInner, {
        x: `${-maskInnerPercent * self.detail.dragRatioInverse * self.direction}%`,
        opacity: 1 - maskInnerOpacity * self.detail.dragRatioInverse,
      })
      gsap.to(maskInner, {
        x: '0%',
        opacity: 1,
        duration: dragDuration,
        ease: dragEase,
      })
    }
  }

  self.container.addEventListener('on.xt.slider', on, true)

  // off

  const off = e => {
    const tr = e.target
    // check because of event propagation
    if (self.targets.includes(tr)) {
      // mask
      const mask = tr.querySelector('.hero')
      gsap.killTweensOf(mask)
      gsap.to(mask, {
        x: `${-maskPercent * self.direction}%`,
        duration: dragDuration,
        ease: dragEase,
      })
      const maskInner = mask.querySelector('.hero-inner')
      gsap.killTweensOf(maskInner)
      gsap.to(maskInner, {
        x: `${maskInnerPercent * self.direction}%`,
        opacity: 1 - maskInnerOpacity,
        duration: dragDuration,
        ease: dragEase,
      })
      /***/
      // incomings
      const incomings = self.targets.filter(x => x.classList.contains('incoming'))
      for (const incoming of incomings) {
        incoming.classList.remove('incoming')
        // mask
        const mask = incoming.querySelector('.hero')
        gsap.killTweensOf(mask)
        gsap
          .to(mask, {
            x: `${-maskPercent * self.direction}%`,
            duration: dragDuration,
            ease: dragEase,
          })
          .eventCallback('onComplete', () => {
            incoming.classList.remove('!block')
          })
        const maskInner = mask.querySelector('.hero-inner')
        gsap.killTweensOf(maskInner)
        gsap.to(maskInner, {
          x: `${maskInnerPercent * self.direction}%`,
          opacity: 1 - maskInnerOpacity,
          duration: dragDuration,
          ease: dragEase,
        })
      }
      /***/
    }
  }

  self.container.addEventListener('off.xt.slider', off, true)

  // unmount

  return () => {
    self.destroy()
    self = null
  }
}
