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

    const assetMaskTimeOn = Xt.vars.timeBig
    const assetMaskTimeOff = Xt.vars.timeMedium
    const assetMaskEaseOn = 'expo.out'
    const assetMaskEaseOff = 'expo.inOut'

    const assetZoom = 0.1
    const assetTimeOn = Xt.vars.timeBig
    const assetTimeOff = Xt.vars.timeSmall
    const assetEaseOn = 'quart.out'
    const assetEaseOff = 'quart.inOut'

    const cardContentX = 25
    const cardContentTimeOn = Xt.vars.timeBig
    const cardContentTimeOff = Xt.vars.timeSmall
    const cardContentEaseOn = 'cheetah'
    const cardContentEaseOff = 'cheetah'

    const cardTimeOn = Xt.vars.timeBig
    const cardEaseOn = 'expo.out'

    // slider

    let self = new Xt.Slider(object, {
      instant: true,
      durationOn: Xt.vars.timeBig,
      durationOff: Xt.vars.timeMedium,
      /*
      auto: {
        time: 4500,
        pause: '[data-xt-pag], [data-xt-nav], .slider_card .btn',
      },*/
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
        gsap.to(assetMask, { x: 0, duration: assetMaskTimeOn, ease: assetMaskEaseOn })
        const assetMaskInner = assetMask.querySelector('.media-inner')
        gsap.set(assetMaskInner, { x: -xCurrent })
        gsap.to(assetMaskInner, { x: 0, opacity: 1, duration: assetMaskTimeOn, ease: assetMaskEaseOn })
      }
      // asset
      const assets = tr.querySelectorAll('.slider_img img')
      for (const asset of assets) {
        gsap.to(asset, { scale: 1, duration: assetTimeOn, ease: assetEaseOn })
      }
      // cardContent
      const cardContents = tr.querySelectorAll('.slider_card .card-item')
      for (const cardContent of cardContents) {
        gsap.to(cardContent, { opacity: 1, x: 0, duration: cardContentTimeOn, ease: cardContentEaseOn })
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
            gsap.to(assetMask, { x: 0, duration: assetMaskTimeOn, ease: assetMaskEaseOn })
            const assetMaskInner = assetMask.querySelector('.media-inner')
            gsap.set(assetMaskInner, { x: -xMax * direction })
            gsap.to(assetMaskInner, { x: 0, opacity: 1, duration: assetMaskTimeOn, ease: assetMaskEaseOn })
          }
          // asset
          const assets = tr.querySelectorAll('.slider_img img')
          for (const asset of assets) {
            gsap.set(asset, { scale: 1 + assetZoom })
            gsap.to(asset, { scale: 1, duration: assetTimeOn, ease: assetEaseOn })
          }
          // cardContent
          const cardContents = tr.querySelectorAll('.slider_card .card-item')
          for (const cardContent of cardContents) {
            gsap.set(cardContent, { opacity: 0, x: cardContentX * direction })
            gsap.to(cardContent, { opacity: 1, x: 0, duration: cardContentTimeOn, ease: cardContentEaseOn })
          }
          // card
          const card = tr.querySelector('.slider_card > .card')
          const cardHeight = card.clientHeight
          gsap.set(card, { height: Xt.dataStorage.get(self.object, 'cardHeight') || cardHeight })
          gsap.to(card, { height: cardHeight, duration: cardTimeOn, ease: cardEaseOn })
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
          gsap.to(assetMask, { x: -xMax * direction, duration: assetMaskTimeOff, ease: assetMaskEaseOff })
          const assetMaskInner = assetMask.querySelector('.media-inner')
          gsap.to(assetMaskInner, { x: xMax * direction, opacity: 0, duration: assetMaskTimeOff, ease: assetMaskEaseOff })
        }
        // asset
        const assets = tr.querySelectorAll('.slider_img img')
        for (const asset of assets) {
          gsap.to(asset, { scale: 1, duration: assetTimeOff, ease: assetEaseOff })
        }
        // cardContent
        const cardContents = tr.querySelectorAll('.slider_card .card-item')
        for (const cardContent of cardContents) {
          gsap.to(cardContent, { opacity: 0, x: -cardContentX * direction, duration: cardContentTimeOff, ease: cardContentEaseOff })
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
