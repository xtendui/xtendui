import { Xt } from 'xtendui'
import 'xtendui/src/slider'
import 'xtendui/src/mousefollow'
import gsap from 'gsap'

Xt.mount({
  matches: '.demo--slider-hero-v1',
  mount: ({ ref }) => {
    const unmountSlider = mountSlider({ ref })
    const unmountSlide = mountSlide({ ref })

    // unmount

    return () => {
      unmountSlider()
      unmountSlide()
    }
  },
})

/* mountSlider */

const mountSlider = ({ ref }) => {
  // vars

  const slider = ref.querySelector('.xt-slider')

  const dragTime = 1.5
  const dragEase = 'quart.out'

  const maskPercent = 100
  const maskInnerPercent = 50
  const maskInnerOpacity = 0.65

  // slider

  let self = new Xt.Slider(slider, {
    duration: dragTime * 1000,
    mode: 'absolute',
    loop: true,
  })

  // dragposition (set internal dragPosition to resume animation mid dragging)

  const dragposition = () => {
    // dragPosition tween with main duration and ease
    gsap.killTweensOf(self.detail)
    gsap
      .to(self.detail, {
        dragPosition: self.detail.dragFinal,
        duration: self.initial || self.detail.dragging ? 0 : dragTime,
        ease: dragEase,
      })
      .eventCallback('onComplete', () => {
        // incomings reset
        for (const incoming of self.targets.filter(x => x.classList.contains('incoming'))) {
          incoming.classList.remove('incoming')
        }
      })
    //console.debug(e.type, self.direction, self.detail.dragRatio, self.detail.dragPosition, self.detail.dragFinal)
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
    // incomings
    for (const incoming of self.targets.filter(x => x.classList.contains('incoming'))) {
      incoming.classList.remove('incoming')
    }
    const incomings = self.direction < 0 ? self.getTargets(self.getPrev()) : self.getTargets(self.getNext())
    for (const incoming of incomings) {
      incoming.classList.add('incoming')
      //console.debug('drag', self.direction, self.detail.dragRatio, tr.querySelector('.xt-h1').textContent.replace(/[^0-9]/g, ''), incoming.querySelector('.xt-h1').textContent.replace(/[^0-9]/g, ''))
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
  }

  self.dragger.addEventListener('drag.xt.slider', drag)

  // dragreset (set animation on drag reset, when dragging opposite position from initial dragging)

  const dragreset = () => {
    const tr = self.targets.filter(x => self.hasCurrent(x))[0]
    // mask
    const mask = tr.querySelector('.hero')
    gsap.to(mask, {
      x: '0%',
      duration: dragTime,
      ease: dragEase,
    })
    const maskInner = mask.querySelector('.hero-inner')
    gsap.to(maskInner, {
      x: '0%',
      opacity: 1,
      duration: dragTime,
      ease: dragEase,
    })
    // incomings
    const incomings = self.targets.filter(x => x.classList.contains('incoming'))
    for (const incoming of incomings) {
      // mask
      const mask = incoming.querySelector('.hero')
      gsap.to(mask, {
        x: `${maskPercent * self.direction}%`,
        duration: dragTime,
        ease: dragEase,
      })
      const maskInner = mask.querySelector('.hero-inner')
      gsap.to(maskInner, {
        x: `${-maskInnerPercent * self.direction}%`,
        opacity: 1 - maskInnerOpacity,
        duration: dragTime,
        ease: dragEase,
      })
    }
  }

  self.dragger.addEventListener('dragreset.xt.slider', dragreset)

  // on

  const on = e => {
    const tr = e.target
    // check because of event propagation
    if (self.targets.includes(tr) && !self.initial) {
      // raf because after off.xt.slider
      requestAnimationFrame(() => {
        //console.debug('on', self.direction, self.detail.dragRatio, tr.querySelector('.xt-h1').textContent.replace(/[^0-9]/g, ''))
        // mask
        const mask = tr.querySelector('.hero')
        gsap.killTweensOf(mask)
        gsap.set(mask, {
          x: `${maskPercent * self.detail.dragRatioInverse * self.direction}%`,
        })
        gsap.to(mask, {
          x: '0%',
          duration: dragTime,
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
          duration: dragTime,
          ease: dragEase,
        })
      })
    }
  }

  self.object.addEventListener('on.xt.slider', on, true)

  // off

  const off = e => {
    const tr = e.target
    // check because of event propagation
    if (self.targets.includes(tr)) {
      // mask
      const mask = tr.querySelector('.hero')
      gsap.to(mask, {
        x: `${-maskPercent * self.direction}%`,
        duration: dragTime,
        ease: dragEase,
      })
      const maskInner = mask.querySelector('.hero-inner')
      gsap.to(maskInner, {
        x: `${maskInnerPercent * self.direction}%`,
        opacity: 1 - maskInnerOpacity,
        duration: dragTime,
        ease: dragEase,
      })
      // incomings
      const incomings = self.targets.filter(x => x.classList.contains('incoming'))
      for (const incoming of incomings) {
        //console.debug('off', self.direction, self.detail.dragRatio, tr.querySelector('.xt-h1').textContent.replace(/[^0-9]/g, ''), incoming.querySelector('.xt-h1').textContent.replace(/[^0-9]/g, ''))
        // mask
        const mask = incoming.querySelector('.hero')
        gsap.to(mask, {
          x: `${-maskPercent * self.direction}%`,
          duration: dragTime,
          ease: dragEase,
        })
        const maskInner = mask.querySelector('.hero-inner')
        gsap.to(maskInner, {
          x: `${maskInnerPercent * self.direction}%`,
          opacity: 1 - maskInnerOpacity,
          duration: dragTime,
          ease: dragEase,
        })
      }
    }
  }

  self.object.addEventListener('off.xt.slider', off, true)

  // unmount

  return () => {
    self.destroy()
    self = null
  }
}

/* mountSlide */

const mountSlide = ({ ref }) => {
  // vars

  const slides = ref.querySelectorAll('.xt-slide')

  for (const slide of slides) {
    // vars

    const links =
      slide.tagName === 'A' || slide.tagName === 'BUTTON' ? Xt.arrSingle(ref) : slide.querySelectorAll('a, button')
    const img = slide.querySelector('.xt-media')
    const imgOpacityIn = 0.75
    const imgOpacityOut = 1

    // enter

    const enter = () => {
      // img
      gsap.to(img, {
        opacity: imgOpacityIn,
        duration: 0.5,
        ease: 'quart.out',
      })
    }

    for (const link of links) {
      link.addEventListener('mouseenter', enter)
    }

    // enter

    const leave = () => {
      // img
      gsap.to(img, {
        opacity: imgOpacityOut,
        duration: 0.5,
        ease: 'quart.out',
        overwrite: true,
      })
    }

    for (const link of links) {
      link.addEventListener('mouseleave', leave)
    }
  }

  // unmount

  return () => {}
}
