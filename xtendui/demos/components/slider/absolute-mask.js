import { Xt } from 'xtendui'
import 'xtendui/src/slider'
import gsap from 'gsap'

Xt.mount({
  matches: '.demo--slider-absolute-mask .xt-slider',
  mount: ({ ref }) => {
    // vars

    const slider = ref
    let dragDuration
    const dragEase = 'quart.out'

    const maskPercent = 100
    const maskInnerPercent = 100
    const maskInnerOpacity = 0.65

    // slider

    let selfDestroy = () => {}
    new Xt.Slider(slider, {
      duration: () => dragDuration * 1000,
      mode: 'absolute',
      loop: true,
    }).then(self => {
      // dragposition (set internal position to resume animation mid dragging)

      const dragposition = () => {
        // duration depending on instant and dragger size
        dragDuration = self.drag._instant ? 0 : Math.max(0.5, Math.min(1, Math.log(self.drag.size / 400)))
        // position animation to keep updated with animation
        gsap.killTweensOf(self.drag)
        gsap.to(self.drag, {
          _position: self.drag._final,
          duration: dragDuration,
          ease: dragEase,
        })
      }

      self.dragger.addEventListener('dragposition.xt.slider', dragposition)

      // drag (set drag frame on drag and initial position on activation)

      const drag = () => {
        const tr = self.targets.filter(x => self.hasCurrent({ el: x }))[0]
        // mask
        const mask = tr.querySelector('.hero')
        gsap.killTweensOf(mask)
        gsap.to(mask, {
          x: `${-maskPercent * self.drag._ratio * self.direction}%`,
          duration: dragDuration,
          ease: dragEase,
        })
        const maskInner = mask.querySelector('.hero-inner')
        gsap.killTweensOf(maskInner)
        gsap.to(maskInner, {
          x: `${maskInnerPercent * self.drag._ratio * self.direction}%`,
          opacity: 1 - maskInnerOpacity * self.drag._ratio,
          duration: dragDuration,
          ease: dragEase,
        })
        // incomings
        for (const incoming of self.targets.filter(x => x.classList.contains('incoming'))) {
          incoming.classList.remove('incoming', '!block')
        }
        const incomings =
          self.direction < 0 ? self.getTargets({ el: self.getPrev() }) : self.getTargets({ el: self.getNext() })
        for (const incoming of incomings) {
          incoming.classList.add('incoming', '!block')
          // mask
          const mask = incoming.querySelector('.hero')
          gsap.killTweensOf(mask)
          gsap.to(mask, {
            x: `${maskPercent * self.drag._ratioInverse * self.direction}%`,
            duration: dragDuration,
            ease: dragEase,
          })
          const maskInner = mask.querySelector('.hero-inner')
          gsap.killTweensOf(maskInner)
          gsap.to(maskInner, {
            x: `${-maskInnerPercent * self.drag._ratioInverse * self.direction}%`,
            opacity: 1 - maskInnerOpacity * self.drag._ratioInverse,
            duration: dragDuration,
            ease: dragEase,
          })
        }
      }

      self.dragger.addEventListener('drag.xt.slider', drag)

      // dragreset (set animation on drag reset, when dragging opposite position from initial dragging)

      const dragreset = () => {
        const tr = self.targets.filter(x => self.hasCurrent({ el: x }))[0]
        off({ target: tr })
        on({ target: tr })
      }

      self.dragger.addEventListener('dragreset.xt.slider', dragreset)

      // on

      const on = e => {
        const tr = e.target
        // useCapture event propagation check
        if (self.targets.includes(tr) && !self.initial) {
          // incomings
          tr.classList.remove('!block')
          // mask
          const mask = tr.querySelector('.hero')
          gsap.killTweensOf(mask)
          gsap.set(mask, {
            x: `${maskPercent * self.drag._ratioInverse * self.direction}%`,
          })
          gsap.to(mask, {
            x: 0,
            duration: dragDuration,
            ease: dragEase,
          })
          const maskInner = mask.querySelector('.hero-inner')
          gsap.killTweensOf(maskInner)
          gsap.set(maskInner, {
            x: `${-maskInnerPercent * self.drag._ratioInverse * self.direction}%`,
            opacity: 1 - maskInnerOpacity * self.drag._ratioInverse,
          })
          gsap.to(maskInner, {
            x: 0,
            opacity: 1,
            duration: dragDuration,
            ease: dragEase,
          })
        }
      }

      self.container.addEventListener('on.xt.slider', on, true) // useCapture event propagation

      // off

      const off = e => {
        const tr = e.target
        // useCapture event propagation check
        if (self.targets.includes(tr)) {
          // mask
          const mask = tr.querySelector('.hero')
          gsap.killTweensOf(mask)
          gsap.to(mask, {
            x: `${-maskPercent * self.direction}%`,
            duration: dragDuration,
            ease: dragEase,
          })
          const maskInner = mask.querySelector('.hero-inner')
          gsap.killTweensOf(maskInner)
          gsap.to(maskInner, {
            x: `${maskInnerPercent * self.direction}%`,
            opacity: 1 - maskInnerOpacity,
            duration: dragDuration,
            ease: dragEase,
          })
          // incomings
          const incomings = self.targets.filter(x => x.classList.contains('incoming'))
          for (const incoming of incomings) {
            incoming.classList.remove('incoming')
            // mask
            const mask = incoming.querySelector('.hero')
            gsap.killTweensOf(mask)
            gsap
              .to(mask, {
                x: `${-maskPercent * self.direction}%`,
                duration: dragDuration,
                ease: dragEase,
              })
              .eventCallback('onComplete', () => {
                incoming.classList.remove('!block')
              })
            const maskInner = mask.querySelector('.hero-inner')
            gsap.killTweensOf(maskInner)
            gsap.to(maskInner, {
              x: `${maskInnerPercent * self.direction}%`,
              opacity: 1 - maskInnerOpacity,
              duration: dragDuration,
              ease: dragEase,
            })
          }
        }
      }

      self.container.addEventListener('off.xt.slider', off, true) // useCapture event propagation

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
