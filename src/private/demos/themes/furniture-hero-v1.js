import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/extensions/slider/slider.js'
import 'xtend-library/src/addons/slider/navigation-sides.js'
import 'xtend-library/src/addons/animation/propagate-interaction.js'
import gsap from 'gsap'

/**
 * PropagateInteraction
 */

Xt.mount.push({
  matches: '#iframe--furniture-hero-v1 body a, #iframe--furniture-hero-v1 body button', // add your own selector instead of body to contain the code
  mount: object => {
    new Xt.PropagateInteraction(object, {
      targets: '.btn',
    })
  },
})

/**
 * link animation
 */

Xt.mount.push({
  matches: '#iframe--furniture-hero-v1 body .slide', // add your own selector instead of body to contain the code
  mount: function (object) {
    // vars

    const links = object.tagName === 'A' || object.tagName === 'BUTTON' ? Xt.arrSingle(object) : object.querySelectorAll('a, button')
    const img = object.querySelector('.media')
    const imgOpacityIn = 0.75
    const imgOpacityOut = 1

    // enter

    const eventEnter = e => {
      // img
      gsap.to(img, { opacity: imgOpacityIn, duration: Xt.vars.timeSmall, ease: 'quart.out' })
    }

    for (const link of links) {
      link.addEventListener('mouseenter', eventEnter)
    }

    // enter

    const eventLeave = e => {
      // img
      gsap.to(img, { opacity: imgOpacityOut, duration: Xt.vars.timeSmall, ease: 'quart.out', overwrite: true })
    }

    for (const link of links) {
      link.addEventListener('mouseleave', eventLeave)
    }
  },
})

/**
 * slider
 */

