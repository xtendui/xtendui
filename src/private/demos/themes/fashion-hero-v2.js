import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/extensions/slider/slider.js'
import 'xtend-library/src/addons/slider/navigation-sides.js'
import gsap from 'gsap'

Xt.mount.push({
  matches: '#iframe--fashion-hero-v2 body .slider', // add your own selector instead of body to contain the code
  mount: object => {
    // vars

    const assetCoverTimeOn = Xt.vars.timeBig + 150 // @FIX to cover skew: + 250
    const assetCoverEaseOn = 'quint.inOut'
    const assetCoverTimeOff = Xt.vars.timeBig
    const assetCoverEaseOff = 'quint.inOut'

    const assetMaskTime = Xt.vars.timeBig
    const assetMaskEase = 'quint.inOut'

    const assetZoom = 0.25
    const assetTime = Xt.vars.timeBig
    const assetDelay = Xt.vars.timeBig / 2
    const assetEase = 'expo.out'

    const contentX = 200
    const contentTime = Xt.vars.timeBig
    const contentEase = 'quint.inOut'

    // slider

    let self = new Xt.Slider(object, {
      instant: true,
      durationOn: Xt.vars.timeBig,
      durationOff: Xt.vars.timeBig,
      auto: {
        time: 5000,
        pause: '.slide_content_inner',
      },
      autoHeight: false,
      groupMq: false,
      drag: {
        duration: Xt.vars.timeBig,
        overflow: false,
      },
    })

    // drag

    const eventDrag = () => {
      const target = self.targets.filter(x => self.hasCurrent(x))[0]
      // cover
      const assetCover = target.querySelector('.slide_cover')
      const skew = self.detail.dragRatio < 0.5 ? 10 * (self.detail.dragRatio * 1.5) : 10 * (self.detail.dragRatioInverse * 1.5) // * 2 would be the same as the normal skew
      gsap.set(assetCover, { x: 100 * self.detail.dragRatioInverse * self.direction + '%', skewX: skew * self.direction })
      // content
      const content = target.querySelector('.slide_content')
      gsap.set(content, { x: -contentX * self.detail.dragRatio * self.direction, opacity: 1 * self.detail.dragRatioInverse })
    }

    self.dragger.addEventListener('drag.xt', eventDrag)

    // dragreset

    const eventDragReset = () => {
      const target = self.targets.filter(x => self.hasCurrent(x))[0]
      // cover
      const assetCover = target.querySelector('.slide_cover')
      gsap.to(assetCover, { x: 100 * self.direction + '%', duration: assetCoverTimeOff, ease: assetCoverEaseOff })
      gsap.to(assetCover, { skew: 0, duration: assetCoverTimeOff / 2, ease: assetCoverEaseOff })
      // content
      const content = target.querySelector('.slide_content')
      gsap.to(content, { x: 0, opacity: 1, duration: contentTime, ease: contentEase })
    }

    self.dragger.addEventListener('dragreset.xt', eventDragReset)

    // on

    const eventOn = e => {
      const target = e.target
      // useCapture delegation
      if (self.targets.includes(target)) {
        if (self.initial) {
          // cover
          const assetCover = target.querySelector('.slide_cover')
          gsap.killTweensOf(assetCover)
          gsap.set(assetCover, { x: 100 * self.direction + '%', skewX: 0 })
          // assetMask
          const assetMask = target.querySelector('.slide_item')
          gsap.killTweensOf(assetMask)
          gsap.set(assetMask, { x: 0 })
          const assetMaskInner = assetMask.querySelector('.slide_inner')
          gsap.killTweensOf(assetMaskInner)
          gsap.set(assetMaskInner, { x: 0 })
          // asset
          const asset = target.querySelector('.slide_asset .media')
          gsap.killTweensOf(asset)
          gsap.set(asset, { scale: 1 })
        } else {
          // cover
          const assetCover = target.querySelector('.slide_cover')
          gsap.set(assetCover, { x: 100 * self.direction + '%', skewX: 0 })
          gsap.to(assetCover, { x: -100 * self.direction + '%', duration: assetCoverTimeOn, ease: assetCoverEaseOn })
          gsap.to(assetCover, { skewX: 5 * self.direction, duration: assetCoverTimeOn / 2, ease: assetCoverEaseOn }).eventCallback('onComplete', () => {
            gsap.to(assetCover, { skewX: 0, duration: assetCoverTimeOn / 2, ease: assetCoverEaseOn })
          })
          // assetMask
          const assetMask = target.querySelector('.slide_item')
          gsap.set(assetMask, { x: (self.detail.dragging ? 125 : 100) * self.direction + '%' }) // @FIX to cover skew 125%
          gsap.to(assetMask, { x: 0, duration: assetMaskTime, ease: assetMaskEase })
          const assetMaskInner = assetMask.querySelector('.slide_inner')
          gsap.set(assetMaskInner, { x: (self.detail.dragging ? -125 : -100) * self.direction + '%' }) // @FIX to cover skew 125%
          gsap.to(assetMaskInner, { x: 0, duration: assetMaskTime, ease: assetMaskEase })
          // asset
          const asset = target.querySelector('.slide_asset .media')
          gsap.set(asset, { scale: 1 + assetZoom })
          gsap.to(asset, { scale: 1, duration: assetTime, ease: assetEase, delay: assetDelay })
          // content
          const content = target.querySelector('.slide_content')
          gsap.set(content, { x: contentX * self.direction })
          gsap.to(content, { x: 0, opacity: 1, duration: contentTime, ease: contentEase })
        }
      }
    }

    self.object.addEventListener('on.xt', eventOn, true)

    // on

    const eventOff = e => {
      const target = e.target
      // useCapture delegation
      if (self.targets.includes(target)) {
        // cover
        if (self.detail.dragging) {
          const assetCover = target.querySelector('.slide_cover')
          gsap.to(assetCover, { x: -100 * self.direction + '%', duration: assetCoverTimeOff, ease: assetCoverEaseOff })
          gsap.to(assetCover, { skewX: 10 * self.direction, duration: assetCoverTimeOff / 2, ease: assetCoverEaseOff }).eventCallback('onComplete', () => {
            gsap.to(assetCover, { skewX: 0, duration: assetCoverTimeOff / 2, ease: assetCoverEaseOff })
          })
        }
        // assetMask
        const assetMask = target.querySelector('.slide_item')
        gsap.to(assetMask, { x: -100 * self.direction + '%', duration: assetMaskTime, ease: assetMaskEase })
        const assetMaskInner = assetMask.querySelector('.slide_inner')
        gsap.to(assetMaskInner, { x: 100 * self.direction + '%', duration: assetMaskTime, ease: assetMaskEase })
        // content
        const content = target.querySelector('.slide_content')
        gsap.to(content, { x: -contentX * self.direction, opacity: 0, duration: contentTime, ease: contentEase })
      }
    }

    self.object.addEventListener('off.xt', eventOff, true)

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  },
})

/**
 * #iframe--fashion-hero-v2 .media
 */

Xt.mount.push({
  matches: '#iframe--fashion-hero-v2 .slide a',
  mount: function(object) {
    // vars

    const img = object.closest('.slide').querySelector('.media')
    const imgOpacityIn = 0.75
    const imgOpacityOut = 1

    // enter

    const eventEnter = e => {
      // img
      gsap.to(img, { opacity: imgOpacityIn, duration: Xt.vars.timeSmall, ease: 'quart.out' })
    }

    object.addEventListener('mouseenter', eventEnter)

    // enter

    const eventLeave = e => {
      // img
      gsap.to(img, { opacity: imgOpacityOut, duration: Xt.vars.timeSmall, ease: 'quart.out', overwrite: true })
    }

    object.addEventListener('mouseleave', eventLeave)
    object.addEventListener('mousedown', eventLeave)

    // unmount

    const unmount = function() {}
    return unmount
  },
})
