import { Xt } from 'xtendui'
import 'xtendui/src/slider'
import gsap from 'gsap'

/* mountSlider */

const mountSlider = ({ ref }) => {
  // vars

  const slider = ref.querySelector('.xt-slider')
  let dragDuration
  const dragEase = 'quart.out'

  const mediaZoom = 0.5
  const mediaTime = 1.5
  const mediaDelay = 0.25
  const mediaEase = 'expo.out'

  const contentX = 50

  // slider

  /***/
  let self = new Xt.Slider(slider, {
    duration: () => dragDuration * 1000,
    mode: 'absolute',
    loop: true,
  })
  /***/

  // dragposition (set internal position to resume animation mid dragging)

  const dragposition = () => {
    // duration depending on dragger size
    dragDuration = self.initial || self.drag._instant ? 0 : Math.max(0.5, Math.min(1, Math.log(self.drag._size / 400)))
    // position animation to keep updated with animation
    gsap.killTweensOf(self.drag)
    gsap.to(self.drag, {
      _position: self.drag._final,
      duration: dragDuration,
      ease: dragEase,
    })
  }

  self.dragger.addEventListener('dragposition.xt.slider', dragposition)

  // drag (set drag frame on drag and initial position on activation)

  const drag = () => {
    const tr = self.targets.filter(x => self.hasCurrent({ el: x }))[0]
    // cover
    const cover = tr.querySelector('.hero-cover')
    const skew = self.drag._ratio < 0.5 ? 10 * self.drag._ratio : 10 * self.drag._ratioInverse
    gsap.killTweensOf(cover)
    gsap.set(cover, {
      x: `${100 * self.drag._ratioInverse * self.direction}%`,
      skewX: skew * self.direction,
    })
    // content
    const content = tr.querySelector('.hero-content')
    gsap.killTweensOf(content)
    gsap.set(content, {
      x: -contentX * self.drag._ratio * self.direction,
      opacity: 1 * self.drag._ratioInverse,
    })
  }

  self.dragger.addEventListener('drag.xt.slider', drag)

  // dragreset (set animation on drag reset, when dragging opposite position from initial dragging)

  const dragreset = () => {
    const tr = self.targets.filter(x => self.hasCurrent({ el: x }))[0]
    // cover
    const cover = tr.querySelector('.hero-cover')
    gsap.killTweensOf(cover)
    gsap.to(cover, {
      x: `${-100 * self.direction}%`,
      skewX: 0,
      duration: dragDuration,
      ease: dragEase,
    })
    // content
    const content = tr.querySelector('.hero-content')
    gsap.killTweensOf(content)
    gsap.to(content, {
      x: 0,
      opacity: 1,
      duration: dragDuration,
      ease: dragEase,
    })
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
        x: `${100 * self.drag._ratioInverse * self.direction}%`,
      })
      gsap.to(mask, {
        x: 0,
        duration: dragDuration,
        ease: dragEase,
      })
      const maskInner = tr.querySelector('.hero-inner')
      gsap.killTweensOf(maskInner)
      gsap.set(maskInner, {
        x: `${-100 * self.drag._ratioInverse * self.direction}%`,
      })
      gsap.to(maskInner, {
        x: 0,
        duration: dragDuration,
        ease: dragEase,
      })
      // media
      const media = tr.querySelector('.xt-media')
      gsap.killTweensOf(media)
      gsap.set(media, {
        scale: 1 + mediaZoom,
      })
      gsap.to(media, {
        scale: 1,
        duration: mediaTime,
        ease: mediaEase,
        delay: mediaDelay,
      })
      // content
      const content = tr.querySelector('.hero-content')
      gsap.killTweensOf(content)
      gsap.set(content, {
        x: contentX * self.direction,
      })
      gsap.to(content, {
        x: 0,
        opacity: 1,
        duration: dragDuration,
        ease: dragEase,
      })
      /***/
      // dragposition (set internal position to instant position after on)
      gsap.killTweensOf(self.drag)
      gsap.set(self.drag, {
        _position: self.drag._final,
      })
      /***/
    }
  }

  self.container.addEventListener('on.xt.slider', on, true)

  // off

  const off = e => {
    const tr = e.target
    // check because of event propagation
    if (self.targets.includes(tr)) {
      // cover
      const cover = tr.querySelector('.hero-cover')
      gsap.killTweensOf(cover)
      if (!self.drag._instant) {
        gsap.set(cover, {
          x: `${100 * self.direction}%`,
          skewX: 0,
        })
      }
      gsap.to(cover, {
        x: `${-100 * self.direction}%`,
        duration: dragDuration,
        ease: dragEase,
      })
      gsap
        .to(cover, {
          skewX: 10 * self.direction,
          duration: dragDuration / 2,
          ease: dragEase,
        })
        .eventCallback('onComplete', () => {
          gsap.to(cover, {
            skewX: 0,
            duration: dragDuration / 2,
            ease: dragEase,
          })
        })
      // mask
      const mask = tr.querySelector('.hero')
      gsap.killTweensOf(mask)
      gsap.to(mask, {
        x: `${-100 * self.direction}%`,
        duration: dragDuration,
        ease: dragEase,
      })
      const maskInner = tr.querySelector('.hero-inner')
      gsap.killTweensOf(maskInner)
      gsap.to(maskInner, {
        x: `${100 * self.direction}%`,
        duration: dragDuration,
        ease: dragEase,
      })
      // content
      const content = tr.querySelector('.hero-content')
      gsap.killTweensOf(content)
      gsap.to(content, {
        x: -contentX * self.direction,
        opacity: 0,
        duration: dragDuration,
        ease: dragEase,
      })
    }
  }

  self.container.addEventListener('off.xt.slider', off, true)

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

    let links = slide.closest('a, button')
    links = links ? [links] : Array.from(slide.querySelectorAll('a, button')) // query inside
    if (!links.length) return
    links = links.filter(x => !x.parentElement.closest('a, button')) // filter nested
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

/* mount */

Xt.mount({
  matches: '.demo--slider-hero-v2',
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
