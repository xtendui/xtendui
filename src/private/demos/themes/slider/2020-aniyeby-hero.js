import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/extensions/slider/slider.js'
import 'xtend-library/src/addons/slider/navigation-sides.js'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo--2020-aniyeby-hero',
  mount: object => {
    // vars

    const assetCoverTime = Xt.vars.timeBig
    const assetCoverEase = 'quint.inOut'

    const assetMaskTime = Xt.vars.timeBig
    const assetMaskEase = 'quint.inOut'

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
        time: 4000,
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
      gsap.set(assetCover, { x: 100 * self.detail.dragRatioInverse * self.direction + '%' })
      const skew = self.detail.dragRatio < 0.5 ? 10 * self.detail.dragRatio : 10 * self.detail.dragRatioInverse
      gsap.to(assetCover, { skewX: skew * self.direction })
    }

    self.dragger.addEventListener('drag.xt', eventDrag)

    // dragreset

    const eventDragReset = () => {
      const target = self.targets.filter(x => self.hasCurrent(x))[0]
      // cover
      const assetCover = target.querySelector('.slide_cover')
      gsap.to(assetCover, { x: 100 * self.direction + '%', duration: assetCoverTime, ease: assetCoverEase })
      gsap.to(assetCover, { skew: 0, duration: assetCoverTime / 2, ease: assetCoverEase })
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
          gsap.to(assetCover, { x: -100 * self.direction + '%', duration: assetCoverTime, ease: assetCoverEase })
          gsap.to(assetCover, { skewX: 10 * self.direction, duration: assetCoverTime / 2, ease: assetCoverEase }).eventCallback('onComplete', () => {
            gsap.to(assetCover, { skewX: 0, duration: assetCoverTime / 2, ease: assetCoverEase })
          })
          // assetMask
          const assetMask = target.querySelector('.slide_item')
          gsap.set(assetMask, { x: 100 * self.direction + '%' })
          gsap.to(assetMask, { x: 0, duration: assetMaskTime, ease: assetMaskEase })
          const assetMaskInner = assetMask.querySelector('.slide_inner')
          gsap.set(assetMaskInner, { x: -100 * self.direction + '%' })
          gsap.to(assetMaskInner, { x: 0, duration: assetMaskTime, ease: assetMaskEase })
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
        const assetCover = target.querySelector('.slide_cover')
        gsap.to(assetCover, { x: -100 * self.direction + '%', duration: assetCoverTime, ease: assetCoverEase })
        gsap.to(assetCover, { skewX: 10 * self.direction, duration: assetCoverTime / 2, ease: assetCoverEase }).eventCallback('onComplete', () => {
          gsap.to(assetCover, { skewX: 0, duration: assetCoverTime / 2, ease: assetCoverEase })
        })
        // assetMask
        const assetMask = target.querySelector('.slide_item')
        gsap.to(assetMask, { x: -100 * self.direction + '%', duration: assetMaskTime, ease: assetMaskEase })
        const assetMaskInner = assetMask.querySelector('.slide_inner')
        gsap.to(assetMaskInner, { x: 100 * self.direction + '%', duration: assetMaskTime, ease: assetMaskEase })
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
