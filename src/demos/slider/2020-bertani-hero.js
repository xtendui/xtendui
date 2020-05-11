import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/extensions/slider/slider.js'
import 'xtend-library/src/addons/slider/navigation-sides.js'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo--2020-bertani-hero',
  mount: object => {
    // vars

    const assetMaskTimeOn = Xt.vars.timeLarge
    const assetMaskTimeOff = Xt.vars.timeLarge
    const assetMaskEaseOn = 'quart.inOut'
    const assetMaskEaseOff = 'quart.inOut'

    const assetZoom = 0.25
    const assetTimeOn = Xt.vars.timeLarge
    const assetEaseOn = 'quart.inOut'

    const contentX = 50
    const contentTimeOn = Xt.vars.timeLarge
    const contentEaseOn = 'quart.inOut'

    // slider

    let self = new Xt.Slider(object, {
      instant: true,
      durationOn: Xt.vars.timeLarge,
      durationOff: Xt.vars.timeLarge,
      auto: {
        //time: 4500,
        pause: '[data-xt-pag], [data-xt-nav]',
      },
      autoHeight: false,
      groupMq: false,
      drag: {
        duration: Xt.vars.timeLarge,
        overflow: false,
      },
    })

    // dragstart

    const eventDragStart = () => {
      const nexts = self.targets.filter(x => x.classList.contains('next'))
      for (const next of nexts) {
        clearTimeout(Xt.dataStorage.get(next, 'dragNextTimeout'))
      }
    }

    self.dragger.addEventListener('dragstart.xt', eventDragStart)

    // dragend

    const eventDragEnd = () => {
      const nexts = self.targets.filter(x => x.classList.contains('next'))
      for (const next of nexts) {
        Xt.dataStorage.set(
          next,
          self.componentNamespace + 'dragNextTimeout',
          setTimeout(() => {
            next.classList.remove('next')
          }, assetMaskTimeOn)
        )
      }
    }

    self.dragger.addEventListener('dragend.xt', eventDragEnd)

    // drag

    const eventDrag = () => {
      const tr = self.targets.filter(x => self.hasCurrent(x))[0]
      // assetMask
      const assetMasksTr = tr.querySelectorAll('.slide_item')
      for (const assetMask of assetMasksTr) {
        gsap.set(assetMask, { x: -100 * self.detail.dragRatio * self.direction + '%' })
        const assetMaskInner = assetMask.querySelector('.slide_item_inner')
        gsap.set(assetMaskInner, { x: 100 * self.detail.dragRatio * self.direction / 2 + '%' })
      }
      // next
      const nexts = self.direction > 0 ? self.getTargets(self.getNext()) : self.getTargets(self.getPrev())
      for (const next of nexts) {
        next.classList.add('next')
        // assetMask
        const assetMasks = next.querySelectorAll('.slide_item')
        for (const assetMask of assetMasks) {
          gsap.set(assetMask, { x: 100 * self.detail.dragRatioInverse * self.direction + '%' })
          const assetMaskInner = assetMask.querySelector('.slide_item_inner')
          gsap.set(assetMaskInner, { x: -100 * self.detail.dragRatioInverse * self.direction / 2 + '%' })
        }
        // asset
        const assets = next.querySelectorAll('.slide_item_img img')
        for (const asset of assets) {
          gsap.set(asset, { scale: 1 + assetZoom * self.detail.dragRatioInverse })
        }
        // content
        const contents = next.querySelectorAll('.slide_item_text')
        for (const content of contents) {
          gsap.set(content, { x: contentX * self.detail.dragRatioInverse * self.direction })
        }
      }
    }

    self.dragger.addEventListener('drag.xt', eventDrag)

    // dragreset

    const eventDragReset = () => {
      const tr = self.targets.filter(x => self.hasCurrent(x))[0]
      // assetMask
      const assetMasksTr = tr.querySelectorAll('.slide_item')
      for (const assetMask of assetMasksTr) {
        gsap.to(assetMask, { x: 0, duration: assetMaskTimeOff, ease: assetMaskEaseOff })
        const assetMaskInner = assetMask.querySelector('.slide_item_inner')
        gsap.to(assetMaskInner, { x: 0, duration: assetMaskTimeOff, ease: assetMaskEaseOff })
      }
      // next
      const nexts = self.targets.filter(x => x.classList.contains('next'))
      for (const next of nexts) {
        // assetMask
        const assetMasks = next.querySelectorAll('.slide_item')
        for (const assetMask of assetMasks) {
          const xCurrent = assetMask.clientWidth * self.direction
          gsap.to(assetMask, { x: xCurrent, duration: assetMaskTimeOff, ease: assetMaskEaseOff })
          const assetMaskInner = assetMask.querySelector('.slide_item_inner')
          gsap.to(assetMaskInner, { x: -xCurrent / 2, duration: assetMaskTimeOff, ease: assetMaskEaseOff })
        }
      }
    }

    self.dragger.addEventListener('dragreset.xt', eventDragReset)

    // on

    const eventOn = e => {
      const tr = e.target
      // useCapture delegation
      if (self.targets.includes(tr)) {
        if (self.initial) {
          // assetMask
          const assetMasks = tr.querySelectorAll('.slide_item')
          for (const assetMask of assetMasks) {
            gsap.killTweensOf(assetMask)
            gsap.set(assetMask, { x: 0 })
            const assetMaskInner = assetMask.querySelector('.slide_item_inner')
            gsap.killTweensOf(assetMaskInner)
            gsap.set(assetMaskInner, { x: 0 })
          }
          // asset
          const assets = tr.querySelectorAll('.slide_item_img img')
          for (const asset of assets) {
            gsap.killTweensOf(asset)
            gsap.set(asset, { scale: 1 })
          }
          // content
          const contents = tr.querySelectorAll('.slide_item_text')
          for (const content of contents) {
            gsap.killTweensOf(content)
            gsap.set(content, { x: 0 })
          }
        } else {
          // assetMask
          const assetMasks = tr.querySelectorAll('.slide_item')
          for (const assetMask of assetMasks) {
            if (!self.detail.dragging) {
              gsap.set(assetMask, { x: 100 * self.direction + '%' })
            }
            gsap.to(assetMask, { x: 0, duration: assetMaskTimeOn, ease: assetMaskEaseOn })
            const assetMaskInner = assetMask.querySelector('.slide_item_inner')
            if (!self.detail.dragging) {
              gsap.set(assetMaskInner, {x: - (100 * self.direction / 2) + '%'})
            }
            gsap.to(assetMaskInner, { x: 0, duration: assetMaskTimeOn, ease: assetMaskEaseOn })
          }
          // asset
          const assets = tr.querySelectorAll('.slide_item_img img')
          for (const asset of assets) {
            if (!self.detail.dragging) {
              gsap.set(asset, {scale: 1 + assetZoom})
            }
            gsap.to(asset, { scale: 1, duration: assetTimeOn, ease: assetEaseOn })
          }
          // content
          const contents = tr.querySelectorAll('.slide_item_text')
          for (const content of contents) {
            if (!self.detail.dragging) {
              gsap.set(content, {x: contentX * self.direction})
            }
            gsap.to(content, { x: 0, duration: contentTimeOn, ease: contentEaseOn })
          }
        }
      }
    }

    self.object.addEventListener('on.xt', eventOn, true)

    // off

    const eventOff = e => {
      const tr = e.target
      // useCapture delegation
      if (self.targets.includes(tr)) {
        // assetMask
        const assetMasks = tr.querySelectorAll('.slide_item')
        for (const assetMask of assetMasks) {
          gsap.to(assetMask, { x: -100 * self.direction + '%', duration: assetMaskTimeOff, ease: assetMaskEaseOff })
          const assetMaskInner = assetMask.querySelector('.slide_item_inner')
          gsap.to(assetMaskInner, { x: (100 * self.direction / 2) + '%', duration: assetMaskTimeOff, ease: assetMaskEaseOff })
        }
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
