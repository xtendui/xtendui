import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/extensions/slider/slider.js'
import gsap from 'gsap'

// https://tympanus.net/Development/PageFlipLayout/
// https://tympanus.net/Development/SlideOutBoxMenu/

Xt.mount.push({
  matches: '.demo--2020-euroricambi',
  mount: object => {
    // vars

    const assetMaskTimeIn = Xt.vars.timeBig
    const assetMaskTimeOut = Xt.vars.timeMedium
    const assetMaskEaseIn = Xt.vars.easeExpoOut
    const assetMaskEaseOut = Xt.vars.easeExpoInOut

    const assetZoom = 0.1
    const assetTimeIn = Xt.vars.timeBig
    const assetTimeOut = Xt.vars.timeSmall
    const assetEaseIn = Xt.vars.easeQuartOut
    const assetEaseOut = Xt.vars.easeQuartInOut

    const cardContentX = 25
    const cardContentTimeIn = Xt.vars.timeBig
    const cardContentTimeOut = Xt.vars.timeSmall
    const cardContentEaseIn = Xt.vars.easeCheetah
    const cardContentEaseOut = Xt.vars.easeCheetah

    const cardTimeIn = Xt.vars.timeBig
    const cardEaseIn = Xt.vars.easeExpoOut

    // slider

    let self = new Xt.Slider(object, {
      instant: false,
      durationOn: Xt.vars.timeBig,
      durationOff: Xt.vars.timeMedium,
      auto: {
        time: 4500,
        pause: '[data-xt-pag], [data-xt-nav], .slider_card .btn',
      },
      autoHeight: false,
      groupMq: false,
      drag: {
        friction: false,
      },
    })

    // drag

    const eventDrag = () => {
      const tr = self.targets.filter(x => self.hasCurrent(x))[0]
      const ratio = Math.abs(self.detail.dragStart - self.detail.dragCurrent) / tr.clientWidth
      // direction
      let direction = 1
      if (self.detail.dragStart - self.detail.dragCurrent > 0) {
        direction = -1
      }
      // assetMask
      const assetMasks = tr.querySelectorAll('.slider_img .media-container')
      for (const assetMask of assetMasks) {
        const xMax = assetMask.clientWidth
        const xFull = tr.clientWidth
        const xCurrent = (xMax * self.detail.dragPos) / xFull
        gsap.set(assetMask, { x: xCurrent })
        const assetMaskInner = assetMask.querySelector('.media-inner')
        gsap.set(assetMaskInner, { x: -xCurrent, opacity: 1 })
      }
      // assetBackground
      const assetBackgrounds = tr.querySelectorAll('.slider_img_background')
      for (const assetBackground of assetBackgrounds) {
        gsap.set(assetBackground, { opacity: 1 - ratio })
      }
      // cardContent
      const cardContents = tr.querySelectorAll('.slider_card .card-item')
      for (const cardContent of cardContents) {
        gsap.set(cardContent, { opacity: 1 - ratio, x: cardContentX * ratio * direction })
      }
    }

    self.dragger.addEventListener('drag.xt', eventDrag)

    // dragreset

    const eventDragReset = () => {
      const tr = self.targets.filter(x => self.hasCurrent(x))[0]
      // assetMask
      const assetMasks = tr.querySelectorAll('.slider_img .media-container')
      for (const assetMask of assetMasks) {
        const xMax = assetMask.clientWidth
        const xFull = tr.clientWidth
        const xCurrent = (xMax * self.detail.dragPosOld) / xFull
        gsap.set(assetMask, { x: xCurrent })
        gsap.to(assetMask, { x: 0, duration: assetMaskTimeIn, ease: assetMaskEaseIn })
        const assetMaskInner = assetMask.querySelector('.media-inner')
        gsap.set(assetMaskInner, { x: -xCurrent })
        gsap.to(assetMaskInner, { x: 0, opacity: 1, duration: assetMaskTimeIn, ease: assetMaskEaseIn })
      }
      // asset
      const assets = tr.querySelectorAll('.slider_img img')
      for (const asset of assets) {
        gsap.to(asset, { scale: 1, duration: assetTimeIn, ease: assetEaseIn })
      }
      // cardContent
      const cardContents = tr.querySelectorAll('.slider_card .card-item')
      for (const cardContent of cardContents) {
        gsap.to(cardContent, { opacity: 1, x: 0, duration: cardContentTimeIn, ease: cardContentEaseIn })
      }
    }

    self.dragger.addEventListener('dragreset.xt', eventDragReset)

    // on

    const eventOn = e => {
      const tr = e.target
      // useCapture delegation
      if (self.targets.includes(tr)) {
        // direction
        let direction = 1
        if (tr.classList.contains('inverse')) {
          direction = -1
        }
        if (self.initial) {
          // assetMask
          const assetMasks = tr.querySelectorAll('.slider_img .media-container')
          for (const assetMask of assetMasks) {
            gsap.killTweensOf(assetMask)
            gsap.set(assetMask, { x: 0 })
            const assetMaskInner = assetMask.querySelector('.media-inner')
            gsap.killTweensOf(assetMaskInner)
            gsap.set(assetMaskInner, { x: 0, opacity: 1 })
          }
          // asset
          const assets = tr.querySelectorAll('.slider_img img')
          for (const asset of assets) {
            gsap.killTweensOf(asset)
            gsap.set(asset, { scale: 1 })
          }
          // cardContent
          const cardContents = tr.querySelectorAll('.slider_card .card-item')
          for (const cardContent of cardContents) {
            gsap.killTweensOf(cardContent)
            gsap.set(cardContent, { opacity: 1, x: 0 })
          }
        } else {
          // assetMask
          const assetMasks = tr.querySelectorAll('.slider_img .media-container')
          for (const assetMask of assetMasks) {
            const xMax = assetMask.clientWidth
            gsap.set(assetMask, { x: xMax * direction })
            gsap.to(assetMask, { x: 0, duration: assetMaskTimeIn, ease: assetMaskEaseIn })
            const assetMaskInner = assetMask.querySelector('.media-inner')
            gsap.set(assetMaskInner, { x: -xMax * direction })
            gsap.to(assetMaskInner, { x: 0, opacity: 1, duration: assetMaskTimeIn, ease: assetMaskEaseIn })
          }
          // asset
          const assets = tr.querySelectorAll('.slider_img img')
          for (const asset of assets) {
            gsap.set(asset, { scale: 1 + assetZoom })
            gsap.to(asset, { scale: 1, duration: assetTimeIn, ease: assetEaseIn })
          }
          // cardContent
          const cardContents = tr.querySelectorAll('.slider_card .card-item')
          for (const cardContent of cardContents) {
            gsap.set(cardContent, { opacity: 0, x: cardContentX * direction })
            gsap.to(cardContent, { opacity: 1, x: 0, duration: cardContentTimeIn, ease: cardContentEaseIn })
          }
          // card
          const card = tr.querySelector('.slider_card > .card')
          const cardHeight = card.clientHeight
          gsap.set(card, { height: Xt.dataStorage.get(self.object, 'cardHeight') || cardHeight })
          gsap.to(card, { height: cardHeight, duration: cardTimeIn, ease: cardEaseIn })
        }
      }
    }

    self.object.addEventListener('on.xt', eventOn, true)

    // off

    const eventOff = e => {
      const tr = e.target
      // useCapture delegation
      if (self.targets.includes(tr)) {
        // direction
        let direction = 1
        if (tr.classList.contains('inverse')) {
          direction = -1
        }
        // assetMask
        const assetMasks = tr.querySelectorAll('.slider_img .media-container')
        for (const assetMask of assetMasks) {
          const xMax = assetMask.clientWidth
          gsap.to(assetMask, { x: -xMax * direction, duration: assetMaskTimeOut, ease: assetMaskEaseOut })
          const assetMaskInner = assetMask.querySelector('.media-inner')
          gsap.to(assetMaskInner, { x: xMax * direction, opacity: 0, duration: assetMaskTimeOut, ease: assetMaskEaseOut })
        }
        // asset
        const assets = tr.querySelectorAll('.slider_img img')
        for (const asset of assets) {
          gsap.to(asset, { scale: 1, duration: assetTimeOut, ease: assetEaseOut })
        }
        // cardContent
        const cardContents = tr.querySelectorAll('.slider_card .card-item')
        for (const cardContent of cardContents) {
          gsap.to(cardContent, { opacity: 0, x: -cardContentX * direction, duration: cardContentTimeOut, ease: cardContentEaseOut })
        }
        // card
        const card = tr.querySelector('.slider_card > .card')
        gsap.set(card, { height: '' })
        Xt.dataStorage.set(self.object, 'cardHeight', card.clientHeight)
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
