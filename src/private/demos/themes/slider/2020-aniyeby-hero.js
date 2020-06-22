import { Xt } from 'xtend-library/src/xt.js'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/extensions/slider/slider.js'
import 'xtend-library/src/addons/slider/navigation-sides.js'
import gsap from 'gsap'

Xt.mount.push({
  matches: '#iframe--2020-aniyeby-hero .slider',
  mount: object => {
    // vars

    const assetCoverTimeOn = Xt.vars.timeBig + 150 // @FIX to cover skew: + 250
    const assetCoverEaseOn = 'quint.inOut'
    const assetCoverTimeOff = Xt.vars.timeBig
    const assetCoverEaseOff = 'quint.inOut'

    const assetMaskTimeOn = Xt.vars.timeBig
    const assetMaskEaseOn = 'quint.inOut'

    const assetZoom = 0.25
    const assetTime = Xt.vars.timeBig / 2
    const assetDelay = Xt.vars.timeBig / 2
    const assetEase = 'expo.out'

    // slider

    let self = new Xt.Slider(object, {
      instant: true,
      durationOn: Xt.vars.timeBig,
      durationOff: Xt.vars.timeBig,
      auto: {
        time: 6000,
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
    }

    self.dragger.addEventListener('drag.xt', eventDrag)

    // dragreset

    const eventDragReset = () => {
      const target = self.targets.filter(x => self.hasCurrent(x))[0]
      // cover
      const assetCover = target.querySelector('.slide_cover')
      gsap.to(assetCover, { x: 100 * self.direction + '%', duration: assetCoverTimeOff, ease: assetCoverEaseOff })
      gsap.to(assetCover, { skew: 0, duration: assetCoverTimeOff / 2, ease: assetCoverEaseOff })
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
          gsap.to(assetMask, { x: 0, duration: assetMaskTimeOn, ease: assetMaskEaseOn })
          const assetMaskInner = assetMask.querySelector('.slide_inner')
          gsap.set(assetMaskInner, { x: (self.detail.dragging ? -125 : -100) * self.direction + '%' }) // @FIX to cover skew 125%
          gsap.to(assetMaskInner, { x: 0, duration: assetMaskTimeOn, ease: assetMaskEaseOn })
          // asset
          const asset = target.querySelector('.slide_asset .media')
          gsap.set(asset, { scale: 1 + assetZoom })
          gsap.to(asset, { scale: 1, duration: assetTime, ease: assetEase, delay: assetDelay })
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
        gsap.to(assetMask, { x: -100 * self.direction + '%', duration: assetMaskTimeOn, ease: assetMaskEaseOn })
        const assetMaskInner = assetMask.querySelector('.slide_inner')
        gsap.to(assetMaskInner, { x: 100 * self.direction + '%', duration: assetMaskTimeOn, ease: assetMaskEaseOn })
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
 * #iframe--2020-aniyeby-hero .media
 */

Xt.mount.push({
  matches: '#iframe--2020-aniyeby-hero .slide',
  mount: function(object) {
    // vars

    const imgOpacityIn = 0.75
    const imgOpacityOut = 1

    // enter

    const eventEnter = e => {
      // img
      const img = object.querySelector('.media')
      gsap.to(img, { opacity: imgOpacityIn, duration: Xt.vars.timeSmall, ease: 'quart.out' })
    }

    object.addEventListener('mouseenter', eventEnter)

    // enter

    const eventLeave = e => {
      // img
      const img = object.querySelector('.media')
      gsap.to(img, { opacity: imgOpacityOut, duration: Xt.vars.timeSmall, ease: 'quart.out', overwrite: true })
    }

    object.addEventListener('mouseleave', eventLeave)
    object.addEventListener('mousedown', eventLeave)

    // unmount

    const unmount = function() {}
    return unmount
  },
})
