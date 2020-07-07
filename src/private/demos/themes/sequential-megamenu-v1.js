import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/extensions/slider/slider.js'
import 'xtend-library/src/addons/slider/navigation-sides.js'
import 'xtend-library/src/addons/animation/propagate-interaction.js'
import gsap from 'gsap'

/**
 * mouse events instead of click you can remove this
 */

Xt.mount.push({
  matches: '#iframe--sequential-megamenu-v1 #check-sequential-megamenu-v1',
  mount: object => {
    // mouse events instead of click

    const checkChange = e => {
      const component = document.querySelector('#iframe--sequential-megamenu-v1 body .drop-megamenus')
      console.log(component)
      if (component) {
        const self = Xt.get('xt-drop', component)
        console.log(self)
        if (self) {
          if (object.checked) {
            self.options.on = 'mouseenter'
            self.options.off = 'mouseleave'
          } else {
            self.options.on = 'click'
            self.options.off = false
          }
          console.log(self, self.options)
          self.reinit()
        }
      }
    }

    object.addEventListener('change', checkChange)
  },
})

/**
 * .drop-megamenus drops
 */

Xt.mount.push({
  matches: '#iframe--sequential-megamenu-v1 body .drop-megamenus', // add your own selector instead of body to contain the code
  mount: object => {
    // vars

    const contentXOn = -35
    const contentXOff = -35
    const contentTime = Xt.vars.timeSmall
    const contentEase = 'quint.out'

    const innerTime = Xt.vars.timeSmall
    const innerEase = 'expo.out'

    // init

    let self = new Xt.Drop(object, {
      elements: '.drop-container',
      targets: '.drop-container > .drop',
      durationOn: Xt.vars.timeSmall,
      durationOff: Xt.vars.timeSmall,
      // on: 'mouseenter',
      // off: 'mouseleave',
      instant: true,
    })

    // setup

    for (const tr of self.targets) {
      const inner = tr.querySelector('.drop-inner')
      gsap.set(inner, { height: 0 })
    }

    // on

    const eventOn = e => {
      const tr = e.target
      // useCapture delegation
      if (self.targets.includes(tr)) {
        // content
        const content = tr.querySelector('.drop-content')
        gsap.set(content, { x: contentXOn * self.direction, opacity: 0 })
        gsap.to(content, { x: 0, opacity: 1, duration: contentTime, ease: contentEase })
        // inner
        const inner = tr.querySelector('.drop-inner')
        gsap.set(inner, { height: '' })
        const innerHeight = inner.clientHeight
        const innerHeightCache = Xt.dataStorage.get(self.object, 'innerHeightCache') || 0
        Xt.dataStorage.set(self.object, 'innerHeightCache', innerHeight)
        gsap.set(inner, { height: innerHeightCache, opacity: 0 })
        gsap.to(inner, { height: innerHeight, opacity: 1, duration: innerTime, ease: innerEase })
      }
    }

    self.object.addEventListener('on.xt', eventOn, true)

    // on

    const eventOff = e => {
      const tr = e.target
      // useCapture delegation
      if (self.targets.includes(tr)) {
        // eventOff after eventOn sequential interaction
        cancelAnimationFrame(Xt.dataStorage.get(self.object, 'dropMegamenusFrame'))
        Xt.dataStorage.set(
          self.object,
          'dropMegamenusFrame',
          requestAnimationFrame(() => {
            // when self.direction it's sequential interaction
            if (self.direction) {
              // content
              const content = tr.querySelector('.drop-content')
              gsap.to(content, { x: contentXOff * self.direction * -1, opacity: 0, duration: contentTime, ease: contentEase, overwrite: true })
              // inner
              const inner = tr.querySelector('.drop-inner')
              const innerHeight = inner.clientHeight
              const innerHeightCache = Xt.dataStorage.get(self.object, 'innerHeightCache') || 0
              gsap.set(inner, { height: innerHeight })
              gsap.to(inner, { height: innerHeightCache, duration: innerTime, ease: innerEase })
            } else {
              // content
              const content = tr.querySelector('.drop-content')
              gsap.to(content, { opacity: 0, duration: contentTime, ease: contentEase })
              // inner
              const inner = tr.querySelector('.drop-inner')
              const innerHeight = 0
              Xt.dataStorage.set(self.object, 'innerHeightCache', innerHeight)
              gsap.to(inner, { height: innerHeight, opacity: 0, duration: innerTime, ease: innerEase })
              // others
              for (const other of self.targets.filter(x => x !== tr)) {
                const inner = other.querySelector('.drop-inner')
                gsap.set(inner, { opacity: 0 })
              }
            }
          })
        )
      }
    }

    self.object.addEventListener('off.xt', eventOff, true)

    // unmount

    const unmount = function () {
      self.destroy()
      self = null
    }
    return unmount
  },
})

/**
 * .drop-megamenus line
 */

Xt.mount.push({
  matches: '.drop-megamenus',
  mount: function (object) {
    // vars

    let lineFirst = true
    const btns = object.querySelectorAll('.btn_megamenus')
    const line = object.querySelector('.drop-megamenus_line')

    const lineHeight = 4
    const lineTime = Xt.vars.timeSmall
    const lineEase = 'quint.out'

    // enter

    const eventEnter = e => {
      const el = e.target
      // raf fix not off on sequential
      cancelAnimationFrame(Xt.dataStorage.get(object, 'lineFrame'))
      // line
      const lineX = el.offsetLeft
      const lineY = el.getBoundingClientRect().top + el.offsetHeight
      const lineWidth = el.offsetWidth
      if (lineFirst) {
        gsap.set(line, { x: lineX, y: lineY, width: lineWidth, height: 0 })
        lineFirst = false
      }
      gsap.to(line, { x: lineX, y: lineY - lineHeight, width: lineWidth, height: lineHeight, opacity: 1, duration: lineTime, ease: lineEase })
    }

    for (const btn of btns) {
      btn.addEventListener('mouseenter', eventEnter, true)
    }

    // leave

    const eventLeave = function (e) {
      // eslint-disable-next-line no-invalid-this
      const el = this
      // eventEnter after eventLeave sequential interaction
      cancelAnimationFrame(Xt.dataStorage.get(object, 'lineFrame'))
      Xt.dataStorage.set(
        object,
        'lineFrame',
        requestAnimationFrame(() => {
          // not when drop is still open
          const dropBtnActive = object.querySelector('.drop-megamenus .drop-container > .btn.active')
          if (!dropBtnActive) {
            // line
            const lineY = el.getBoundingClientRect().top + el.offsetHeight
            lineFirst = true
            gsap.to(line, { y: lineY, opacity: 0, duration: lineTime, ease: lineEase })
          } else {
            // line
            const lineX = dropBtnActive.offsetLeft
            const lineY = dropBtnActive.getBoundingClientRect().top + dropBtnActive.offsetHeight
            const lineWidth = dropBtnActive.offsetWidth
            gsap.to(line, { x: lineX, y: lineY - lineHeight, width: lineWidth, height: lineHeight, opacity: 1, duration: lineTime, ease: lineEase })
          }
        })
      )
    }

    for (const btn of btns) {
      btn.addEventListener('mouseleave', eventLeave, true)
      const drop = btn.closest('.drop-container')
      if (drop) {
        drop.addEventListener('off.xt', eventLeave.bind(btn), true)
      }
    }

    // unmount

    const unmount = function () {}
    return unmount
  },
})
