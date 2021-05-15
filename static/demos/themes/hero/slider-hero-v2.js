import { Xt } from 'xtendui'
import 'xtendui/src/slider'
import 'xtendui/src/mousefollow'
import gsap from 'gsap'

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

/* mountSlider */

const mountSlider = ({ ref }) => {
  // vars

  const slider = ref.querySelector('.xt-slider')
  const dragTimeMax = 1
  const dragTimeMin = 0.25
  const dragEase = 'quart.out'
  let dragDistance
  let dragDuration

  const assetZoom = 0.5
  const assetTime = 1.5
  const assetDelay = 0.25
  const assetEase = 'expo.out'

  const contentX = 50

  // slider

  let self = new Xt.Slider(slider, {
    duration: () => dragDuration * 1000,
    mode: 'absolute',
    loop: true,
  })

  // dragposition (set internal dragPosition to resume animation mid dragging)

  const dragposition = () => {
    // dragDuration depending on distance
    dragDistance = Math.abs(self.detail.dragPosition - self.detail.dragFinal)
    dragDuration = Math.max(Math.min(dragDistance / 250, dragTimeMax), dragTimeMin)
    // dragPosition tween with main time and ease
    gsap.killTweensOf(self.detail)
    gsap.to(self.detail, {
      dragPosition: self.detail.dragFinal,
      duration: self.initial || self.detail.dragging ? 0 : dragDuration,
      ease: dragEase,
    })
  }

  self.dragger.addEventListener('dragposition.xt.slider', dragposition)

  // drag (set drag frame on drag and initial position on activation)

  const drag = () => {
    const tr = self.targets.filter(x => self.hasCurrent(x))[0]
    // cover
    const assetCover = tr.querySelector('.hero-cover')
    const skew =
      self.detail.dragRatio < 0.5 ? 10 * (self.detail.dragRatio * 1.5) : 10 * (self.detail.dragRatioInverse * 1.5) // * 2 would be the same as the normal skew
    gsap.killTweensOf(assetCover)
    gsap.set(assetCover, {
      x: `${100 * self.detail.dragRatioInverse * self.direction}%`,
      skewX: skew * self.direction,
    })
    // content
    const content = tr.querySelector('.hero-content')
    gsap.killTweensOf(content)
    gsap.set(content, {
      x: -contentX * self.detail.dragRatio * self.direction,
      opacity: 1 * self.detail.dragRatioInverse,
    })
  }

  self.dragger.addEventListener('drag.xt.slider', drag)

  // dragreset (set animation on drag reset, when dragging opposite position from initial dragging)

  const dragreset = () => {
    const tr = self.targets.filter(x => self.hasCurrent(x))[0]
    // cover
    const assetCover = tr.querySelector('.hero-cover')
    gsap.to(assetCover, {
      x: `${100 * self.direction}%`,
      skewX: 0,
      duration: dragDuration,
      ease: dragEase,
    })
    // content
    const content = tr.querySelector('.hero-content')
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
      // cover
      const assetCover = tr.querySelector('.hero-cover')
      gsap.set(assetCover, {
        x: `${100 * self.direction}%`,
        skewX: 0,
      })
      gsap.to(assetCover, {
        x: `${-100 * self.direction}%`,
        duration: dragDuration,
        ease: dragEase,
      })
      gsap
        .to(assetCover, {
          skewX: 5 * self.direction,
          duration: dragDuration / 2,
          ease: dragEase,
        })
        .eventCallback('onComplete', () => {
          gsap.to(assetCover, {
            skewX: 0,
            duration: dragDuration / 2,
            ease: dragEase,
          })
        })
      // assetMask
      const assetMask = tr.querySelector('.hero')
      gsap.set(assetMask, {
        x: `${100 * self.direction}%`,
      })
      gsap.to(assetMask, {
        x: 0,
        duration: dragDuration,
        ease: dragEase,
      })
      const assetMaskInner = assetMask.querySelector('.hero-inner')
      gsap.set(assetMaskInner, {
        x: `${-100 * self.direction}%`,
      })
      gsap.to(assetMaskInner, {
        x: 0,
        duration: dragDuration,
        ease: dragEase,
      })
      // asset
      const asset = tr.querySelector('.xt-media')
      gsap.set(asset, {
        scale: 1 + assetZoom,
      })
      gsap.to(asset, {
        scale: 1,
        duration: assetTime,
        ease: assetEase,
        delay: assetDelay,
      })
      // content
      const content = tr.querySelector('.hero-content')
      gsap.set(content, {
        x: contentX * self.direction,
      })
      gsap.to(content, {
        x: 0,
        opacity: 1,
        duration: dragDuration,
        ease: dragEase,
      })
    }
  }

  self.object.addEventListener('on.xt.slider', on, true)

  // off

  const off = e => {
    const tr = e.target
    // check because of event propagation
    if (self.targets.includes(tr)) {
      // cover
      const assetCover = tr.querySelector('.hero-cover')
      gsap.to(assetCover, {
        x: `${-100 * self.direction}%`,
        duration: dragDuration,
        ease: dragEase,
      })
      gsap
        .to(assetCover, {
          skewX: 10 * self.direction,
          duration: dragDuration / 2,
          ease: dragEase,
        })
        .eventCallback('onComplete', () => {
          gsap.to(assetCover, {
            skewX: 0,
            duration: dragDuration / 2,
            ease: dragEase,
          })
        })
      // assetMask
      const assetMask = tr.querySelector('.hero')
      gsap.to(assetMask, {
        x: `${-100 * self.direction}%`,
        duration: dragDuration,
        ease: dragEase,
      })
      const assetMaskInner = assetMask.querySelector('.hero-inner')
      gsap.to(assetMaskInner, {
        x: `${100 * self.direction}%`,
        duration: dragDuration,
        ease: dragEase,
      })
      // content
      const content = tr.querySelector('.hero-content')
      gsap.to(content, {
        x: -contentX * self.direction,
        opacity: 0,
        duration: dragDuration,
        ease: dragEase,
      })
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
