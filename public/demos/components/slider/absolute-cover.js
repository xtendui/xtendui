import { Xt } from 'xtendui'
import 'xtendui/src/slider'
import gsap from 'gsap'

Xt.mount({
  matches: '.demo--slider-absolute-cover .xt-slider',
  mount: ({ ref }) => {
    // vars

    const slider = ref
    let dragDuration
    const dragEase = 'quart.out'

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
        // cover
        const cover = tr.querySelector('.hero-cover')
        gsap.killTweensOf(cover)
        gsap.to(cover, {
          x: `${100 * self.drag._ratioInverse * self.direction}%`,
          duration: dragDuration,
          ease: dragEase,
        })
      }

      self.dragger.addEventListener('drag.xt.slider', drag)

      // dragreset (set animation on drag reset, when dragging opposite position from initial dragging)

      const dragreset = () => {
        const tr = self.targets.filter(x => self.hasCurrent({ el: x }))[0]
        // cover
        const cover = tr.querySelector('.hero-cover')
        gsap.killTweensOf(cover)
        gsap.to(cover, {
          x: `${-100 * self.direction}%`,
          duration: dragDuration,
          ease: dragEase,
        })
      }

      self.dragger.addEventListener('dragreset.xt.slider', dragreset)

      // on

      const on = e => {
        const tr = e.target
        // useCapture event propagation check
        if (self.targets.includes(tr) && !self.initial) {
          // mask
          const mask = tr.querySelector('.hero')
          gsap.killTweensOf(mask)
          gsap.set(mask, {
            x: `${100 * self.drag._ratioInverse * self.direction}%`,
          })
          gsap.to(mask, {
            x: 0,
            duration: dragDuration,
            ease: dragEase,
          })
          const maskInner = tr.querySelector('.hero-inner')
          gsap.killTweensOf(maskInner)
          gsap.set(maskInner, {
            x: `${-100 * self.drag._ratioInverse * self.direction}%`,
          })
          gsap.to(maskInner, {
            x: 0,
            duration: dragDuration,
            ease: dragEase,
          })
          /***/
          // dragposition (set internal position to instant position after on)
          gsap.killTweensOf(self.drag)
          gsap.set(self.drag, {
            _position: self.drag._final,
          })
          /***/
        }
      }

      self.container.addEventListener('on.xt.slider', on, true) // useCapture event propagation

      // off

      const off = e => {
        const tr = e.target
        // useCapture event propagation check
        if (self.targets.includes(tr)) {
          // cover
          const cover = tr.querySelector('.hero-cover')
          gsap.killTweensOf(cover)
          if (!self.drag._instant) {
            gsap.set(cover, {
              x: `${100 * self.direction}%`,
            })
          }
          gsap.to(cover, {
            x: `${-100 * self.direction}%`,
            duration: dragDuration,
            ease: dragEase,
          })
          // mask
          const mask = tr.querySelector('.hero')
          gsap.killTweensOf(mask)
          gsap.to(mask, {
            x: `${-100 * self.direction}%`,
            duration: dragDuration,
            ease: dragEase,
          })
          const maskInner = tr.querySelector('.hero-inner')
          gsap.killTweensOf(maskInner)
          gsap.to(maskInner, {
            x: `${100 * self.direction}%`,
            duration: dragDuration,
            ease: dragEase,
          })
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