Xt.mount.push({
  matches: '#iframe--furniture-hero-v1 body .slider', // add your own selector instead of body to contain the code
  mount: object => {
    // vars

    const assetMaskTimeOn = Xt.vars.timeBig
    const assetMaskEaseOn = 'quint.inOut'
    const assetMaskTimeOff = Xt.vars.timeBig
    const assetMaskEaseOff = 'quint.inOut'
    const assetMaskEaseDragging = 'quint.out'

    const assetZoom = 0.25
    const assetTime = Xt.vars.timeBig
    const assetEase = 'quint.inOut'
    const assetTimeDragging = Xt.vars.timeBig + Xt.vars.timeBig
    const assetEaseDragging = 'quint.out'

    const contentX = 50
    const contentTime = Xt.vars.timeBig
    const contentEase = 'quint.inOut'
    const contentEaseDragging = 'quint.out'

    const lineSizeMin = 120
    const lineSizeMax = 200
    const lineDelayMin = Xt.vars.timeMedium
    const lineDelayMax = Xt.vars.timeLarge

    // slider

    let self = new Xt.Slider(object, {
      instant: true,
      durationOn: Xt.vars.timeBig,
      durationOff: Xt.vars.timeBig,
      auto: {
        time: 5000,
        pause: '.hero_content_inner',
      },
      autoHeight: false,
      groupMq: false,
      drag: {
        duration: Xt.vars.timeBig,
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
      const assetMask = tr.querySelector('.hero')
      gsap.set(assetMask, { x: -100 * self.detail.dragRatio * self.direction + '%' })
      const assetMaskInner = assetMask.querySelector('.hero_inner')
      gsap.set(assetMaskInner, { x: (100 * self.detail.dragRatio * self.direction) / 2 + '%' })
      // next
      const nexts = self.direction > 0 ? self.getTargets(self.getNext()) : self.getTargets(self.getPrev())
      for (const next of nexts) {
        next.classList.add('next')
        // assetMask
        const assetMask = next.querySelector('.hero')
        gsap.set(assetMask, { x: 100 * self.detail.dragRatioInverse * self.direction + '%' })
        const assetMaskInner = assetMask.querySelector('.hero_inner')
        gsap.set(assetMaskInner, { x: (-100 * self.detail.dragRatioInverse * self.direction) / 2 + '%' })
        // asset
        const asset = next.querySelector('.hero_asset .media')
        gsap.set(asset, { scale: 1 + assetZoom * self.detail.dragRatioInverse })
        // content
        const content = next.querySelector('.hero_content_outer')
        gsap.set(content, { x: contentX * self.detail.dragRatioInverse * self.direction })
      }
    }

    self.dragger.addEventListener('drag.xt', eventDrag)

    // dragreset

    const eventDragReset = () => {
      const tr = self.targets.filter(x => self.hasCurrent(x))[0]
      // assetMask
      const assetMask = tr.querySelector('.hero')
      gsap.to(assetMask, { x: 0, duration: assetMaskTimeOff, ease: assetMaskEaseOff })
      const assetMaskInner = assetMask.querySelector('.hero_inner')
      gsap.to(assetMaskInner, { x: 0, duration: assetMaskTimeOff, ease: assetMaskEaseOff })
      // next
      const nexts = self.targets.filter(x => x.classList.contains('next'))
      for (const next of nexts) {
        // assetMask
        const assetMask = next.querySelector('.hero')
        const xCurrent = assetMask.clientWidth * self.direction
        gsap.to(assetMask, { x: xCurrent, duration: assetMaskTimeOff, ease: assetMaskEaseOff })
        const assetMaskInner = assetMask.querySelector('.hero_inner')
        gsap.to(assetMaskInner, { x: -xCurrent / 2, duration: assetMaskTimeOff, ease: assetMaskEaseOff })
      }
    }

    self.dragger.addEventListener('dragreset.xt', eventDragReset)

    // on

    const eventOn = e => {
      const tr = e.target
      // useCapture delegation
      if (self.targets.includes(tr)) {
        if (self.initial) {
          // inject
          for (const target of self.targets) {
            if (!target.querySelector('.hero_line')) {
              const inject = Xt.createElement(`
              <div class="hero_line">
                <div class="hero_line_inner">
                  <div class="hero_line_small"></div>
                  <div class="hero_line_big"></div>
                </div>
              </div>`)
              target.querySelector('.hero_inner').prepend(inject)
            }
          }
          // assetMask
          const assetMask = tr.querySelector('.hero')
          gsap.killTweensOf(assetMask)
          gsap.set(assetMask, { x: 0 })
          const assetMaskInner = assetMask.querySelector('.hero_inner')
          gsap.killTweensOf(assetMaskInner)
          gsap.set(assetMaskInner, { x: 0 })
          // asset
          const asset = tr.querySelector('.hero_asset .media')
          gsap.killTweensOf(asset)
          gsap.set(asset, { scale: 1 })
          // content
          const content = tr.querySelector('.hero_content_outer')
          gsap.killTweensOf(content)
          gsap.set(content, { x: 0 })
          // line
          const lineSmall = tr.querySelector('.hero_line_small')
          gsap.killTweensOf(lineSmall)
          gsap.set(lineSmall, { height: lineSizeMax, bottom: 0, opacity: 1 })
          const lineBig = tr.querySelector('.hero_line_big')
          gsap.killTweensOf(lineBig)
          gsap.set(lineBig, { height: lineSizeMin, bottom: lineSizeMax - lineSizeMin })
        } else {
          // assetMask
          const assetMask = tr.querySelector('.hero')
          if (!self.detail.dragging) {
            gsap.set(assetMask, { x: 100 * self.direction + '%' })
          }
          gsap.to(assetMask, { x: 0, duration: assetMaskTimeOn, ease: self.detail.dragging ? assetMaskEaseDragging : assetMaskEaseOn })
          const assetMaskInner = assetMask.querySelector('.hero_inner')
          if (!self.detail.dragging) {
            gsap.set(assetMaskInner, { x: -((100 * self.direction) / 2) + '%' })
          }
          gsap.to(assetMaskInner, { x: 0, duration: assetMaskTimeOn, ease: self.detail.dragging ? assetMaskEaseDragging : assetMaskEaseOn })
          // asset
          const asset = tr.querySelector('.hero_asset .media')
          if (!self.detail.dragging) {
            gsap.set(asset, { scale: 1 + assetZoom })
          }
          gsap.to(asset, {
            scale: 1,
            duration: self.detail.dragging ? assetTimeDragging : assetTime,
            ease: self.detail.dragging ? assetEaseDragging : assetEase,
          })
          // content
          const content = tr.querySelector('.hero_content_outer')
          if (!self.detail.dragging) {
            gsap.set(content, { x: contentX * self.direction })
          }
          gsap.to(content, { x: 0, duration: contentTime, ease: self.detail.dragging ? contentEaseDragging : contentEase })
          // line
          const lineSmall = tr.querySelector('.hero_line_small')
          gsap.set(lineSmall, { height: 0, bottom: 0, opacity: 1 })
          gsap.to(lineSmall, { height: lineSizeMax, bottom: 0, opacity: 0.3, duration: Xt.vars.timeSmall, ease: 'expo.in', delay: lineDelayMin })
          const lineBig = tr.querySelector('.hero_line_big')
          gsap.set(lineBig, { height: 0, bottom: 0 })
          gsap.to(lineBig, { height: lineSizeMax, bottom: 0, duration: Xt.vars.timeSmall, ease: 'expo.in', delay: lineDelayMax })
          gsap.to(lineBig, {
            height: lineSizeMin,
            bottom: lineSizeMax - lineSizeMin,
            duration: Xt.vars.timeMedium,
            ease: 'expo.out',
            delay: lineDelayMax + Xt.vars.timeSmall,
          })
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
        const assetMask = tr.querySelector('.hero')
        gsap.to(assetMask, {
          x: -100 * self.direction + '%',
          duration: assetMaskTimeOff,
          ease: self.detail.dragging ? assetMaskEaseDragging : assetMaskEaseOff,
        })
        const assetMaskInner = assetMask.querySelector('.hero_inner')
        gsap.to(assetMaskInner, {
          x: (100 * self.direction) / 2 + '%',
          duration: assetMaskTimeOff,
          ease: self.detail.dragging ? assetMaskEaseDragging : assetMaskEaseOff,
        })
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
