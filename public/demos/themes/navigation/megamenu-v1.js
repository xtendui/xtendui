import { Xt } from 'xtendui'
import 'xtendui/src/drop'
import gsap from 'gsap'

Xt.mount({
  matches: '.demo--megamenu-v1 .megamenu',
  mount: ({ ref }) => {
    // vars

    const megamenu = ref
    const backdrop = megamenu.querySelector('.megamenu-backdrop')

    const contentXOn = -40
    const contentXOff = -40
    const contentTime = 0.5
    const contentEase = 'quint.out'

    const designTime = 0.5
    const designDelayOff = 0.25 // fix opacity see below
    const designEase = 'expo.out'

    const innerTime = 0.5
    const innerEase = 'expo.out'

    let innerHeightFinal = 0
    let innerHeightCache = 0

    // init

    let selfDestroy = () => {}
    new Xt.Drop(megamenu, {
      mouseParent: true,
      queue: false,
      duration: 500,
      preventEvent: true,
      zIndex: {
        targets: {
          factor: 1,
        },
      },
      // activated by switcher
      //on: 'mouseenter focus',
      //off: 'mouseleave',
      //delay: 100,
    }).then(self => {
      // setup

      for (const tr of self.targets) {
        const inner = tr.querySelector('[data-xt-drop-inner]')
        gsap.set(inner, {
          height: 0,
        })
      }

      // on

      const on = e => {
        const tr = e.target
        // useCapture event propagation check
        if (self.targets.includes(tr)) {
          // backdrop
          if (backdrop) {
            Xt.on({ el: backdrop })
          }
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
            ease: contentEase,
          })
          // design
          const design = tr.querySelector('.xt-design')
          gsap.killTweensOf(design)
          gsap.set(design, {
            opacity: 0,
          })
          gsap.to(design, {
            opacity: 1,
            duration: designTime,
            ease: designEase,
          })
          // inner
          const inner = tr.querySelector('[data-xt-drop-inner]')
          gsap.killTweensOf(inner)
          gsap.set(inner, {
            opacity: 1,
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
          /***/
          // when sequential interaction
          if (self.direction) {
            // not current targets
            for (const tr of self.targets.filter(x => !self.hasCurrent({ el: x }))) {
              // inner
              const inner = tr.querySelector('[data-xt-drop-inner]')
              gsap.killTweensOf(inner)
              gsap.set(inner, {
                opacity: 1,
                height: innerHeightCache,
              })
              gsap.to(inner, {
                height: innerHeightFinal,
                duration: innerTime,
                ease: innerEase,
              })
            }
          }
          /***/
        }
      }

      self.container.addEventListener('on.xt.drop', on, true) // useCapture event propagation

      // off

      const off = e => {
        const tr = e.target
        // useCapture event propagation check
        if (self.targets.includes(tr)) {
          // backdrop
          if (backdrop) {
            Xt.off({ el: backdrop })
          }
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
          /***/
          // when not sequential interaction
          if (!self.direction) {
            // animate all targets height
            for (const tr of self.targets.filter(x => Xt.visible({ el: x }))) {
              // inner
              const inner = tr.querySelector('[data-xt-drop-inner]')
              gsap.killTweensOf(inner)
              gsap.set(inner, {
                height: innerHeightCache,
              })
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
          /***/
        }
      }

      self.container.addEventListener('off.xt.drop', off, true) // useCapture event propagation

      // leave

      const leave = e => {
        const tr = e.target
        // enhancement when want to close the drop on mouseleave also when using 'click'
        if (self.options.on === 'click') {
          tr.dispatchEvent(new CustomEvent('off.trigger.xt.drop'))
        }
      }

      for (const tr of self.targets) {
        tr.addEventListener('mouseleave', leave)
      }

      // destroy

      selfDestroy = () => {
        self.destroy()
        self = null
      }
    })

    // unmount

    return () => {
      selfDestroy()
    }
  },
})

Xt.mount({
  matches: '.demo--megamenu-v1 .megamenu',
  mount: ({ ref }) => {
    // vars

    const megamenu = ref
    const btns = megamenu.querySelectorAll('.button--line')
    const drops = megamenu.querySelectorAll('[data-xt-drop-element]')
    const line = megamenu.querySelector('.megamenu-line')

    const dropDelay = 100
    const lineHeight = 7
    const lineTime = 0.5
    const lineEase = 'quint.out'
    let lineFirst = true
    /***/
    let btnOn = false
    /***/

    // enter

    const enter = e => {
      let el = e.target
      /***/
      if (e.type === 'on.xt.drop') {
        el = el.parentNode.querySelector(':scope > .button--line')
      } else {
        btnOn = true
      }
      /***/
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
      btn.addEventListener('mouseenter', enter)
    }

    for (const drop of drops) {
      drop.addEventListener('on.xt.drop', enter)
    }

    // leave

    const leave = e => {
      let el = e.target
      /***/
      if (e.type === 'off.xt.drop') {
        el = el.parentNode.querySelector(':scope > .button--line')
      } else {
        btnOn = false
      }
      /***/
      /***/
      // same delay as drop
      /***/
      setTimeout(() => {
        /***/
        // when one button still hover
        if (btnOn) {
          return
        }
        /***/
        // check open drops
        Xt.get({ name: 'xt-drop', el: megamenu }).then(self => {
          const dropBtnActive = self.elements.filter(x => self.hasCurrent({ el: x }))[0]
          if (dropBtnActive) {
            /***/
            // when one drop still open
            /***/
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
            /***/
            // when no drop still open
            /***/
            const lineY = el.offsetTop + el.offsetHeight
            lineFirst = true
            gsap.to(line, {
              y: lineY,
              height: 0,
              opacity: 0,
              duration: lineTime,
              ease: lineEase,
            })
          }
        })
      }, dropDelay)
    }

    for (const btn of btns) {
      btn.addEventListener('mouseleave', leave)
    }

    for (const drop of drops) {
      drop.addEventListener('off.xt.drop', leave)
    }
  },
})

Xt.mount({
  matches: '.demo--megamenu-v1',
  mount: ({ ref }) => {
    /* switcher for demo purpose remove this */

    // vars

    const megamenu = ref.querySelector('.megamenu')
    const switcher = ref.querySelector('input[type="checkbox"]')

    // change

    const change = () => {
      Xt.get({ name: 'xt-drop', el: megamenu }).then(self => {
        if (switcher.checked) {
          self.options.on = 'mouseenter focus'
          self.options.off = 'mouseleave'
          self.options.delay = 100
        } else {
          self.options.on = 'click'
          self.options.off = 'click'
          self.options.delay = false
        }
        self.destroy({ weak: true })
        self.reinit()
      })
    }

    switcher.addEventListener('change', change)

    requestAnimationFrame(() => {
      change()
    })
  },
})
