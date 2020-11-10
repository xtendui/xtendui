import { Xt } from 'xtendui'
import 'xtendui/src/core/slider'
import gsap from 'gsap'
gsap.config({ force3D: false })

// mouse events instead of click you can remove this

Xt.mount.push({
  matches: '#iframe--sequential-megamenu-v1 body input[type="checkbox"]',
  mount: object => {
    const checkChange = () => {
      const component = document.querySelector('#iframe--sequential-megamenu-v1 body .megamenu')
      if (component) {
        const self = Xt.get('xt-drop', component)
        if (self) {
          if (object.checked) {
            self.options.on = 'mouseenter'
            self.options.off = 'mouseleave'
          } else {
            self.options.on = 'click'
            self.options.off = false
          }
          self.reinit()
        }
      }
    }

    object.addEventListener('change', checkChange)
  },
})

/**
 * .megamenu drops
 */

Xt.mount.push({
  matches: '#iframe--sequential-megamenu-v1 body .megamenu', // add your own selector instead of body to contain the code
  mount: object => {
    // vars

    const contentXOn = -40
    const contentXOff = -40
    const contentTime = 0.75
    const contentDelayOn = 0.25
    const contentEase = 'quint.out'

    const designTime = 1
    const designEase = 'expo.out'

    const innerTime = 1
    const innerEase = 'expo.out'

    // init

    let self = new Xt.Drop(object, {
      elements: '.drop-container',
      elementsInner: '.drop-container > a, .drop-container > button',
      targets: '.drop-container > .drop',
      durationOn: 1000,
      durationOff: 1000,
      preventEvent: true,
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
        gsap.killTweensOf(content)
        gsap.set(content, { x: contentXOn * self.direction, opacity: 0 })
        gsap.to(content, { x: 0, opacity: 1, duration: contentTime, delay: contentDelayOn, ease: contentEase })
        // design
        const design = tr.querySelector('.design-setup')
        gsap.killTweensOf(design)
        const designOpacityCache = Xt.dataStorage.get(self.object, 'designOpacityCache') || 0
        gsap.set(design, { opacity: designOpacityCache })
        gsap.to(design, { opacity: 1, duration: designTime, ease: designEase }).eventCallback('onUpdate', () => {
          Xt.dataStorage.set(self.object, 'designOpacityCache', design.style.opacity)
        })
        // inner
        const inner = tr.querySelector('.drop-inner')
        gsap.killTweensOf(inner)
        gsap.set(inner, { height: '' })
        const innerHeight = inner.clientHeight
        const innerHeightCache = Xt.dataStorage.get(self.object, 'innerHeightCache') || 0
        gsap.set(inner, { height: innerHeightCache })
        gsap.to(inner, { height: innerHeight, duration: innerTime, ease: innerEase }).eventCallback('onUpdate', () => {
          Xt.dataStorage.set(self.object, 'innerHeightCache', inner.clientHeight)
        })
      }
    }

    self.object.addEventListener('on.xt', eventOn, true)

    // on

    const eventOff = e => {
      const tr = e.target
      // useCapture delegation
      if (self.targets.includes(tr)) {
        // eventOff after eventOn sequential interaction
        cancelAnimationFrame(Xt.dataStorage.get(self.object, 'dropmegamenuFrame'))
        Xt.dataStorage.set(
          self.object,
          'dropmegamenuFrame',
          requestAnimationFrame(() => {
            // when self.direction it's sequential interaction
            if (self.direction) {
              // content
              const content = tr.querySelector('.drop-content')
              gsap.killTweensOf(content)
              gsap.to(content, { x: contentXOff * self.direction * -1, opacity: 0, duration: contentTime, ease: contentEase, overwrite: true })
              // design
              const design = tr.querySelector('.design-setup')
              gsap.killTweensOf(design)
              gsap.set(design, { opacity: 0 })
            } else {
              // others
              for (const other of self.targets.filter(x => x !== tr)) {
                // design
                const design = other.querySelector('.design-setup')
                gsap.killTweensOf(design)
                gsap.set(design, { opacity: 0 })
                // inner
                const inner = other.querySelector('.drop-inner')
                gsap.killTweensOf(inner)
                gsap.set(inner, { height: 0 })
              }
              // content
              const content = tr.querySelector('.drop-content')
              gsap.killTweensOf(content)
              gsap.to(content, { opacity: 0, duration: contentTime, ease: contentEase })
              // design
              const design = tr.querySelector('.design-setup')
              gsap.killTweensOf(design)
              gsap.to(design, { opacity: 0, duration: designTime, ease: designEase }).eventCallback('onUpdate', () => {
                Xt.dataStorage.set(self.object, 'designOpacityCache', design.style.opacity)
              })
              // inner
              const inner = tr.querySelector('.drop-inner')
              const innerHeight = 0
              gsap.killTweensOf(inner)
              gsap.to(inner, { height: innerHeight, duration: innerTime, ease: innerEase }).eventCallback('onUpdate', () => {
                Xt.dataStorage.set(self.object, 'innerHeightCache', inner.clientHeight)
              })
            }
          })
        )
      }
    }

    self.object.addEventListener('off.xt', eventOff, true)

    // unmount

    return function () {
      self.destroy()
      self = null
    }
  },
})

/**
 * .megamenu line
 */

Xt.mount.push({
  matches: '#iframe--sequential-megamenu-v1 body .megamenu',
  mount: function (object) {
    // vars

    let lineFirst = true
    const btns = object.querySelectorAll('.btn-line')
    const line = object.querySelector('.megamenu-line')

    const lineHeight = 4
    const lineTime = 0.5
    const lineEase = 'quint.out'

    // enter

    const eventEnter = e => {
      const el = e.target
      // eventOff after eventOn sequential interaction
      cancelAnimationFrame(Xt.dataStorage.get(object, 'lineFrame'))
      Xt.dataStorage.set(
        object,
        'lineFrame',
        requestAnimationFrame(() => {
          // line
          const lineX = el.offsetLeft
          const lineY = el.getBoundingClientRect().top + el.offsetHeight
          const lineWidth = el.offsetWidth
          if (lineFirst) {
            gsap.set(line, { x: lineX, y: lineY, width: lineWidth, height: 0 })
            lineFirst = false
          }
          gsap.to(line, { x: lineX, y: lineY - lineHeight, width: lineWidth, height: lineHeight, opacity: 1, duration: lineTime, ease: lineEase })
        })
      )
    }

    for (const btn of btns) {
      btn.addEventListener('mouseenter', eventEnter, true)
    }

    // leave

    const eventLeave = function () {
      // eslint-disable-next-line no-invalid-this
      const el = this
      // eventOff after eventOn sequential interaction
      cancelAnimationFrame(Xt.dataStorage.get(object, 'lineFrame'))
      Xt.dataStorage.set(
        object,
        'lineFrame',
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            // not when drop is still open
            const dropBtnActive = object.querySelector('.drop-container.active')
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
  },
})
