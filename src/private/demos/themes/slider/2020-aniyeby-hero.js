import { Xt } from '/src/xt.js'
import '/src/vars.js'
import '/src/extensions/slider/slider.js'
import '/src/addons/slider/navigation-sides.js'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo--2020-aniyeby-hero',
  mount: object => {
    // vars

    const assetCoverTimeOn = Xt.vars.timeBig
    const assetCoverEaseOn = 'quint.inOut'
    const assetCoverTimeOff = Xt.vars.timeBig
    const assetCoverEaseOff = 'quint.inOut'

    const assetMaskTimeOn = Xt.vars.timeBig
    const assetMaskEaseOn = 'quint.inOut'
    const assetMaskTimeOff = Xt.vars.timeBig
    const assetMaskEaseOff = 'quint.inOut'

    const assetZoom = 0.25
    const assetTimeOn = Xt.vars.timeBig / 2
    const assetDelayOn = Xt.vars.timeBig / 2
    const assetEaseOn = 'expo.out'

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
    }

    self.dragger.addEventListener('drag.xt', eventDrag)

    // dragreset

    const eventDragReset = () => {
      const target = self.targets.filter(x => self.hasCurrent(x))[0]
      // cover
      const assetCover = target.querySelector('.slide_cover')
      gsap.to(assetCover, { x: 100 * self.direction + '%', duration: assetCoverTimeOff, ease: assetCoverEaseOff })
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
          gsap.set(assetCover, { x: 100 * self.direction + '%' })
          // assetMask
          const assetMask = target.querySelector('.slide_item')
          gsap.killTweensOf(assetMask)
          gsap.set(assetMask, { x: 0 })
          const assetMaskInner = assetMask.querySelector('.slide_inner')
          gsap.killTweensOf(assetMaskInner)
          gsap.set(assetMaskInner, { x: 0 })
          // asset
          const asset = target.querySelector('.slide_item img')
          gsap.killTweensOf(asset)
          gsap.set(asset, { scale: 1 })
        } else {
          // cover
          const assetCover = target.querySelector('.slide_cover')
          gsap.set(assetCover, { x: 100 * self.direction + '%' })
          gsap.to(assetCover, { x: -100 * self.direction + '%', duration: assetCoverTimeOn, ease: assetCoverEaseOn })
          // assetMask
          const assetMask = target.querySelector('.slide_item')
          gsap.set(assetMask, { x: 100 * self.direction + '%' })
          gsap.to(assetMask, { x: 0, duration: assetMaskTimeOn, ease: assetMaskEaseOn })
          const assetMaskInner = assetMask.querySelector('.slide_inner')
          gsap.set(assetMaskInner, { x: -100 * self.direction + '%' })
          gsap.to(assetMaskInner, { x: 0, duration: assetMaskTimeOn, ease: assetMaskEaseOn })
          // asset
          const asset = target.querySelector('.slide_item img')
          gsap.set(asset, { scale: 1 + assetZoom })
          gsap.to(asset, { scale: 1, duration: assetTimeOn, ease: assetEaseOn, delay: assetDelayOn })
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
        gsap.to(assetCover, { x: -100 * self.direction + '%', duration: assetCoverTimeOff, ease: assetCoverEaseOff })
        // assetMask
        const assetMask = target.querySelector('.slide_item')
        gsap.to(assetMask, { x: -100 * self.direction + '%', duration: assetMaskTimeOff, ease: assetMaskEaseOff })
        const assetMaskInner = assetMask.querySelector('.slide_inner')
        gsap.to(assetMaskInner, { x: 100 * self.direction + '%', duration: assetMaskTimeOff, ease: assetMaskEaseOff })
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
