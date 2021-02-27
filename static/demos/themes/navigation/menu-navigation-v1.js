import { Xt } from 'xtendui'
import 'xtendui/src/core/drop'
import gsap from 'gsap'

// you can remove this

Xt.mount.push({
  matches: '#iframe--menu-navigation-v1 input[type="checkbox"]',
  mount: ({ object }) => {
    const checkChange = () => {
      const component = document.querySelector('#iframe--menu-navigation-v1 .megamenu')
      if (component) {
        const self = Xt.get('xt-drop', component)
        if (self) {
          if (object.checked) {
            self.options.on = 'mouseenter'
            self.options.off = 'mouseleave'
            self.options.delay = 150
          } else {
            self.options.on = 'click'
            self.options.off = 'click'
            self.options.delay = false
          }
          self.destroy(true)
          self.reinit()
        }
      }
    }

    object.addEventListener('change', checkChange)
    requestAnimationFrame(() => {
      checkChange()
    })
  },
})

/**
 * .megamenu
 */

Xt.mount.push({
  matches: '#iframe--menu-navigation-v1 .megamenu',
  mount: ({ object }) => {
    /**
     * .megamenu drops
     */

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
      on: 'mouseenter',
      off: 'mouseleave',
      queue: false,
      duration: 1000,
      delay: 150,
      preventEvent: true,
    })

    // setup

    for (const tr of self.targets) {
      const inner = tr.querySelector('.xt-drop-inner')
      gsap.set(inner, { height: 0 })
    }

    // on

    const eventOn = e => {
      const tr = e.target
      // useCapture delegation
      if (self.targets.includes(tr)) {
        // content
        const content = tr.querySelector('.xt-drop-content')
        gsap.killTweensOf(content)
        gsap.set(content, { x: contentXOn * self.direction, opacity: 0 })
        gsap.to(content, {
          x: 0,
          opacity: 1,
          duration: contentTime,
          delay: contentDelayOn,
          ease: contentEase,
        })
        // design
        const design = tr.querySelector('.xt-design')
        gsap.killTweensOf(design)
        gsap.set(design, { opacity: 1 })
        // inner
        const inner = tr.querySelector('.xt-drop-inner')
        gsap.killTweensOf(inner)
        gsap.set(inner, { height: '' })
        const innerHeight = inner.clientHeight
        Xt.dataStorage.set(self.object, 'innerHeightFinal', innerHeight)
        const innerHeightCache = Xt.dataStorage.get(self.object, 'innerHeightCache') || 0
        gsap.set(inner, { height: innerHeightCache })
        gsap
          .to(inner, {
            height: innerHeight,
            duration: innerTime,
            ease: innerEase,
          })
          .eventCallback('onUpdate', () => {
            if (self) {
              Xt.dataStorage.set(self.object, 'innerHeightCache', inner.clientHeight)
            }
          })
      }
    }

    self.object.addEventListener('on.xt.drop', eventOn, true)

    // on

    const eventOff = e => {
      const tr = e.target
      // useCapture delegation
      if (self.targets.includes(tr)) {
        // content
        const content = tr.querySelector('.xt-drop-content')
        gsap.killTweensOf(content)
        gsap.to(content, {
          x: contentXOff * self.direction * -1,
          opacity: 0,
          duration: contentTime,
          ease: contentEase,
          overwrite: true,
        })
        // design
        const design = tr.querySelector('.xt-design')
        gsap.killTweensOf(design)
        gsap.to(design, {
          opacity: 0,
          duration: designTime,
          ease: designEase,
        })
        // when self.direction it's sequential interaction
        if (self.direction) {
          // inner
          const inner = tr.querySelector('.xt-drop-inner')
          gsap.killTweensOf(inner)
          gsap.to(inner, {
            height: Xt.dataStorage.get(self.object, 'innerHeightFinal'),
            duration: innerTime,
            ease: innerEase,
          })
        } else {
          // inner
          const inner = tr.querySelector('.xt-drop-inner')
          gsap.killTweensOf(inner)
          gsap
            .to(inner, {
              height: 0,
              duration: innerTime,
              ease: innerEase,
            })
            .eventCallback('onUpdate', () => {
              if (self) {
                Xt.dataStorage.set(self.object, 'innerHeightCache', inner.clientHeight)
              }
            })
          // others
          for (const other of self.targets.filter(x => x !== tr)) {
            // design
            const design = other.querySelector('.xt-design')
            gsap.killTweensOf(design)
            gsap.to(design, { opacity: 0, duration: designTime, ease: designEase, delay: designTime })
            // inner
            const inner = other.querySelector('.xt-drop-inner')
            gsap.killTweensOf(inner)
            gsap.set(inner, { height: 0 })
          }
        }
      }
    }

    self.object.addEventListener('off.xt.drop', eventOff, true)

    /**
     * .megamenu line
     */

    // vars

    let lineFirst = true
    let btnOn = false
    const btns = object.querySelectorAll('.xt-list > .button--line')
    const drops = object.querySelectorAll('.xt-drop-item')
    const line = object.querySelector('.megamenu-line')

    const lineHeight = 7
    const lineTime = 0.5
    const lineEase = 'quint.out'

    // enter

    const eventEnter = e => {
      let el = e.target
      if (Array.from(btns).includes(el)) {
        btnOn = true
      } else {
        el = el.closest('.xt-drop-item').querySelector(':scope > .button--line')
      }
      // raf after off.xt.drop
      requestAnimationFrame(() => {
        // line
        const lineX = el.offsetLeft
        const lineY = el.offsetTop + el.offsetHeight
        const lineWidth = el.offsetWidth
        if (lineFirst) {
          gsap.set(line, { x: lineX, y: lineY, width: lineWidth, height: 0, opacity: 0 })
          lineFirst = false
        }
        gsap.to(line, {
          x: lineX,
          y: lineY - lineHeight,
          width: lineWidth,
          height: lineHeight,
          opacity: 1,
          duration: lineTime,
          ease: lineEase,
        })
      })
    }

    for (const btn of btns) {
      btn.addEventListener('mouseenter', eventEnter)
    }

    for (const drop of drops) {
      drop.addEventListener('on.xt.drop', eventEnter)
    }

    // leave

    const eventLeave = e => {
      let el = e.target
      if (Array.from(btns).includes(el)) {
        btnOn = false
      } else {
        el = el.closest('.xt-drop-item').querySelector(':scope > .button--line')
      }
      // raf after mouseenter
      requestAnimationFrame(() => {
        // not when drop is still open
        const dropBtnActive = self.elements.filter(x => self.hasCurrent(x))[0]
        if (!dropBtnActive) {
          if (!btnOn) {
            // line
            const lineY = el.offsetTop + el.offsetHeight
            lineFirst = true
            gsap.to(line, {
              y: lineY,
              opacity: 0,
              duration: lineTime,
              ease: lineEase,
            })
          }
        } else {
          // line
          const lineX = dropBtnActive.offsetLeft
          const lineY = dropBtnActive.offsetTop + dropBtnActive.offsetHeight
          const lineWidth = dropBtnActive.offsetWidth
          gsap.to(line, {
            x: lineX,
            y: lineY - lineHeight,
            width: lineWidth,
            height: lineHeight,
            opacity: 1,
            duration: lineTime,
            ease: lineEase,
          })
        }
      })
    }

    for (const btn of btns) {
      btn.addEventListener('mouseleave', eventLeave)
    }

    for (const drop of drops) {
      drop.addEventListener('off.xt.drop', eventLeave)
    }

    // unmount

    return function () {
      self.destroy()
      self = null
    }
  },
})
