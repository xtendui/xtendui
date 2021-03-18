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
    const designDelayOff = 0.1 // fix opacity when changing fast
    const designEase = 'expo.out'

    const innerTime = 1
    const innerEase = 'expo.out'

    const dropDelay = 150
    let innerHeightFinal = 0
    let innerHeightCache = 0

    // init

    let self = new Xt.Drop(object, {
      on: 'mouseenter',
      off: 'mouseleave',
      queue: false,
      duration: 1000,
      delay: dropDelay,
      preventEvent: true,
    })

    // setup

    for (const tr of self.targets) {
      const inner = tr.querySelector('.xt-drop-inner')
      gsap.set(inner, {
        height: 0,
      })
    }

    // on

    const eventOn = e => {
      const tr = e.target
      // useCapture delegation
      if (self.targets.includes(tr)) {
        // content
        const content = tr.querySelector('.xt-drop-content')
        gsap.killTweensOf(content)
        gsap.set(content, {
          x: contentXOn * self.direction,
          opacity: 0,
        })
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
        gsap.set(design, {
          opacity: 1,
        })
        // inner
        const inner = tr.querySelector('.xt-drop-inner')
        gsap.killTweensOf(inner)
        gsap.set(inner, {
          height: '',
        })
        const innerHeight = inner.clientHeight
        innerHeightFinal = innerHeight
        gsap.set(inner, {
          height: innerHeightCache,
        })
        gsap
          .to(inner, {
            height: innerHeight,
            duration: innerTime,
            ease: innerEase,
          })
          .eventCallback('onUpdate', () => {
            innerHeightCache = inner.clientHeight
          })
        // when sequential interaction
        if (self.direction) {
          // not current targets
          for (const target of self.targets.filter(x => !self.hasCurrent(x))) {
            // inner
            const inner = target.querySelector('.xt-drop-inner')
            gsap.killTweensOf(inner)
            gsap.set(inner, {
              height: innerHeightCache,
            })
            gsap.to(inner, {
              height: innerHeightFinal,
              duration: innerTime,
              ease: innerEase,
            })
          }
        }
      }
    }

    self.object.addEventListener('on.xt.drop', eventOn, true)

    // off

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
        })
        // design
        const design = tr.querySelector('.xt-design')
        gsap.killTweensOf(design)
        gsap.to(design, {
          opacity: 0,
          duration: designTime,
          ease: designEase,
          delay: designDelayOff,
        })
        // when not sequential interaction
        if (!self.direction) {
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
              innerHeightCache = inner.clientHeight
            })
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
    const btns = object.querySelectorAll('.button--line')
    const drops = object.querySelectorAll('.xt-drop-item')
    const line = object.querySelector('.megamenu-line')

    const lineHeight = 7
    const lineTime = 0.5
    const lineEase = 'quint.out'

    // enter

    const eventEnter = e => {
      let el = e.target
      if (e.type === 'on.xt.drop') {
        el = el.closest('.xt-drop-item').querySelector(':scope > .button--line')
      } else {
        btnOn = true
      }
      // line
      const lineX = el.offsetLeft
      const lineY = el.offsetTop + el.offsetHeight
      const lineWidth = el.offsetWidth
      if (lineFirst) {
        gsap.set(line, {
          x: lineX,
          y: lineY,
          width: lineWidth,
          height: 0,
          opacity: 0,
        })
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
      if (e.type === 'off.xt.drop') {
        el = el.closest('.xt-drop-item').querySelector(':scope > .button--line')
      } else {
        btnOn = false
      }
      setTimeout(() => {
        // when one button still hover
        if (btnOn) {
          return
        }
        // check open drops
        const dropBtnActive = self.elements.filter(x => self.hasCurrent(x))[0]
        if (dropBtnActive) {
          // when one drop still open
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
        } else {
          // when no drop still open
          const lineY = el.offsetTop + el.offsetHeight
          lineFirst = true
          gsap.to(line, {
            y: lineY,
            opacity: 0,
            duration: lineTime,
            ease: lineEase,
          })
        }
      }, dropDelay)
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
