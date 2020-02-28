import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/extensions/slider/slider.js'
import gsap from 'gsap'

// https://tympanus.net/Development/PageFlipLayout/
// https://tympanus.net/Development/SlideOutBoxMenu/

Xt.mount.push({
  matches: '.demo--slider--2020-euroricambi',
  mount: object => {
    // vars

    const assetMaskTimeOn = Xt.vars.timeLarge
    const assetMaskTimeOff = Xt.vars.timeSmall
    const assetMaskEaseOn = 'expo.out'
    const assetMaskEaseOff = 'expo.inOut'

    const assetZoom = 0.1
    const assetTimeOn = Xt.vars.timeLarge
    const assetTimeOff = Xt.vars.timeTiny
    const assetEaseOn = 'quart.out'
    const assetEaseOff = 'quart.inOut'

    const cardContentX = 25
    const cardContentTimeOn = Xt.vars.timeLarge
    const cardContentTimeOff = Xt.vars.timeTiny
    const cardContentEaseOn = 'expo.out'
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
        gsap.set(cardContent, { x: cardContentX * ratio * direction, opacity: 1 - ratio })
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
        gsap.to(cardContent, { x: 0, opacity: 1, duration: cardContentTimeOn, ease: cardContentEaseOn })
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
            gsap.set(cardContent, { x: 0, opacity: 1 })
          }
        } else {
          // assetMask
          const assetMasks = tr.querySelectorAll('.slider_img .media-container')
          for (const assetMask of assetMasks) {
            gsap.set(assetMask, { x: 100 * direction + '%' })
            gsap.to(assetMask, { x: 0, duration: assetMaskTimeOn, ease: assetMaskEaseOn, delay: fixDelayOn })
            const assetMaskInner = assetMask.querySelector('.media-inner')
            gsap.set(assetMaskInner, { x: -100 * direction + '%' })
            gsap.to(assetMaskInner, { x: 0, opacity: 1, duration: assetMaskTimeOn, ease: assetMaskEaseOn, delay: fixDelayOn })
          }
          // asset
          const assets = tr.querySelectorAll('.slider_img img')
          for (const asset of assets) {
            gsap.set(asset, { scale: 1 + assetZoom })
            gsap.to(asset, { scale: 1, duration: assetTimeOn, ease: assetEaseOn, delay: fixDelayOn })
          }
          // cardContent
          const cardContents = tr.querySelectorAll('.slider_card .card-item')
          for (const cardContent of cardContents) {
            gsap.set(cardContent, { x: cardContentX * direction, opacity: 0 })
            gsap.to(cardContent, { x: 0, opacity: 1, duration: cardContentTimeOn, ease: cardContentEaseOn, delay: fixDelayOn })
          }
          // card
          const card = tr.querySelector('.slider_card > .card')
          const cardHeight = card.clientHeight
          gsap.set(card, { height: Xt.dataStorage.get(self.object, 'cardHeight') || cardHeight })
          gsap.to(card, { height: cardHeight, duration: cardTimeOn, ease: cardEaseOn, delay: fixDelayOn })
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
          gsap.to(assetMask, { x: -100 * direction + '%', duration: assetMaskTimeOff, ease: assetMaskEaseOff })
          const assetMaskInner = assetMask.querySelector('.media-inner')
          gsap.to(assetMaskInner, { x: 100 * direction + '%', opacity: 0, duration: assetMaskTimeOff, ease: assetMaskEaseOff })
        }
        // asset
        const assets = tr.querySelectorAll('.slider_img img')
        for (const asset of assets) {
          gsap.to(asset, { scale: 1, duration: assetTimeOff, ease: assetEaseOff })
        }
        // cardContent
        const cardContents = tr.querySelectorAll('.slider_card .card-item')
        for (const cardContent of cardContents) {
          gsap.to(cardContent, { x: -cardContentX * direction, opacity: 0, duration: cardContentTimeOff, ease: cardContentEaseOff })
        }
        // card
        const card = tr.querySelector('.slider_card > .card')
        gsap.set(card, { height: '' })
        Xt.dataStorage.set(self.object, 'cardHeight', card.clientHeight)
      }
    }

    self.object.addEventListener('off.xt', eventOff, true)

    // on elements

    const eventOnElements = e => {
      const el = e.target
      // useCapture delegation
      if (self.elements.includes(el)) {
        // move scroll centering el
        const inner = self.object.querySelector('.slider-pagination_inner')
        const scroll = self.object.querySelector('.slider-pagination_scroll')
        if (inner.offsetWidth < scroll.offsetWidth) {
          self.object.classList.remove('slider--nonav')
          if (e.type === 'on.xt') {
            const widthInner = inner.offsetWidth
            const widthScroll = scroll.offsetWidth
            const leftEl = el.offsetLeft
            const widthEl = el.offsetWidth
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
