import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/extensions/slider/slider.js'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo--2020-euroricambi-cards',
  mount: object => {
    // vars

    const assetMaskTimeOn = Xt.vars.timeLarge
    const assetMaskEaseOn = 'expo.out'
    const assetMaskTimeOff = Xt.vars.timeSmall
    const assetMaskEaseOff = 'quart.out'

    const assetZoom = 0.2
    const assetTimeOn = Xt.vars.timeLarge
    const assetEaseOn = 'quart.out'
    const assetTimeOff = Xt.vars.timeTiny
    const assetEaseOff = 'quart.inOut'

    const cardContentX = 25
    const cardContentTimeOn = Xt.vars.timeLarge
    const cardContentEaseOn = 'expo.out'
    const cardContentTimeOff = Xt.vars.timeTiny
    const cardContentEaseOff = 'expo.inOut'

    const cardTimeOn = Xt.vars.timeLarge
    const cardEaseOn = 'expo.out'

    const fixDelayOn = 100

    // slider

    let self = new Xt.Slider(object, {
      instant: { elements: true, elementsInner: true },
      durationOn: Xt.vars.timeLarge + fixDelayOn,
      durationOff: Xt.vars.timeSmall,
      auto: {
        time: 4500,
        pause: '[data-xt-pag], [data-xt-nav], .slide_card .btn',
      },
      autoHeight: false,
      groupMq: false,
      drag: {
        overflow: false,
      },
    })

    // drag

    const eventDrag = () => {
      const target = self.targets.filter(x => self.hasCurrent(x))[0]
      // assetMask
      const assetMasks = target.querySelectorAll('.slide_asset .media-container')
      for (const assetMask of assetMasks) {
        gsap.set(assetMask, { x: -100 * self.detail.dragRatio * self.direction + '%' })
        const assetMaskInner = assetMask.querySelector('.media-inner')
        gsap.set(assetMaskInner, { x: 100 * self.detail.dragRatio * self.direction + '%', opacity: 1 })
      }
      // assetBackground
      const assetBackgrounds = target.querySelectorAll('.slide_asset_background')
      for (const assetBackground of assetBackgrounds) {
        gsap.set(assetBackground, { opacity: self.detail.dragRatioInverse })
      }
      // asset
      const assets = target.querySelectorAll('.slide_asset img')
      for (const asset of assets) {
        gsap.set(asset, { scale: 1 + assetZoom * self.detail.dragRatio })
      }
      // cardContent
      const cardContents = target.querySelectorAll('.slide_card .card-item')
      for (const cardContent of cardContents) {
        gsap.set(cardContent, { x: -cardContentX * self.detail.dragRatio * self.direction, opacity: self.detail.dragRatioInverse })
      }
    }

    self.dragger.addEventListener('drag.xt', eventDrag)

    // dragreset

    const eventDragReset = () => {
      const target = self.targets.filter(x => self.hasCurrent(x))[0]
      // assetMask
      const assetMasks = target.querySelectorAll('.slide_asset .media-container')
      for (const assetMask of assetMasks) {
        gsap.to(assetMask, { x: 0, duration: assetMaskTimeOff, ease: assetMaskEaseOff })
        const assetMaskInner = assetMask.querySelector('.media-inner')
        gsap.to(assetMaskInner, { x: 0, opacity: 1, duration: assetMaskTimeOff, ease: assetMaskEaseOff })
      }
      // asset
      const assets = target.querySelectorAll('.slide_asset img')
      for (const asset of assets) {
        gsap.to(asset, { scale: 1, duration: assetTimeOff, ease: assetEaseOff })
      }
      // cardContent
      const cardContents = target.querySelectorAll('.slide_card .card-item')
      for (const cardContent of cardContents) {
        gsap.to(cardContent, { x: 0, opacity: 1, duration: cardContentTimeOff, ease: cardContentEaseOff })
      }
    }

    self.dragger.addEventListener('dragreset.xt', eventDragReset)

    // on

    const eventOn = e => {
      const target = e.target
      // useCapture delegation
      if (self.targets.includes(target)) {
        if (self.initial) {
          // assetMask
          const assetMasks = target.querySelectorAll('.slide_asset .media-container')
          for (const assetMask of assetMasks) {
            gsap.killTweensOf(assetMask)
            gsap.set(assetMask, { x: 0 })
            const assetMaskInner = assetMask.querySelector('.media-inner')
            gsap.killTweensOf(assetMaskInner)
            gsap.set(assetMaskInner, { x: 0, opacity: 1 })
          }
          // asset
          const assets = target.querySelectorAll('.slide_asset img')
          for (const asset of assets) {
            gsap.killTweensOf(asset)
            gsap.set(asset, { scale: 1 })
          }
          // cardContent
          const cardContents = target.querySelectorAll('.slide_card .card-item')
          for (const cardContent of cardContents) {
            gsap.killTweensOf(cardContent)
            gsap.set(cardContent, { x: 0, opacity: 1 })
          }
        } else {
          // assetMask
          const assetMasks = target.querySelectorAll('.slide_asset .media-container')
          for (const assetMask of assetMasks) {
            if (!self.detail.dragging) {
              gsap.set(assetMask, { x: 100 * self.direction + '%' })
            }
            gsap.to(assetMask, { x: 0, duration: assetMaskTimeOn, ease: assetMaskEaseOn, delay: fixDelayOn })
            const assetMaskInner = assetMask.querySelector('.media-inner')
            gsap.set(assetMaskInner, { x: -100 * self.direction + '%' })
            gsap.to(assetMaskInner, { x: 0, opacity: 1, duration: assetMaskTimeOn, ease: assetMaskEaseOn, delay: fixDelayOn })
          }
          // asset
          const assets = target.querySelectorAll('.slide_asset img')
          for (const asset of assets) {
            if (!self.detail.dragging) {
              gsap.set(asset, { scale: 1 + assetZoom })
            }
            gsap.to(asset, { scale: 1, duration: assetTimeOn, ease: assetEaseOn, delay: fixDelayOn })
          }
          // cardContent
          const cardContents = target.querySelectorAll('.slide_card .card-item')
          for (const cardContent of cardContents) {
            if (!self.detail.dragging) {
              gsap.set(cardContent, { x: cardContentX * self.direction, opacity: 0 })
            }
            gsap.to(cardContent, { x: 0, opacity: 1, duration: cardContentTimeOn, ease: cardContentEaseOn, delay: fixDelayOn })
          }
          // card
          const card = target.querySelector('.slide_card > .card')
          const cardHeight = card.clientHeight
          if (!self.detail.dragging) {
            gsap.set(card, { height: Xt.dataStorage.get(self.object, 'cardHeight') || cardHeight })
          }
          gsap.to(card, { height: cardHeight, duration: cardTimeOn, ease: cardEaseOn, delay: fixDelayOn })
        }
      }
    }

    self.object.addEventListener('on.xt', eventOn, true)

    // off

    const eventOff = e => {
      const target = e.target
      // useCapture delegation
      if (self.targets.includes(target)) {
        // assetMask
        const assetMasks = target.querySelectorAll('.slide_asset .media-container')
        for (const assetMask of assetMasks) {
          gsap.to(assetMask, { x: -100 * self.direction + '%', duration: assetMaskTimeOff, ease: assetMaskEaseOff })
          const assetMaskInner = assetMask.querySelector('.media-inner')
          gsap.to(assetMaskInner, { x: 100 * self.direction + '%', opacity: 0, duration: assetMaskTimeOff, ease: assetMaskEaseOff })
        }
        // asset
        const assets = target.querySelectorAll('.slide_asset img')
        for (const asset of assets) {
          gsap.to(asset, { scale: 1 + assetZoom, duration: assetTimeOff, ease: assetEaseOff })
        }
        // cardContent
        const cardContents = target.querySelectorAll('.slide_card .card-item')
        for (const cardContent of cardContents) {
          gsap.to(cardContent, { x: -cardContentX * self.direction, opacity: 0, duration: cardContentTimeOff, ease: cardContentEaseOff })
        }
        // card
        const card = target.querySelector('.slide_card > .card')
        gsap.set(card, { height: '' })
        Xt.dataStorage.set(self.object, 'cardHeight', card.clientHeight)
      }
    }

    self.object.addEventListener('off.xt', eventOff, true)

    // on elements

    const eventOnElements = e => {
      const element = e.target
      // useCapture delegation
      if (self.elements.includes(element)) {
        // move scroll centering el
        const inner = self.object.querySelector('.slider-pagination_inner')
        const scroll = self.object.querySelector('.slider-pagination_scroll')
        if (inner.offsetWidth < scroll.offsetWidth) {
          self.object.classList.remove('slider--nonav')
          if (e.type === 'on.xt') {
            const widthInner = inner.offsetWidth
            const widthScroll = scroll.offsetWidth
            const leftEl = element.offsetLeft
            const widthEl = element.offsetWidth
            let final = widthInner / 2 - leftEl
            // contain initial
            final = leftEl + widthEl / 2 > widthInner / 2 ? final - widthEl / 2 : 0
            // contain final
            final = leftEl + widthEl / 2 < widthScroll - widthInner / 2 ? final : -widthScroll + widthInner
            // set
            scroll.style.left = final + 'px'
          }
        } else {
          if (e.type === 'on.xt') {
            self.object.classList.add('slider--nonav')
            // set
            scroll.style.left = ''
          }
        }
      }
    }

    self.object.addEventListener('on.xt', eventOnElements, true)
    self.object.addEventListener('medialoaded.xt', eventOnElements, true)

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  },
})
